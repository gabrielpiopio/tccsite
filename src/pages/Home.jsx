export function Home() {
    return (
      <main className="bg-gray-200 min-h-svh p-16 dark:bg-blue-700 dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full">
          
          <div>
            <h1 className="text-4xl font-semibold mb-4">VisionCap</h1>
            <h2 className="max-w-2xl text-lg mb-6">
              O VisionCap é um boné inteligente que auxilia pessoas com deficiência visual a atravessar ruas com mais segurança e autonomia. 
              Com detecção de semáforo e alertas por áudio, ele leva mais liberdade para quem precisa
            </h2>
  
            <button className="bg-gray-400 hover:bg-gray-500 
              dark:bg-blue-600 dark:hover:bg-blue-700 
              text-white font-semibold py-3 px-6 
              rounded-full shadow-md transition duration-300 ease-in-out">
              Baixar App
            </button>
          </div>
  
          {/* imagem TERMINAR DE MEXER*/}
          <div className="flex justify-center md:justify-end">
            <img 
              src="./images/bonehome.jpg" 
              alt="Boné VisionCap" 
              className="w-3/4 md:w-full max-w-md"
            />
          </div>
        </div>
      </main>
    )
  }
  