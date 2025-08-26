export function AboutUs() {
    return (
      <main className="bg-gray-200 min-h-svh p-16 dark:bg-blue-700 dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-12">VisionCap</h2>
  
        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* murilao part */}
          <div className="bg-white dark:bg-blue-600 rounded-xl shadow-md p-6 text-center">
            <img 
              src="./images/lacerdaquentao.jpeg" 
              alt="Murilo Lacerda" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Murilo Lacerda</h3>
            <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
              <a href="https://www.instagram.com/lacerda.xs/"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
  
          {/* eu */}
          <div className="bg-white dark:bg-blue-600 rounded-xl shadow-md p-6 text-center">
            <img 
              src="./images/pio.jpeg" 
              alt="Gabriel Pio" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Gabriel Pio</h3>
            <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
              <a href="https://www.instagram.com/pio.vg/"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
  
          {/* jamal */}
          <div className="bg-white dark:bg-blue-600 rounded-xl shadow-md p-6 text-center">
            <img 
              src="./images/jamal.jpeg" 
              alt="Ygor Queiroz" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Ygor Queiroz</h3>
            <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
              <a href="https://www.instagram.com/__ygorqueiroz/"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
  
          {/* marcellacaracu */}
          <div className="bg-white dark:bg-blue-600 rounded-xl shadow-md p-6 text-center">
            <img 
              src="./images/marcelamilbeyer.jpeg" 
              alt="Marcella Caramico" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Marcella Caramico</h3>
            <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
              <a href="https://www.instagram.com/_caramico.mah_/"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
  
        </div>
      </main>
    )
  }
  