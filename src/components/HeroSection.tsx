import { Button } from "@/components/ui/button";
import basketballHero from "@/assets/basketball-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${basketballHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-basketball-blue/90 via-basketball-blue/70 to-basketball-orange/80"></div>
      </div>
      
      {/* Logo positioned top left */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/4914541a-4242-4f24-a8c0-b5d1fda28bc5.png" 
          alt="Αρκαδικός BC Logo" 
          className="h-20 w-auto drop-shadow-lg"
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Ακαδημία Μπάσκετ<br />
          <span className="text-basketball-orange">Αρκαδικός BC</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
          Το μπάσκετ είναι χαρά, ο Αρκαδικός είναι οικογένεια
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4 font-heading"
          >
            Εγγραφές Ανοιχτές
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 font-heading bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Μάθετε Περισσότερα
          </Button>
        </div>
      </div>
      
      {/* Decorative basketball elements */}
      <div className="absolute bottom-10 left-10 w-8 h-8 bg-basketball-orange rounded-full animate-bounce opacity-70"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-white rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-basketball-orange rounded-full animate-bounce delay-300 opacity-60"></div>
    </section>
  );
};

export default HeroSection;