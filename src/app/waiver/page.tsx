export const metadata = {
  title: '2026 Participant Waiver | Greg Walker Volleyball',
  description: 'Read the full 2026 GWV Participant Waiver, Release, Assumption of Risk, Indemnification & Consent Agreement before registering for camp.',
};

const Section = ({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid #E5E1DC' }}>
    {number && (
      <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 6 }}>
        Section {number}
      </div>
    )}
    <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#0C1B2A', marginBottom: 12, marginTop: 0 }}>
      {title}
    </h2>
    <div style={{ color: '#4A4540', fontSize: '.92rem', lineHeight: 1.75 }}>
      {children}
    </div>
  </div>
);

const P = ({ children, caps }: { children: React.ReactNode; caps?: boolean }) => (
  <p style={{ marginBottom: 12, marginTop: 0, textTransform: caps ? 'uppercase' : undefined, fontWeight: caps ? 600 : undefined }}>
    {children}
  </p>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ marginBottom: 6 }}>{children}</li>
);

export default function WaiverPage() {
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,27,42,.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,168,67,.12)', height: 68, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FAFAFA', textDecoration: 'none' }}>
            Greg Walker <span style={{ color: '#D4A843' }}>Volley</span>
          </a>
          <a href="/#camps" style={{ color: '#C8C4BE', fontSize: '.85rem', textDecoration: 'none' }}>← Back to Camps</a>
        </div>
      </nav>

      <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#F0EDE8', minHeight: '100vh', paddingTop: 68 }}>

        {/* HERO */}
        <div style={{ background: '#0C1B2A', padding: '48px 28px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>
              Legal Document · Version 2.0
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FAFAFA', marginBottom: 12, lineHeight: 1.05 }}>
              2026 Participant Waiver<br /><span style={{ color: '#D4A843' }}>& Release Agreement</span>
            </h1>
            <p style={{ color: '#C8C4BE', fontSize: '.95rem', maxWidth: 560, margin: '0 auto' }}>
              Creative Performance Consulting LLC d/b/a Greg Walker Volley<br />
              Multi-State Edition — MA / NC / TN / FL
            </p>
            <div style={{ marginTop: 20, display: 'inline-block', background: 'rgba(232,114,58,.12)', border: '1px solid rgba(232,114,58,.3)', color: '#E8723A', padding: '8px 20px', borderRadius: 50, fontSize: '.78rem', fontWeight: 700 }}>
              ⚠️ READ CAREFULLY BEFORE SIGNING DURING REGISTRATION
            </div>
          </div>
        </div>

        {/* DOCUMENT BODY */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 28px 80px' }}>

          <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '16px 20px', marginBottom: 36, fontSize: '.88rem', color: '#664d03' }}>
            <strong>Important Notice:</strong> This waiver is presented electronically during the RegFox registration process and must be signed by a parent or legal guardian for all participants under 18. By completing registration, you confirm you have read this entire document and agree to its terms.
          </div>

          <Section title="Parties to This Agreement" number="1">
            <P>This Participant Waiver, Release of Liability, Assumption of Risk, Indemnification, Medical Authorization, and Consent Agreement (the &ldquo;Agreement&rdquo;) is entered into by and among:</P>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
              <Li>Creative Performance Consulting LLC d/b/a Greg Walker Volley (&ldquo;CPC&rdquo; or &ldquo;GWV&rdquo;), and its parent G. Walker &amp; Co Ventures LLC, together with their respective owners, officers, members, managers, employees, independent contractors, coaches, staff, agents, representatives, volunteers, successors, and assigns;</Li>
              <Li>Greg Walker, individually and in his professional capacity;</Li>
              <Li>Any camp coaches, assistant coaches, clinicians, trainers, contractors, volunteers, or support staff working with or on behalf of GWV or CPC;</Li>
              <Li>Any host school, college, gymnasium, athletic facility, court provider, site owner, site operator, property owner, or affiliated organization where the Activity occurs (each a &ldquo;Host Facility&rdquo;); and</Li>
              <Li>The Participant and, if the Participant is under 18 years of age, the Participant&apos;s parent or legal guardian (&ldquo;Parent/Guardian&rdquo;).</Li>
            </ul>
            <P>Collectively, the parties listed above (other than the Participant and Parent/Guardian) are referred to as the &ldquo;Released Parties.&rdquo;</P>
          </Section>

          <Section title="Description of Activity" number="3">
            <P>The Participant seeks to participate in one or more volleyball-related programs operated by GWV (collectively, the &ldquo;Activity&rdquo;), including but not limited to:</P>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
              <Li>Volleyball camps, satellite camps, and clinics;</Li>
              <Li>Positional training, skill instruction, small-group, and individual lessons;</Li>
              <Li>Warm-ups, stretching, strength and conditioning, agility, jumping, diving, serving, passing, setting, attacking, blocking, defense, scrimmages, competition, drills, demonstrations, classroom and video sessions, and team-building;</Li>
              <Li>Use of indoor and outdoor athletic facilities, gymnasiums, courts, equipment, nets, balls, training aids, and adjacent spaces.</Li>
            </ul>
          </Section>

          <Section title="Voluntary Participation" number="4">
            <P>Participation in the Activity is entirely voluntary. The Participant is physically, mentally, and emotionally capable of participating in volleyball training and related athletic activity. The Participant is not required to perform any drill, exercise, movement, competition, or activity that the Participant believes is unsafe or beyond the Participant&apos;s ability, and may stop participation and notify a coach or staff member at any time.</P>
          </Section>

          <Section title="Express Assumption of Inherent and Unavoidable Risks" number="5">
            <P caps>Volleyball and athletic training involve inherent and unavoidable risks that cannot be eliminated, even with the exercise of reasonable care by the Released Parties. I, on behalf of myself and the Participant, knowingly, freely, and voluntarily assume all such risks, including those listed below and all others not specified, whether known or unknown, foreseeable or unforeseeable.</P>
            <P>These inherent risks include, but are not limited to:</P>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
              <Li>Sprains, strains, bruises, cuts, abrasions, blisters, contusions, and overuse injuries;</Li>
              <Li>Muscle, tendon, ligament, and joint injuries to the knees, ankles, shoulders, back, neck, wrists, hands, fingers, and feet;</Li>
              <Li>Concussions, head injuries, traumatic brain injuries, eye injuries, facial injuries, dental injuries, and other neurological injuries;</Li>
              <Li>Collisions with other athletes, coaches, equipment, walls, bleachers, poles, net systems, referee stands, benches, chairs, floors, or other objects;</Li>
              <Li>Falls, slips, trips, awkward landings, diving and pursuit injuries, and contact with the playing surface;</Li>
              <Li>Heat illness, dehydration, exhaustion, dizziness, fainting, asthma, allergic reactions, cardiac events, respiratory events, and other medical episodes;</Li>
              <Li>Exposure to communicable and infectious diseases (including but not limited to influenza, COVID-19 and successor variants, MRSA, and other contagions);</Li>
              <Li>Equipment failure or malfunction, facility hazards, court surface conditions, lighting, ventilation, environmental conditions, and weather-related risks;</Li>
              <Li>Emotional distress, anxiety, frustration, or stress associated with athletic performance or competition;</Li>
              <Li>The negligent acts or omissions of other participants, spectators, host-site personnel, volunteers, or third parties;</Li>
              <Li><strong>Permanent disability, paralysis, and DEATH.</strong></Li>
            </ul>
          </Section>

          <Section title="Pre-Existing Conditions — Representation & Warranty" number="6">
            <P>I represent and warrant that the Participant has no medical, physical, mental, or emotional condition that would contraindicate participation in the Activity, except those fully and accurately disclosed in writing in the registration form. I assume all risk of aggravation, exacerbation, or worsening of any pre-existing condition arising from participation in the Activity.</P>
          </Section>

          <Section title="Release of Liability (Including Negligence)" number="7">
            <P caps>To the fullest extent permitted by applicable law, I, on behalf of myself, the Participant, my spouse, heirs, assigns, personal representatives, next of kin, and legal representatives, hereby release, waive, discharge, and forever acquit the Released Parties from any and all claims, demands, causes of action, damages, losses, costs, expenses, attorneys&apos; fees, liabilities, and judgments of every kind or nature, whether known or unknown, arising out of or related to the Participant&apos;s participation in the Activity — including without limitation claims based on the negligence of any of the Released Parties.</P>
            <P>This Release applies to claims for, among other things: personal injury; illness; property damage; lost or stolen property; medical expenses; disability; death; emotional distress; the negligence of the Released Parties; and the acts or omissions of other participants, spectators, host-site personnel, volunteers, or third parties.</P>
            <P>This Release does NOT apply to claims that cannot legally be released under applicable state law, such as claims arising from gross negligence, recklessness, willful or wanton misconduct, or intentional misconduct.</P>
          </Section>

          <Section title="Covenant Not to Sue" number="8">
            <P caps>In addition to the Release in Section 7, I covenant and agree not to initiate, file, maintain, or prosecute any lawsuit, claim, or arbitration demand against any of the Released Parties arising out of or related to the Participant&apos;s participation in the Activity, except as expressly permitted by this Agreement or required by applicable law.</P>
          </Section>

          <Section title="Indemnification & Hold Harmless" number="9">
            <P caps>To the fullest extent permitted by applicable law, I agree to indemnify, defend, and hold harmless the Released Parties from and against any and all claims, actions, damages, liabilities, costs, expenses, and attorneys&apos; fees arising out of or related to:</P>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
              <Li>The Participant&apos;s participation in the Activity;</Li>
              <Li>The Participant&apos;s conduct, acts, or omissions;</Li>
              <Li>Any injury or damage caused by the Participant to another person or property;</Li>
              <Li>Any breach of this Agreement;</Li>
              <Li>Any inaccurate, incomplete, or misleading medical, emergency, or registration information; and</Li>
              <Li>Any claim brought by or on behalf of the Participant, Parent/Guardian, family member, heir, representative, or third party against the Released Parties.</Li>
            </ul>
          </Section>

          <Section title="Insurance, Primary Coverage & Subrogation Waiver" number="10">
            <P>I represent that the Participant has health insurance covering injury or illness arising from athletic activity, and I agree that the Participant&apos;s own health, medical, accident, disability, life, or other personal insurance shall serve as the PRIMARY source of coverage for any injury or loss arising out of participation in the Activity. The Released Parties&apos; insurance, if any, is excess and contingent only.</P>
            <P>Any claim must be tendered in writing to CPC at 40 Grant Ave., Northampton, MA 01060 within thirty (30) days of the event giving rise to the claim.</P>
          </Section>

          <Section title="Concussion & Head Injury Acknowledgment" number="12">
            <P>I have been informed about the signs, symptoms, and risks of concussions and traumatic brain injuries. I agree that:</P>
            <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
              <Li>If the Participant exhibits any signs or symptoms of a concussion or head injury, the Participant will be IMMEDIATELY removed from the Activity;</Li>
              <Li>The Participant will not return to play on the same day as a suspected concussion under any circumstances;</Li>
              <Li>Return to participation will require WRITTEN MEDICAL CLEARANCE from a licensed healthcare provider;</Li>
              <Li>CPC follows a strict &ldquo;when in doubt, sit them out&rdquo; policy.</Li>
            </ul>
          </Section>

          <Section title="Medical Fitness, Disclosure & HIPAA Authorization" number="13">
            <P>I certify that the Participant is medically and physically able to participate in volleyball and related athletic activity. I authorize the Released Parties, camp staff, host-facility personnel, athletic trainers, EMTs, paramedics, physicians, hospitals, and other healthcare providers to obtain, provide, and authorize medical treatment for the Participant as reasonably necessary in the event of injury, illness, or emergency.</P>
            <P>I accept financial responsibility for all medical costs incurred.</P>
          </Section>

          <Section title="SafeSport, Background Checks & Abuse Prevention" number="14">
            <P>CPC requires all coaches and staff to maintain current SafeSport certification, pass a background check, and hold active USA Volleyball registration. CPC follows a Two-Deep Leadership policy at all times. All coaches and staff are mandatory reporters under applicable law.</P>
            <P>Any concerns about SafeSport violations or inappropriate conduct should be reported to: <strong>safesport.org</strong> or the U.S. Center for SafeSport.</P>
          </Section>

          <Section title="Code of Conduct & Removal" number="15">
            <P>All participants are expected to conduct themselves in a safe, respectful, and sportsmanlike manner. CPC reserves the right to remove any participant who engages in unsafe, disrespectful, discriminatory, bullying, or non-compliant behavior. Removal for cause does not entitle the participant or Parent/Guardian to a refund.</P>
          </Section>

          <Section title="Photographs, Video & NIL/Right of Publicity" number="16">
            <P>Subject to the media consent election made during registration, I grant GWV/CPC a perpetual, irrevocable, royalty-free, worldwide license to use the Participant&apos;s name, image, likeness, voice, and biographical information (&ldquo;NIL&rdquo;) in connection with the promotion, marketing, and documentation of GWV/CPC programs. Participants (or parents on their behalf) may opt out during registration.</P>
          </Section>

          <Section title="Refund & Cancellation Policy" number="17">
            <P>All registration fees are non-refundable unless CPC cancels the camp. In the event of CPC cancellation, a full refund will be issued. Transfers to another camp session may be available subject to availability and a transfer fee. No refund will be issued for participant no-shows, early departure, injury during camp, or removal for cause.</P>
          </Section>

          <Section title="Arbitration & Jury Trial Waiver" number="22">
            <P caps>All disputes arising out of or relating to this Agreement or the Participant&apos;s participation in the Activity shall be resolved by final and binding arbitration administered by JAMS or AAA, conducted in Hampshire County, Massachusetts, under the applicable arbitration rules. I waive my right to a jury trial. I waive my right to participate in a class action or class arbitration. The arbitrator&apos;s award shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.</P>
          </Section>

          <Section title="Governing Law & Severability" number="23">
            <P>This Agreement is governed by the law of the state in which the Activity occurs (MA, NC, TN, or FL as applicable). State-specific addenda apply. If any provision of this Agreement is found unenforceable, the remaining provisions continue in full force.</P>
          </Section>

          {/* CTA */}
          <div style={{ background: '#0C1B2A', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FAFAFA', marginBottom: 10 }}>
              Ready to Register?
            </h3>
            <p style={{ color: '#C8C4BE', fontSize: '.9rem', marginBottom: 20, maxWidth: 480, margin: '0 auto 20px' }}>
              The full waiver text above is presented again during registration and must be signed electronically before payment is processed.
            </p>
            <a href="/#camps" style={{ display: 'inline-block', background: '#D4A843', color: '#0C1B2A', padding: '14px 36px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}>
              View 2026 Camps →
            </a>
          </div>

          <div style={{ marginTop: 32, padding: '16px 20px', background: '#fff', borderRadius: 8, border: '1px solid #E5E1DC', fontSize: '.82rem', color: '#9A958E' }}>
            <strong style={{ color: '#4A4540' }}>Full Document:</strong> This page contains the key operative sections of the 2026 GWV Participant Waiver v2.0. The complete document including all state-specific addenda, Annex A (Medical &amp; Emergency Form), and execution provisions is presented during RegFox registration. For a copy of the full agreement, contact{' '}
            <a href="mailto:gregwalkervolley@gmail.com" style={{ color: '#D4A843' }}>gregwalkervolley@gmail.com</a>.
            <br /><br />
            Creative Performance Consulting LLC · 40 Grant Ave., Northampton, MA 01060
          </div>
        </div>

        <footer style={{ background: '#0C1B2A', padding: '28px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ color: '#9A958E', fontSize: '.8rem' }}>© 2026 Creative Performance Consulting LLC · <a href="/" style={{ color: '#C8C4BE', textDecoration: 'none' }}>gregwalkervolley.com</a></div>
        </footer>
      </div>
    </>
  );
}
