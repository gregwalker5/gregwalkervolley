/**
 * WaiverContent — 2026 GWV Participant Waiver
 * Shared by RegistrationForm (inline scroll) and /waiver page.
 */

import React from 'react';

const heading: React.CSSProperties = {
  fontWeight: 800,
  fontSize: '0.82rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '#0C1B2A',
  marginBottom: 4,
  marginTop: 18,
};

const body: React.CSSProperties = {
  fontSize: '0.85rem',
  lineHeight: 1.75,
  color: '#3a3a3a',
  marginBottom: 10,
};

const caps: React.CSSProperties = {
  ...body,
  fontWeight: 700,
  textTransform: 'uppercase',
};

const li: React.CSSProperties = {
  marginBottom: 5,
  fontSize: '0.85rem',
  lineHeight: 1.65,
  color: '#3a3a3a',
};

const divider: React.CSSProperties = {
  borderTop: '1px solid #D5D0C9',
  margin: '18px 0 14px',
};

export default function WaiverContent() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      <p style={{ ...body, fontWeight: 700, marginTop: 0 }}>
        CREATIVE PERFORMANCE CONSULTING LLC d/b/a GREG WALKER VOLLEY — 2026 PARTICIPANT WAIVER,
        RELEASE OF LIABILITY, ASSUMPTION OF RISK, INDEMNIFICATION &amp; CONSENT AGREEMENT
        (Multi-State Edition — MA / NC / TN / FL)
      </p>

      <div style={divider} />

      {/* Section 1 */}
      <p style={heading}>Section 1 — Parties to This Agreement</p>
      <p style={body}>
        This Agreement is entered into by and among: Creative Performance Consulting LLC d/b/a Greg
        Walker Volley (&ldquo;CPC&rdquo; or &ldquo;GWV&rdquo;), together with its owners, officers,
        members, managers, employees, independent contractors, coaches, staff, agents,
        representatives, volunteers, successors, and assigns; Greg Walker, individually and in his
        professional capacity; any camp coaches, assistant coaches, clinicians, trainers,
        contractors, volunteers, or support staff working with or on behalf of GWV or CPC; any host
        school, college, gymnasium, athletic facility, court provider, site owner, site operator,
        property owner, or affiliated organization where the Activity occurs (each a &ldquo;Host
        Facility&rdquo;); and the Participant and, if the Participant is under 18 years of age, the
        Participant&rsquo;s parent or legal guardian (&ldquo;Parent/Guardian&rdquo;).
      </p>
      <p style={body}>
        Collectively, the parties listed above (other than the Participant and Parent/Guardian) are
        referred to as the &ldquo;Released Parties.&rdquo;
      </p>

      <div style={divider} />

      {/* Section 3 */}
      <p style={heading}>Section 3 — Description of Activity</p>
      <p style={body}>
        The Participant seeks to participate in one or more volleyball-related programs operated by
        GWV (the &ldquo;Activity&rdquo;), including but not limited to:
      </p>
      <ul style={{ paddingLeft: 18, margin: '0 0 10px' }}>
        <li style={li}>Volleyball camps, satellite camps, and clinics;</li>
        <li style={li}>Positional training, skill instruction, small-group, and individual lessons;</li>
        <li style={li}>
          Warm-ups, stretching, strength and conditioning, agility, jumping, diving, serving,
          passing, setting, attacking, blocking, defense, scrimmages, competition, drills,
          demonstrations, classroom and video sessions, and team-building;
        </li>
        <li style={li}>
          Use of indoor and outdoor athletic facilities, gymnasiums, courts, equipment, nets, balls,
          training aids, and adjacent spaces.
        </li>
      </ul>

      <div style={divider} />

      {/* Section 4 */}
      <p style={heading}>Section 4 — Voluntary Participation</p>
      <p style={body}>
        Participation in the Activity is entirely voluntary. The Participant is physically, mentally,
        and emotionally capable of participating in volleyball training and related athletic activity.
        The Participant is not required to perform any drill, exercise, movement, competition, or
        activity that the Participant believes is unsafe or beyond the Participant&rsquo;s ability,
        and may stop participation and notify a coach or staff member at any time.
      </p>

      <div style={divider} />

      {/* Section 5 */}
      <p style={heading}>Section 5 — Express Assumption of Inherent and Unavoidable Risks</p>
      <p style={caps}>
        Volleyball and athletic training involve inherent and unavoidable risks that cannot be
        eliminated, even with the exercise of reasonable care by the Released Parties. I, on behalf
        of myself and the Participant, knowingly, freely, and voluntarily assume all such risks,
        including those listed below and all others not specified, whether known or unknown,
        foreseeable or unforeseeable.
      </p>
      <p style={body}>These inherent risks include, but are not limited to:</p>
      <ul style={{ paddingLeft: 18, margin: '0 0 10px' }}>
        <li style={li}>Sprains, strains, bruises, cuts, abrasions, blisters, contusions, and overuse injuries;</li>
        <li style={li}>
          Muscle, tendon, ligament, and joint injuries to the knees, ankles, shoulders, back, neck,
          wrists, hands, fingers, and feet;
        </li>
        <li style={li}>
          Concussions, head injuries, traumatic brain injuries, eye injuries, facial injuries,
          dental injuries, and other neurological injuries;
        </li>
        <li style={li}>
          Collisions with other athletes, coaches, equipment, walls, bleachers, poles, net systems,
          referee stands, benches, chairs, floors, or other objects;
        </li>
        <li style={li}>
          Falls, slips, trips, awkward landings, diving and pursuit injuries, and contact with the
          playing surface;
        </li>
        <li style={li}>
          Heat illness, dehydration, exhaustion, dizziness, fainting, asthma, allergic reactions,
          cardiac events, respiratory events, and other medical episodes;
        </li>
        <li style={li}>
          Exposure to communicable and infectious diseases (including but not limited to influenza,
          COVID-19 and successor variants, MRSA, and other contagions);
        </li>
        <li style={li}>
          Equipment failure or malfunction, facility hazards, court surface conditions, lighting,
          ventilation, environmental conditions, and weather-related risks;
        </li>
        <li style={li}>
          Emotional distress, anxiety, frustration, or stress associated with athletic performance
          or competition;
        </li>
        <li style={li}>
          The negligent acts or omissions of other participants, spectators, host-site personnel,
          volunteers, or third parties;
        </li>
        <li style={li}>
          <strong>Permanent disability, paralysis, and DEATH.</strong>
        </li>
      </ul>

      <div style={divider} />

      {/* Section 6 */}
      <p style={heading}>Section 6 — Pre-Existing Conditions — Representation &amp; Warranty</p>
      <p style={body}>
        I represent and warrant that the Participant has no medical, physical, mental, or emotional
        condition that would contraindicate participation in the Activity, except those fully and
        accurately disclosed in writing in the registration form. I assume all risk of aggravation,
        exacerbation, or worsening of any pre-existing condition arising from participation in the
        Activity.
      </p>

      <div style={divider} />

      {/* Section 7 */}
      <p style={heading}>Section 7 — Release of Liability (Including Negligence)</p>
      <p style={caps}>
        To the fullest extent permitted by applicable law, I, on behalf of myself, the Participant,
        my spouse, heirs, assigns, personal representatives, next of kin, and legal representatives,
        hereby release, waive, discharge, and forever acquit the Released Parties from any and all
        claims, demands, causes of action, damages, losses, costs, expenses, attorneys&rsquo; fees,
        liabilities, and judgments of every kind or nature, whether known or unknown, arising out of
        or related to the Participant&rsquo;s participation in the Activity — including without
        limitation claims based on the negligence of any of the Released Parties.
      </p>
      <p style={body}>
        This Release applies to claims for, among other things: personal injury; illness; property
        damage; lost or stolen property; medical expenses; disability; death; emotional distress; the
        negligence of the Released Parties; and the acts or omissions of other participants,
        spectators, host-site personnel, volunteers, or third parties.
      </p>
      <p style={body}>
        This Release does NOT apply to claims that cannot legally be released under applicable state
        law, such as claims arising from gross negligence, recklessness, willful or wanton
        misconduct, or intentional misconduct.
      </p>

      <div style={divider} />

      {/* Section 8 */}
      <p style={heading}>Section 8 — Covenant Not to Sue</p>
      <p style={caps}>
        In addition to the Release in Section 7, I covenant and agree not to initiate, file,
        maintain, or prosecute any lawsuit, claim, or arbitration demand against any of the Released
        Parties arising out of or related to the Participant&rsquo;s participation in the Activity,
        except as expressly permitted by this Agreement or required by applicable law.
      </p>

      <div style={divider} />

      {/* Section 9 */}
      <p style={heading}>Section 9 — Indemnification &amp; Hold Harmless</p>
      <p style={caps}>
        To the fullest extent permitted by applicable law, I agree to indemnify, defend, and hold
        harmless the Released Parties from and against any and all claims, actions, damages,
        liabilities, costs, expenses, and attorneys&rsquo; fees arising out of or related to:
      </p>
      <ul style={{ paddingLeft: 18, margin: '0 0 10px' }}>
        <li style={li}>The Participant&rsquo;s participation in the Activity;</li>
        <li style={li}>The Participant&rsquo;s conduct, acts, or omissions;</li>
        <li style={li}>Any injury or damage caused by the Participant to another person or property;</li>
        <li style={li}>Any breach of this Agreement;</li>
        <li style={li}>
          Any inaccurate, incomplete, or misleading medical, emergency, or registration
          information; and
        </li>
        <li style={li}>
          Any claim brought by or on behalf of the Participant, Parent/Guardian, family member,
          heir, representative, or third party against the Released Parties.
        </li>
      </ul>

      <div style={divider} />

      {/* Section 10 */}
      <p style={heading}>Section 10 — Insurance, Primary Coverage &amp; Subrogation Waiver</p>
      <p style={body}>
        I represent that the Participant has health insurance covering injury or illness arising from
        athletic activity, and I agree that the Participant&rsquo;s own health, medical, accident,
        disability, life, or other personal insurance shall serve as the PRIMARY source of coverage
        for any injury or loss arising out of participation in the Activity. The Released
        Parties&rsquo; insurance, if any, is excess and contingent only.
      </p>
      <p style={body}>
        Any claim must be tendered in writing to CPC at the address on file within thirty (30) days
        of the event giving rise to the claim.
      </p>

      <div style={divider} />

      {/* Section 12 */}
      <p style={heading}>Section 12 — Concussion &amp; Head Injury Acknowledgment</p>
      <p style={body}>
        I have been informed about the signs, symptoms, and risks of concussions and traumatic brain
        injuries. I agree that:
      </p>
      <ul style={{ paddingLeft: 18, margin: '0 0 10px' }}>
        <li style={li}>
          If the Participant exhibits any signs or symptoms of a concussion or head injury, the
          Participant will be IMMEDIATELY removed from the Activity;
        </li>
        <li style={li}>
          The Participant will not return to play on the same day as a suspected concussion under
          any circumstances;
        </li>
        <li style={li}>
          Return to participation will require WRITTEN MEDICAL CLEARANCE from a licensed healthcare
          provider;
        </li>
        <li style={li}>CPC follows a strict &ldquo;when in doubt, sit them out&rdquo; policy.</li>
      </ul>

      <div style={divider} />

      {/* Section 13 */}
      <p style={heading}>Section 13 — Medical Fitness, Disclosure &amp; HIPAA Authorization</p>
      <p style={body}>
        I certify that the Participant is medically and physically able to participate in volleyball
        and related athletic activity. I authorize the Released Parties, camp staff, host-facility
        personnel, athletic trainers, EMTs, paramedics, physicians, hospitals, and other healthcare
        providers to obtain, provide, and authorize medical treatment for the Participant as
        reasonably necessary in the event of injury, illness, or emergency.
      </p>
      <p style={body}>I accept financial responsibility for all medical costs incurred.</p>

      <div style={divider} />

      {/* Section 14 */}
      <p style={heading}>Section 14 — SafeSport, Background Checks &amp; Abuse Prevention</p>
      <p style={body}>
        CPC requires all coaches and staff to maintain current SafeSport certification, pass a
        background check, and hold active USA Volleyball registration. CPC follows a Two-Deep
        Leadership policy at all times. All coaches and staff are mandatory reporters under
        applicable law.
      </p>
      <p style={body}>
        Any concerns about SafeSport violations or inappropriate conduct should be reported to:{' '}
        <strong>safesport.org</strong> or the U.S. Center for SafeSport.
      </p>

      <div style={divider} />

      {/* Section 15 */}
      <p style={heading}>Section 15 — Code of Conduct &amp; Removal</p>
      <p style={body}>
        All participants are expected to conduct themselves in a safe, respectful, and sportsmanlike
        manner. CPC reserves the right to remove any participant who engages in unsafe,
        disrespectful, discriminatory, bullying, or non-compliant behavior. Removal for cause does
        not entitle the participant or Parent/Guardian to a refund.
      </p>

      <div style={divider} />

      {/* Section 16 */}
      <p style={heading}>Section 16 — Photographs, Video &amp; NIL/Right of Publicity</p>
      <p style={body}>
        Subject to the media consent election made during registration, I grant GWV/CPC a perpetual,
        irrevocable, royalty-free, worldwide license to use the Participant&rsquo;s name, image,
        likeness, voice, and biographical information (&ldquo;NIL&rdquo;) in connection with the
        promotion, marketing, and documentation of GWV/CPC programs. Participants (or parents on
        their behalf) may opt out during registration.
      </p>

      <div style={divider} />

      {/* Section 17 */}
      <p style={heading}>Section 17 — Refund &amp; Cancellation Policy</p>
      <p style={body}>
        All registration fees are non-refundable unless CPC cancels the camp. In the event of CPC
        cancellation, a full refund will be issued. Transfers to another camp session may be
        available subject to availability and a transfer fee. No refund will be issued for
        participant no-shows, early departure, injury during camp, or removal for cause.
      </p>

      <div style={divider} />

      {/* Section 22 */}
      <p style={heading}>Section 22 — Arbitration &amp; Jury Trial Waiver</p>
      <p style={caps}>
        All disputes arising out of or relating to this Agreement or the Participant&rsquo;s
        participation in the Activity shall be resolved by final and binding arbitration
        administered by JAMS or AAA, conducted in Hampshire County, Massachusetts, under the
        applicable arbitration rules. I waive my right to a jury trial. I waive my right to
        participate in a class action or class arbitration. The arbitrator&rsquo;s award shall be
        final and binding and may be entered as a judgment in any court of competent jurisdiction.
      </p>

      <div style={divider} />

      {/* Section 23 */}
      <p style={heading}>Section 23 — Governing Law &amp; Severability</p>
      <p style={body}>
        This Agreement is governed by the law of the state in which the Activity occurs (MA, NC, TN,
        or FL as applicable). State-specific addenda apply. If any provision of this Agreement is
        found unenforceable, the remaining provisions continue in full force.
      </p>

      <div style={divider} />

      <p style={{ ...body, fontSize: '0.78rem', color: '#777', marginBottom: 0 }}>
        Creative Performance Consulting LLC · Northampton, MA ·{' '}
        <a href="mailto:gregwalkervolley@gmail.com" style={{ color: '#B8962E' }}>
          gregwalkervolley@gmail.com
        </a>
        {' '}· 2026 Participant Waiver v2.0
      </p>
    </div>
  );
}
