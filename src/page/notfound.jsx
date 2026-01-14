import React from 'react'

const notfound = () => {
  const styles = `
    .notfound-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 20px;
      font-family: 'Arial', sans-serif;
    }

    .notfound-code {
      font-size: 120px;
      font-weight: bold;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      animation: bounce 1s infinite;
    }

    .notfound-title {
      font-size: 32px;
      margin: 20px 0;
      font-weight: 600;
    }

    .notfound-message {
      font-size: 18px;
      margin-bottom: 30px;
      opacity: 0.9;
      max-width: 500px;
    }

    .notfound-btn {
      background-color: white;
      color: #667eea;
      padding: 12px 30px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .notfound-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      background-color: #f0f0f0;
    }

    .notfound-icon {
      font-size: 80px;
      margin-bottom: 20px;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @media (max-width: 768px) {
      .notfound-code {
        font-size: 80px;
      }
      
      .notfound-title {
        font-size: 24px;
      }
      
      .notfound-message {
        font-size: 16px;
      }
      
      .notfound-icon {
        font-size: 60px;
      }
    }
  `

  return (
    <>
      <style>{styles}</style>
      <div className="notfound-container">
        <div className="notfound-icon">😕</div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Non Trouvée</h2>
        <p className="notfound-message">Désolé, la page que vous cherchez n'existe pas.</p>
        <button className="notfound-btn" onClick={() => window.location.href = '/'}>Retour à l'accueil</button>
      </div>
    </>
  )
}

export default notfound
