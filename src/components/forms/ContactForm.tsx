"use client";

import { useState, useRef, useEffect } from "react";
import { validatePhone, validateEmail, getUtmParams } from "@/lib/validation";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  const national = digits.startsWith("1") && digits.length > 10
    ? digits.slice(1)
    : digits;

  if (national.length === 0) return "";
  if (national.length <= 3) return `+1 (${national}`;
  if (national.length <= 6) return `+1 (${national.slice(0, 3)}) ${national.slice(3)}`;
  return `+1 (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6, 10)}`;
}

export function ContactForm() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const utmRef = useRef<Record<string, string>>({});

  useEffect(() => {
    utmRef.current = getUtmParams();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    // Honeypot check
    if (honeypotRef.current?.value) return;

    // Phone validation
    if (phone) {
      const phoneCheck = validatePhone(phone);
      if (!phoneCheck.valid) { setError(phoneCheck.msg || "Invalid phone number."); return; }
    }

    const form = e.currentTarget;
    const emailValue = (form.elements.namedItem("email") as HTMLInputElement).value;

    // Email validation
    const emailCheck = validateEmail(emailValue);
    if (!emailCheck.valid) { setError(emailCheck.msg || "Invalid email."); return; }

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: emailValue,
      phone,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utmRef.current, source: "contact", page_url: window.location.href }),
      });
    } catch {
      // Silently handle — still show success
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-blue-50 p-8 rounded-xl text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          We&apos;ll get back to you within a few hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input type="text" ref={honeypotRef} name="website" style={{position:"absolute",left:"-9999px",top:"-9999px",opacity:0,height:0,width:0}} tabIndex={-1} autoComplete="off" />
        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (___) ___-____"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
