import Image, { StaticImageData } from "next/image";

type FileImageProps = {
  url: string | StaticImageData;
  displayName: string;
  initials: string;
  subText?: string;
  className?: string;
};

export const UserAvatar = ({
  url,
  initials,
  displayName,
  subText,
  className,
}: FileImageProps) => {
  return (
    <article className="flex w-full items-center gap-2.5">
      {url ? (
        <div>
          <figure className="relative size-8 overflow-hidden">
            <Image
              src={url}
              alt="image"
              fill
              className="!h-full !w-full object-cover"
            />
          </figure>
        </div>
      ) : (
        <UserInitials initials={initials} displayName={displayName} />
      )}

      <div className="flex-1">
        <p className={`text-grey-900 !text-sm !font-medium`}>{displayName}</p>
        <small
          className={`text-grey-500 !text-[10px] !font-medium ${className}`}
        >
          {subText}
        </small>
      </div>
    </article>
  );
};

export const UserInitials = ({
  bg,
  showName,
  initials,
  displayName,
  className,
  titleClassName,
  displayClassName,
}: {
  showName?: boolean;
  bg?: string;
  initials?: string;
  displayName?: string;
  className?: string;
  titleClassName?: string;
  displayClassName?: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${className} text-warning-200 grid size-8 place-items-center rounded-full ${bg ? bg : "bg-warning-50"}`}
      >
        <span
          className={`text-EbonyClay text-sm font-bold uppercase ${titleClassName}`}
        >
          {initials ? initials?.slice(0, 2) : displayName?.slice(0, 2) || "N/A"}
        </span>
      </div>
      {showName && (
        <h4
          className={`text-grey-900 !text-sm !font-medium ${displayClassName}`}
        >
          {" "}
          {displayName}
        </h4>
      )}
    </div>
  );
};
