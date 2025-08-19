export default function Page() {
  return (
    <main>
            {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="nav-glass">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <a href="#" className="font-extrabold tracking-tight text-xl text-white">
              Systemize<span className="text-brand-500">IT</span>
            </a>

            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#automations" className="text-slate-200 hover:text-white">Automations</a>
              <a href="#ads" className="text-slate-200 hover:text-white">Ads</a>
              <a href="#process" className="text-slate-200 hover:text-white">How it works</a>
              <a href="#book" className="text-slate-200 hover:text-white">Contact</a>
            </nav>

            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-brand-600 text-white px-4 py-2 text-sm font-semibold hover:bg-brand-700 shadow-[0_8px_28px_rgba(88,101,242,0.45)] ring-1 ring-white/10 transition-all"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </header>


            {/* HERO */}
      <section className="relative hero-galaxy">
        <div className="mx-auto max-w-5xl px-4 py-24 md:py-32 text-center">
          <h1
            className="
              text-4xl md:text-6xl font-extrabold tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-brand-500 via-indigo-300 to-cyan-300
              drop-shadow-[0_8px_32px_rgba(88,101,242,0.35)]
            "
            style={{ letterSpacing: "-0.02em" }}
          >
            Automations &amp; Ads That Grow Your Business.
          </h1>

          <p className="mt-5 text-lg md:text-xl text-slate-200/90">
            We help small businesses stop wasting time and bring in more customers with done-for-you systems and ads.
          </p>

          <p className="mt-3 text-base md:text-lg font-medium text-slate-300/80">
            Cut your admin time in half. Double your leads. Look professional without hiring a team.
          </p>

          <div className="mt-10">
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-brand-600 text-white px-5 py-2.5 font-semibold hover:bg-brand-700 shadow-[0_10px_30px_rgba(88,101,242,0.40)] ring-1 ring-white/10 transition-all"

            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>


                  {/* WHO WE HELP */}
      <section className="relative bg-[#0b1020]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                For service businesses tired of juggling it all.
              </h2>
              <p className="mt-4 text-slate-300">
                We work with contractors, HVAC companies, cleaners, gyms, med spas, and more.
                If your business runs on texts, DMs, and scattered notes, we’ll replace the chaos
                with systems that run themselves.
              </p>

              <ul className="mt-6 space-y-3 text-slate-200">
                {[
                  "Too much manual admin",
                  "Inconsistent lead flow",
                  "No single source of truth",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600/20 text-brand-500">
                      {/* check icon */}
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#book"
                  className="inline-flex items-center rounded-full bg-brand-600 text-white px-5 py-2.5 font-semibold hover:bg-brand-700 shadow-[0_10px_30px_rgba(88,101,242,0.40)] ring-1 ring-white/10 transition-all"
                >
                  Book a Free Call
                </a>
              </div>
            </div>

            {/* feature tiles */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Booking & reminders", desc: "Stop no-shows and lost time." },
                { title: "Automated workflows", desc: "Less copy-paste, more done." },
                { title: "Dashboards", desc: "See everything at a glance." },
                { title: "Ads that convert", desc: "Track every dollar and lead." },
              ].map((f) => (
                <div key={f.title} className="card-glass rounded-2xl p-5 text-slate-200">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600/15 text-brand-500">
                    {/* simple spark icon */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="font-semibold text-white">{f.title}</div>
                  <div className="text-sm text-slate-300">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

