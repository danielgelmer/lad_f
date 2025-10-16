import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { EssenceSection } from './components/EssenceSection';
import { StrategicPartnerSection } from './components/StrategicPartnerSection';
import { CollaborativeModelSection } from './components/CollaborativeModelSection';
import { SectorsSection } from './components/SectorsSection';
import { LadcomStoreSection } from './components/LadcomStoreSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EssenceSection />
      <StrategicPartnerSection />
      <CollaborativeModelSection />
      <SectorsSection />
      <LadcomStoreSection />
      <ContactSection />
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
