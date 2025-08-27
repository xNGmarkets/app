import React from "react";
import "./movingItems.scss";
import Marquee from "react-fast-marquee";
import { UserInitials } from "@/components/ui/UserAvatar";

const countryList = [
  {
    title: "ZenithBank",
  },
  {
    title: "FirstBank",
  },
  {
    title: "AccessBank",
  },
  {
    title: "Guaranty Trust Bank",
  },
  {
    title: "Stanbic IBTC Bank",
  },
  {
    title: "United Bank for Africa",
  },
  {
    title: "Jaiz Bank",
  },
];

export const MovingItems = () => {
  return (
    <section className="my-10 w-full py-10">
      <Marquee speed={50} gradient={false} className="justify-between" autoFill>
        {countryList.map(({ title }, idx) => (
          <div
            key={idx}
            className="card text-grey-800 mx-3 flex items-center gap-3 p-2"
          >
            <UserInitials
              initials={title}
              displayName={`xNGX - ${title}`}
              showName
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};
