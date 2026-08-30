import { StarIcon } from "@/components/icons";

export default function StarRating({ count }: { count: number }) {
  return (
    <span className="flex gap-2 text-star">
      {Array.from({ length: count }, (_, position) => (
        <StarIcon key={position} />
      ))}
    </span>
  );
}
