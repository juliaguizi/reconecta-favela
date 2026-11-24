
import canvasProposta from "./assets/canvas-proposta.png";
import { useState } from "react";
import "./App.css";

const integrantes = [
  { nome: "Eduardo Pessutti Fernandes", ra: "312610856" },
  { nome: "Felipe Alves", ra: "312611111" },
  { nome: "Gabriel Camara Gouthardo", ra: "312611532" },
  { nome: "Julia Guizi Maia", ra: "312420010" },
  { nome: "Mateus Martins Baptista", ra: "312610380" },
  { nome: "Rayany Domingos da Silva", ra: "312612542" },
  { nome: "Rebecca Raires dos Santos", ra: "312612619" },
  { nome: "Sarah De Medeiros Nogueira", ra: "312612242" },
];

const porques = [
  {
    pergunta: "Por que há pontos críticos de descarte?",
    resposta: "O descarte irregular se acumula em vias e esquinas."
  },
  {
    pergunta: "Por que o descarte se acumula nesses locais?",
    resposta: "A coleta convencional deixa lacunas em alguns pontos."
  },
  {
    pergunta: "Por que a resposta ao problema demora?",
    resposta: "Moradores relatam não conhecer canais eficazes para comunicar o descarte de entulho."
  },
  {
    pergunta: "Por que a comunicação não funciona de forma eficiente?",
    resposta: "O registro, o encaminhamento e o acompanhamento das ocorrências aparecem fragmentados."
  },
  {
    pergunta: "Por que essas etapas ficam fragmentadas?",
    resposta: "Falta coordenação contínua entre a comunidade e os responsáveis pela limpeza."
  }
];

