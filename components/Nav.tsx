"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackClick } from "@/lib/analytics";
import { serviceLinks } from "@/lib/navigation";
import Icon from "./Icon";

const groups = [
  { label: "Services", links: [
    ["Services Overview", "/#services"],
    ["24/7 Client Engine", "/#engine"],
    ...serviceLinks,
  ] },
  { label: "Client Work", links: [
    ["Client Stories", "/#client-work"],
    ["Selected Builds", "/builds#builds"],
  ] },
  { label: "About Us", links: [
    ["About SolvoLab", "/about"],
    ["Our Approach", "/#approach"],
    ["Architecture", "/#architecture"],
    ["Security", "/#security"],
    ["Our Studio", "/#studio"],
  ] },
];

export default function Nav() {
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function closeOutside(event: Event) {
      header.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(menu => {
        if (!menu.contains(event.target as Node)) menu.open = false;
      });
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
    };
  }, []);

  const links = groups.map(group => (
    <details className="home-nav-group" key={group.label} onPointerEnter={event => {
      if (event.pointerType !== "mouse" || !window.matchMedia("(min-width: 1001px) and (hover: hover)").matches) return;
      const menu = event.currentTarget;
      menu.parentElement?.querySelectorAll<HTMLDetailsElement>("details").forEach(other => { other.open = other === menu; });
    }} onPointerLeave={event => {
      if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1001px) and (hover: hover)").matches && !event.currentTarget.querySelector(".home-nav-panel")?.contains(document.activeElement)) {
        event.currentTarget.open = false;
      }
    }}>
      <summary onClick={event => {
        // Hover already opens desktop menus; a mouse click should keep them open.
        if (event.detail > 0 && window.matchMedia("(min-width: 1001px) and (hover: hover)").matches) {
          event.preventDefault();
          (event.currentTarget.parentElement as HTMLDetailsElement).open = true;
        }
      }}>{group.label}<Icon name="chevron" className="home-nav-chevron" /></summary>
      <div className="home-nav-panel">
        {group.links.map(([label, href]) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => trackClick(`nav_${href.replace(/[^a-z0-9]+/gi, "_")}`)}><span>{label}</span><Icon name="arrow" className="home-nav-card-arrow" /></Link>
        ))}
      </div>
    </details>
  ));

  return (
    <header className="site-shell home-nav" ref={header} onClick={event => {
      if ((event.target as HTMLElement).closest("a")) {
        header.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(menu => { menu.open = false; });
      }
    }} onKeyDown={event => {
      if (event.key !== "Escape") return;
      const menu = (event.target as HTMLElement).closest<HTMLDetailsElement>("details[open]");
      if (menu) {
        event.preventDefault();
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }}>
      <div className="home-container home-nav-inner">
        <Link href="/" aria-label="SolvoLab home"><img src="/home/b616b.png" alt="SolvoLab" width="180" height="74" /></Link>
        <nav aria-label="Main navigation" className="home-desktop-links">{links}</nav>
        <Link className="home-button home-nav-cta" href="/contact" onClick={() => trackClick("nav_header_cta")}>Tell us about your project<img src="/home/81057.svg" alt="" /></Link>
        <details className="home-mobile-nav">
          <summary aria-label="Toggle navigation"><Icon name="menu" className="home-menu-icon" /><Icon name="close" className="home-close-icon" /></summary>
          <nav aria-label="Mobile navigation">{links}<Link href="/contact" onClick={() => trackClick("nav_mobile_cta")}>Tell us about your project <Icon name="arrow" className="home-nav-card-arrow" /></Link></nav>
        </details>
      </div>
    </header>
  );
}
