import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";
import { SolvoLabLogo } from "@/components/SolvoLabLogo";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-center bg-black text-white">
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center " />
        </div>
      </div>
      <div className="py-4 px-2">
        <div className="container ">
          <div className="flex justify-between items-center ">
            {/* <Image 
    src={Logo} 
    alt="Logo" 
    width={80}
    height={80}
    className="object-contain logo-image"
  /> */}

            {/* <div className="rounded-full bg-[#cbddf3] px-4 py-2 flex items-center justify-center gap-2">
              <Image
                src={"/assets/SolvoLabLogo_cropped.svg"}
                alt="Logo"
                width={36}
                height={36}
                className="object-contain logo-image"
              />{" "}
              <span className={`text-2xl font-bold ${baumans.className}`}>
              SolvoLab.
              </span>
            </div> */}
            <SolvoLabLogo />
            <MenuIcon className="w-6 h-6 md:hidden" />
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>About</li>
                <button className="btn btn-primary">Get started </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
