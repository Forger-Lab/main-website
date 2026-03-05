import styles from "./LogoMarquee.module.css";
import Image from "next/image";

// Technology/partner logos from public/logos
const logos = [
  { name: "Google Cloud", src: "/logos/Google Cloud.png" },
  { name: "Next.js", src: "/logos/Next.js.png" },
  { name: "Supabase", src: "/logos/Supabase Icon.png" },
  { name: "Cursor", src: "/logos/cursor.png" },
  { name: "Figma", src: "/logos/figma-color.svg" },
  { name: "LangChain", src: "/logos/langchain-color.png" },
  { name: "LiveKit", src: "/logos/livekit-color.svg" },
  { name: "LlamaIndex", src: "/logos/llamaindex-color.svg" },
  { name: "Lovable", src: "/logos/lovable-color.svg" },
  { name: "n8n", src: "/logos/n8n-color.svg" },
  { name: "PydanticAI", src: "/logos/pydanticai-color.svg" },
  { name: "Replit", src: "/logos/replit-color.svg" },
];

export default function LogoMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* Original logos + duplicated for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={80}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
      <p className={styles.tagline}>
        Built with <span className={styles.highlight}>cutting-edge</span>{" "}
        technologies
      </p>
    </section>
  );
}
