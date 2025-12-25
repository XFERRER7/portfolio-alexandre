export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="card-icon">
            <i className="bx bx-user" />
          </div>
          <h3>
            Visão Geral
          </h3>
          <p>
            Atuo como desenvolvedor de software desde 2021, com foco em desenvolvimento web e integração de sistemas de pagamento. Ao longo desse período, participei da construção de soluções que conectam aplicações a gateways de pagamento, garantindo fluxos de pagamentos confiáveis e uma boa experiência para o usuário. Em um dos projetos, também gerenciei uma equipe de TI, apoiando a organização das entregas e a evolução do produto.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon">
            <i className="bx bx-code-alt" />
          </div>
          <h3>
            Habilidades Técnicas
          </h3>
          <p>
            Tenho atuação predominante em Next.js, com domínio na construção de aplicações web completas, performáticas e bem estruturadas. Também tenho boa base em Java, atuando em projetos e integrações. Em Go (Golang), possuo experiência prática em desenvolvimento backend. Para mobile, trabalho com React Native na criação de apps híbridos, além de atuar no backend com NestJS e Express, construindo APIs e integrações. Também tenho experiência com WordPress, realizando implementações.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon">
            <i className="bx bx-globe" />
          </div>
          <h3>Trabalho Colaborativo</h3>
          <p>
            Trabalho muito bem em equipe, com experiência em ambientes ágeis utilizando Scrum e rotinas de colaboração contínua. Estou habituado a organizar demandas e sprints com Jira, documentar e alinhar decisões no Confluence, além de planejar atividades com o Planner do Teams. No dia a dia, utilizo Bitbucket, GitHub e GitLab para versionamento e revisão de código, seguindo boas práticas com Git. Também tenho experiência com deploys na DigitalOcean, garantindo entregas consistentes e estáveis em produção.
          </p>
        </div>
      </div>
    </section>
  );
}
