import { motion } from "framer-motion";
import {
  MessageCircle,
  Bot,
  Calendar,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Bulk Messaging Campaigns",
    desc: "Reach thousands with personalized WhatsApp broadcasts.",
  },
  {
    icon: Bot,
    title: "Smart Auto-Reply Chatbot",
    desc: "Respond instantly with AI-powered conversational flows.",
  },
  {
    icon: Calendar,
    title: "Message Scheduling",
    desc: "Queue campaigns for perfect timing across timezones.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Delivery Analytics",
    desc: "Monitor delivery, reads, and replies in real time.",
  },
  {
    icon: Users,
    title: "Multi-Agent Dashboard",
    desc: "Collaborate with your team and track performance.",
  },
];

const steps = [
  {
    title: "Connect Your WhatsApp Account",
    desc: "Securely link your number in minutes.",
  },
  {
    title: "Upload Contacts",
    desc: "Import CSV or sync from your CRM.",
  },
  {
    title: "Create and Send Campaign",
    desc: "Compose, personalize, and launch.",
  },
  {
    title: "Track Delivery & Engagement",
    desc: "See delivery, click, and reply insights.",
  },
];

export default function FeaturesProcess() {
  return (
    <section className="relative bg-[#0A0F16] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-40 w-[80%] -translate-x-1/2 rounded-b-[50%] bg-gradient-to-b from-[#25D366]/10 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Features */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Key Features</h2>
          <p className="mt-2 text-white/60">
            Tools that power fast, compliant WhatsApp marketing.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-3 inline-flex rounded-xl bg-[#25D366]/10 p-2 text-[#25D366]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
            <p className="mt-2 text-white/60">Get started in four easy steps.</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 hidden h-1 bg-gradient-to-r from-transparent via-[#25D366]/40 to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="mb-3 inline-flex items-center gap-2 text-[#25D366]">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-xs">Step {i + 1}</span>
                  </div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
