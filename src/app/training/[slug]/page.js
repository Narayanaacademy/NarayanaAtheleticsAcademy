"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const placeholder = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'

const img1= "/assets/image1.png"
const img2= "/assets/image2.png"
const img4= "/assets/image4.png"
const img5= "/assets/image5.png"
const img6= "/assets/image6.png"
const img7= "/assets/image7.png"
const si ="/assets/SI.png"
const agnipath="/assets/agnipath.png"
const airforce="/assets/airforce.png"
const army = "/assets/army.png"
const navy = "/assets/navy.png"
const constable= "/assets/constable.png"
const rrb= "/assets/RRB.png"
const ssc= "/assets/ssc.png"
const online = "/assets/online.png"
const coach = "/assets/coach.png"
const tata = "/assets/tata.png"
const bg= "/assets/bg.png"


function slugify(title){
  return String(title || '').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}

const allPrograms = [
  {
    title: 'Athletic Training',
    img: img1,
    desc: 'Holistic athletic development: strength, speed, mobility, recovery and competition readiness.',
    roadmap: [
      { step: 'Assess', title: 'Comprehensive Baseline Testing', summary: 'Laboratory/field tests: VO2, sprint times, max strength, mobility screens and injury history. Establish individual targets and constraints.', highlight: '1 week' },
      { step: 'Foundations', title: 'Movement & Strength Base', summary: 'Periodized strength training (hypertrophy → strength), mobility routines and corrective exercises to build resilience.', highlight: '8–10 weeks' },
      { step: 'Capacity', title: 'Aerobic & Anaerobic Conditioning', summary: 'Structured interval training, tempo runs and threshold sessions tailored to sport demands.', highlight: '6–8 weeks' },
      { step: 'Power', title: 'Explosive & Speed Work', summary: 'Plyometrics, sprint mechanics, resisted sprints and reactive agility drills to convert strength into speed.', highlight: '6 weeks' },
      { step: 'Sharpen', title: 'Skill Integration & Simulation', summary: 'Sport-specific drills, situational practice and simulated competitions to transfer physical gains to performance.', highlight: '4 weeks' },
      { step: 'Peak', title: 'Taper & Recovery Strategy', summary: 'Manage volume/intensity, optimize sleep/nutrition and final testing before competition.', highlight: '1–2 weeks' },
      { step: 'Maintain', title: 'Long-term Monitoring', summary: 'Periodic testing, load management and a maintenance plan to avoid regressions and injuries.', highlight: 'Ongoing' },
    ]
  },

  {
    title: 'Online/Offline Fitness',
    img: img2,
    desc: 'Guides individuals through customized training sessions to improve strength, endurance, and overall health — offering both online and offline support for consistency and motivation. Helps clients stay disciplined, track progress, and achieve their fitness goals effectively.',
    roadmap: [
  { step: 'Assess', title: 'Body & Lifestyle Audit', summary: 'Evaluate current fitness level, body composition, diet, routine, and goals to define a clear starting point.', highlight: '1 week' },
  { step: 'Plan', title: 'Customized Fitness Blueprint', summary: 'Design a personalized workout and nutrition plan based on fitness goals, available equipment, and schedule.', highlight: '1 week' },
  { step: 'Train', title: 'Guided Workouts & Technique', summary: 'Follow structured workout sessions with form correction, progress tracking, and hybrid (online/offline) guidance.', highlight: '8–12 weeks' },
  { step: 'Track', title: 'Progress Review & Adjustments', summary: 'Regular check-ins, performance tracking, and adaptive modifications to keep results on track.', highlight: '4–8 weeks' },
  { step: 'Refine', title: 'Advanced Conditioning & Focus Areas', summary: 'Target specific goals like fat loss, strength gain, endurance, or mobility through focused routines.', highlight: '2–4 weeks' },
  { step: 'Sustain', title: 'Lifestyle Integration & Recovery', summary: 'Build lasting habits with recovery strategies, nutrition balance, and long-term fitness maintenance.', highlight: 'Ongoing' },
]
  },

  {
    title: 'Competition Prep',
    img: img4,
    desc: 'Focused preparation for competitive selection events: technical, tactical and psychological readiness.',
    roadmap: [
      { step: 'Scoping', title: 'Event Requirements & Benchmarking', summary: 'Analyze event format, scoring and opponent benchmarks; set target performance metrics.', highlight: '1 week' },
      { step: 'Periodize', title: 'Macro-to-Micro Plan', summary: 'Design weeks and sessions to peak at the event (volume, intensity, tapering).', highlight: '8–12 weeks' },
      { step: 'Tactics', title: 'Technical & Tactical Drills', summary: 'Refine technique, decision-making and match tactics with video analysis.', highlight: '4–6 weeks' },
      { step: 'Simulate', title: 'Mock Events & Load Testing', summary: 'Full dress rehearsals under test conditions, including travel and equipment routines.', highlight: '2–3 weeks' },
      { step: 'Mental', title: 'Performance Psychology', summary: 'Arousal control, visualization, routines and on-day strategies.', highlight: '1–2 weeks' },
      { step: 'Recover', title: 'Post-event Plan and Debrief', summary: 'Immediate recovery protocol and structured debrief to learn for next cycle.', highlight: '1 week' },
    ]
  },

  {
    title: 'SI and Constable',
    img: si,
    desc: 'End-to-end preparation for police recruitment: physical tests, drills, written exam and interview.',
    roadmap: [
      { step: 'Eligibility', title: 'Documentation & Baseline Tests', summary: 'Confirm eligibility, complete documents, run initial PT benchmarks (run, long jump, push-ups).', highlight: '1 week' },
      { step: 'Physical Build', title: 'Endurance & Strength Blocks', summary: 'Structured running progression, circuit strength training and explosive drills.', highlight: '8–10 weeks' },
      { step: 'Skills', title: 'Drill, Obstacle & Teamwork', summary: 'Obstacle course practice, drill commands and teamwork simulation for selection days.', highlight: '4 weeks' },
      { step: 'Written', title: 'Exam Preparation', summary: 'Syllabus coaching, speed & accuracy practice, and timed mock tests for written papers.', highlight: '4–8 weeks' },
      { step: 'Interview', title: 'Personality & VO/Physical Testing', summary: 'Interview coaching, group discussion drills and final mock selection days.', highlight: '2 weeks' },
      { step: 'Medical & Final', title: 'Medical Check & Deployment Prep', summary: 'Prepare for medical screening and post-selection formalities.', highlight: '1 week' },
    ]
  },

  {
    title: 'Agniveer & Agnipath',
    img: agnipath,
    desc: 'Targeted training for short-service recruitment: stamina, fieldcraft and selection protocols.',
    roadmap: [
      { step: 'Screen', title: 'Eligibility, Baseline Fitness & Medical', summary: 'Check eligibility, initial fitness tests and basic medical screen.', highlight: '1 week' },
      { step: 'Endurance', title: 'Progressive Running & Loaded Marches', summary: 'Build running volume, tempo runs and ruck-march practice with progressive loading.', highlight: '10 weeks' },
      { step: 'Functional', title: 'Strength & Functional Conditioning', summary: 'Bodyweight & resistance training focused on carry capacity and injury prevention.', highlight: '8 weeks' },
      { step: 'Tactical', title: 'Field Drills & Teamwork', summary: 'Basic field skills, navigation, team drills and simulated tasks.', highlight: '4 weeks' },
      { step: 'Selection Mock', title: 'Full Trial Simulation', summary: 'Practice selection day under real constraints with recovery and debrief.', highlight: '2 weeks' },
    ]
  },

  {
    title: 'Indian Army',
    img: army,
    desc: 'Comprehensive preparation for Army selections: fitness, map reading, drills and mental resilience.',
    roadmap: [
      { step: 'Screen', title: 'Initial Screening & Eligibility', summary: 'Document checks, baseline fitness and medical screening to identify gaps.', highlight: '1 week' },
      { step: 'Condition', title: 'Endurance & Strength Foundation', summary: 'Heavy focus on running, loaded marches, functional strength and injury prevention.', highlight: '12 weeks' },
      { step: 'Tactical', title: 'Map Skills & Drill', summary: 'Map reading, fieldcraft basics, drill cadence and team-based problem solving.', highlight: '6–8 weeks' },
      { step: 'Selection Simulation', title: 'Mock BH Tests & Interviews', summary: 'Full-day simulations including psych/aptitude tests and interview practice.', highlight: '2–3 weeks' },
      { step: 'Medical Prep', title: 'Health Optimization', summary: 'Address medical concerns, vaccination checks and pre-enlistment health routines.', highlight: '1 week' },
    ]
  },

  {
    title: 'Indian Navy',
    img: navy,
    desc: 'Preparation for naval selection: swimming, endurance, discipline and written exams.',
    roadmap: [
      { step: 'Baseline', title: 'Swimming & Fitness Assessment', summary: 'Assess swim technique, basic endurance and water-confidence; set swim targets.', highlight: '1 week' },
      { step: 'Swim Program', title: 'Technique & Endurance', summary: 'Stroke technique, interval swim sets and open-water simulation where required.', highlight: '6–8 weeks' },
      { step: 'PT & Core', title: 'Naval Physical Conditioning', summary: 'Running, functional core training and water-to-land transition conditioning.', highlight: '8 weeks' },
      { step: 'Syllabus', title: 'Written Exam & Aptitude Prep', summary: 'Focused study on exam topics, practice tests and paper strategies.', highlight: '4–6 weeks' },
      { step: 'Selection Mock', title: 'Combined Trials & Interview', summary: 'Full simulation of selection day including swim test, PT and panel interview.', highlight: '2 weeks' },
    ]
  },

  {
    title: 'Indian Airforce',
    img: airforce,
    desc: 'Focused training for Air Force selection emphasizing agility, speed, cognitive readiness and discipline.',
    roadmap: [
      { step: 'Assess', title: 'Cognitive & Physical Baseline', summary: 'Test reaction time, spatial tasks and physical benchmarks to set priorities.', highlight: '1 week' },
      { step: 'Speed & Agility', title: 'Sprint Mechanics & Plyometrics', summary: 'Sprint drills, agility ladders and plyometric progressions to build quickness.', highlight: '8 weeks' },
      { step: 'Strength & Core', title: 'Functional Strength Program', summary: 'Explosive strength, core stability and neck/shoulder conditioning for G-tolerance (where relevant).', highlight: '6 weeks' },
      { step: 'Aptitude', title: 'Exam & Simulator Preparation', summary: 'Practice psychometric tests, situational judgement and any simulator drills.', highlight: '4 weeks' },
      { step: 'Mock Selection', title: 'Integrated Trials', summary: 'Full day trials with cognitive tests, PT and medical checks.', highlight: '2 weeks' },
    ]
  },

  {
    title: 'SSC GD',
    img: ssc,
    desc: 'Structured program covering written exam, physical standards and interview readiness for SSC GD.',
    roadmap: [
      { step: 'Orientation', title: 'Syllabus & Baseline PT', summary: 'Walkthrough syllabus, initial PT benchmarks and schedule planning.', highlight: '1 week' },
      { step: 'Written Prep', title: 'Concepts & Speed Practice', summary: 'Daily syllabus coverage, shortcut techniques and timed mocks.', highlight: '6–8 weeks' },
      { step: 'PT Training', title: 'Endurance & Obstacle Skills', summary: 'Targeted endurance runs, long jump drills and obstacle practice.', highlight: '8 weeks' },
      { step: 'Mock Days', title: 'Full Selection Simulation', summary: 'Combine paper, PT and interview simulations to finalize readiness.', highlight: '2–3 weeks' },
    ]
  },
 
  {
  title: 'Online Running',
  img: online, // place your image from /public/assets/
  desc: 'Virtual program designed to improve stamina, pace, and running form through personalized online sessions and progress tracking.',
  roadmap: [
    { step: 'Assessment', title: 'Current Fitness & Goals', summary: 'Online consultation to assess running background, fitness level, and personal goals.', highlight: '1 week' },
    { step: 'Form & Technique', title: 'Running Mechanics', summary: 'Video-based gait analysis and drills to correct form, posture, and breathing rhythm.', highlight: '2 weeks' },
    { step: 'Endurance Build', title: 'Base Mileage & Stamina', summary: 'Progressive weekly mileage plans with heart-rate-based training zones.', highlight: '6–8 weeks' },
    { step: 'Virtual Races', title: 'Online Challenges & Feedback', summary: 'Participate in virtual runs with pace analysis and personalized feedback sessions.', highlight: 'Ongoing' },
  ]
},
{
  title: 'Running Coaching',
  img: coach,
  desc: 'Comprehensive, personalized coaching to help runners of all levels achieve their distance, speed, or event goals with expert guidance.',
  roadmap: [
    { step: 'Evaluation', title: 'Runner Profiling', summary: 'Identify strengths, weaknesses, and training history through performance assessment.', highlight: '1 week' },
    { step: 'Planning', title: 'Customized Training Plan', summary: 'Tailored weekly workout structure including tempo runs, intervals, and long runs.', highlight: '4–6 weeks' },
    { step: 'Monitoring', title: 'Form Correction & Adaptation', summary: 'Continuous monitoring via app or calls to adjust training load and recovery.', highlight: 'Ongoing' },
    { step: 'Performance', title: 'Race Strategy & Execution', summary: 'Simulate race conditions and build mental strength for event-day performance.', highlight: '2–3 weeks' },
  ]
},
{
  title: 'Tata Mumbai Marathon 2026',
  img: tata,
  desc: 'Specialized marathon preparation program focused on endurance, pace control, and nutrition strategies to get race-ready for TMM 2026.',
  roadmap: [
    { step: 'Base Phase', title: 'Aerobic Foundation', summary: 'Develop strong aerobic base with easy long runs and low-intensity workouts.', highlight: '8 weeks' },
    { step: 'Build Phase', title: 'Speed & Endurance', summary: 'Introduce tempo runs, hill training, and progressive long runs for stamina.', highlight: '6–8 weeks' },
    { step: 'Peak Phase', title: 'Race Simulation', summary: 'Incorporate race-pace runs and mock half/full marathons for confidence.', highlight: '4 weeks' },
    { step: 'Taper & Race Week', title: 'Rest, Nutrition & Strategy', summary: 'Taper mileage, finalize race plan, and optimize nutrition before event day.', highlight: '2 weeks' },
  ]
},
{
  title: 'Strength Training for Runners',
  img: img6,
  desc: 'A focused strength and mobility program designed to boost running efficiency, prevent injuries, and enhance performance.',
  roadmap: [
    { step: 'Assessment', title: 'Mobility & Weakness Check', summary: 'Identify muscular imbalances and flexibility issues through guided tests.', highlight: '1 week' },
    { step: 'Foundation', title: 'Core & Stability Work', summary: 'Introduce low-impact strength exercises to improve stability and posture.', highlight: '3 weeks' },
    { step: 'Progressive Load', title: 'Functional Strength Routines', summary: 'Include resistance, plyometric, and balance workouts tailored for runners.', highlight: '4–6 weeks' },
    { step: 'Maintenance', title: 'Injury Prevention & Recovery', summary: 'Weekly strength circuits and recovery mobility to sustain performance.', highlight: 'Ongoing' },
  ]
},

  {
    title: 'Constable & CPO',
    img: constable,
    desc: 'Concise training for constable-level recruitment: PT standards, written tests and interview skills.',
    roadmap: [
      { step: 'Check', title: 'Eligibility & Baseline', summary: 'Confirm documentation, perform initial PT & written checks, set targets.', highlight: '1 week' },
      { step: 'PT Cycle', title: 'Running & Circuit Strength', summary: 'Progressive run plans, circuits for muscular endurance and obstacle work.', highlight: '8 weeks' },
      { step: 'Exam Prep', title: 'Syllabus & Speed', summary: 'Focused written prep with daily quizzes and mock papers.', highlight: '4–6 weeks' },
      { step: 'Finalize', title: 'Mock Tests & Interview', summary: 'End-to-end trial including psych/interview and debrief.', highlight: '1–2 weeks' },
    ]
  },

  {
    title: 'RRB Group-D & RPF',
    img: rrb,
    desc: 'Exam-focused program with optional physical readiness modules for applicable posts.',
    roadmap: [
      { step: 'Map', title: 'Syllabus Mapping & Baseline', summary: 'Identify syllabus weightage, initial diagnostics and time allocation.', highlight: '1 week' },
      { step: 'Concepts', title: 'Topic Mastery & Shortcuts', summary: 'Daily focused study, problem-solving strategies and revision notes.', highlight: '6–10 weeks' },
      { step: 'Mocks', title: 'Timed Tests & Analysis', summary: 'Regular mock tests, error logs and targeted remediation.', highlight: '6 weeks' },
      { step: 'Physical', title: 'Optional PT Module', summary: 'If post requires PT: structured conditioning and event-specific drills.', highlight: '4 weeks' },
      { step: 'Final Prep', title: 'Document & Interview Readiness', summary: 'Checklist for documents, final revisions and confidence-building.', highlight: '1 week' },
    ]
  },
].map(p => ({ ...p, slug: slugify(p.title) })) // ensure slugs

