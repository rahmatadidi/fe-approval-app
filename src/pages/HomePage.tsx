import Header from "@/components/header";
import AboutHero from "@/components/about-hero";
import CompanyHistory from "@/components/company-history";
import VisionMission from "@/components/vision-mission";

import CompanyInfo from "@/components/company-info";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AboutHero />
        <CompanyHistory />
        <VisionMission />
      </main>
    </div>
  );
}
