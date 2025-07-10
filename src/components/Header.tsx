import { Building2 } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl shadow-lg">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">DrywallPro</h1>
            <p className="text-sm text-muted-foreground">Qualidade e Excelência</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;