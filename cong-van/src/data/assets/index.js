import { NAMES, SOUNDS, IMAGES } from './characters';
import { UPGRADE_DATA } from './paper';
import { PHASES } from '../phases/phases';
import { REORGANIZE_BUTTON } from './button';

import Logo from '../../assets/image/frame/logo.png';
import Avatar from '../../assets/image/frame/avatar.gif';
import Desk from "../../assets/image/frame/desk.png";

import TabSwitchSound from "../../assets/sound/tab-switch.mp3";
import OpenMailSound from "../../assets/sound/open-mail.mp3";
import StampSound from '../../assets/sound/stamp.mp3';

export const BOOT_DATA = Object.freeze({
    STAMP_SOUND: StampSound,
    OPEN_MAIL_SOUND: OpenMailSound,
    AVATAR: Avatar,
    ACTIVATE_TITLE: "- Nhấn để tiếp tục -",
    AUTHORS: "Một sản phẩm thuộc nhóm 5 - SE1839",
    INTRODUCTION: "Dự án phục vụ môn Triết học Mác - Lênin (MLN111)",
})

export const INTRO_DATA = Object.freeze({
    LOGO: Logo,
    CHARACTERS: {
        BERNARD: { name: NAMES.BERNARD_HALE, img: IMAGES.BERNARD_HALE, sound: SOUNDS.BERNARD_HALE },
        ALEXANDER: { name: NAMES.ALEXANDER_WHITMORE, img: IMAGES.ALEXANDER_WHITMORE, sound: SOUNDS.ALEXANDER_WHITMORE },
        ELEANOR: { name: NAMES.ELEANOR_WENTWORTH, img: IMAGES.ELEANOR_WENTWORTH, sound: SOUNDS.ELEANOR_WENTWORTH },
    },
    START_TITLE: "Bắt đầu",
    ACTIVATE_TITLE: "- Nhấn để tiếp tục -",
    DIALOGUES: [
        {
            charKey: "BERNARD",
            text: "Chúc mừng ngài Patrick. Quốc hội đã đặt niềm tin vào ngài.",
        },
        {
            charKey: "ALEXANDER",
            text: 'Đừng để cảm xúc cản trở "lợi ích quốc gia". Than đá phải được đưa vào các lò luyện thép trước khi quá muộn.',
        },
        {
            charKey: "ELEANOR",
            text: 'Mùa đông năm nay sẽ rất khắc nghiệt... người dân cần một nhà lãnh đạo dám thực hiện những "hy sinh cần thiết".',
        },
    ]
});

export const GAME_DATA = Object.freeze({
    PHASES: PHASES,
    UPGRADE_DATA: UPGRADE_DATA,
    REORGANIZE_BUTTON: REORGANIZE_BUTTON,
    DESK: Desk,
    OPEN_MAIL_SOUND: OpenMailSound,
    TAB_SWITCH_SOUND: TabSwitchSound,
});