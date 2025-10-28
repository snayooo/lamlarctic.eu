"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (isSubmitted) setIsSubmitted(false); // remove success message if user edits form
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(true); // show success message
      } else {
        const errorData = await res.json();
        window.alert("Failed to send message: " + errorData.message);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto w-full py-0 md:py-10 space-y-8 text-lg"
    >
      {/* Name */}
      <div className="flex flex-col">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border-b-2 border-black focus:outline-none focus:border-[#4A5FE2] transition-all duration-300 py-2"
          required
          placeholder="Name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border-b-2 border-black focus:outline-none focus:border-[#4A5FE2] transition-all duration-300 py-1"
          required
          placeholder="Email"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col">
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="border-b-2 border-black focus:outline-none focus:border-[#4A5FE2] transition-all duration-300 py-1"
          required
          placeholder="Subject"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          className="border-b-2 border-black focus:outline-none focus:border-[#4A5FE2] transition-all duration-300 py-1"
          required
          placeholder="Message"
        ></textarea>
      </div>

      {/* Button */}
      <div className="flex flex-col items-end space-y-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center bg-[#4A5FE2] text-white px-8 py-3 rounded-xl font-semibold transition hover:opacity-90 ${
            isSubmitting ? "cursor-not-allowed" : "hover:cursor-pointer"
          }`}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Envoyer"
          )}
        </button>

        {/* Success Message */}
        {isSubmitted && (
          <p className="text-green-600 text-sm mt-2">
            Votre message a été envoyé avec succès !
          </p>
        )}
      </div>
    </form>
  );
}
