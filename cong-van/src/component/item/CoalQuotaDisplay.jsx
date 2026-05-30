import React from 'react';
import './CoalQuotaDisplay.css';
import QuotaBackGround from './../../assets/image/quota.png';

export default function CoalQuotaDisplay({ currentCoal, quota }) {
  return (
    <div 
      className="coal-quota-panel" 
      style={{ backgroundImage: `url(${QuotaBackGround})` }}
    >
      <div className="quota-content">
        <div className="quota-header">Chỉ tiêu than</div>
        
        <div className="quota-numbers">
          <span className="current-coal">{currentCoal}</span>
          <span className="separator">/</span>
          <span className="target-quota">{quota}</span>
        </div>
      </div>
    </div>
  );
}