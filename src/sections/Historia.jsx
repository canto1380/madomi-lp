import React, { useState, useEffect, useRef } from 'react';

// Hook personalizado para el contador animado
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(false); // Reset para permitir nueva animación
        } else {
          setIsVisible(false);
          setCount(start); // Reset del contador cuando sale del viewport
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [start]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Función de easing para una animación más suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true); // Marca como completada
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, hasAnimated, end, duration, start]);

  return [count, ref];
};

const Historia = () => {
  // Usar el hook para cada estadística
  const [yearsCount, yearsRef] = useCounter(20, 2000);
  const [clientsCount, clientsRef] = useCounter(1000, 2500);

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

        {/* Contenido principal - Dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda - Texto */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              Una tradición de excelencia
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos una Empresa dedicada a la fabricación de Pastas Frescas desde 1993.
              Nacimos en la ciudad de San Miguel de Tucumán, Tucumán, Argentina con la misión de acercar a tu mesa Frescura y Calidad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos la 2º generación de una familia dedicada a la elaboración de productos derivados de la harina. Amamos la buena cocina y es por esto que elaboramos nuestros productos con los mejores ingredientes.
            </p>
 
            {/* Estadísticas o logros */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-100 rounded-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300" ref={yearsRef}>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {yearsCount}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Años de experiencia</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-100 rounded-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300" ref={clientsRef}>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {clientsCount}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Clientes y Distribuidores</div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/src/assets/images/historia.png"
                alt="Nuestra Historia"
                className="w-full h-96 object-cover grayscale-70"
              />
              {/* Overlay sutil */}
              <div className=" absolute inset-0 bg-gradient-to-b from-white/10 to-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia; 