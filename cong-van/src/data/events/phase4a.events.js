import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;

export const PHASE4A_EVENTS = Object.freeze({
  EV_MAIN_P4A_001: {
    EventID: "EV_MAIN_P4A_001",
    Title: "Thiết Quân Luật Công Nghiệp",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_4A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Theodore cuối cùng cũng hiểu điều gì giữ thành phố tồn tại.",
            "Công nhân cần kỷ luật.",
            "Nếu vài khu phố phải im lặng để lò nung tiếp tục cháy, đó là cái giá hợp lý.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Các đoàn tàu quân sự đã được triển khai quanh South District.",
            "Ít nhất giờ hàng hóa có thể di chuyển mà không bị đình công cản trở.",
            "Trật tự luôn hiệu quả hơn đàm phán.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường đang phản ứng tích cực.",
            "Các nhà đầu tư bắt đầu tin Theodore vẫn còn kiểm soát được tình hình.",
            "Đừng mềm lòng ở giai đoạn này.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Họ đang bắt người ngay trên đường phố.",
            "Những ai phản đối phân phối than đều bị xem là phá hoại.",
            "Patrick... đây không còn là Theodore mà chúng ta từng biết nữa.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THIẾT QUÂN LUẬT ĐƯỢC ÁP DỤNG TẠI CÁC KHU CÔNG NGHIỆP",
      Content:
        "Chính quyền Theodore chính thức triển khai lực lượng an ninh quanh các nhà máy và tuyến vận tải chiến lược.\n\nMọi hành vi đình công hoặc cản trở sản xuất sẽ bị xử lý theo luật khẩn cấp mùa đông.\n\nTrong khi The Cartel ca ngợi quyết định này là bước đi cần thiết để bảo vệ nền kinh tế, nhiều tổ chức lao động cho rằng Theodore đang tiến gần tới chế độ tài phiệt quân sự.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban bố Thiết quân luật toàn khu lao động",
        Content:
          "Quân đội chiếm nhà máy và khu trọ, bóp nghẹt đình công để Cartel giữ sản lượng và giá trị thặng dư.",
        Effects: {
          [E.SECURITY]: 12,
          [E.ECONOMY]: 8,
          [E.EQUALITY]: -12,
          [E.TRUST]: -10,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Duy trì Thiết quân luật kiểm soát",
        Content:
          "Giữ kìm kẹp đủ mạnh để bảo vệ vận tải và lợi nhuận, nhưng tránh bùng nổ phản kháng công nhân.",
        Effects: {
          [E.SECURITY]: 6,
          [E.ECONOMY]: 5,
          [E.TRUST]: -3,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Ban lệnh rút bớt quân khỏi khu lao động",
        Content:
          "Nới đàn áp để xoa dịu công nhân, chấp nhận làm suy yếu quyền lực cưỡng bức của Cartel.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 4,
          [E.SECURITY]: -5,
        },
        NextPhaseID: P.PHASE_5,
      },
    ],
  },

  EV_RAND_P4A_001: {
    EventID: "EV_RAND_P4A_001",
    Title: "Nhà Máy Blackforge Không Ngủ",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_4A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Blackforge đã hoạt động liên tục 11 ngày.",
            "Nếu giữ được tốc độ này, Theodore sẽ thống trị toàn bộ miền Bắc.",
            "Nhưng công nhân đang bắt đầu gục xuống vì kiệt sức.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "SẢN LƯỢNG THÉP THEODORE ĐẠT MỨC KỶ LỤC",
      Content:
        "Các lò nung Blackforge tiếp tục hoạt động không nghỉ bất chấp thời tiết khắc nghiệt. Báo cáo nội bộ cho thấy tỷ lệ tai nạn lao động đang tăng nhanh.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Cưỡng chế tăng nhịp lò nung",
        Content:
          "Ép công nhân kiệt sức để tối đa hóa sản lượng và lợi nhuận tư bản.",
        Effects: {
          [E.ECONOMY]: 9,
          [E.RESOURCE]: -7,
          [E.EQUALITY]: -6,
        },
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "B",
        Title: "Áp lệnh giảm ca bảo toàn sức lao động",
        Content:
          "Ưu tiên sức khỏe công nhân, đổi lại sản lượng và lợi nhuận giảm.",
        Effects: {
          [E.TRUST]: 4,
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -3,
        },
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "C",
        Title: "Mua yên bằng thưởng ổn định lao động",
        Content:
          "Dùng ngân sách trấn an công nhân, giữ kỷ luật sản xuất nhưng ngân khố chịu gánh nặng.",
        Effects: {
          [E.TRUST]: 5,
          [E.ECONOMY]: -4,
        },
        NextPhaseID: P.PHASE_4A,
      },
    ],
  },

  EV_RAND_P4A_002: {
    EventID: "EV_RAND_P4A_002",
    Title: "Biểu Tình Trong Tuyết",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_4A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Họ đang đứng ngoài trời tuyết chỉ để yêu cầu thêm than sưởi.",
            "Quân đội đã bao vây quảng trường.",
            "Nếu có tiếng súng vang lên... mọi thứ sẽ không thể quay lại nữa.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "HÀNG NGÀN NGƯỜI TỤ TẬP TẠI SOUTH DISTRICT",
      Content:
        "Biểu tình tiếp tục lan rộng bất chấp lệnh giới nghiêm. Chính quyền tuyên bố sẽ sử dụng mọi biện pháp cần thiết để bảo vệ ổn định quốc gia.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Cưỡng chế giải tán bằng vũ lực",
        Content:
          "Nhà nước trấn áp biểu tình để bảo vệ trật tự và quyền sở hữu tư bản.",
        Effects: {
          [E.SECURITY]: 10,
          [E.TRUST]: -12,
          [E.EQUALITY]: -8,
        },
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "B",
        Title: "Triệu tập đàm phán bắt buộc",
        Content:
          "Chấp nhận thương lượng để hạ nhiệt xung đột, tăng tiếng nói công nhân nhưng làm suy yếu uy quyền cưỡng bức.",
        Effects: {
          [E.TRUST]: 7,
          [E.SECURITY]: -3,
        },
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "C",
        Title: "Khoanh tay để mâu thuẫn tự bốc cháy",
        Content:
          "Không can thiệp, để khủng hoảng giai cấp âm ỉ và lòng tin sụt giảm.",
        Effects: {
          [E.TRUST]: -4,
          [E.SECURITY]: -2,
        },
        NextPhaseID: P.PHASE_4A,
      },
    ],
  },
});
