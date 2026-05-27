import AlexanderWhitmore from "../assets/image/character/alexander-whitmore.png";
import AlexanderWhitmoreSerious from "../assets/image/character/alexander-whitmore-serious.png";
import BernardHale from "../assets/image/character/bernard-hale.png";
import EleanorWentworth from "../assets/image/character/eleanor-wentworth.png";
import ClaraVoss from "../assets/image/button/reorganize1.png";
import JonahReed from "../assets/image/button/reorganize2.png";
import MiraVolkov from "../assets/image/character/mira-volkov.png";
import Elias from "../assets/image/character/elias.png";
import EliasSad from "../assets/image/character/elias-sad.png";
import EliasHappy from "../assets/image/character/elias-happy.png";

import AlexanderWhitmoreSound from "../assets/sound/alexander-whitmore.mp3";
import BernardHaleSound from "../assets/sound/bernard-hale.mp3";
import EleanorWentworthSound from "../assets/sound/eleanor-wentworth.mp3";
import ClaraVossSound from "../assets/sound/alexander-whitmore.mp3"; // change later
import JonahReedSound from "../assets/sound/alexander-whitmore.mp3"; // change later
import MiraVolkovSound from "../assets/sound/mira-volkov.mp3";
import EliasSound from "../assets/sound/elias.mp3";

import MailNormalImage1 from "../assets/mail/mail1.png";
import MailHoverImage1 from "../assets/mail/mail2.png";
import MailNormalImage2 from "../assets/mail/mail3.png";
import MailHoverImage2 from "../assets/mail/mail4.png";
import MailNormalImage3 from "../assets/mail/mail5.png";
import MailHoverImage3 from "../assets/mail/mail6.png";
import MailNormalImage4 from "../assets/mail/mail7.png";
import MailHoverImage4 from "../assets/mail/mail8.png";

export const IMAGES = Object.freeze({
  CHARACTERS: Object.freeze({
    ALEXANDER_WHITMORE: AlexanderWhitmore,
    ALEXANDER_WHITMORE_SERIOUS: AlexanderWhitmoreSerious,
    BERNARD_HALE: BernardHale,
    ELEANOR_WENTWORTH: EleanorWentworth,
    MIRA_VOLKOV: MiraVolkov,
    ELIAS: Elias,
    ELIAS_SAD: EliasSad,
    ELIAS_HAPPY: EliasHappy,
  }),
  BUTTONS: Object.freeze({
    CLARA_VOSS: ClaraVoss,
    JONAH_REED: JonahReed,
  }),
});

export const SOUNDS = Object.freeze({
  ALEXANDER_WHITMORE: AlexanderWhitmoreSound,
  BERNARD_HALE: BernardHaleSound,
  ELEANOR_WENTWORTH: EleanorWentworthSound,
  CLARA_VOSS: ClaraVossSound,
  JONAH_REED: JonahReedSound,
  MIRA_VOLKOV: MiraVolkovSound,
  ELIAS: EliasSound,
});

export const MAILS = Object.freeze({
  MAIL_1: Object.freeze({
    NORMAL: MailNormalImage1,
    HOVER: MailHoverImage1,
  }),
  MAIL_2: Object.freeze({
    NORMAL: MailNormalImage2,
    HOVER: MailHoverImage2,
  }),
  MAIL_3: Object.freeze({
    NORMAL: MailNormalImage3,
    HOVER: MailHoverImage3,
  }),
  MAIL_4: Object.freeze({
    NORMAL: MailNormalImage4,
    HOVER: MailHoverImage4,
  }),
});
