import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;

export const PHASE4C_EVENTS = Object.freeze({
  EV_MAIN_P4C_001: {
    EventID: "EV_MAIN_P4C_001",
    Title: "Thành Phố Của Người Lao Động",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_4C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS,
          senderBlip: SFX.ELIAS,
          senderText: [
            "Con nghe người ngoài phố nhắc đến cha rất nhiều gần đây.",
            "Ai cũng trông rất giận dữ...",
          ],
        },
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS_SAD,
          senderBlip: SFX.ELIAS,
          senderText: ["...Cha đang làm điều đúng đắn mà, đúng không?"],
        },
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Các lò nung đang hoạt động dưới mức tối thiểu.",
            "Nếu chuyện này kéo dài thêm, Theodore sẽ đánh mất toàn bộ vị thế công nghiệp.",
            "Một thành phố không thể sống bằng lòng thương hại.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Các chuyến hàng bị trì hoãn khắp nơi.",
            "Chúng ta đang ưu tiên sưởi ấm dân cư hơn vận tải chiến lược.",
            "Hệ thống hậu cần đang bắt đầu rệu rã.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Nhà đầu tư đang tháo chạy khỏi Theodore.",
            "Họ tin chính quyền đã chọn cảm xúc thay vì ổn định.",
            "Thị trường không tha thứ cho sự yếu đuối.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Lần đầu tiên sau nhiều tháng, các khu dân cư có đủ than để sống qua đêm.",
            "Người dân đang hiểu: than thuộc về ai đang nắm máy và kho.",
            "Đừng để Cartel cướp lại nhà máy và phần sống của họ.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE ƯU TIÊN DÂN SINH GIỮA KHỦNG HOẢNG",
      Content:
        "Chính quyền Theodore tiếp tục mở rộng phân phối than cho các khu lao động và hệ thống sưởi dân dụng.\n\nTrong khi tỷ lệ tử vong mùa đông giảm mạnh, nhiều tập đoàn công nghiệp cảnh báo sản lượng thép đang lao dốc nghiêm trọng.\n\nGiới phân tích cho rằng Theodore đang đối mặt nguy cơ suy thoái kinh tế dài hạn.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban bố tước đoạt tư liệu sản xuất",
        Content:
          "Ban bố tước đoạt tư liệu sản xuất, trao quyền cho hội đồng công nhân. Cartel bị sung công, đấu tranh giai cấp bùng lên.",
        Effects: {
          [E.EQUALITY]: 10,
          [E.TRUST]: 8,
          [E.ECONOMY]: -10,
          [E.SECURITY]: -3,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Duy trì cơ chế đồng quản có giám sát công nhân",
        Content:
          "Duy trì đồng quản có giám sát công nhân để giữ cứu trợ. Người lao động được bảo vệ hơn, sản xuất chậm lại.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -3,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Khôi phục đặc quyền sở hữu của Cartel",
        Content:
          "Khôi phục đặc quyền sở hữu của Cartel để lấy tăng trưởng. Tư bản phục hồi, phong trào lao động mất thế.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.TRUST]: -4,
          [E.EQUALITY]: -5,
        },
        NextPhaseID: P.PHASE_5,
      },
    ],
  },

  EV_RAND_P4C_001: {
    EventID: "EV_RAND_P4C_001",
    Title: "Bếp Sưởi Cộng Đồng",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_4C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Người dân đang tự dựng các bếp sưởi tập thể quanh South District.",
            "Họ chia sẻ từng cục than còn sót lại vì Cartel đã lấy phần của họ.",
            "Nhưng nếu nhà máy còn thuộc Cartel, nguồn dự trữ sẽ luôn cạn.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "CÁC KHU LAO ĐỘNG TỰ TỔ CHỨC HỖ TRỢ MÙA ĐÔNG",
      Content:
        "Nhiều cộng đồng dân cư tại Theodore bắt đầu lập bếp sưởi và kho thực phẩm tập thể nhằm đối phó tình trạng thiếu nhiên liệu.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Trưng dụng kho than cho hội đồng khu phố",
        Content:
          "Trưng dụng kho than giao cho hội đồng khu phố. Dân nghèo được sưởi ấm, dự trữ nhà nước hao hụt.",
        Effects: {
          [E.TRUST]: 7,
          [E.EQUALITY]: 6,
          [E.RESOURCE]: -5,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "B",
        Title: "Ủy quyền tự quản của hội đồng công nhân",
        Content:
          "Ủy quyền tự quản có giới hạn cho công nhân. Trật tự tạm ổn, quyền lực vẫn chia sẻ nửa vời.",
        Effects: {
          [E.TRUST]: 3,
          [E.ECONOMY]: 1,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "C",
        Title: "Cắt viện trợ, dồn than cho tư bản",
        Content:
          "Cắt viện trợ, dồn than cho tư bản. Lợi nhuận được cứu, khu lao động bị bỏ rơi.",
        Effects: {
          [E.ECONOMY]: 5,
          [E.TRUST]: -5,
        },
        NextPhaseID: P.PHASE_4C,
      },
    ],
  },

  EV_RAND_P4C_002: {
    EventID: "EV_RAND_P4C_002",
    Title: "Doanh Nghiệp Rời Khỏi Theodore",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_4C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Ba tập đoàn vừa chuyển vốn sang Northreach.",
            "Họ không còn tin Theodore có thể duy trì lợi nhuận.",
            "Một thành phố không thể tồn tại nếu không còn ai đầu tư vào nó.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "LÀN SÓNG RÚT VỐN KHỎI THEODORE TIẾP TỤC TĂNG",
      Content:
        "Nhiều doanh nghiệp công nghiệp bắt đầu đóng cửa nhà máy hoặc chuyển hoạt động sang các khu vực ổn định hơn.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Áp thuế trưng thu vốn tháo chạy",
        Content:
          "Áp thuế trưng thu vốn tháo chạy để giữ của cải ở lại. Lao động được che chở, tư bản phản ứng và tăng trưởng giảm.",
        Effects: {
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -6,
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "B",
        Title: "Ký kết thỏa hiệp giữ vốn ngoại bang",
        Content:
          "Ký thỏa hiệp giữ vốn ngoại bang để đổi lấy đầu tư. Lợi nhuận được giữ, công nhân phải nhượng bộ.",
        Effects: {
          [E.ECONOMY]: 4,
          [E.TRUST]: 2,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "C",
        Title: "Chấp nhận rút vốn, dồn lực cho hội đồng lao động",
        Content:
          "Chấp nhận rút vốn, dồn lực cho hội đồng lao động. Quyền làm chủ của công nhân tăng, kinh tế suy yếu thêm.",
        Effects: {
          [E.EQUALITY]: 4,
          [E.ECONOMY]: -5,
        },
        NextPhaseID: P.PHASE_4C,
      },
    ],
  },

  EV_RAND_P4C_003: {
    EventID: "EV_RAND_P4C_003",
    Title: "Mùa Đông Dịu Lại",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_4C,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Nhiệt độ đang tăng lên.",
            "Lần đầu tiên sau nhiều tháng, trẻ con có thể ra ngoài mà không đóng băng.",
            "Nhưng cơ hội chỉ đến khi công nhân nắm quyền sống của mình.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "ĐỢT BÃO TUYẾT CUỐI CÙNG ĐANG RÚT ĐI",
      Content:
        "Các chuyên gia khí tượng cho biết mùa đông tại Theodore có dấu hiệu kết thúc sớm hơn dự kiến, giúp giảm áp lực lên hệ thống nhiên liệu quốc gia.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban lệnh khôi phục sản xuất vì tích lũy",
        Content:
          "Thiết lập kho dự trữ do nhân dân giám sát để kỷ luật phân phối. An ninh tài nguyên tăng, phục hồi kinh tế chậm.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.RESOURCE]: -3,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "B",
        Title: "Phát động tái thiết dưới hội đồng công nhân",
        Content:
          "Tái thiết dưới hội đồng công nhân, ưu tiên khu lao động. Người dân được nâng đỡ, tăng trưởng bị kìm lại.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 5,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "C",
        Title: "Thiết lập kho dự trữ do nhân dân kiểm soát",
        Content:
          "Thiết lập kho dự trữ dưới giám sát nhân dân để kỷ luật phân phối. An ninh tài nguyên tăng, phục hồi kinh tế chậm.",
        Effects: {
          [E.RESOURCE]: 6,
          [E.ECONOMY]: -2,
        },
        NextPhaseID: P.PHASE_4C,
      },
    ],
  },
});
