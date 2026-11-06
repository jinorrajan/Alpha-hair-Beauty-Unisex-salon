"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const SALON_BRANCH_OPTIONS = [
  "Chromepet",
  "S. Kolathur",
  "Keelkattalai",
  "Madipakkam",
  "Mannivakkam",
  "Pallavaram",
  "Medavakkam",
  "A Glam (Old Pallavaram)",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Chromepet",
    message: "",
    subscribe: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [lastAction, setLastAction] = useState<"whatsapp" | "email" | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSend = async (channel: "whatsapp" | "email") => {
    // 1. Validation according to user-selected channel
    if (!formData.name.trim()) {
      setStatus("error");
      setFeedbackMessage("Please enter your name.");
      return;
    }

    if (channel === "whatsapp" && !formData.phone.trim()) {
      setStatus("error");
      setFeedbackMessage("Please enter your phone number to connect via WhatsApp.");
      return;
    }

    if (channel === "email" && !formData.email.trim()) {
      setStatus("error");
      setFeedbackMessage("Please enter your email address so we can reply to you.");
      return;
    }

    setStatus("loading");
    setLastAction(channel);
    setFeedbackMessage("");
    setWhatsappUrl("");

    try {
      // 2. Dispatch inquiry data to server
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, channel }),
      });

      const data = await res.json();

      if (res.ok) {
        if (channel === "whatsapp") {
          setStatus("success");
          setFeedbackMessage("Connecting directly to Alpha Salon reception on WhatsApp...");

          const waText =
            `*New Appointment / Salon Inquiry*\n\n` +
            `📍 *Preferred Branch:* ${formData.branch}\n` +
            `👤 *Name:* ${formData.name}\n` +
            `📞 *Phone:* ${formData.phone || "Not provided"}\n` +
            `✉️ *Email:* ${formData.email || "Not specified"}\n\n` +
            `💬 *Message:* ${formData.message || "Hi, I would like to book an appointment."}\n\n` +
            `🎁 *Special Offers Opt-in:* ${formData.subscribe ? "Yes" : "No"}`;

          const waLink = `https://wa.me/918122717723?text=${encodeURIComponent(waText)}`;
          setWhatsappUrl(waLink);

          // Open WhatsApp in a new tab smoothly
          if (typeof window !== "undefined") {
            window.open(waLink, "_blank", "noopener,noreferrer");
          }
        } else {
          // Email channel
          setStatus("success");
          setFeedbackMessage(
            "Your message has been sent successfully to alphahairandbeautyunisexsaloon@gmail.com! Our team will reply shortly."
          );
        }

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          branch: "Chromepet",
          message: "",
          subscribe: false,
        });
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Failed to dispatch message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFeedbackMessage("Network error. Please try again or reach us directly at +91 81227 17723.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default to WhatsApp if Enter is pressed
    handleSend("whatsapp");
  };

  return (
    <div className="bg-[#FBF8F3] min-h-screen text-[#1E1915]">
      {/* 
        1. Exact Omila Breadcrumb Header Banner
      */}
      <section className="relative w-full min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand/services-breadcrumb.jpg"
            alt="Contact Alpha Salon"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          {/* Exact Omila Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17120A]/90 via-[#17120A]/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold text-white tracking-tight leading-none uppercase drop-shadow-md">
            Contact Us
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/90"
          >
            <Link
              href="/"
              className="text-white hover:text-[var(--color-brand-primary)] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-[var(--color-brand-primary)]">/</span>
            <span className="text-[var(--color-brand-primary)] font-bold">Contact</span>
          </nav>
        </div>
      </section>

      {/* 
        2. Exact Omila Inquiries & Reach Out Form Section
        (Matches user uploaded screenshot media_1793520665475_5d2b3d6c.png)
      */}
      <section className="py-20 md:py-28">
        <Container wide>
          <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Category Tag */}
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.24em] uppercase text-[var(--color-brand-primary)]">
                  <span className="text-base leading-none">✦</span> COMMON QUESTIONS
                </span>
              </div>

              {/* Headline (exact phrasing & large typography) */}
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#201A14] font-bold tracking-tight leading-[1.12]">
                Have inquiries?
                <br />
                Reach out to us!
              </h2>

              {/* Sub-paragraph */}
              <p className="text-base sm:text-lg text-[#6E675F] leading-relaxed max-w-md">
                Our team is ready to help with your needs or feedback. Contact us for more details today.
              </p>

              {/* Verified Contact Points */}
              <div className="space-y-4 pt-4 border-t border-[#E8E1D5]">
                <address className="not-italic text-sm sm:text-base text-[#6E675F] leading-relaxed">
                  No. 70, Nemilichery High Road, Subash Nagar,
                  <br />
                  Bharathipuram, Chromepet, Chennai, Tamil Nadu 600044
                </address>

                <div>
                  <a
                    href="tel:+918122717723"
                    className="font-heading font-bold text-2xl sm:text-3xl text-[#201A14] hover:text-[var(--color-brand-primary)] transition-colors block"
                  >
                    +91 81227 17723
                  </a>
                  <p className="text-xs text-[#8C847B] mt-0.5">
                    Call &amp; WhatsApp: +91 81227 17723
                  </p>
                </div>

                <div>
                  <a
                    href="mailto:alphahairandbeautyunisexsaloon@gmail.com"
                    className="text-sm sm:text-base text-[#6E675F] hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    alphahairandbeautyunisexsaloon@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Omila Form */}
            <div className="lg:col-span-7 bg-transparent">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Full name & Email address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#201A14]"
                    >
                      Full name<span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-5 py-3.5 rounded-[12px] bg-white border border-[#EBE5DB] text-[#201A14] placeholder-[#A0988F] text-sm focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/15 transition-all shadow-xs"
                    />
                  </div>

                  {/* Email address */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#201A14]"
                    >
                      Email address <span className="text-xs font-normal text-[#8E7E72]">(Required for Email)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="support@example.com"
                      className="w-full px-5 py-3.5 rounded-[12px] bg-white border border-[#EBE5DB] text-[#201A14] placeholder-[#A0988F] text-sm focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/15 transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Preferred Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#201A14]"
                    >
                      Phone Number <span className="text-xs font-normal text-[#8E7E72]">(Required for WhatsApp)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 81227 17723"
                      className="w-full px-5 py-3.5 rounded-[12px] bg-white border border-[#EBE5DB] text-[#201A14] placeholder-[#A0988F] text-sm focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/15 transition-all shadow-xs"
                    />
                  </div>

                  {/* Branch Selector Dropdown */}
                  <div className="space-y-2">
                    <label
                      htmlFor="branch"
                      className="block text-sm font-semibold text-[#201A14]"
                    >
                      Select Branch<span className="text-[#B8860B]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="branch"
                        name="branch"
                        required
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-[12px] bg-white border border-[#EBE5DB] text-[#201A14] text-sm focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/15 transition-all shadow-xs appearance-none cursor-pointer pr-10 font-medium"
                      >
                        {SALON_BRANCH_OPTIONS.map((branchOption) => (
                          <option key={branchOption} value={branchOption}>
                            {branchOption}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8C643E]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#201A14]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what service you would like or ask any questions..."
                    className="w-full px-5 py-3.5 rounded-[16px] bg-white border border-[#EBE5DB] text-[#201A14] placeholder-[#A0988F] text-sm focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/15 transition-all shadow-xs resize-none"
                  />
                </div>

                {/* Row 4: Checkbox */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    id="subscribe"
                    name="subscribe"
                    type="checkbox"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-[#3A3026] focus:ring-[#3A3026] accent-[#3A3026] cursor-pointer"
                  />
                  <label
                    htmlFor="subscribe"
                    className="text-xs text-[#6E675F] cursor-pointer select-none"
                  >
                    Yes! Please send me info on events and specials
                  </label>
                </div>

                {/* Feedback Alerts */}
                {status === "success" && (
                  <div className="p-5 rounded-2xl bg-[#F4FDF7] border border-[#A7F3D0] text-[#065F46] shadow-sm space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span className="font-bold text-sm text-[#047857]">
                        {lastAction === "whatsapp" ? "WhatsApp Chat Initiated!" : "Email Sent Successfully!"}
                      </span>
                    </div>
                    <p className="text-xs text-[#065F46]/90 leading-relaxed">
                      {feedbackMessage}
                    </p>
                    {lastAction === "whatsapp" && whatsappUrl && (
                      <div className="pt-1">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs tracking-wider transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-1.119-.059-.286-.092-.663-.225-1.189-.452-2.146-.927-3.535-3.097-3.642-3.238-.107-.143-.866-1.155-.866-2.202 0-1.047.548-1.562.743-1.776.195-.214.425-.268.567-.268.143 0 .286.002.411.008.131.006.307-.05.48.365.178.428.608 1.48.662 1.589.054.109.09.237.018.381-.072.144-.108.233-.214.358-.107.125-.224.279-.32.374-.107.107-.219.224-.094.439.125.214.557.917 1.196 1.486.822.733 1.517.96 1.732 1.067.214.107.34.09.467-.054.127-.144.542-.631.686-.847.144-.215.289-.179.48-.108.192.072 1.216.574 1.425.679.209.105.348.157.399.245.051.088.051.513-.093.918z" />
                          </svg>
                          <span>Open WhatsApp Chat Directly</span>
                          <span>↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                    {feedbackMessage}
                  </div>
                )}

                {/* Row 5: Dual Contact Action Buttons (User Choice) */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  {/* Button 1: Send via WhatsApp */}
                  <button
                    type="button"
                    onClick={() => handleSend("whatsapp")}
                    disabled={status === "loading"}
                    className="flex-1 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2.5 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-1.119-.059-.286-.092-.663-.225-1.189-.452-2.146-.927-3.535-3.097-3.642-3.238-.107-.143-.866-1.155-.866-2.202 0-1.047.548-1.562.743-1.776.195-.214.425-.268.567-.268.143 0 .286.002.411.008.131.006.307-.05.48.365.178.428.608 1.48.662 1.589.054.109.09.237.018.381-.072.144-.108.233-.214.358-.107.125-.224.279-.32.374-.107.107-.219.224-.094.439.125.214.557.917 1.196 1.486.822.733 1.517.96 1.732 1.067.214.107.34.09.467-.054.127-.144.542-.631.686-.847.144-.215.289-.179.48-.108.192.072 1.216.574 1.425.679.209.105.348.157.399.245.051.088.051.513-.093.918z" />
                    </svg>
                    <span>{status === "loading" && lastAction === "whatsapp" ? "Connecting..." : "Send via WhatsApp"}</span>
                    <span>&rsaquo;</span>
                  </button>

                  {/* Button 2: Send via Email */}
                  <button
                    type="button"
                    onClick={() => handleSend("email")}
                    disabled={status === "loading"}
                    className="flex-1 px-6 py-4 rounded-full bg-[#3A3026] hover:bg-[var(--color-brand-primary)] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2.5 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg className="w-5 h-5 text-[#C5A880] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{status === "loading" && lastAction === "email" ? "Sending Email..." : "Send via Email"}</span>
                    <span>&rsaquo;</span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
