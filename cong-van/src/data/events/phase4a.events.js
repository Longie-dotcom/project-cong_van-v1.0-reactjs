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
            "Họ đang bắt người ngay trên đường phố để giữ lò nung.",
            "Ai đòi quyền sống đều bị gọi là phá hoại trật tự tư bản.",
            "Patrick... đây không còn là Theodore, đây là nhà máy của Cartel khoác áo Nhà nước.",
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
          "Ban bố thiết quân luật toàn khu lao động, quân đội chiếm nhà máy. Cartel giữ sản lượng bằng bạo lực, công nhân bị bóp nghẹt.",
        Effects: [
          {
            effect: { [E.SECURITY]: 12 },
            text: "Quyết sách 'ban bố Thiết quân luật toàn khu lao động' tăng cường công cụ bạo lực để duy trì trật tự."
          },
          {
            effect: { [E.ECONOMY]: 8 },
            text: "Giá trị thặng dư được tối ưu hóa thông qua chủ trương 'ban bố Thiết quân luật toàn khu lao động'."
          },
          {
            effect: { [E.EQUALITY]: -12 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ban bố Thiết quân luật toàn khu lao động'."
          },
          {
            effect: { [E.TRUST]: -10 },
            text: "Quyết định 'ban bố Thiết quân luật toàn khu lao động' chèn ép giai cấp tự nó của giới công nhân."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Duy trì Thiết quân luật kiểm soát",
        Content:
          "Duy trì thiết quân luật kiểm soát để bảo vệ vận tải. Lợi nhuận được giữ, công nhân bị kìm kẹp dài hạn.",
        Effects: [
          {
            effect: { [E.SECURITY]: 6 },
            text: "Quyết sách 'duy trì Thiết quân luật kiểm soát' tăng cường công cụ bạo lực để duy trì trật tự."
          },
          {
            effect: { [E.ECONOMY]: 5 },
            text: "Giá trị thặng dư được tối ưu hóa thông qua chủ trương 'duy trì Thiết quân luật kiểm soát'."
          },
          {
            effect: { [E.TRUST]: -8 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'duy trì Thiết quân luật kiểm soát'."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Ban lệnh rút bớt quân khỏi khu lao động",
        Content:
          "Rút bớt quân khỏi khu lao động để xoa dịu. Lòng dân nhích lên, quyền cưỡng bức của Cartel suy yếu.",
        Effects: [
          {
            effect: { [E.TRUST]: 6 },
            text: "Chủ trương 'ban lệnh rút bớt quân khỏi khu lao động' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 4 },
            text: "Giai cấp vô sản hoàn toàn ủng hộ sách lược 'ban lệnh rút bớt quân khỏi khu lao động'."
          },
          {
            effect: { [E.SECURITY]: -5 },
            text: "Hàng ngàn quần chúng nổi dậy đấu tranh chống lại quyết định áp bức 'ban lệnh rút bớt quân khỏi khu lao động'."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Quy luật giá trị trừng phạt giới tài phiệt sau sách lược 'ban lệnh rút bớt quân khỏi khu lao động'."
          }
        ],
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
          "Cưỡng chế tăng nhịp lò nung để tối đa hóa sản lượng. Lợi nhuận tăng, công nhân kiệt quệ.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 9 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'cưỡng chế tăng nhịp lò nung'."
          },
          {
            effect: { [E.RESOURCE]: -7 },
            text: "Quyết định 'cưỡng chế tăng nhịp lò nung' chịu tác động từ quy luật giá trị khắc nghiệt."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'cưỡng chế tăng nhịp lò nung'."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quyết định 'cưỡng chế tăng nhịp lò nung' chèn ép giai cấp tự nó của giới công nhân."
          }
        ],
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "B",
        Title: "Áp lệnh giảm ca bảo toàn sức lao động",
        Content:
          "Áp lệnh giảm ca để bảo toàn sức lao động. Công nhân được cứu, sản lượng giảm.",
        Effects: [
          {
            effect: { [E.TRUST]: 4 },
            text: "Chủ trương 'áp lệnh giảm ca bảo toàn sức lao động' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Giai cấp vô sản hoàn toàn ủng hộ sách lược 'áp lệnh giảm ca bảo toàn sức lao động'."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Việc 'áp lệnh giảm ca bảo toàn sức lao động' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "C",
        Title: "Mua yên bình bằng tiền thưởng để ổn định lao động",
        Content:
          "Mua yên bình bằng tiền thưởng để giữ kỷ luật sản xuất. Lao động dịu lại, ngân khố và lợi nhuận co lại.",
        Effects: [
          {
            effect: { [E.TRUST]: 5 },
            text: "Chủ trương 'mua yên bình bằng tiền thưởng để ổn định lao động' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.ECONOMY]: -4 },
            text: "Quyết định 'mua yên bình bằng tiền thưởng để ổn định lao động' chịu tác động từ quy luật giá trị khắc nghiệt."
          }
        ],
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
            "Họ đứng ngoài trời tuyết để đòi lại phần than đã bị trưng cho lợi nhuận.",
            "Quân đội bao vây để bảo vệ lợi nhuận, không phải người dân.",
            "Nếu có tiếng súng vang lên... đó sẽ là chiến tuyến của kẻ bị bóc lột.",
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
          "Cưỡng chế giải tán bằng vũ lực để bảo vệ trật tự tư bản. Công nhân bị đàn áp, lòng tin sụt.",
        Effects: [
          {
            effect: { [E.SECURITY]: 10 },
            text: "Quyết sách 'cưỡng chế giải tán bằng vũ lực' tăng cường công cụ bạo lực để duy trì trật tự."
          },
          {
            effect: { [E.TRUST]: -12 },
            text: "Hậu quả của 'cưỡng chế giải tán bằng vũ lực' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.EQUALITY]: -8 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'cưỡng chế giải tán bằng vũ lực'."
          }
        ],
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "B",
        Title: "Triệu tập đàm phán bắt buộc",
        Content:
          "Triệu tập đàm phán bắt buộc để hạ nhiệt xung đột. Công nhân có tiếng nói hơn, uy quyền cưỡng bức suy giảm.",
        Effects: [
          {
            effect: { [E.TRUST]: 5 },
            text: "Chủ trương 'triệu tập đàm phán bắt buộc' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.SECURITY]: -3 },
            text: "Quyết sách 'triệu tập đàm phán bắt buộc' đẩy chính quyền vào cuộc khủng hoảng thiết chế trầm trọng."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Việc 'triệu tập đàm phán bắt buộc' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "C",
        Title: "Khoanh tay để mâu thuẫn tự bốc cháy",
        Content:
          "Khoanh tay để mâu thuẫn tự bốc cháy. Khủng hoảng kéo dài, an ninh suy.",
        Effects: [
          {
            effect: { [E.TRUST]: -4 },
            text: "Quyết sách 'khoanh tay để mâu thuẫn tự bốc cháy' đẩy nhanh tiến trình tha hóa lao động vô sản."
          },
          {
            effect: { [E.SECURITY]: -2 },
            text: "Quyết sách 'khoanh tay để mâu thuẫn tự bốc cháy' đẩy chính quyền vào cuộc khủng hoảng thiết chế trầm trọng."
          }
        ],
        NextPhaseID: P.PHASE_4A,
      },
    ],
  },
});
