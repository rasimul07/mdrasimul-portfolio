"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MyButton } from "./custom-ui/MyButton";
import { Mail, Phone, MapPin, Github, Linkedin, Code, FileText, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      setSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7dcdc093-a14d-4a47-9b02-69097492e814",
          name,
          email,
          message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success(result.message || "Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please reach out via email directly.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please reach out directly at rasimulislam722@gmail.com");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen bg-stone-100 px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl relative z-10 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
            Let’s Connect &amp; Collaborate
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Whether you have a job opportunity, a project to build, or just want to discuss software engineering — I’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contact Information
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">MD Rasimul Islam</h3>
                <p className="text-sm text-slate-300">Full Stack &amp; Mobile Developer</p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:rasimulislam722@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Email
                    </span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white break-all">
                      rasimulislam722@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+917047615704"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Phone
                    </span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      +91 7047615704
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Location
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      Malda, West Bengal, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Connect on Professional Profiles
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/rasimul07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition"
                >
                  <Github size={18} className="mb-1" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-rasimul-islam-b390b3209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-800/80 hover:bg-sky-900/60 text-xs font-medium text-sky-300 hover:text-sky-200 transition"
                >
                  <Linkedin size={18} className="mb-1 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/RasimulIslam890/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-800/80 hover:bg-amber-900/60 text-xs font-medium text-amber-300 hover:text-amber-200 transition"
                >
                  <Code size={18} className="mb-1 text-amber-400" />
                  <span>LeetCode</span>
                </a>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide shadow-md transition"
              >
                <FileText size={15} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white shadow-xl rounded-3xl p-6 sm:p-10 border border-slate-200/80 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Send me a direct message</h3>
            <p className="text-sm text-slate-500 mb-6">
              Fill out the form below and I’ll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="rounded-xl shadow-xs border-slate-200 focus:border-slate-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="rounded-xl shadow-xs border-slate-200 focus:border-slate-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                  Message
                </label>
                <Textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="rounded-xl shadow-xs border-slate-200 focus:border-slate-800"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Protected by spam filtering</span>
                </div>
                <MyButton loading={submitting} type="submit" className="w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    <Send size={15} />
                    <span>Send Message</span>
                  </span>
                </MyButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
