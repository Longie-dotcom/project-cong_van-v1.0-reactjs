import { STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";
import { MAIL_CONFIG } from "../assets/mails";

export const PHASE1_EVENTS = Object.freeze({
  
  // --- NHÂN TÍNH ---
  EV_P1_ELIAS_TALK: {
    EventID: "EV_P1_ELIAS_TALK",
    Telephone: {
      senderName: CHARACTER_CONFIG.ELIAS.name,
      senderImage: CHARACTER_CONFIG.ELIAS.images.sad,
      senderBlip: CHARACTER_CONFIG.ELIAS.sound,
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
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Patrick, tôi nghe báo cáo rằng sản lượng than đang chững lại.",
        "Nhớ kỹ, lò nung tắt là trật tự tắt. Đừng để lòng trắc ẩn làm chậm guồng quay của Theodore."
      ],
      choices: [
        { 
          text: "Tôi sẽ ép công nhân làm thêm giờ.", 
          effect: { [STATS.ECONOMY]: 20, [STATS.HAPPINESS]: -15 } 
        },
        { 
          text: "Hệ thống đang quá tải, cần thêm thời gian.", 
          effect: { [STATS.ECONOMY]: -10, [STATS.HAPPINESS]: 5 } 
        }
      ]
    }
  },

  // --- MIRA VOLKOV: ĐẤU TRANH KINH TẾ ---
  EV_P1_WORKER_PLEA: {
    EventID: "EV_P1_WORKER_PLEA",
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Ngài Patrick, khu nhà tập thể phía Đông đã đóng băng.",
        "Tôi cầu xin số than dư thừa để lũ trẻ không chết cóng."
      ],
      choices: [
        { 
          text: "Cấp than cho họ.", 
          effect: { [STATS.COAL]: -25000, [STATS.HAPPINESS]: 10 } 
        },
        { 
          text: "Tôi không có thẩm quyền.", 
          effect: { [STATS.COAL]: 0, [STATS.HAPPINESS]: -20, [STATS.RESOURCE]: -100 },
          triggeredNews: {
            title: "THẢM KỊCH ĐÔNG CỨNG TẠI KHU TẬP THỂ PHÍA ĐÔNG",
            content: "Hơn 100 người đã chết cóng sau khi Cartel cắt toàn bộ than sưởi để ưu tiên lò nung thép."
          }
        }
      ]
    }
  },

  EV_P1_MIRA_WAGE_CUT: {
    EventID: "EV_P1_MIRA_WAGE_CUT",
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Whitmore vừa ra lệnh cắt 15% lương để bù vào chi phí bảo trì.",
        "Mọi người đang rất phẫn nộ."
      ],
      choices: [
        { 
          text: "Giữ nguyên lương.", 
          effect: { [STATS.ECONOMY]: -50000, [STATS.HAPPINESS]: 15 } 
        },
        { 
          text: "Thi hành lệnh cắt giảm.", 
          effect: { [STATS.ECONOMY]: 30, [STATS.HAPPINESS]: -20 },
          triggeredNews: {
            title: "LÀN SÓNG PHÀN NÀN VỀ CẮT GIẢM LƯƠNG",
            content: "Quyết định cắt 15% lương của Ban Quản trị đã gây ra làn sóng phẫn nộ."
          }
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
        content: "Ngài Patrick, tôi biết ngài đang ở thế khó. Chúng tôi có những người muốn thay đổi tình thế này.",
        normalImg: MAIL_CONFIG.ITEMS.mail_1.normal,
        hoverImg: MAIL_CONFIG.ITEMS.mail_1.hover,
        choices: [
          { 
            text: "* Đã đọc *", 
            effect: { [STATS.HAPPINESS]: 0 } 
          }
        ]
      }
    ]
  }
});