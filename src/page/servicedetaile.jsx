import React from 'react'
 import { useParams, Link } from 'react-router-dom'

const ServiceDetails = () => {
  const { id } = useParams()

  const servicesList = [
    {
      id: 1,
      icon: '🛏️',
      title: 'Chambres Confortables',
      description: 'Des chambres spacieuses et bien équipées pour votre confort',
      details: 'Nos chambres offrent tout le confort nécessaire pour un séjour agréable. Chaque chambre est équipée de lits premium, climatisation, télévision écran plat et salle de bain privée avec toilettes modernes.',
      amenities: ['WiFi gratuit', 'Coffre-fort', 'Mini-bar', 'Balcon privé']
    },
    {
      id: 2,
      icon: '',
      title: 'Restaurant & Bar',
      description: 'Cuisine locale et internationale dans un cadre élégant',
      details: 'Notre restaurant propose une cuisine raffinée mêlant saveurs locales et spécialités internationales. Nos chefs cuisinent avec des produits frais et de qualité.',
      amenities: ['Menu varié', 'Cocktails premium', 'Vue panoramique', 'Service en chambre']
    },
    {
      id: 3,
      icon: '🏊',
      title: 'Piscine',
      description: 'Profitez de notre belle piscine climatisée',
      details: 'Une piscine olympique chauffée ouverte toute l\'année pour votre détente et vos exercices. Espace enfants sécurisé disponible.',
      amenities: ['Eau chauffée', 'Parasols gratuits', 'Serviettes incluses', 'Cabines de change']
    },
    {
      id: 4,
      icon: '🧘',
      title: 'Spa & Wellness',
      description: 'Massages et soins de relaxation pour votre bien-être',
      details: 'Profitez de notre spa complet avec massages thérapeutiques, soins du visage et du corps. Nos thérapeutes expérimentés vous offrent une expérience de relaxation totale.',
      amenities: ['Massages variés', 'Sauna', 'Jacuzzi', 'Soins du visage']
    },
    {
      id: 5,
      icon: '🎾',
      title: 'Salle de Sport',
      description: 'Équipements modernes pour vos entraînements',
      details: 'Salle de sport entièrement équipée avec appareils cardio, musculation et équipements de yoga. Accès gratuit pour nos clients.',
      amenities: ['Cardio machines', 'Haltères', 'Tapis de yoga', 'Douches']
    },
    {
      id: 6,
      icon: '📶',
      title: 'WiFi Gratuit',
      description: 'Connexion internet haut débit dans tout l\'établissement',
      details: 'Bénéficiez d\'une connexion WiFi ultra-rapide dans toutes les zones de l\'hôtel. Parfait pour rester connecté pendant votre séjour.',
      amenities: ['WiFi illimité', 'Haut débit', 'Couverture partout', 'Support technique']
    },
  ]

  const service = servicesList.find(s => s.id === parseInt(id))

  if (!service) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Service non trouvé</div>
  }

  const styles = `
    .service-details-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: transparent rgba(245, 245, 245, 0.8);
      backdrop-filter: blur(10px);
      min-height: 100vh;
      padding: 40px 20px;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
      margin-bottom: 30px;
      transition: all 0.3s ease;
    }

    .back-link:hover {
      gap: 12px;
      color: #764ba2;
    }

    .details-header {
      background: transparent rgba(102, 126, 234, 0.8);
      backdrop-filter: blur(5px);
      color: white;
      padding: 60px 40px;
      border-radius: 20px;
      text-align: center;
      margin-bottom: 50px;
      box-shadow: 0 15px 50px rgba(102, 126, 234, 0.3);
    }

    .details-icon {
      font-size: 100px;
      margin-bottom: 20px;
      display: block;
    }

    .details-header h1 {
      font-size: 48px;
      margin-bottom: 15px;
      font-weight: 700;
    }

    .details-header p {
      font-size: 20px;
      opacity: 0.95;
      font-weight: 300;
    }

    .details-content {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      margin-bottom: 50px;
    }

    .details-text {
      font-size: 18px;
      line-height: 1.8;
      color: #2d3748;
      margin-bottom: 40px;
    }

    .amenities-title {
      font-size: 28px;
      color: #2d3748;
      margin-bottom: 25px;
      font-weight: 700;
      padding-bottom: 15px;
      border-bottom: 3px solid #667eea;
    }

    .amenities-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .amenity-card {
      background: transparent rgba(102, 126, 234, 0.8);
      backdrop-filter: blur(5px);
      padding: 20px;
      border-radius: 12px;
      border-left: 5px solid #667eea;
      transition: all 0.3s ease;
    }

    .amenity-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
    }

    .amenity-card::before {
      content: '✓';
      color: #667eea;
      font-weight: bold;
      margin-right: 10px;
      font-size: 18px;
    }

    .book-btn {
      display: inline-block;
      background: transparent rgba(102, 126, 234, 0.8);
      backdrop-filter: blur(5px);
      color: white;
      padding: 16px 50px;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }

    .book-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
    }

    @media (max-width: 768px) {
      .details-header {
        padding: 40px 20px;
      }

      .details-icon {
        font-size: 60px;
      }

      .details-header h1 {
        font-size: 32px;
      }

      .details-content {
        padding: 30px;
      }

      .details-text {
        font-size: 16px;
      }

      .amenities-items {
        grid-template-columns: 1fr;
      }
    }
  `

  return (
    <div>
        <h1> {id} </h1>
        <p> {service.title}</p>
        <p> {service.description}</p>
    </div>
  )
}

export default ServiceDetails
