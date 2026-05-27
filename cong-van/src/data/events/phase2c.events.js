import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;

export const PHASE2C_EVENTS = Object.freeze({
  EV_MAIN_P2C_001: {
    EventID: "EV_MAIN_P2C_001",
    Title: "Những Căn Nhà Có Lửa",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_2C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Lần đầu tiên sau nhiều tuần, trẻ em ở South District có thể ngủ mà không bị cóng.",
            "Bọn trẻ con ở South District đang hát những bài hát về ngài Theodore đấy, Patrick.",
            "Đừng để bài hát đó trở thành khúc vãn ca.",
          ],
        },
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE_SERIOUS,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Các lò nung đang nguội dần, Patrick.",
            "Anh đang sưởi ấm đám đông bằng cách đốt trụi tương lai của thành phố.",
            "Khi tiền cạn và nhà máy rỉ sét, đám đông đó sẽ quay lại ăn thịt anh.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Các tuyến vận tải công nghiệp đã bắt đầu chậm lại.",
            "Nếu chuỗi logistics đổ vỡ, sẽ không còn tài nguyên để cứu bất kỳ ai.",
            "Một thành phố không thể sống bằng lòng tốt.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường đang hoảng loạn.",
            "Các nhà đầu tư đã bắt đầu chuyển vốn khỏi Theodore.",
            "Anh đang khiến giới tài phiệt tin rằng chính quyền này chống lại họ.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "ĐÊM ẤM ÁP TẠI SOUTH DISTRICT, NHƯNG THỊ TRƯỜNG ĐÓNG BĂNG.",
      Content:
        "Điện và hệ thống sưởi được khôi phục tại các khu lao động. Phố Wall của Theodore chìm trong hoảng loạn khi chứng khoán ngành thép chạm đáy.\n\nCác nhà phân tích cảnh báo rằng nếu tình trạng này kéo dài, Theodore có thể mất vị thế công nghiệp và rơi vào khủng hoảng kinh tế toàn diện.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Tiếp tục ưu tiên dân sinh",
        Content:
          "Duy trì phân bổ tài nguyên cho người dân dù kinh tế suy giảm.",
        Effects: {
          [E.TRUST]: 10,
          [E.EQUALITY]: 8,
          [E.ECONOMY]: -8,
          [E.RESOURCE]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Khôi phục một phần công nghiệp",
        Content: "Cân bằng lại giữa sản xuất và dân sinh.",
        Effects: {
          [E.ECONOMY]: 5,
          [E.TRUST]: 3,
          [E.EQUALITY]: 2,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Quốc hữu hóa phân phối than",
        Content: "Tước quyền kiểm soát tài nguyên khỏi The Cartel.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 10,
          [E.ECONOMY]: -10,
          [E.SECURITY]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
    ],
  },

  EV_RAND_P2C_001: {
    EventID: "EV_RAND_P2C_001",
    Title: "Nhà Máy Blackforge Giảm Công Suất",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Blackforge vừa phải tắt thêm hai lò nung.",
            "Công nhân đang bị cắt ca hàng loạt.",
            "Anh nghĩ họ sẽ còn đứng về phía anh bao lâu nữa?",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "BLACKFORGE CẮT GIẢM SẢN XUẤT",
      Content:
        "Whitmore Steel xác nhận nhiều dây chuyền luyện thép đã phải tạm dừng do thiếu than.\n\nGiới tài phiệt cảnh báo Theodore đang đánh mất sức mạnh công nghiệp cốt lõi.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Khôi phục than cho nhà máy",
        Content: "Tăng phân bổ cho Blackforge.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.EQUALITY]: -5,
          [E.TRUST]: -3,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "B",
        Title: "Phớt lờ lời cảnh báo",
        Content:
          "Từ chối can thiệp. Để thị trường tự giải quyết trong khi vẫn giữ than cho dân sinh.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 4,
          [E.ECONOMY]: -2,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "C",
        Title: "Cưỡng chế mở kho dự trữ tư nhân",
        Content:
          "Ký lệnh thanh tra, ép The Cartel phải nhả nguồn than găm trữ trong các kho riêng để duy trì lò nung tối thiểu, thay vì dùng ngân sách nhà nước.",
        Effects: {
          [E.EQUALITY]: 8,
          [E.TRUST]: 3,
          [E.ECONOMY]: -5,
          [E.SECURITY]: -2,
        },
        NextPhaseID: P.PHASE_2C,
      },
    ],
  },

  EV_RAND_P2C_002: {
    EventID: "EV_RAND_P2C_002",
    Title: "Bữa Ăn Miễn Phí Ở South District",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Các bếp ăn cộng đồng đang bắt đầu hoạt động trên diện rộng.",
            "Người dân bắt đầu tin rằng chính quyền vẫn còn nhìn thấy họ.",
            "Niềm tin đó rất mong manh.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "KHU LAO ĐỘNG NHẬN HỖ TRỢ KHẨN CẤP",
      Content:
        "Chính quyền Theodore triển khai thêm các điểm phát thực phẩm và sưởi ấm tại South District.\n\nTỷ lệ tội phạm vặt tại khu vực này giảm đáng kể trong tuần qua.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Dốc Cạn Kho Lương Quốc Gia",
        Content: "Tăng thêm hỗ trợ cho người dân.",
        Effects: {
          [E.TRUST]: 7,
          [E.EQUALITY]: 7,
          [E.RESOURCE]: -5,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "B",
        Title: "Duy Trì Mức Cứu Trợ Tối Thiểu",
        Content: "Duy trì hỗ trợ ở mức ổn định.",
        Effects: {
          [E.TRUST]: 3,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "C",
        Title: "Tước Đoạt Khẩu Phần Sưởi Ấm",
        Content: "Chuyển tài nguyên về ngân sách công nghiệp.",
        Effects: {
          [E.ECONOMY]: 5,
          [E.TRUST]: -5,
          [E.EQUALITY]: -4,
        },
        NextPhaseID: P.PHASE_2C,
      },
    ],
  },

  EV_RAND_P2C_003: {
    EventID: "EV_RAND_P2C_003",
    Title: "Dòng Vốn Rời Khỏi Theodore",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Các quỹ đầu tư đang rút khỏi Theodore.",
            "Không ai muốn đặt tiền vào một thành phố chống lại công nghiệp.",
            "Thị trường luôn bỏ phiếu bằng tiền.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "GIỚI ĐẦU TƯ BẮT ĐẦU RỜI KHỎI THEODORE",
      Content:
        "Nhiều tập đoàn tài chính đã bắt đầu đóng băng đầu tư mới vào Theodore sau hàng loạt chính sách ưu tiên dân sinh của chính phủ.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Cúi Đầu Hứa Hẹn Với Phố Wall",
        Content: "Cam kết khôi phục tăng trưởng công nghiệp.",
        Effects: {
          [E.ECONOMY]: 8,
          [E.TRUST]: -3,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "B",
        Title: "Quay Lưng Với Tiền Bản",
        Content: "Tiếp tục chính sách dân sinh.",
        Effects: {
          [E.EQUALITY]: 6,
          [E.TRUST]: 5,
          [E.ECONOMY]: -6,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "C",
        Title: "Đóng Băng Tài Khoản Tư Nhân",
        Content: "Áp đặt hạn chế tài chính khẩn cấp.",
        Effects: {
          [E.SECURITY]: 5,
          [E.ECONOMY]: -4,
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_2C,
      },
    ],
  },
});
