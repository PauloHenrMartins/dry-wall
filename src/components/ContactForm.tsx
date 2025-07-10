import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, User, MapPin, MessageCircle, Send, Sparkles } from "lucide-react";
import { brazilStates, serviceTypes } from "@/data/brazilData";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  phone: string;
  state: string;
  city: string;
  serviceType: string;
  description: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    state: "",
    city: "",
    serviceType: "",
    description: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const { toast } = useToast();

  const handleStateChange = (selectedState: string) => {
    setFormData(prev => ({ ...prev, state: selectedState, city: "" }));
    const stateData = brazilStates.find(state => state.name === selectedState);
    setAvailableCities(stateData?.cities || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação
    if (!formData.fullName || !formData.phone || !formData.state || !formData.city || !formData.serviceType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Montar mensagem para WhatsApp
      const message = `Olá! Meu nome é ${formData.fullName}, sou de ${formData.city} - ${formData.state}.

Meu telefone para contato é: ${formData.phone}

Gostaria de solicitar um orçamento para o seguinte projeto de drywall:

"${formData.serviceType}"

"${formData.description || 'Sem descrição adicional'}"

Aguardo retorno. Obrigado(a)!`;

      // Número do WhatsApp da empresa
      const whatsappNumber = "5511945154082";
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Abrir WhatsApp
      window.open(whatsappURL, '_blank');

      toast({
        title: "Redirecionando para o WhatsApp",
        description: "Você será redirecionado para enviar sua mensagem via WhatsApp.",
      });

      // Limpar formulário após sucesso
      setFormData({
        fullName: "",
        phone: "",
        state: "",
        city: "",
        serviceType: "",
        description: ""
      });
      setAvailableCities([]);

    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solicite seu Orçamento
          </h3>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário e receba um orçamento personalizado em até 24h
          </p>
        </div>

        <Card className="border-border/50 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <Sparkles className="w-5 h-5 text-accent" />
              Orçamento Gratuito
            </CardTitle>
            <CardDescription>
              Todos os campos são obrigatórios para um atendimento personalizado
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nome Completo
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Digite seu nome completo"
                  className="h-12"
                  required
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Telefone
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(11) 99999-9999"
                  className="h-12"
                  required
                />
              </div>

              {/* Estado e Cidade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Estado
                  </Label>
                  <Select value={formData.state} onValueChange={handleStateChange} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      {brazilStates.map((state) => (
                        <SelectItem key={state.code} value={state.name}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Cidade</Label>
                  <Select 
                    value={formData.city} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
                    disabled={!formData.state}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione a cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tipo de Serviço */}
              <div className="space-y-2">
                <Label>Tipo de Serviço</Label>
                <Select 
                  value={formData.serviceType} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                  required
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Descrição */}
              <div className="space-y-2">
                <Label htmlFor="description" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Descrição do Projeto
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Descreva detalhes do seu projeto, medidas, acabamentos desejados..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              {/* Botão de Envio */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 md:h-14 text-sm md:text-lg font-semibold bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Solicitar Orçamento via WhatsApp
                  </div>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Ao clicar no botão, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;