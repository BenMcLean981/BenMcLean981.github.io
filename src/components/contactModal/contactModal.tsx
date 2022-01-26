import React, { PropsWithChildren, useRef, useState } from "react";

import { P } from "../utils/paragraph";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

export function ContactCard(props: PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  function forceClose() {
    setOpen(false);
    console.log("Close");
  }

  function toggleModal() {
    setOpen((open) => !open);
  }

  useOutsideAlerter(modalRef, forceClose);

  return (
    <div>
      <div
        className={`modal fade fixed top-0 left-0 transform duration-300 h-screen ${
          open ? "translate-y-1/2" : ""
        }`}
        id="contact-modal"
        ref={modalRef}
      >
        <ContactCard />
      </div>
      <button onClick={toggleModal}>{props.children}</button>
    </div>
  );
}
