import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// CÓDIGO VIEJO - COMENTADO PARA POSIBLES VUELTAS ATRÁS
// import HistoriaImage1 from '../assets/images/historia.png';
// import HistoriaImage2 from '../assets/images/historia2.png';

import VideoEmpresa from '../assets/video/VideoEmpresa.mp4'
import HistoriaImage1 from '../assets/images/historia.png';

const Historia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Contadores dinámicos
  const [statsCounts, setStatsCounts] = useState({
    first: 0,
    second: 0
  });

  // Referencia para detectar cuando la sección es visible
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const videoRef = useRef(null);

  // Función para formatear números con separador de miles
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Manejadores de eventos del video
  const handleVideoLoadStart = () => {
    setIsVideoLoaded(false);
    setVideoError(false);
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setIsVideoLoaded(false);
  };

  // Datos del slider de historia - SOLO TEXTO AHORA
  const historiaSlides = [
    {
      title: "Una tradición de excelencia",
      description1: "Somos una Empresa dedicada a la fabricación de Pastas Frescas desde 1993. Nacimos en la ciudad de San Miguel de Tucumán, Tucumán, Argentina con la misión de acercar a tu mesa Frescura y Calidad.",
      description2: "Somos la 2º generación de una familia dedicada a la elaboración de productos derivados de la harina. Amamos la buena cocina y es por esto que elaboramos nuestros productos con los mejores ingredientes.",
      // CÓDIGO VIEJO - COMENTADO
      // image: HistoriaImage1,
      stats: {
        years: 30,
        clients: 10000,
        yearsLabel: "Años de experiencia",
        clientsLabel: "Clientes y Distribuidores"
      }
    },
    {
      title: "Innovación y calidad",
      description1: "Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la calidad y la innovación. Nuestra historia comenzó con una visión clara: crear productos que no solo satisfagan las necesidades de nuestros clientes, sino que superen sus expectativas.",
      description2: "A lo largo de los años, hemos evolucionado y crecido, pero nuestros valores fundamentales permanecen intactos. Cada proyecto, cada cliente y cada desafío nos ha ayudado a mejorar y a fortalecer nuestra posición en el mercado.",
      // CÓDIGO VIEJO - COMENTADO
      // image: HistoriaImage2,
      stats: {
        product: 30,
        family: 15000,
        productLabel: "Productos",
        familyLabel: "Familias confían en nosotros"
      }
    }
  ];

  // Observer para detectar visibilidad de la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reproducir video cuando la sección es visible y el video está cargado
          setTimeout(() => {
            if (videoRef.current && isVideoLoaded && !videoError) {
              videoRef.current.play().catch(error => {
                console.log('Error reproduciendo video:', error);
              });
            }
          }, 500);
        } else {
          setIsVisible(false);
          setStatsCounts({ first: 0, second: 0 });
          // Pausar video cuando la sección no es visible
          if (videoRef.current && isVideoPlaying) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.2 }
    );

    // Observar toda la sección en lugar de solo las estadísticas
    const sectionElement = document.getElementById('historia');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => observer.disconnect();
  }, [isVideoLoaded, videoError, isVideoPlaying]);

  // Animación de contadores cuando cambia el slide o cuando se hace visible
  useEffect(() => {
    if (!isVisible) return;

    const currentSlideData = historiaSlides[currentSlide];
    const firstValue = currentSlideData.stats.years || currentSlideData.stats.product || 0;
    const secondValue = currentSlideData.stats.clients || currentSlideData.stats.family || 0;

    setStatsCounts({ first: 0, second: 0 });

    let startTime = null;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentFirst = Math.floor(easeOutQuart * firstValue);
      const currentSecond = Math.floor(easeOutQuart * secondValue);

      setStatsCounts({
        first: currentFirst,
        second: currentSecond
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Pequeño retraso para asegurar que el video esté listo
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 100);
  }, [isVisible, currentSlide]);

  return (
    <section id="historia" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header con diseño mejorado */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Elemento decorativo superior */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

            {/* Subtítulo pequeño */}
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-5">
              Descubre nuestra trayectoria
            </p>

            {/* Título principal */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 relative z-10 font-serif">
              Nuestra Historia
              {/* Elementos decorativos laterales centrados con el texto */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </h2>

            {/* Línea decorativa inferior */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-gray-500 via-transparent to-gray-500 rounded-full shadow-lg"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Descubre la trayectoria que nos ha llevado a convertirnos la pasta de todos los tucumanos.
          </p>
        </div>

        {/* NUEVA ESTRUCTURA: Video fijo + Texto que se mueve */}
        <div className="relative max-w-6xl mx-auto">
          {/* Botones de navegación externos - Visibles en desktop */}
          <div className="absolute -left-4 md:-left-16 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex">
            <button className="swiper-button-prev-custom bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-4 md:-right-16 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex">
            <button className="swiper-button-next-custom bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Columna derecha - Video fijo (primera en móviles) */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Spinner dinámico - se muestra hasta que el video se cargue */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isVideoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ zIndex: isVideoLoaded ? 0 : 20 }}
                >
                  {/* Fondo con gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
                  
                  {/* Spinner principal */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {/* Spinner circular animado */}
                      <div className="relative mb-6 animate-float">
                        {/* Círculo exterior */}
                        <div className="w-20 h-20 border-4 border-gray-600 rounded-full animate-pulse"></div>
                        {/* Círculo interior giratorio */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
                        {/* Círculo central con efecto de brillo */}
                        <div className="absolute top-2 left-2 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-glow"></div>
                        {/* Punto central */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                      </div>
                      
                      {/* Texto de carga */}
                      <div className="space-y-3">
                        <p className="text-white text-lg font-medium tracking-wide">Preparando experiencia</p>
                        <p className="text-white/80 text-sm">Cargando video de nuestra historia</p>
                        <div className="flex justify-center space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Elementos decorativos flotantes */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                  <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1500ms' }}></div>
                </div>

                {/* Video - se muestra cuando está cargado */}
                                 <video
                   ref={videoRef}
                   src={VideoEmpresa}
                   preload="auto"
                   loop
                   controls
                   playsInline
                   muted
                   className={`w-full h-96 object-cover transition-opacity duration-700 ease-in-out ${
                     isVideoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
                   }`}
                   style={{ zIndex: isVideoLoaded ? 10 : 0 }}
                   onLoadedStart={handleVideoLoadStart}
                   onCanPlay={handleVideoCanPlay}
                   onPlay={handleVideoPlay}
                   onPause={handleVideoPause}
                   onError={handleVideoError}
                 />

                {/* Overlay sutil - con z-index menor para no tapar controles */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/30 to-transparent z-0 pointer-events-none"></div>

                {/* Indicador de error si el video falla */}
                {videoError && (
                  <div className="absolute inset-0 bg-gray-900/90 flex items-center justify-center z-30">
                    <div className="text-center text-white p-6">
                      <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Error al cargar el video</h3>
                      <p className="text-gray-300 mb-4">No se pudo cargar el video. La imagen de previsualización permanecerá visible.</p>
                      <button 
                        onClick={() => {
                          setVideoError(false);
                          if (videoRef.current) {
                            videoRef.current.load();
                          }
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        Reintentar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Columna izquierda - Texto que se mueve (segunda en móviles) */}
            <div className="order-2 lg:order-1">
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 20000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  waitForTransition: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                loop={true}
                effect="fade"
                fadeEffect={{
                  crossFade: true
                }}
                speed={2000}
                allowTouchMove={true}
                allowMouseDrag={false}
                className="historia-text-swiper"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              >
                {historiaSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="space-y-6">
                      <h3 className="text-3xl text-center md:text-left font-bold text-gray-900 mb-6 font-serif">
                        {slide.title}
                      </h3>
                      <p className="text-lg text-center md:text-left text-gray-600 leading-relaxed">
                        {slide.description1}
                      </p>
                      <p className="text-lg text-center md:text-left text-gray-600 leading-relaxed">
                        {slide.description2}
                      </p>

                      {/* Estadísticas o logros */}
                      <div className="grid grid-cols-2 gap-6 mt-8" ref={index === currentSlide ? statsRef : null}>
                        <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-100 rounded-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-green-600 mb-2">
                            {index === currentSlide ? formatNumber(statsCounts.first) : formatNumber(slide.stats.years || slide.stats.product || 0)}+
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {slide.stats.yearsLabel || slide.stats.productLabel}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-100 rounded-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-green-600 mb-2">
                            {index === currentSlide ? formatNumber(statsCounts.second) : formatNumber(slide.stats.clients || slide.stats.family || 0)}+
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {slide.stats.clientsLabel || slide.stats.familyLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* CÓDIGO VIEJO - COMENTADO PARA POSIBLES VUELTAS ATRÁS */}
        {/* 
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -left-4 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <button className="swiper-button-prev-custom bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-4 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <button className="swiper-button-next-custom bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: true,
            }}
            
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            speed={2000}
            allowTouchMove={true}
            allowMouseDrag={false}
            className="historia-swiper"
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {historiaSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="relative order-1 lg:order-2">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={slide.image}
                        alt="Nuestra Historia"
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/30 to-transparent"></div>
                    </div>
                  </div>

                  <div className="space-y-6 order-2 lg:order-1">
                    <h3 className="text-3xl text-center md:text-left font-bold text-gray-900 mb-6 font-serif">
                      {slide.title}
                    </h3>
                    <p className="text-lg text-center md:text-left text-gray-600 leading-relaxed">
                      {slide.description1}
                    </p>
                    <p className="text-lg text-center md:text-left text-gray-600 leading-relaxed">
                      {slide.description2}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-8" ref={index === currentSlide ? statsRef : null}>
                      <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-100 rounded-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {index === currentSlide ? formatNumber(statsCounts.first) : formatNumber(slide.stats.years || slide.stats.product || 0)}+
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {slide.stats.yearsLabel || slide.stats.productLabel}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-100 rounded-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {index === currentSlide ? formatNumber(statsCounts.second) : formatNumber(slide.stats.clients || slide.stats.family || 0)}+
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {slide.stats.clientsLabel || slide.stats.familyLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        */}

        <style jsx>{`
          .historia-text-swiper .swiper-pagination-bullet {
            background: #3b82f6 !important;
            opacity: 0.3 !important;
          }
          .historia-text-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
          }
          .historia-text-swiper .swiper-button-next,
          .historia-text-swiper .swiper-button-prev {
            display: none !important;
          }
          .swiper-button-next-custom:hover,
          .swiper-button-prev-custom:hover {
            background-color: #f3f4f6 !important;
            transform: scale(1.05);
          }
          /* Asegurar que los botones personalizados sean visibles */
          .swiper-button-next-custom,
          .swiper-button-prev-custom {
            display: flex !important;
            align-items: center;
            justify-content: center;
            z-index: 30 !important;
            position: relative !important;
          }
          /* Asegurar que los contenedores de botones sean visibles */
          .swiper-button-next-custom,
          .swiper-button-prev-custom {
            pointer-events: auto !important;
          }
          /* Asegurar que los controles del video sean clickeables */
          video::-webkit-media-controls {
            z-index: 20 !important;
          }
          video::-webkit-media-controls-panel {
            z-index: 20 !important;
          }
          video::-webkit-media-controls-play-button {
            z-index: 20 !important;
          }
          /* Asegurar que el video y sus controles tengan prioridad */
          video {
            z-index: 10 !important;
          }
          /* Estilos para la imagen de previsualización */
          .video-poster {
            transition: opacity 0.7s ease-in-out;
          }
          /* Animación de carga */
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          /* Mejorar la transición del video */
          .video-transition {
            transition: opacity 0.7s ease-in-out;
          }
          /* Animaciones personalizadas para el spinner */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(255,255,255,0.3); }
            50% { box-shadow: 0 0 20px rgba(255,255,255,0.6); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Historia; 