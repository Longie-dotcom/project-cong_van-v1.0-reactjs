import { STATS, FLAG } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";
import { MAIL_CONFIG } from "../assets/mails";

export const PHASE2_EVENTS = Object.freeze({
  EV_P2_CLARA_INVITATION: {
    EventID: "EV_P2_CLARA_INVITATION",
    MailsList: [
      {
        id: "mail-clara-02",
        title: "LỜI MỜI GIA NHẬP HỘI ĐỒNG",
        content: "Patrick,\n\nSau những gì ngài đã làm, tôi tin ngài từ lâu đã chán ngấy lũ Cartel rồi. Chúng tôi có một cuộc họp bí mật tối nay để bàn về kế hoạch thay đổi thực sự tại Theodore. Ngài có dám đến không?\n\n- Clara Voss",
        normalImg: MAIL_CONFIG.ITEMS.mail_2.normal,
        hoverImg: MAIL_CONFIG.ITEMS.mail_2.hover,
        choices: [
          {
            text: "* Chấp nhận lời đề nghị *",
            effect: { [STATS.HAPPINESS]: 20 },
            flagAction: { flag: FLAG.JOINED_THE_REVOLUTION, value: true }
          },
          {
            text: "* Vứt lá thư vào sọt rác *",
            effect: { [STATS.HAPPINESS]: -10 },
            flagAction: { flag: FLAG.JOINED_THE_REVOLUTION, value: false }
          }
        ]
      }
    ]
  },

  EV_P2_BERNARD_WARNING: {
    EventID: "EV_P2_BERNARD_WARNING",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
      senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
      senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
      senderText: [
        "Tôi nghe nói anh đang dành nhiều thời gian cho đám công nhân.",
        "Đừng để vài câu chuyện thương hại làm ảnh hưởng đến công việc."
      ],
      choices: [
        {
          text: "Tôi vẫn hoàn thành nhiệm vụ của mình.",
          effect: {}
        }
      ]
    }
  },

  EV_P2_ELEANOR_SUSPICION: {
    EventID: "EV_P2_ELEANOR_SUSPICION",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
      senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
      senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
      senderText: [
        "Có tin đồn về những cuộc gặp bí mật sau giờ làm.",
        "Nếu phát hiện điều gì bất thường, tôi mong anh sẽ báo cáo."
      ],
      choices: [
        {
          text: "Tôi sẽ lưu ý.",
          effect: {}
        }
      ]
    }
  },

  EV_P2_ALEXANDER_THREAT: {
    EventID: "EV_P2_ALEXANDER_THREAT",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Một số quản đốc trước đây đã chọn nhầm phe.",
        "Tôi tin anh đủ thông minh để không lặp lại sai lầm đó."
      ],
      choices: [
        {
          text: "Tôi hiểu ý ngài.",
          effect: {}
        }
      ]
    }
  },

  EV_P2_CLARA_SUPPORT: {
    EventID: "EV_P2_CLARA_SUPPORT",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    MailsList: [
      {
        id: "mail-clara-03",
        title: "THƯ TỪ CLARA VOSS",
        content:
          `Patrick,
          Họ đã bắt đầu chú ý đến ngài.
          Điều đó có nghĩa những gì chúng ta làm đang tạo ra ảnh hưởng.
          Hãy cẩn thận.
          - Clara Voss`,
        normalImg: MAIL_CONFIG.ITEMS.mail_1.normal,
        hoverImg: MAIL_CONFIG.ITEMS.mail_2.hover,
        choices: [
          {
            text: "* Đã đọc *",
            effect: {}
          }
        ]
      }
    ]
  },

  EV_P2_JONAH_FIRST_MISSION: {
    EventID: "EV_P2_JONAH_FIRST_MISSION",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    MailsList: [
      {
        id: "mail-jonah-01",
        title: "NHIỆM VỤ ĐẦU TIÊN",
        content:
          `Patrick,
          Chúng tôi cần chuyển vài cái tên giữa các khu mỏ.
          Không phải than.
          Không phải tiền.
          Chỉ là vài cái tên.
          Ngài có sẵn lòng giúp chúng tôi không?
          - Jonah Reed`,
        normalImg: MAIL_CONFIG.ITEMS.mail_1.normal,
        hoverImg: MAIL_CONFIG.ITEMS.mail_2.hover,
        choices: [
          {
            text: "* Hỗ trợ họ * (-2000 Nhân lực)",
            effect: { [STATS.HAPPINESS]: 10, [STATS.RESOURCE]: -2000 },
            triggeredNews: {
              title: "TIN ĐỒN VỀ MẠNG LƯỚI CÔNG NHÂN LAN RỘNG",
              content: "Các báo cáo nội bộ cho thấy nhiều nhóm công nhân lập ra các cuộc họp ngoài giờ làm."
            }
          },
        ]
      }
    ]
  },

  EV_P2_MIRA_SON: {
    EventID: "EV_P2_MIRA_SON",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Con trai tôi lại bị sốt đêm qua.",
        "Bác sĩ bảo nó cần được giữ ấm, nhưng than thì ngày càng đắt."
      ],
      choices: [
        {
          text: "Tôi rất tiếc.",
          effect: {}
        }
      ]
    }
  },

  EV_P2_MIRA_WIDOW: {
    EventID: "EV_P2_MIRA_WIDOW",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Vợ của Ivan vẫn ngồi trước cửa khu tập thể mỗi tối.",
        "Đứa bé của họ vẫn nghĩ cha nó đang làm ca đêm."
      ],
      choices: [
        {
          text: "Tôi hiểu.",
          effect: {}
        }
      ]
    }
  },

  EV_P2_MIRA_COAL: {
    EventID: "EV_P2_MIRA_COAL",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Có người dành cả đời đào than.",
        "Nhưng vẫn không đủ tiền mua than cho gia đình mình."
      ],
      choices: [
        {
          text: "...",
          effect: {}
        }
      ]
    }
  },

  EV_P2_BERNARD_PRAISE: {
    EventID: "EV_P2_BERNARD_PRAISE",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
      senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
      senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
      senderText: [
        "Tôi biết anh là người hiểu chuyện.",
        "Theodore cần những quản đốc biết đặt kết quả lên trên cảm xúc."
      ],
      choices: [
        {
          text: "Cảm ơn ngài.",
          effect: {}
        }
      ]
    }
  },

  EV_P2_REVOLUTION_THREAT: {
    EventID: "EV_P2_REVOLUTION_THREAT",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    MailsList: [
      {
        id: "mail-revolution-01",
        title: "THƯ KHÔNG KÝ TÊN",
        content:
          `Patrick,
          Ông đã có cơ hội để lắng nghe.
          Giờ đến lượt Cartel phải lắng nghe chúng tôi.
          Khi tiếng còi mỏ vang lên vào ngày đó,
          sẽ không còn ai bước xuống hầm nữa.
          Và khi than ngừng chảy,
          Theodore cũng sẽ tắt từ lâu.`,
        normalImg: MAIL_CONFIG.ITEMS.mail_1.normal,
        hoverImg: MAIL_CONFIG.ITEMS.mail_2.hover,
        choices: [
          {
            text: "* Gấp lá thư lại *",
            effect: { [STATS.RESOURCE]: -5000 },
            triggeredNews: {
              title: "LỜI KÊU GỌI ĐÌNH CÔNG XUẤT HIỆN TẠI NHIỀU KHU MỎ",
              content: "Hơn 5000 nhân công kêu gọi một cuộc đình công quy mô lớn."
            }
          }
        ]
      }
    ]
  }
});