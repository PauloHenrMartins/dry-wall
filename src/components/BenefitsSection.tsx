import { Clock, Sparkles, DollarSign, Shield, Users, Award } from "lucide-react";

const benefits = [
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
  },
  {
    icon: DollarSign,
    title: "Econômico", 
    description: "Melhor custo-benefício do mercado"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group bg-card border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
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