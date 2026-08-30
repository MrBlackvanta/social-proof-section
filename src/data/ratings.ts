export type Rating = {
  id: string;
  source: string;
  stars: number;
};

export const ratings: Rating[] = [
  { id: "reviews", source: "Reviews", stars: 5 },
  { id: "report-guru", source: "Report Guru", stars: 5 },
  { id: "best-tech", source: "BestTech", stars: 5 },
];
