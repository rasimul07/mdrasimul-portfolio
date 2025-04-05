"use client";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
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
    }
  }

  return (
    <section className="flex justify-center">
      <div className="min-w-[400px] max-w-[500px]">
        <h2 className="text-2xl font-bold text-center">Contact me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Input type="text" name="name" required placeholder="Your name" />
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
          <div>
            <label htmlFor="message">Message</label>
            <Textarea
              name="message"
              required
              rows={3}
              placeholder="Enter Message"
            ></Textarea>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
}
