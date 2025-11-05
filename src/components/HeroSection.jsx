function HeroSection({ onVoteClick }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Inovação em Realidade Aumentada
        </div>
        
        <h1 className="hero-title">
          <span className="gradient-text">LocalizAR</span>
          <br />
          Navegue eventos com
          <br />
          <span className="highlight-text">Realidade Aumentada</span>
        </h1>
        
        <p className="hero-subtitle">
          A solução definitiva para navegação indoor em eventos.
          Transforme a experiência dos visitantes com tecnologia AR de ponta.
        </p>
        
        <div className="hero-cta">
          <button className="cta-primary" onClick={onVoteClick}>
            <span>Vote em Nós</span>
            <i className="fas fa-trophy"></i>
          </button>
          <button className="cta-secondary" onClick={() => document.getElementById('solucao').scrollIntoView({ behavior: 'smooth' })}>
            <span>Saiba Mais</span>
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Navegação Precisa</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">AR</div>
            <div className="stat-label">Tecnologia WebXR</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">0s</div>
            <div className="stat-label">Tempo de Setup</div>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="ar-marker pulse"></div>
            <div className="ar-grid"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;