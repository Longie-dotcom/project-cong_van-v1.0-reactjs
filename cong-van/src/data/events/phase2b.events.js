import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;

export const PHASE2B_EVENTS = Object.freeze({
  EV_MAIN_P2B_001: {
    EventID: "EV_MAIN_P2B_001",
    Title: "Hiệp Ước Tạm Ổn Định",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_2B,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS,
          senderBlip: SFX.ELIAS,
          senderText: [
            "Con gần như không thấy cha ở dinh thự nữa.",
            "Mọi người dạo này đều rất căng thẳng...",
          ],
        },
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS_SAD,
          senderBlip: SFX.ELIAS,
          senderText: [
            "Trong nhà dạo này lạnh lẽo quá cha ạ.",
            "Không phải vì thiếu lò sưởi... mà vì ánh mắt mọi người nhìn nhau.",
          ],
        },
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Chúng ta đã hạ áp lực sản xuất.",
            "Thị trường trừng phạt kẻ chậm lại.",
            "Blackforge đang mất lợi thế từng giờ.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Hệ thống vận tải ổn định hơn, nhưng chưa đủ nhanh.",
            "Chúng ta đang chỉ sống sót, không phải tăng trưởng.",
            "Đó là khác biệt giữa máy còn chạy và máy chết.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Ổn định nghe có vẻ tốt trên giấy tờ.",
            "Nhưng người dân không sống trong biểu đồ.",
            "Họ vẫn lạnh.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường không ghét tàn nhẫn.",
            "Nhưng nó khinh sự do dự hơn.",
            "Giữ thăng bằng trên dây không cai trị được một đế chế.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE BƯỚC ĐI TRONG LÀN SƯƠNG MÙ",
      Content:
        "Các chuyên gia kinh tế cảnh báo chính sách nửa vời đang bào mòn nguồn lực. Thành phố đang thoi thóp thay vì sống sót.\n\nTrong khi đó, các tổ chức lao động ca ngợi sự nhượng bộ của chính quyền, cho rằng đây là bước đi cần thiết để tránh thảm họa nhân đạo.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban hành ranh giới an sinh",
        Content:
          "Ban hành ranh giới an sinh, giữ mức cứu trợ tối thiểu. Người lao động sống sót, tăng trưởng bị kìm lại.",
        Effects: [
          {
            effect: { [E.TRUST]: 6 },
            text: "Chủ trương 'ban hành ranh giới an sinh' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Giai cấp vô sản hoàn toàn ủng hộ sách lược 'ban hành ranh giới an sinh'."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Việc 'ban hành ranh giới an sinh' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Phát lệnh tái công nghiệp hóa",
        Content:
          "Phát lệnh tái công nghiệp hóa, dồn lực cho thép. Cartel được cứu, bình đẳng và lòng tin lao động sụt sâu.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 10 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'phát lệnh tái công nghiệp hóa'."
          },
          {
            effect: { [E.EQUALITY]: -8 },
            text: "Hậu quả của 'phát lệnh tái công nghiệp hóa' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'phát lệnh tái công nghiệp hóa'."
          }
        ],
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Gia tăng kiểm soát nhà nước",
        Content:
          "Gia tăng kiểm soát nhà nước để điều phối tài nguyên. Sản xuất nhích lên, công nhân chịu kỷ luật chặt hơn.",
        Effects: [
          {
            effect: { [E.TRUST]: -5 },
            text: "Quyết sách 'gia tăng kiểm soát nhà nước' đẩy nhanh tiến trình tha hóa lao động vô sản."
          },
          {
            effect: { [E.ECONOMY]: 4 },
            text: "Giá trị thặng dư được tối ưu hóa thông qua chủ trương 'gia tăng kiểm soát nhà nước'."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'gia tăng kiểm soát nhà nước'."
          }
        ],
        NextPhaseID: P.PHASE_3,
      },
    ],
  },

  EV_RAND_P2B_001: {
    EventID: "EV_RAND_P2B_001",
    Title: "Biểu Tình Lạnh Giá",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2B,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Người dân đang tụ tập trước tòa thị chính.",
            "Họ không mang vũ khí.",
            "Chỉ mang theo chăn mỏng và sự giận dữ.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "BIỂU TÌNH VÌ NHIÊN LIỆU SƯỞI ẤM",
      Content:
        "Hàng nghìn người dân xuống đường yêu cầu phân bổ thêm than cho khu dân cư trong khi mùa đông đạt mức khắc nghiệt nhất.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Xả kho cứu trợ dân sinh",
        Content:
          "Xả kho cứu trợ dân sinh để dập biểu tình. Người lao động được sưởi ấm, ngân khố hụt.",
        Effects: [
          {
            effect: { [E.TRUST]: 8 },
            text: "Chủ trương 'xả kho cứu trợ dân sinh' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.ECONOMY]: -5 },
            text: "Quyết định 'xả kho cứu trợ dân sinh' chịu tác động từ quy luật giá trị khắc nghiệt."
          },
          {
            effect: { [E.EQUALITY]: 6 },
            text: "Việc 'xả kho cứu trợ dân sinh' góp phần bảo vệ quyền làm chủ của người lao động."
          }
        ],
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "B",
        Title: "Thiết quân luật quảng trường",
        Content:
          "Thiết quân luật quảng trường, trấn áp đám đông. Trật tự tư bản được bảo vệ, công nhân bị đàn áp.",
        Effects: [
          {
            effect: { [E.TRUST]: -8 },
            text: "Quyết sách 'thiết quân luật quảng trường' đẩy nhanh tiến trình tha hóa lao động vô sản."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Hậu quả của 'thiết quân luật quảng trường' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.ECONOMY]: 4 },
            text: "Quyết sách 'thiết quân luật quảng trường' tăng cường bóc lột sức lao động của công nhân."
          }
        ],
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "C",
        Title: "Phớt lờ yêu sách",
        Content:
          "Phớt lờ yêu sách, giữ nguyên chính sách. Bất mãn tích tụ, lòng tin giảm.",
        Effects: [
          {
            effect: { [E.TRUST]: -3 },
            text: "Quyết sách 'phớt lờ yêu sách' đẩy nhanh tiến trình tha hóa lao động vô sản."
          }
        ],
        NextPhaseID: P.PHASE_2B,
      },
    ],
  },

  EV_RAND_P2B_002: {
    EventID: "EV_RAND_P2B_002",
    Title: "Báo Cáo Sụt Giảm Sản Lượng",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_2B,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Tuyến vận tải đang sụt hiệu suất nghiêm trọng.",
            "Không tăng đầu tư, hệ thống sẽ tụt dốc không thể đảo ngược.",
            "Chúng ta đang ép giới hạn vật lý.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "NỀN KINH TẾ BẮT ĐẦU CHẬM LẠI",
      Content:
        "Các chỉ số sản xuất của Theodore ghi nhận mức giảm nhẹ nhưng liên tục trong 3 tuần liên tiếp.\n\nGiới phân tích cho rằng đây là hệ quả của chính sách cân bằng kéo dài.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Bơm vốn khôi phục công nghiệp",
        Content:
          "Bơm vốn khôi phục công nghiệp để tăng tốc sản xuất. Lợi nhuận tăng, dự trữ tài nguyên cạn.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 8 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'bơm vốn khôi phục công nghiệp'."
          },
          {
            effect: { [E.EQUALITY]: -5 },
            text: "Hậu quả của 'bơm vốn khôi phục công nghiệp' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.RESOURCE]: -5 },
            text: "Việc 'bơm vốn khôi phục công nghiệp' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Quyết định 'bơm vốn khôi phục công nghiệp' chèn ép giai cấp tự nó của giới công nhân."
          }
        ],
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "B",
        Title: "Duy trì định mức hiện hành",
        Content:
          "Duy trì định mức hiện hành để tránh xáo trộn. Tạm ổn về hành chính, đà suy giảm vẫn kéo dài.",
        Effects: [
          {
            effect: { [E.TRUST]: 3 },
            text: "Chủ trương 'duy trì định mức hiện hành' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Quyết định 'duy trì định mức hiện hành' chịu tác động từ quy luật giá trị khắc nghiệt."
          }
        ],
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "C",
        Title: "Chuyển hướng an sinh",
        Content:
          "Chuyển hướng an sinh, giảm áp lực sản xuất. Người lao động được bảo vệ hơn, tăng trưởng suy yếu rõ rệt.",
        Effects: [
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Chủ trương 'chuyển hướng an sinh' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Quyết định 'chuyển hướng an sinh' chịu tác động từ quy luật giá trị khắc nghiệt."
          },
          {
            effect: { [E.TRUST]: 4 },
            text: "Việc 'chuyển hướng an sinh' góp phần bảo vệ quyền làm chủ của người lao động."
          }
        ],
        NextPhaseID: P.PHASE_2B,
      },
    ],
  },
});
