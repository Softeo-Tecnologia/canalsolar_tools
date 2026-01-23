const checkoutUrl = 'https://checkout.canalsolar.com.br/checkout/homer-sam'

const painPoints = [
  'Peak shaving.',
  'BESS.',
  'Microrredes.',
  'Time shifting.',
  'Backups críticos.',
]

const outcomes = [
  'Modelar sistemas energéticos completos',
  'Simular cenários reais de operação',
  'Dimensionar sistemas FV + BESS com precisão',
  'Analisar desempenho técnico e econômico',
  'Tomar decisões profissionais baseadas em dados',
]

const courseDays = [
  {
    title: 'Dia 1',
    topics: ['Fundamentos de Simulação Energética', 'Indicadores Técnicos e Econômicos'],
  },
  {
    title: 'Dia 2',
    topics: ['Conhecendo o software SAM', 'Dimensionamento de Sistemas de Armazenamento com o SAM'],
  },
  {
    title: 'Dia 3',
    topics: ['Estudos de Casos Práticos utilizando o SAM', 'Conhecendo o software HOMER'],
  },
  {
    title: 'Dia 4',
    topics: ['Dimensionamento de Sistemas de Armazenamento com o HOMER', 'Estudos de Casos utilizando o HOMER'],
  },
]

const targetAudience = [
  'Engenheiros eletricistas',
  'Projetistas de sistemas solares e híbridos',
  'Profissionais que atuam com BESS',
  'Consultores energéticos',
  'Integradores que querem atuar em projetos maiores',
  'Profissionais que querem elevar o nível técnico e financeiro dos seus projetos',
]

const testimonials = [
  {
    name: 'Depoimento 1',
    role: 'Profissional do setor',
    quote: 'Depoimento em breve.',
  },
  {
    name: 'Depoimento 2',
    role: 'Profissional do setor',
    quote: 'Depoimento em breve.',
  },
  {
    name: 'Depoimento 3',
    role: 'Profissional do setor',
    quote: 'Depoimento em breve.',
  },
]

export default function CursoHomerSamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/50">LP Homer e Sam</div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Homer e Sam
                <span className="block text-white/80">Comece a simular baterias de verdade.</span>
              </h1>
              <p className="mt-4 text-lg text-white/70">
                Softwares internacionais para você entrar no próximo nível do mercado de energia.
              </p>
              <div className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70">
                Apenas 50 vagas disponíveis
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={checkoutUrl}
                  className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
                >
                  Quero me inscrever
                </a>
                <div className="text-sm text-white/60">Compra direta e acesso imediato</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.9)]">
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">Projetos que exigem simulação</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
                {painPoints.map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/70">
                Esses projetos exigem simulação energética hora a hora, análise técnica profunda e, principalmente,
                viabilidade econômica real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_24px_70px_-45px_rgba(15,23,42,0.9)]">
          <p className="text-lg text-white/80">
            Seja mais um dos <span className="font-semibold text-white">+3500 profissionais</span> que fecharam grandes
            projetos com os cursos do Canal Solar
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Depoimentos</h2>
            <p className="mt-2 text-sm text-white/70">Resultados reais de profissionais do setor.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
            >
              <p className="text-sm text-white/70">“{testimonial.quote}”</p>
              <div className="mt-4 text-sm font-semibold">{testimonial.name}</div>
              <div className="text-xs text-white/60">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">O curso de Homer e Sam é para quem quer:</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">Por que Homer e Sam?</h3>
            <p className="mt-4 text-sm text-white/70">
              O HOMER permite comparar múltiplas arquiteturas, fontes de energia e estratégias de operação, identificando
              a solução mais eficiente, técnica e economicamente, para cada cenário.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Já o SAM possibilita simulações detalhadas de desempenho técnico e econômico, com análise hora a hora,
              estratégias de controle e modelagem precisa de sistemas FV + BESS.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Neste curso, você aprende a usar os dois de forma estratégica, entendendo quando aplicar cada ferramenta e
              como comparar os resultados.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">O treinamento mais atual do mercado</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {courseDays.map((day) => (
            <div
              key={day.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_-35px_rgba(15,23,42,0.9)]"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">{day.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {day.topics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Para quem é esse curso?</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {targetAudience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            Saia do achismo e entre para o nível profissional do setor energético aprendendo com softwares globalmente
            usados para simulação energética avançada.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_24px_70px_-45px_rgba(15,23,42,0.9)]">
          <h2 className="text-2xl font-semibold">Pronto para elevar seu nível técnico?</h2>
          <p className="mt-3 text-sm text-white/70">
            Treinamento prático com softwares globais para simulação energética avançada.
          </p>
          <a
            href={checkoutUrl}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
          >
            Garantir minha vaga
          </a>
        </div>
      </section>
    </div>
  )
}
