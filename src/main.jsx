import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookOpen,
  BrainCircuit,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Target,
  Trophy,
  UserCheck,
} from 'lucide-react';
import './styles.css';

const PHONE_NUMBER = '+91 98765 43210';
const PHONE_LINK = 'tel:+919876543210';
const WHATSAPP_LINK = 'https://wa.me/919876543210';
const ADDRESS = 'Near Main Market, Bihar - 800001';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const trustHighlights = [
  { title: 'Class 8 to 10', text: 'Focused academic support for middle and high school learners.', icon: GraduationCap },
  { title: 'Bihar Board Focused', text: 'Teaching aligned with Bihar Board syllabus and exam needs.', icon: Target },
  { title: 'Personal Attention', text: 'A single-teacher model with careful guidance for every child.', icon: UserCheck },
  { title: 'Concept-Based Teaching', text: 'Strong foundations before shortcuts, formulas, and memorization.', icon: BrainCircuit },
];

const classCards = ['Class 8', 'Class 9', 'Class 10'];

const classDetails = [
  'Bihar Board syllabus',
  'Maths, Science, Social Science, English support',
  'Regular practice',
  'Doubt clearing',
];

const whyUs = [
  { title: 'One teacher, personal guidance', icon: UserCheck },
  { title: 'Focus on weak students', icon: ShieldCheck },
  { title: 'Regular tests and revision', icon: CalendarCheck },
  { title: 'Board exam preparation', icon: Trophy },
  { title: 'Simple explanation in student-friendly language', icon: MessageCircle },
  { title: 'Discipline and study routine', icon: CheckCircle2 },
];

const teachingSteps = [
  'Concept explanation',
  'Daily practice',
  'Doubt solving',
  'Weekly test',
  'Revision before exams',
];

