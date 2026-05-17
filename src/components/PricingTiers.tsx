'use client';

import { useEffect, useState } from 'react';

interface PricingTiersProps {
  basePrice?: number; // default 325
  smithClinics?: boolean; // Smith clinics have different base ($100)
}

const TIERS = [
  { label: 'Early Bird',  deadline: new Date('2026-06-01T00:00:00'), increase: 0,  badge: '🟢 Best Rate' },
  { label: 'Standard',   deadline: new Date('2026-06-15T00:00:00'), increase: 25, badge: '🟡 Saving $25' },
  { label: 'Late',        deadline: new Date('2026-07-01T00:00:00'), increase: 50, badge: '🟠 Saving $50' },
  { label: 'Last Chance', deadline: null,                            increase: 75, badge: '🔴 Full Price' },
];

function getCurrentTierIndex(): number {
  const now = new Date();
  for (let i = 0; i < TIERS.length - 1; i++) {
    if (TIERS[i].deadline && now < TIERS[i].deadline!) return i;
  }
  return TIERS.length - 1;
}

function getDaysUntil(date: Date): number {
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

const gold = '#D4A843';
const navy = '#0C1B2A';

export default function PricingTiers({ basePrice = 325, smithClinics = false }: PricingTiersProps) {
  const [currentTier, setCurrentTier] = useState(getCurrentTierIndex);

  useEffect(() => {
    const id = setInterval(() => setCurrentTier(getCurrentTierIndex()), 60000);
    return () => clearInterval(id);
  }, []);

  const activeIncrease = TIERS[currentTier].increase;
  const currentPrice = basePrice + activeIncrease;
  const nextTier = currentTier < TIERS.length - 1 ? TIERS[currentTier + 1] : null;
  const nextPrice = nextTier ? basePrice + nextTier.increase : null;
  const daysLeft = nextTier?.deadline ? getDaysUntil(nextTier.deadline) : null;

  return (
    <div style={{ marginBottom: 28 }}>
      {/* Current price callout */}
      <div style={{
        background: currentTier === 0 ? 'rgba(16,185,129,.08)' : currentTier === 1 ? 'rgba(251,191,36,.08)' : 'rgba(239,68,68,.08)',
        border: `1px solid ${currentTier === 0 ? 'rgba(16,185,129,.3)' : currentTier === 1 ? 'rgba(251,191,36,.3)' : 'rgba(239,68,68,.3)'}`,
        borderRadius: 10,
        padding: '14px 18px',
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'nowrap' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: gold, lineHeight: 1, flexShrink: 0 }}>
            ${currentPrice}
          </div>
          <div style={{ fontSize: '.82rem', fontWeight: 700, color: navy, textAlign: 'right' }}>
            {TIERS[currentTier].badge}
          </div>
        </div>
        {daysLeft !== null && daysLeft > 0 && (
          <div style={{ fontSize: '.78rem', color: '#6B6560', marginTop: 6 }}>
            Price increases to <strong>${nextPrice}</strong> in <strong>{daysLeft} day{daysLeft !== 1 ? 's' : ''}</strong>
          </div>
        )}
        {daysLeft === 0 && (
          <div style={{ fontSize: '.78rem', color: '#dc2626', marginTop: 6, fontWeight: 700 }}>
            ⚠️ Price increases to ${nextPrice} tomorrow!
          </div>
        )}
      </div>

      {/* Tier table */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #E5E1DC', overflow: 'hidden' }}>
        <div style={{ background: navy, padding: '10px 18px' }}>
          <span style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: gold }}>
            Registration Pricing Schedule
          </span>
        </div>
        {[
          { label: 'Early Bird', window: 'Register before June 1', price: basePrice },
          { label: 'Standard',   window: 'June 1 – June 14',       price: basePrice + 25 },
          { label: 'Late',        window: 'June 15 – June 30',      price: basePrice + 50 },
          { label: 'Last Chance', window: 'July 1 & after',         price: basePrice + 75 },
        ].map((tier, i) => {
          const isActive = i === currentTier;
          const isPast = i < currentTier;
          return (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '11px 18px',
              borderBottom: i < 3 ? '1px solid #E5E1DC' : 'none',
              background: isActive ? 'rgba(212,168,67,.06)' : isPast ? '#FAFAFA' : 'transparent',
              opacity: isPast ? 0.5 : 1,
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: isActive ? 700 : 500, color: isPast ? '#9A958E' : navy, fontSize: '.88rem' }}>
                  {tier.label}
                </div>
                <div style={{ color: '#9A958E', fontSize: '.76rem', marginTop: 1 }}>{tier.window}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {isActive && (
                  <span style={{ background: gold, color: navy, padding: '2px 10px', borderRadius: 50, fontSize: '.72rem', fontWeight: 800 }}>
                    NOW
                  </span>
                )}
                {isPast && (
                  <span style={{ color: '#9A958E', fontSize: '.72rem' }}>expired</span>
                )}
                <span style={{ fontWeight: 700, color: isActive ? gold : isPast ? '#9A958E' : '#4A4540', fontSize: '.95rem', minWidth: 48, textAlign: 'right' }}>
                  ${tier.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
