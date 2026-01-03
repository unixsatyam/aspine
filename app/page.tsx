import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Coming Soon | Building the Future",
  description:
    "We are crafting an experience that redefines the platform. Join the waitlist.",
};

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center overflow-hidden relative selection:bg-neutral-800 selection:text-white">
      {/* Background Gradients/Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-800 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900 blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="z-10 w-full max-w-5xl px-5 md:px-10">
        <ComingSoon />
      </div>
    </main>
  );
}
