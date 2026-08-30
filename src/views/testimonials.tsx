import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mt-12 shell:mt-18"
    >
      <h2 id="testimonials-heading" className="sr-only">
        What our customers say
      </h2>
      <ul className="grid gap-4 shell:grid-cols-3 shell:gap-x-7.5 shell:*:first:mb-8 shell:*:first:v-rise-step-5 shell:*:nth-2:my-4 shell:*:nth-2:v-rise-step-6 shell:*:nth-3:mt-8 shell:*:nth-3:v-rise-step-7">
        {testimonials.map(({ id, name, avatar, quote }) => (
          <li key={id} className="v-rise max-shell:v-rise-on-scroll">
            <figure className="h-full rounded-lg bg-plum px-8 pt-10 pb-7.5 text-white shell:pb-9.5">
              <figcaption className="flex items-center gap-6">
                <img
                  src={avatar.src}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />
                <div className="flex flex-col gap-1 text-label">
                  <p className="font-bold">{name}</p>
                  <p className="text-pink">Verified Buyer</p>
                </div>
              </figcaption>
              <blockquote className="mt-7 text-body font-medium">
                <p>{quote}</p>
              </blockquote>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
