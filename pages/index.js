import React, { useEffect, useState } from 'react';

const PaginaKarina = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    setVisivel(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #fff5f7 0%, #fce4ec 100%)',
      fontFamily: "'Georgia', serif",
      padding: '20px',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '50px',
        borderRadius: '30px',
        boxShadow: '0 10px 30px rgba(252, 182, 193, 0.4)',
        textAlign: 'center',
        opacity: visivel ? 1 : 0,
        transform: visivel ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 1.5s ease-out',
        border: '1px solid #f8bbd0'
      }}>
        <h1 style={{ color: '#d81b60', fontSize: '2.5rem', marginBottom: '30px' }}>
          Para Minha Eterna Karina
        </h1>

        <p style={{ fontSize: '1.3rem', color: '#444', fontStyle: 'italic', lineHeight: '1.8' }}>
          "Existem momentos na vida que as palavras não conseguem descrever, 
          mas o coração sente com toda a força. Você é a luz que ilumina meus dias 
          e a paz que acalma minha alma."
        </p>

        <div style={{ margin: '40px 0', fontSize: '2rem' }}>
          🌹 ❤️ 🌹
        </div>

        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' }}>
          Karina, cada segundo ao seu lado é um presente que guardo com carinho. 
          Minha felicidade vive no brilho do seu olhar e na doçura do seu sorriso. 
          Eu te amo hoje, amanhã e para sempre.
        </p>

        <div style={{ marginTop: '40px', color: '#ad1457', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Com todo o meu amor, seu marido Rodrigo.
        </div>
      </div>

      {/* Estilo para pétalas animadas simples */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default PaginaKarina;