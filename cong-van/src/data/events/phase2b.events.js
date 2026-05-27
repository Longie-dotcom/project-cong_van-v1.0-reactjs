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
            "Chúng ta đã giảm được áp lực sản xuất.",
            "Nhưng thị trường không thích sự chậm lại.",
            "Blackforge đang mất lợi thế từng ngày.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Hệ thống vận tải ổn định hơn, nhưng không đủ nhanh.",
            "Chúng ta đang sống sót, không phải tăng trưởng.",
            "Đó là một sự khác biệt nguy hiểm.",
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
            "Thị trường ghét sự tàn nhẫn.",
            "Nhưng nó còn kinh tởm sự do dự hơn.",
            "Giữ thăng bằng trên dây không phải là cách để cai trị một đế chế.",
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
        Title: "Bảo Vệ Ranh Giới Đỏ",
        Content: "Giữ ổn định xã hội thay vì tối đa hóa sản lượng.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 5,
          [E.ECONOMY]: -2,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Quay lại công nghiệp hóa mạnh",
        Content: "Khôi phục sản lượng thép tối đa.",
        Effects: {
          [E.ECONOMY]: 10,
          [E.EQUALITY]: -8,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Thắt chặt kiểm soát nhà nước",
        Content: "Chính phủ can thiệp sâu vào phân phối tài nguyên.",
        Effects: {
          [E.TRUST]: 3,
          [E.ECONOMY]: 4,
          [E.EQUALITY]: -3,
        },
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
        Title: "Rút Lõi Ngân Khố Xoa Dịu Đám Đông",
        Content: "Tăng phân bổ than cho dân sinh.",
        Effects: {
          [E.TRUST]: 8,
          [E.ECONOMY]: -5,
          [E.EQUALITY]: 6,
        },
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "B",
        Title: "Dùng Bạo Lực Dọn Dẹp Quảng Trường",
        Content: "Dùng lực lượng kiểm soát đám đông.",
        Effects: {
          [E.TRUST]: -8,
          [E.EQUALITY]: -6,
          [E.ECONOMY]: 4,
        },
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "C",
        Title: "Để Mặc Họ Kêu Gào Trong Tuyết",
        Content: "Không thay đổi chính sách hiện tại.",
        Effects: {
          [E.TRUST]: -3,
        },
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
            "Tuyến vận tải đang mất hiệu suất nghiêm trọng.",
            "Nếu không tăng đầu tư, hệ thống sẽ tụt dốc không thể đảo ngược.",
            "Chúng ta đang đẩy giới hạn vật lý.",
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
        Title: "Đầu tư mạnh trở lại công nghiệp",
        Content: "Khôi phục tốc độ sản xuất tối đa.",
        Effects: {
          [E.ECONOMY]: 8,
          [E.RESOURCE]: -5,
        },
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "B",
        Title: "Giữ ổn định hiện tại",
        Content: "Không thay đổi chính sách.",
        Effects: {
          [E.TRUST]: 3,
        },
        NextPhaseID: P.PHASE_2B,
      },
      {
        ChoiceID: "C",
        Title: "Chuyển ưu tiên sang dân sinh",
        Content: "Giảm áp lực sản xuất.",
        Effects: {
          [E.EQUALITY]: 6,
          [E.ECONOMY]: -6,
          [E.TRUST]: 4,
        },
        NextPhaseID: P.PHASE_2B,
      },
    ],
  },
});
