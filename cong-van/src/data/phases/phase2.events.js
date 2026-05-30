import { EFFECT_STATS, FLAG } from "../stats";
import { IMAGES, MAILS, SOUNDS, CHARACTER_NAMES } from "../characters";
import { NEWS_EVENTS } from "./news";

const NAMES = CHARACTER_NAMES;
const E = EFFECT_STATS;

const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;
const MAIL = MAILS;

export const PHASE2_EVENTS = Object.freeze({
  // --- MAIL: LỜI MỜI GIA NHẬP (KÍCH HOẠT FLAG) ---
  EV_P2_CLARA_INVITATION: {
    EventID: "EV_P2_CLARA_INVITATION",
    MailsList: [
      {
        id: "mail-clara-02",
        title: "LỜI MỜI GIA NHẬP HỘI ĐỒNG",
        content: "Patrick,\n\nSau những gì ngài đã làm, tôi tin ngài từ lâu đã chán ngấy lũ Cartel rồi. Chúng tôi có một cuộc họp bí mật tối nay để bàn về kế hoạch thay đổi thực sự tại Theodore. Ngài có dám đến không?\n\n- Clara Voss",
        normalImg: MAIL.MAIL_2.NORMAL,
        hoverImg: MAIL.MAIL_2.HOVER,
        choices: [
          {
            text: "* Chấp nhận lời đề nghị *",
            flagAction: { type: "SET_FLAG", flag: FLAG.JOINED_THE_REVOLUTION, value: true },
            effect: { [E.HAPPINESS]: 20 }
          },
          {
            text: "* Vứt lá thư vào sọt rác *",
            flagAction: { type: "SET_FLAG", flag: FLAG.JOINED_THE_REVOLUTION, value: false },
            effect: { [E.HAPPINESS]: -10 }
          }
        ]
      }
    ]
  },

  // --- CLARA: CUỘC GỌI BÍ MẬT SAU KHI GIA NHẬP ---
  EV_P2_CLARA_FOLLOWUP: {
    EventID: "EV_P2_CLARA_FOLLOWUP",
    // Điều kiện: Chỉ kích hoạt nếu người chơi đã gia nhập cách mạng
    requiredFlag: FLAG.JOINED_THE_REVOLUTION, 
    Telephone: {
      senderName: NAMES.CLARA_VOSS, // Giả sử bạn có tên Clara trong CHARACTER_NAMES
      senderImage: IMG.CLARA_VOSS,
      senderBlip: SFX.CLARA_VOSS,
      senderText: [
        "Patrick, tôi rất mừng vì ngài đã đến buổi họp tối qua.",
        "Giờ đây, ngài không còn là một quản đốc đơn độc nữa. Chúng ta đang bắt đầu xây dựng mạng lưới đầu tiên ngay bên trong lòng mỏ."
      ],
      choices: [
        {
          text: "Tôi đã sẵn sàng nhận nhiệm vụ.",
          effect: { [E.HAPPINESS]: 10 },
        },
        {
          text: "Mọi việc diễn ra quá nhanh, tôi cần cẩn trọng.",
          effect: { [E.HAPPINESS]: 0 },
        }
      ]
    }
  },

  // --- JOHN REED: GIAO NHIỆM VỤ ĐẦU TIÊN ---
  EV_P2_JOHN_REED_MISSION: {
    EventID: "EV_P2_JOHN_REED_MISSION",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    Telephone: {
      senderName: NAMES.JOHN_REED, // Giả định có trong CHARACTER_NAMES
      senderImage: IMG.JOHN_REED,
      senderBlip: SFX.JOHN_REED,
      senderText: [
        "Patrick, tôi là John Reed. Clara đã nói rất nhiều về ngài.",
        "Chúng tôi cần thiết lập một tuyến tiếp tế bí mật cho những công nhân đình công. Điều này cần rất nhiều than, vốn và nhân lực để luân chuyển.",
        "Ngài dám hy sinh kho dự trữ để nuôi dưỡng ngọn lửa này chứ?"
      ],
      choices: [
        {
          text: "Tôi chấp nhận: Cung cấp 50.000 than, 100.000 vốn và 200 nhân lực.",
          effect: { 
            [E.COAL]: -50000, 
            [E.ECONOMY]: -100000, 
            [E.RESOURCE]: -200, 
            [E.HAPPINESS]: 30 
          },
          flagAction: { type: "SET_FLAG", flag: FLAG.MISSION_COAL_DELIVERY, value: true }
        },
        {
          text: "Chưa phải lúc. Những yêu cầu này quá cực đoan.",
          effect: { [E.HAPPINESS]: -20 },
        }
      ]
    }
  },

  // --- MIRA: GIÁO DỤC TƯ TƯỞNG ---
  EV_P2_MIRA_IDEOLOGY: {
    EventID: "EV_P2_MIRA_IDEOLOGY",
    Telephone: {
      senderName: NAMES.MIRA_VOLKOV,
      senderImage: IMG.MIRA_VOLKOV,
      senderBlip: SFX.MIRA_VOLKOV,
      senderText: [
        "Patrick, tôi đã nghe về lá thư của Clara.",
        "Ngài nên biết, cuộc chiến này không chỉ là than hay lương, mà là quyền làm chủ giá trị mà chúng ta tạo ra."
      ],
      choices: [
        {
          text: "Tôi đang dần hiểu ra điều đó.",
          effect: { [E.HAPPINESS]: 10 },
        },
        {
          text: "Tôi chỉ quan tâm đến sự ổn định của mỏ.",
          effect: { [E.HAPPINESS]: -10 },
        }
      ]
    }
  },

  // --- WHITMORE: ĐẤU TRANH TƯ TƯỞNG (TẨY NÃO) ---
  EV_P2_WHITMORE_WARNING: {
    EventID: "EV_P2_WHITMORE_WARNING",
    Telephone: {
      senderName: NAMES.ALEXANDER_WHITMORE,
      senderImage: IMG.ALEXANDER_WHITMORE_SERIOUS,
      senderBlip: SFX.ALEXANDER_WHITMORE,
      senderText: [
        "Patrick, tôi nghe nói ngài dành quá nhiều thời gian nói chuyện với lũ công nhân.",
        "Hãy nhớ, trật tự xã hội được duy trì bởi sự phân cấp, không phải bởi sự bình đẳng viển vông."
      ],
      choices: [
        {
          text: "Ngài nói đúng, tôi sẽ tập trung vào sản xuất.",
          effect: { [E.ECONOMY]: 30, [E.HAPPINESS]: -20 },
        },
        {
          text: "Sự phân cấp đó đang giết chết chúng tôi.",
          effect: { [E.ECONOMY]: -20, [E.HAPPINESS]: 20 },
        }
      ]
    }
  }
});