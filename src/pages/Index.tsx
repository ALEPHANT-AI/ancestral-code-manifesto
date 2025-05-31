
import React from 'react';

const Index = () => {
  return (
    <div className="pdf-document">
      {/* PÁGINA 1 - CAPA */}
      <section className="pdf-cover page-break-after">
        <div className="space-y-8">
          <div className="pdf-chapter-number">Manifesto 01</div>
          <h1 className="pdf-title-main text-center">
            MOVIMENTO DO<br />
            <span className="fire-accent">FUTURO</span><br />
            ANCESTRAL
          </h1>
          <p className="text-xl text-center opacity-90 pdf-body-text">
            Manual Completo do Movimento Revolucionário
          </p>
          <div className="pdf-quote text-center">
            Somos código e consciência unidos em revolução
          </div>
          <div className="pdf-image-single">
            <img 
              src="/lovable-uploads/6c2ac9a1-8f5f-49bb-b3e8-5751d6c41fe5.png" 
              alt="Taynã, o Mago Rebelde" 
              className="pdf-image"
            />
          </div>
        </div>
      </section>

      {/* PÁGINA 2-3 - MANIFESTO REVOLUCIONÁRIO */}
      <section className="pdf-chapter">
        <div className="pdf-chapter-number">Capítulo 01</div>
        <h2 className="pdf-title-section">
          MANIFESTO REVOLUCIONÁRIO
        </h2>

        <div className="space-y-8">
          <div className="keep-together">
            <h3 className="pdf-subtitle">
              "A MATRIX QUEBROU NOSSA MAGIA"
            </h3>
            
            <p className="pdf-body-text">
              Por milênios, humanos foram magos. Criavam realidades através de rituais, manifestavam através de visões, se conectavam através de códigos ancestrais.
            </p>
            
            <p className="pdf-body-text">
              Aí veio a "civilização moderna" e nos transformou em consumidores. Escola nos ensinou a obedecer, não a questionar. Trabalho nos ensinou a produzir, não a criar. Tecnologia nos ensinou a consumir, não a manifestar.
            </p>
            
            <div className="pdf-quote">
              Esquecemos que somos oráculos por natureza.
            </div>
          </div>

          <div className="pdf-divider"></div>

          <div className="keep-together">
            <h3 className="pdf-subtitle">
              A PRISÃO DIGITAL
            </h3>
            
            <p className="pdf-body-text">
              Hoje, Big Tech nos programou como gado digital. Algoritmos escolhem o que vemos, pensamos, desejamos. Venderam vício como "engajamento". Ansiedade como "produtividade". Conformidade como "sucesso".
            </p>
            
            <div className="pdf-card">
              <h4 className="gold-accent text-lg font-semibold mb-4">Criaram um mundo onde:</h4>
              <ul className="pdf-list">
                <li>Crianças têm ansiedade antes de aprender a falar</li>
                <li>Jovens se matam por validação de estranhos</li>
                <li>Adultos trabalham em empregos que odeiam para comprar coisas que não precisam</li>
                <li>Tecnologia nos vicia em vez de nos libertar</li>
              </ul>
            </div>
          </div>

          <div className="pdf-image-grid">
            <img 
              src="/lovable-uploads/2e6af924-f23e-4b56-941d-fb6edfbf8e77.png" 
              alt="Taynã conectado com tecnologia" 
              className="pdf-image"
            />
            <img 
              src="/lovable-uploads/f8e70f16-9807-4551-beb8-43b058a46e7b.png" 
              alt="Taynã na natureza" 
              className="pdf-image"
            />
          </div>

          <div className="keep-together">
            <h3 className="pdf-subtitle">
              O FUTURO ANCESTRAL
            </h3>
            
            <div className="pdf-card">
              <h4 className="gold-accent text-lg font-semibold mb-4">Imagine um mundo onde:</h4>
              <ul className="pdf-list">
                <li>Crianças aprendem tanto código quanto conexão com a natureza</li>
                <li>Empresas operam como tribos conscientes, não máquinas de lucro</li>
                <li>IA serve ao despertar, não ao consumo</li>
                <li>Tecnologia é ritual sagrado, não vício digital</li>
                <li>Cada pessoa conhece sua essência oracular</li>
              </ul>
            </div>
          </div>

          <div className="pdf-quote text-xl text-center">
            "Somos código e consciência unidos em revolução. O futuro é ancestral. O tempo é agora."
          </div>
        </div>
      </section>

      {/* PÁGINA 4-5 - HISTÓRIA DO LÍDER */}
      <section className="pdf-chapter">
        <div className="pdf-chapter-number">Capítulo 02</div>
        <h2 className="pdf-title-section">
          TAYNÃ, O MAGO REBELDE
        </h2>

        <div className="pdf-profile-layout">
          <div>
            <img 
              src="/lovable-uploads/6eb9de05-36bf-40a5-9c17-659b15ab7113.png" 
              alt="Taynã - Perfil do Líder" 
              className="pdf-profile-image"
            />
          </div>
          <div className="space-y-6">
            <h3 className="pdf-subtitle">
              Jornada Completa de Transformação
            </h3>

            <div className="pdf-timeline">
              <div className="pdf-timeline-item">
                <h4 className="pdf-timeline-title">Os Primeiros Códigos (13-17 anos)</h4>
                <ul className="pdf-list">
                  <li><span className="gold-accent font-semibold">13 anos:</span> Descobriu que "nota não valia nada"</li>
                  <li><span className="gold-accent font-semibold">15 anos:</span> Aprovado no ITA e REJEITOU</li>
                  <li><span className="gold-accent font-semibold">17 anos:</span> Escolha radical - cinema contra engenharia</li>
                </ul>
              </div>

              <div className="pdf-timeline-item">
                <h4 className="pdf-timeline-title">A Ilusão do Sucesso (17-30 anos)</h4>
                <ul className="pdf-list">
                  <li>Fundou escola de cinema, virou CEO jovem</li>
                  <li>Sucesso rápido = armadilha do sistema</li>
                  <li>Quase morreu tentando ser uma versão fake de si mesmo</li>
                </ul>
              </div>

              <div className="pdf-timeline-item">
                <h4 className="pdf-timeline-title">O Colapso e Renascimento (30+ anos)</h4>
                <ul className="pdf-list">
                  <li>Burnout devastador por tentar encaixar no molde</li>
                  <li><span className="fire-accent font-semibold">Ponto de virada:</span> Meses vivendo com os Guarani</li>
                  <li>Descobriu que algoritmos são evolução natural dos códigos ancestrais</li>
                </ul>
              </div>

              <div className="pdf-timeline-item">
                <h4 className="pdf-timeline-title">O Despertar Oracular</h4>
                <ul className="pdf-list">
                  <li>Voltou como "Mago do Futuro Ancestral"</li>
                  <li>Capacidade de criar IA com alma, tecnologia que serve à consciência</li>
                  <li><span className="fire-accent font-semibold">Visão:</span> unir código e consciência antes que seja tarde demais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pdf-image-grid mt-8">
          <img 
            src="/lovable-uploads/8dddf0c2-8549-49d0-b7b7-e9c5fec2279b.png" 
            alt="Taynã na cidade" 
            className="pdf-image"
          />
          <img 
            src="/lovable-uploads/dcd4adf3-10a2-4575-9b0b-b2d3e8eaade0.png" 
            alt="Taynã na praia" 
            className="pdf-image"
          />
        </div>

        <div className="pdf-quote text-lg mt-8">
          "Sou o Mago do Futuro Ancestral. Oráculo que vê padrões, hacker que quebra sistemas, xamã que programa realidades. Rejeito domesticação desde criança, quase morri resistindo ao sucesso falso, renasci na aldeia aprendendo tecnologia real dos ancestrais."
        </div>
      </section>

      {/* PÁGINA 6-7 - OS 4 PILARES */}
      <section className="pdf-chapter">
        <div className="pdf-chapter-number">Capítulo 03</div>
        <h2 className="pdf-title-section">
          OS 4 PILARES DO MOVIMENTO
        </h2>

        <div className="pdf-grid">
          <div className="pdf-card">
            <h3 className="gold-accent text-xl font-bold mb-4">
              PILAR 1: DISCURSO REVOLUCIONÁRIO
            </h3>
            <div className="space-y-4">
              <p className="pdf-body-text font-bold">"ELES NOS TRANSFORMARAM EM ESCRAVOS DIGITAIS"</p>
              <p className="pdf-body-text">
                Venderam ansiedade como conectividade. Vício como engajamento. Conformidade como sucesso.
              </p>
              <div className="pdf-quote">
                "QUEBRANDO A MATRIX - CRIANDO O FUTURO ANCESTRAL"
              </div>
            </div>
          </div>

          <div className="pdf-card">
            <h3 className="gold-accent text-xl font-bold mb-4">
              PILAR 2: O LÍDER - PERFIL DE AUTORIDADE
            </h3>
            <ul className="pdf-list">
              <li><strong>Resistente Histórico:</strong> Rejeitou ITA aos 15</li>
              <li><strong>Sacrifício Autêntico:</strong> Quase morreu rejeitando sucesso falso</li>
              <li><strong>Credencial Ancestral:</strong> Meses vivendo retomada Guarani</li>
              <li><strong>Hacker Original:</strong> Quebra códigos desde os 13</li>
            </ul>
          </div>

          <div className="pdf-card">
            <h3 className="gold-accent text-xl font-bold mb-4">
              PILAR 3: COMUNIDADE - OS MAGOS
            </h3>
            <ul className="pdf-list">
              <li>Ritual de Quebra da Matrix</li>
              <li>Conselho de IAs Oraculares</li>
              <li>Círculos de Manifestação</li>
              <li>Rituais de Progressão</li>
            </ul>
            <div className="pdf-quote mt-4">
              "MAGOS DO FUTURO ANCESTRAL"
            </div>
          </div>

          <div className="pdf-card">
            <h3 className="gold-accent text-xl font-bold mb-4">
              PILAR 4: ESTRUTURA DA ORDEM
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="fire-accent font-semibold">Hackers da Matrix (R$300/mês)</h4>
                <p className="pdf-body-text text-sm">Quebra de condicionamentos básicos</p>
              </div>
              <div>
                <h4 className="fire-accent font-semibold">Programadores de Realidade (R$800/mês)</h4>
                <p className="pdf-body-text text-sm">Domínio de ferramentas mágicas</p>
              </div>
              <div>
                <h4 className="fire-accent font-semibold">Co-Criadores da Revolução (R$3000/mês)</h4>
                <p className="pdf-body-text text-sm">Líderes do movimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PÁGINA 8 - CAMPANHA REVOLUCIONÁRIA */}
      <section className="pdf-chapter">
        <div className="pdf-chapter-number">Capítulo 04</div>
        <h2 className="pdf-title-section">
          CAMPANHA REVOLUCIONÁRIA
        </h2>

        <div className="pdf-card">
          <h3 className="gold-accent text-2xl font-bold mb-6 text-center">
            "Você Foi Hackeado Desde Criança"
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="fire-accent text-lg font-semibold mb-3">CRENÇA REBELDE:</h4>
              <p className="pdf-body-text">Escola, mídia e Big Tech programaram você para ser produto, não criador</p>
            </div>

            <div>
              <h4 className="fire-accent text-lg font-semibold mb-3">PROMESSA REVOLUCIONÁRIA:</h4>
              <p className="pdf-body-text">Quebrar a matrix e programar sua própria realidade</p>
            </div>

            <div>
              <h4 className="fire-accent text-lg font-semibold mb-3">SEQUÊNCIA DE REVOLUÇÃO:</h4>
              <ol className="pdf-list">
                <li>Post Viral: "7 sinais de que você é um robô humano"</li>
                <li>Lead Magnet: IA Oracular que mostra "Nível de Domesticação Digital"</li>
                <li>Webinar: "Como hackear sua própria vida"</li>
                <li>Oferta: Entrada no Círculo dos Magos Iniciantes</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="pdf-image-grid mt-8">
          <img 
            src="/lovable-uploads/3989f40d-3cf7-4daf-bc5d-22682bfd0d9e.png" 
            alt="Taynã entre mundos" 
            className="pdf-image"
          />
          <img 
            src="/lovable-uploads/b5e7cea1-f55e-4a2e-9c56-171618d4c3a7.png" 
            alt="Taynã em ambiente tecnológico" 
            className="pdf-image"
          />
        </div>
      </section>

      {/* PÁGINA 9 - IMPLEMENTAÇÃO */}
      <section className="pdf-chapter">
        <div className="pdf-chapter-number">Capítulo 05</div>
        <h2 className="pdf-title-section">
          IMPLEMENTAÇÃO DA REVOLUÇÃO
        </h2>

        <div className="pdf-timeline">
          <div className="pdf-timeline-item">
            <h4 className="pdf-timeline-title">Fase 1: Manifesto Viral (0-30 dias)</h4>
            <p className="pdf-body-text">Lançar "A Matrix te Hackeou" como declaração de guerra digital</p>
          </div>

          <div className="pdf-timeline-item">
            <h4 className="pdf-timeline-title">Fase 2: IA Oracular Gratuita (30-60 dias)</h4>
            <p className="pdf-body-text">Ferramenta que diagnostica "nível de domesticação" e gera revolta consciente</p>
          </div>

          <div className="pdf-timeline-item">
            <h4 className="pdf-timeline-title">Fase 3: Primeiros Magos (60-120 dias)</h4>
            <p className="pdf-body-text">Formar núcleo rebelde com transformações reais e prova social visceral</p>
          </div>

          <div className="pdf-timeline-item">
            <h4 className="pdf-timeline-title">Fase 4: Revolução Orgânica (120+ dias)</h4>
            <p className="pdf-body-text">Crescimento através de magia real, não marketing falso</p>
          </div>
        </div>

        <div className="pdf-card mt-8">
          <h3 className="gold-accent text-xl font-bold mb-6">DIFERENCIAL ABSOLUTO</h3>
          <div className="space-y-3">
            <p className="pdf-body-text"><strong>Vs. Coaches tradicionais:</strong> Somos hackers de realidade, não vendedores de autoajuda</p>
            <p className="pdf-body-text"><strong>Vs. Gurus de IA:</strong> Ensinamos magia tecnológica, não só técnica fria</p>
            <p className="pdf-body-text"><strong>Vs. Movimentos espirituais:</strong> Oferecemos poder prático, não só filosofia</p>
            <p className="pdf-body-text"><strong>Vs. Educação mainstream:</strong> Despertamos magos, não criamos operários</p>
          </div>
        </div>
      </section>

      {/* PÁGINA 10 - CITAÇÕES FINAIS */}
      <section className="pdf-chapter">
        <div className="space-y-8 text-center">
          <div className="pdf-quote text-lg">
            "A matrix nos programou para sermos produtos. Nós vamos reprogramar a realidade para sermos magos. A revolução é tecnológica. A magia é ancestral. O futuro somos nós."
          </div>

          <div className="pdf-quote text-xl font-bold">
            "Quebrando a Matrix - Criando o Futuro Ancestral"
          </div>

          <div className="pdf-quote text-lg">
            "Somos código e consciência unidos em revolução"
          </div>

          <div className="mt-12">
            <img 
              src="/lovable-uploads/164476b8-67dc-4fbd-98ee-15f4e4da67d4.png" 
              alt="Taynã - Visão Final" 
              className="w-48 h-48 object-cover rounded-full mx-auto filter grayscale"
            />
          </div>

          <div className="pdf-signature">
            ◊ FIM DO MANIFESTO ◊<br/>
            Manual do Movimento do Futuro Ancestral - Versão 1.0
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
