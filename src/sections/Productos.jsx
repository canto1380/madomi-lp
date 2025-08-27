import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
/** IMAGENES **/
import Tallarines1 from '../assets/images/productos/tallarines1.png'; // Fideos
import Tallarines2 from '../assets/images/productos/tallarines2.png'; // Fideos
import Tallarines3 from '../assets/images/productos/tallarines3.png'; // Fideos
import TapaEmpanadas from '../assets/images/productos/tapaEmpanadas1.png'; // Tapas y discos
import Capellettis1 from '../assets/images/productos/capellettis1.png'; // Pastas frescas
import Capellettis2 from '../assets/images/productos/capellettis2.png'; // Pastas frescas
import Noquis from '../assets/images/productos/noquis.png'; // Pastas frescas
import Noquis1 from '../assets/images/productos/noquis1.png'; // Pastas frescas
import PascualinaLight from '../assets/images/productos/PascualinasLight.png'; // Tapas y discos
import Tartas1 from '../assets/images/productos/tapaTartas1.png'; // Tapas y discos
import Tartas2 from '../assets/images/productos/tapaTartas2.png'; // Tapas y discos
import Ravioles1 from '../assets/images/productos/ravioles1.png'; // Pastas frescas
import Ravioles2 from '../assets/images/productos/ravioles2.png'; // Pastas frescas
import Ravioles3 from '../assets/images/productos/ravioles3.png'; // Pastas frescas
import Ravioles4 from '../assets/images/productos/ravioles4.png'; // Pastas frescas
import Ravioles5 from '../assets/images/productos/ravioles5.png'; // Pastas frescas
import Ravioles6 from '../assets/images/productos/ravioles6.png'; // Pastas frescas
import Sorrentinos1 from '../assets/images/productos/sorrentinos1.png'; // Pastas frescas
import Sorrentinos2 from '../assets/images/productos/sorrentinos2.png'; // Pastas frescas


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonios = () => {
  const productos = [
    {
      nombre: "Capellettis de pollo y espinaca",
      imagen: Capellettis1,
      categoria: "Pastas frescas"
    },
    {
      nombre: "Capellettis de 4 quesos",
      imagen: Capellettis2,
      categoria: "Pastas frescas"
    },
    {
      nombre: "Noquis de papa",
      imagen: Noquis,
      categoria: "Pastas frescas"
    },
    {
      nombre: "Noquis con papa",
      imagen: Noquis1,
      categoria: "Pastas frescas"
    },
    {
      nombre: "Ravioles de ricota y espinaca",
      imagen: Ravioles1,
      categoria: "Pastas frescas"
    },
    {
      nombre: "Ravioles de pollo y espinaca",
      imagen: Ravioles2,
      categoria: "Pastas frescas"
    },
    
    {
      nombre: "Ravioles de 4 quesos",
      imagen: Ravioles3,
      categoria: "Pastas frescas"
    },
    
    {
      nombre: "Ravioles de pollo y verduras",
      imagen: Ravioles4,
      categoria: "Pastas frescas"
    },
    
    {
      nombre: "Ravioles de pollo y verduras 1",
      imagen: Ravioles5,
      categoria: "Pastas frescas"
    },    
    {
      nombre: "Ravioles de pollo y verduras 2",
      imagen: Ravioles6,
      categoria: "Pastas frescas"
    },
    {
      nombre: "Sorrentinos de ricota, jamín y muzzarella",
      imagen: Sorrentinos1,
      categoria: "Pastas frescas"
    },
    {
      nombre: "Sorrentinos de pollo y verduras",
      imagen: Sorrentinos2,
      categoria: "Pastas frescas"
    },
    {
      nombre: "tallarines de espinaca",
      imagen: Tallarines1,
      categoria: "Fideos"
    },
    {
      nombre: "Tallarines de huevo",
      imagen: Tallarines2,
      categoria: "Fideos"
    },
    {
      nombre: "Tallarines de morrones",
      imagen: Tallarines3,
      categoria: "Fideos"
    },
    {
      nombre: "Tapa de empanadas",
      imagen: TapaEmpanadas,
      categoria: "Tapas y discos"
    },
    {
      nombre: "Pascualina light",
      imagen: PascualinaLight,
      categoria: "Tapas y discos"
    },
    {
      nombre: "Tapa de tartas",
      imagen: Tartas1,
      categoria: "Tapas y discos"
    },
    {
      nombre: "Tapa de tarta pascualina",
      imagen: Tartas2,
      categoria: "Tapas y discos"
    },
    
    
  ];

  // Lógica para agrupar productos por categoría
  const productosPorCategoria = productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
      acc[producto.categoria] = [];
    }
    acc[producto.categoria].push(producto);
    return acc;
  }, {});

  // Obtener las categorías únicas
  const categorias = Object.keys(productosPorCategoria);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="productos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Elemento decorativo superior */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
 
            {/* Subtítulo pequeño */}
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-5">
              Descubre nuestros productos
            </p>
 
            {/* Título principal */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 relative z-10 font-serif">
              Productos
              {/* Elementos decorativos laterales centrados con el texto */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </h2>
 
            {/* Línea decorativa inferior */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-gray-500 via-transparent to-gray-500 rounded-full shadow-lg"></div>
          </div>
 
        </div>

        {/* Renderizar cada categoría con su subtítulo y slider */}
        {categorias.map((categoria, categoriaIndex) => (
          <div key={categoria} className={categoriaIndex > 0 ? "mt-20" : ""}>
            {/* Subtítulo de categoría */}
            <div className="text-center mb-12">
              <div className="relative inline-block">
                {/* Subtítulo de categoría */}
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 relative z-10">
                  {categoria}
                  {/* Elementos decorativos laterales centrados con el texto */}
                  <div className={`absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 ${categoria === 'Pastas frescas' ? 'bg-gradient-to-r from-transparent to-green-600' : categoria === 'Fideos' ? 'bg-gradient-to-r from-transparent to-blue-600' : 'bg-gradient-to-r from-transparent to-red-400'}`}></div>
                  <div className={`absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 ${categoria === 'Pastas frescas' ? 'bg-gradient-to-l from-transparent to-green-600' : categoria === 'Fideos' ? 'bg-gradient-to-l from-transparent to-blue-600' : 'bg-gradient-to-l from-transparent to-red-400'}`}></div>
                </h3>
                
                {/* Línea decorativa inferior */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 ${categoria === 'Pastas frescas' ? ' bg-gradient-to-r from-green-600 via-transparent to-green-600 rounded-full' : categoria === 'Fideos' ? 'bg-gradient-to-r from-blue-600 via-transparent to-blue-600 rounded-full' : 'bg-gradient-to-r from-red-600 via-transparent to-red-400 rounded-full'}`}></div>
              </div>
            </div>

            {/* Testimonials Slider */}
            <div className="relative max-w-6xl mx-auto">
              {/* Botones de navegación externos */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10">
                <button className={`swiper-button-prev-custom-${categoriaIndex} bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10">
                <button className={`swiper-button-next-custom-${categoriaIndex} bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: `.swiper-button-next-custom-${categoriaIndex}`,
                  prevEl: `.swiper-button-prev-custom-${categoriaIndex}`,
                }}
                loop={true}
                className="testimonials-swiper"
              >
                {productosPorCategoria[categoria].map((testimonio, index) => (
                  <SwiperSlide key={`${categoria}-${index}`}>
                    <div className="card-product">
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="w-full h-full object-cover grayscale-10"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}

        <style jsx>{`
          .testimonials-swiper .swiper-pagination-bullet {
            background: #3b82f6 !important;
            opacity: 0.3 !important;
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
          }
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            display: none !important;
          }
          .swiper-button-next-custom-0:hover,
          .swiper-button-prev-custom-0:hover,
          .swiper-button-next-custom-1:hover,
          .swiper-button-prev-custom-1:hover {
            background-color: #f3f4f6 !important;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonios; 