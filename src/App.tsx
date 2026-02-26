import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Anchor, RotateCcw, CloudFog, ChevronDown, ChevronUp } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-10 ${className}`}>
    {children}
  </section>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como funciona a sessão de alinhamento?",
      a: <>É o nosso primeiro contato (cortesia) para entendermos se <strong className="font-medium text-slate-800">você está pronta para o meu método</strong> e se eu sou a profissional certa para o seu caso.</>
    },
    {
      q: "O atendimento é presencial?",
      a: <>Não, o atendimento é <strong className="font-medium text-sky-700 bg-sky-50 px-1 rounded">100% online por vídeo</strong>, permitindo que você seja acolhida no conforto e privacidade do seu lar.</>
    },
    {
      q: "Preciso de um diagnóstico médico?",
      a: <>Não. Atendo pessoas que sofrem com dores físicas, <em className="not-italic underline decoration-sky-200 decoration-2 underline-offset-2">mesmo que os exames não apontem causas orgânicas claras.</em></>
    },
    {
      q: "Quanto tempo dura o tratamento?",
      a: <>Terapia profunda é um processo contínuo. Não trabalhamos com "número de sessões", mas com a <strong className="font-medium text-slate-800 border-b border-sky-300">evolução da sua consciência</strong> e alívio da dor.</>
    }
  ];

  const outlineBtnClass = "inline-flex items-center px-8 py-4 border border-slate-200/80 text-slate-700 bg-white shadow-sm rounded-full text-sm tracking-widest uppercase font-semibold hover:border-sky-400 hover:text-sky-700 hover:shadow-[0_8px_30px_rgb(14,165,233,0.12)] transition-all duration-300 group";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">

      {/* Bloco 1: Hero Section */}
      <section id="hero" className="relative min-h-[100vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
            alt="Ambiente terapêutico"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-12">
          <FadeIn>
            <span className="inline-block py-1.5 px-4 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold tracking-widest uppercase mb-10">
              Terapia Profunda & Consciência
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8 text-white tracking-tight">
              Seu corpo está gritando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200 italic font-light">que sua boca calou?</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl font-light leading-relaxed mb-16 max-w-3xl mx-auto text-sky-100/70">
              Eu ajudo você a curar <span className="font-medium text-white bg-white/10 px-2 py-0.5 rounded leading-normal inline-block border border-white/5">traumas antigos e dores físicas</span> de origem emocional através de um processo profundo de consciência e responsabilidade.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="relative inline-block group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              <a href="#identificacao" className="relative inline-flex items-center justify-center bg-white text-slate-950 px-10 py-5 rounded-full text-sm md:text-base tracking-widest uppercase font-bold hover:bg-sky-50 transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:scale-105">
                Iniciar Meu Processo de Cura
                <svg className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 animate-bounce">
          <span className="text-sky-300 text-xs uppercase tracking-widest mb-3 font-medium">Deslize</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400 to-transparent"></div>
        </div>
      </section>

      {/* Bloco 2: Identificação */}
      <section id="identificacao" className="py-32 md:py-40 px-6 relative bg-white scroll-mt-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-24 text-slate-900 tracking-tight">
              Você tem se sentido <span className="italic text-sky-600 font-light">refém</span> do próprio corpo?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
            {[
              { icon: <Activity className="w-8 h-8 stroke-1" />, title: "Dores Crônicas", desc: <>Convive com <strong className="font-semibold text-sky-700">Fibromialgia</strong> ou tensões que <span className="underline decoration-sky-300 decoration-2 underline-offset-2">nenhum exame médico explica</span>?</> },
              { icon: <Anchor className="w-8 h-8 stroke-1" />, title: "Peso do Passado", desc: <>Sente que carrega um <span className="font-medium bg-sky-100 px-1.5 py-0.5 rounded text-sky-900 border border-sky-200">fardo emocional</span> que "trava" seus movimentos e sua vida?</> },
              { icon: <RotateCcw className="w-8 h-8 stroke-1" />, title: "Frustração Acumulada", desc: <>Já tentou de tudo, de remédios a terapias superficiais, mas <strong className="font-semibold text-slate-800">a dor sempre volta</strong>?</> },
              { icon: <CloudFog className="w-8 h-8 stroke-1" />, title: "Desânimo Existencial", desc: <>Perdeu a cor da vida após uma <em className="text-slate-800 font-medium not-italic border-b border-sky-300">grande decepção</em> ou perda de rumo?</> }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="group p-10 md:p-12 rounded-[2rem] bg-slate-50 border border-slate-100/80 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] transition-all duration-500 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 mb-8 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light text-lg">{item.desc}</p>
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center">
              <a href="#video" className={outlineBtnClass}>
                Entenda como posso ajudar
                <svg className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bloco 3: Vídeo */}
      <section id="video" className="py-32 px-6 bg-slate-50 scroll-mt-10 overflow-hidden relative border-y border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.05)_0%,transparent_100%)]"></div>

        <div className="max-w-xl mx-auto relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-slate-900 tracking-tight">
              Veja como o meu método pode <br className="hidden md:block" />
              <span className="italic text-sky-600 font-light">transformar a sua vida.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="aspect-[9/16] bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(14,165,233,0.3)] mx-auto mb-16 ring-8 ring-white relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1XrKFrgM_kE"
                title="Vídeo de Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a href="#sobre" className={outlineBtnClass}>
              Conheça minha jornada
              <svg className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Bloco 4: A Especialista */}
      <Section id="sobre" className="relative py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn delay={0.1}>
            <div className="relative group">
              <div className="absolute inset-0 bg-sky-200 rounded-[3rem] transform -rotate-3 scale-105 opacity-50 transition-transform duration-700 group-hover:rotate-0"></div>
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src="https://i.imgur.com/2ZRcIqB.jpeg" alt="Marcia Alves" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-slate-900 leading-tight tracking-tight">
                Muito prazer, sou <br className="hidden md:block" />
                <span className="font-semibold text-sky-700">Marcia Alves</span>.
              </h2>
              <h3 className="text-2xl lg:text-3xl font-serif text-slate-700 mb-10 font-medium leading-relaxed">
                Eu não li sobre a sua dor em livros. <span className="italic font-light text-sky-600">Eu a senti na pele.</span>
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg mb-12">
                <p>Meu primeiro sonho foi o Direito. Eu buscava segurança, respeito e independência. Mas quando esse caminho se fechou, meu <span className="font-medium bg-sky-50 px-1 rounded text-sky-800 border border-sky-100">corpo começou a cobrar o preço</span> da frustração.</p>
                <p>Fui diagnosticada com <strong className="font-semibold text-slate-800">Fibromialgia</strong>. A dor era constante, aguda e invisível aos olhos dos médicos. Foi no processo terapêutico profundo que entendi: <em className="text-sky-700 font-medium not-italic">meu corpo manifestava fisicamente os traumas que eu não havia processado</em>.</p>
                <p>Hoje, minha missão é oferecer a escuta que eu recebi: aquela que <span className="font-medium border-b-2 border-sky-200 text-slate-800">olha além do sintoma</span> e encontra a verdade emocional que está paralisando você.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <a href="#metodologia" className={outlineBtnClass}>
                Ver meu método de trabalho
                <svg className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Bloco 5: A Metodologia */}
      <section id="metodologia" className="py-32 md:py-40 px-6 bg-slate-950 text-white scroll-mt-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-800/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-24 font-light tracking-tight">
              Uma abordagem <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">técnica, humana e profunda.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24 text-left">
            {[
              { num: "01", title: "Conexão Corpo-Emoção", desc: <>Entender como sua <span className="text-sky-300 font-medium">história de vida</span> está escrita na sua biologia.</> },
              { num: "02", title: "Enfrentamento Consciente", desc: <>Olhar de frente para <span className="text-sky-300 font-medium">traumas antigos</span> com o suporte de quem já fez essa travessia.</> },
              { num: "03", title: "Cura com Responsabilidade", desc: <>Aqui não prometo milagres rápidos. Prometo um caminho que <span className="bg-sky-900/50 px-1.5 py-0.5 border border-sky-700/50 rounded text-sky-200 whitespace-nowrap">exige constante disciplina</span>.</> }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <FadeIn delay={i * 0.2}>
                  <div className="group border-t border-sky-800/50 pt-10 hover:border-sky-400 transition-colors duration-500 h-full">
                    <span className="text-sky-400 font-mono text-xl opacity-80 mb-6 block group-hover:scale-110 origin-left transition-transform">{item.num}.</span>
                    <h3 className="text-2xl font-serif mb-4 text-white font-medium">{item.title}</h3>
                    <p className="font-light text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center">
              <a href="#depoimentos" className="inline-flex items-center px-10 py-5 border border-sky-500/30 text-sky-300 rounded-full text-sm tracking-widest uppercase font-semibold hover:bg-sky-900/40 hover:border-sky-400 transition-all duration-300 group">
                Veja os resultados
                <svg className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bloco 6: Prova Social */}
      <section id="depoimentos" className="py-32 md:py-40 px-6 bg-slate-50 scroll-mt-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-24 text-slate-900 tracking-tight">
              O que dizem quem decidiu <span className="italic text-sky-600 font-light">enfrentar o processo.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
            {[
              { quote: <>A dor física que eu sentia há anos <strong className="font-semibold text-slate-800">começou a ceder</strong> quando entendi o que estava carregando.</>, author: "Paciente M.", focus: "Alívio de dor física" },
              { quote: <>Eu achava que nunca mais seria a mesma depois do trauma. O processo <strong className="font-semibold text-slate-800">me devolveu a mim mesma.</strong></>, author: "Paciente A.", focus: "Superação de trauma" },
              { quote: <>Parei de procurar pílulas mágicas e <span className="bg-sky-50 px-1 rounded text-sky-800 font-medium">assumi a responsabilidade</span> pela minha cura.</>, author: "Paciente R.", focus: "Retomada da autonomia" }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="bg-white p-12 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-500">
                    <span className="absolute top-8 left-8 text-7xl text-sky-50 font-serif leading-none group-hover:text-sky-100 transition-colors">"</span>
                    <p className="text-slate-600 font-light italic leading-relaxed mb-12 flex-grow relative z-10 text-lg">"{item.quote}"</p>
                    <div className="relative z-10 border-t border-slate-100 pt-6">
                      <p className="font-serif font-medium text-slate-900 text-lg">{item.author}</p>
                      <p className="text-xs uppercase tracking-widest text-sky-600 mt-2 font-semibold">{item.focus}</p>
                    </div>
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center">
              <a href="#faq" className={outlineBtnClass}>
                Dúvidas Frequentes
                <svg className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bloco 7: FAQ */}
      <section id="faq" className="py-32 md:py-40 px-6 bg-white scroll-mt-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-20 text-slate-900 tracking-tight">
              Perguntas <span className="text-sky-600 italic font-light">Frequentes</span>
            </h2>
          </FadeIn>

          <div className="space-y-4 mb-24 text-left">
            {faqs.map((faq, i) => (
              <React.Fragment key={i}>
                <FadeIn delay={i * 0.05}>
                  <div className="bg-slate-50/50 rounded-2xl border border-slate-200/60 overflow-hidden transition-all hover:border-sky-200 hover:shadow-sm">
                    <button
                      className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-serif text-xl pr-8 text-slate-800 group-hover:text-sky-700 transition-colors">{faq.q}</span>
                      {openFaq === i
                        ? <ChevronUp className="w-5 h-5 text-sky-500 flex-shrink-0" />
                        : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-sky-500 transition-colors" />
                      }
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 text-slate-600 font-light leading-relaxed text-lg pt-2">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="text-center">
              <a href="#contato" className={outlineBtnClass}>
                Pronta para começar?
                <svg className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bloco 8: Fechamento */}
      <section id="contato" className="relative py-32 md:py-48 px-6 bg-slate-950 text-center scroll-mt-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.15)_0%,transparent_100%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 text-white leading-tight tracking-tight">
              A cura começa quando você <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200 italic font-light">decide parar de fugir.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-16 text-sky-100/70 max-w-2xl mx-auto">
              Se você está pronta para se comprometer com a sua libertação e não aceita mais <span className="font-medium bg-white/10 px-2 py-0.5 rounded text-white border border-white/20 inline-block mt-2">viver como refém da dor</span>, preencha sua aplicação agora.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="relative inline-block group mt-8">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <a
                href="https://wa.me/558499536747?text=Olá Marcia, vim através do seu site e gostaria de saber mais sobre seu processo de terapia."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center bg-white text-slate-950 px-10 md:px-14 py-6 md:py-7 rounded-full text-sm md:text-base tracking-widest uppercase font-bold hover:bg-sky-50 transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:scale-105"
              >
                Solicitar Minha Sessão de Alinhamento
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-center text-slate-500 text-sm font-light border-t border-white/5 relative z-10 block">
        <p>&copy; {new Date().getFullYear()} Marcia Alves - Terapia Profunda.<br className="md:hidden" /> Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
