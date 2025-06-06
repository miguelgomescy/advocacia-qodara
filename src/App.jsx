"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter
 } from "react-icons/fa";

import { Menu, X, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react"
import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="app">
      {/* Top Bar */}
{/*       <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">BRASIL/PORTUGUÊS</div>
          <div className="top-bar-center">DÚVIDAS? 0800-000000</div>
          <div className="top-bar-right">
            <a href="#login">LOGIN</a>
            <a href="#solicitar" className="btn-solicitar">
              Solicitar
            </a>
            <a href="#idioma">IDIOMA</a>
          </div>
        </div>
      </div> */}

      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-container">
            <div className="logo">
              <div className="shield-icon">🛡️</div>
            </div>
            <div className="logo-text">
              <h1>Seu Escritório</h1>
              <p>Advocacia</p>
            </div>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

      <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-menu-button"
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 1100
          }}
        >
          <X size={24} />
        </button>
        <ul>
          <li><a href="#services">QUEM SOMOS</a></li>
          <li><a href="#features">VANTAGENS</a></li>
          <li><a href="#cases">ÁREAS</a></li>
          <li><a href="#footer">CONTATO</a></li>
        </ul>
      </nav>

          <a href="#agendar" className="btn-agendar">
            AGENDAR
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h2>
              Defendendo seus direitos
              <br />
              com excelência
            </h2>
            <p>ADVOCACIA ESPECIALIZADA EM DIREITO EMPRESARIAL</p>

            <div className="hero-cta">
              <h3>CONHEÇA NOSSO SITE</h3>
              <a href="#cases" className="btn-ver-mais">
                VER MAIS SOBRE NÓS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container services-container">
          <div className="service-card">
            <h3>AREAS DE ATUAÇÃO</h3>
            <p>
              Oferecemos serviços jurídicos especializados nas mais diversas áreas do direito, com foco em soluções
              estratégicas e personalizadas para cada cliente.
            </p>
            <a href="#cases" className="btn-saiba-mais">
              SAIBA MAIS <ChevronRight size={16} />
            </a>
          </div>

          <div className="service-card">
            <h3>NOSSA EQUIPE</h3>
            <p>
              Nossa equipe é formada por profissionais altamente qualificados e experientes, comprometidos com a
              excelência e dedicados a defender seus interesses.
            </p>
            <a href="#saiba-mais" className="btn-saiba-mais">
              SAIBA MAIS <ChevronRight size={16} />
            </a>
          </div>

          <div className="service-card">
            <h3>NOSSA MISSÃO</h3>
            <p>
              Oferecer soluções jurídicas eficientes e personalizadas, com ética e transparência, buscando sempre os
              melhores resultados para nossos clientes.
            </p>
            <a href="#saiba-mais" className="btn-saiba-mais">
              SAIBA MAIS <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container features-container">
          <div className="feature">
            <div className="feature-icon">
              <div className="icon">💬</div>
            </div>
            <h4>ATENDIMENTO</h4>
            <p>Atendimento personalizado para cada cliente, com foco em suas necessidades específicas.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <div className="icon">👨‍💼</div>
            </div>
            <h4>PROFISSIONAIS QUALIFICADOS</h4>
            <p>Equipe de advogados especializados em diversas áreas do direito.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <div className="icon">😊</div>
            </div>
            <h4>EXPERIÊNCIA POSITIVA</h4>
            <p>Compromisso com resultados e satisfação dos clientes em todos os casos.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <div className="icon">💌</div>
            </div>
            <h4>COMUNICAÇÃO DIRETA</h4>
            <p>Canais de comunicação eficientes para manter você sempre informado.</p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="cases" id="cases">
        <div className="container cases-container">
          <h2>Soluções Jurídicas Especializadas</h2>

          <div className="case-cards">
            <div className="case-card">
              <div className="case-icon">
                <div className="scale-icon">⚖️</div>
              </div>
              <h3>Direito Cível</h3>
              <p>
                Assessoria jurídica completa em questões contratuais, responsabilidade civil, direito do consumidor e
                outras demandas cíveis.
              </p>
              <a href="#saiba-mais" className="btn-case">
                SAIBA MAIS
              </a>
            </div>

            <div className="case-card">
              <div className="case-icon">
                <div className="scale-icon">⚖️</div>
              </div>
              <h3>Direito Empresarial</h3>
              <p>
                Consultoria jurídica para empresas, incluindo constituição de sociedades, contratos empresariais e
                planejamento tributário.
              </p>
              <a href="#saiba-mais" className="btn-case">
                SAIBA MAIS
              </a>
            </div>

            <div className="case-card">
              <div className="case-icon">
                <div className="scale-icon">⚖️</div>
              </div>
              <h3>Direito Trabalhista</h3>
              <p>
                Representação jurídica em questões trabalhistas, tanto para empregadores quanto para empregados, com
                foco em soluções eficientes.
              </p>
              <a href="#saiba-mais" className="btn-case">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="container footer-container">
          <div className="footer-info">
            <div className="footer-col">
              <div className="footer-item">
                <MapPin size={20} />
                <div>
                  <h4>ENDEREÇO</h4>
                  <p>Av. Paulista, 1000, São Paulo - SP</p>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-item">
                <Phone size={20} />
                <div>
                  <h4>TELEFONE</h4>
                  <p>(11) 3000-0000</p>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-item">
                <Mail size={20} />
                <div>
                  <h4>EMAIL PARA CONTATO</h4>
                  <p>contato@leinstitum.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-info">
            <div className="footer-col">
              <div className="footer-item">
                <Clock size={20} />
                <div>
                  <h4>HORÁRIO</h4>
                  <p>Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-item">
                <Clock size={20} />
                <div>
                  <h4>PLANTÃO</h4>
                  <p>Sábados: 9h às 12h</p>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-newsletter">
                <input type="email" placeholder="Inscreva-se para nossa newsletter" />
                <button>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>© 2025 Leinstitum Advocacia. Todos os direitos reservados.</p>
            <div className="social-icons">
              <a href="#facebook"><FaFacebookF size={25} /></a>
               <a href="#twitter"><FaTwitter size={25} /></a> 
              <a href="#instagram"><FaInstagram size={25} /></a>
              <a href="#linkedin"><FaLinkedin size={25} /></a>
            </div>
          </div>
        </div>
      </footer>
    
    <a
  href="https://wa.me/5511919223489"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  🟢 WhatsApp
</a>
    
    </div>
  )
}

export default App
