import StamperContainerImage
from './../../assets/image/stamper/stamper-container.png';

import './Stamper.css';

export default function StamperContainer() {

  return (
    <img
      src={StamperContainerImage}
      alt="Stamper Container"
      className="stamper-container"
    />
  );
}