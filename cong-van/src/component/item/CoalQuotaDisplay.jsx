import React from 'react';

import { QUOTA_DISPLAY } from '../../data/assets';

import './CoalQuotaDisplay.css';

export default function CoalQuotaDisplay({ currentCoal, quota }) {
  return (
    <div 
      className="coal-quota-panel" 
      style={{ backgroundImage: `url(${QUOTA_DISPLAY.BACKGROUND})` }}
    >
      <div className="quota-content">
        <div className="quota-header">{QUOTA_DISPLAY.TITLE}</div>
        
        <div className="quota-numbers">
          <span className="current-coal">{currentCoal}</span>
          <span className="separator">{QUOTA_DISPLAY.VALUE_SEPERATOR}</span>
          <span className="target-quota">{quota}</span>
        </div>
      </div>
    </div>
  );
}