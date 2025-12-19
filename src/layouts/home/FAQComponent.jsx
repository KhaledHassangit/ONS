import React from 'react'

export default function FAQComponent() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <div className="max-w-3xl mx-auto space-y-4">
    {/* Accordion 1 */}
    <div className="bg-[var(--background)] rounded-lg shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion1" className="peer hidden" />
      <label
        htmlFor="accordion1"
        className="flex items-center justify-between p-4 !bg-[var(--main-light-color)]  text-white cursor-pointer transition-colors"
      >
        <span className="text-lg font-semibold">How can Noovy help independent hotels?</span>
        <svg
          className="w-6 h-6 transition-transform peer-checked:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">
            Full-stack developer with expertise in modern web technologies and a
            passion for creating innovative solutions.
          </p>
        </div>
      </div>
    </div>
    {/* Accordion 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion2" className="peer hidden" />
      <label
        htmlFor="accordion2"
        className="flex items-center justify-between p-4 !bg-[var(--main-light-color)] text-white cursor-pointer transition-colors"
      >
        <span className="text-lg font-semibold">What features does Noovy include?</span>
        <svg
          className="w-6 h-6 transition-transform peer-checked:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">
            Contributing to healthcare innovation through advanced web
            development and system architecture.
          </p>
        </div>
      </div>
    </div>
    {/* Accordion 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion3" className="peer hidden" />
      <label
        htmlFor="accordion3"
        className="flex items-center justify-between p-4 !bg-[var(--main-light-color)] text-white cursor-pointer  transition-colors"
      >
        <span className="text-lg font-semibold">Is it easy to switch to Noovy from my current PMS?</span>
        <svg
          className="w-6 h-6 transition-transform peer-checked:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">
            Building cutting-edge applications using Next.js, React, and modern
            web technologies.
          </p>
        </div>
      </div>
    </div>
    {/* Accordion 4 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion4" className="peer hidden" />
      <label
        htmlFor="accordion4"
        className="flex items-center justify-between p-4 !bg-[var(--main-light-color)] text-white cursor-pointer transition-colors"
      >
        <span className="text-lg font-semibold">What kind of support does Noovy provide?</span>
        <svg
          className="w-6 h-6 transition-transform peer-checked:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">
            Expertise in full-stack development, cloud technologies, and modern
            frameworks.
          </p>
        </div>
      </div>
    </div>
    {/* Accordion 5 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion5" className="peer hidden" />
      <label
        htmlFor="accordion5"
        className="flex items-center justify-between p-4 !bg-[var(--main-light-color)] text-white cursor-pointer  transition-colors"
      >
        <span className="text-lg font-semibold">Does Noovy provide Training when we switch?</span>
        <svg
          className="w-6 h-6 transition-transform peer-checked:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">
            Following industry best practices and agile methodologies for
            efficient development.
          </p>
        </div>
      </div>
    </div>
    {/* Accordion 6 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <input type="checkbox" id="accordion6" className="peer hidden" />
      <label
        htmlFor="accordion6"
        className="flex items-center justify-between p-4 !bg-[var(--main-light-color)] text-white cursor-pointer  transition-colors"
      >
        <span className="text-lg font-semibold">Is Noovy easy to implement and use for my hotel?</span>
        <svg
          className="w-6 h-6 transition-transform peer-checked:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
        <div className="p-4">
         
          <p className="text-gray-700 leading-relaxed">
            Combining technical expertise with creative design to deliver
            outstanding user experiences.
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
