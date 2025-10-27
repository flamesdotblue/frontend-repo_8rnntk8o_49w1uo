import { motion } from "framer-motion";
import { Play, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F16] text-white">
      {/* Background gradient and floating shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-[#25D366]/20 to-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp Automation & Marketing</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Automate WhatsApp Marketing & Engage Customers Instantly
            </h1>
            <p className="max-w-xl text-white/70">
              WapBot helps businesses send bulk messages, set auto-replies, and track
              conversations — all in one dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-[#0A0F16] shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
              >
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Get a Free Trial
              </a>
            </div>

            {/* Trusted logos */}
            <div className="pt-6">
              <p className="text-xs uppercase tracking-wider text-white/50">
                Trusted by 200+ businesses
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-6 opacity-80">
                {[
                  "ZentroKart",
                  "Nova Realty",
                  "EduPrime",
                  "Eventia",
                  "ServicePro",
                ].map((brand) => (
                  <div
                    key={brand}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mockup card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="mx-auto w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="rounded-xl bg-[#0C121B] p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-white/50">
                  <span>WapBot Dashboard</span>
                  <span>Live • Analytics</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "Bulk Campaign", value: "1,000+" },
                    { title: "Auto-Replies", value: "Instant" },
                    { title: "Delivery Rate", value: "98%" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                    >
                      <p className="text-[10px] text-white/60">{item.title}</p>
                      <p className="text-lg font-bold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="mb-2 text-xs text-white/60">WhatsApp Chat Preview</p>
                  <div className="space-y-2">
                    <div className="w-max max-w-full rounded-2xl bg-[#0F1723] px-3 py-2 text-sm text-white/90 shadow-md">
                      Hi John! 🎉 Enjoy 20% off on your next order. Reply YES to claim.
                    </div>
                    <div className="ml-auto w-max max-w-full rounded-2xl bg-[#25D366]/90 px-3 py-2 text-sm text-[#0A0F16] shadow-md">
                      YES
                    </div>
                    <div className="w-max max-w-full rounded-2xl bg-[#0F1723] px-3 py-2 text-sm text-white/90 shadow-md">
                      Awesome! Your coupon code is WAP20. 🎁
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
