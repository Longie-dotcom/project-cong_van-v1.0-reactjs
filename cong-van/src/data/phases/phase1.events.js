import { STATS, FLAG } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";
import { MAIL_CONFIG } from "../assets/mails";

export const PHASE1_EVENTS = Object.freeze({
  EV_P1_ELIAS_CALL: {
    EventID: "EV_P1_ELIAS_CALL",
    Telephone: {
      senderName: CHARACTER_CONFIG.ELIAS.name,
      senderImage: CHARACTER_CONFIG.ELIAS.images.sad,
      senderBlip: CHARACTER_CONFIG.ELIAS.sound,
      senderText: [
        "Cha ơi, tối nay cha có về không?",
        "Con để dành bánh táo cho cha."
      ],
      choices: [
        {
          text: "Cha sẽ cố về sớm.",
          effect: { [STATS.HAPPINESS]: 5 }
        },
        {
          text: "Cha còn nhiều việc phải làm.",
          effect: { [STATS.HAPPINESS]: -5 }
        }
      ]
    }
  },

  EV_P1_ALEXANDER_INTRO: {
    EventID: "EV_P1_ALEXANDER_INTRO",
    Telephone: {
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.default,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Patrick, lũ công nhân đang chậm lại.",
        "Tôi không quan tâm anh làm gì, chỉ tiêu than phải đạt được.",
      ],
      choices: [
        {
          text: "Tôi hiểu rồi.",
          effect: {}
        }
      ]
    }
  },

  // --- MIRA VOLKOV: ĐẤU TRANH KINH TẾ ---
  EV_P1_MIRA_COAL: {
    EventID: "EV_P1_MIRA_COAL",
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Khu tập thể phía Đông đang cạn than sưởi. Sẽ có vài chục người mất mạng",
        "Tôi xin ngài cứu họ."
      ],
      choices: [
        {
          text: "Cấp than. (-40000 Than)",
          effect: { [STATS.HAPPINESS]: 10, [STATS.COAL]: -40000 },
          flagAction: { flag: FLAG.WORKER_HELP_1, value: true }
        },
        {
          text: "Từ chối. (-20 Nhân lực)",
          effect: { [STATS.HAPPINESS]: -10, [STATS.RESOURCE]: -20 },
          flagAction: { flag: FLAG.WORKER_HELP_1, value: false },
          triggeredNews: {
            title: "THẢM KỊCH TẠI KHU TẬP THỂ PHÍA ĐÔNG",
            content: "Hơn 20 người đã chết cóng tại khu ký túc xá phía Đông"
          }
        }
      ]
    }
  },

  EV_P1_BERNARD_APPROVE: {
    EventID: "EV_P1_BERNARD_APPROVE",
    requiredFlag: FLAG.WORKER_HELP_1,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
      senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
      senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
      senderText: [
        "Tôi nghe khu tập thể phía đông vừa xảy ra vài tổn thất.",
        "Nhân công luôn có thể thay thế. Tiếp tục công việc của mình đi."
      ],
      choices: [
        {
          text: "Vâng thưa ngài.",
          effect: {}
        }
      ]
    }
  },

  EV_P1_BERNARD_DISAPPROVE: {
    EventID: "EV_P1_BERNARD_DISAPPROVE",
    requiredFlag: FLAG.WORKER_HELP_1,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
      senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
      senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
      senderText: [
        "Anh vừa phân phát than mà không xin phép à?",
        "Lòng trắc ẩn không tạo ra lợi nhuận đâu, Patrick."
      ],
      choices: [
        {
          text: "Tôi hiểu.",
          effect: {}
        },
        {
          text: "Họ thật sự cần số than đó.",
          effect: { [STATS.HAPPINESS]: 5 }
        }
      ]
    }
  },

  EV_P1_MIRA_WAGE: {
    EventID: "EV_P1_MIRA_WAGE",
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Cartel muốn cắt giảm lương công nhân.",
        "Tôi xin ngài nghĩ lại về quyết định đó của họ."
      ],
      choices: [
        {
          text: "Tôi sẽ giữ nguyên lương thưởng. (-50000 Tiền)",
          effect: { [STATS.HAPPINESS]: 10, [STATS.ECONOMY]: -50000 },
          flagAction: { flag: FLAG.WORKER_HELP_2, value: true }
        },
        {
          text: "Đó là lệnh của cấp trên. (+50000 Tiền)",
          effect: { [STATS.HAPPINESS]: -10, [STATS.ECONOMY]: 50000 },
          flagAction: { flag: FLAG.WORKER_HELP_2, value: false },
          triggeredNews: {
            title: "CÔNG NHÂN PHẢN ĐỐI VIỆC CẮT LƯƠNG",
            content: "Quyết định cắt giảm lương khiến nhiều công nhân bất mãn."
          }
        }
      ]
    }
  },

  EV_P1_ELEANOR_APPROVE: {
    EventID: "EV_P1_ELEANOR_APPROVE",
    requiredFlag: FLAG.WORKER_HELP_2,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
      senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
      senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
      senderText: [
        "Anh đã thi hành chỉ thị rất tốt.",
        "Lũ công nhân cần được nhắc ai mới là người ra quyết định."
      ],
      choices: [
        {
          text: "Vâng.",
          effect: {}
        }
      ]
    }
  },

  EV_P1_ELEANOR_DISAPPROVE: {
    EventID: "EV_P1_ELEANOR_DISAPPROVE",
    requiredFlag: FLAG.WORKER_HELP_2,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
      senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
      senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
      senderText: [
        "Anh đang quá mềm lòng với lũ công nhân.",
        "Ráng mà giữ cho chắc cái ghế quản đốc, giờ thì tiếp tục công việc của mình đi."
      ],
      choices: [
        {
          text: "Tôi sẽ ghi nhớ.",
          effect: {}
        }
      ]
    }
  },

  EV_P1_MIRA_ACCIDENT: {
    EventID: "EV_P1_MIRA_ACCIDENT",
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Một đường hầm vừa sập.",
        "Chúng tôi cần dừng khai thác để cứu người."
      ],
      choices: [
        {
          text: "Dừng ngay lập tức đi, mạng người là trên hết. (-50000 Than)",
          effect: { [STATS.HAPPINESS]: 20, [STATS.COAL]: -50000 },
          flagAction: { flag: FLAG.WORKER_HELP_3, value: true }
        },
        {
          text: "Không được dừng công việc. (-30 Nhân lực)",
          effect: { [STATS.HAPPINESS]: -20, [STATS.RESOURCE]: -30 },
          flagAction: { flag: FLAG.WORKER_HELP_3, value: false },
          triggeredNews: {
            title: "THƯƠNG VONG SAU VỤ SẬP HẦM",
            content: "Nhiều công nhân đã thiệt mạng trong quá trình khai thác."
          }
        }
      ]
    }
  },

  EV_P1_ALEXANDER_APPROVE: {
    EventID: "EV_P1_ALEXANDER_APPROVE",
    requiredFlag: FLAG.WORKER_HELP_3,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.default,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Tôi đã xem báo cáo về vụ sập hầm.",
        "Mỏ than không thể dừng lại chỉ vì vài công nhân mắc kẹt."
      ],
      choices: [
        {
          text: "Tôi hiểu.",
          effect: {}
        }
      ]
    }
  },

  EV_P1_ALEXANDER_DISAPPROVE: {
    EventID: "EV_P1_ALEXANDER_DISAPPROVE",
    requiredFlag: FLAG.WORKER_HELP_3,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Anh vừa làm đình trệ sản xuất vì vài công nhân.",
        "Đừng quên ai là người trả lương cho anh."
      ],
      choices: [
        {
          text: "Tôi hiểu.",
          effect: {}
        }
      ]
    }
  },

  EV_P1_CLARA_LETTER: {
    EventID: "EV_P1_CLARA_LETTER",
    MailsList: [
      {
        id: "mail-clara-01",
        title: "THƯ TỪ CLARA VOSS",
        content: "Patrick,\n\nTôi đã quan sát những quyết định của ngài trong thời gian qua. Có những người đang chuẩn bị cho một sự thay đổi lớn tại Theodore.\n\nNếu muốn biết sự thật đằng sau Cartel, hãy đến gặp chúng tôi.\n\n- Clara Voss",
        normalImg: MAIL_CONFIG.ITEMS.mail_1.normal,
        hoverImg: MAIL_CONFIG.ITEMS.mail_1.hover,
        choices: [
          {
            text: "* Đã đọc *",
            effect: {}
          }
        ]
      }
    ]
  }
});