import { calculateTrendPercentage } from "lib/utils";
import React from "react";

const StatsCard = ({
  headerTitle,
  total,
  lastMonthCount,
  currentMonthCount,
}: StatsCard) => {
  const { trend, percentage } = calculateTrendPercentage(
    lastMonthCount,
    currentMonthCount
  );

  return (
    <article className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>
      <div className="content">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl">{total}</h2>
          <div className="flex items-center gap-2">
            <figure className="flex items-center gap-1">
              <img
                src={`/public/assets/icons/${trend === "decrement" ? "arrow-down-red.svg" : "arrow-up-green.svg"}`}
                alt={trend}
                className="size-5"
              />
              <figcaption>{Math.round(percentage)}%</figcaption>
            </figure>
            <p className="text-sm text-gray-100 truncate font-medium">
              vs last month
            </p>
          </div>

          <img
            src={`/public/assets/icons/${trend === "decrement" ? "decrement.svg" : "increment.svg"}`}
            alt="trend"
            className="xl:w-32 w-full h-full md:h-32 xl:h-full"
          />
        </div>
      </div>
    </article>
  );
};

export default StatsCard;
