export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <i className="bx bxl-sketch" />
          <span>Desenvolvedor de Software</span>
        </div>
        <h1>
          Olá, sou o <span className="gradient">Alexandre</span>
        </h1>
        <h2>
          Construindo soluções digitais inovadoras
        </h2>
        <p>
          Sou desenvolvedor de software com forte experiência em desenvolvimento web e criação de aplicativos híbridos. Atuo de ponta a ponta no ciclo do produto: levantamento e refinamento de requisitos, implementação, implantação e deploy em produção.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className="bx bx-send" /> Entrar em Contato
          </a>
          <a href="#projects" className="btn btn-secondary">
            <i className="bx bx-briefcase" /> Ver Projetos
          </a>
        </div>
      </div>
    </section>
  );
}
