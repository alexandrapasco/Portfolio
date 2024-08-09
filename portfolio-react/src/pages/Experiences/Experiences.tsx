import React from 'react';
import ButtonUploadCV from '../../App/components/Button/ButtonUploadCV/ButtonUploadCV'
import './Experiences.scss';

function Experiences() {
  return (
    <>
    <div className="title-container">
        <h4 className="title" id="experiences">Expériences</h4>
      </div>
  
    <img id="cv" src="src/assets/images/CV-AP.jpg" alt="Document CV" />

    <ButtonUploadCV />
      
    </>
);
}

export default Experiences;
