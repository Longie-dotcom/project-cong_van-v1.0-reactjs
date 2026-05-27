import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, MAILS, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;
const MAIL = MAILS;

export const PHASE2A_EVENTS = Object.freeze({
  EV_MAIN_P2A_001: {
    EventID: "EV_MAIN_P2A_001",
    Title: "Thành Phố Trong Guồng Máy",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Các lò nung đang hát vang, Patrick.",
            "Nhưng nếu dừng lại dù chỉ một ngày, chuỗi cung ứng sẽ sụp.",
            "Đừng để tiếng khóc lóc của vài khu dân cư làm chệch hướng bánh răng vĩ đại này..",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Đường sắt đang bị bào mòn từng giờ.",
            "Chúng ta đang vận hành trên giới hạn an toàn.",
            "Một sai lầm nhỏ sẽ làm tê liệt toàn bộ hệ thống.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Công nhân ngủ ngay cạnh máy móc.",
            "Không ai dám nghỉ.",
            "Thành phố này không còn ngày nghỉ nữa.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE TRỞ THÀNH TRUNG TÂM CÔNG NGHIỆP MIỀN BẮC",
      Content:
        "Báo cáo chính thức ca ngợi sản lượng thép đạt đỉnh. Những tin đồn về số ca tử vong vì kiệt sức và kẹt máy móc trong ca ba đã bị kiểm duyệt gắt gao",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: `Ban Hành Sắc Lệnh "Không Ngày Nghỉ"`,
        Content:
          "Ép công nhân làm việc cạn kiệt sinh lực để giữ lò nung rực lửa",
        Effects: {
          [E.ECONOMY]: 12,
          [E.EQUALITY]: -10,
          [E.TRUST]: -6,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Giới hạn sản xuất",
        Content: "Giảm tốc độ để bảo vệ hệ thống.",
        Effects: {
          [E.SECURITY]: 6,
          [E.ECONOMY]: -5,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Thiết lập kỷ luật thép",
        Content:
          "Triển khai lực lượng an ninh vào xưởng máy, dập tắt mọi ý định lãn công từ trong trứng nước",
        Effects: {
          [E.SECURITY]: 8,
          [E.TRUST]: -8,
        },
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },

  EV_RAND_P2A_001: {
    EventID: "EV_RAND_P2A_001",
    Title: "Dấu Hiệu Đình Công",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Một đốc công ở xưởng số 4 vừa bị ném mỏ lết vỡ đầu",
            "Bọn họ không còn sợ nhà giam nữa đâu, vì làm việc trong đó cũng chẳng khác gì đi tù.",
            "Máu đã đổ rồi.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "TIN ĐỒN ĐÌNH CÔNG LAN TRONG NHÀ MÁY",
      Content:
        "Một số khu công nghiệp tại Theodore ghi nhận dấu hiệu bất ổn lao động. Công nhân bắt đầu từ chối tăng ca.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Hạ Mình Mở Phiên Đối Thoại",
        Content: "Cử đại diện đối thoại với công nhân.",
        Effects: {
          [E.TRUST]: 6,
          [E.SECURITY]: -2,
        },
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Để Mặc Xung Đột Tự Sinh Tự Diệt",
        Content: "Tiếp tục sản xuất như bình thường.",
        Effects: {
          [E.ECONOMY]: 4,
          [E.TRUST]: -3,
        },
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "C",
        Title: "Triển Khai Cảnh Sát Chống Bạo Động.",
        Content: "Tăng giám sát khu công nghiệp.",
        Effects: {
          [E.SECURITY]: 5,
          [E.EQUALITY]: -4,
        },
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },

  EV_RAND_P2A_002: {
    EventID: "EV_RAND_P2A_002",
    Title: "Sụp Đường Sắt Nhánh Bắc",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Một tuyến đường sắt đã bị hỏng hoàn toàn.",
            "Nếu không điều chuyển than, nhà máy phía bắc sẽ dừng.",
            "Chúng ta đang chạy trên dây thép mỏng.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "TẮC NGHẼN LOGISTICS LAN RỘNG",
      Content:
        "Sự cố kỹ thuật tại tuyến đường sắt phía Bắc khiến chuỗi cung ứng than bị gián đoạn.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ưu tiên nhà máy",
        Content: "Điều chuyển toàn bộ than cho công nghiệp.",
        Effects: {
          [E.ECONOMY]: 6,
          [E.EQUALITY]: -5,
        },
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Phân bổ lại",
        Content: "Chia đều cho dân sinh và công nghiệp.",
        Effects: {
          [E.TRUST]: 4,
        },
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "C",
        Title: "Dừng một phần sản xuất",
        Content: "Ưu tiên sửa chữa hệ thống.",
        Effects: {
          [E.SECURITY]: 6,
          [E.ECONOMY]: -4,
        },
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },

  EV_RAND_P2A_003: {
    EventID: "EV_RAND_P2A_003",
    Title: "Áp Lực Từ The Cartel",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Chính quyền không thể điều hành nếu thiếu thị trường.",
            "Chúng tôi chỉ yêu cầu hiệu quả.",
            "Không phải cảm xúc.",
          ],
        },
      ],
    },

    MailsList: [
      {
        id: "mail-secret-2",
        Title: "BÁO CÁO TỪ TRẠM PHÂN PHÁT THỰC PHẨM",
        Content:
          "Kính gửi Ngài Patrick,\n\nTôi không rõ liệu lá thư này có thật sự đến được tay ngài hay không.\n\nHôm nay tôi đã phải đứng gần 19 phút ngoài trạm phân phát thực phẩm giữa trời tuyết chỉ để nhận khẩu phần bánh mì của tuần này.\nMột người phụ nữ phía trước tôi đã ngất đi vì lạnh.\n\nKhông ai trong chúng tôi dám gây náo loạn,\nbởi tất cả đều biết thành phố đang rất bất ổn.\n\nTôi chỉ hy vọng những người ở bên trong dinh thự vẫn còn nhớ tới cuộc sống bên ngoài các bức tường ấy.\n\nTrân trọng,\nClara Voss",
        NormalAsset: MAIL.MAIL_2.NORMAL,
        HoverAsset: MAIL.MAIL_2.HOVER,
      },
    ],

    Newspaper: {
      Title: "CÁC TẬP ĐOÀN YÊU CẦU MỞ RỘNG QUYỀN KIỂM SOÁT",
      Content:
        "The Cartel đề xuất tăng quyền trực tiếp trong phân phối than để ổn định sản xuất.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Chấp nhận",
        Content: "Trao thêm quyền cho Cartel.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.EQUALITY]: -6,
        },
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Từ chối",
        Content: "Giữ quyền nhà nước.",
        Effects: {
          [E.TRUST]: 5,
        },
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "C",
        Title: "Trì hoãn",
        Content: "Không đưa ra quyết định ngay.",
        Effects: {
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },
});
