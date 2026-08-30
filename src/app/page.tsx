import { PatternBottom, PatternTop } from "@/components/decor";
import { Intro, Ratings, Signature, Testimonials } from "@/views";

export default function Home() {
  return (
    <div className="relative isolate min-h-svh overflow-x-clip">
      <PatternTop />
      <PatternBottom />
      <main className="mx-auto box-content max-w-lg px-6 pt-20 pb-25 shell:max-w-shell shell:pt-30">
        <div className="shell:grid shell:grid-cols-[445fr_540fr] shell:gap-x-31.25">
          <Intro />
          <Ratings />
        </div>
        <Testimonials />
      </main>
      <Signature />
    </div>
  );
}
