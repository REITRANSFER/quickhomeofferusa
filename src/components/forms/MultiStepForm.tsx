"use client";

import { useState } from "react";
import { AddressAutocomplete } from "./AddressAutocomplete";

const PROPERTY_CONDITIONS = [
  { value: "excellent", label: "Excellent", description: "Move-in ready, well maintained" },
  { value: "good", label: "Good", description: "Minor cosmetic updates needed" },
  { value: "fair", label: "Fair", description: "Needs some repairs" },
  { value: "poor", label: "Poor", description: "Major repairs or damage" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP", description: "As fast as possible" },
  { value: "1-3-months", label: "1-3 Months", description: "Some flexibility" },
  { value: "3-6-months", label: "3-6 Months", description: "No rush" },
  { value: "exploring", label: "Just Exploring", description: "Seeing my options" },
];

interface FormData {
  address: string;
  condition: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
}

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    address: "",
    condition: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  function handleSelect(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (step < totalSteps) setStep(step + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Silently handle — we still show success
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">We Got Your Info!</h3>
        <p className="text-gray-600">
          We&apos;re reviewing your property now. Expect a call from our team within
          the next few hours with your no-obligation cash offer.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < step ? "bg-green-700" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Address */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Get Your Free Cash Offer
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Step 1 of 4 — What&apos;s your property address?
          </p>
          <div className="flex flex-col gap-3">
            <AddressAutocomplete
              value={formData.address}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, address: value }))
              }
              onSelect={(place) =>
                setFormData((prev) => ({ ...prev, address: place.address }))
              }
            />
            <button
              onClick={() => formData.address.trim() && setStep(2)}
              disabled={!formData.address.trim()}
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Condition */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Property Condition
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Step 2 of 4 — What condition is your property in?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {PROPERTY_CONDITIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect("condition", option.value)}
                className={`p-4 border-2 rounded-xl text-left transition-all hover:border-green-700 hover:bg-green-50 ${
                  formData.condition === option.value
                    ? "border-green-700 bg-green-50"
                    : "border-gray-200"
                }`}
              >
                <span className="font-semibold text-gray-900 block">{option.label}</span>
                <span className="text-xs text-gray-500">{option.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Timeline */}
      {step === 3 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Selling Timeline
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Step 3 of 4 — How quickly do you need to sell?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {TIMELINES.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect("timeline", option.value)}
                className={`p-4 border-2 rounded-xl text-left transition-all hover:border-green-700 hover:bg-green-50 ${
                  formData.timeline === option.value
                    ? "border-green-700 bg-green-50"
                    : "border-gray-200"
                }`}
              >
                <span className="font-semibold text-gray-900 block">{option.label}</span>
                <span className="text-xs text-gray-500">{option.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Contact info */}
      {step === 4 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Almost Done!
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Step 4 of 4 — Where should we send your cash offer?
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Get My Cash Offer
            </button>
            <p className="text-xs text-gray-400 text-center">
              100% free. No obligation. Your info is secure.
            </p>
          </div>
        </form>
      )}

      {/* Back button */}
      {step > 1 && !submitted && (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700"
        >
          &larr; Back
        </button>
      )}
    </div>
  );
}
