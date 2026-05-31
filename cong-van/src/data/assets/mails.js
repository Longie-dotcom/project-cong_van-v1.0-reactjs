import MailNormalImage1 from "../../assets/image/mail/mail1.png";
import MailHoverImage1 from "../../assets/image/mail/mail2.png";
import MailNormalImage2 from "../../assets/image/mail/mail3.png";
import MailHoverImage2 from "../../assets/image/mail/mail4.png";
import MailNormalImage3 from "../../assets/image/mail/mail5.png";
import MailHoverImage3 from "../../assets/image/mail/mail6.png";
import MailNormalImage4 from "../../assets/image/mail/mail7.png";
import MailHoverImage4 from "../../assets/image/mail/mail8.png";

import OpenMailSound from '../../assets/sound/open-mail.mp3';

export const MAIL_CONFIG = Object.freeze({
  ITEMS: {
    mail_1: { normal: MailNormalImage1, hover: MailHoverImage1 },
    mail_2: { normal: MailNormalImage2, hover: MailHoverImage2 },
    mail_3: { normal: MailNormalImage3, hover: MailHoverImage3 },
    mail_4: { normal: MailNormalImage4, hover: MailHoverImage4 },
  },
  SOUNDS: {
    rustle: OpenMailSound,
    open: OpenMailSound
  }
});