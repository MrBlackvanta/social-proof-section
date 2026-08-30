import { StarRating } from "@/components";
import { ratings } from "@/data";

export default function Ratings() {
  return (
    <section aria-labelledby="ratings-heading" className="mt-10 shell:mt-6.25">
      <h2 id="ratings-heading" className="sr-only">
        Independent review ratings
      </h2>
      <ul className="flex flex-col gap-4 *:first:v-rise-step-2 *:nth-2:v-rise-step-3 *:nth-3:v-rise-step-4 shell:*:nth-2:self-center shell:*:nth-3:self-end">
        {ratings.map(({ id, source, stars }) => (
          <li
            key={id}
            className="flex flex-col items-center gap-4 rounded-lg bg-plum-soft px-8 py-3.75 text-center text-label font-bold text-plum v-rise shell:w-111.25 shell:flex-row shell:gap-8 shell:py-5"
          >
            <StarRating count={stars} />
            <p>
              Rated {stars} Stars in {source}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
