"use client";

import { useState } from "react";
import { AddressAutocomplete } from "./AddressAutocomplete";

const REASONS_FOR_SELLING = [
  { value: "foreclosure", label: "Foreclosure", description: "Facing or behind on mortgage" },
  { value: "divorce", label: "Divorce", description: "Going through a separation" },
  { value: "inherited", label: "Inherited Property", description: "Received through estate or probate" },
  { value: "relocation", label: "Relocation", description: "Moving for work or family" },
  { value: "behind-on-payments", label: "Behind on Payments", description: "Struggling with monthly costs" },
  { value: "tired-landlord", label: "Tired Landlord", description: "Done dealing with tenants" },
  { value: "downsizing", label: "Downsizing", description: "Moving to a smaller home" },
  { value: "other", label: "Other", description: "Another reason" },
];

const PROPERTY_CONDITIONS = [
  { value: "excellent", label: "Excellent", description: "Move-in ready — updated kitchen, baths, roof, HVAC all in great shape" },
  { value: "good", label: "Good", description: "Solid overall — may need minor cosmetic work like paint or carpet" },
  { value: "fair", label: "Fair", description: "Needs moderate repairs — roof, HVAC, plumbing, or electrical issues" },
  { value: "poor", label: "Poor", description: "Major work needed — structural damage, fire, mold, or uninhabitable" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP", description: "As fast as possible" },
  { value: "1-3-months", label: "1-3 Months", description: "Some flexibility" },
  { value: "3-6-months", label: "3-6 Months", description: "No rush" },
  { value: "exploring", label: "Just Exploring", description: "Seeing my options" },
];

interface FormData {
  address: string;
  reason: string;
  condition: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
}

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

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    address: "",
    reason: "",
    condition: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;

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
        body: JSON.stringify({ ...formData, source: "multi-step-form", page_url: window.location.href }),
      });
    } catch {
      // Silently handle
    }
    // Store data for the property-details page
    localStorage.setItem("leadData", JSON.stringify(formData));
    setSubmitted(true);
  }

  if (submitted) {
    // Redirect to property details page for longer form
    if (typeof window !== "undefined") {
      window.location.href = "/property-details";
    }
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-800 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">One moment...</h3>
        <p className="text-gray-600">Taking you to the next step.</p>
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
              i < step ? "bg-red-600" : "bg-gray-200"
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
          <p className="text-base text-gray-500 mb-5">
            Step 1 of {totalSteps} — What&apos;s your property address?
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
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Reason for Selling */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Reason for Selling
          </h3>
          <p className="text-base text-gray-500 mb-5">
            Step 2 of {totalSteps} — Why are you looking to sell?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {REASONS_FOR_SELLING.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect("reason", option.value)}
                className={`p-4 border-2 rounded-xl text-left transition-all hover:border-blue-800 hover:bg-blue-50 ${
                  formData.reason === option.value
                    ? "border-blue-800 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <span className="font-semibold text-gray-900 block">{option.label}</span>
                <span className="text-base text-gray-500">{option.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Condition */}
      {step === 3 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Property Condition
          </h3>
          <p className="text-base text-gray-500 mb-5">
            Step 3 of {totalSteps} — What condition is your property in?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROPERTY_CONDITIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect("condition", option.value)}
                className={`p-4 border-2 rounded-xl text-left transition-all hover:border-blue-800 hover:bg-blue-50 ${
                  formData.condition === option.value
                    ? "border-blue-800 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <span className="font-semibold text-gray-900 block">{option.label}</span>
                <span className="text-base text-gray-500">{option.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Timeline */}
      {step === 4 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Selling Timeline
          </h3>
          <p className="text-base text-gray-500 mb-5">
            Step 4 of {totalSteps} — How quickly do you need to sell?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {TIMELINES.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect("timeline", option.value)}
                className={`p-4 border-2 rounded-xl text-left transition-all hover:border-blue-800 hover:bg-blue-50 ${
                  formData.timeline === option.value
                    ? "border-blue-800 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <span className="font-semibold text-gray-900 block">{option.label}</span>
                <span className="text-base text-gray-500">{option.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Contact info */}
      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Almost Done!
          </h3>
          <p className="text-base text-gray-500 mb-5">
            Step {totalSteps} of {totalSteps} — Where should we send your cash offer?
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
            />
            <input
              type="tel"
              placeholder="+1 (___) ___-____"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: formatPhone(e.target.value) }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Get My Cash Offer
            </button>
            <p className="text-base text-gray-400 text-center">
              100% free. No obligation. Your info is secure.
            </p>
          </div>
        </form>
      )}

      {/* Back button */}
      {step > 1 && !submitted && (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-4 text-base text-gray-500 hover:text-gray-700"
        >
          &larr; Back
        </button>
      )}
    </div>
  );
}
