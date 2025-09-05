export function Home() {
  return (
    <main className="bg-gray-200 dark:bg-[#2E364D] min-h-svh text-black dark:text-white">

      {/* TOPO */}
      <section className="bg-gray-200 dark:bg-[#2E364D] p-6 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full">

          {/* Imagem (mobile acima) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img 
              src="./images/bonehome.jpg" 
              alt="Boné VisionCap" 
              className="w-2/3 md:w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">VisionCap</h1>
            <h2 className="text-base md:text-lg max-w-2xl mb-6 mx-auto md:mx-0">
              O VisionCap é um boné inteligente que auxilia pessoas com deficiência visual a atravessar ruas com mais segurança e autonomia. 
              Com detecção de semáforo e alertas por áudio, ele leva mais liberdade para quem precisa.
            </h2>

            <button className="bg-gray-400 hover:bg-gray-500 
              dark:bg-[#314170] dark:hover:bg-[#252B3B] 
              text-white font-semibold py-3 px-6 
              rounded-full shadow-md transition duration-300 ease-in-out">
              Baixar App
            </button>
          </div>

        </div>
      </section>

    </main>
  )
}
