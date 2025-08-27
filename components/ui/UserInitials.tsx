import React from "react";

const UserInitials = ({
  bg,
  showName,
  userName,
  className,
  titleClassName,
}: {
  showName?: boolean;
  bg?: string;
  userName: string;
  className?: string;
  titleClassName?: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${className} text-warning-200 grid h-10 w-10 place-items-center rounded-full ${bg ? bg : "bg-warning-50"}`}
      >
        <span
          className={`text-EbonyClay text-sm font-bold uppercase ${titleClassName}`}
        >
          {userName?.slice(0, 2) || "N/A"}
        </span>
      </div>
      {showName && (
        <h4 className="text-CharcoalGrey font-semibold"> {userName}</h4>
      )}
    </div>
  );
};

export default UserInitials;
