"use client";

import {
  privacyQ1,
  privacyQ2,
  privacyQ3,
  privacyQ456,
  privacyQ7,
  privacyQ8,
  privacyQ9,
  privacyQ10,
  privacyQ11,
  privacyQ12,
  privacySummaryData,
  privacyTOC,
} from "@/data/privacyPolicy.json";

// 🧩 Define TypeScript interfaces for all data
interface PrivacyBullet {
  bold?: string;
  text?: string;
}

interface PrivacySubSection {
  subtitle?: string;
  note?: string;
  paragraphs?: string[];
  bullets?: (string | PrivacyBullet)[];
}

interface PrivacySection {
  id: string;
  title: string;
  subsections: PrivacySubSection[];
}


export default function PrivacyPolicyPage() {

  const renderSection = (
    sections:
      | PrivacySection[]
      | {
          id: string;
          title: string;
          short?: string;
          paragraphs?: string[];
          content?: string[];
        }[]
      | {
          id: string;
          title: string;
          short?: string;
          paragraphs?: string[];
          content?: string[];
        }
  ) => {
    // Normalize: make sure it’s always an array
    const normalized = Array.isArray(sections) ? sections : [sections];

    return (
      <>
        {normalized.map((section) => (
          <div key={section.id} id={section.id} className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {section.title}
            </h2>

            {/* If section has subsections (full PrivacySection type) */}
            {"subsections" in section ? (
              section.subsections.map((sub, index) => (
                <div key={index} className="mb-6 pl-6">
                  {sub.subtitle && (
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {sub.subtitle}
                    </h3>
                  )}
                  {sub.note && (
                    <p className="italic text-sm text-gray-600 mb-2">
                      {sub.note}
                    </p>
                  )}
                  {sub.paragraphs?.map((p, i) => (
                    <p key={i} className="mb-3 text-gray-700">
                      {p}
                    </p>
                  ))}
                  {sub.bullets && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {sub.bullets.map((item, i) =>
                        typeof item === "string" ? (
                          <li key={i}>{item}</li>
                        ) : (
                          <li key={i}>
                            <strong>{item.bold}</strong> {item.text}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              // ✅ Handle simpler structure (privacyQ456, Q7, Q8, etc.)
              <div className="pl-6">
                {section.short && (
                  <p className="italic text-sm text-gray-600 mb-2">
                    {section.short}
                  </p>
                )}
                {(section.paragraphs ?? section.content ?? []).map((p, i) => (
                  <p key={i} className="mb-3 text-gray-700">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="space-y-2 mb-6">
        <h1 className="font-semibold text-3xl">Privacy Policy</h1>
        <p className="text-neogray">
          Last Updated: <span className="font-medium">April 28, 2025</span>
        </p>
      </div>

      <div className="space-y-6">
        {/* Intro section */}
        <div className="text-base space-y-4">
          <p>
            This Privacy Notice for Global Cloud Exchange (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            describes how and why we might access, collect, store, use, and/or
            share (&quot;process&quot;) your personal information when you use our
            services (&quot;Services&quot;), including when you:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-4">
            <li>
              Visit our website at https://neocomisp.com/, or any website of
              ours that links to this Privacy Notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <p>
            Questions or concerns? Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for
            making decisions about how your personal information is processed.
            If you do not agree with our policies and practices, please do not
            use our Services. If you still have any questions or concerns,
            please contact us at enquiry@neocomisp.com.
          </p>
        </div>

        {/* Summary of Key Points */}
        <div>
          <h2 className="text-xl font-bold mb-4">SUMMARY OF KEY POINTS</h2>
          <p className="italic mb-6">
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <a href="#" className="text-blue-600 underline">
              table of contents
            </a>{" "}
            below to find the section you are looking for.
          </p>
          <div className="space-y-6">
            {privacySummaryData.map((item, index) => (
              <div key={index}>
                <p className="font-semibold">{item.question}</p>
                <p>
                  {item.answer}{" "}
                  {item.linkText && (
                    <a href={item.linkHref} className="text-blue-600 underline">
                      {item.linkText}
                    </a>
                  )}
                  {item.afterLink && item.afterLink}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div>
          <h2 className="font-bold text-lg mb-2">TABLE OF CONTENTS</h2>
          <ul className="pl-4 space-y-1">
            {privacyTOC.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🧾 Full Privacy Sections */}
        {renderSection(privacyQ1)}
        {renderSection(privacyQ2)}
        {renderSection(privacyQ3)}
        {renderSection(privacyQ456)}
        {renderSection([privacyQ7])}
        {renderSection(privacyQ8)}
        {renderSection(privacyQ9)}
        {renderSection(privacyQ10)}
        {renderSection(privacyQ11)}
        {renderSection(privacyQ12)}
      </div>
    </div>
  );
}
