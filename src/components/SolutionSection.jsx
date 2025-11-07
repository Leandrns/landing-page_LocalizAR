function SolutionSection({ onVoteClick }) {
  const features = [
    'Acesso instantâneo via navegador',
    'Marcadores 3D em tempo real',
    'Sistema de gamificação com prêmios',
    'Zero instalação necessária'
  ];

  return (
    <section id="solucao" className="solution-section" data-animate>
      <div className="section-container">
        <div className="solution-content">
          <div className="solution-text">
            <span className="section-tag">Nossa Solução</span>
            <h2 className="section-title">
              Realidade Aumentada
              <br />
              <span className="gradient-text">Sem Complicação</span>
            </h2>

            <p className="solution-description">
              LocalizAR utiliza a tecnologia WebXR para criar uma experiência de navegação imersiva e intuitiva.
              Sem apps para baixar, sem configurações complexas - apenas aponte, escaneie e navegue.
            </p>

            <div className="solution-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="cta-primary" onClick={onVoteClick}>
              Vote em Nossa Solução
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>


          <div className="solution-visual">
            <div className="gif-container">
              <img src="/videos/videoar.gif" alt="Demonstração AR" className="demo-gif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;