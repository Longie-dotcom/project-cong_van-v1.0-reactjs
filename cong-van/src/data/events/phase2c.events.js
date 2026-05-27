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
            "Lò nung đang nguội dần, Patrick.",
            "Anh đang sưởi ấm đám đông bằng cách đốt trụi lợi nhuận tương lai.",
            "Khi tiền cạn và máy rỉ sét, đám đông đó sẽ quay lại xé xác anh.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Vận tải công nghiệp đã bắt đầu chậm lại.",
            "Nếu logistics đổ vỡ, sẽ không còn tài nguyên để cứu ai.",
            "Một thành phố không thể sống bằng lòng tốt.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường đang hoảng loạn.",
            "Vốn đã bắt đầu rời khỏi Theodore.",
            "Anh đang dạy giới tài phiệt rằng Nhà nước này chống lại họ.",
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
        Title: "Ban hành ưu tiên dân sinh",
        Content:
          "Ban hành ưu tiên dân sinh, xả kho than cho khu lao động. Sinh mạng công nhân được giữ, thị trường đóng băng vì thiếu tích lũy.",
        Effects: {
          [E.TRUST]: 10,
          [E.EQUALITY]: 8,
          [E.ECONOMY]: -8,
          [E.RESOURCE]: -4,
          [E.SECURITY]: -8,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Cân chỉnh sản xuất - dân sinh",
        Content:
          "Cân chỉnh sản xuất - dân sinh để giữ thế trung dung. Không bên nào hài lòng, khủng hoảng bị kéo dài.",
        Effects: {
          [E.ECONOMY]: 5,
          [E.TRUST]: -5,
          [E.EQUALITY]: -6,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Ban hành quốc hữu hóa phân phối than",
        Content:
          "Quốc hữu hóa phân phối than, tước quyền Cartel. Tư liệu sản xuất bị sung công, đấu tranh giai cấp bùng lên.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 10,
          [E.ECONOMY]: -10,
          [E.SECURITY]: -8,
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
            "Blackforge vừa tắt thêm hai lò nung.",
            "Công nhân bị cắt ca hàng loạt.",
            "Anh nghĩ họ còn đốt mình cho lò của anh bao lâu nữa?",
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
        Title: "Lệnh ưu tiên than cho Blackforge",
        Content:
          "Ưu tiên than cho Blackforge để cứu sản lượng. Cartel hưởng lợi, dân cư chịu thiếu sưởi.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.EQUALITY]: -5,
          [E.TRUST]: -3,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "B",
        Title: "Giữ than cho dân sinh",
        Content:
          "Giữ than cho dân sinh, bỏ mặc cảnh báo công nghiệp. Người lao động được cứu trợ, dòng vốn suy giảm.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 4,
          [E.ECONOMY]: -6,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "C",
        Title: "Cưỡng chế kho than tư nhân",
        Content:
          "Cưỡng chế kho than tư nhân, tịch thu dự trữ Cartel. Tư bản bị đánh thẳng, xung đột giai cấp gia tăng.",
        Effects: {
          [E.EQUALITY]: 8,
          [E.TRUST]: 3,
          [E.ECONOMY]: -10,
          [E.SECURITY]: -8,
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
        Title: "Xả kho cứu trợ tối đa",
        Content:
          "Xả kho cứu trợ tối đa cho bếp ăn và sưởi ấm. Người lao động sống qua rét, dự trữ quốc gia cạn nhanh.",
        Effects: {
          [E.TRUST]: 7,
          [E.EQUALITY]: 7,
          [E.RESOURCE]: -5,
          [E.ECONOMY]: -6,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "B",
        Title: "Giữ cứu trợ tối thiểu",
        Content:
          "Giữ cứu trợ tối thiểu để tránh xáo trộn ngân khố. Ổn định hình thức, thiếu thốn vẫn dai dẳng.",
        Effects: {
          [E.TRUST]: 3,
          [E.ECONOMY]: -6,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "C",
        Title: "Cắt khẩu phần sưởi dân cư",
        Content:
          "Cắt khẩu phần sưởi dân cư để bơm than cho công nghiệp. Lợi nhuận được cứu, khu lao động chịu lạnh và mất lòng tin.",
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
            "Không ai đặt tiền vào một thành phố chống lại công nghiệp.",
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
        Title: "Cam kết phục vụ Phố Wall",
        Content:
          "Cam kết phục vụ Phố Wall, ưu tiên phục hồi công nghiệp. Cartel được cứu, người lao động bị buộc thắt lưng buộc bụng.",
        Effects: {
          [E.ECONOMY]: 8,
          [E.TRUST]: -3,
          [E.EQUALITY]: -6,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "B",
        Title: "Khước từ yêu sách tư bản",
        Content:
          "Khước từ yêu sách tư bản, tiếp tục cứu trợ dân sinh. Sinh mạng công nhân được giữ, dòng vốn rút lui mạnh hơn.",
        Effects: {
          [E.EQUALITY]: 5,
          [E.TRUST]: 5,
          [E.ECONOMY]: -6,
        },
        NextPhaseID: P.PHASE_2C,
      },
      {
        ChoiceID: "C",
        Title: "Phong tỏa tài khoản tư nhân",
        Content:
          "Phong tỏa tài khoản tư nhân, kiểm soát tài chính khẩn cấp. Cartel bị kìm dòng tiền, nền kinh tế cùng dân nghèo nghẹt thở.",
        Effects: {
          [E.SECURITY]: 5,
          [E.ECONOMY]: -4,
          [E.TRUST]: -10,
        },
        NextPhaseID: P.PHASE_2C,
      },
    ],
  },
});
