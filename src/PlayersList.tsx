import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player.tsx';
import players from './players';

const PlayersList = () => {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 0'
  };

  const titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '1.2rem',
    marginBottom: '50px',
    fontWeight: '300'
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '0 20px'
  };

  return (
    <div style={containerStyle}>
      <Container fluid>
        <h1 style={titleStyle}>FIFA Ultimate Team</h1>
        <p style={subtitleStyle}>Discover the world's best football players</p>
        
        <div style={cardsContainerStyle}>
          {players.map((player, index) => (
            <Player
              key={index}
              {...player}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PlayersList;