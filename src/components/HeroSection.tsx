const HeroSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Transforme seus ambientes com{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Drywall de qualidade
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
          Solicite um orçamento gratuito em até{" "}
          <span className="font-semibold text-accent">24h</span>
        </p>
        
        <div className="animate-scale-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-accent-glow text-accent-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            ✨ Profissionais especializados há mais de 10 anos
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;