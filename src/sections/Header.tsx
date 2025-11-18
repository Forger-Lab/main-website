import { SolvoLabLogo } from "@/components/SolvoLabLogo";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-center bg-black text-white">
      </div>
      <div className="py-4 px-2">
        <div className="container ">
          <div className="flex justify-between items-center ">
            <SolvoLabLogo />
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="#whatWeDo">
                  Features
                  </Link>
                  </li>
                <Link href='#DemoSection' className="btn btn-primary">Get In Touch</Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
