'use client';

import { useMemo, useState } from 'react';
import WaiverContent from './WaiverContent';

interface RegistrationFormProps {
  campId: string;
  campName: string;
  basePrice: number;
  dates?: string;
  status?: 'open' | 'filling' | 'coming-soon';
  extraNote?: string;
}

const navy = '#0C1B2A';
const navyMid = '#152840';
const gold = '#D4A843';
const goldLight = '#E8C96A';
const goldDim = '#B8962E';
const cream = '#F0EDE8';
const lightGray = '#E5E1DC';
const warmGray = '#9A958E';

const POSITIONS = ['Setter', 'Outside Hitter', 'Middle Blocker', 'Opposite', 'Libero/DS'];
const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Elite'];
const SHIRT_SIZES = ['YS', 'YM', 'YL', 'S', 'M', 'L', 'XL', 'XXL'];
const GRAD_YEARS = ['2025', '2026', '2027', '2028', '2029', '2030', '2031'];

const PRICING_TIERS = [
  { label: 'Early Bird (before June 1)', deadline: new Date('2026-06-01T00:00:00'), increase: 0 },
  { label: 'Standard (June 1 – 14)', deadline: new Date('2026-06-15T00:00:00'), increase: 25 },
  { label: 'Late (June 15 – 30)', deadline: new Date('2026-07-01T00:00:00'), increase: 50 },
  { label: 'Last Chance (July 1+)', deadline: null as Date | null, increase: 75 },
];

function getCurrentTierIndex(now: Date = new Date()): number {
  for (let i = 0; i < PRICING_TIERS.length - 1; i++) {
    const d = PRICING_TIERS[i].deadline;
    if (d && now < d) return i;
  }
  return PRICING_TIERS.length - 1;
}



interface FormState {
  camperFirstName: string;
  camperLastName: string;
  dateOfBirth: string;
  gradYear: string;
  position: string;
  skillLevel: string;
  tshirtSize: string;
  schoolTeam: string;
  parentFirstName: string;
  parentLastName: string;
  relationship: string;
  parentEmail: string;
  parentPhone: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelationship: string;
  medicalConditions: string;
  medications: string;
  activityRestrictions: string;
  parentSignatureName: string;
  waiverAgreed: boolean;
}

const INITIAL_FORM: FormState = {
  camperFirstName: '',
  camperLastName: '',
  dateOfBirth: '',
  gradYear: '',
  position: '',
  skillLevel: '',
  tshirtSize: '',
  schoolTeam: '',
  parentFirstName: '',
  parentLastName: '',
  relationship: '',
  parentEmail: '',
  parentPhone: '',
  emergencyName: '',
  emergencyPhone: '',
  emergencyRelationship: '',
  medicalConditions: '',
  medications: '',
  activityRestrictions: '',
  parentSignatureName: '',
  waiverAgreed: false,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: `1.5px solid ${lightGray}`,
  borderRadius: 8,
  fontSize: '0.95rem',
  fontFamily: "'DM Sans', system-ui, sans-serif",
  background: '#fff',
  color: navy,
  outline: 'none',
  boxSizing: 'border-box',
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

const sectionHeading: React.CSSProperties = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '1.5rem',
  color: navy,
  marginBottom: 4,
  letterSpacing: '0.02em',
};

