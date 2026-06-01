import { STATS, FLAG } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const PHASE3_EVENTS = Object.freeze({
  EV_P3_CARTEL_BREAKDOWN: {
    EventID: "EV_P3_CARTEL_BREAKDOWN",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Ban Quản Trị báo cáo sản lượng toàn hệ thống đang sụt giảm!",
        "Hình như có dấu hiệu phá hoại dây chuyền. Anh làm gì đi chứ??"
      ],
      choices: [
        {
          text: "Tôi sẽ tăng kiểm soát nội bộ.",
          effect: {
            [STATS.ECONOMY]: -20000,
            [STATS.COAL]: -10000,
            [STATS.RESOURCE]: -500
          },
          triggeredNews: {
            title: "KIỂM SOÁT NỘI BỘ ĐƯỢC THẮT CHẶT",
            content: "Chi phí vận hành tăng mạnh trong nỗ lực ổn định sản xuất."
          }
        }
      ]
    }
  },

  EV_P3_MIRA_WARNING: {
    EventID: "EV_P3_MIRA_WARNING",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Đình công đang lan sang khu mỏ phía Tây thưa ngài.",
        "Tôi nghĩ sẽ không ai quay lại hầm."
      ],
      choices: [
        {
          text: "Tôi nghe rồi.",
          effect: {
            [STATS.ECONOMY]: -15000,
            [STATS.COAL]: -20000,
            [STATS.RESOURCE]: -1000
          },
          triggeredNews: {
            title: "ĐÌNH CÔNG LAN RỘNG",
            content: "Nhiều khu mỏ buộc phải giảm sản lượng để duy trì an ninh."
          }
        }
      ]
    }
  },

  EV_P3_COAL_DEPOT_SABOTAGE: {
    EventID: "EV_P3_COAL_DEPOT_SABOTAGE",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Thưa ngài, kho than số 3 vừa bị phá hoại.",
        "Chuỗi vận chuyển chắc có lẽ sẽ bị gián đoạn."
      ],
      choices: [
        {
          text: "Bắt hết tất cả những kẻ phá hoại.",
          effect: {
            [STATS.ECONOMY]: -30000,
            [STATS.COAL]: -40000,
            [STATS.RESOURCE]: -800
          },
          triggeredNews: {
            title: "KHO THAN BỊ PHÁ HOẠI",
            content: "Chỉ tiêu bị gián đoạn nghiêm trọng."
          }
        }
      ]
    }
  },

  EV_P3_COLLECTIVE_PUNISHMENT: {
    EventID: "EV_P3_COLLECTIVE_PUNISHMENT",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
      senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
      senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
      senderText: [
        "Chúng tôi sẽ áp dụng trừng phạt diện rộng.",
        "Ổn định phải được giữ bằng mọi giá."
      ],
      choices: [
        {
          text: "Vâng thư ngài",
          effect: {
            [STATS.ECONOMY]: -25000,
            [STATS.COAL]: -15000,
            [STATS.RESOURCE]: -1500
          },
          triggeredNews: {
            title: "BIỆN PHÁP TRỪNG PHẠT ÁP DỤNG",
            content: "Hoạt động sản xuất bị siết chặt trên toàn khu vực."
          }
        }
      ]
    }
  },

  EV_P3_CHAIN_COLLAPSE: {
    EventID: "EV_P3_CHAIN_COLLAPSE",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: true,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Thưa ngài, chuỗi sản xuất ở mỏ số 7 không còn nhân công.",
        "Không còn đủ người vận hành."
      ],
      choices: [
        {
          text: "Tuyển thêm người đi.",
          effect: {
            [STATS.ECONOMY]: -60000,
            [STATS.COAL]: -50000,
          },
          triggeredNews: {
            title: "KHỦNG HOẢNG SẢN XUẤT TOÀN DIỆN",
            content: "Hệ thống khai thác rơi vào tình trạng đình trệ nghiêm trọng."
          }
        }
      ]
    }
  },

  EV_P3_MIRA_STRIKE_1: {
    EventID: "EV_P3_MIRA_STRIKE_1",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Một vài khu mỏ đã ngừng ca sáng.",
        "Họ chỉ nói đơn giản: không làm nữa."
      ],
      choices: [
        {
          text: "Điều động nhân lực thay thế.",
          effect: {
            [STATS.ECONOMY]: -10000,
            [STATS.COAL]: -8000,
            [STATS.RESOURCE]: -500
          },
          triggeredNews: {
            title: "ĐÌNH CÔNG CỤC BỘ",
            content: "Một số khu mỏ tạm dừng hoạt động trong ca sáng."
          }
        }
      ]
    }
  },

  EV_P3_MIRA_STRIKE_2: {
    EventID: "EV_P3_MIRA_STRIKE_2",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Ca đêm không còn ai xuống hầm.",
        "Họ bắt đầu tổ chức thành nhóm nhỏ."
      ],
      choices: [
        {
          text: "Tăng ca bắt buộc.",
          effect: {
            [STATS.ECONOMY]: -20000,
            [STATS.COAL]: -15000,
            [STATS.RESOURCE]: -1000
          },
          triggeredNews: {
            title: "GIÁN ĐOẠN CA ĐÊM",
            content: "Sản lượng giảm mạnh do thiếu nhân công vận hành ban đêm."
          }
        }
      ]
    }
  },

  EV_P3_MIRA_STRIKE_3: {
    EventID: "EV_P3_MIRA_STRIKE_3",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Một số khu tập thể đã đóng cửa.",
        "Không ai quay lại làm việc sau khi rời đi."
      ],
      choices: [
        {
          text: "Tái phân bổ lao động.",
          effect: {
            [STATS.ECONOMY]: -30000,
            [STATS.COAL]: -25000,
            [STATS.RESOURCE]: -1500
          },
          triggeredNews: {
            title: "ĐỔ VỠ NHÂN LỰC CỤC BỘ",
            content: "Nhiều khu sinh hoạt công nhân không còn khả năng vận hành."
          }
        }
      ]
    }
  },

  EV_P3_MIRA_STRIKE_4: {
    EventID: "EV_P3_MIRA_STRIKE_4",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Tình hình không còn kiểm soát được.",
        "Công nhân từ chối quay lại bất kỳ ca nào."
      ],
      choices: [
        {
          text: "Ép sản xuất bằng mọi giá.",
          effect: {
            [STATS.ECONOMY]: -45000,
            [STATS.COAL]: -40000,
            [STATS.RESOURCE]: -2500
          },
          triggeredNews: {
            title: "KHỦNG HOẢNG LAO ĐỘNG TOÀN KHU VỰC",
            content: "Hoạt động khai thác rơi vào trạng thái tê liệt cục bộ."
          }
        }
      ]
    }
  },

  EV_P3_MIRA_STRIKE_5: {
    EventID: "EV_P3_MIRA_STRIKE_5",
    requiredFlag: FLAG.JOINED_THE_REVOLUTION,
    requiredValue: false,
    Telephone: {
      senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
      senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
      senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
      senderText: [
        "Không còn ai xuống hầm nữa.",
        "Hệ thống đã dừng lại."
      ],
      choices: [
        {
          text: "Cố giữ vận hành.",
          effect: {
            [STATS.ECONOMY]: -70000,
            [STATS.COAL]: -60000,
            [STATS.RESOURCE]: -4000
          },
          triggeredNews: {
            title: "SỤP ĐỔ HỆ THỐNG KHAI THÁC",
            content: "Toàn bộ chuỗi khai thác rơi vào trạng thái đình trệ nghiêm trọng."
          }
        }
      ]
    }
  }
});
