import React from "react";
import "./movingItems.scss";
import Marquee from "react-fast-marquee";

export const MovingLogos = () => {
  return (
    <section className="container">
      <Marquee speed={50} gradient={false}>
        {/* {brandLogosData.map((item, idx) => (
          <figure
            key={idx}
            className="border-grey-100 !mx-2 rounded-xl border !px-5 !py-2 lg:mx-10"
          >
            <Image src={item} alt="" className="!h-10" />
          </figure>
        ))} */}
      </Marquee>
    </section>
  );
};
