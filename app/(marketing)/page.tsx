import Herosection from "@components/section/display/Hero";
import Features from "@components/section/display/Features";
import Opensource from "@components/section/display/Opensource";
import HowItWorks from "@components/section/how-it-works/HowItWorks";

export default async function IndexPage() {
  return (
    <>
      <Herosection />
      <Features />
      <HowItWorks />
      <Opensource />
    </>
  );
}
