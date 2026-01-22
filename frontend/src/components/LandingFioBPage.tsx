import { Helmet } from 'react-helmet-async'

const heroImageUrl = '/fiob-hero.svg'
const coverImageUrl = '/fiob-cover.svg'
const bannerImageUrl = '/fiob-banner.svg'
const ebookDownloadUrl = '/ebook-fiob.pdf'
const calculatorUrl = '/simulador'
const logoUrl =
  'https://bcb27500.delivery.rocketcdn.me/wp-content/uploads/2024/05/LOGO-CANAL-SOLAR-VERSAO-4-copiar.webp'

export default function LandingFioBPage() {
  return (
    <>
      <Helmet>
        <title>E-book Fio B 2026 | Calculadora Canal Solar</title>
        <meta
          name="description"
          content="Landing page do e-book gratuito Fio B na Geração Distribuída. Entenda a cobrança de 60% do Fio B e simule o impacto com a calculadora do Canal Solar."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden">
          <img
            src={heroImageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/40" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <img src={logoUrl} alt="Canal Solar" className="h-8" />
              <a
                href={calculatorUrl}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:bg-white/20"
              >
                Acessar calculadora
              </a>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-white/70">E-book gratuito</div>
                <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Fio B na Geração Distribuída
                </h1>
                <p className="mt-4 text-lg text-white/80">Sua conta de energia vai mudar em 2026?</p>
                <p className="mt-4 text-sm text-white/70">
                  Em 2026 consumidores com energia solar enquadrados como GD2 passam a pagar 60% do Fio B sobre a
                  energia compensada.
                </p>
                <p className="mt-4 text-sm text-white/70">
                  Baixe gratuitamente o e-book do Canal Solar e entenda, na prática, como essa cobrança funciona e
                  quanto ela vai pesar no seu bolso.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={ebookDownloadUrl}
                    className="inline-flex items-center justify-center rounded-lg bg-secondary-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                    download
                  >
                    Baixar E-book grátis
                  </a>
                  <a
                    href="#calculadora"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    Ver a calculadora
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.9)]">
                  <img
                    src={coverImageUrl}
                    alt="Capa do e-book Fio B na Geração Distribuída"
                    className="w-full max-w-xs rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ebook" className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold">O que está acontecendo com o Fio B?</h2>
              <p className="mt-3 text-sm text-white/70">
                Com a Lei nº 14.300/2022, o modelo de compensação de energia mudou.
              </p>
              <p className="mt-3 text-sm text-white/70">Quem não tem direito adquirido entra em um regime de transição, no qual:</p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                  <span>O Fio B deixa de ser totalmente compensado</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                  <span>A cobrança aumenta ano a ano</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                  <span>Em 2026, 60% do Fio B passa a ser pago diretamente na fatura</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.8)]">
              <img
                src={bannerImageUrl}
                alt="E-book gratuito Fio B na geração distribuída em 2026"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="calculadora" className="bg-primary-950/60">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold">Não sabe como calcular esse impacto corretamente?</h2>
                <p className="mt-3 text-sm text-white/70">
                  Acesse à Calculadora de Fio B do Canal Solar, uma ferramenta online que permite:
                </p>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-300" />
                    <span>Simular o impacto do Fio B de acordo com a sua região de concessão</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-300" />
                    <span>Entender quanto da energia deixa de ser compensada</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-300" />
                    <span>Visualizar a diferença entre os cenários regulatórios</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href={calculatorUrl}
                    className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
                  >
                    Calcule seu Fio B na prática
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary-600/20 to-primary-900/50 p-6 shadow-[0_22px_60px_-35px_rgba(15,23,42,0.9)]">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">Calculadora Fio B</div>
                <div className="mt-4 text-3xl font-semibold">Simule o impacto na sua concessionária</div>
                <p className="mt-3 text-sm text-white/70">
                  Tenha acesso rápido aos dados da ANEEL e descubra como o Fio B afeta a sua conta de energia em 2026.
                </p>
                <a
                  href={calculatorUrl}
                  className="mt-6 inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Ir para a calculadora
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-center">
            <img src={logoUrl} alt="Canal Solar" className="h-8" loading="lazy" />
            <div className="text-xs text-white/60">2026 © Canal Solar</div>
          </div>
        </footer>
      </div>
    </>
  )
}
