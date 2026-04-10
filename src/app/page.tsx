import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DataPermissions from "@/components/DataPermissions";
import SetupSteps from "@/components/SetupSteps";
import ApiKeysSection from "@/components/ApiKeysSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DataPermissions />
        <SetupSteps />
        <ApiKeysSection />
      </main>
      <Footer />
    </>
  );
}
