import { NextRequest, NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Camp data
const CAMPS = [
  { name: 'Green Hill High School', city: 'Nashville, TN', type: 'Satellite', dates: 'TBA', time: '9 AM – 4 PM', price: '$325', status: 'Confirmed' },
  { name: 'Bishop Verot High School', city: 'Fort Myers, FL', type: 'Satellite', dates: 'TBA', time: '9 AM – 4 PM', price: '$325', status: 'Confirmed' },
  { name: 'Covenant Day School', city: 'Matthews, NC', type: 'Satellite', dates: 'TBA', time: '9 AM – 4 PM', price: '$325', status: 'Filling Up' },
  { name: 'Carmel Christian School', city: 'Matthews, NC', type: 'Satellite', dates: 'TBA', time: '9 AM – 4 PM', price: '$325', status: 'Open' },
  { name: 'Deerfield Academy', city: 'Deerfield, MA', type: 'Satellite', dates: 'TBA', time: '9 AM – 4 PM', price: '$325', status: 'Open' },
  { name: 'Smith College Sunday Clinics', city: 'Northampton, MA', type: 'Clinics', dates: 'Aug 2, 9, 16, 23', time: '9 AM – 12 PM', price: '$100', status: 'Open' },
  { name: 'Nike Camp — Smith College', city: 'Northampton, MA', type: 'Nike/USSC', dates: 'TBA', time: 'Varies', price: 'Varies', status: 'Filling Up' },
];

function statusEmoji(status: string): string {
  switch (status) {
    case 'Confirmed': return '✅';
    case 'Filling Up': return '🔥';
    case 'Open': return '🟢';
    default: return '⚪';
  }
}

async function sendMessage(chatId: number, text: string) {
  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  });
}

function handleCommand(command: string): string {
  const cmd = command.split('@')[0].toLowerCase().trim();

  switch (cmd) {
    case '/start':
    case '/help':
      return [
        '🏐 <b>GWV Registration Bot</b>',
        '',
        'I send real-time registration alerts when athletes sign up for Greg Walker Volleyball camps.',
        '',
        '<b>Commands:</b>',
        '/camps — View all 2026 camp locations & status',
        '/status — Registration summary',
        '/pricing — Camp pricing breakdown',
        '/help — Show this message',
        '',
        '🌐 <b>gregwalkervolley.com</b>',
      ].join('\n');

    case '/camps':
      const campList = CAMPS.map(
        (c) => `${statusEmoji(c.status)} <b>${c.name}</b>\n   📍 ${c.city} · ${c.dates} · ${c.time}\n   💰 ${c.price} · ${c.status}`
      ).join('\n\n');
      return `🏐 <b>2026 Camp Locations</b>\n\n${campList}\n\n🌐 gregwalkervolley.com`;

    case '/status':
      return [
        '🏐 <b>Registration Status</b>',
        '',
        '📊 Registration tracking is active.',
        'New signups are posted to this chat in real time.',
        '',
        CAMPS.map((c) => `${statusEmoji(c.status)} ${c.name} — ${c.status}`).join('\n'),
        '',
        'Detailed counts will populate as Jotform registrations come in.',
      ].join('\n');

    case '/pricing':
      return [
        '💰 <b>2026 Camp Pricing</b>',
        '',
        '<b>Satellite Camps (4-day):</b> $325',
        '   9 AM – 4 PM daily · All levels',
        '   Locations: Nashville, Fort Myers, Matthews, Deerfield',
        '',
        '<b>Smith College Sunday Clinics:</b> $100',
        '   9 AM – 12 PM · 4 sessions (Aug 2, 9, 16, 23)',
        '',
        '<b>Nike Volleyball Camp — Smith College:</b>',
        '   Registration via US Sports Camps',
        '   ussportscamps.com/volleyball/nike',
        '',
        '🌐 gregwalkervolley.com',
      ].join('\n');

    default:
      return '🏐 I\'m the GWV Registration Bot. Type /help to see what I can do.';
  }
}

export async function POST(request: NextRequest) {
  try {
    const update = await request.json();

    // Handle messages with text
    const message = update.message;
    if (message?.text) {
      const text = message.text.trim();
      const chatId = message.chat.id;

      // Only respond to commands (starts with /)
      if (text.startsWith('/')) {
        const response = handleCommand(text);
        await sendMessage(chatId, response);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Telegram webhook error:', error);
    return NextResponse.json({ ok: true }); // Always return 200 to Telegram
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'GWV Telegram Bot Webhook' });
}
