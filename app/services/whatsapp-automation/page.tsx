"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiCpu, FiDatabase, FiSettings, FiArrowRight, FiCheck, FiSend } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  time: string;
}

export default function WhatsappAutomationPage() {
  const steps = [
    {
      num: "01",
      title: "Conversation Mapping",
      desc: "We research customer support logs, identify repetitive FAQs, and chart intent-recognition flow diagrams for conversational bots.",
      icon: <FiMessageSquare className="w-5 h-5 text-primary" />
    },
    {
      num: "02",
      title: "API Gateway Middleware",
      desc: "Our engineers configure Meta WhatsApp Cloud API credentials, set up secure serverless webhooks, and map routing configurations.",
      icon: <FiSettings className="w-5 h-5 text-primary" />
    },
    {
      num: "03",
      title: "E-Commerce Database Sync",
      desc: "We wire bot logic directly to your Shopify or WordPress inventory and CRM endpoints, enabling automated, real-time order tracking.",
      icon: <FiDatabase className="w-5 h-5 text-primary" />
    },
    {
      num: "04",
      title: "NLP & Dialect Training",
      desc: "Optimizing chatbot language models to interpret local dialects, typos, and hybrid Urdu-English syntax to ensure maximum accuracy.",
      icon: <FiCpu className="w-5 h-5 text-primary" />
    }
  ];

  const [chatStep, setChatStep] = useState<number>(0);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { sender: "bot", text: "👋 Hello! Welcome to Manzarkash Automations. How can I help you scale operations today?", time: "12:00 PM" }
  ]);

  const simulateChat = (optionIndex: number) => {
    if (chatStep !== 0) return;

    if (optionIndex === 0) {
      setChatStep(1);
      setChatHistory(prev => [...prev, 
        { sender: "user", text: "Track my order #4055 please", time: "12:01 PM" }
      ]);
      
      setTimeout(() => {
        setChatHistory(prev => [...prev, 
          { sender: "bot", text: "🔍 Querying database for Order #4055... \n\nFound it! Your package was dispatched via Apex Logistics and is currently in transit. \n🚚 Status: Out for delivery.", time: "12:01 PM" }
        ]);
        setChatStep(0);
      }, 1200);
    } else {
      setChatStep(2);
      setChatHistory(prev => [...prev, 
        { sender: "user", text: "Is the new catalog in stock?", time: "12:01 PM" }
      ]);

      setTimeout(() => {
        setChatHistory(prev => [...prev, 
          { sender: "bot", text: "🌸 Yes! The summer collection catalog is active. Here is your direct shop link: shop.manzarkash.com/summer-catalog\n\nWould you like to book an order now?", time: "12:01 PM" }
        ]);
        setChatStep(0);
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>CRM AUTOMATIONS & CHATBOTS</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              WHATSAPP AUTOMATION <br />
              <span className="text-primary">& OPERATIONS SCALE</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-505 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We connect custom NLP chatbots and CRM broadcast scripts to your WhatsApp Business API, scaling conversions and reducing manual ticketing workloads.
            </p>
          </div>
        </section>

        <section className="py-16 bg-zinc-50 dark:bg-zinc-955/40 border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-550 uppercase tracking-widest font-bold font-michroma">INTERACTIVE SIMULATION</span>
              <h3 className={`${styles.heading_3} !text-base sm:!text-lg text-zinc-800 dark:text-zinc-100 uppercase mt-1`}>Click below to simulate bot flow</h3>
            </div>

            <div className="max-w-md mx-auto bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[36px] p-4 shadow-xl overflow-hidden relative">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-zinc-200 dark:bg-zinc-950 flex items-center justify-center pointer-events-none z-30">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-850 inline-block mr-2" />
                <span className="w-12 h-1 rounded-full bg-zinc-400 dark:bg-zinc-850 inline-block" />
              </div>

              <div className="rounded-[28px] overflow-hidden bg-[#ece5dd] dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-850 mt-4 flex flex-col h-[400px]">
                <div className="bg-[#075e54] dark:bg-zinc-900 text-white p-4 flex items-center justify-between shadow-sm z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center font-michroma text-xs font-bold text-emerald-400 border border-emerald-450/30">
                      MK
                    </div>
                    <div>
                      <p className="text-xs font-bold font-poppins">Manzarkash Assistant</p>
                      <span className="text-[9px] font-mono text-emerald-400 font-bold block uppercase leading-none mt-0.5">ONLINE</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col z-10">
                  {chatHistory.map((msg, i) => (
                    <div
                      key={i}
                      className={`max-w-[75%] p-3 rounded-2xl text-xs font-poppins leading-relaxed font-light shadow-xs relative ${
                        msg.sender === "bot"
                          ? "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-250 self-start border border-zinc-200/30 dark:border-zinc-800/40 rounded-tl-xs"
                          : "bg-[#dcf8c6] dark:bg-emerald-950 dark:text-emerald-50 text-zinc-900 self-end rounded-tr-xs"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {msg.text}
                      <span className="text-[8px] font-mono text-zinc-400 text-right block mt-1 leading-none">{msg.time}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-[#f0f0f0] dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-850 flex flex-col gap-2 z-20">
                  {chatStep === 0 ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => simulateChat(0)}
                        className="flex-1 py-2 px-3 rounded-xl bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 text-[10px] font-poppins font-medium hover:border-primary dark:hover:border-primary text-zinc-705 dark:text-zinc-300 transition-colors shadow-xs"
                      >
                        "Track order #4055"
                      </button>
                      <button
                        onClick={() => simulateChat(1)}
                        className="flex-1 py-2 px-3 rounded-xl bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 text-[10px] font-poppins font-medium hover:border-primary dark:hover:border-primary text-zinc-705 dark:text-zinc-300 transition-colors shadow-xs"
                      >
                        "Check summer catalog"
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-[10px] font-mono text-zinc-450 tracking-wider uppercase animate-pulse py-2">
                      Assistant is typing...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>AUTOMATION ROADMAP</Eyebrow>
              <h2 className={`${styles.heading_2} uppercase`}>OUR SYSTEM CONSTITUTION</h2>
              <p className={styles.paragraph}>
                How we map, engineer, and deploy conversational pipelines to client stores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-primary">{step.num}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-michroma text-base font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-955/40 border-t border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>RESULTS IN PRODUCTION</Eyebrow>
                <h2 className={styles.heading_2}>VORTEX CUSTOM WORKFLOWS</h2>
                <p className={styles.paragraph}>
                  How we programmed direct CRM webhooks and database sync triggers to scale support bandwidth.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Automatic Syncing:</strong> Wired NLP bot intents directly to HubSpot pipelines to log support conversation entries.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Support Routing:</strong> Configured automatic live agent handoffs for complex customer requests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md space-y-6">
                <span className="px-3 py-1 rounded-md text-[9px] font-mono bg-primary/10 border border-primary/20 text-primary font-bold tracking-wider uppercase">
                  AUTOMATION KPI ATTRIBUTION
                </span>
                <h3 className="font-michroma text-lg sm:text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wide">
                  VORTEX SAAS (CANADA)
                </h3>
                <p className="text-xs text-zinc-550 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                  We engineered direct webhook linkages between their user databases and a custom conversational WhatsApp gateway, automating support updates.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-150 dark:border-zinc-850">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">-60%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">MANUAL SUPPORT TICKETS</p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">3s</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">AVERAGE RESPONSE LATENCY</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-white dark:bg-black border-t border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>FREE BOT SCHEMAS REVIEW</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              SCALE YOUR CUSTOMER SUPPORT <br />
              <span className="text-primary">ON AUTOPILOT</span>
            </h2>
            <p className={styles.paragraph}>
              Connect with our team to map out a customized automation schema and explore how conversational bots can eliminate your operational bottlenecks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request Automation Discovery Call
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
              >
                All Services
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10 dark:opacity-[0.05] bg-primary blur-[120px]" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
