"use client";

import { useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/schema";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ faqs, showSchema = true }: { faqs: FAQItem[]; showSchema?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {showSchema && <JsonLd data={faqPageSchema(faqs)} />}
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
