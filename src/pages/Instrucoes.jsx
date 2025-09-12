export function Instrucoes() {
    return (
      <main className="bg-gray-200 min-h-svh p-6 md:p-12 dark:bg-[#2E364D] dark:text-white flex justify-center">
        <div className="w-full max-w-3xl space-y-8">
  
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Instruções
          </h2>
  

          <section>
            <h3 className="text-xl font-semibold mb-4">Preparação Inicial</h3>
            <h4 className="font-medium">Carregue a Bateria</h4>
            <p className="mb-2">↪ Conecte o boné a um carregador USB</p>
  
            <h4 className="font-medium">Pareie o Auto-falante</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Ligue seus fones Bluetooth e entre no modo de pareamento</li>
              <li>Pressione o botão de pareamento no boné</li>
              <li>Aguarde um aviso sonoro confirmando a conexão</li>
            </ul>
          </section>
  

          <section>
            <h3 className="text-xl font-semibold mb-4">Como Usar no Dia a Dia</h3>
            <p>
              <strong>Ative o Modo Semáforo:</strong> Pressione e segure o botão lateral do boné por 3 segundos.
            </p>
            <p className="italic">Você ouvirá: "Modo travessia ativado. Aguardando semáforo."</p>
          </section>
  

          <section>
            <h3 className="text-xl font-semibold mb-4">Como Funciona na Rua</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-green-600 dark:text-green-400">🟢 Sinal Verde para Pedestres</p>
                <p>O boné identificará o semáforo verde e avisará: <em>"Sinal liberado. Pode atravessar."</em></p>
              </div>
              <div>
                <p className="font-semibold text-red-600 dark:text-red-400">🔴 Sinal Vermelho</p>
                <p>Se o semáforo estiver vermelho, o boné alertará: <em>"Sinal fechado. Aguarde."</em></p>
              </div>
            </div>
          </section>
  

          <section>
            <h3 className="text-xl font-semibold mb-4">Dicas para Uso Preciso</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Posicione-se corretamente: fique de frente para o semáforo</li>
              <li>Evite obstruções: não cubra a câmera com as mãos ou objetos</li>
              <li>Ajuste o ângulo do boné em ambientes com muito sol/reflexo</li>
            </ul>
          </section>
  

          <section>
            <h3 className="text-xl font-semibold mb-4">Desativar o Modo Travessia</h3>
            <p>Segure o botão novamente por 3 segundos.</p>
            <p className="italic">O boné confirmará: "Modo travessia desligado."</p>
          </section>
  

          <section className="text-center">
            <h3 className="text-xl font-semibold mb-4">Vídeo de exemplo de uso</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-96 rounded-lg shadow-md"
                src="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
                title="Vídeo de exemplo de uso"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </main>
    )
  }
  