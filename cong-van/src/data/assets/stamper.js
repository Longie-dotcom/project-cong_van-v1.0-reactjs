import StamperHolder from '../../assets/image/stamper/stamper3.png';
import StamperStamped from '../../assets/image/stamper/stamper2.png';
import StamperNormal from '../../assets/image/stamper/stamper1.png';
import Stamp from '../../assets/image/stamper/stamp.png';

import StampSound from '../../assets/sound/stamp.mp3';

export const STAMPER_CONFIG = Object.freeze({
    IMAGES: {
        holder: StamperHolder,
        normal: StamperNormal,
        stamped: StamperStamped,
        stamp: Stamp
    },
    SOUNDS: {
        stamped: StampSound
    }
});
