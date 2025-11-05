function DifferentialsSection() {
  const differentials = [
    {
      number: '01',
      title: 'Tecnologia WebXR Nativa',
      description: 'Única solução 100% web com AR nativo, sem dependência de apps externos ou SDKs pesados.'
    },
    {
      number: '02',
      title: 'Setup em Minutos',
      description: 'QR Codes estratégicos permitem calibração instantânea. Organizadores configuram o evento em menos de 15 minutos.'
    },
    {
      number: '03',
      title: 'Gamificação Inteligente',
      description: 'Sistema de recompensas com raridade aumenta o engajamento e cria buzz no evento.'
    },
    {
      number: '04',
      title: 'Acessibilidade Total',
      description: 'Funciona em qualquer smartphone moderno, iOS ou Android, sem barreiras de entrada.'
    }
  ];

  return (
    <section id="diferenciais" className="differentials-section" data-animate>
      <div className="section-container">
        <div className="section-header centered">
          <span className="section-tag">Diferenciais</span>
          <h2 className="section-title">
            Por que escolher <span className="gradient-text">LocalizAR?</span>
          </h2>
        </div>
        
        <div className="differentials-grid">
          {differentials.map((diff, index) => (
            <div key={index} className="differential-item">
              <div className="differential-number">{diff.number}</div>
              <div className="differential-content">
                <h3>{diff.title}</h3>
                <p>{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferentialsSection;