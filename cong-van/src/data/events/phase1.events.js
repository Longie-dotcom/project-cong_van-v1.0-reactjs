import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, MAILS, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;
const MAIL = MAILS;

export const PHASE1_EVENTS = Object.freeze({
  EV_MAIN_P1_001: {
    EventID: "EV_MAIN_P1_001",
    Title: "Mùa Đông Của Thành Phố Than",
    Branch: B.PHASE_MAIN,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS,
          senderBlip: SFX.ELIAS,
          senderText: [
            "Cha lại làm việc muộn nữa à?",
            "Con bảo đầu bếp giữ phần bánh táo cho cha rồi đó.",
          ],
        },
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS_SAD,
          senderBlip: SFX.ELIAS,
          senderText: ["Nhớ về sớm nhé..."],
        },
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Patrick, thép là huyết mạch của lợi nhuận ở Theodore.",
            "Cắt dòng ấy, cỗ máy này sẽ đông cứng trong một tuần.",
          ],
        },
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE_SERIOUS,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: ["Lò nung tắt, trật tự cũng tắt theo."],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Các toa hàng đang kẹt cứng.",
            "Chuỗi cung ứng đang đứng trên bờ vực gãy rời.",
            "Nền kinh tế này vận hành bằng than, không vận hành bằng lòng trắc ẩn.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường không cần đạo đức.",
            "Nó chỉ đo trật tự bằng lợi nhuận.",
            "Và trật tự của nó luôn đúc bằng thép.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Người chết cóng không quan tâm đến báo cáo tăng trưởng đâu, thưa ngài thống đốc.",
            "Họ chỉ muốn biết đêm nay có ai phải đắp chăn ướt không.",
          ],
        },
      ],
    },

    MailsList: [
      {
        id: "mail-secret-1",
        Title: "THƯ TỪ KHU LAO ĐỘNG PHÍA ĐÔNG",
        Content:
          "Kính gửi Ngài Patrick,\n\nTôi xin thứ lỗi vì đã làm phiền ngài bằng lá thư này.\n\nNgày hôm qua, tôi tiếp tục làm việc từ ca số 3 đến tận 8 giờ tối tại nhà máy phía Đông.\nNhiệt độ trong xưởng đã xuống thấp đến mức nhiều đường ống bắt đầu đóng băng.\n\nMột vài công nhân đã bắt đầu xin nghỉ việc,\nnhưng phần lớn chúng tôi đều hiểu rằng mình không còn nơi nào khác để đi.\n\nTôi chỉ mong ngài sẽ lưu tâm đôi chút tới tình hình hiện tại của khu lao động phía Đông.\n\nTrân trọng,\nClara Voss",
        NormalAsset: MAIL.MAIL_1.NORMAL,
        HoverAsset: MAIL.MAIL_1.HOVER,
      },
    ],

    Newspaper: {
      Title: "THEODORE ĐỨNG TRÊN BỜ VỰC KHỦNG HOẢNG NHIÊN LIỆU",
      Content:
        "Mùa đông 1962...\n\nThan giảm mạnh trong khi công nghiệp tăng áp lực...",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban bố Lệnh Ưu tiên Công nghiệp",
        Content:
          "Ban lệnh ưu tiên công nghiệp, trưng dụng than cho lò nung và logistics. Cartel giữ lợi nhuận, khu lao động chịu rét và thiếu thốn.",
        Effects: {
          [E.ECONOMY]: 12,
          [E.EQUALITY]: -12,
          [E.RESOURCE]: -8,
          [E.TRUST]: -5,
        },
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Ban hành Khẩu phần song đôi",
        Content:
          "Ấn định khẩu phần tối thiểu cho cả hai phía để giữ guồng máy khỏi vỡ. Cả tư bản lẫn dân nghèo mắc kẹt trong trì trệ kéo dài.",
        Effects: {
          [E.ECONOMY]: 3,
          [E.EQUALITY]: -3,
          [E.TRUST]: -3,
        },
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "C",
        Title: "Ban bố Khẩn cấp dân sinh",
        Content:
          "Cắt sản xuất, xả kho than cứu trợ khu lao động. Sinh mạng dân cư được giữ, dòng vốn công nghiệp hụt mạnh.",
        Effects: {
          [E.TRUST]: 10,
          [E.EQUALITY]: 8,
          [E.ECONOMY]: -10,
          [E.RESOURCE]: -6,
        },
        NextPhaseID: P.PHASE_2C,
      },
    ],
  },

  EV_RAND_P1_001: {
    EventID: "EV_RAND_P1_001",
    Title: "Ga Tàu Quá Tải",
    Branch: B.RANDOM,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Các tuyến vận chuyển đang bị nghẽn tại ga trung tâm.",
            "Nếu không ưu tiên than cho logistics, toàn bộ chuỗi cung ứng sẽ đứng yên.",
            "Tàu không thể chạy bằng ý chí chính trị.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "TẮC NGHẼN LOGISTICS LAN RỘNG",
      Content:
        "Hệ thống đường sắt của Theodore ghi nhận tình trạng quá tải nghiêm trọng. Nhiều đoàn tàu chở than phải dừng giữa đường do thiếu điều phối và bão tuyết.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Trưng dụng vận tải cho Hale",
        Content:
          "Trưng dụng vận tải cho Hale, ưu tiên than cho tuyến hàng hóa. Lợi nhuận được cứu, nhu cầu dân sinh bị đẩy lùi.",
        Effects: {
          [E.ECONOMY]: 6,
          [E.EQUALITY]: -5,
          [E.RESOURCE]: -4,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Giữ nguyên lịch trình",
        Content:
          "Giữ nguyên lịch trình, không can thiệp thêm. Tắc nghẽn kéo dài, không bên nào được lợi.",
        Effects: {
          [E.TRUST]: 2,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Ưu tiên vận tải dân sinh",
        Content:
          "Ưu tiên vận tải dân sinh, cắt bớt hàng hóa công nghiệp. Dân cư được cứu, tăng trưởng chậm lại.",
        Effects: {
          [E.TRUST]: 4,
          [E.EQUALITY]: 4,
          [E.ECONOMY]: -3,
        },
        NextPhaseID: P.PHASE_1,
      },
    ],
  },

  EV_RAND_P1_002: {
    EventID: "EV_RAND_P1_002",
    Title: "Đêm Mất Điện Ở South District",
    Branch: B.RANDOM,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Khu tôi sống vừa mất điện thêm 6 giờ.",
            "Trẻ con phải ngủ trong chăn ướt lạnh.",
            "Nếu không có than sưởi, đây không còn là mùa đông nữa.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "KHỦNG HOẢNG NĂNG LƯỢNG LAN TỚI KHU DÂN CƯ",
      Content:
        "Nhiều khu dân cư phía Nam Theodore ghi nhận tình trạng mất điện luân phiên do thiếu than cho nhà máy điện.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Trưng dụng than cho dân cư",
        Content:
          "Trưng dụng than sưởi cho khu dân cư, cắt điện công nghiệp. Người lao động qua rét, giới tư bản mất nhịp lợi nhuận.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -4,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Giữ nguyên phân phối",
        Content:
          "Giữ nguyên phân phối để tránh xung đột với thị trường. Mất điện kéo dài, lòng tin hao mòn.",
        Effects: {
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Bảo hộ điện cho công nghiệp",
        Content:
          "Bảo hộ điện cho công nghiệp, dồn nguồn cho lò thép. Cartel giữ nhịp lợi nhuận, khu dân cư chịu lạnh.",
        Effects: {
          [E.ECONOMY]: 5,
          [E.EQUALITY]: -4,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_1,
      },
    ],
  },

  EV_RAND_P1_003: {
    EventID: "EV_RAND_P1_003",
    Title: "Cuộc Họp Bí Mật Của The Cartel",
    Branch: B.RANDOM,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường không cần xin phép để thống trị.",
            "Nếu chính quyền không giữ than, thị trường sẽ nắm luôn cả quyền lực.",
            "Trật tự luôn thuộc về kẻ nắm vốn mạnh nhất.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THE CARTEL TĂNG ÁP LỰC CHÍNH PHỦ",
      Content:
        "Các tập đoàn công nghiệp lớn yêu cầu tăng quyền kiểm soát phân phối than nhằm ổn định sản xuất mùa đông.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ký độc quyền phân phối than",
        Content:
          "Ký độc quyền phân phối than cho Cartel. Tư bản nắm kho, quyền sống của lao động bị thu hẹp.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.EQUALITY]: -6,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Tái khẳng định quyền nhà nước",
        Content:
          "Tái khẳng định quyền nhà nước để giữ phân phối. Dân sinh được trấn an, Cartel mất bớt quyền thao túng.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 3,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Hoãn quyết định chính thức",
        Content:
          "Hoãn quyết định để kéo dài thương lượng. Bất định tăng, cả hai phía đều bị treo lơ lửng.",
        Effects: {
          [E.TRUST]: -1,
        },
        NextPhaseID: P.PHASE_1,
      },
    ],
  },
});
