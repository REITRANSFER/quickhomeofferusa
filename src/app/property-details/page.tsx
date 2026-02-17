"use client";

import { useState, useEffect } from "react";
import { COMPANY_NAME } from "@/lib/schema";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  address: string;
  reason: string;
  condition: string;
  timeline: string;
}

export default function PropertyDetailsPage() {
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState({
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    year_built: "",
    garage: "",
    occupied: "",
    mortgage_balance: "",
    asking_price: "",
    additional_notes: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("leadData");
    if (stored) {
      setLeadData(JSON.parse(stored));
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          ...details,
          source: "property-details-form",
          page_url: window.location.href,
        }),
      });
    } catch {
      // Silently handle
    }
    localStorage.removeItem("leadData");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            You&apos;re All Set!
          </h1>
          <p className="text-gray-600 mb-6">
            We have all the details we need. Our team is reviewing your property
            now and will reach out within a few hours with your no-obligation
            cash offer.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 text-left">
            <h3 className="font-bold text-gray-900 mb-2">What happens next?</h3>
            <ol className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <span className="font-bold text-blue-800 shrink-0">1.</span>
                Our team reviews your property details
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-800 shrink-0">2.</span>
                We prepare a fair cash offer based on your info
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-800 shrink-0">3.</span>
                We call you to present your offer — no obligation
              </li>
            </ol>
          </div>
          <a
            href="/"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tell Us More About Your Property
          </h1>
          <p className="text-gray-600">
            The more details you provide, the more accurate your cash offer will
            be. All fields are optional — fill in what you know.
          </p>
          {leadData?.address && (
            <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium text-gray-900">{leadData.address}</span>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          {/* Property specs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Property Details
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="bedrooms" className="block text-base font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                value={details.bedrooms}
                onChange={(e) => setDetails((prev) => ({ ...prev, bedrooms: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none bg-white"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>
            <div>
              <label htmlFor="bathrooms" className="block text-base font-medium text-gray-700 mb-1">
                Bathrooms
              </label>
              <select
                id="bathrooms"
                value={details.bathrooms}
                onChange={(e) => setDetails((prev) => ({ ...prev, bathrooms: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none bg-white"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4+">4+</option>
              </select>
            </div>
            <div>
              <label htmlFor="sqft" className="block text-base font-medium text-gray-700 mb-1">
                Square Footage
              </label>
              <input
                type="text"
                id="sqft"
                placeholder="e.g. 1,500"
                value={details.sqft}
                onChange={(e) => setDetails((prev) => ({ ...prev, sqft: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
              />
            </div>
            <div>
              <label htmlFor="year_built" className="block text-base font-medium text-gray-700 mb-1">
                Year Built
              </label>
              <input
                type="text"
                id="year_built"
                placeholder="e.g. 1995"
                value={details.year_built}
                onChange={(e) => setDetails((prev) => ({ ...prev, year_built: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
              />
            </div>
            <div>
              <label htmlFor="garage" className="block text-base font-medium text-gray-700 mb-1">
                Garage
              </label>
              <select
                id="garage"
                value={details.garage}
                onChange={(e) => setDetails((prev) => ({ ...prev, garage: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none bg-white"
              >
                <option value="">Select</option>
                <option value="none">No Garage</option>
                <option value="1-car">1-Car Garage</option>
                <option value="2-car">2-Car Garage</option>
                <option value="3-car">3+ Car Garage</option>
                <option value="carport">Carport</option>
              </select>
            </div>
            <div>
              <label htmlFor="occupied" className="block text-base font-medium text-gray-700 mb-1">
                Currently Occupied?
              </label>
              <select
                id="occupied"
                value={details.occupied}
                onChange={(e) => setDetails((prev) => ({ ...prev, occupied: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none bg-white"
              >
                <option value="">Select</option>
                <option value="owner-occupied">Yes — I live here</option>
                <option value="tenant-occupied">Yes — tenant lives here</option>
                <option value="vacant">No — it&apos;s vacant</option>
              </select>
            </div>
          </div>

          {/* Financial info */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Financial Info (Optional)
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="mortgage_balance" className="block text-base font-medium text-gray-700 mb-1">
                Mortgage Balance
              </label>
              <input
                type="text"
                id="mortgage_balance"
                placeholder="e.g. $150,000"
                value={details.mortgage_balance}
                onChange={(e) => setDetails((prev) => ({ ...prev, mortgage_balance: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
              />
            </div>
            <div>
              <label htmlFor="asking_price" className="block text-base font-medium text-gray-700 mb-1">
                Desired Price
              </label>
              <input
                type="text"
                id="asking_price"
                placeholder="e.g. $200,000"
                value={details.asking_price}
                onChange={(e) => setDetails((prev) => ({ ...prev, asking_price: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label htmlFor="additional_notes" className="block text-base font-medium text-gray-700 mb-1">
              Anything else we should know?
            </label>
            <textarea
              id="additional_notes"
              rows={4}
              placeholder="Any repairs needed, liens, HOA, special circumstances..."
              value={details.additional_notes}
              onChange={(e) => setDetails((prev) => ({ ...prev, additional_notes: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Submit Property Details
          </button>
          <p className="text-base text-gray-400 text-center mt-3">
            All fields are optional. {COMPANY_NAME} will never share your info.
          </p>
        </form>
      </div>
    </div>
  );
}
