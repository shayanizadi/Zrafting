"use client";

import { useEffect } from "react";

export default function DesktopLock() {
  useEffect(() => {
    document.documentElement.classList.add("desktop-only");
  }, []);

  return null;
}
