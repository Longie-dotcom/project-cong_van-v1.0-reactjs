import AlexanderWhitmore from "../../assets/image/character/alexander-whitmore.png";
import AlexanderWhitmoreSerious from "../../assets/image/character/alexander-whitmore-serious.png";
import BernardHale from "../../assets/image/character/bernard-hale.png";
import EleanorWentworth from "../../assets/image/character/eleanor-wentworth.png";
import ClaraVoss from "../../assets/image/character/mira-volkov.png";
import JonahReed from "../../assets/image/character/mira-volkov.png";
import MiraVolkov from "../../assets/image/character/mira-volkov.png";
import Elias from "../../assets/image/character/elias.png";
import EliasSad from "../../assets/image/character/elias-sad.png";
import EliasHappy from "../../assets/image/character/elias-happy.png";

import AlexanderWhitmoreSound from "../../assets/sound/character/alexander-whitmore.mp3";
import BernardHaleSound from "../../assets/sound/character/bernard-hale.mp3";
import EleanorWentworthSound from "../../assets/sound/character/eleanor-wentworth.mp3";
import ClaraVossSound from "../../assets/sound/character/clara-voss.mp3";
import JonahReedSound from "../../assets/sound/character/jonah-reed.mp3";
import MiraVolkovSound from "../../assets/sound/character/mira-volkov.mp3";
import EliasSound from "../../assets/sound/character/elias.mp3";

export const CHARACTER_CONFIG = Object.freeze({
  ALEXANDER_WHITMORE: {
    name: "Alexander Whitmore",
    sound: AlexanderWhitmoreSound,
    images: { default: AlexanderWhitmore, serious: AlexanderWhitmoreSerious }
  },
  BERNARD_HALE: {
    name: "Bernard Hale",
    sound: BernardHaleSound,
    images: { default: BernardHale }
  },
  ELEANOR_WENTWORTH: {
    name: "Eleanor Wentworth",
    sound: EleanorWentworthSound,
    images: { default: EleanorWentworth }
  },
  CLARA_VOSS: {
    name: "Clara Voss",
    sound: ClaraVossSound,
    images: { default: ClaraVoss }
  },
  JONAH_REED: {
    name: "Jonah Reed",
    sound: JonahReedSound,
    images: { default: JonahReed }
  },
  MIRA_VOLKOV: {
    name: "Mira Volkov",
    sound: MiraVolkovSound,
    images: { default: MiraVolkov }
  },
  ELIAS: {
    name: "Elias",
    sound: EliasSound,
    images: { default: Elias, sad: EliasSad, happy: EliasHappy }
  }
});
