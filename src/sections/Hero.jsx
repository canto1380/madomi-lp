import { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import ImgNoqui from '../assets/images/plato-noquis.jpg';
import ImgTallarines from '../assets/images/tallarines.jpg';
import LogoMadomi from '../assets/images/madomi3.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const heroRef = useRef(null);

  /** Ver visibilidad del Hero **/
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Hero visible');
          setIsVisible(true);
        } else {
          console.log('Hero no visible');
          setIsVisible(false);
        }
      },
      { threshold: 0.3 } // Se activa cuando 30% del Hero es visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const heroSlides = [
    {
      title: "Transforma tu negocio digital",
      subtitle: "Soluciones innovadoras para el éxito empresarial",
      description: "Descubre cómo podemos ayudarte a alcanzar tus objetivos con tecnología de vanguardia y estrategias personalizadas.",
      cta: "Comenzar ahora",
      bgColor: "bg-gradient-to-br from-primary-600 to-primary-800",
      image: ImgNoqui
    },
    {
      title: "Experiencia de usuario excepcional",
      subtitle: "Diseño centrado en las personas",
      description: "Creamos experiencias digitales que conectan con tu audiencia y generan resultados medibles.",
      cta: "Ver proyectos",
      bgColor: "bg-gradient-to-br from-secondary-600 to-secondary-800",
      image: ImgTallarines
    }
  ];

  return (
    <section id="inicio" ref={heroRef} className="relative min-h-screen flex items-center">
      {/* Logo superpuesto */}

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className={`transform transition-transform duration-500 ease-in-out ${isVisible ? 'animate-fade-in' : ''} logo-float logo-move-continuous`}>
          <img
            src={LogoMadomi}
            alt="Madomi Logo"
            className="h-36 md:h-24 lg:h-60 w-auto object-contain drop-shadow-2xl pointer-events-none"
          />
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false, // No se detiene al interactuar
          pauseOnMouseEnter: false, // No se pausa al pasar el mouse
          waitForTransition: true, // Espera a que termine la transición
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={4000}
        allowTouchMove={false} // Desactivar interacción táctil
        // allowMouseDrag={false} // Desactivar arrastre con mouse
        className="w-full h-screen"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative w-full h-screen flex items-center`}>
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay blanco para aclarar la imagen */}
                <div className="absolute inset-0 bg-white/50"></div>

                {/* Overlay oscuro para mejorar legibilidad del texto */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}

              </div>

              {/* <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <div className="animate-fade-in">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-white/90">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                        {slide.cta}
                      </button>
                      <button className="btn-secondary bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-4 text-lg">
                        Saber más
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                  className="w-6 h-6 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: transparent !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Hero; 