import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, MAILS, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;
const MAIL = MAILS;

export const PHASE2A_EVENTS = Object.freeze({
  EV_MAIN_P2A_001: {
    EventID: "EV_MAIN_P2A_001",
    Title: "Thành Phố Trong Guồng Máy",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Lò nung đang hát bằng tiền, Patrick.",
            "Dừng một ngày, chuỗi cung ứng sẽ gãy.",
            "Đừng để tiếng khóc kéo chậm bánh răng lợi nhuận.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Đường sắt đang bị bào mòn từng giờ.",
            "Chúng ta đang ép máy vượt ngưỡng an toàn.",
            "Một vết nứt nhỏ đủ làm tê liệt cả dây chuyền.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Công nhân ngủ ngay cạnh máy móc.",
            "Không ai dám nghỉ.",
            "Thành phố này không còn ngày nghỉ nữa.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE TRỞ THÀNH TRUNG TÂM CÔNG NGHIỆP MIỀN BẮC",
      Content:
        "Báo cáo chính thức ca ngợi sản lượng thép đạt đỉnh. Những tin đồn về số ca tử vong vì kiệt sức và kẹt máy móc trong ca ba đã bị kiểm duyệt gắt gao",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: `Ban hành Sắc lệnh "Không Ngày Nghỉ"`,
        Content:
          "Ban sắc lệnh Không Ngày Nghỉ, cưỡng bức lao động để giữ lò nung. Lợi nhuận tăng vọt, sức lao động bị vắt kiệt.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 12 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ban hành Sắc lệnh 'Không Ngày Nghỉ''."
          },
          {
            effect: { [E.EQUALITY]: -10 },
            text: "Hậu quả của 'ban hành Sắc lệnh 'Không Ngày Nghỉ'' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -6 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ban hành Sắc lệnh 'Không Ngày Nghỉ''."
          }
        ],
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Ra lệnh hạn chế sản xuất",
        Content:
          "Ra lệnh hạn chế sản xuất để bảo toàn hạ tầng. An ninh hệ thống tăng, lợi nhuận giảm.",
        Effects: [
          {
            effect: { [E.SECURITY]: 6 },
            text: "Quyết sách 'ra lệnh hạn chế sản xuất' tăng cường công cụ bạo lực để duy trì trật tự."
          },
          {
            effect: { [E.ECONOMY]: -5 },
            text: "Quyết định 'ra lệnh hạn chế sản xuất' chịu tác động từ quy luật giá trị khắc nghiệt."
          },
          {
            effect: { [E.TRUST]: -10 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ra lệnh hạn chế sản xuất'."
          }
        ],
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Thiết quân luật nhà máy",
        Content:
          "Thiết quân luật nhà máy, đưa an ninh vào xưởng. Kỷ luật sắt bảo vệ Cartel, công nhân bị tước tiếng nói.",
        Effects: [
          {
            effect: { [E.SECURITY]: 8 },
            text: "Quyết sách 'thiết quân luật nhà máy' tăng cường công cụ bạo lực để duy trì trật tự."
          },
          {
            effect: { [E.TRUST]: -8 },
            text: "Hậu quả của 'thiết quân luật nhà máy' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },

  EV_RAND_P2A_001: {
    EventID: "EV_RAND_P2A_001",
    Title: "Dấu Hiệu Đình Công",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Một đốc công ở xưởng số 4 vừa bị ném mỏ lết vỡ đầu",
            "Bọn họ không còn sợ nhà giam nữa đâu, vì làm việc trong đó cũng chẳng khác gì đi tù.",
            "Máu đã đổ rồi.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "TIN ĐỒN ĐÌNH CÔNG LAN TRONG NHÀ MÁY",
      Content:
        "Một số khu công nghiệp tại Theodore ghi nhận dấu hiệu bất ổn lao động. Công nhân bắt đầu từ chối tăng ca.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Triệu tập phiên đối thoại",
        Content:
          "Triệu tập đối thoại để hạ nhiệt xung đột. Công nhân dịu lại, quyền lực cưỡng bức suy giảm.",
        Effects: [
          {
            effect: { [E.TRUST]: 6 },
            text: "Chủ trương 'triệu tập phiên đối thoại' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.SECURITY]: -2 },
            text: "Quyết sách 'triệu tập phiên đối thoại' đẩy chính quyền vào cuộc khủng hoảng thiết chế trầm trọng."
          },
          {
            effect: { [E.EQUALITY]: 2 },
            text: "Việc 'triệu tập phiên đối thoại' góp phần bảo vệ quyền làm chủ của người lao động."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Quy luật giá trị trừng phạt giới tài phiệt sau sách lược 'triệu tập phiên đối thoại'."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Ra lệnh tiếp tục sản xuất",
        Content:
          "Ra lệnh tiếp tục sản xuất bất chấp bất ổn. Lợi nhuận được giữ, sinh mạng lao động bị xem như chi phí.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 4 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ra lệnh tiếp tục sản xuất'."
          },
          {
            effect: { [E.EQUALITY]: -5 },
            text: "Hậu quả của 'ra lệnh tiếp tục sản xuất' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -3 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ra lệnh tiếp tục sản xuất'."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "C",
        Title: "Triển khai cảnh sát trấn áp",
        Content:
          "Triển khai cảnh sát trấn áp khu công nghiệp. Trật tự được ép buộc, bình đẳng lao động giảm.",
        Effects: [
          {
            effect: { [E.SECURITY]: 5 },
            text: "Quyết sách 'triển khai cảnh sát trấn áp' tăng cường công cụ bạo lực để duy trì trật tự."
          },
          {
            effect: { [E.EQUALITY]: -4 },
            text: "Hậu quả của 'triển khai cảnh sát trấn áp' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -10 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'triển khai cảnh sát trấn áp'."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },

  EV_RAND_P2A_002: {
    EventID: "EV_RAND_P2A_002",
    Title: "Sụp Đường Sắt Nhánh Bắc",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Một tuyến đường sắt vừa gãy sập.",
            "Không điều chuyển than, nhà máy phía bắc sẽ dừng.",
            "Chúng ta đang chạy trên dây thép, mỏng hơn cả lòng kiên nhẫn.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "TẮC NGHẼN LOGISTICS LAN RỘNG",
      Content:
        "Sự cố kỹ thuật tại tuyến đường sắt phía Bắc khiến chuỗi cung ứng than bị gián đoạn.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ưu tiên than cho nhà máy",
        Content:
          "Ưu tiên than cho nhà máy để giữ sản lượng. Cartel hưởng lợi, khu dân cư chịu thiếu thốn.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 6 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ưu tiên than cho nhà máy'."
          },
          {
            effect: { [E.EQUALITY]: -5 },
            text: "Hậu quả của 'ưu tiên than cho nhà máy' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ưu tiên than cho nhà máy'."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Ban hành phân bổ chia đều",
        Content:
          "Ban hành phân bổ chia đều để giữ cân bằng hình thức. Căng thẳng tạm lắng, hiệu suất vẫn ì ạch.",
        Effects: [
          {
            effect: { [E.TRUST]: 4 },
            text: "Chủ trương 'ban hành phân bổ chia đều' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 2 },
            text: "Giai cấp vô sản hoàn toàn ủng hộ sách lược 'ban hành phân bổ chia đều'."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Việc 'ban hành phân bổ chia đều' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "C",
        Title: "Ra lệnh giảm sản xuất sửa chữa",
        Content:
          "Ra lệnh giảm sản xuất để sửa chữa logistics. An toàn tăng, lợi nhuận giảm.",
        Effects: [
          {
            effect: { [E.SECURITY]: 6 },
            text: "Quyết sách 'ra lệnh giảm sản xuất sửa chữa' tăng cường công cụ bạo lực để duy trì trật tự."
          },
          {
            effect: { [E.ECONOMY]: -4 },
            text: "Quyết định 'ra lệnh giảm sản xuất sửa chữa' chịu tác động từ quy luật giá trị khắc nghiệt."
          },
          {
            effect: { [E.TRUST]: -8 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ra lệnh giảm sản xuất sửa chữa'."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },

  EV_RAND_P2A_003: {
    EventID: "EV_RAND_P2A_003",
    Title: "Áp Lực Từ The Cartel",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2A,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Nhà nước không thể điều hành nếu thiếu thị trường.",
            "Chúng tôi chỉ yêu cầu hiệu suất.",
            "Không phải thương xót.",
          ],
        },
      ],
    },

    MailsList: [
      {
        id: "mail-secret-2",
        Title: "BÁO CÁO TỪ TRẠM PHÂN PHÁT THỰC PHẨM",
        Content:
          "Kính gửi Ngài Patrick,\n\nTôi không rõ liệu lá thư này có thật sự đến được tay ngài hay không.\n\nHôm nay tôi đã phải đứng gần 19 phút ngoài trạm phân phát thực phẩm giữa trời tuyết chỉ để nhận khẩu phần bánh mì của tuần này.\nMột người phụ nữ phía trước tôi đã ngất đi vì lạnh.\n\nKhông ai trong chúng tôi dám gây náo loạn,\nbởi tất cả đều biết thành phố đang rất bất ổn.\n\nTôi chỉ hy vọng những người ở bên trong dinh thự vẫn còn nhớ tới cuộc sống bên ngoài các bức tường ấy.\n\nTrân trọng,\nClara Voss",
        NormalAsset: MAIL.MAIL_2.NORMAL,
        HoverAsset: MAIL.MAIL_2.HOVER,
      },
    ],

    Newspaper: {
      Title: "CÁC TẬP ĐOÀN YÊU CẦU MỞ RỘNG QUYỀN KIỂM SOÁT",
      Content:
        "The Cartel đề xuất tăng quyền trực tiếp trong phân phối than để ổn định sản xuất.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ký nhượng quyền cho Cartel",
        Content:
          "Ký nhượng quyền cho Cartel để tăng hiệu suất. Tư bản nắm kho than, công nhân mất thêm phần sống.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 7 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ký nhượng quyền cho Cartel'."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Hậu quả của 'ký nhượng quyền cho Cartel' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ký nhượng quyền cho Cartel'."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "B",
        Title: "Bác bỏ yêu sách Cartel",
        Content:
          "Bác bỏ yêu sách, giữ quyền phân phối nhà nước. Dân sinh được trấn an, thị trường tiếp tục nghi ngờ.",
        Effects: [
          {
            effect: { [E.TRUST]: 5 },
            text: "Chủ trương 'bác bỏ yêu sách Cartel' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Quyết định 'bác bỏ yêu sách Cartel' chịu tác động từ quy luật giá trị khắc nghiệt."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
      {
        ChoiceID: "C",
        Title: "Hoãn quyết định phân phối",
        Content:
          "Hoãn quyết định phân phối để kéo dài đàm phán. Bất định kéo dài, xung đột giai cấp âm ỉ.",
        Effects: [
          {
            effect: { [E.TRUST]: -2 },
            text: "Quyết sách 'hoãn quyết định phân phối' đẩy nhanh tiến trình tha hóa lao động vô sản."
          }
        ],
        NextPhaseID: P.PHASE_2A,
      },
    ],
  },
});
