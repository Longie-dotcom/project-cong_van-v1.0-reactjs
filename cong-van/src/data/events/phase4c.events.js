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
            "Người dân bắt đầu tin chính quyền vẫn còn đứng về phía họ.",
            "Đừng để những kẻ quyền lực cướp mất điều đó.",
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
        Title: "Quốc hữu hóa công nghiệp",
        Content: "Đưa các nhà máy chiến lược dưới quyền kiểm soát nhà nước.",
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
        Title: "Giữ mô hình hiện tại",
        Content: "Tiếp tục cân bằng giữa cứu trợ và sản xuất hạn chế.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -3,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Khôi phục hỗ trợ công nghiệp",
        Content: "Chuyển một phần than trở lại cho doanh nghiệp.",
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
            "Họ chia sẻ từng cục than còn sót lại với nhau.",
            "Nhưng nguồn dự trữ sẽ không kéo dài mãi.",
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
        Title: "Hỗ trợ thêm tài nguyên",
        Content: "Cấp than và thực phẩm cho các khu cộng đồng.",
        Effects: {
          [E.TRUST]: 7,
          [E.EQUALITY]: 6,
          [E.RESOURCE]: -5,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "B",
        Title: "Khuyến khích tự quản",
        Content: "Để người dân tự điều hành hệ thống hỗ trợ.",
        Effects: {
          [E.TRUST]: 3,
          [E.ECONOMY]: 1,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "C",
        Title: "Giảm hỗ trợ",
        Content: "Chuyển tài nguyên sang khu công nghiệp.",
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
        Title: "Tăng thuế doanh nghiệp rời đi",
        Content: "Ngăn dòng vốn tháo chạy bằng biện pháp cưỡng chế.",
        Effects: {
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -6,
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "B",
        Title: "Đàm phán giữ doanh nghiệp",
        Content: "Đưa ra thỏa thuận hỗ trợ tạm thời.",
        Effects: {
          [E.ECONOMY]: 4,
          [E.TRUST]: 2,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "C",
        Title: "Để họ rời đi",
        Content: "Tập trung nguồn lực cho dân sinh thay vì doanh nghiệp.",
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
            "Có lẽ Theodore vẫn còn cơ hội.",
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
        Title: "Khôi phục sản xuất công nghiệp",
        Content: "Tận dụng thời tiết để đưa nhà máy hoạt động lại.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.RESOURCE]: -3,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "B",
        Title: "Tái thiết khu dân cư",
        Content: "Đầu tư phục hồi các khu lao động bị thiệt hại.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 5,
        },
        NextPhaseID: P.PHASE_4C,
      },
      {
        ChoiceID: "C",
        Title: "Tiết kiệm tài nguyên",
        Content: "Giữ lại phần lớn kho than dự trữ.",
        Effects: {
          [E.RESOURCE]: 6,
          [E.ECONOMY]: -2,
        },
        NextPhaseID: P.PHASE_4C,
      },
    ],
  },
});
