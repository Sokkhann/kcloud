"use client";

import { Mail, Phone, Building2 } from "lucide-react";
import { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  objective: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  objective?: string;
}

export default function ContactUsCard() {
  const [form, setForm] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    objective: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  // validation section
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;

    // First Name
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(form.firstName)) {
      newErrors.firstName = "First name can only contain letters";
    }

    // Last Name
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(form.lastName)) {
      newErrors.lastName = "Last name can only contain letters";
    }

    // Email
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.objective.trim())
      newErrors.objective = "Please describe your objective";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return; // Stop if validation fails

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Email sent successfully!");
        setForm({ firstName: "", lastName: "", email: "", objective: "" });
        setErrors({});
      } else {
        setStatus("error");
        setMessage("Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }

    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <div className="flex lg:flex-row md:flex-row flex-col-reverse mt-10 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      {/* LEFT SECTION (Form) */}
      <div className="w-full md:w-3/5 p-12">
        <div className="hidden lg:block md:block">
          <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-3 text-gcxprimary">
            Contact Us
          </p>
          <p className="text-gray-600 mb-6">
            Fill out the form and our experts will reach out to you shortly.
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

          {/* first and last name */}
          <div className="flex gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-2 w-full">
              <div className="flex-1 p-4 bg-white border border-gray-200 rounded-lg">
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full outline-none"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2 w-full">
              <div className="flex-1 p-4 bg-white border border-gray-200 rounded-lg">
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full outline-none text-gray-600"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-gray-600"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Objective */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600">
              Please describe your intended objective
            </label>
            <textarea
              name="objective"
              rows={4}
              placeholder="Write your message here..."
              className="w-full p-4 bg-white border border-gray-200 rounded-lg h-32 outline-none"
              value={form.objective}
              onChange={handleChange}
            ></textarea>
            {errors.objective && (
              <span className="text-red-500 text-sm">{errors.objective}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="lg:mb-0 md:mb-0 mb-2 bg-gcxprimary text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition-colors"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>

          {/* Status Message */}
          {status !== "idle" && message && (
            <div className="fixed top-32 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
              <div
                className={`px-6 py-4 rounded-lg shadow-lg text-white text-center text-base
        ${status === "success" ? "bg-gcxprimary" : "bg-red-600"} animate-bounce`}
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>

      {/* RIGHT SECTION (Contact Info) */}
      <div className="w-full md:w-2/5 bg-gcxprimary/10 flex flex-col items-center justify-center p-12">
        <div className="lg:space-y-8 md:space-y-8 space-y-4">
          {/* Question */}
          <div>
            <h2 className="lg:text-2xl md:text-2xl text-lg font-bold lg:mb-2 md:mb-2 mb-0 text-gcxPrimary">
              Shoot Us A Question!
            </h2>
            <p className="text-gray-600">Our experts will get back to you!</p>
          </div>

          {/* Hotline */}
          <div>
            <h3 className="lg:text-2xl md:text-2xl text-lg font-bold lg:mb-2 md:mb-2 mb-0 text-gcxPrimary">
              Services Hotline
            </h3>
            <p className="text-gray-600">
              Fast response with 24/7 customer service and product consultation.
            </p>
          </div>

          {/* Office */}
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gcxPrimary" />
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
              <Mail className="w-5 h-5 text-gcxPrimary" />
              <h4 className="font-semibold">Email</h4>
            </div>
            <p className="ml-7 text-gray-600">inquiry@gcxasia.com</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gcxPrimary" />
              <h4 className="font-semibold">Sales Hotline</h4>
            </div>
            <p className="ml-7 text-gray-600">(855) 93 222 738</p>
          </div>
        </div>
      </div>
    </div>
  );
}
