import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendTelegramMessage(text: string) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return;
  }
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  });
}

function extractField(data: Record<string, string>, ...keys: string[]): string {
  for (const key of keys) {
    // Try exact key
    if (data[key]) return data[key];
    // Try case-insensitive partial match
    const found = Object.entries(data).find(([k]) =>
      k.toLowerCase().includes(key.toLowerCase())
    );
    if (found && found[1]) return found[1];
  }
  return '—';
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, string>;

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      // Jotform sends application/x-www-form-urlencoded
      const formData = await request.formData();
      data = Object.fromEntries(
        Array.from(formData.entries()).map(([k, v]) => [k, String(v)])
      );
    }

    // Parse Jotform's nested rawRequest if present
    let raw: Record<string, unknown> = {};
    if (data.rawRequest) {
      try {
        raw = JSON.parse(data.rawRequest);
      } catch {
        raw = {};
      }
    }

    const campLocation =
      extractField(data, 'campLocation', 'camp') ||
      (raw.q3_campLocation as string) ||
      '—';

    // Determine payment based on camp type
    let payment = '$325';
    if (campLocation.toLowerCase().includes('sunday') || campLocation.toLowerCase().includes('clinic')) {
      payment = '$100';
    } else if (campLocation.toLowerCase().includes('nike')) {
      payment = 'Nike/USSC — see US Sports Camps';
    }

    // Extract athlete name (Jotform may send as "First Last" or separate fields)
    const firstName =
      extractField(data, 'firstName', 'first') ||
      (raw.q4_athleteName as Record<string, string>)?.first ||
      '';
    const lastName =
      extractField(data, 'lastName', 'last') ||
      (raw.q4_athleteName as Record<string, string>)?.last ||
      '';
    const athleteName = `${firstName} ${lastName}`.trim() || extractField(data, 'athleteName', 'name');

    const parentName = extractField(data, 'parentName', 'guardian', 'parentGuardian');
    const email = extractField(data, 'email');
    const phone = extractField(data, 'phone', 'phoneNumber');

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const message = [
      '🏐 <b>NEW CAMP REGISTRATION</b>',
      '',
      `<b>Athlete:</b> ${athleteName}`,
      `<b>Camp:</b> ${campLocation}`,
      `<b>Payment:</b> ${payment}`,
      '',
      `<b>Parent/Guardian:</b> ${parentName}`,
      `<b>Email:</b> ${email}`,
      `<b>Phone:</b> ${phone}`,
      '',
      `📅 ${timestamp}`,
    ].join('\n');

    await sendTelegramMessage(message);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// Jotform may also send GET for verification
export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'GWV Camp Registration Webhook' });
}
