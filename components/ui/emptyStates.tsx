import { NotFound } from "@/public/svgs";
import React, { ReactNode } from "react";

const EmptyState = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  className?: string;
  subTitle: string;
  icon?: ReactNode;
}) => {
  return (
    <section
      className={` ${className} flex flex-col items-center justify-center gap-5`}
    >
      <div className="flex w-8/12 flex-col items-center justify-center">
        <NotFound />
      </div>

      <div className="w-full text-center">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

export default EmptyState;
