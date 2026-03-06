import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the AI actually build the website?",
    answer: "Our AI analyzes your business goals, brand identity, and content requirements to generate a custom layout, copy, and design system. It uses advanced neural networks to ensure every site is unique and high-performing.",
  },
  {
    question: "Can I edit the website after it's generated?",
    answer: "Absolutely! You have full control over every element. Our intuitive editor allows you to tweak layouts, change colors, swap images, and update copy as much as you like.",
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all. AI Autos is designed for everyone. While developers can dive into the code if they want, most of our users build professional-grade sites without writing a single line of CSS or HTML.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 community support for all users. Pro and Enterprise customers get priority access to our dedicated support team via live chat and email.",
  },
  {
    question: "Can I use my own domain?",
    answer: "Yes, Pro and Enterprise plans support custom domain connection. We also provide a free .aiautos.site subdomain for all projects.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">
              Everything you need to know about AI Autos.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white/40" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/40" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-white/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
