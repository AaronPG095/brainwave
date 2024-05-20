import { smallSphere, stars } from "../assets";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt=""
          />
          <div>
            <img src={stars} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