export default function TrainingDetail(){
  const { slug } = useParams()
  const router = useRouter()

  
  

  // find canonical program by slug
  const canonical = slug ? allPrograms.find(p => p.slug === slug) : null



  // merge: prefer canonical roadmap/img/desc but allow overrides from state.program
 
  const program = canonical || null
  
  if (!program) {
    return (
      <div style={{ padding: 48 }}>
        <button onClick={() => router.back()} style={{ marginBottom: 20 }}>← Back</button>
        <p>Program not found.</p>
      </div>
    )
  }

  const visualRoadmap = Array.isArray(program.roadmap) && program.roadmap.length
    ? program.roadmap
    : [
      { step: 'Assess', title: 'Baseline Assessment', summary: 'Full physical & skill diagnostics to set personalized targets.', highlight: 'Duration: 1 week' },
      { step: 'Build', title: 'Foundational Conditioning', summary: 'Strength, endurance & mobility blocks to build resilience.', highlight: '8–12 weeks' },
      { step: 'Skill', title: 'Technical Drills', summary: 'Sport/selection-specific drills, technique coaching and timings.', highlight: '6–10 weeks' },
      { step: 'Simulate', title: 'Mock Tests & Trials', summary: 'Simulated selection trials, timed runs and exam rehearsals.', highlight: '2–4 weeks' },
      { step: 'Polish', title: 'Refine & Peak', summary: 'Recovery, strategy, mental prep and final selection readiness.', highlight: '1–2 weeks' },
    ]

  return (
    <><div className="td-page" style={{backgroundImage:`url(${bg})` }}>
      <Navbar  bgcolor='#7e151fff' />
      <br /><br /><br /><br/>
      <style>{`
        .td-page { padding: 48px 6%; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color: #0f172a; }
        .td-top { display:flex; gap:24px; align-items:center; margin-bottom:28px; flex-wrap:wrap; }
        .td-back { background:#111827; color:#fff; padding:8px 12px; border-radius:10px; border:none; cursor:pointer; box-shadow:0 6px 20px rgba(17,24,39,.12); }
        .td-hero { display:flex; gap:28px; align-items:center; width:100%; flex-wrap:wrap; }
        .td-art { width:420px; min-width:280px; border-radius:18px; overflow:hidden; box-shadow: 0 20px 50px rgba(15,23,42,.18); transform: translateY(-6px); }
        .td-art img { width:100%; height:320px; object-fit:cover; display:block; }
        .td-info { flex:1; min-width:320px; }
        .td-title { font-size:34px; margin:0 0 8px 0; letter-spacing:-0.6px; background: linear-gradient(90deg,#e11d48,#7c3aed); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight:700; }
        .td-desc { color:#475569; font-size:16px; margin-bottom:14px; }
        .cta-row { display:flex; gap:12px; align-items:center; margin-top:12px; flex-wrap:wrap; }
        .cta-primary { background: linear-gradient(90deg,#7c3aed,#e11d48); color:#fff; padding:10px 16px; border-radius:12px; border:none; cursor:pointer; box-shadow:0 12px 30px rgba(124,58,237,.18); }
        .cta-ghost { background:transparent; color:#0f172a; padding:8px 12px; border-radius:10px; border:1px solid rgba(15,23,42,.06); cursor:pointer; }

        /* Timeline */
        .timeline-wrap { margin-top:36px; background: linear-gradient(180deg, rgba(124,58,237,0.04), rgba(225,29,72,0.02)); padding:28px; border-radius:16px; box-shadow: 0 18px 40px rgba(15,23,42,.05); }
        .timeline { position:relative; padding:48px 20px 20px; display:flex; gap:18px; justify-content:space-between; flex-wrap:wrap; }

        .step { flex:1 1 180px; max-width:220px; text-align:center; position:relative; padding-top:12px; }
        .node { width:86px; height:86px; margin:0 auto 12px; border-radius:50%; background: linear-gradient(135deg,#fff 0%, rgba(255,255,255,0.6) 30%), linear-gradient(135deg,#7c3aed,#e11d48); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:20px; box-shadow:0 20px 40px rgba(17,24,39,.12); transform: translateY(-14px); }
        .node .step-short { font-size:12px; display:block; opacity:.95; letter-spacing:1px; }
        .card { background:#fff; border-radius:12px; padding:14px; margin-top:6px; box-shadow:0 12px 30px rgba(2,6,23,.06); transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s; }
        .card:hover { transform: translateY(-8px) scale(1.02); box-shadow:0 28px 60px rgba(2,6,23,.12); }
        .card h4 { margin:6px 0 8px 0; font-size:16px; }
        .card p { margin:0; font-size:14px; color:#475569; }

        /* responsive */
        @media (max-width:920px) {
          .td-art { width:320px }
          .timeline { gap:12px; justify-content:flex-start; padding-left:18px; }
        }
        @media (max-width:720px) {
          .td-hero { flex-direction:column-reverse; }
          .timeline { flex-direction:column; align-items:center; padding-top:36px; }
          .step { max-width:420px; width:100%; }
        }
      `}</style>

      <div className="td-top"  >
        <button className="td-back" onClick={() => router.back()} style={{backgroundColor:'#7e151fff'}}>← Back</button>
      </div>

      <div className="td-hero">
        <div className="td-art">
          <Image src={program.img || placeholder}   width={420} 
  height={320}  alt={program.title} />
        </div>

        <div className="td-info">
          <h1 className="td-title">{program.title}</h1>
          <p className="td-desc">{program.desc}</p>

          <div className="cta-row">
            <button
              className="cta-primary"
              onClick={() => router.push('/contact')}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Enroll Now
            </button>
            <button className="cta-ghost" onClick={() =>  router.push('/contact')}>Contact Trainer</button>
          </div>

          <div style={{ marginTop: 18, color:'#6b7280', fontSize:14 }}>Duration estimate, phased roadmap, and hands-on simulations — crafted to maximize selection success.</div>
        </div>
      </div>

      <div className="timeline-wrap" role="region" aria-label="Program roadmap">
        <div className="timeline">
          {visualRoadmap.map((s, idx) => (
            <div className="step" key={idx}>
              <div className="node" aria-hidden>
                <div>
                  <div style={{ fontSize:14, opacity:.9 }}>{`Step ${idx+1}`}</div>
                  <div className="step-short" style={{ marginTop:6 }}>{s.step}</div>
                </div>
              </div>

              <div className="card" role="group" aria-labelledby={`step-${idx}`}>
                <h4 id={`step-${idx}`}>{s.title}</h4>
                <p style={{ color:'#6b7280', fontSize:13, marginBottom:10 }}>{s.summary}</p>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:12, color:'#7c3aed', fontWeight:700 }}>{s.highlight}</span>
                  <span style={{ fontSize:12, color:'#9ca3af' }}>Milestones: {3 + idx}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
      
    </div>
    <Footer /></>
    
  )
}
// ...existing code...