export default function RegistrationForm({
  campId,
  campName,
  basePrice,
  dates,
  status = 'open',
  extraNote,
}: RegistrationFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [touchedStep, setTouchedStep] = useState<{ [k: number]: boolean }>({});

  const currentTierIndex = useMemo(() => getCurrentTierIndex(), []);
  const currentPrice = basePrice + PRICING_TIERS[currentTierIndex].increase;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const step1Valid =
    form.camperFirstName.trim() &&
    form.camperLastName.trim() &&
    form.dateOfBirth.trim() &&
    form.gradYear.trim() &&
    form.position.trim() &&
    form.skillLevel.trim() &&
    form.tshirtSize.trim();

  const step2Valid =
    form.parentFirstName.trim() &&
    form.parentLastName.trim() &&
    form.relationship.trim() &&
    form.parentEmail.trim() &&
    form.parentPhone.trim() &&
    form.emergencyName.trim() &&
    form.emergencyPhone.trim() &&
    form.emergencyRelationship.trim();

  const step3Valid =
    form.parentSignatureName.trim() && form.waiverAgreed;

  function goNext() {
    setTouchedStep((t) => ({ ...t, [step]: true }));
    if (step === 1 && !step1Valid) return;
    if (step === 2 && !step2Valid) return;
    if (step < 3) setStep((s) => (s + 1) as 1 | 2 | 3);
  }

  function goBack() {
    if (step > 1) setStep((s) => (s - 1) as 1 | 2 | 3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouchedStep((t) => ({ ...t, 3: true }));
    if (!step3Valid || !step1Valid || !step2Valid) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campId,
          campName,
          basePrice,
          currentPrice,
          ...form,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || `Server error: ${res.status}`);
      }
      setReferenceId(data.referenceId);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  }

  // Confirmation view
  if (referenceId) {
    return (
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          border: `2px solid ${gold}`,
          padding: '44px 32px',
          maxWidth: 640,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>🏐</div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '2.4rem',
            color: navy,
            marginBottom: 8,
            letterSpacing: '0.02em',
          }}
        >
          Registration Submitted!
        </h2>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: 18 }}>
          <strong>{form.camperFirstName} {form.camperLastName}</strong> is registered for{' '}
          <strong>{campName}</strong>.
        </p>
        <div
          style={{
            background: cream,
            borderRadius: 10,
            padding: '18px 22px',
            margin: '12px auto 22px',
            maxWidth: 360,
          }}
        >
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: goldDim,
              marginBottom: 4,
            }}
          >
            Reference Number
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '2rem',
              color: navy,
              letterSpacing: '0.04em',
            }}
          >
            {referenceId}
          </div>
        </div>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: 14 }}>
          You will receive an email confirmation at <strong>{form.parentEmail}</strong>.{' '}
          <strong>Payment is due within 48 hours</strong> to confirm your spot.
        </p>
        <div
          style={{
            background: navy,
            borderRadius: 10,
            padding: '18px 22px',
            color: '#fff',
            textAlign: 'left',
            margin: '20px auto 0',
          }}
        >
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: gold,
              marginBottom: 10,
            }}
          >
            Payment — ${currentPrice}
          </div>
          <div style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#C8C4BE' }}>
            <div><strong style={{ color: '#fff' }}>Venmo:</strong> @GregWalkerVolley</div>
            <div><strong style={{ color: '#fff' }}>Zelle:</strong> gregwalkervolley@gmail.com</div>
            <div><strong style={{ color: '#fff' }}>Check:</strong> &ldquo;Greg Walker Volley&rdquo; — mailing address in confirmation email</div>
          </div>
          <div style={{ marginTop: 10, fontSize: '0.82rem', color: '#9A958E' }}>
            Please include reference <strong style={{ color: gold }}>{referenceId}</strong> with your payment.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#fff',
        borderRadius: 16,
        border: `1.5px solid ${lightGray}`,
        padding: '32px 28px',
        maxWidth: 720,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: goldDim,
            marginBottom: 6,
          }}
        >
          {campName}
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '2rem',
            color: navy,
            letterSpacing: '0.02em',
            lineHeight: 1.05,
          }}
        >
          Camp Registration
        </div>
        {dates && (
          <div style={{ color: warmGray, fontSize: '0.9rem', marginTop: 4 }}>
            {dates}
            {status === 'coming-soon' && ' · Dates TBA — early registration secures your spot'}
          </div>
        )}
      </div>

      {/* Step indicator */}
      <StepIndicator step={step} />

      {/* STEP 1 — Athlete */}
      {step === 1 && (
        <div>
          <div style={sectionHeading}>Step 1 — Athlete Info</div>
          <p style={{ color: warmGray, fontSize: '0.88rem', marginBottom: 22 }}>
            Tell us about the camper.
          </p>

          <Row>
            <Field label="Camper First Name *">
              <input
                style={inputStyle}
                value={form.camperFirstName}
                onChange={(e) => update('camperFirstName', e.target.value)}
                required
                autoComplete="given-name"
              />
            </Field>
            <Field label="Camper Last Name *">
              <input
                style={inputStyle}
                value={form.camperLastName}
                onChange={(e) => update('camperLastName', e.target.value)}
                required
                autoComplete="family-name"
              />
            </Field>
          </Row>

          <Row>
            <Field label="Date of Birth *">
              <input
                type="date"
                style={inputStyle}
                value={form.dateOfBirth}
                onChange={(e) => update('dateOfBirth', e.target.value)}
                required
              />
            </Field>
            <Field label="Graduation Year *">
              <select
                style={inputStyle}
                value={form.gradYear}
                onChange={(e) => update('gradYear', e.target.value)}
                required
              >
                <option value="">Select…</option>
                {GRAD_YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </Field>
          </Row>

          <Row>
            <Field label="Primary Position *">
              <select
                style={inputStyle}
                value={form.position}
                onChange={(e) => update('position', e.target.value)}
                required
              >
                <option value="">Select…</option>
                {POSITIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Skill Level *">
              <select
                style={inputStyle}
                value={form.skillLevel}
                onChange={(e) => update('skillLevel', e.target.value)}
                required
              >
                <option value="">Select…</option>
                {SKILL_LEVELS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </Row>

          <Row>
            <Field label="T-Shirt Size *">
              <select
                style={inputStyle}
                value={form.tshirtSize}
                onChange={(e) => update('tshirtSize', e.target.value)}
                required
              >
                <option value="">Select…</option>
                {SHIRT_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="School / Club Team">
              <input
                style={inputStyle}
                value={form.schoolTeam}
                onChange={(e) => update('schoolTeam', e.target.value)}
                placeholder="Optional"
              />
            </Field>
          </Row>

          {touchedStep[1] && !step1Valid && (
            <ErrorBanner>Please fill in all required fields.</ErrorBanner>
          )}

          <NavRow>
            <span />
            <PrimaryButton onClick={goNext} type="button" disabled={false}>
              Next: Parent &amp; Medical →
            </PrimaryButton>
          </NavRow>
        </div>
      )}

      {/* STEP 2 — Parent / Medical */}
      {step === 2 && (
        <div>
          <div style={sectionHeading}>Step 2 — Parent / Guardian &amp; Medical</div>
          <p style={{ color: warmGray, fontSize: '0.88rem', marginBottom: 22 }}>
            Contact and medical info for the registered camper.
          </p>

          <Row>
            <Field label="Parent / Guardian First Name *">
              <input
                style={inputStyle}
                value={form.parentFirstName}
                onChange={(e) => update('parentFirstName', e.target.value)}
                required
              />
            </Field>
            <Field label="Parent / Guardian Last Name *">
              <input
                style={inputStyle}
                value={form.parentLastName}
                onChange={(e) => update('parentLastName', e.target.value)}
                required
              />
            </Field>
          </Row>

          <Field label="Relationship to Participant *">
            <input
              style={inputStyle}
              value={form.relationship}
              onChange={(e) => update('relationship', e.target.value)}
              placeholder="Mother, Father, Guardian, etc."
              required
            />
          </Field>

          <Row>
            <Field label="Parent Email *">
              <input
                type="email"
                style={inputStyle}
                value={form.parentEmail}
                onChange={(e) => update('parentEmail', e.target.value)}
                required
                autoComplete="email"
              />
            </Field>
            <Field label="Parent Phone *">
              <input
                type="tel"
                style={inputStyle}
                value={form.parentPhone}
                onChange={(e) => update('parentPhone', e.target.value)}
                required
                autoComplete="tel"
              />
            </Field>
          </Row>

          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: gold,
              marginTop: 24,
              marginBottom: 14,
              paddingBottom: 8,
              borderBottom: `1px solid ${cream}`,
            }}
          >
            Emergency Contact
          </div>

          <Row>
            <Field label="Emergency Contact Name *">
              <input
                style={inputStyle}
                value={form.emergencyName}
                onChange={(e) => update('emergencyName', e.target.value)}
                required
              />
            </Field>
            <Field label="Emergency Contact Phone *">
              <input
                type="tel"
                style={inputStyle}
                value={form.emergencyPhone}
                onChange={(e) => update('emergencyPhone', e.target.value)}
                required
              />
            </Field>
          </Row>

          <Field label="Emergency Contact Relationship *">
            <input
              style={inputStyle}
              value={form.emergencyRelationship}
              onChange={(e) => update('emergencyRelationship', e.target.value)}
              placeholder="Parent, Grandparent, Aunt/Uncle, etc."
              required
            />
          </Field>

          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: gold,
              marginTop: 24,
              marginBottom: 14,
              paddingBottom: 8,
              borderBottom: `1px solid ${cream}`,
            }}
          >
            Medical (Optional)
          </div>

          <Field label="Medical Conditions / Allergies">
            <textarea
              style={{ ...inputStyle, resize: 'vertical', minHeight: 72 }}
              value={form.medicalConditions}
              onChange={(e) => update('medicalConditions', e.target.value)}
              placeholder="List any conditions or allergies the coaching staff should know about."
            />
          </Field>

          <Field label="Current Medications">
            <textarea
              style={{ ...inputStyle, resize: 'vertical', minHeight: 60 }}
              value={form.medications}
              onChange={(e) => update('medications', e.target.value)}
            />
          </Field>

          <Field label="Activity Restrictions">
            <textarea
              style={{ ...inputStyle, resize: 'vertical', minHeight: 60 }}
              value={form.activityRestrictions}
              onChange={(e) => update('activityRestrictions', e.target.value)}
            />
          </Field>

          {touchedStep[2] && !step2Valid && (
            <ErrorBanner>Please fill in all required fields.</ErrorBanner>
          )}

          <NavRow>
            <SecondaryButton onClick={goBack} type="button">
              ← Back
            </SecondaryButton>
            <PrimaryButton onClick={goNext} type="button">
              Next: Waiver &amp; Payment →
            </PrimaryButton>
          </NavRow>
        </div>
      )}

      {/* STEP 3 — Waiver / Payment */}
      {step === 3 && (
        <div>
          <div style={sectionHeading}>Step 3 — Waiver &amp; Payment</div>
          <p style={{ color: warmGray, fontSize: '0.88rem', marginBottom: 22 }}>
            Review and sign the participant waiver, then submit. Payment instructions follow.
          </p>

          <div style={{ ...labelStyle, marginBottom: 6 }}>Participant Waiver * — scroll to read the full agreement before signing</div>
          <div
            style={{
              height: 480,
              overflowY: 'scroll',
              background: cream,
              border: `1.5px solid ${lightGray}`,
              borderRadius: 8,
              padding: '16px 18px',
              marginBottom: 6,
            }}
          >
            <WaiverContent />
          </div>
          <div style={{ marginBottom: 18, fontSize: '0.78rem', color: warmGray }}>
            Full document also available at{' '}
            <a
              href="/waiver"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: goldDim, fontWeight: 600 }}
            >
              gregwalkervolley.com/waiver
            </a>
          </div>

          <Field label="Parent / Guardian Printed Name * — type your full name as your electronic signature">
            <input
              style={inputStyle}
              value={form.parentSignatureName}
              onChange={(e) => update('parentSignatureName', e.target.value)}
              required
              placeholder="Full legal name"
            />
          </Field>

          <label
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              padding: '14px 16px',
              background: cream,
              border: `1.5px solid ${form.waiverAgreed ? gold : lightGray}`,
              borderRadius: 8,
              cursor: 'pointer',
              marginBottom: 22,
            }}
          >
            <input
              type="checkbox"
              checked={form.waiverAgreed}
              onChange={(e) => update('waiverAgreed', e.target.checked)}
              required
              style={{ marginTop: 3, accentColor: gold, width: 18, height: 18, flexShrink: 0 }}
            />
            <span style={{ fontSize: '0.9rem', lineHeight: 1.5, color: navy }}>
              I have read the full participant waiver above and agree to all terms, including the release of liability, assumption of risk, indemnification, medical authorization, and arbitration clause.
            </span>
          </label>

          {/* Payment block */}
          <div
            style={{
              background: navy,
              borderRadius: 12,
              padding: 22,
              color: '#fff',
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: gold,
                marginBottom: 8,
              }}
            >
              Your Price Today
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '3rem',
                  color: gold,
                  lineHeight: 1,
                }}
              >
                ${currentPrice}
              </div>
              <div style={{ color: goldLight, fontSize: '0.85rem' }}>
                {PRICING_TIERS[currentTierIndex].label}
              </div>
            </div>

            <div
              style={{
                marginTop: 14,
                paddingTop: 14,
                borderTop: '1px solid rgba(255,255,255,.1)',
                fontSize: '0.8rem',
                color: '#C8C4BE',
                lineHeight: 1.7,
              }}
            >
              <div style={{ marginBottom: 4 }}>
                <strong style={{ color: '#fff' }}>Price tiers:</strong>
              </div>
              <div>Before June 1: ${basePrice}</div>
              <div>June 1 – 14: ${basePrice + 25}</div>
              <div>June 15 – 30: ${basePrice + 50}</div>
              <div>July 1+: ${basePrice + 75}</div>
            </div>
          </div>

          <div
            style={{
              background: '#fff',
              border: `1.5px solid ${lightGray}`,
              borderRadius: 12,
              padding: 22,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: goldDim,
                marginBottom: 12,
              }}
            >
              How to Pay
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li>
                <strong>Venmo:</strong> @GregWalkerVolley
              </li>
              <li>
                <strong>Zelle:</strong> gregwalkervolley@gmail.com
              </li>
              <li>
                <strong>Check:</strong> Payable to &ldquo;Greg Walker Volley&rdquo; — mailing
                address provided upon confirmation
              </li>
            </ul>
          </div>

          <div
            style={{
              background: 'rgba(212,168,67,.1)',
              border: '1px solid rgba(212,168,67,.3)',
              borderRadius: 8,
              padding: '12px 16px',
              fontSize: '0.86rem',
              color: '#7A5C10',
              marginBottom: 22,
            }}
          >
            Your spot is reserved upon submission. <strong>Payment is due within 48 hours</strong>{' '}
            to confirm registration.
          </div>

          {extraNote && (
            <div
              style={{
                background: cream,
                border: `1px solid ${lightGray}`,
                borderRadius: 8,
                padding: '10px 14px',
                fontSize: '0.84rem',
                color: '#555',
                marginBottom: 18,
              }}
            >
              {extraNote}
            </div>
          )}

          {touchedStep[3] && !step3Valid && (
            <ErrorBanner>Type your name and check the agreement box to submit.</ErrorBanner>
          )}

          {submitError && <ErrorBanner>{submitError}</ErrorBanner>}

          <NavRow>
            <SecondaryButton onClick={goBack} type="button" disabled={submitting}>
              ← Back
            </SecondaryButton>
            <PrimaryButton type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit Registration →'}
            </PrimaryButton>
          </NavRow>
        </div>
      )}
    </form>
  );
}

