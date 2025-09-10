import esp32Img from "../assets/esp32.jpg"
import esp32camImg from "../assets/esp32cam.jpg"
import boneImg from "../assets/bonehome.jpg"
import autofalanteImg from "../assets/autofalante.jpg"

export function Details() {
  return (
    <main className="bg-gray-200 min-h-svh p-12 space-y-16 dark:bg-[#2E364D] dark:text-white">
      
      <section>
        <h2 className="text-2xl font-bold uppercase mb-4">
          Componentes Utilizados no Projeto
        </h2>
        <p className="max-w-2xl">
          A seguir, apresento os principais itens utilizados para a construção deste projeto,
          com uma breve descrição de suas funções e seus respectivos custos aproximados:
        </p>
      </section>


      <section className="flex flex-col md:flex-row items-center gap-8">
        <img 
          src={esp32Img} 
          alt="ESP32" 
          className="w-40 md:w-48 object-contain rounded-lg shadow-md"
        />
        <div>
          <h3 className="font-bold">ESP32 – R$ 35,00</h3>
          <p>
            Microcontrolador com conectividade Wi-Fi e Bluetooth, utilizado como a base principal
            para o processamento e controle dos dados do sistema.
          </p>
        </div>
      </section>


      <section className="flex flex-col md:flex-row items-center gap-8">
        <img 
          src={esp32camImg} 
          alt="Módulo ESP32-CAM" 
          className="w-40 md:w-48 object-contain rounded-lg shadow-md"
        />
        <div>
          <h3 className="font-bold">Módulo de Câmera ESP32-CAM – R$ 40,00</h3>
          <p>
            Módulo integrado de câmera com ESP32, responsável pela captura de imagens e vídeos
            necessários para o funcionamento do projeto.
          </p>
        </div>
      </section>


      <section className="flex flex-col md:flex-row items-center gap-8">
        <img 
          src={boneImg} 
          alt="Boné Adaptado" 
          className="w-40 md:w-48 object-contain rounded-lg shadow-md"
        />
        <div>
          <h3 className="font-bold">Boné Adaptado – R$ 60,00</h3>
          <p>
            Boné comum adaptado para servir como estrutura física de suporte para os componentes eletrônicos,
            permitindo mobilidade e usabilidade prática.
          </p>
        </div>
      </section>


      <section className="flex flex-col md:flex-row items-center gap-8">
        <img 
          src={autofalanteImg} 
          alt="Alto-falante" 
          className="w-32 md:w-40 object-contain rounded-lg shadow-md"
        />
        <div>
          <h3 className="font-bold">Alto-falante Compatível com ESP32 – R$ 20,00</h3>
          <p>
            Dispositivo de saída de áudio utilizado para fornecer feedback sonoro ao usuário,
            conforme as interações definidas no sistema.
          </p>
        </div>
      </section>


      <section>
        <p className="text-lg font-semibold">
          Custo Total Estimado: <span className="font-bold">R$ 155,00</span>
        </p>
      </section>
    </main>
  )
}
