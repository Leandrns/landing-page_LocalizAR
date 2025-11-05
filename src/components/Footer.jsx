function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>LocalizAR</h3>
          <p>Navegação em AR para eventos</p>
        </div>
        
        <div className="footer-links">
          <a href="#problemas">Problemas</a>
          <a href="#solucao">Solução</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#diferenciais">Diferenciais</a>
        </div>
        
        <div className="footer-social">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 LocalizAR. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;