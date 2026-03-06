import { motion } from "motion/react";
import { Check } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for hobbyists and small projects.",
    features: ["3 AI-generated sites", "Standard templates", "Community support", "Basic analytics"],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Everything you need to scale your business.",
    features: ["Unlimited AI sites", "Premium templates", "Priority support", "Advanced analytics", "Custom domains"],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features for large organizations.",
    features: ["Dedicated account manager", "Custom AI training", "SSO & Security", "Unlimited users", "SLA guarantee"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <div className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include our core AI engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlighted 
                  ? "bg-white/10 border-white/20 shadow-2xl scale-105 z-20" 
                  : "bg-white/5 border-white/10"
              } backdrop-blur-xl flex flex-col`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-white/40 text-sm">/mo</span>}
                </div>
                <p className="text-sm text-white/60">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-white" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <GlassButton 
                variant={plan.highlighted ? "default" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </GlassButton>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
