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
        Effects: [
          {
            effect: { [E.ECONOMY]: 12 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ban bố Lệnh Ưu tiên Công nghiệp'."
          },
          {
            effect: { [E.EQUALITY]: -12 },
            text: "Hậu quả của 'ban bố Lệnh Ưu tiên Công nghiệp' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.RESOURCE]: -8 },
            text: "Việc 'ban bố Lệnh Ưu tiên Công nghiệp' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          },
          {
            effect: { [E.TRUST]: -5 },
            text: "Quyết định 'ban bố Lệnh Ưu tiên Công nghiệp' chèn ép giai cấp tự nó của giới công nhân."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Ban hành Khẩu phần song đôi",
        Content:
          "Ấn định khẩu phần tối thiểu cho cả hai phía để giữ guồng máy khỏi vỡ. Cả tư bản lẫn dân nghèo mắc kẹt trong trì trệ kéo dài.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 3 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ban hành Khẩu phần song đôi'."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Hậu quả của 'ban hành Khẩu phần song đôi' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -3 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ban hành Khẩu phần song đôi'."
          }
        ],
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "C",
        Title: "Ban bố Khẩn cấp dân sinh",
        Content:
          "Cắt sản xuất, xả kho than cứu trợ khu lao động. Sinh mạng dân cư được giữ, dòng vốn công nghiệp hụt mạnh.",
        Effects: [
          {
            effect: { [E.TRUST]: 10 },
            text: "Chủ trương 'ban bố Khẩn cấp dân sinh' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 8 },
            text: "Giai cấp vô sản đấu tranh tự phát phản đối việc 'ban bố Khẩn cấp dân sinh'."
          },
          {
            effect: { [E.ECONOMY]: -10 },
            text: "Việc 'ban bố Khẩn cấp dân sinh' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          },
          {
            effect: { [E.RESOURCE]: -6 },
            text: "Quy luật giá trị trừng phạt giới tài phiệt sau sách lược 'ban bố Khẩn cấp dân sinh'."
          },
          {
            effect: { [E.SECURITY]: -8 },
            text: "Quần chúng nổi dậy làm lung lay thiết chế cai trị sau vụ 'ban bố Khẩn cấp dân sinh'."
          }
        ],
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
        Effects: [
          {
            effect: { [E.ECONOMY]: 6 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'trưng dụng vận tải cho Hale'."
          },
          {
            effect: { [E.EQUALITY]: -5 },
            text: "Hậu quả của 'trưng dụng vận tải cho Hale' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.RESOURCE]: -4 },
            text: "Việc 'trưng dụng vận tải cho Hale' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quyết định 'trưng dụng vận tải cho Hale' chèn ép giai cấp tự nó của giới công nhân."
          }
        ],
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Giữ nguyên lịch trình",
        Content:
          "Giữ nguyên lịch trình, không can thiệp thêm. Tắc nghẽn kéo dài, không bên nào được lợi.",
        Effects: [
          {
            effect: { [E.TRUST]: 2 },
            text: "Chủ trương 'giữ nguyên lịch trình' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Quyết định 'giữ nguyên lịch trình' chịu tác động từ quy luật giá trị khắc nghiệt."
          }
        ],
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Ưu tiên vận tải dân sinh",
        Content:
          "Ưu tiên vận tải dân sinh, cắt bớt hàng hóa công nghiệp. Dân cư được cứu, tăng trưởng chậm lại.",
        Effects: [
          {
            effect: { [E.TRUST]: 4 },
            text: "Chủ trương 'ưu tiên vận tải dân sinh' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 4 },
            text: "Giai cấp vô sản đấu tranh tự phát phản đối việc 'ưu tiên vận tải dân sinh'."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Việc 'ưu tiên vận tải dân sinh' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
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
        Effects: [
          {
            effect: { [E.TRUST]: 6 },
            text: "Chủ trương 'trưng dụng than cho dân cư' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Giai cấp vô sản đấu tranh tự phát phản đối việc 'trưng dụng than cho dân cư'."
          },
          {
            effect: { [E.ECONOMY]: -4 },
            text: "Việc 'trưng dụng than cho dân cư' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Giữ nguyên phân phối",
        Content:
          "Giữ nguyên phân phối để tránh xung đột với thị trường. Mất điện kéo dài, lòng tin hao mòn.",
        Effects: [
          {
            effect: { [E.TRUST]: -2 },
            text: "Quyết sách 'giữ nguyên phân phối' đẩy nhanh tiến trình tha hóa lao động vô sản."
          }
        ],
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Bảo hộ điện cho công nghiệp",
        Content:
          "Bảo hộ điện cho công nghiệp, dồn nguồn cho lò thép. Cartel giữ nhịp lợi nhuận, khu dân cư chịu lạnh.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 5 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'bảo hộ điện cho công nghiệp'."
          },
          {
            effect: { [E.EQUALITY]: -4 },
            text: "Hậu quả của 'bảo hộ điện cho công nghiệp' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'bảo hộ điện cho công nghiệp'."
          }
        ],
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
        Effects: [
          {
            effect: { [E.ECONOMY]: 7 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ký độc quyền phân phối than'."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Hậu quả của 'ký độc quyền phân phối than' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ký độc quyền phân phối than'."
          }
        ],
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Tái khẳng định quyền nhà nước",
        Content:
          "Tái khẳng định quyền nhà nước để giữ phân phối. Dân sinh được trấn an, Cartel mất bớt quyền thao túng.",
        Effects: [
          {
            effect: { [E.TRUST]: 5 },
            text: "Chủ trương 'tái khẳng định quyền nhà nước' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 3 },
            text: "Giai cấp vô sản đấu tranh tự phát phản đối việc 'tái khẳng định quyền nhà nước'."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Việc 'tái khẳng định quyền nhà nước' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Hoãn quyết định chính thức",
        Content:
          "Hoãn quyết định để kéo dài thương lượng. Bất định tăng, cả hai phía đều bị treo lơ lửng.",
        Effects: [
          {
            effect: { [E.TRUST]: -1 },
            text: "Quyết sách 'hoãn quyết định chính thức' đẩy nhanh tiến trình tha hóa lao động vô sản."
          }
        ],
        NextPhaseID: P.PHASE_1,
      },
    ],
  },
});
