import Mine from '../../assets/image/frame/mine.png';
import PaperParticle from '../../assets/image/paper/icon/icon25.png';
import CoalParticle from '../../assets/image/icon/coal-particle.png';

import ErrorSound from '../../assets/sound/error_006.ogg';
import BongSound from '../../assets/sound/bong_001.ogg';

export const MINE_CONFIG = {
    BACKGROUNDS: {
        mine: Mine,
    },
    PARTICLES: {
        paper: PaperParticle,
        coal: CoalParticle,
    },
    SOUNDS: {
        error: ErrorSound,
        bong: BongSound,
    }
};