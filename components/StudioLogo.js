import React from 'react';
import { GiHealthNormal } from 'react-icons/gi';
import { IoMdMedical } from 'react-icons/io';

function StudioLogo() {
  return (
    <div>
      <div style={{ display: 'inline-block', marginRight: '0.5em' }}>
        <IoMdMedical />
      </div>
      <h3 style={{ display: 'inline-block' }}>Medical Synopses</h3>
    </div>
  );
}

export default StudioLogo;
