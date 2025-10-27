import { motion } from "framer-motion";
import { Play, ShoppingBag, Building2, GraduationCap, CalendarDays, Wrench } from "lucide-react";

const demoVideos = [
  {
    title: "Send 1,000 messages in one click",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Automate replies instantly",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Track delivery & engagement",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const useCases = [
  { icon: ShoppingBag, title: "E‑Commerce", desc: "Send offers & abandoned cart alerts." },
  { icon: Building2, title: "Real Estate", desc: "Follow-up with leads at scale." },
  { icon: GraduationCap, title: "Education", desc: "Share admissions and class updates." },
  { icon: CalendarDays, title: "Events", desc: "Send invites, reminders & confirmations." },
  { icon: Wrench, title: "Service Businesses", desc: "Schedule appointments & reminders." },
];

export default function DemoUseCases() {
  return (
    <section id="demo" className="relative bg-[#0A0F16] py-16 text-white md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Live Demo */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">See WapBot in Action 🚀</h2>
          <p className="mt-2 text-white/60">
            Watch real product demos of WapBot automating WhatsApp marketing and customer support.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoVideos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={v.url}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center gap-2 p-4 text-sm text-white/80">
                <Play className="h-4 w-4 text-[#25D366]" />
                {v.title}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-[#0A0F16] shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
          >
            Try WapBot Live Demo
          </a>
        </div>

        {/* Use Cases */}
        <div className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Use Cases</h3>
            <p className="mt-2 text-white/60">Built for growth across industries.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {useCases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-3 inline-flex rounded-xl bg-[#25D366]/10 p-2 text-[#25D366]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-1 text-sm text-white/70">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
