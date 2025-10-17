"use client";

import { Mail, Phone, Building2 } from "lucide-react";

export default function ContactUsCard() {
  return (
    <div className="flex flex-col md:flex-row  max-w-6xl mx-auto mt-10 bg-white p-2 rounded-2xl">
      {/* LEFT SECTION (Form) */}
      <div className="w-full md:w-1/2 px-10 pt-10">
        <div className="">
          <p className="text-4xl font-semibold mb-3 text-green-900">
            Contact Us
          </p>
          <p className="text-gray-600 mb-6">
            Fill out the form and our experts will reach out to you shortly.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          {/* First Name */}
          <div className="flex gap-2 flex-col">
            <label className="font-semibold text-gray-700">
              First Name
            </label>
            <div className="flex items-center px-4 py-4 rounded-2xl bg-green-950/10">
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="flex gap-2 flex-col">
            <label className=" font-semibold text-gray-700">
              Last Name
            </label>
            <div className="flex items-center px-4 py-4 rounded-2xl bg-green-950/10">
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-2 flex-col">
            <label className=" font-semibold text-gray-700">
              Email
            </label>
            <div className="flex items-center px-4 py-4 rounded-2xl bg-green-950/10">
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Objective */}
          <div className="flex gap-2 flex-col">
            <label className="m text-gray-600">
              Please describe your intended objective
            </label>
            <div className="flex items-start rounded-lg px-4 py-4 bg-green-950/10">
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="w-full outline-none text-gray-700 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      {/* RIGHT SECTION (Contact Info) */}
      <div className="w-full md:w-1/2 p-10 text-green-900 flex flex-col bg-green-950/10 rounded-2xl">
        <div className="space-y-8">
          {/* Question */}
          <div>
            <h2 className="text-4xl font-semibold mb-2">
              Shoot Us A Question!
            </h2>
            <p className="text-gray-600">Our experts will get back to you!</p>
          </div>

          {/* Hotline */}
          <div>
            <h3 className="text-4xl font-semibold mb-2">Services Hotline</h3>
            <p className="text-gray-600">
              Fast response with 24/7 customer service and product consultation.
            </p>
          </div>

          {/* Office */}
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <h4 className="font-semibold">Office</h4>
            </div>
            <p className="ml-7 text-gray-600">
              G/F, No.19, Street 90, Sangkat Sras Chork, Khan Daun Penh, Phnom
              Penh, 12201, Kingdom of Cambodia
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <h4 className="font-semibold">Email</h4>
            </div>
            <p className="ml-7 text-gray-600">inquiry@gcxasia.com</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <h4 className="font-semibold">Sales Hotline</h4>
            </div>
            <p className="ml-7 text-gray-600">(855) 93 222 738</p>
          </div>
        </div>
      </div>
    </div>
  );
}
