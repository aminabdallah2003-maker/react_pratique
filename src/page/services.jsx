import React from 'react'

const Services = () => {
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .services-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(180deg, #f8f9ff 0%, #f0f4ff 100%);
      min-height: 100vh;
    }

    .services-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 80px 20px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .services-header::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      top: -50px;
      right: -50px;
      animation: float 6s ease-in-out infinite;
    }

    .services-header::after {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 50%;
      bottom: -30px;
      left: -30px;
      animation: float 8s ease-in-out infinite reverse;
    }

    .services-header h1 {
      font-size: 56px;
      margin-bottom: 15px;
      font-weight: 700;
      letter-spacing: -1px;
      position: relative;
      z-index: 1;
    }

    .services-header p {
      font-size: 20px;
      opacity: 0.95;
      position: relative;
      z-index: 1;
      font-weight: 300;
    }

    .services-content {
      max-width: 1300px;
      margin: 0 auto;
      padding: 70px 20px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-bottom: 80px;
    }

    .service-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      border: 1px solid rgba(102, 126, 234, 0.1);
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, transparent, #667eea, transparent);
      transition: left 0.5s ease;
      z-index: 1;
    }

    .service-card:hover {
      transform: translateY(-15px);
      box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
    }

    .service-card:hover::before {
      left: 100%;
    }

    .service-icon {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 80px;
      position: relative;
      overflow: hidden;
    }

    .service-icon::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent);
    }

    .service-info {
      padding: 35px;
    }

    .service-info h3 {
      font-size: 24px;
      margin-bottom: 12px;
      color: #2d3748;
      font-weight: 600;
    }

    .service-info p {
      color: #718096;
      line-height: 1.7;
      font-size: 15px;
      font-weight: 400;
    }

    .amenities-section {
      background: white;
      border-radius: 20px;
      padding: 60px 40px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      margin-bottom: 60px;
      border: 1px solid rgba(102, 126, 234, 0.1);
    }

    .section-title {
      font-size: 40px;
      margin-bottom: 50px;
      color: #2d3748;
      text-align: center;
      font-weight: 700;
      position: relative;
      padding-bottom: 20px;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }

    .amenities-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 25px;
    }

    .amenity-item {
      display: flex;
      align-items: center;
      padding: 20px;
      background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
      border-radius: 15px;
      border-left: 5px solid #667eea;
      transition: all 0.3s ease;
    }

    .amenity-item:hover {
      transform: translateX(10px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
    }

    .amenity-item span {
      font-size: 32px;
      margin-right: 15px;
      min-width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .amenity-item p {
      color: #2d3748;
      font-weight: 600;
      font-size: 15px;
    }

    .contact-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 70px 40px;
      border-radius: 20px;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 15px 50px rgba(102, 126, 234, 0.3);
    }

    .contact-section::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      top: -100px;
      right: -100px;
    }

    .contact-section::after {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 50%;
      bottom: -80px;
      left: -80px;
    }

    .contact-section h2 {
      font-size: 36px;
      margin-bottom: 15px;
      font-weight: 700;
      position: relative;
      z-index: 1;
    }

    .contact-section p {
      font-size: 18px;
      margin-bottom: 30px;
      position: relative;
      z-index: 1;
      opacity: 0.95;
      font-weight: 300;
    }

    .contact-btn {
      background-color: white;
      color: #667eea;
      padding: 14px 40px;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      z-index: 1;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .contact-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
      background-color: #f0f0f0;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(30px);
      }
    }

    @media (max-width: 768px) {
      .services-header {
        padding: 50px 20px;
      }

      .services-header h1 {
        font-size: 36px;
      }

      .services-header p {
        font-size: 16px;
      }

      .services-content {
        padding: 40px 20px;
      }

      .services-grid {
        grid-template-columns: 1fr;
        gap: 25px;
      }

      .amenities-section {
        padding: 40px 20px;
      }

      .section-title {
        font-size: 28px;
      }

      .amenities-list {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .contact-section {
        padding: 40px 20px;
      }

      .contact-section h2 {
        font-size: 24px;
      }

      .service-icon {
        font-size: 50px;
        height: 140px;
      }
    }
  `

  const services = [
    { icon: '🛏️', title: 'Chambres Confortables', description: 'Des chambres spacieuses et bien équipées pour votre confort' },
    { icon: '🍽️', title: 'Restaurant & Bar', description: 'Cuisine locale et internationale dans un cadre élégant' },
    { icon: '🏊', title: 'Piscine', description: 'Profitez de notre belle piscine climatisée' },
    { icon: '🧘', title: 'Spa & Wellness', description: 'Massages et soins de relaxation pour votre bien-être' },
    { icon: '🎾', title: 'Salle de Sport', description: 'Équipements modernes pour vos entraînements' },
    { icon: '📶', title: 'WiFi Gratuit', description: 'Connexion internet haut débit dans tout l\'établissement' },
  ]

  const amenities = [
    { icon: '🚗', name: 'Parking gratuit' },
    { icon: '🛏️', name: 'Lits King Size' },
    { icon: '❄️', name: 'Climatisation' },
    { icon: '📺', name: 'Télévision écran plat' },
    { icon: '☕', name: 'Mini-bar' },
    { icon: '🛁', name: 'Salle de bain privée' },
    { icon: '🔐', name: 'Coffre-fort' },
    { icon: '🎫', name: 'Service de concierge' },
  ]

  return (
    <>
      <style>{styles}</style>
      <div className="services-container">
        <div className="services-header">
          <h1>Nos Services</h1>
          <p>Découvrez tous les services proposés par notre établissement</p>
        </div>

        <div className="services-content">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="amenities-section">
            <h2>Équipements & Commodités</h2>
            <div className="amenities-list">
              {amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  <span>{amenity.icon}</span>
                  <p>{amenity.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h2>Des questions sur nos services ?</h2>
            <p>Notre équipe est à votre disposition pour vous aider</p>
            <button className="contact-btn">Nous contacter</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
