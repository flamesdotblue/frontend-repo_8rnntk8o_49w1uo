import { motion } from "framer-motion";
import { Star, Check, Shield, HelpCircle, Mail, Phone, User, Building2 } from "lucide-react";

const testimonials = [
  {
    quote: "WapBot helped us convert 3x more leads via WhatsApp.",
    name: "Amit Sharma",
    role: "Founder, ZentroKart",
    rating: 5,
  },
  {
    quote: "The auto-reply flows reduced our support load by 60%.",
    name: "Priya N.",
    role: "Head of CX, Nova Realty",
    rating: 5,
  },
  {
    quote: "Scheduling campaigns is a game-changer for our events.",
    name: "Daniel K.",
    role: "Organizer, Eventia",
    rating: 5,
  },
];

const plans = [
  {
    name: "Starter",
    price: "$29/mo",
    features: [
      "1,000 messages/mo",
      "Basic chatbot",
      "Campaign scheduler",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$99/mo",
    features: [
      "10,000 messages/mo",
      "Advanced chatbot",
      "Team inbox",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited messages",
      "SSO + Audit logs",
      "Dedicated CSM",
      "99.9% SLA",
    ],
  },
];

const faqs = [
  {
    q: "Can I use my own WhatsApp number?",
    a: "Yes. You can connect your existing number securely in minutes.",
  },
  {
    q: "Do I need WhatsApp Business API access?",
    a: "WapBot supports API and non-API flows depending on your scale and compliance needs.",
  },
  {
    q: "Is WapBot compliant with WhatsApp policies?",
    a: "Yes. We follow best practices for opt-in, rate limits, and content policies.",
  },
];

export default function SocialProof() {
  return (
    <section className="relative bg-[#0A0F16] py-16 text-white md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Testimonials */}
        <div className="mb-16" id="testimonials">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Loved by Growing Teams</h2>
            <p className="mt-2 text-white/60">
              Real results from real businesses using WapBot.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-2 flex gap-1 text-[#25D366]">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[#25D366] text-[#25D366]" />
                  ))}
                </div>
                <p className="text-sm text-white/80">“{t.quote}”</p>
                <div className="mt-4 text-xs text-white/60">
                  {t.name} — {t.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16" id="pricing">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Pricing</h2>
            <p className="mt-2 text-white/60">
              Start free, scale as you grow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative rounded-2xl border border-white/10 p-6 backdrop-blur ${
                  p.highlighted ? "bg-gradient-to-b from-[#25D366]/10 to-white/5" : "bg-white/5"
                }`}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 right-4 rounded-full bg-[#25D366] px-3 py-1 text-[10px] font-semibold text-[#0A0F16] shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-3xl font-extrabold">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#25D366]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-[#0A0F16] shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
                >
                  Start Free Trial
                </a>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/50">
            <Shield className="h-4 w-4" /> No credit card required • Cancel anytime
          </div>
        </div>

        {/* About + Contact */}
        <div className="mb-16" id="about">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-2xl font-bold">About WapBot</h2>
              <p className="mt-2 text-white/70">
                At WapBot, we’re helping businesses automate WhatsApp marketing with ease and
                efficiency. Our mission is to make customer engagement simple, smart, and scalable.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#25D366] to-teal-400" />
                <div>
                  <div className="font-semibold">The WapBot Team</div>
                  <div className="text-xs text-white/60">Passionate about customer engagement</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-2xl font-bold">Get an Estimate</h2>
              <p className="mt-1 text-white/60">We’ll get back within 24 hours.</p>
              <form className="mt-4 grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0C121B] px-3 py-2">
                    <User className="h-4 w-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0C121B] px-3 py-2">
                    <Mail className="h-4 w-4 text-white/40" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0C121B] px-3 py-2">
                    <Phone className="h-4 w-4 text-white/40" />
                    <input
                      type="tel"
                      placeholder="WhatsApp number"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0C121B] px-3 py-2">
                    <Building2 className="h-4 w-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Business type"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-[#0A0F16] shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
                >
                  Request Estimate
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16" id="faq">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">FAQ</h2>
            <p className="mt-2 text-white/60">Everything you need to know.</p>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            {faqs.map((item, idx) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left">
                  <span className="text-sm font-medium text-white/90">{item.q}</span>
                  <HelpCircle className="h-4 w-4 text-white/50 transition group-open:rotate-45" />
                </summary>
                <div className="px-5 pb-5 pt-0 text-sm text-white/70">{item.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 text-xl font-extrabold">
                <span className="h-6 w-6 rounded-lg bg-[#25D366]" /> WapBot
              </div>
              <p className="mt-2 max-w-md text-sm text-white/60">
                WapBot — WhatsApp Automation and Marketing Platform.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-white/60">
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </div>
            </div>
            <div className="md:text-right">
              <div className="space-x-4 text-sm text-white/60">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
              <a
                href="#pricing"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-[#0A0F16] shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
              >
                Start Your Free Trial Today
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 py-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} WapBot. All rights reserved.
          </div>
        </footer>

        {/* Floating WhatsApp support button */}
        <a
          href="#contact"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-[#0A0F16] shadow-xl shadow-emerald-500/30 transition hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M20.52 3.48A11.5 11.5 0 0 0 12.01 0C5.52 0 .26 5.26.26 11.75c0 2.07.54 4.08 1.58 5.86L0 24l6.57-1.72a11.72 11.72 0 0 0 5.43 1.38h.01c6.49 0 11.75-5.26 11.75-11.75 0-3.14-1.22-6.08-3.24-8.13zM12.01 21.3h-.01c-1.71 0-3.38-.46-4.84-1.33l-.35-.21-3.9 1.02 1.04-3.8-.23-.39a9.39 9.39 0 0 1-1.44-5.04c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.76a9.35 9.35 0 0 1 2.76 6.68c0 5.2-4.22 9.43-9.43 9.43zm5.18-6.95c-.28-.14-1.63-.81-1.88-.91-.25-.09-.43-.14-.61.14-.18.28-.7.91-.86 1.1-.16.2-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.41-.84-.75-1.41-1.68-1.57-1.96-.16-.28-.02-.44.12-.58.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.97 2.62 1.11 2.81c.14.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.32.23-.65.23-1.21.16-1.32-.07-.12-.25-.2-.53-.33z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
