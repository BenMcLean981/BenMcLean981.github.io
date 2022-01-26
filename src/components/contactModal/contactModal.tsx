import { H4, H5 } from "../utils/headings";
import React, { PropsWithChildren, useRef, useState } from "react";

import { Divider } from "../utils/divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

// This page was thrown together to get the website production ready quickly,
// I will come back and fix it after my next deadline.

export function ContactCard(props: PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  function toggleOpen(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setOpen((open) => !open);
  }

  function forceClose() {
    setOpen(false);
  }

  useOutsideAlerter(ref, forceClose);

  return (
    <div>
      <div
        className={`fade fixed top-0 left-0 transform duration-300 w-full h-screen flex justify-center items-center bg-zinc-900 bg-opacity-75 ${
          open ? "" : "hidden"
        }`}
        id="contact-modal"
      >
        <div
          ref={ref}
          className="w-1/2 xl:w-1/3 flex-col bg-slate-800 rounded-3xl p-4 border"
        >
          <div className="flex justify-between">
            <H4>Contact Information</H4>
            <button onClick={forceClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                transform={`rotate(45deg)`}
                className="icon"
                stroke={"#fff"}
                width={24}
                height={24}
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="20" y1="4" x2="4" y2="20" />
                <line x1="4" y1="4" x2="20" y2="20" />
              </svg>
            </button>
          </div>
          <hr className="mb-2" />
          <div>
            <H5>
              <strong>Name: </strong> Ben McLean
            </H5>
            <H5>
              <strong>Email: </strong>
              <a className="underline" href="mailto:bmcle071@uottawa.ca">
                bmcle071@uottawa.ca
              </a>
            </H5>
          </div>
          <Divider />
          <div>
            <div className="flex flex-col items-center w-full">
              <H5>My Social Media (WIP)</H5>
              <div className="flex justify-center gap-x-4">
                <a
                  className="text-4xl bg-white w-10 text-center rounded"
                  href="https://github.com/BenMcLean981"
                >
                  <FontAwesomeIcon
                    className="text-zinc-900 rounded"
                    icon={["fab", "github"]}
                  />
                </a>
                <a
                  className="text-4xl bg-zinc-700 w-10 text-center rounded"
                  href="https://stackoverflow.com/users/12833553/bigbadbenny"
                >
                  <FontAwesomeIcon
                    className="text-orange-500 rounded"
                    icon={["fab", "stack-overflow"]}
                  />
                </a>
                <a
                  className="text-4xl bg-white w-10 text-center rounded"
                  href="https://www.linkedin.com/in/BenMcLean981"
                >
                  <FontAwesomeIcon
                    className="text-blue-600 rounded"
                    icon={["fab", "linkedin"]}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleOpen}>{props.children}</button>
    </div>
  );
}
