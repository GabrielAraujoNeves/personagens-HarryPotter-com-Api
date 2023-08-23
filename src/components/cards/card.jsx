import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentCard.css';
import CharacterChangeButton from '../button/button';

const StudentCard = () => {
  const [student, setStudent] = useState({});
    const [characterIndex, setCharacterIndex] = useState(0);
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    console.log('Fetching data from API...');
    axios.get('https://hp-api.onrender.com/api/characters/students')
      .then(response => {
        console.log('API response:', response.data);
        if (response.data && response.data.length > 0) {
          setStudentsData(response.data);
          setStudent(response.data[characterIndex]);
        }
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, [characterIndex]);

  const handleNextCharacter = () => {
    console.log('Next character button clicked');
    setCharacterIndex((prevIndex) => (prevIndex + 1) % studentsData.length);
  };
  
  const handlePreviousCharacter = () => {
    console.log('Previous character button clicked');
    setCharacterIndex((prevIndex) => (prevIndex - 1 + studentsData.length) % studentsData.length);
  };
  

  return (
    <div className="student-card">
      <img src={student.image} alt={student.name} className="student-image" />
      <h2 className="student-name">{student.name}</h2>
      <p className="student-house">Casa: {student.house}</p>
      <p className="student-birthday">Aniversário: {student.dateOfBirth}</p>
      <div className='character-buttons'>
        <CharacterChangeButton onClick={handlePreviousCharacter} label="Anterior"/>
        <CharacterChangeButton onClick={handleNextCharacter} label="Próximo"/>
      </div>
    </div>
  );
};

export default StudentCard;

