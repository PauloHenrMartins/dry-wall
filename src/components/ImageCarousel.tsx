import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const placeholderImages = [
  {
    id: 1,
    url: "/images/img1.webp",
    alt: "Projeto Drywall 1",
  },
  {
    id: 2,
    url: "/images/img2.webp",
    alt: "Projeto Drywall 2",
  },
  {
    id: 3,
    url: "/images/img3.webp",
    alt: "Projeto Drywall 3",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = placeholderImages;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Projetos
          </h3>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos nossos trabalhos realizados
          </p>
        </div>

        <div className="relative">
          {/* Container principal do carrossel */}
          <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden">
            <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] mx-auto">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible pointer-events-none"
                    }`}
                    aria-hidden={index !== currentIndex}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      width={800} // Definindo largura fixa
                      height={500} // Definindo altura fixa
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-center text-muted-foreground">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Imagens em breve...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Botões de navegação */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 
    bg-white/90 dark:bg-gray-700 dark:bg-opacity-80 
    rounded-full shadow-lg flex items-center justify-center 
    transition-all duration-300 hover:scale-110"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground dark:text-white" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 
    bg-white/90 dark:bg-gray-700 dark:bg-opacity-80
    rounded-full shadow-lg flex items-center justify-center 
    transition-all duration-300 hover:scale-110"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6 text-foreground dark:text-white" />
                </button>
              </>
            )}
          </div>

          {/* Indicadores de pontos */}
          {images.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary shadow-lg scale-125"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
