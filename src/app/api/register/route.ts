import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = '8787373786';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = 'onboarding@gregwalkervolley.com';

interface RegistrationPayload {
  campId: string;
  campName: string;
  camperFirstName: string;
  camperLastName: string;
  dateOfBirth: string;
  gradYear: string;
  position: string;
  skillLevel: string;
  tshirtSize: string;
  schoolTeam?: string;
  parentFirstName: string;
  parentLastName: string;
  relationship: string;
  parentEmail: string;
  parentPhone: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelationship: string;
  medicalConditions?: string;
  medications?: string;
  activityRestrictions?: string;
  parentSignatureName: string;
  waiverAgreed: boolean;
  basePrice: number;
  currentPrice: number;
}

function generateReferenceId(): string {
  return `GWV-${Math.floor(1000 + Math.random() * 9000)}`;
}

async function sendTelegram(text: string): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN) {
    console.warn('[register] TELEGRAM_BOT_TOKEN not set — skipping Telegram notification');
    console.log('[register] Telegram message would have been:\n' + text);
    return;
  }
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );
    if (!res.ok) {
      const body = await res.text();
      console.error('[register] Telegram API error', res.status, body);
    }
  } catch (err) {
    console.error('[register] Telegram fetch failed', err);
  }
}

async function sendConfirmationEmail(
  to: string,
  data: RegistrationPayload,
  referenceId: string
): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn('[register] RESEND_API_KEY not set — skipping confirmation email');
    return;
  }
  const subject = `Registration received — ${data.campName} (${referenceId})`;
  const html = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0C1B2A;">
      <div style="background: #0C1B2A; padding: 32px 24px; text-align: center;">
        <h1 style="color: #D4A843; font-family: 'Bebas Neue', Arial, sans-serif; margin: 0; font-size: 2rem; letter-spacing: 0.02em;">GREG WALKER VOLLEY</h1>
      </div>
      <div style="background: #F0EDE8; padding: 32px 24px;">
        <h2 style="color: #0C1B2A; margin: 0 0 12px;">You&rsquo;re registered!</h2>
        <p style="line-height: 1.6;">Thanks for registering <strong>${data.camperFirstName} ${data.camperLastName}</strong> for <strong>${data.campName}</strong>.</p>
        <div style="background: #fff; border-radius: 10px; padding: 18px 22px; margin: 20px 0; border: 1px solid #E5E1DC;">
          <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #B8962E; margin-bottom: 6px;">Reference Number</div>
          <div style="font-family: 'Bebas Neue', Arial, sans-serif; font-size: 1.6rem; color: #0C1B2A;">${referenceId}</div>
        </div>
        <h3 style="color: #0C1B2A; margin: 24px 0 8px;">Payment — Due Within 48 Hours</h3>
        <p style="line-height: 1.6; margin: 0 0 8px;">Total: <strong>$${data.currentPrice}</strong></p>
        <ul style="line-height: 1.8; padding-left: 18px;">
          <li><strong>Venmo:</strong> @GregWalkerVolley</li>
          <li><strong>Zelle:</strong> gregwalkervolley@gmail.com</li>
          <li><strong>Check:</strong> Payable to &ldquo;Greg Walker Volley&rdquo; — reply for mailing address</li>
        </ul>
        <p style="line-height: 1.6; font-size: 0.9rem; color: #6B6560;">Please include the reference number <strong>${referenceId}</strong> with your payment so we can match it to the registration.</p>
        <p style="line-height: 1.6; margin-top: 24px;">Your spot is reserved upon submission. Payment is due within 48 hours to confirm registration.</p>
        <p style="margin-top: 24px;">Questions? Reply to this email or contact <a href="mailto:gregwalkervolley@gmail.com" style="color: #B8962E;">gregwalkervolley@gmail.com</a>.</p>
      </div>
      <div style="background: #0C1B2A; padding: 16px; text-align: center; color: #9A958E; font-size: 0.8rem;">
        © 2026 Creative Performance Consulting LLC · gregwalkervolley.com
      </div>
    </div>
  `;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Greg Walker Volley <${FROM_EMAIL}>`,
        to: [to],
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error('[register] Resend API error', res.status, body);
    }
  } catch (err) {
    console.error('[register] Resend fetch failed', err);
  }
}

function buildTelegramMessage(d: RegistrationPayload, referenceId: string): string {
  const medical = [
    d.medicalConditions?.trim() && `Conditions: ${d.medicalConditions.trim()}`,
    d.medications?.trim() && `Medications: ${d.medications.trim()}`,
    d.activityRestrictions?.trim() && `Restrictions: ${d.activityRestrictions.trim()}`,
  ]
    .filter(Boolean)
    .join(' | ') || 'None';

  return [
    `🏐 NEW REGISTRATION — ${d.campName}`,
    '',
    `👤 ${d.camperFirstName} ${d.camperLastName}`,
    `🎓 Class of ${d.gradYear} | ${d.position} | ${d.skillLevel}`,
    `👕 Shirt: ${d.tshirtSize}`,
    d.schoolTeam?.trim() ? `🏫 School/Club: ${d.schoolTeam.trim()}` : null,
    '',
    `👨‍👩‍👧 Parent: ${d.parentFirstName} ${d.parentLastName} (${d.relationship})`,
    `📧 ${d.parentEmail}`,
    `📱 ${d.parentPhone}`,
    '',
    `🆘 Emergency: ${d.emergencyName} — ${d.emergencyPhone} (${d.emergencyRelationship})`,
    '',
    `💰 Price: $${d.currentPrice} (payment due within 48hrs)`,
    `📋 Reference: ${referenceId}`,
    '',
    `⚕️ Medical notes: ${medical}`,
    '',
    `✍️ E-signed by: ${d.parentSignatureName}`,
  ]
    .filter((line): line is string => line !== null)
    .join('\n');
}

function validate(d: Partial<RegistrationPayload>): string | null {
  const required: (keyof RegistrationPayload)[] = [
    'campId',
    'campName',
    'camperFirstName',
    'camperLastName',
    'dateOfBirth',
    'gradYear',
    'position',
    'skillLevel',
    'tshirtSize',
    'parentFirstName',
    'parentLastName',
    'relationship',
    'parentEmail',
    'parentPhone',
    'emergencyName',
    'emergencyPhone',
    'emergencyRelationship',
    'parentSignatureName',
  ];
  for (const key of required) {
    const v = d[key];
    if (typeof v !== 'string' || v.trim().length === 0) {
      return `Missing required field: ${key}`;
    }
  }
  if (!d.waiverAgreed) return 'Waiver agreement is required';
  if (typeof d.currentPrice !== 'number') return 'Missing price';
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as Partial<RegistrationPayload>;
    const err = validate(data);
    if (err) {
      return NextResponse.json({ success: false, error: err }, { status: 400 });
    }
    const payload = data as RegistrationPayload;
    const referenceId = generateReferenceId();
    const telegramMsg = buildTelegramMessage(payload, referenceId);

    await Promise.all([
      sendTelegram(telegramMsg),
      sendConfirmationEmail(payload.parentEmail, payload, referenceId),
    ]);

    return NextResponse.json({ success: true, referenceId });
  } catch (error) {
    console.error('[register] Unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'GWV Registration API' });
}
