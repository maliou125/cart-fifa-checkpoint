import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ 
  name, 
  team, 
  nationality, 
  jerseyNumber, 
  age, 
  position, 
  rating, 
  imageURL 
}) => {
  // Dynamic styling based on player rating
  const getCardGradient = (rating) => {
    if (rating >= 90) return 'linear-gradient(135deg, #FFD700, #FFA500)'; // Gold
    if (rating >= 85) return 'linear-gradient(135deg, #C0C0C0, #A8A8A8)'; // Silver
    if (rating >= 80) return 'linear-gradient(135deg, #CD7F32, #B8860B)'; // Bronze
    return 'linear-gradient(135deg, #4A90E2, #357ABD)'; // Blue
  };

  const getRatingColor = (rating) => {
    if (rating >= 90) return '#FFD700';
    if (rating >= 85) return '#C0C0C0';
    if (rating >= 80) return '#CD7F32';
    return '#4A90E2';
  };

  const cardStyle = {
    width: '280px',
    height: '400px',
    margin: '15px',
    borderRadius: '15px',
    border: 'none',
    background: getCardGradient(rating),
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  };

  const cardHoverStyle = {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.25)'
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid white',
    margin: '10px auto',
    display: 'block',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  };

  const ratingBadgeStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: getRatingColor(rating),
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '2px solid white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  };

  const jerseyStyle = {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#333',
    borderRadius: '8px',
    padding: '5px 10px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: '1px solid rgba(0,0,0,0.1)'
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    margin: '10px 0 5px 0',
    textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
  };

  const teamStyle = {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.95)',
    textAlign: 'center',
    margin: '0 0 15px 0',
    fontWeight: '500',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  };

  const statsContainerStyle = {
    backgroundColor: 'rgba(255,255,255,0.95)',
    margin: '0 15px',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const statRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 0',
    fontSize: '13px'
  };

  const statLabelStyle = {
    color: '#666',
    fontWeight: '500'
  };

  const statValueStyle = {
    color: '#333',
    fontWeight: 'bold'
  };

  const positionBadgeStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: 'bold'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card 
      style={{
        ...cardStyle,
        ...(isHovered ? cardHoverStyle : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={ratingBadgeStyle}>{rating}</div>
      <div style={jerseyStyle}>#{jerseyNumber}</div>
      
      <Card.Body style={{ padding: '20px 0', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <img 
            src={imageURL} 
            alt={name}
            style={imageStyle}
          />
          <div style={nameStyle}>{name}</div>
          <div style={teamStyle}>{team}</div>
        </div>
        
        <div style={statsContainerStyle}>
          <div style={statRowStyle}>
            <span style={statLabelStyle}>Position:</span>
            <span style={positionBadgeStyle}>{position}</span>
          </div>
          <div style={statRowStyle}>
            <span style={statLabelStyle}>Nationality:</span>
            <span style={statValueStyle}>{nationality}</span>
          </div>
          <div style={statRowStyle}>
            <span style={statLabelStyle}>Age:</span>
            <span style={statValueStyle}>{age} years</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 25,
  position: "SUB",
  rating: 70,
  imageURL: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400"
};

export default Player;