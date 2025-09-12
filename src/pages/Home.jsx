import boneImg from "../assets/bonehomecerto.png"

export function Home() {
  return (
    <main className="bg-gray-200 dark:bg-[#2E364D] min-h-svh text-black dark:text-white">


      <section className="bg-gray-200 dark:bg-[#2E364D] px-6 md:px-24 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 h-full">


          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img 
              src={boneImg}   
              alt="Boné VisionCap" 
              className="w-2/3 md:w-full max-w-md rounded-lg"
            />
          </div>

          <div className="text-center md:text-left order-2 md:order-1 space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold">VisionCap</h1>
            <h2 className="text-xl md:text-2xl max-w-lg mx-auto md:mx-0 leading-tight">
              O VisionCap é um boné inteligente que auxilia pessoas com deficiência visual a atravessar ruas com mais segurança e autonomia. 
              Com detecção de semáforo e alertas por áudio, ele leva mais liberdade para quem precisa.
            </h2>



            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-gray-400 hover:bg-gray-500 
                dark:bg-[#314170] dark:hover:bg-[#252B3B] 
                text-white font-semibold py-3 px-6 
                rounded-full shadow-md transition duration-300 ease-in-out">
                Baixar App
              </button>

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
