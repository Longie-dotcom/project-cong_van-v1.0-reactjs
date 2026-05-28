import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, SOUNDS } from "../assets";
import { ENDINGS } from "./endings";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;

export const PHASE5_EVENTS = Object.freeze({
  EV_MAIN_P5_001: {
    EventID: "EV_MAIN_P5_001",
    Title: "Mùa Đông Cuối Cùng",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_5,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS_SAD,
          senderBlip: SFX.ELIAS,
          senderText: [
            "Dinh thự dạo này yên tĩnh quá...",
            "Con không còn nhớ lần cuối cả nhà ăn tối cùng nhau là khi nào nữa.",
          ],
        },
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS,
          senderBlip: SFX.ELIAS,
          senderText: [
            "Cha...",
            "Đừng để thành phố này thay đổi cha hoàn toàn.",
          ],
        },
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Theodore đã thay đổi mãi mãi.",
            "Dù anh chọn công nghiệp hay dân sinh, thành phố này sẽ nhớ những gì đã xảy ra mùa đông năm nay.",
            "Lịch sử luôn được viết bởi kẻ còn tồn tại.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Các tuyến đường sắt cuối cùng cũng hoạt động ổn định trở lại.",
            "Nhưng thiệt hại đã vượt xa những con số thống kê.",
            "Theodore sẽ mất nhiều năm để hồi phục.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường đã chọn phe từ lâu.",
            "Câu hỏi duy nhất còn lại là liệu chính quyền có đủ mạnh để tồn tại sau cuộc khủng hoảng này hay không.",
            "Mọi đế chế đều được xây bằng khủng hoảng.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Người dân còn sống, và họ đã nhìn thấy ai bóc lột họ.",
            "Sau tất cả... có lẽ đó mới là khởi đầu của một chiến thắng.",
            "Và họ sẽ không quên những quyết định đã giữ lại nhà máy trong tay ai.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE BƯỚC QUA MÙA ĐÔNG ĐEN TỐI",
      Content:
        "Sau nhiều tháng khủng hoảng than đá, đình công và xung đột chính trị, Theodore cuối cùng đã vượt qua mùa đông khắc nghiệt nhất trong lịch sử hiện đại.\n\nTuy nhiên, thành phố giờ đây bị chia rẽ sâu sắc giữa giới tài phiệt công nghiệp, tầng lớp lao động và chính quyền trung ương.\n\nCác nhà sử học gọi mùa đông năm 1962 là bước ngoặt định hình tương lai của Theodore trong nhiều thập kỷ tới.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban bố sắc lệnh tích lũy tư bản",
        Content:
          "Ban sắc lệnh tích lũy tư bản, đặt lợi nhuận lên trên sinh mạng. Cartel củng cố quyền lực, người lao động bị hy sinh.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 12 },
            text: "Tích lũy tư bản tăng mạnh nhờ mở rộng nhà máy thép."
          },
          {
            effect: { [E.SECURITY]: 5 },
            text: "Trật tự cưỡng chế được tăng cường tại các khu công nghiệp."
          },
          {
            effect: { [E.EQUALITY]: -10 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          },
          {
            effect: { [E.TRUST]: -10 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          }
        ],
        NextPhaseID: P.ENDING,
        EndingPayload: ENDINGS.KY_NGUYEN_THEP,
      },
      {
        ChoiceID: "B",
        Title: "Duy trì thỏa ước đình chiến giai cấp",
        Content:
          "Duy trì thỏa ước đình chiến để giữ hiện trạng. Thành phố ổn định hơn, bế tắc giai cấp kéo dài.",
        Effects: [
          {
            effect: { [E.TRUST]: -5 },
            text: "Bất công giai cấp đè nặng khiến quần chúng vô sản căm phẫn."
          },
          {
            effect: { [E.ECONOMY]: 4 },
            text: "Tăng trưởng công nghiệp giúp tích lũy thêm thặng dư tư bản."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Bất công giai cấp đè nặng khiến quần chúng vô sản căm phẫn."
          }
        ],
        NextPhaseID: P.ENDING,
        EndingPayload: ENDINGS.BINH_MINH_HOA_GIAI,
      },
      {
        ChoiceID: "C",
        Title: "Ban hành sắc lệnh tước đoạt Cartel",
        Content:
          "Tước đoạt Cartel, trao nhà máy cho hội đồng công nhân. Tư liệu sản xuất bị sung công, đấu tranh giai cấp bước sang thời kỳ mới.",
        Effects: [
          {
            effect: { [E.TRUST]: 10 },
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.EQUALITY]: 12 },
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.ECONOMY]: -8 },
            text: "Dòng vốn tháo chạy khỏi thành phố do siết chặt quản lý."
          },
          {
            effect: { [E.SECURITY]: -8 },
            text: "Thợ mỏ nổi dậy đấu tranh chống lại ách cai trị tàn khốc."
          }
        ],
        NextPhaseID: P.ENDING,
        EndingPayload: ENDINGS.CHUYEN_CHINH_VO_SAN,
      },
    ],
  },

  EV_RAND_P5_001: {
    EventID: "EV_RAND_P5_001",
    Title: "Những Con Đường Tan Băng",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_5,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Băng tuyết bắt đầu tan trên các tuyến đường phía Bắc.",
            "Các đoàn tàu có thể hoạt động bình thường trở lại.",
            "Ít nhất Theodore vẫn còn cơ hội đứng dậy.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "HOẠT ĐỘNG VẬN TẢI DẦN PHỤC HỒI",
      Content:
        "Nhiều tuyến đường sắt quan trọng đã hoạt động trở lại sau nhiều tháng bị gián đoạn bởi bão tuyết và khủng hoảng nhiên liệu.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban lệnh khôi phục thương mại tư bản",
        Content:
          "Khôi phục thương mại tư bản để cứu lợi nhuận. Người lao động gánh thêm thiếu hụt tài nguyên.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 6 },
            text: "Tích lũy tư bản tăng mạnh nhờ mở rộng nhà máy thép."
          },
          {
            effect: { [E.EQUALITY]: -5 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          },
          {
            effect: { [E.RESOURCE]: -2 },
            text: "Ngân khố quốc gia hao hụt nghiêm trọng để duy trì hệ thống."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Trưng dụng vận tải cho hội đồng lao động",
        Content:
          "Trưng dụng vận tải cho cứu trợ do công nhân giám sát. Người lao động được ưu tiên, dòng tiền phục hồi chậm.",
        Effects: [
          {
            effect: { [E.TRUST]: 5 },
            text: "Phúc lợi lao động cải thiện nhờ các bếp sưởi ấm tập thể."
          },
          {
            effect: { [E.EQUALITY]: 4 },
            text: "Phúc lợi lao động cải thiện nhờ các bếp sưởi ấm tập thể."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Khủng hoảng logistics gây thất thoát dòng vốn đầu tư nặng nề."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Thiết lập tích trữ chiến lược do nhà nước kiểm soát",
        Content:
          "Thiết lập tích trữ chiến lược dưới kiểm soát nhà nước. An ninh nhiên liệu tăng, thị trường phục hồi chậm.",
        Effects: [
          {
            effect: { [E.RESOURCE]: 5 },
            text: "An ninh nhiên liệu được bảo đảm nhờ phân phối than hợp lý."
          },
          {
            effect: { [E.ECONOMY]: -2 },
            text: "Sản xuất đình trệ do lò nung thiếu than vận hành."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
    ],
  },

  EV_RAND_P5_002: {
    EventID: "EV_RAND_P5_002",
    Title: "Những Cái Tên Được Ghi Nhớ",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_5,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Người dân dựng bia tưởng niệm cho những người không sống sót qua mùa đông.",
            "Họ nói Theodore phải nhớ cái giá của lợi nhuận.",
            "Có những thứ còn quan trọng hơn tăng trưởng.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "CÁC KHU LAO ĐỘNG TỔ CHỨC TƯỞNG NIỆM NẠN NHÂN MÙA ĐÔNG",
      Content:
        "Nhiều cộng đồng dân cư tổ chức lễ tưởng niệm những người thiệt mạng trong khủng hoảng nhiên liệu và các cuộc bạo loạn mùa đông.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Trưng dụng ngân quỹ tưởng niệm giai cấp",
        Content:
          "Trưng dụng ngân quỹ tưởng niệm để ghi nhận hy sinh lao động. Ký ức đấu tranh được giữ, giai cấp vô sản được củng cố.",
        Effects: [
          {
            effect: { [E.TRUST]: 7 },
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.EQUALITY]: 4 },
            text: "Quyền lợi vô sản nâng cao qua các buổi đối thoại công đoàn."
          },
          {
            effect: { [E.ECONOMY]: -4 },
            text: "Đình trệ sản xuất làm thất thoát lượng lớn tư bản."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Ra tuyên cáo khép lại đấu tranh",
        Content:
          "Ra tuyên cáo khép lại đấu tranh để phục hồi theo lợi nhuận. Giới có của yên ổn, người lao động bị buộc im lặng.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 3 },
            text: "Tích lũy tư bản tăng mạnh nhờ mở rộng nhà máy thép."
          },
          {
            effect: { [E.TRUST]: -5 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          },
          {
            effect: { [E.EQUALITY]: -4 },
            text: "Công nhân phẫn nộ vì bị vắt kiệt sức lao động."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Ban hành lệnh siết truyền thông",
        Content:
          "Siết truyền thông để dập tiếng nói phản kháng. Trật tự cưỡng bức được giữ, lòng tin xã hội sụt mạnh.",
        Effects: [
          {
            effect: { [E.SECURITY]: 5 },
            text: "Trật tự cưỡng chế được tăng cường tại các khu công nghiệp."
          },
          {
            effect: { [E.TRUST]: -10 },
            text: "Bất công giai cấp đè nặng khiến quần chúng vô sản căm phẫn."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
    ],
  },

  EV_RAND_P5_003: {
    EventID: "EV_RAND_P5_003",
    Title: "Tương Lai Của Theodore",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_5,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Khủng hoảng nào rồi cũng kết thúc.",
            "Điều còn lại là ai kiểm soát tương lai sau đống tro tàn.",
            "Theodore sẽ trở thành biểu tượng... hoặc lời cảnh báo cho kẻ yếu.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE ĐỨNG TRƯỚC KỶ NGUYÊN MỚI",
      Content:
        "Sau mùa đông lịch sử, chính quyền Theodore bắt đầu xây dựng kế hoạch phục hồi dài hạn nhằm tái định hình nền kinh tế và cấu trúc xã hội thành phố.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban hành sắc lệnh mở rộng tư bản công nghiệp",
        Content:
          "Mở rộng tư bản công nghiệp, dồn vốn vào thép và vận tải. Lợi nhuận tăng, bất bình đẳng nới rộng.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 8 },
            text: "Tuyến logistics đường sắt thông suốt đem lại dòng vốn dồi dào."
          },
          {
            effect: { [E.EQUALITY]: -4 },
            text: "Bất công giai cấp đè nặng khiến quần chúng vô sản căm phẫn."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Bất công giai cấp đè nặng khiến quần chúng vô sản căm phẫn."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Phát động cải cách phúc lợi do công nhân giám sát",
        Content:
          "Phát động cải cách phúc lợi dưới giám sát công nhân. Đời sống lao động tốt hơn, tăng trưởng giảm.",
        Effects: [
          {
            effect: { [E.TRUST]: 5 },
            text: "Phúc lợi lao động cải thiện nhờ các bếp sưởi ấm tập thể."
          },
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Phúc lợi lao động cải thiện nhờ các bếp sưởi ấm tập thể."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Đình trệ sản xuất làm thất thoát lượng lớn tư bản."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Tập trung quyền lực trung ương",
        Content:
          "Tập trung quyền lực trung ương để ngăn khủng hoảng tái diễn. Trật tự được siết chặt, niềm tin xã hội mất dần.",
        Effects: [
          {
            effect: { [E.SECURITY]: 7 },
            text: "Trật tự cưỡng chế được tăng cường tại các khu công nghiệp."
          },
          {
            effect: { [E.TRUST]: -10 },
            text: "Bất công giai cấp đè nặng khiến quần chúng vô sản căm phẫn."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
    ],
  },
});
