import React from 'react';
import './ButtonUploadCV.scss';

function Button() {
    return (
      <div>
        <button className="button__upload-cv">
          <a href="/src/assets/images/AP-CV.zip">Télécharger mon CV</a>
        </button>
      </div>
    );
  }
  
  export default Button;