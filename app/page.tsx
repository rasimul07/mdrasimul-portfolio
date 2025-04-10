"use client";
import { Contact } from "@/components/Contact";
import Home from "@/components/Home";
import { Toaster } from "react-hot-toast";
export default function Page() {
  return (
    <div className="">
      <Toaster />
      <Home />
      <Contact />
    </div>
  );
}
