const HeroSection = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Imagens decorativas posicionadas nos locais indicados */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0"
      >
        {/* Imagem esquerda - broca */}
        <img
          src="/images/broca.png"
          alt=""
          aria-hidden="true"
          className="absolute w-28 max-w-[7rem] opacity-20 saturate-0 grayscale"
          style={{
            left: "25%",
            top: "75%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Imagem centro - parafuso */}
        <img
          src="/images/parafuso.png"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 w-20 max-w-[5rem] opacity-20 saturate-0 grayscale"
          style={{ top: "75%", transform: "translateX(-50%)" }}
        />
        {/* Imagem direita - parafusadeira */}
        <img
          src="/images/parafusadeira.png"
          alt=""
          aria-hidden="true"
          className="absolute w-36 max-w-[9rem] opacity-20 saturate-0 grayscale"
          style={{
            right: "25%",
            top: "75%",
            transform: "translate(50%, -50%)",
          }}
        />
      </div>

      {/* Conteúdo principal em z-index maior */}
      <div className="container mx-auto text-center max-w-4xl relative z-10">
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
      </div>
    </section>
  );
};

export default HeroSection;
