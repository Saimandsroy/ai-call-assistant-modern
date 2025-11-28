import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero/Hero";
import { Features } from "@/components/Features/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Stats />
            <Pricing />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
