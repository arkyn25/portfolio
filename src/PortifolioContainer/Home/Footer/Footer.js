import React from 'react';
import './Footer.css';
import shape from '../../../utils/Home/shape-bg.png'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
         src={shape}
         alt="no connection"
        />
      </div>
    </div>
  )
}
