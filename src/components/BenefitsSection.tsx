import { Clock, Sparkles, DollarSign, Shield, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Rápido",
    description: "Instalação ágil sem sujeira ou entulho"
  },
  {
    icon: Sparkles,
    title: "Limpo",
    description: "Processo limpo e organizado"
  },
  {
    icon: DollarSign,
    title: "Econômico", 
    description: "Melhor custo-benefício do mercado"
  },
  {
    icon: Shield,
    title: "Garantia",
    description: "Garantia de qualidade e durabilidade"
  },
  {
    icon: Users,
    title: "Especialistas",
    description: "Equipe altamente qualificada"
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Padrão premium de acabamento"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher nosso Drywall?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas com a melhor qualidade do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;