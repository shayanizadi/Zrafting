"use client";

import { useEffect } from "react";

export default function DesktopLock() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) header.classList.add("desktop-header");
  }, []);

  return null;
}
