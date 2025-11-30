import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Solutions", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md border-b border-white/5 py-6"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#"
            className="flex items-center gap-2 group"
            data-testid="link-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl gradient-orange flex items-center justify-center glow-orange-sm group-hover:glow-orange transition-all duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-heading font-bold text-xl text-white">
              AI Call Assistant
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover-elevate"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/5"
              data-testid="button-signin"
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
              data-testid="button-contact-sales"
            >
              Contact Sales
            </Button>
            <Button
              className="bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 hover:border-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
              data-testid="button-book-demo"
            >
              Book a Demo
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-navy border-white/10 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-heading font-bold text-lg text-white">
                      AI Call
                    </span>
                  </div>
                </div>

                <div className="flex-1 py-6">
                  <div className="space-y-1 px-3">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        data-testid={`link-mobile-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-white/10 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/5"
                    data-testid="button-mobile-signin"
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full gradient-orange text-white"
                    data-testid="button-mobile-demo"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Animated Linear Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5 overflow-hidden">
        <div className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan-line" />
      </div>
    </motion.header>
  );
}
