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
    <section className="flex justify-center my-5">
      <div className="w-full space-y-5">
        <h2 className="text-2xl font-bold text-center">Send me a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2 mx-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <Textarea
                name="message"
                required
                rows={3}
                placeholder="Enter Message"
              ></Textarea>
            </div>
            <MyButton loading={submitting} type="submit">
              Submit
            </MyButton>
          </div>
        </form>
      </div>
    </section>
  );
}
