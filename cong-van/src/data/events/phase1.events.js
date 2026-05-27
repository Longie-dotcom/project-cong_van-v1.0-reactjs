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
            "Patrick, Theodore không thể sống nếu thiếu thép.",
            "Nếu anh tiếp tục ưu tiên dân sinh, Blackforge sẽ dừng lại trong một tuần.",
          ],
        },
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE_SERIOUS,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: ["Và khi lò nung tắt, thành phố này cũng tắt theo."],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Tuyến đường sắt đang quá tải.",
            "Nếu không tăng phân bổ cho logistics, toàn bộ hệ thống sẽ nghẽn.",
            "Kinh tế không chờ lòng trắc ẩn.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường không quan tâm đạo đức.",
            "Nó chỉ quan tâm trật tự.",
            "Và trật tự luôn cần thép.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Người lao động không hỏi về kinh tế.",
            "Họ hỏi khi nào họ được sống.",
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
        Title: "Ưu tiên công nghiệp",
        Content: "Dồn than cho Whitmore Steel và Hale Logistics.",
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
        Title: "Cân bằng",
        Content: "Giữ ổn định giữa dân sinh và công nghiệp.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 6,
          [E.ECONOMY]: 3,
        },
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "C",
        Title: "Ưu tiên dân sinh",
        Content: "Giảm công nghiệp để cứu dân.",
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
        Title: "Ưu tiên vận tải công nghiệp",
        Content: "Dồn than cho hệ thống đường sắt của Hale.",
        Effects: {
          [E.ECONOMY]: 6,
          [E.RESOURCE]: -4,
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Giữ nguyên phân bổ",
        Content: "Không thay đổi chính sách hiện tại.",
        Effects: {
          [E.TRUST]: 2,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Giảm tải công nghiệp",
        Content: "Giảm ưu tiên vận tải để tránh sụp hệ thống dân sinh.",
        Effects: {
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
        Title: "Ưu tiên dân sinh",
        Content: "Chuyển than sang khu dân cư.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -4,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Không can thiệp",
        Content: "Giữ nguyên phân phối hiện tại.",
        Effects: {
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Ưu tiên công nghiệp",
        Content: "Duy trì điện cho nhà máy thép.",
        Effects: {
          [E.ECONOMY]: 5,
          [E.EQUALITY]: -4,
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
            "Thị trường không cần xin phép để tồn tại.",
            "Nếu chính quyền không kiểm soát được than, thì thị trường sẽ làm điều đó thay họ.",
            "Trật tự luôn đến từ kẻ mạnh nhất.",
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
        Title: "Chấp nhận yêu cầu Cartel",
        Content: "Trao thêm quyền phân phối than cho doanh nghiệp.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.EQUALITY]: -6,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "B",
        Title: "Từ chối",
        Content: "Giữ quyền kiểm soát nhà nước.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 3,
        },
        NextPhaseID: P.PHASE_1,
      },
      {
        ChoiceID: "C",
        Title: "Trì hoãn quyết định",
        Content: "Không đưa ra phản hồi ngay lập tức.",
        Effects: {
          [E.TRUST]: -1,
        },
        NextPhaseID: P.PHASE_1,
      },
    ],
  },
});
