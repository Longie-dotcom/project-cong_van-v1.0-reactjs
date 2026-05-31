import { STATS } from "../stats";
import { IMAGES, SOUNDS, NAMES } from "../assets/characters";
import { NEWS_EVENTS } from "../assets/newspaper";
import { MAILS } from "../assets/mail";

export const PHASE1_EVENTS = Object.freeze({
  // --- NHÂN TÍNH ---
  EV_P1_ELIAS_TALK: {
    EventID: "EV_P1_ELIAS_TALK",
    Telephone: {
      senderName: NAMES.ELIAS,
      senderImage: IMAGES.ELIAS_SAD,
      senderBlip: SOUNDS.ELIAS,
      senderText: [
        "Cha ơi, tối nay cha có về ăn bánh táo không?",
        "Cha nhớ về sớm nhé."
      ],
      choices: [
        { 
          text: "Cha sẽ về sớm.", 
          effect: { [STATS.HAPPINESS]: 5 } 
        },
        { 
          text: "Cha còn nhiều việc phải làm.", 
          effect: { [STATS.HAPPINESS]: -5 } 
        }
      ]
    }
  },

  // --- SỰ ÁP BỨC CỦA CARTEL ---
  EV_P1_CARTEL_PRESSURE: {
    EventID: "EV_P1_CARTEL_PRESSURE",
    Telephone: {
      senderName: NAMES.ALEXANDER_WHITMORE,
      senderImage: IMAGES.ALEXANDER_WHITMORE_SERIOUS,
      senderBlip: SOUNDS.ALEXANDER_WHITMORE,
      senderText: [
        "Patrick, tôi nghe báo cáo rằng sản lượng than đang chững lại.",
        "Nhớ kỹ, lò nung tắt là trật tự tắt. Đừng để lòng trắc ẩn làm chậm guồng quay của Theodore."
      ],
      choices: [
        { 
          text: "Tôi sẽ ép công nhân làm thêm giờ.", 
          effect: { [STATS.ECONOMY]: 20, [STATS.HAPPINESS]: -15 }, 
        },
        { 
          text: "Hệ thống đang quá tải, cần thêm thời gian.", 
          effect: { [STATS.ECONOMY]: -10, [STATS.HAPPINESS]: 5 }, 
        }
      ]
    }
  },

  // --- MIRA VOLKOV: ĐẤU TRANH KINH TẾ ---
  EV_P1_WORKER_PLEA: {
    EventID: "EV_P1_WORKER_PLEA",
    Telephone: {
      senderName: NAMES.MIRA_VOLKOV,
      senderImage: IMAGES.MIRA_VOLKOV,
      senderBlip: SOUNDS.MIRA_VOLKOV,
      senderText: [
        "Ngài Patrick, khu nhà tập thể phía Đông đã đóng băng.",
        "Tôi không cầu xin tiền, tôi cầu xin số than dư thừa để lũ trẻ không chết cóng đêm nay."
      ],
      choices: [
        { 
          text: "Cấp than cho họ.", 
          effect: { [STATS.COAL]: -25000, [STATS.HAPPINESS]: 10 }, 
        },
        { 
          text: "Tôi không có thẩm quyền.", 
          effect: { [STATS.COAL]: 0, [STATS.HAPPINESS]: -20, [STATS.RESOURCE]: -100 }, 
          triggeredNews: NEWS_EVENTS.P1_TRAGEDY_DORMITORY 
        }
      ]
    }
  },

  EV_P1_MIRA_WAGE_CUT: {
    EventID: "EV_P1_MIRA_WAGE_CUT",
    Telephone: {
      senderName: NAMES.MIRA_VOLKOV,
      senderImage: IMAGES.MIRA_VOLKOV,
      senderBlip: SOUNDS.MIRA_VOLKOV,
      senderText: [
        "Whitmore vừa ra lệnh cắt 15% lương để bù vào chi phí bảo trì.",
        "Mọi người đang rất phẫn nộ. Họ không đủ mua nhu yếu phẩm."
      ],
      choices: [
        {
          text: "Giữ nguyên lương (Dùng quỹ quản lý bù vào).",
          effect: { [STATS.ECONOMY]: -50000, [STATS.HAPPINESS]: 15 },
        },
        {
          text: "Thi hành lệnh cắt giảm.",
          effect: { [STATS.ECONOMY]: 30, [STATS.HAPPINESS]: -20, [STATS.RESOURCE]: -50 },
          triggeredNews: NEWS_EVENTS.P1_WORKER_UNREST
        },
      ]
    }
  },

  EV_P1_MIRA_SAFETY_GEAR: {
    EventID: "EV_P1_MIRA_SAFETY_GEAR",
    Telephone: {
      senderName: NAMES.MIRA_VOLKOV,
      senderImage: IMAGES.MIRA_VOLKOV,
      senderBlip: SOUNDS.MIRA_VOLKOV,
      senderText: [
        "Lại có thêm người bị thương do thiết bị bảo hộ quá cũ kỹ.",
        "Chúng tôi cần ngài phê duyệt ngân sách để nhập khẩu thiết bị mới."
      ],
      choices: [
        {
          text: "Phê duyệt ngân sách an toàn lao động.",
          effect: { [STATS.ECONOMY]: -40000, [STATS.HAPPINESS]: 20 },
        },
        {
          text: "Bác bỏ, chờ đến kỳ kiểm tra định kỳ.",
          effect: { [STATS.ECONOMY]: 0, [STATS.HAPPINESS]: -20, [STATS.RESOURCE]: -30 },
        }
      ]
    }
  },

  EV_P1_MIRA_SHIFT_EXTEND: {
    EventID: "EV_P1_MIRA_SHIFT_EXTEND",
    Telephone: {
      senderName: NAMES.MIRA_VOLKOV,
      senderImage: IMAGES.MIRA_VOLKOV,
      senderBlip: SOUNDS.MIRA_VOLKOV,
      senderText: [
        "Whitmore muốn tăng ca làm việc thêm 4 tiếng mỗi ngày.",
        "Công nhân đã kiệt sức. Họ không phải là những cỗ máy."
      ],
      choices: [
        {
          text: "Từ chối tăng ca.",
          effect: { [STATS.ECONOMY]: -85000, [STATS.HAPPINESS]: 25 },
        },
        {
          text: "Tôi không quan tâm, đây là yêu cầu từ thượng tầng.",
          effect: { [STATS.ECONOMY]: 0, [STATS.HAPPINESS]: -25, [STATS.RESOURCE]: -40 },
        }
      ]
    }
  },

  // --- SỰ KẾT NỐI ---
  EV_P1_CLARA_CONTACT: {
    EventID: "EV_P1_CLARA_CONTACT",
    MailsList: [
      {
        id: "mail-clara-01",
        title: "THƯ TỪ CLARA VOSS",
        content: "Ngài Patrick,\n\nTôi biết ngài đang ở thế khó. Nhưng sự im lặng trước cái lạnh này không phải là cách quản lý. Chúng tôi có những người muốn thay đổi tình thế này. Ngài có muốn lắng nghe không?",
        normalImg: MAILS.MAIL_1.NORMAL,
        hoverImg: MAILS.MAIL_1.HOVER,
        choices: [
          {
            text: "* Đã đọc *",
            effect: { [STATS.HAPPINESS]: 0 }
          }
        ]
      },
    ]
  },
});