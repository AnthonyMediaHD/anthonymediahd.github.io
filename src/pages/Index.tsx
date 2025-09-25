import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { AboutGearSection } from "@/components/sections/about-gear";
import { ContactSection } from "@/components/sections/contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <AboutGearSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 shotbyanthony. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;