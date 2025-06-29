"use client";
import toast from "react-hot-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { MyButton } from "./custom-ui/MyButton";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
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
        toast.success(result.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-stone-200 px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-800">
          Send me a message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                className="rounded-xl shadow-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-700"
            >
              Message
            </label>
            <Textarea
              name="message"
              required
              rows={4}
              placeholder="Enter your message..."
              className="rounded-xl shadow-sm"
            />
          </div>

          <div className="text-center">
            <MyButton loading={submitting} type="submit">
              Submit
            </MyButton>
          </div>
        </form>
      </div>
    </section>
  );
}
