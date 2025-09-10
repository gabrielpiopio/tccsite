import lacerdaImg from "../assets/lacerdaquentao.jpeg"
import pioImg from "../assets/pio.jpeg"
import jamalImg from "../assets/jamal.jpeg"
import marcellaImg from "../assets/marcelamilbeyer.jpeg"

export function AboutUs() {
  return (
    <main className="bg-gray-200 min-h-svh p-16 dark:bg-[#2E364D] dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">VisionCap</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


        <div className="bg-white dark:bg-[#3A4565] rounded-xl shadow-md p-6 text-center">
          <img 
            src={lacerdaImg} 
            alt="Murilo Lacerda" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 dark:text-white">Murilo Lacerda</h3>
          <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
            <a href="https://www.instagram.com/lacerda.xs/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/murilo-lacerda-9bba4a1b1/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>


        <div className="bg-white dark:bg-[#3A4565] rounded-xl shadow-md p-6 text-center">
          <img 
            src={pioImg} 
            alt="Gabriel Pio" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 dark:text-white">Gabriel Pio</h3>
          <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
            <a href="https://www.instagram.com/pio.vg/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-pio-vargas/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>


        <div className="bg-white dark:bg-[#3A4565] rounded-xl shadow-md p-6 text-center">
          <img 
            src={jamalImg} 
            alt="Ygor Queiroz" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 dark:text-white">Ygor Queiroz</h3>
          <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
            <a href="https://www.instagram.com/__ygorqueiroz/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/ygor-queiroz-143441325/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>


        <div className="bg-white dark:bg-[#3A4565] rounded-xl shadow-md p-6 text-center">
          <img 
            src={marcellaImg} 
            alt="Marcella Caramico" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 dark:text-white">Marcella Caramico</h3>
          <div className="flex justify-center gap-4 text-gray-600 dark:text-white">
            <a href="https://www.instagram.com/_caramico.mah_/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/marcella-caramico-87a9a9336/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
