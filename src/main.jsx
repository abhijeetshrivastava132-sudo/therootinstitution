import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookOpen,
  BrainCircuit,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Leaf,
  Menu,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Sprout,
  Star,
  Target,
  Trophy,
  UserCheck,
  X,
} from 'lucide-react';
import './styles.css';

const PHONE_NUMBER = '6202224083';
const PHONE_LINK = 'tel:6202224083';
const WHATSAPP_LINK = 'https://wa.me/916202224083';
const DIRECTOR = 'Prashant Srivastava';
const INSTITUTE_NAME = 'The Root Institute of Education';

const menuLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
];

const trustHighlights = [
  { title: 'Class 6 to 10', text: 'All subjects coaching for strong school foundations.', icon: GraduationCap },
  { title: 'Class 11 to 12', text: 'Focused Mathematics coaching for senior students.', icon: BrainCircuit },
  { title: 'CBSE & Bihar Board', text: 'Preparation aligned with both board requirements.', icon: Target },
  { title: 'Printed/PDF Notes', text: 'Premium study material for easier revision.', icon: FileText },
  { title: 'Weekly Tests', text: 'Regular performance checks to track progress.', icon: CalendarCheck },
  { title: 'Personal Guidance', text: 'Careful academic support from the director.', icon: UserCheck },
];

const classCards = [
  {
    title: 'Class 6 to 10',
    subtitle: 'All Subjects',
    badge: 'Foundation batches',
    icon: BookOpen,
    details: ['CBSE & Bihar Board', 'Printed/PDF notes', 'Weekly tests', 'Doubt clearing'],
  },
  {
    title: 'Class 11 to 12',
    subtitle: 'Mathematics Only',
    badge: 'Mathematics focus',
    icon: BrainCircuit,
    details: ['CBSE & Bihar Board', 'Concept clarity', 'Practice questions', 'Board exam preparation'],
  },
];

const whyUs = [
  { title: 'Classes 6 to 10 all subjects', icon: GraduationCap },
  { title: 'Class 11 and 12 Mathematics specialist coaching', icon: BrainCircuit },
  { title: 'CBSE and Bihar Board preparation', icon: Target },
  { title: 'Printed and PDF notes available', icon: FileText },
  { title: 'Weekly tests for performance tracking', icon: CalendarCheck },
  { title: `Personal attention by Director ${DIRECTOR}`, icon: UserCheck },
  { title: 'Simple explanation and regular doubt solving', icon: MessageCircle },
];

const teachingSteps = [
  'Concept-based teaching',
  'Structured notes',
  'Practice questions',
  'Weekly tests',
  'Doubt clearing',
];

const sectionShell = 'w-full max-w-full overflow-hidden px-4 sm:px-6 lg:px-8';
const sectionInner = 'mx-auto w-full max-w-6xl min-w-0';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-hidden border-b border-emerald-950/10 bg-cream/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-3 overflow-hidden px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="group flex min-w-0 flex-1 items-center gap-3 overflow-hidden" aria-label="The Root Institute of Education home" onClick={closeMenu}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-900 text-amber-300 shadow-soft transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <Sprout size={24} strokeWidth={2.4} />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-serif text-lg font-bold tracking-tight text-emerald-950 sm:text-xl">The Root Institute</span>
            <span className="block truncate text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">of Education</span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2.5 text-sm font-bold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800"
            aria-controls="primary-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </nav>
      <div
        id="primary-menu"
        className={`w-full max-w-full overflow-hidden border-t border-emerald-950/5 px-4 transition-all duration-300 ease-out sm:px-6 lg:px-8 ${isMenuOpen ? 'max-h-40 pb-3 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
      >
        <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-2 pt-3 sm:flex-row sm:justify-end">
          {menuLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full bg-white px-4 py-2.5 text-center text-sm font-bold text-emerald-950 shadow-card transition hover:bg-amber-100" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-full animate-float overflow-hidden sm:max-w-sm sm:overflow-visible lg:max-w-md" aria-label="Tree growing from an open book illustration">
      <div className="absolute left-0 top-10 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl sm:-left-6" />
      <div className="absolute right-0 bottom-10 h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl sm:-right-6" />
      <div className="relative w-full max-w-full overflow-hidden rounded-[2rem] border border-white/80 bg-white p-5 shadow-premium sm:p-6">
        <div className="mb-6 flex min-w-0 flex-wrap items-center justify-between gap-3">
          <span className="min-w-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">CBSE & Bihar Board</span>
          <Sparkles className="shrink-0 text-amber-500" size={22} />
        </div>

        <div className="relative grid min-h-72 place-items-center rounded-[1.5rem] bg-gradient-to-b from-emerald-50 to-amber-50/70 p-5">
          <div className="absolute left-5 top-8 rounded-2xl bg-white/85 p-3 shadow-card sm:left-7">
            <BookOpen className="text-emerald-800" size={22} />
          </div>
          <div className="absolute right-5 top-12 rounded-2xl bg-white/85 p-3 shadow-card sm:right-7">
            <Star className="fill-amber-400 text-amber-500" size={20} />
          </div>
          <div className="absolute bottom-8 left-5 rounded-2xl bg-white/85 px-3 py-2 text-xs font-bold text-emerald-900 shadow-card sm:left-8">6–12</div>
          <div className="absolute bottom-8 right-5 rounded-2xl bg-white/85 px-3 py-2 text-xs font-bold text-emerald-900 shadow-card sm:right-8">Maths</div>

          <div className="relative mt-6 flex flex-col items-center">
            <div className="relative grid h-36 w-40 place-items-center">
              <img
                src="https://i.ibb.co/fYHCZszY/Root-Classes-4.png"
                alt="The Root Institute of Education Logo"
                className="h-24 w-24 shrink-0 rounded-full object-cover shadow-soft sm:h-28 sm:w-28"
              />
            </div>

            <div className="relative mt-[-2px] flex w-full max-w-[16rem] justify-center">
              <div className="h-16 w-32 origin-right skew-y-6 rounded-bl-3xl rounded-tl-lg border border-emerald-900/10 bg-white shadow-card" />
              <div className="h-16 w-32 origin-left -skew-y-6 rounded-br-3xl rounded-tr-lg border border-emerald-900/10 bg-amber-50 shadow-card" />
              <div className="absolute top-3 h-12 w-1 rounded-full bg-emerald-900/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto mb-10 w-full max-w-2xl min-w-0 text-center">
      {eyebrow && (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.28em] ${dark ? 'text-amber-300' : 'text-amber-700'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-emerald-950'}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-8 ${dark ? 'text-white/75' : 'text-slate-600'}`}>{text}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden bg-cream text-slate-900">
      <Header />
      <main className="w-full max-w-full overflow-hidden">
        <section id="home" className={`relative ${sectionShell} pb-16 pt-10 lg:pb-24 lg:pt-20`}>
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(6,95,70,0.16),transparent_34%)]" />
          <div className={`${sectionInner} grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]`}>
            <div className="animate-rise text-center lg:text-left">
              <div className="mx-auto mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-900 shadow-card lg:mx-0">
                <Sprout size={17} className="text-amber-600" />
                Learn. Grow. Succeed.
              </div>
              <h1 className="break-words font-serif text-5xl font-black leading-[1.05] tracking-tight text-emerald-950 sm:text-6xl lg:text-7xl">
                Strong Roots. <span className="text-amber-600">Bright Future.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-650 lg:mx-0">
                Premium coaching for students.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-6 py-4 text-base font-bold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-emerald-800">
                  <Phone size={19} /> Call Now
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white px-6 py-4 text-base font-bold text-emerald-950 shadow-card transition duration-300 hover:-translate-y-1 hover:border-amber-400">
                  <GraduationCap size={19} /> Join Admission
                </a>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </section>

        <section className={`${sectionShell} py-10`} aria-label="Institute highlights">
          <div className={`${sectionInner} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
            {trustHighlights.map(({ title, text, icon: Icon }) => (
              <article key={title} className="group rounded-3xl border border-emerald-950/10 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-900 group-hover:text-amber-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className={`${sectionShell} py-16`}>
          <div className={`${sectionInner} grid gap-8 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-card sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12`}>
            <div className="rounded-[1.5rem] bg-emerald-950 p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">About</p>
              <h2 className="mt-4 font-serif text-3xl font-bold">About The Root Institute</h2>
              <div className="mt-8 flex items-center gap-3 text-amber-200">
                <Leaf />
                <span className="font-semibold">Strong basics. Better confidence.</span>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-lg leading-9 text-slate-650">
                The Root Institute of Education is a dedicated coaching institute guided by Director Prashant Srivastava. The institute focuses on building strong academic foundations for students from Class 6 to 10 in all subjects, and provides focused Mathematics coaching for Class 11 and 12. With regular tests, quality notes, and personal guidance, students get the right support for school and board exam preparation.
              </p>
            </div>
          </div>
        </section>

        <section id="classes" className={`bg-white/55 ${sectionShell} py-16`}>
          <div className={sectionInner}>
            <SectionHeader eyebrow="Classes" title="Focused Coaching from Class 6 to 12" text="Two clear academic programs support school learning, board preparation, and confident concept development." />
            <div className="grid w-full min-w-0 gap-5 lg:grid-cols-2">
              {classCards.map(({ title, subtitle, badge, icon: Icon, details }) => (
                <article key={title} className="min-w-0 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8">
                  <div className="mb-6 flex min-w-0 flex-wrap items-center justify-between gap-3">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-700">
                      <Icon size={26} />
                    </div>
                    <span className="min-w-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">{badge}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-emerald-950">{title}</h3>
                  <p className="mt-2 text-lg font-bold text-amber-700">{subtitle}</p>
                  <ul className="mt-6 space-y-3">
                    {details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-base leading-7 text-slate-600">
                        <CheckCircle2 className="mt-1 shrink-0 text-emerald-700" size={18} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className={`${sectionShell} py-16`}>
          <div className={sectionInner}>
            <SectionHeader eyebrow="Why Choose Us" title="A Premium Local Institute with Personal Care" text="Parents can trust a disciplined, simple, and concept-first approach made for school success and board readiness." />
            <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyUs.map(({ title, icon: Icon }) => (
                <article key={title} className="flex min-w-0 items-start gap-4 rounded-3xl border border-emerald-950/10 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-900 text-amber-300">
                    <Icon size={23} />
                  </div>
                  <h3 className="pt-2 font-serif text-xl font-bold leading-7 text-emerald-950">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className={`bg-emerald-950 ${sectionShell} py-16 text-white`}>
          <div className={`${sectionInner} grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center`}>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">Study Material</p>
              <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">Printed & PDF Notes</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Students get well-structured notes in printed or PDF format to make revision easier and more effective.
              </p>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              {['Organized chapters', 'Easy revision', 'Exam-focused points', 'Available in PDF'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/8 p-5 shadow-card backdrop-blur">
                  <FileText className="text-amber-300" size={26} />
                  <p className="mt-4 font-serif text-xl font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tests" className={`${sectionShell} py-16`}>
          <div className={sectionInner}>
            <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-400 via-amber-300 to-emerald-200 p-1 shadow-premium">
              <div className="grid gap-6 rounded-[calc(2rem-4px)] bg-white px-6 py-10 sm:px-10 lg:grid-cols-[0.35fr_1fr] lg:items-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-[2rem] bg-emerald-950 text-amber-300 lg:mx-0">
                  <ClipboardCheck size={42} />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-700">Weekly Test Section</p>
                  <h2 className="mt-4 font-serif text-3xl font-bold text-emerald-950 sm:text-4xl">Weekly Tests for Better Results</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Regular weekly tests help students track progress, improve weak areas, and prepare confidently for exams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`bg-emerald-950 ${sectionShell} py-16 text-white`}>
          <div className={sectionInner}>
            <SectionHeader eyebrow="How We Teach" title="A Clear Study Rhythm" text="Concept-based teaching, doubt clearing, notes, and testing keep students consistent, confident, and exam-ready." dark />
            <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {teachingSteps.map((step, index) => (
                <article key={step} className="rounded-3xl border border-white/10 bg-white/8 p-5 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/12">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-300 font-serif text-xl font-black text-emerald-950">{index + 1}</span>
                  <h3 className="mt-5 font-serif text-xl font-bold">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionShell} py-16`}>
          <div className={sectionInner}>
            <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-400 via-amber-300 to-emerald-200 p-1 shadow-premium">
              <div className="rounded-[calc(2rem-4px)] bg-emerald-950 px-6 py-10 text-center text-white sm:px-10">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-200">Admission Open</p>
                <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">Admission Open for Class 6 to 12</h2>
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">Enroll for all subjects from Class 6 to 10 or focused Mathematics coaching for Class 11 and 12.</p>
                <a href={PHONE_LINK} className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-emerald-950 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-amber-100">
                  <Phone size={19} /> Call for Admission
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className={`${sectionShell} py-16`}>
          <div className={sectionInner}>
            <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-emerald-950/10 bg-white p-6 text-center shadow-card sm:p-10">
              <MapPin className="mx-auto text-amber-600" size={34} />
              <h2 className="mt-4 font-serif text-3xl font-bold text-emerald-950 sm:text-4xl">Location</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Location will be updated soon.</p>
            </div>
          </div>
        </section>

        <section id="contact" className={`bg-white/60 ${sectionShell} py-16`}>
          <div className={sectionInner}>
            <SectionHeader eyebrow="Contact" title="Visit or Call The Root Institute" text="Speak with the institute for admissions, class details, fees, and available seats." />
            <div className="grid w-full min-w-0 gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="min-w-0 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-card sm:p-8">
                <dl className="grid gap-5 sm:grid-cols-2">
                  {[
                    ['Institute Name', INSTITUTE_NAME],
                    ['Director', DIRECTOR],
                    ['Phone', PHONE_NUMBER],
                    ['Classes', '6 to 12'],
                    ['Boards', 'CBSE & Bihar Board'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-3xl bg-cream p-5">
                      <dt className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{label}</dt>
                      <dd className="mt-2 font-semibold leading-7 text-emerald-950">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-soft sm:p-8">
                <MapPin className="text-amber-300" size={34} />
                <h3 className="mt-5 font-serif text-3xl font-bold">Ready to begin?</h3>
                <p className="mt-3 leading-7 text-white/75">Call or WhatsApp to ask about admissions, class timings, fees, and available seats.</p>
                <div className="mt-7 grid gap-3">
                  <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-bold text-emerald-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-100">
                    <Phone size={19} /> Call Now
                  </a>
                  <a href={WHATSAPP_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-400">
                    <MessageCircle size={19} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full max-w-full overflow-hidden border-t border-emerald-950/10 bg-cream px-4 py-8 text-center text-sm font-medium text-slate-600">
        © 2026 The Root Institute of Education. Directed by Prashant Srivastava.
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
