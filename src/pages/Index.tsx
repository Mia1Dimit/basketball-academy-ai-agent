import HeroSection from "@/components/HeroSection";
import TeamsSection from "@/components/TeamsSection";
import ContactSection from "@/components/ContactSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TeamsSection />
      <ContactSection />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
