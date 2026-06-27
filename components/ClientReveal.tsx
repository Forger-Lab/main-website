"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;

    // Wait a brief tick for page mount/render to finish
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal");
      if (!els.length) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("in"));
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      els.forEach((el) => io?.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      if (io) {
        io.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
