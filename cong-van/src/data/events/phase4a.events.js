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
            text: "Quân đội thiết lập trật tự thép, kiểm soát hoàn toàn xã hội."
          },
          {
            effect: { [E.ECONOMY]: 8 },
            text: "Tích lũy tư bản tăng mạnh nhờ mở rộng nhà máy thép."
          },
          {
            effect: { [E.EQUALITY]: -12 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          },
          {
            effect: { [E.TRUST]: -10 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
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
            text: "Quân đội thiết lập trật tự thép, kiểm soát hoàn toàn xã hội."
          },
          {
            effect: { [E.ECONOMY]: 5 },
            text: "Tuyến logistics đường sắt thông suốt đem lại dòng vốn dồi dào."
          },
          {
            effect: { [E.TRUST]: -8 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
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
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.EQUALITY]: 4 },
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.SECURITY]: -5 },
            text: "Thợ mỏ nổi dậy đấu tranh chống lại ách cai trị tàn khốc."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Dòng vốn tháo chạy khỏi thành phố do siết chặt quản lý."
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
            text: "Cartel thu lợi nhuận lớn nhờ phân phối than công nghiệp."
          },
          {
            effect: { [E.RESOURCE]: -7 },
            text: "Kho dự trữ than nhà nước cạn kiệt do xả kho cứu trợ."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
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
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Đình trệ sản xuất làm thất thoát lượng lớn tư bản."
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
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.ECONOMY]: -4 },
            text: "Dòng vốn tháo chạy khỏi thành phố do siết chặt quản lý."
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
            text: "Quân đội thiết lập trật tự thép, kiểm soát hoàn toàn xã hội."
          },
          {
            effect: { [E.TRUST]: -12 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          },
          {
            effect: { [E.EQUALITY]: -8 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
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
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.SECURITY]: -3 },
            text: "Thợ mỏ nổi dậy đấu tranh chống lại ách cai trị tàn khốc."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Đình trệ sản xuất làm thất thoát lượng lớn tư bản."
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
            text: "Sự đàn áp của lực lượng cưỡng chế gây oán hận xã hội."
          },
          {
            effect: { [E.SECURITY]: -2 },
            text: "Mất kiểm soát xã hội do mâu thuẫn giai cấp leo thang cực điểm."
          }
        ],
        NextPhaseID: P.PHASE_4A,
      },
    ],
  },
});
