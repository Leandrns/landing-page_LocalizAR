import '../styles/final.css'

function FinalCTASection({ onVoteClick }) {
  return (
    <section className="final-cta-section" data-animate>
      <div className="final-cta-content">
        <div className="cta-stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        
        <h2 className="final-cta-title">
          Ajude-nos a revolucionar
          <br />
          <span className="gradient-text">eventos com AR</span>
        </h2>
        
        <p className="final-cta-subtitle">
          Seu voto pode transformar a experiência de milhares de visitantes em eventos ao redor do mundo.
        </p>
        
        <button className="cta-primary large" onClick={onVoteClick}>
          <span>Vote Agora</span>
          <i className="fas fa-trophy"></i>
        </button>
        
        <p className="final-cta-note">
          <i className="fas fa-info-circle"></i>
          Votação aberta durante o evento
        </p>
      </div>
    </section>
  );
}

export default FinalCTASection;