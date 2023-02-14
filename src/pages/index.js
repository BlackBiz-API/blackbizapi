import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Try from "@/components/Try";

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