import '../styles/problems.css'

function ProblemsSection() {
  const problems = [
    {
      icon: 'fa-map-marked-alt',
      iconColor: 'red',
      title: 'Visitantes Perdidos',
      description: 'Mapas estáticos e sinalização confusa deixam os participantes desorientados em grandes espaços.'
    },
    {
      icon: 'fa-clock',
      iconColor: 'orange',
      title: 'Tempo Desperdiçado',
      description: 'Visitantes gastam tempo procurando estandes específicos ao invés de aproveitar o evento.'
    },
    {
      icon: 'fa-users-slash',
      iconColor: 'yellow',
      title: 'Baixo Engajamento',
      description: 'Falta de interatividade resulta em menor participação e satisfação dos visitantes.'
    }
  ];

  return (
    <section id="problemas" className="problems-section" data-animate>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">O Problema</span>
          <h2 className="section-title">
            Eventos grandes têm <span className="gradient-text">desafios reais</span>
          </h2>
        </div>
        
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className={`problem-icon ${problem.iconColor}`}>
                <i className={`fas ${problem.icon}`}></i>
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;