const sectionShell = 'w-full max-w-full overflow-hidden px-4 sm:px-6 lg:px-8';
const sectionInner = 'mx-auto w-full max-w-6xl';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-hidden border-b border-emerald-950/10 bg-cream/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="The Root Institute of Education home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-900 text-amber-300 shadow-soft transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <Sprout size={24} strokeWidth={2.4} />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-bold tracking-tight text-emerald-950 sm:text-xl">The Root Institute</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">of Education</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-emerald-950/75 transition hover:text-emerald-800">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2.5 text-sm font-bold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800">
            <Phone size={16} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-emerald-950/10 text-emerald-950 lg:hidden" aria-label="Navigation menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>
      <div className="border-t border-emerald-950/5 px-4 pb-3 lg:hidden">
        <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-emerald-950 shadow-card transition hover:bg-amber-100">
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
    <div className="relative mx-auto w-full max-w-sm animate-float lg:max-w-md" aria-label="Tree growing from an open book illustration">
      <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl" />
      <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl" />
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/80 bg-white p-6 shadow-premium">
        <div className="mb-6 flex items-center justify-between">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Bihar Board</span>
          <Sparkles className="text-amber-500" size={22} />
        </div>

        <div className="relative grid min-h-72 place-items-center rounded-[1.5rem] bg-gradient-to-b from-emerald-50 to-amber-50/70 p-5">
          <div className="absolute left-7 top-8 rounded-2xl bg-white/85 p-3 shadow-card">
            <BookOpen className="text-emerald-800" size={22} />
          </div>
          <div className="absolute right-7 top-12 rounded-2xl bg-white/85 p-3 shadow-card">
            <Star className="fill-amber-400 text-amber-500" size={20} />
          </div>
          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/85 px-3 py-2 text-xs font-bold text-emerald-900 shadow-card">8 • 9 • 10</div>

          <div className="relative mt-6 flex flex-col items-center">
            <div className="relative h-36 w-40">
              <div className="absolute bottom-0 left-1/2 h-28 w-4 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-700 to-amber-900" />
              <div className="absolute bottom-14 left-1/2 h-14 w-3 origin-bottom -rotate-45 rounded-full bg-amber-800" />
              <div className="absolute bottom-16 left-1/2 h-16 w-3 origin-bottom rotate-45 rounded-full bg-amber-800" />
              <div className="absolute left-8 top-4 grid h-24 w-24 place-items-center rounded-full bg-emerald-700 text-white shadow-soft">
                <Leaf size={32} />
              </div>
              <div className="absolute right-6 top-0 h-20 w-20 rounded-full bg-emerald-600" />
              <div className="absolute left-20 top-0 h-24 w-24 rounded-full bg-emerald-800/95" />
              <div className="absolute left-14 top-12 h-20 w-20 rounded-full bg-emerald-500" />
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
    <div className="mx-auto mb-10 max-w-2xl text-center">
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
                Premium coaching for Bihar Board students
              </div>
              <h1 className="font-serif text-5xl font-black leading-[1.05] tracking-tight text-emerald-950 sm:text-6xl lg:text-7xl">
                Strong Roots. <span className="text-amber-600">Bright Future.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-650 lg:mx-0">
                Class 8 to 10 Bihar Board coaching by a dedicated single teacher with personal attention for every student.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

        <section className={`${sectionShell} py-10`}>
          <div className={`${sectionInner} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
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
                The Root Institute of Education is a dedicated coaching center for Bihar Board students from Class 8 to 10. Since it is guided by a single teacher, every student gets personal attention, regular guidance, and strong concept clarity.
              </p>
            </div>
          </div>
        </section>

        <section id="classes" className={`bg-white/55 ${sectionShell} py-16`}>
          <div className={sectionInner}>
            <SectionHeader eyebrow="Classes" title="Focused Coaching for Class 8, 9 and 10" text="Each batch is designed around Bihar Board syllabus needs, regular practice, and steady academic improvement." />
            <div className="grid w-full gap-5 md:grid-cols-3">
            {classCards.map((className) => (
              <article key={className} className="rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-100 text-amber-700">
                    <BookOpen size={26} />
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">Bihar Board</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-emerald-950">{className}</h3>
                <ul className="mt-5 space-y-3">
                  {classDetails.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={18} />
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
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map(({ title, icon: Icon }) => (
              <article key={title} className="flex items-start gap-4 rounded-3xl border border-emerald-950/10 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-900 text-amber-300">
                  <Icon size={23} />
                </div>
                <h3 className="pt-2 font-serif text-xl font-bold leading-7 text-emerald-950">{title}</h3>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className={`bg-emerald-950 ${sectionShell} py-16 text-white`}>
          <div className={sectionInner}>
            <SectionHeader eyebrow="How We Teach" title="How We Teach" text="A clear weekly rhythm keeps students consistent, confident, and ready for exams." dark />
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
              <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">Admission Open for Class 8, 9 and 10</h2>
              <a href={PHONE_LINK} className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-emerald-950 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-amber-100">
                <Phone size={19} /> Call for Admission
              </a>
            </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`bg-white/60 ${sectionShell} py-16`}>
          <div className={sectionInner}>
            <SectionHeader eyebrow="Contact" title="Visit or Call The Root Institute" text="Use the placeholder phone number and address below, then replace them with your institute details when ready." />
            <div className="grid w-full gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-card sm:p-8">
              <dl className="grid gap-5 sm:grid-cols-2">
                {[
                  ['Institute Name', 'The Root Institute of Education'],
                  ['Classes', '8 to 10'],
                  ['Board', 'Bihar Board'],
                  ['Phone', PHONE_NUMBER],
                  ['Address', ADDRESS],
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
                <a href={WHATSAPP_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-400">
                  <MessageCircle size={19} /> WhatsApp
                </a>
                <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-bold text-emerald-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-100">
                  <Phone size={19} /> Call
                </a>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full max-w-full overflow-hidden border-t border-emerald-950/10 bg-cream px-4 py-8 text-center text-sm font-medium text-slate-600">
        © 2026 The Root Institute of Education. All rights reserved.
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
