import NoteBackground from '../../assets/image/frame/note.png';
import TabI1 from '../../assets/image/paper/tab/paper-tab-i1.png';
import TabI2 from '../../assets/image/paper/tab/paper-tab-i2.png';
import TabII1 from '../../assets/image/paper/tab/paper-tab-ii1.png';
import TabII2 from '../../assets/image/paper/tab/paper-tab-ii2.png';

import TabSwitchSound from './../../assets/sound/tab-switch.mp3';
import PaperRustleSound from "../../assets/sound/open-mail.mp3";

export const NOTE_CONFIG = Object.freeze({
  UI: {
    background: NoteBackground,
    tabs: {
      I: { normal: TabI1, hover: TabI2 },
      II: { normal: TabII1, hover: TabII2 },
    }
  },

  SOUNDS: {
    tab_switch: TabSwitchSound,
    rustle: PaperRustleSound
  }
});