function Capa() {
  return (
    <main className="slide-capa">
      <div className="decoracao decoracao-1"></div>
      <div className="decoracao decoracao-2"></div>

      <header className="capa-topo">
        <span className="marca">GTECH</span>
        <span className="topo-info">PROJETO DE INOVAÇÃO • 2026</span>
      </header>

      <section className="capa-conteudo">
        <div className="identidade">
          <span className="tag-projeto">PROJETO ACADÊMICO</span>
          <h1>RE<span>Conecta</span><br />Favela</h1>

          <p className="frase">
            Conectando moradores aos pontos de descarte irregular
            para construir uma comunidade mais limpa,
            consciente e participativa.
          </p>

          <div className="linha-decorativa"></div>
        </div>

        <section className="equipe">
          <h2>Integrantes</h2>
          <div className="lista-integrantes">
            {integrantes.map((pessoa, index) => (
              <div className="integrante" key={pessoa.ra}>
                <span className="numero">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="nome">{pessoa.nome}</p>
                  <p className="ra">RA: {pessoa.ra}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <footer className="capa-rodape">
        <div><strong>Gtech</strong><span>Equipe</span></div>
        <div><strong>2001</strong><span>Sala</span></div>
        <div><strong>USJT</strong><span>Instituição</span></div>
        <div><strong>2026/2</strong><span>Semestre</span></div>
        <div><strong>Alexandre Barbosa</strong><span>Professor</span></div>
      </footer>
    </main>
  );
}

function SlideDiagnostico() {
  return (
    <main className="slide-diagnostico">
      <header className="diagnostico-topo">
        <div>
          <span className="tag-descoberta">DIAMANTE DUPLO • FASE 1</span>
          <h1>Descoberta: o problema factual</h1>
          <p>Diagnóstico do território da comunidade São Pedro</p>
        </div>
        <span className="numero-slide">A3 / 02</span>
      </header>

      <section className="diagnostico-conteudo">
        <aside className="dado-estatistico">
          <span className="dado-label">DADO NACIONAL</span>
          <div className="dado-numero">39<span>%</span></div>
          <h2>dos resíduos coletados no Brasil ainda são direcionados a locais irregulares e potencialmente danosos.</h2>
          <div className="fonte-dado">
            <strong>ABREMA • Relatório 2024</strong>
            <span>Dado nacional — não específico da comunidade São Pedro.</span>
          </div>

          <div className="dor-territorio">
            <span>A DOR NO TERRITÓRIO</span>
            <p>
              Moradores e frequentadores enfrentam descarte irregular
              e acúmulo crônico de lixo nas vias públicas, com degradação
              ambiental, poluição visual, proliferação de vetores e
              riscos à saúde coletiva.
            </p>
          </div>
        </aside>

        <section className="cinco-porques">
          <div className="porques-cabecalho">
            <div>
              <span className="tag-descoberta">ANÁLISE DA CAUSA-RAIZ</span>
              <h2>Os 5 Porquês</h2>
            </div>
            <span className="selo-preliminar">SÍNTESE PRELIMINAR</span>
          </div>

          <div className="lista-porques">
            {porques.map((item, index) => (
              <article className="porque-item" key={index}>
                <div className="porque-numero">{String(index + 1).padStart(2, "0")}</div>
                <div className="porque-texto">
                  <h3>{item.pergunta}</h3>
                  <p>{item.resposta}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="causa-raiz">
            <span>CAUSA-RAIZ PROVÁVEL</span>
            <p>
              Falta de coordenação contínua entre a comunidade
              e os responsáveis pela limpeza.
            </p>
          </div>
        </section>
      </section>

      <footer className="diagnostico-rodape">
        <span>GTECH • REConecta Favela • USJT 2026/2</span>
        <span>Entrevistas qualitativas com 5 moradores (ago/2026) • ABREMA (2024)</span>
      </footer>
    </main>
  );
}

function SlideEmpatia() {
  return (
    <main className="slide-empatia">
      <header className="empatia-topo">
        <div>
          <span className="tag-descoberta">DIAMANTE DUPLO • FASE 2: INTERPRETAR</span>
          <h1>Empatia: o usuário & a jornada da dor</h1>
          <p>Compreendendo a experiência de quem convive com o descarte irregular</p>
        </div>
        <span className="numero-slide">A3 / 03</span>
      </header>

      <section className="empatia-conteudo">
        <div className="empatia-coluna">
          <article className="persona-card">
            <span className="empatia-etiqueta">PERSONA REPRESENTATIVA</span>
            <div className="persona-icone">👤</div>
            <h2>Morador de São Pedro</h2>
            <p>
              Pessoa que vive ou circula pelo território e presencia
              o descarte irregular no cotidiano.
            </p>
            <div className="persona-dor">
              <strong>Dor principal</strong>
              <span>
                Sentir dificuldade para comunicar o problema e acompanhar
                o que acontece depois.
              </span>
            </div>
          </article>

          <article className="csd-card">
            <span className="empatia-etiqueta">MATRIZ CSD</span>
            <h2>O que sabemos?</h2>
            <div className="csd-item certeza">
              <strong>✓ CERTEZAS</strong>
              <p>Há pontos de descarte irregular no território.</p>
              <p>Foram realizadas entrevistas com 5 moradores.</p>
            </div>
            <div className="csd-item suposicao">
              <strong>~ SUPOSIÇÕES</strong>
              <p>Uma comunicação mais simples pode estimular a participação.</p>
              <p>O acompanhamento pode aumentar a confiança dos moradores.</p>
            </div>
            <div className="csd-item duvida">
              <strong>? DÚVIDAS</strong>
              <p>Quais canais oficiais são mais utilizados?</p>
              <p>Como garantir retorno sobre as ocorrências?</p>
            </div>
          </article>
        </div>

        <section className="jornada-card">
          <div className="jornada-cabecalho">
            <div>
              <span className="empatia-etiqueta">EXPERIÊNCIA ATUAL • ANTES</span>
              <h2>Jornada da dor</h2>
            </div>
            <span className="jornada-status">SEM SOLUÇÃO</span>
          </div>

          <div className="jornada-linha">
            <article className="jornada-etapa">
              <div className="jornada-numero">01</div>
              <div className="jornada-icone">👀</div>
              <h3>Identifica</h3>
              <p>Percebe lixo e entulho acumulados nas ruas e esquinas.</p>
              <span className="jornada-emocao">Incômodo</span>
            </article>

            <div className="jornada-seta">→</div>

            <article className="jornada-etapa">
              <div className="jornada-numero">02</div>
              <div className="jornada-icone">📢</div>
              <h3>Tenta comunicar</h3>
              <p>Enfrenta dificuldades para encontrar um canal eficaz de registro.</p>
              <span className="jornada-emocao">Frustração</span>
            </article>

            <div className="jornada-seta">→</div>

            <article className="jornada-etapa">
              <div className="jornada-numero">03</div>
              <div className="jornada-icone">⌛</div>
              <h3>Fica sem retorno</h3>
              <p>Não consegue acompanhar claramente o encaminhamento e a resolução.</p>
              <span className="jornada-emocao">Impotência</span>
            </article>
          </div>

          <div className="jornada-dor-final">
            <strong>RESULTADO DA EXPERIÊNCIA</strong>
            <p>
              A falta de retorno e acompanhamento pode desestimular
              a participação da comunidade.
            </p>
          </div>
        </section>
      </section>

      <section className="pov-card">
        <div className="pov-cabecalho">
          <span>POINT OF VIEW • POV</span>
          <span>DEFINIÇÃO DO PROBLEMA</span>
        </div>
        <p>
          <strong>Os moradores e frequentadores de São Pedro</strong> precisam
          de <strong>uma forma coordenada e transparente de identificar,
          comunicar e acompanhar pontos de descarte irregular</strong>,
          porque <strong>os canais tradicionais são percebidos como
          burocráticos e distantes da realidade local, gerando sensação
          de impotência e dificultando a participação da comunidade.</strong>
        </p>
      </section>

      <footer className="empatia-rodape">
        <span>GTECH • REConecta Favela • USJT 2026/2</span>
        <span>Base: entrevistas qualitativas com 5 moradores • ago/2026</span>
      </footer>
    </main>
  );
}

function SlideEcossistema() {
  return (
    <main className="slide-ecossistema">
      <header className="ecossistema-topo">
        <div>
          <span className="tag-descoberta">PROCESSO EMPREENDEDOR • STAKEHOLDERS</span>
          <h1>Ecossistema & mapa de influenciadores</h1>
          <p>Quem participa, quem financia e quem torna a operação possível?</p>
        </div>
        <span className="numero-slide">A3 / 04</span>
      </header>

      <section className="atores-grid">
        <article className="ator-card ator-usuario">
          <span className="ator-numero">01 • USUÁRIO FINAL</span>
          <div className="ator-icone">👥</div>
          <h2>Moradores e frequentadores</h2>
          <p>Identificam pontos críticos, registram ocorrências e acompanham as ações.</p>
          <div className="ator-troca">
            <strong>OFERECE ↗</strong>
            <span>Informações, registros e participação.</span>
            <strong>RECEBE ↙</strong>
            <span>Transparência, acompanhamento e melhoria dos espaços.</span>
          </div>
        </article>

        <article className="ator-card ator-pagador">
          <span className="ator-numero">02 • CLIENTE PAGADOR</span>
          <div className="ator-icone">🏛️</div>
          <h2>Poder público e apoiadores ESG</h2>
          <p>Possíveis financiadores da operação, interessados em baixo custo e impacto socioambiental.</p>
          <div className="ator-troca">
            <strong>OFERECE ↗</strong>
            <span>Recursos financeiros, patrocínio e apoio institucional.</span>
            <strong>RECEBE ↙</strong>
            <span>Melhoria urbana e resultados de impacto.</span>
          </div>
          <span className="ator-modelo">MODELO PROPOSTO • B2G / PATROCÍNIO</span>
        </article>

        <article className="ator-card ator-parceiro">
          <span className="ator-numero">03 • PARCEIRO OPERACIONAL</span>
          <div className="ator-icone">🤝</div>
          <h2>Lideranças, comerciantes e equipe de TI</h2>
          <p>Apoiam mobilização local, pontos de contato, logística e comunicação.</p>
          <div className="ator-troca">
            <strong>OFERECE ↗</strong>
            <span>Mobilização, infraestrutura e suporte.</span>
            <strong>RECEBE ↙</strong>
            <span>Demandas organizadas e fortalecimento da rede local.</span>
          </div>
        </article>

        <article className="ator-card ator-regulador">
          <span className="ator-numero">04 • REGULADOR / GOVERNO</span>
          <div className="ator-icone">⚖️</div>
          <h2>Órgãos públicos e normas</h2>
          <p>Orientam e fiscalizam a gestão de resíduos e a proteção de dados.</p>
          <div className="ator-troca">
            <strong>OFERECE ↗</strong>
            <span>Regras, fiscalização e orientação.</span>
            <strong>RECEBE ↙</strong>
            <span>Ocorrências organizadas e apoio à zeladoria.</span>
          </div>
          <span className="ator-modelo">REFERÊNCIAS • PNRS / LGPD</span>
        </article>
      </section>

      <section className="mapa-viabilidade">
        <div className="matriz-card">
          <div className="matriz-titulo">
            <div>
              <span className="empatia-etiqueta">MATRIZ 2 × 2</span>
              <h2>Poder vs. Interesse</h2>
            </div>
            <span className="matriz-eixo">PODER ↑</span>
          </div>

          <div className="matriz">
            <div className="matriz-quadrante manter">
              <strong>ALTO PODER</strong>
              <span>BAIXO INTERESSE</span>
              <p>Órgãos reguladores</p>
              <small>Manter satisfeitos</small>
            </div>
            <div className="matriz-quadrante gerenciar">
              <strong>ALTO PODER</strong>
              <span>ALTO INTERESSE</span>
              <p>Pagador potencial</p>
              <small>Gerenciar de perto</small>
            </div>
            <div className="matriz-quadrante monitorar">
              <strong>BAIXO PODER</strong>
              <span>BAIXO INTERESSE</span>
              <p>Atores externos</p>
              <small>Monitorar</small>
            </div>
            <div className="matriz-quadrante envolver">
              <strong>BAIXO PODER</strong>
              <span>ALTO INTERESSE</span>
              <p>Moradores e parceiros</p>
              <small>Manter envolvidos</small>
            </div>
          </div>
          <div className="matriz-legenda">
            <span>← INTERESSE BAIXO</span>
            <span>INTERESSE ALTO →</span>
          </div>
          <p className="matriz-nota">
            Posicionamento preliminar: influência e interesse devem ser confirmados com cada ator.
          </p>
        </div>

        <aside className="quem-paga-card">
          <span className="empatia-etiqueta">TESTE DE VIABILIDADE ECONÔMICA</span>
          <h2>Quem paga a conta?</h2>
          <div className="nao-paga">O morador não paga diretamente.</div>
          <p>
            O usuário final participa com informações e mobilização.
            A operação depende de apoio financeiro externo.
          </p>
          <div className="financiadores">
            <span>Possíveis fontes de sustentação</span>
            <strong>Financiamento público</strong>
            <strong>Apoio institucional</strong>
            <strong>Patrocínio ESG</strong>
          </div>
          <div className="validacao-alerta">
            <strong>HIPÓTESE A VALIDAR</strong>
            <span>Não há verba, contrato ou edital confirmado.</span>
          </div>
        </aside>
      </section>

      <footer className="ecossistema-rodape">
        <span>GTECH • REConecta Favela • USJT 2026/2</span>
        <span>Base: Ficha 04 • Identificação dos Stakeholders & Ecossistema</span>
      </footer>
    </main>
  );
}

function SlidePropostaValor() {
  return (
    <div style={{ background: "#f3f7f2", minHeight: "100vh", padding: "30px" }}>
      <h1 style={{ color: "#24543b", textAlign: "center" }}>
        Proposta de Valor
      </h1>

      <p style={{ color: "#555", textAlign: "center" }}>
        Canvas da Proposta de Valor — REConecta Favela
      </p>

      <img
        src={canvasProposta}
        alt="Canvas da Proposta de Valor"
        style={{ width: "100%", maxWidth: "1100px", display: "block", margin: "20px auto" }}
      />
    </div>
  );
}

function SlideAplicativo() {
  const [tela, setTela] = useState("inicio");
  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [foto, setFoto] = useState("");

  const registrar = (e) => {
    e.preventDefault();
    setTela("confirmacao");
  };

  const voltarInicio = () => setTela("inicio");

  const estiloBotao = {
    background: "#287449",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    padding: "13px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    fontSize: "14px"
  };

  return (
    <main className="slide-aplicativo">
      <header className="app-slide-cabecalho">
        <span>RECONecta FAVELA • PROTÓTIPO</span>
        <h1>Conheça nosso aplicativo</h1>
        <p>Uma conexão entre moradores e a zeladoria do bairro.</p>
      </header>

      <section className="app-demonstracao">
        <div className="app-celular">
          <div className="app-camera">
            <span></span>
          </div>

          <div className="app-tela">
            <div className="app-status-bar">
              <span>9:41</span>
              <span>● ● ●</span>
            </div>

            <header className="app-topo">
              <div className="app-marca">
                <span className="app-logo">♻</span>
                <div>
                  <strong>REConecta</strong>
                  <small>FAVELA</small>
                </div>
              </div>
              <span>♧</span>
            </header>

            {tela === "inicio" && (
              <div className="app-conteudo">
                <div className="app-boas-vindas">
                  <span>Olá, morador! 👋</span>
                  <p>Vamos cuidar juntos do nosso bairro?</p>
                </div>

                <h3>Como podemos ajudar?</h3>

                <button
                  className="app-opcao"
                  onClick={() => setTela("registro")}
                >
                  <span className="app-icone">📍</span>
                  <span>
                    <strong>Registrar descarte irregular</strong>
                    <small>Informe um ponto de descarte.</small>
                  </span>
                  <b>›</b>
                </button>

                <button
                  className="app-opcao"
                  onClick={() => setTela("solicitacoes")}
                >
                  <span className="app-icone">📋</span>
                  <span>
                    <strong>Minhas solicitações</strong>
                    <small>Acompanhe suas ocorrências.</small>
                  </span>
                  <b>›</b>
                </button>

                <div className="app-dica">
                  <strong>🌱 Faça parte da mudança!</strong>
                  <p>Sua participação ajuda a construir um bairro mais limpo.</p>
                </div>
              </div>
            )}

            {tela === "registro" && (
              <form className="app-conteudo app-formulario" onSubmit={registrar}>
                <button
                  type="button"
                  className="app-voltar"
                  onClick={voltarInicio}
                >
                  ← Voltar
                </button>

                <h3>Registrar ocorrência</h3>
                <p className="app-instrucao">
                  Conte onde está o descarte irregular.
                </p>

                <label>Localização</label>
                <input
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  placeholder="Digite o endereço"
                  required
                />

                <label>Descrição do problema</label>
                <textarea
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Descreva o que encontrou..."
                  required
                />

                <label>Foto do local (opcional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFoto(e.target.files[0]?.name || "")
                  }
                />
                {foto && <small>Arquivo: {foto}</small>}

                <button type="submit" style={estiloBotao}>
                  Enviar ocorrência
                </button>
              </form>
            )}

            {tela === "confirmacao" && (
              <div className="app-conteudo app-confirmacao">
                <div className="app-sucesso">✓</div>
                <h3>Ocorrência registrada!</h3>
                <p>
                  Sua contribuição foi registrada no REConecta Favela.
                </p>
                <div className="app-protocolo">
                  <small>PROTOCOLO DE DEMONSTRAÇÃO</small>
                  <strong>#RC-001</strong>
                  <span>Recebida</span>
                </div>
                <button
                  style={estiloBotao}
                  onClick={() => setTela("solicitacoes")}
                >
                  Acompanhar solicitação
                </button>
                <button className="app-voltar" onClick={voltarInicio}>
                  Voltar ao início
                </button>
              </div>
            )}

            {tela === "solicitacoes" && (
              <div className="app-conteudo">
                <button
                  className="app-voltar"
                  onClick={voltarInicio}
                >
                  ← Voltar
                </button>

                <h3>Minhas solicitações</h3>
                <p className="app-instrucao">
                  Acompanhe o andamento dos registros.
                </p>

                <div className="app-solicitacao">
                  <span>PROTOCOLO #RC-001</span>
                  <strong>{endereco || "Ponto de descarte registrado"}</strong>
                  <p>{descricao || "Ocorrência demonstrativa"}</p>
                  <div className="app-status">
                    <span></span>
                    Recebida
                  </div>
                </div>

                <small className="app-aviso">
                  Status ilustrativo para demonstração do protótipo.
                </small>
              </div>
            )}

            <footer className="app-menu">
              <button onClick={voltarInicio}>
                 <span>⌂</span>
                 <small>Início</small>
              </button>

              <button onClick={() => setTela("solicitacoes")}>
                <span>▤</span>
                <small>Solicitações</small>
              </button>

              <button onClick={() => setTela("registro")}>
                <span>＋</span>
                <small>Registrar</small>
              </button>
            </footer>
          </div>
        </div>

        <aside className="app-explicacao">
          <span>PROTÓTIPO INTERATIVO</span>
          <h2>Da identificação à participação.</h2>
          <p>
            O morador pode comunicar pontos de descarte irregular,
            enviar informações e acompanhar suas solicitações.
          </p>

          <div className="app-recurso">
            <strong>01</strong>
            <div>
              <b>Registro simplificado</b>
              <small>Localização, descrição e foto.</small>
            </div>
          </div>

          <div className="app-recurso">
            <strong>02</strong>
            <div>
              <b>Acompanhamento</b>
              <small>Visualização do status da ocorrência.</small>
            </div>
          </div>

          <div className="app-recurso">
            <strong>03</strong>
            <div>
              <b>Participação comunitária</b>
              <small>Comunicação entre moradores e responsáveis.</small>
            </div>
          </div>

          <p className="app-observacao">
            Demonstração conceitual. O encaminhamento e a resolução
            dependem dos parceiros e responsáveis pelo serviço.
          </p>
        </aside>
      </section>
    </main>
  );
}

function SlideModeloNegocio() {
  const blocos = [
    {
      titulo: "Parceiros-chave",
      icone: "🤝",
      texto: "Prefeitura, zeladoria urbana, lideranças comunitárias e apoiadores ESG."
    },
    {
      titulo: "Atividades-chave",
      icone: "⚙️",
      texto: "Registro, organização, acompanhamento e comunicação das ocorrências."
    },
    {
      titulo: "Recursos-chave",
      icone: "💻",
      texto: "Aplicativo, infraestrutura digital, equipe técnica e rede de parceiros."
    },
    {
      titulo: "Proposta de valor",
      icone: "🌱",
      texto: "Conectar moradores e responsáveis pela zeladoria, facilitando o registro e acompanhamento do descarte irregular."
    },
    {
      titulo: "Relacionamento",
      icone: "💬",
      texto: "Comunicação transparente, acompanhamento e participação comunitária."
    },
    {
      titulo: "Canais",
      icone: "📱",
      texto: "Aplicativo, divulgação comunitária e canais institucionais."
    },
    {
      titulo: "Segmentos de clientes",
      icone: "🏛️",
      texto: "Prefeituras e órgãos públicos responsáveis pela gestão urbana."
    },
    {
      titulo: "Estrutura de custos",
      icone: "📉",
      texto: "Desenvolvimento, hospedagem, manutenção, suporte e divulgação."
    },
    {
      titulo: "Fontes de receita",
      icone: "💰",
      texto: "Contrato mensal de serviço com prefeitura ou órgão público."
    }
  ];

  return (
    <main className="slide-modelo">
      <header className="modelo-cabecalho">
        <div>
          <span className="modelo-tag">BUSINESS MODEL CANVAS • 5W2H</span>
          <h1>Modelo de negócio</h1>
          <p>Como o REConecta Favela se sustenta?</p>
        </div>
        <span className="modelo-numero">A3 / 07</span>
      </header>

      <section className="modelo-grid">
        {blocos.map((bloco, index) => (
          <article
            className={`modelo-bloco modelo-bloco-${index + 1}`}
            key={bloco.titulo}
          >
            <span className="modelo-icone">{bloco.icone}</span>
            <h2>{bloco.titulo}</h2>
            <p>{bloco.texto}</p>
          </article>
        ))}
      </section>

      <section className="modelo-economia">
        <div className="modelo-economia-titulo">
          <span>LOGICA ECONÔMICA</span>
          <h2>Receita x Custos</h2>
        </div>

        <div className="modelo-financeiro">
          <article className="modelo-financeiro-card receita">
            <small>RECEITA MENSAL</small>
            <strong>R$ 4.500</strong>
            <span>Contrato piloto ilustrativo</span>
          </article>

          <span className="modelo-operacao">−</span>

          <article className="modelo-financeiro-card custo">
            <small>CUSTOS MENSAIS</small>
            <strong>R$ 2.700</strong>
            <span>Operação estimada</span>
          </article>

          <span className="modelo-operacao">=</span>

          <article className="modelo-financeiro-card resultado">
            <small>RESULTADO OPERACIONAL</small>
            <strong>R$ 1.800</strong>
            <span>Margem estimada de 40%</span>
          </article>
        </div>
      </section>

      <p className="modelo-aviso">
        Valores hipotéticos para simulação. Receita e custos ainda não validados.
      </p>

      <footer className="modelo-rodape">
        GTECH • REConecta Favela • USJT 2026/2
      </footer>
    </main>
  );
}


function SlideODS() {
  return (
    <section className="slide slide-ods">
      <header className="ods-header">
        <span className="ods-selo">RECONecta · AGENDA 2030</span>
        <h1>Impacto com metas.</h1>
        <p>Compromissos alinhados aos Objetivos de Desenvolvimento Sustentável</p>
      </header>

      <div className="ods-colunas">
        <article className="ods-card ods-11">
          <div className="ods-card-topo">
            <div className="ods-numero">11</div>
            <div>
              <small>ODS PRIORITÁRIO</small>
              <h2>Cidades e comunidades sustentáveis</h2>
            </div>
          </div>

          <div className="ods-meta-item">
            <span className="ods-codigo">11.6</span>
            <div>
              <strong>Gestão de resíduos urbanos</strong>
              <p>80% das ocorrências registradas com encaminhamento documentado.</p>
            </div>
          </div>

          <div className="ods-meta-item">
            <span className="ods-codigo">11.3</span>
            <div>
              <strong>Participação comunitária</strong>
              <p>100 moradores participantes únicos no território-piloto.</p>
            </div>
          </div>
        </article>

        <article className="ods-card ods-12">
          <div className="ods-card-topo">
            <div className="ods-numero">12</div>
            <div>
              <small>ODS PRIORITÁRIO</small>
              <h2>Consumo e produção responsáveis</h2>
            </div>
          </div>

          <div className="ods-meta-item">
            <span className="ods-codigo">12.5</span>
            <div>
              <strong>Redução de resíduos</strong>
              <p>50 pontos de descarte irregular acompanhados.</p>
            </div>
          </div>

          <div className="ods-meta-item">
            <span className="ods-codigo">12.5</span>
            <div>
              <strong>Destinação documentada</strong>
              <p>60% dos pontos com ação de destinação documentada por parceiro.</p>
            </div>
          </div>
        </article>
      </div>

      <div className="ods-cadeia">
        <div className="ods-cadeia-titulo">
          <strong>Cadeia de impacto</strong>
          <span>Horizonte de 2 anos</span>
        </div>

        <div className="ods-fluxo">
          <div className="ods-etapa">
            <span>01</span>
            <strong>Registro</strong>
            <small>Identificação</small>
          </div>

          <div className="ods-seta">→</div>

          <div className="ods-etapa">
            <span>02</span>
            <strong>Encaminhamento</strong>
            <small>Articulação</small>
          </div>

          <div className="ods-seta">→</div>

          <div className="ods-etapa">
            <span>03</span>
            <strong>Monitoramento</strong>
            <small>Indicadores</small>
          </div>
        </div>
      </div>

      <footer className="ods-footer">
        <span>LINHAS DE BASE OPERACIONAIS: 0 registros monitorados antes do piloto, quando aplicável.</span>
        <small>Metas propostas · Não representam resultados alcançados.</small>
      </footer>
    </section>
  );
}


function SlideESG() {
  return (
    <section className="slide slide-esg">
      <div className="esg-topo">
        <div>
          <span className="esg-selo">RECONecta · IMPACTO</span>
          <h1>Responsabilidade<br />que conecta.</h1>
          <p>Estratégia ESG · Blindagem socioambiental</p>
        </div>
        <div className="esg-topo-numero">
          <span>03</span>
          <small>pilares de<br />compromisso</small>
        </div>
      </div>

      <div className="esg-trio">
        <article className="esg-pilar esg-e">
          <div className="esg-pilar-topo">
            <span className="esg-sigla">E</span>
            <span className="esg-legenda">AMBIENTAL</span>
          </div>
          <h2>Território<br />mais limpo</h2>
          <p>Identificar e mapear pontos de descarte irregular, apoiando a zeladoria.</p>
          <div className="esg-meta">
            <strong>100%</strong>
            <span>das ocorrências registradas mapeadas no piloto</span>
          </div>
        </article>

        <article className="esg-pilar esg-s">
          <div className="esg-pilar-topo">
            <span className="esg-sigla">S</span>
            <span className="esg-legenda">SOCIAL</span>
          </div>
          <h2>Comunidade<br />participativa</h2>
          <p>Promover participação cidadã, comunicação acessível e mobilização local.</p>
          <div className="esg-meta">
            <strong>1/mês</strong>
            <span>ação de mobilização comunitária</span>
          </div>
        </article>

        <article className="esg-pilar esg-g">
          <div className="esg-pilar-topo">
            <span className="esg-sigla">G</span>
            <span className="esg-legenda">GOVERNANÇA</span>
          </div>
          <h2>Dados com<br />responsabilidade</h2>
          <p>Garantir privacidade, controle de acesso e acompanhamento transparente.</p>
          <div className="esg-meta">
            <strong>100%</strong>
            <span>dos registros com controle de acesso</span>
          </div>
        </article>
      </div>

      <div className="esg-alerta">
        <div className="esg-alerta-titulo">
          <span>!</span>
          <div>
            <strong>Riscos da operação</strong>
            <small>Prevenção e mitigação</small>
          </div>
        </div>

        <div className="esg-risco">
          <strong>Dados expostos</strong>
          <span>Coleta mínima e acesso restrito.</span>
        </div>

        <div className="esg-risco">
          <strong>Sem resolução</strong>
          <span>Transparência sobre status e responsáveis.</span>
        </div>

        <div className="esg-risco">
          <strong>Exclusão digital</strong>
          <span>Alternativas presenciais e apoio local.</span>
        </div>
      </div>

      <div className="esg-base">
        <div>
          <strong>COMPROMISSO LEGAL</strong>
          <span>PNRS · Lei 12.305/2010</span>
          <span>LGPD · Lei 13.709/2018</span>
        </div>
        <small>Metas propostas para o piloto, ainda não validadas.</small>
      </div>
    </section>
  );
}


function SlideCompetitividade() {
  return (
    <section className="slide slide-competitividade">
      <header className="comp-header">
        <span className="comp-selo">
          RECONecta · COMPETITIVIDADE
        </span>
        <h1>Uma vantagem que se constrói.</h1>
        <p>Análise estratégica · Matriz SWOT + VRIO</p>
      </header>

      <div className="swot-grid">
        <article className="swot-card swot-forcas">
          <span className="swot-letra">S</span>
          <h2>Forças</h2>
          <ul>
            <li>Informações centralizadas.</li>
            <li>Acompanhamento das ocorrências.</li>
            <li>Foco nas necessidades locais.</li>
          </ul>
        </article>

        <article className="swot-card swot-fraquezas">
          <span className="swot-letra">W</span>
          <h2>Fraquezas</h2>
          <ul>
            <li>Dependência de parceiros.</li>
            <li>Necessidade de adesão dos moradores.</li>
            <li>Plataforma ainda em validação.</li>
          </ul>
        </article>

        <article className="swot-card swot-oportunidades">
          <span className="swot-letra">O</span>
          <h2>Oportunidades</h2>
          <ul>
            <li>Parcerias com prefeituras.</li>
            <li>Apoio de iniciativas ESG.</li>
            <li>Expansão para outros territórios.</li>
          </ul>
        </article>

        <article className="swot-card swot-ameacas">
          <span className="swot-letra">T</span>
          <h2>Ameaças</h2>
          <ul>
            <li>Concorrentes com mais recursos.</li>
            <li>Baixa adesão da comunidade.</li>
            <li>Falta de continuidade pública.</li>
          </ul>
        </article>
      </div>

      <div className="comp-vrio">
        <div className="comp-vrio-titulo">
          <h2>Matriz VRIO</h2>
          <span>Potencial de vantagem competitiva</span>
        </div>

        <div className="vrio-grid">
          <article className="vrio-item">
            <span>V</span>
            <div>
              <strong>Valor</strong>
              <p>Organização e rastreabilidade.</p>
            </div>
          </article>

          <article className="vrio-item">
            <span>R</span>
            <div>
              <strong>Raridade</strong>
              <p>Rede de colaboração territorial.</p>
            </div>
          </article>

          <article className="vrio-item">
            <span>I</span>
            <div>
              <strong>Imitabilidade</strong>
              <p>Histórico de dados e confiança.</p>
            </div>
          </article>

          <article className="vrio-item">
            <span>O</span>
            <div>
              <strong>Organização</strong>
              <p>Articulação entre parceiros.</p>
            </div>
          </article>
        </div>
      </div>

      <div className="comp-defesa">
        <span>VANTAGEM COMPETITIVA</span>
        <strong>
          Nossa força não está apenas na tecnologia, mas na
          construção de uma rede de confiança e conhecimento
          territorial, difícil de reproduzir rapidamente.
        </strong>
      </div>

      <footer className="comp-footer">
        Vantagem potencial · Dependente da validação e expansão da rede local.
      </footer>
    </section>
  );
}

function SlideValidacao() {
  return (
    <section className="slide slide-validacao">
      <header className="valid-header">
        <span className="valid-selo">
          RECONecta · VALIDAÇÃO
        </span>
        <h1>Ouvir também é inovar.</h1>
        <p>Experimentação e testes · Diamante Duplo</p>
      </header>

      <div className="valid-resultado">
        <div className="valid-numero">
          <strong>05</strong>
          <span>USUÁRIOS TESTADOS</span>
        </div>

        <div className="valid-feedback">
          <span className="valid-tag">FEEDBACK POSITIVO</span>
          <h2>Fácil de usar e interessante!</h2>
          <p>
            A maioria dos participantes considerou
            o aplicativo simples e fácil de utilizar.
          </p>
        </div>
      </div>

      <div className="valid-descoberta">
        <div className="valid-descoberta-topo">
          <span>01 · A DESCOBERTA</span>
          <span>FEEDBACK DOS USUÁRIOS</span>
        </div>

        <h2>Nem todos conseguem acessar o digital.</h2>
        <p>
          Surgiu a sugestão de disponibilizar um
          contato telefônico, principalmente para
          moradores idosos com dificuldade no uso
          de aplicativos.
        </p>
      </div>

      <div className="valid-evolucao">
        <h2>Como vamos evoluir?</h2>

        <div className="valid-melhorias">
          <article>
            <span>01</span>
            <strong>Atendimento híbrido</strong>
            <p>Aplicativo e possibilidade de contato telefônico.</p>
          </article>

          <article>
            <span>02</span>
            <strong>Acessibilidade</strong>
            <p>Letras maiores, botões simples e linguagem clara.</p>
          </article>

          <article>
            <span>03</span>
            <strong>Transparência</strong>
            <p>Acompanhamento fácil do status das ocorrências.</p>
          </article>
        </div>
      </div>

      <footer className="valid-footer">
        Aprendizado do teste: a tecnologia precisa ser acessível a todos.
        <small>Melhorias propostas a partir dos testes realizados.</small>
      </footer>
    </section>
  );
}

function SlideRoadmap() {
  return (
    <section className="slide slide-roadmap">
      <header className="road-header">
        <span className="road-selo">
          RECONecta · PRÓXIMOS PASSOS
        </span>
        <h1>Do projeto à transformação.</h1>
        <p>Roadmap de implantação · Planejamento executivo</p>
      </header>

      <div className="road-timeline">
        <article className="road-fase">
          <div className="road-numero">01</div>
          <span className="road-periodo">0–3 MESES</span>
          <h2>Piloto</h2>
          <p>
            Testar em um território, validar o uso e
            acompanhar as primeiras ocorrências.
          </p>
        </article>

        <div className="road-seta">→</div>

        <article className="road-fase">
          <div className="road-numero">02</div>
          <span className="road-periodo">4–8 MESES</span>
          <h2>Expansão</h2>
          <p>
            Ampliar a participação comunitária,
            ajustar o aplicativo e fortalecer parcerias.
          </p>
        </article>

        <div className="road-seta">→</div>

        <article className="road-fase">
          <div className="road-numero">03</div>
          <span className="road-periodo">9–12 MESES</span>
          <h2>Escala</h2>
          <p>
            Replicar o modelo em novos territórios
            e consolidar a operação.
          </p>
        </article>
      </div>

      <div className="road-risco">
        <div>
          <span>RISCO OPERACIONAL</span>
          <h2>Baixa adesão de moradores e parceiros.</h2>
        </div>

        <div className="road-contingencia">
          <strong>PLANO DE CONTINGÊNCIA</strong>
          <p>
            Mobilização com lideranças locais,
            atendimento telefônico e melhorias
            baseadas nos feedbacks.
          </p>
        </div>
      </div>

      <div className="road-fechamento">
        <span>RECONecta FAVELA · GTECH</span>
        <h2>Conectar pessoas. Transformar territórios.</h2>
        <p>
          Nossa proposta transforma informação em
          articulação e articulação em impacto territorial.
        </p>
        <div className="road-obrigado">
          OBRIGADO · ESTAMOS PRONTOS PARA AS PERGUNTAS DA BANCA.
        </div>
      </div>

      <footer className="road-footer">
        PITCH ENCERRADO · 5:00
        <small>
          Cronograma proposto · Sujeito à validação e disponibilidade de recursos.
        </small>
      </footer>
    </section>
  );
}



function App() {
  const [slideAtual, setSlideAtual] = useState(0);

  const slides = [
    <Capa />,
    <SlideDiagnostico />,
    <SlideEmpatia />,
    <SlideEcossistema />,
    <SlidePropostaValor />,
    <SlideAplicativo />,
    <SlideModeloNegocio />,
    <SlideESG />,
    <SlideODS />,
    <SlideCompetitividade />,
    <SlideValidacao />,
    <SlideRoadmap />
  ];

  return (
    <main className="apresentacao">
      {slides[slideAtual]}

      <nav className="navegacao-slides">
        <button
          onClick={() => setSlideAtual(Math.max(0, slideAtual - 1))}
          disabled={slideAtual === 0}
        >
          ←
        </button>

        <span>
          Slide {slideAtual + 1} de {slides.length}
        </span>

        <button
          onClick={() =>
            setSlideAtual(Math.min(slides.length - 1, slideAtual + 1))
          }
          disabled={slideAtual === slides.length - 1}
        >
          →
        </button>
      </nav>
    </main>
  );
}

export default App;

