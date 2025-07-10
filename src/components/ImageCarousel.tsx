import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// Placeholder para as imagens que serão fornecidas
const placeholderImages = [
  {
    id: 1,
    url: "/api/placeholder/600/400",
    alt: "Projeto Drywall - Forro"
  },
  {
    id: 2, 
    url: "/api/placeholder/600/400",
    alt: "Projeto Drywall - Parede"
  },
  {
    id: 3,
    url: "/api/placeholder/600/400", 
    alt: "Projeto Drywall - Nicho"
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images] = useState(placeholderImages);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
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
          {/* Main carousel container */}
          <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] md:h-[500px]">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))
              ) : (
                // Placeholder quando não há imagens
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-center text-muted-foreground">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Imagens em breve...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </>
            )}
          </div>

          {/* Dots indicator */}
          {images.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary shadow-lg scale-125'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
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