function StepIndicator({ step }: { step: 1 | 2 | 3 }) {
  const steps = [
    { n: 1, label: 'Athlete' },
    { n: 2, label: 'Parent / Medical' },
    { n: 3, label: 'Waiver & Payment' },
  ];
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 28,
        flexWrap: 'wrap',
      }}
    >
      {steps.map((s, i) => {
        const isActive = s.n === step;
        const isDone = s.n < step;
        return (
          <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 50,
                background: isActive ? gold : isDone ? navyMid : '#EFECE6',
                color: isActive ? navy : isDone ? '#fff' : warmGray,
                fontWeight: 700,
                fontSize: '0.82rem',
              }}
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '0.95rem',
                  letterSpacing: '0.04em',
                }}
              >
                {s.n}/3
              </span>
              <span style={{ fontSize: '0.78rem' }}>{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <span style={{ color: lightGray, fontSize: '0.9rem' }}>›</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
        gap: 14,
      }}
    >
      {children}
    </div>
  );
}

function NavRow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        marginTop: 22,
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function PrimaryButton({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      style={{
        background: disabled ? '#C8C4BE' : gold,
        color: navy,
        border: 'none',
        borderRadius: 8,
        padding: '14px 26px',
        fontWeight: 800,
        fontSize: '0.95rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      style={{
        background: 'transparent',
        color: navy,
        border: `1.5px solid ${lightGray}`,
        borderRadius: 8,
        padding: '12px 22px',
        fontWeight: 700,
        fontSize: '0.9rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}

function ErrorBanner({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'rgba(239,68,68,.08)',
        border: '1px solid rgba(239,68,68,.3)',
        borderRadius: 8,
        padding: '10px 14px',
        color: '#dc2626',
        fontSize: '0.86rem',
        marginTop: 12,
        marginBottom: 4,
      }}
    >
      {children}
    </div>
  );
}
