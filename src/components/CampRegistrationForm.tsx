'use client';

import { useState } from 'react';

export interface CampRegistrationFormProps {
  campLocation: string;
  campPrice: string;
  paymentNote?: string;
}

const POSITIONS = ['Setter', 'Outside Hitter', 'Middle Blocker', 'Opposite', 'Libero / DS', 'Right Side'];
const GRADES = ['8th', '9th (Freshman)', '10th (Sophomore)', '11th (Junior)', '12th (Senior)'];

const gold = '#D4A843';
const navy = '#0C1B2A';
const cream = '#F0EDE8';

export default function CampRegistrationForm({ campLocation, campPrice, paymentNote }: CampRegistrationFormProps) {
  const [step, setStep] = useState<'form' | 'submitting' | 'success' | 'error'>('form');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    school: '',
    grade: '',
    position: '',
    level: '',
    parentName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const required = (v: string) => v.trim().length > 0;

  const valid =
    required(form.firstName) &&
    required(form.lastName) &&
    required(form.school) &&
    required(form.grade) &&
    required(form.position) &&
    required(form.level) &&
    required(form.parentName) &&
    required(form.email) &&
    required(form.phone);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setStep('submitting');
    try {
      const body = new URLSearchParams({
        campLocation,
        firstName: form.firstName,
        lastName: form.lastName,
        school: form.school,
        grade: form.grade,
        position: form.position,
        level: form.level,
        parentName: form.parentName,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
      });
      const res = await fetch('/api/webhook/jotform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setStep('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
      setStep('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1.5px solid #E5E1DC',
    borderRadius: 8,
    fontSize: '0.95rem',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    background: '#fff',
    color: navy,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#6B6560',
    marginBottom: 6,
  };

  const fieldWrap: React.CSSProperties = { marginBottom: 18 };

  if (step === 'success') {
    return (
      <div style={{ background: '#fff', borderRadius: 16, border: '1.5px solid #D4EED4', padding: '48px 36px', textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>🏐</div>
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: navy, marginBottom: 12 }}>
          You&rsquo;re Registered!
        </h3>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
          <strong>{form.firstName} {form.lastName}</strong> is registered for <strong>{campLocation}</strong>.
          Greg&rsquo;s team will follow up within 24 hours with a payment link and confirmation details.
        </p>
        {paymentNote && (
          <div style={{ background: 'rgba(212,168,67,.1)', border: '1px solid rgba(212,168,67,.3)', borderRadius: 10, padding: '14px 20px', fontSize: '0.88rem', color: '#7A5C10', fontWeight: 600 }}>
            💰 {paymentNote}
          </div>
        )}
        <p style={{ marginTop: 20, color: '#888', fontSize: '0.83rem' }}>
          Questions? Email <a href="mailto:gregwalkervolley@gmail.com" style={{ color: gold }}>gregwalkervolley@gmail.com</a>
        </p>
      </div>
    );
  }

  if (step === 'error') {
    return (
      <div style={{ background: '#fff', borderRadius: 16, border: '1.5px solid #EED4D4', padding: '40px 32px', textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: navy, marginBottom: 10 }}>Submission Failed</h3>
        <p style={{ color: '#777', marginBottom: 20 }}>There was an error submitting your registration. Please try again or email us directly.</p>
        <p style={{ fontSize: '0.78rem', color: '#aaa', marginBottom: 24 }}>{errorMsg}</p>
        <button onClick={() => setStep('form')} style={{ background: gold, color: navy, border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
          Try Again
        </button>
        <p style={{ marginTop: 16, fontSize: '0.85rem', color: '#888' }}>
          Or email <a href="mailto:gregwalkervolley@gmail.com" style={{ color: gold }}>gregwalkervolley@gmail.com</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, border: '1.5px solid #E5E1DC', padding: '40px 36px', maxWidth: 620, margin: '0 auto' }}>
      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.9rem', color: navy, marginBottom: 6 }}>
        Register — {campPrice}
      </h3>
      <p style={{ color: '#888', fontSize: '0.88rem', marginBottom: 28 }}>
        Fill out the form below. Payment instructions will be sent after confirmation.
      </p>

      {/* Athlete info */}
      <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: gold, marginBottom: 14, paddingBottom: 8, borderBottom: `1px solid ${cream}` }}>
        Athlete Info
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
        <div>
          <label style={labelStyle}>First Name *</label>
          <input style={inputStyle} value={form.firstName} onChange={set('firstName')} required placeholder="First name" />
        </div>
        <div>
          <label style={labelStyle}>Last Name *</label>
          <input style={inputStyle} value={form.lastName} onChange={set('lastName')} required placeholder="Last name" />
        </div>
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle}>School *</label>
        <input style={inputStyle} value={form.school} onChange={set('school')} required placeholder="Current high school or middle school" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 18 }}>
        <div>
          <label style={labelStyle}>Grade (Fall 2026) *</label>
          <select style={inputStyle} value={form.grade} onChange={set('grade')} required>
            <option value="">Select…</option>
            {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Position *</label>
          <select style={inputStyle} value={form.position} onChange={set('position')} required>
            <option value="">Select…</option>
            {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Level *</label>
          <select style={inputStyle} value={form.level} onChange={set('level')} required>
            <option value="">Select…</option>
            <option value="Varsity">Varsity</option>
            <option value="JV">JV</option>
            <option value="Club Only">Club Only</option>
          </select>
        </div>
      </div>

      {/* Parent / Guardian */}
      <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: gold, marginBottom: 14, paddingBottom: 8, borderBottom: `1px solid ${cream}`, marginTop: 8 }}>
        Parent / Guardian
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle}>Parent / Guardian Name *</label>
        <input style={inputStyle} value={form.parentName} onChange={set('parentName')} required placeholder="Full name" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
        <div>
          <label style={labelStyle}>Email *</label>
          <input style={inputStyle} type="email" value={form.email} onChange={set('email')} required placeholder="email@example.com" />
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input style={inputStyle} type="tel" value={form.phone} onChange={set('phone')} required placeholder="(555) 555-5555" />
        </div>
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle}>Notes (optional)</label>
        <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 72 }} value={form.notes} onChange={set('notes')} placeholder="Any questions, injuries, or accommodations to mention?" />
      </div>

      <div style={{ background: 'rgba(212,168,67,.08)', border: '1px solid rgba(212,168,67,.2)', borderRadius: 10, padding: '12px 18px', fontSize: '0.83rem', color: '#7A5C10', marginBottom: 24 }}>
        📍 <strong>Camp:</strong> {campLocation} &nbsp;·&nbsp; <strong>Price:</strong> {campPrice}
        {paymentNote && <><br /><span style={{ marginTop: 4, display: 'block' }}>💰 {paymentNote}</span></>}
      </div>

      <button
        type="submit"
        disabled={!valid || step === 'submitting'}
        style={{
          width: '100%',
          padding: '16px',
          background: valid && step !== 'submitting' ? gold : '#C8C4BE',
          color: navy,
          border: 'none',
          borderRadius: 10,
          fontWeight: 800,
          fontSize: '1rem',
          letterSpacing: '0.02em',
          cursor: valid && step !== 'submitting' ? 'pointer' : 'not-allowed',
          transition: 'background 0.2s',
        }}
      >
        {step === 'submitting' ? 'Submitting…' : `Submit Registration →`}
      </button>
    </form>
  );
}
