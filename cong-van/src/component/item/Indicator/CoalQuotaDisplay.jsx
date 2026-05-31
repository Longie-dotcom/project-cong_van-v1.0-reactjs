import { QUOTA_CONFIG } from '../../../data/assets/quota';
import './CoalQuotaDisplay.css';

export default function CoalQuotaDisplay({ currentCoal, quota }) {
  return (
    <div 
      className="coal-quota-panel" 
      style={{ backgroundImage: `url(${QUOTA_CONFIG.BACKGROUND})` }}
    >
      <div className="quota-content">
        <div className="quota-header">{QUOTA_CONFIG.TITLE}</div>
        
        <div className="quota-numbers">
          <span className="current-coal">{currentCoal}</span>
          <span className="separator">{QUOTA_CONFIG.VALUE_SEPERATOR}</span>
          <span className="target-quota">{quota}</span>
        </div>
      </div>
    </div>
  );
}