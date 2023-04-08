import React from "react";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Try from "@/components/Try/Try";

export default function Home() {
  return (
    <>
      <div className="app">
          <Hero/>
          <Features/>
          <Try/>
      </div>
    </>
  );
}