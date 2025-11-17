import WhatWeDo from "@/components/WhatWeDo";
function HowItWorks() {
  return (
    <section id="whatWeDo" className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your Productivity</div>
          </div>
          <h2 className="section-title mt-5">Autonomous Productivity Layer</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010d3e] mt-5">
            {" "}
            <span className="font-bold">SolvoLab</span> builds and operates{" "}
            <span className="font-bold">AI workers</span> inside your business.
            They <span className="font-bold">integrate everywhere</span> your
            work happens — and{" "}
            <span className="font-bold">execute autonomously</span> .
          </p>
        </div>
          <WhatWeDo />
      </div>
    </section>
  );
}

export default HowItWorks;
