"use client";
import { ReactNode, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Accordion = ({
  data,
  className,
}: {
  data: { question: string; answer: string | ReactNode }[];
  className?: string;
}) => {
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});

  const toggle = (id: number) => {
    setSelected((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <main className={`${className} `}>
      <ul className="flex flex-col justify-between gap-5">
        {data?.map(({ question, answer }, idx) => (
          <li
            key={idx}
            className={`!border-grey-100 w-full cursor-pointer !rounded-2xl !border p-5`}
            onClick={() => toggle(idx)}
          >
            <div className="mb-3 flex justify-between gap-3">
              <p className={`font-semibold`}>{question}</p>
              <span>
                {selected[idx] ? (
                  <FaChevronUp size={15} fill="#292D32" />
                ) : (
                  <FaChevronDown size={15} fill="#292D32" />
                )}
              </span>
            </div>
            {typeof answer === "string" ? (
              <>
                {selected[idx] && (
                  <div className="text-base">
                    {selected[idx] && <>{answer}</>}
                  </div>
                )}
              </>
            ) : (
              <>{selected[idx] && <> {answer}</>} </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Accordion;
