import Phone from "../../assets/image/telephone/phone.png";
import TelephoneNormal from "../../assets/image/telephone/telephone1.png";
import TelephoneRing1 from "../../assets/image/telephone/telephone2.png";
import TelephoneRing2 from "../../assets/image/telephone/telephone3.png";
import TelephoneRing3 from "../../assets/image/telephone/telephone4.png";

import Button1Normal from "../../assets/image/telephone/button/button1.png";
import Button1Hovered from "../../assets/image/telephone/button/button2.png";
import Button1Clicked from "../../assets/image/telephone/button/button3.png";

import Button2Normal from "../../assets/image/telephone/button/button4.png";
import Button2Hovered from "../../assets/image/telephone/button/button5.png";
import Button2Clicked from "../../assets/image/telephone/button/button6.png";

import Button3Normal from "../../assets/image/telephone/button/button7.png";
import Button3Hovered from "../../assets/image/telephone/button/button8.png";
import Button3Clicked from "../../assets/image/telephone/button/button9.png";

import Button4Normal from "../../assets/image/telephone/button/button10.png";
import Button4Hovered from "../../assets/image/telephone/button/button11.png";
import Button4Clicked from "../../assets/image/telephone/button/button12.png";

import Button5Normal from "../../assets/image/telephone/button/button13.png";
import Button5Hovered from "../../assets/image/telephone/button/button14.png";
import Button5Clicked from "../../assets/image/telephone/button/button15.png";

import Button6Normal from "../../assets/image/telephone/button/button16.png";
import Button6Hovered from "../../assets/image/telephone/button/button17.png";
import Button6Clicked from "../../assets/image/telephone/button/button18.png";

import Button7Normal from "../../assets/image/telephone/button/button19.png";
import Button7Hovered from "../../assets/image/telephone/button/button20.png";
import Button7Clicked from "../../assets/image/telephone/button/button21.png";

import Button8Normal from "../../assets/image/telephone/button/button22.png";
import Button8Hovered from "../../assets/image/telephone/button/button23.png";
import Button8Clicked from "../../assets/image/telephone/button/button24.png";

import Button9Normal from "../../assets/image/telephone/button/button25.png";
import Button9Hovered from "../../assets/image/telephone/button/button26.png";
import Button9Clicked from "../../assets/image/telephone/button/button27.png";

import ButtonDelNormal from "../../assets/image/telephone/button/button28.png";
import ButtonDelHovered from "../../assets/image/telephone/button/button29.png";
import ButtonDelClicked from "../../assets/image/telephone/button/button30.png";

import ButtonCallNormal from "../../assets/image/telephone/button/button31.png";
import ButtonCallHovered from "../../assets/image/telephone/button/button32.png";
import ButtonCallClicked from "../../assets/image/telephone/button/button33.png";

import TelephoneRingSound from "../../assets/sound/telephone-1.mp3";
import TextBlipSound from "../../assets/sound/default-sound.mp3";
import KeypadSound from "../../assets/sound/keypad.mp3";

export const TELEPHONE = {
  MAIN: {
    base: Phone,
    idle: TelephoneNormal,
    ringing: [TelephoneRing1, TelephoneRing2, TelephoneRing3],
  },
  BUTTONS: {
    1: { normal: Button1Normal, hover: Button1Hovered, active: Button1Clicked },
    2: { normal: Button2Normal, hover: Button2Hovered, active: Button2Clicked },
    3: { normal: Button3Normal, hover: Button3Hovered, active: Button3Clicked },
    4: { normal: Button4Normal, hover: Button4Hovered, active: Button4Clicked },
    5: { normal: Button5Normal, hover: Button5Hovered, active: Button5Clicked },
    6: { normal: Button6Normal, hover: Button6Hovered, active: Button6Clicked },
    7: { normal: Button7Normal, hover: Button7Hovered, active: Button7Clicked },
    8: { normal: Button8Normal, hover: Button8Hovered, active: Button8Clicked },
    9: { normal: Button9Normal, hover: Button9Hovered, active: Button9Clicked },
    delete: { normal: ButtonDelNormal, hover: ButtonDelHovered, active: ButtonDelClicked },
    call: { normal: ButtonCallNormal, hover: ButtonCallHovered, active: ButtonCallClicked },
  },
  SOUNDS: {
    ring: TelephoneRingSound,
    blip: TextBlipSound,
    keypad: KeypadSound,
  }
};