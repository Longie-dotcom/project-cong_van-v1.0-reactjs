import { CHARACTER_CONFIG } from './characters';
import { PAPER_CONFIG } from './paper';
import { BUTTON_CONFIG } from './buttons';
import { STATS } from './stats';
import { PHASES } from '../phases/phases';

import Logo from '../../assets/image/frame/logo.png';
import Avatar from '../../assets/image/frame/avatar.gif';
import Desk from "../../assets/image/frame/desk.png";

import TabSwitchSound from "../../assets/sound/tab-switch.mp3";
import StampSound from '../../assets/sound/stamp.mp3';

export const BOOT_DATA = Object.freeze({
    STAMP_SOUND: StampSound,
    OPEN_MAIL_SOUND: PAPER_CONFIG.UI.RUSTLE,
    AVATAR: Avatar,
    ACTIVATE_TITLE: "- Nhấn để tiếp tục -",
    AUTHORS: "Một sản phẩm thuộc nhóm 5 - SE1839",
    INTRODUCTION: "Dự án phục vụ môn Triết học Mác - Lênin (MLN111)",
})

export const INTRO_DATA = Object.freeze({
    LOGO: Logo,
    START_TITLE: "Bắt đầu",
    ACTIVATE_TITLE: "- Nhấn để tiếp tục -",
    CHARACTERS: {
        BERNARD: { 
            name: CHARACTER_CONFIG.BERNARD_HALE.name, 
            img: CHARACTER_CONFIG.BERNARD_HALE.images.default, 
            sound: CHARACTER_CONFIG.BERNARD_HALE.sound,
            dialogue: "Chúc mừng ngài Patrick. Quốc hội đã đặt niềm tin vào ngài."
        },
        ALEXANDER: { 
            name: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name, 
            img: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.default, 
            sound: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
            dialogue: 'Đừng để cảm xúc cản trở "lợi ích quốc gia". Than đá phải được đưa vào các lò luyện thép trước khi quá muộn.'
        },
        ELEANOR: { 
            name: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name, 
            img: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default, 
            sound: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
            dialogue: 'Mùa đông năm nay sẽ rất khắc nghiệt... người dân cần một nhà lãnh đạo dám thực hiện những "hy sinh cần thiết".'
        },
    },
    SEQUENCE: ["BERNARD", "ALEXANDER", "ELEANOR"]
});

export const GAME_DATA = Object.freeze({
    PHASES: PHASES,
    UPGRADE_DATA: PAPER_CONFIG.UPGRADES,
    STATS: STATS,
    REORGANIZE_BUTTON: BUTTON_CONFIG.REORGANIZE,
    DESK: Desk,
    PAPER_RUSTLE_SOUND: PAPER_CONFIG.SOUNDS.rustle,
    TAB_SWITCH_SOUND: TabSwitchSound,
});