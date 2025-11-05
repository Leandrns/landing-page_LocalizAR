import '../styles/features.css'

function FeaturesSection() {
  const features = [
    {
      icon: 'fa-qrcode',
      title: 'Calibração por QR',
      description: 'Sistema de calibração instantânea usando QR Codes estratégicos no evento.'
    },
    {
      icon: 'fa-cube',
      title: 'Marcadores 3D',
      description: 'Visualize pontos de interesse com modelos 3D interativos em realidade aumentada.'
    },
    {
      icon: 'fa-gift',
      title: 'Sistema de Prêmios',
      description: 'Gamificação com chances de ganhar prêmios ao interagir com os pontos AR.'
    },
    {
      icon: 'fa-mobile-alt',
      title: '100% Web',
      description: 'Funciona direto no navegador, sem necessidade de instalar aplicativos.'
    },
    {
      icon: 'fa-bolt',
      title: 'Performance Otimizada',
      description: 'Renderização 3D otimizada com Three.js para experiência fluida.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Analytics em Tempo Real',
      description: 'Dashboard para organizadores acompanharem o fluxo de visitantes.'
    }
  ];

  return (
    <section id="funcionalidades" className="features-section" data-animate>
      <div className="section-container">
        <div className="section-header centered">
          <span className="section-tag">Funcionalidades</span>
          <h2 className="section-title">
            Tecnologia de <span className="gradient-text">Última Geração</span>
          </h2>
          <p className="section-subtitle">
            Recursos projetados para maximizar a experiência do visitante
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;