import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BookOpen, Trophy, ClipboardCheck, HeartHandshake, Moon, Phone, Mail, MapPin, GraduationCap } from "lucide-react";
import { SCHOOL, PRINCIPAL, FACULTY, FEATURES, GRADES, SUBJECTS, WHY_US } from "@/constants/school";
import { AdmissionForm } from "@/components/site/AdmissionForm";
import { CampusGallery } from "@/components/site/CampusGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Government Elementary School Tibba Pir Tannun" },
      { name: "description", content: "Quality education, moral training and a bright future — Nursery to Class 8 in Tibba Pir Tannun, Punjab." },
      { property: "og:title", content: "Government Elementary School Tibba Pir Tannun" },
      { property: "og:description", content: "معیاری تعلیم — بہترین تربیت — روشن مستقبل. Admissions open, Nursery to Class 8." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons = [BookOpen, Trophy, ClipboardCheck, HeartHandshake, Moon];

function Index() {
  const [open, setOpen] = useState(false);
  const links = ["Principal", "Campus", "Faculty", "Features", "Classes", "Admissions", "Contact"];
  return (
    <main>
      <nav className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
            <GraduationCap className="h-6 w-6 text-gold" /> GES Tibba Pir Tannun
          </a>
          <div className="hidden gap-6 text-sm md:flex">
            {["Principal", "Campus", "Faculty", "Features", "Classes", "Admissions", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="text-muted-foreground hover:text-primary">{s}</a>
            ))}
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 text-primary md:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            {links.map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setOpen(false)} className="block px-5 py-3 font-medium text-primary hover:bg-secondary">{s}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header id="top" className="hero-bg text-primary-foreground">
        <div className="container-x py-20 text-center md:py-28">
          <p className="font-urdu text-2xl text-gold md:text-3xl">{SCHOOL.nameUr}</p>
          <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">{SCHOOL.name}</h1>
          <p className="font-urdu mt-6 text-xl md:text-2xl" dir="rtl">{SCHOOL.tagline}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`tel:${SCHOOL.phone}`} className="btn-gold"><Phone className="h-4 w-4" /> {SCHOOL.phone}</a>
            <a href={`mailto:${SCHOOL.email}`} className="btn-ghost-light"><Mail className="h-4 w-4" /> {SCHOOL.email}</a>
            <span className="btn-ghost-light"><MapPin className="h-4 w-4" /> {SCHOOL.location}</span>
          </div>
        </div>
      </header>

      {/* 1. Principal */}
      <section id="principal" className="container-x py-20">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,380px)_1fr]">
          <div className="photo-frame mx-auto w-full max-w-sm">
            <span className="photo-number">01</span>
            <img
              src="/headmaster_amjad_ali.jpg"
              alt={`${PRINCIPAL.name}, Headmaster`}
              className="aspect-[3/4] w-full rounded-xl object-cover object-top"
            />
          </div>
          <div>
            <p className="eyebrow">Headmaster's Welcome</p>
            <h2 className="section-title">{PRINCIPAL.name}</h2>
            <p className="mt-2 font-medium text-gold-deep">{PRINCIPAL.role} · {PRINCIPAL.qualification}</p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Under the leadership of {PRINCIPAL.name}, our school is committed to quality education, moral upbringing, and a bright future for every child of Tibba Pir Tannun.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href={`tel:${SCHOOL.phone}`} className="chip"><Phone className="h-4 w-4" /> {SCHOOL.phone}</a>
              <a href={`mailto:${SCHOOL.email}`} className="chip"><Mail className="h-4 w-4" /> {SCHOOL.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Campus */}
      <section id="campus" className="bg-secondary py-20">
        <div className="container-x grid items-center gap-10 md:grid-cols-[1fr_minmax(0,560px)]">
          <div className="md:order-1 order-2">
            <p className="eyebrow">Our Campus</p>
            <h2 className="section-title">A safe place to learn &amp; grow</h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Secure school premises with spacious sports grounds, free textbook distribution, and classrooms where children from Nursery to Class 8 learn every day.
            </p>
          </div>
          <div className="photo-frame order-1 md:order-2">
            <span className="photo-number">02</span>
            <CampusGallery />
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="container-x py-20">
        <p className="eyebrow text-center">قابل اور تعلیم یافتہ سٹاف</p>
        <h2 className="section-title text-center">Administration &amp; Faculty</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-surface border-2 border-gold/70 p-6 sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-card via-card to-gold/10">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-gold shadow-md">
              <img
                src="/headmaster_amjad_ali.jpg"
                alt={PRINCIPAL.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="inline-block rounded-full bg-gold/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-gold-deep">
                Head of Institution
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-primary">{PRINCIPAL.name}</p>
              <p className="font-medium text-gold-deep">{PRINCIPAL.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{PRINCIPAL.qualification}</p>
            </div>
          </div>
          {FACULTY.map((t) => (
            <div key={t.name} className="card-surface p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-primary-foreground">{t.name.split(" ").pop()![0]}</div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.qualification}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="hero-bg py-20 text-primary-foreground">
        <div className="container-x">
          <p className="eyebrow text-center text-gold font-urdu">نمایاں خصوصیات</p>
          <h2 className="section-title text-center text-primary-foreground">Key Features</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURES.map((f, i) => {
              const Icon = icons[i] ?? BookOpen;
              return (
                <div key={f.en} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                  <Icon className="h-8 w-8 text-gold" />
                  <p className="font-urdu mt-4 text-lg" dir="rtl">{f.ur}</p>
                  <p className="font-semibold">{f.en}</p>
                  <p className="mt-2 text-sm opacity-80">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="container-x py-20">
        <p className="eyebrow text-center">Academic Programs</p>
        <h2 className="section-title text-center">Nursery to Class 8</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {GRADES.map((g) => <div key={g} className="card-surface py-5 text-center font-semibold text-primary">{g}</div>)}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SUBJECTS.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary py-20">
        <div className="container-x">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w, i) => (
              <div key={w.title} className="card-surface p-6">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <p className="mt-2 font-semibold text-primary">{w.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="container-x py-20">
        <p className="eyebrow text-center">Admissions Open</p>
        <h2 className="section-title text-center">Admission Inquiry Form</h2>
        <div className="mx-auto mt-10 max-w-3xl"><AdmissionForm /></div>
      </section>

      {/* Contact */}
      <footer id="contact" className="hero-bg text-primary-foreground">
        <div className="container-x grid gap-10 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Contact Us</h2>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3"><Phone className="h-5 w-5 text-gold" /> {SCHOOL.phone} ({PRINCIPAL.name})</li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-gold" /> {SCHOOL.email}</li>
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-gold" /> {SCHOOL.location}</li>
            </ul>
          </div>
          <iframe title="Map" className="h-64 w-full rounded-2xl border-0" loading="lazy"
            src="https://www.google.com/maps?q=Tibba+Pir+Tannun+Punjab+Pakistan&output=embed" />
        </div>
        <p className="border-t border-primary-foreground/15 py-5 text-center text-sm opacity-70">© {new Date().getFullYear()} {SCHOOL.name}</p>
      </footer>
    </main>
  );
}
