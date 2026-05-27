import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, MAILS, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;
const MAIL = MAILS;

export const PHASE3_EVENTS = Object.freeze({
  EV_MAIN_P3_001: {
    EventID: "EV_MAIN_P3_001",
    Title: "Mùa Đông Thứ Hai",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_3,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Theodore đã sống sót qua mùa đông đầu tiên.",
            "Nhưng sống sót không tạo ra thặng dư.",
            "Cỗ máy này cần một hướng đi rõ ràng.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Kho vận đang kiệt sức.",
            "Chúng ta không thể đổi hướng chính sách mỗi tháng.",
            "Hệ thống cần ổn định như dây chuyền.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "The Cartel đã bắt đầu chia rẽ.",
            "Một số muốn hợp tác với anh.",
            "Một số khác muốn thay thế anh.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Người dân vẫn còn hy vọng.",
            "Nhưng hy vọng là thứ dễ chết nhất trong mùa đông.",
            "Đừng bắt họ sống thêm một năm nữa bằng lời hứa.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE TIẾN VÀO MÙA ĐÔNG THỨ HAI",
      Content:
        "Sau nhiều tháng khủng hoảng nhiên liệu và bất ổn chính trị, Theodore bước vào mùa đông thứ hai với nền kinh tế suy yếu nhưng xã hội vẫn giữ được ổn định tương đối.\n\nTuy nhiên, áp lực từ The Cartel, giới lao động và thị trường quốc tế đang đẩy chính quyền Patrick Vale tới giới hạn.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Nhượng quyền Cartel",
        Content:
          "Nhượng quyền Cartel để tái thiết theo lợi nhuận. Tư bản củng cố vị thế, bất bình đẳng và oán nộ tăng.",
        Effects: {
          [E.ECONOMY]: 10,
          [E.EQUALITY]: -8,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "B",
        Title: "Chỉ thị duy trì cân bằng",
        Content:
          "Chỉ thị duy trì cân bằng để kéo dài trạng thái trung lập. Thành phố cầm cự, mâu thuẫn giai cấp bị trì hoãn.",
        Effects: {
          [E.TRUST]: -5,
          [E.ECONOMY]: 3,
          [E.EQUALITY]: -6,
        },
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "C",
        Title: "Phát động cải cách dân sinh",
        Content:
          "Phát động cải cách dân sinh, tước bớt quyền lực tài phiệt. Người lao động được cứu trợ, đối đầu giai cấp bùng lên.",
        Effects: {
          [E.TRUST]: 8,
          [E.EQUALITY]: 10,
          [E.ECONOMY]: -8,
          [E.SECURITY]: -8,
        },
        NextPhaseID: P.PHASE_4C,
      },
    ],
  },

  EV_RAND_P3_001: {
    EventID: "EV_RAND_P3_001",
    Title: "Tin Đồn Đảo Chính",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_3,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Có những cuộc họp đang diễn ra sau lưng anh.",
            "Một số người tin Theodore cần bàn tay sắt hơn.",
            "Thị trường không chờ đợi sự bất ổn kéo dài.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "TIN ĐỒN CHÍNH TRỊ LAN RỘNG",
      Content:
        "Nhiều tin đồn về xung đột nội bộ giữa chính quyền Theodore và giới công nghiệp bắt đầu xuất hiện trong tuần qua.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Ban hành giám sát an ninh",
        Content:
          "Ban hành giám sát an ninh để dập các nhóm chống đối. Trật tự cưỡng bức tăng, lòng tin sụt mạnh.",
        Effects: {
          [E.SECURITY]: 7,
          [E.TRUST]: -10,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Triệu tập đối thoại chính trị",
        Content:
          "Triệu tập đối thoại chính trị để xoa dịu phe phái. Khủng hoảng tạm lắng, nguy cơ vẫn treo.",
        Effects: {
          [E.TRUST]: 5,
          [E.ECONOMY]: -6,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Không phản hồi chính thức",
        Content:
          "Không phản hồi chính thức, để tin đồn tự lan. An ninh suy yếu, bất ổn kéo dài.",
        Effects: {
          [E.SECURITY]: -3,
        },
        NextPhaseID: P.PHASE_3,
      },
    ],
  },

  EV_RAND_P3_002: {
    EventID: "EV_RAND_P3_002",
    Title: "Tai Nạn Nhà Máy",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_3,

    MailsList: [
      {
        id: "mail-secret-3",
        Title: "ĐƠN KIẾN NGHỊ TỪ NHÀ MÁY PHÍA ĐÔNG",
        Content:
          "Kính gửi Ngài Patrick,\n\nTôi vừa được chuyển sang khu lò số 4 theo điều động mới của nhà máy.\n\nKhông khí tại đó đặc và nóng đến mức nhiều người không thể làm việc quá vài giờ liên tục.\nTuy vậy, chúng tôi vẫn được yêu cầu tiếp tục vận hành dây chuyền như bình thường.\n\nTôi hiểu rằng những người ở vị trí của ngài phải đưa ra rất nhiều quyết định khó khăn.\nNhưng đôi lúc tôi tự hỏi liệu thành phố này có còn nhìn thấy những con người đang đứng phía dưới hay không.\n\nXin thứ lỗi nếu lời lẽ của tôi có phần vượt quá bổn phận.\n\nTrân trọng,\nClara Voss",
        NormalAsset: MAIL.MAIL_3.NORMAL,
        HoverAsset: MAIL.MAIL_3.HOVER,
      },
    ],

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Một lò luyện ở Blackforge vừa phát nổ.",
            "Chúng tôi cần tài nguyên để khôi phục ngay.",
            "Nếu sản xuất dừng, toàn bộ Theodore sẽ trả giá bằng lợi nhuận.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "NỔ LÒ LUYỆN TẠI BLACKFORGE",
      Content:
        "Một vụ nổ công nghiệp lớn xảy ra tại Blackforge Steel khiến hàng chục công nhân bị thương và làm gián đoạn sản xuất thép.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Trưng dụng cứu Blackforge",
        Content:
          "Trưng dụng nguồn lực cứu Blackforge để khôi phục sản xuất. Lợi nhuận tư bản được cứu, tài nguyên xã hội bị hút cạn.",
        Effects: {
          [E.ECONOMY]: 8,
          [E.EQUALITY]: -5,
          [E.RESOURCE]: -6,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Ra lệnh thanh tra an toàn",
        Content:
          "Ra lệnh thanh tra an toàn, tạm đóng lò. Công nhân được bảo vệ, kinh tế chịu cú phanh mạnh.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 4,
          [E.ECONOMY]: -5,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Tước hỗ trợ tài phiệt",
        Content:
          "Tước hỗ trợ tài phiệt, buộc Whitmore tự gánh. Tư bản bị siết, công nhân bớt bị vắt kiệt.",
        Effects: {
          [E.ECONOMY]: -7,
          [E.EQUALITY]: 5,
        },
        NextPhaseID: P.PHASE_3,
      },
    ],
  },

  EV_RAND_P3_003: {
    EventID: "EV_RAND_P3_003",
    Title: "Đêm Không Bánh Mì",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_3,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELIAS,
          senderImage: IMG.ELIAS_HAPPY,
          senderBlip: SFX.ELIAS,
          senderText: [
            "Con tìm thấy bộ cờ cũ của cha trong thư phòng.",
            "Lần tới nếu cha rảnh thì chơi với con nhé.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Các khu lao động đã bắt đầu thiếu lương thực.",
            "Người dân có thể chịu lạnh.",
            "Nhưng họ không thể chịu đói.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THIẾU LƯƠNG THỰC TẠI SOUTH DISTRICT",
      Content:
        "Nguồn cung thực phẩm tại nhiều khu lao động giảm mạnh do khủng hoảng vận tải kéo dài.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Xả kho lương thực khẩn",
        Content:
          "Xả kho lương thực khẩn để cứu đói khu lao động. Sinh mạng dân nghèo được giữ, ngân sách co rút.",
        Effects: {
          [E.TRUST]: 7,
          [E.EQUALITY]: 6,
          [E.ECONOMY]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Ưu tiên ổn định thị trường",
        Content:
          "Ưu tiên ổn định thị trường, hạn chế can thiệp cứu trợ. Lợi nhuận được giữ, khu lao động chịu đói.",
        Effects: {
          [E.ECONOMY]: 4,
          [E.TRUST]: -5,
          [E.EQUALITY]: -6,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Thiết quân luật lương thực",
        Content:
          "Thiết quân luật lương thực để kiểm soát phân phối. An ninh tăng bằng cưỡng bức, lòng tin xã hội giảm.",
        Effects: {
          [E.SECURITY]: 7,
          [E.TRUST]: -10,
        },
        NextPhaseID: P.PHASE_3,
      },
    ],
  },

  EV_RAND_P3_004: {
    EventID: "EV_RAND_P3_004",
    Title: "Những Nhà Đầu Tư Phương Bắc",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_3,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Vốn phương Bắc muốn vào Theodore.",
            "Nhưng họ cần một tín hiệu rõ ràng từ anh.",
            "Không ai rót vốn vào một thành phố lưỡng lự.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE VÀ NGUY CƠ LỆ THUỘC TƯ BẢN ĐẾ QUỐC",
      Content:
        "Một số tập đoàn tài chính phương Bắc bắt đầu nhòm ngó thị trường thép của Theodore. Các nhà phân tích cảnh báo đây là bước đầu của quá trình xuất khẩu tư bản, biến người lao động thành công cụ bóc lột của ngoại bang",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Mở cửa vốn ngoại toàn phần",
        Content:
          "Mở cửa vốn ngoại toàn phần để hút tư bản. Tích lũy tăng nhanh, bất bình đẳng nới rộng.",
        Effects: {
          [E.ECONOMY]: 10,
          [E.EQUALITY]: -5,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Siết kiểm soát vốn ngoại",
        Content:
          "Siết kiểm soát vốn ngoại để giữ an ninh kinh tế. Ổn định chính trị tăng, tăng trưởng bị kìm lại.",
        Effects: {
          [E.SECURITY]: 5,
          [E.ECONOMY]: -2,
          [E.TRUST]: -10,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Từ chối vốn ngoại",
        Content:
          "Từ chối vốn ngoại để giữ độc lập. Người lao động bớt bị ép, nguồn lực phục hồi giảm mạnh.",
        Effects: {
          [E.TRUST]: 4,
          [E.ECONOMY]: -5,
        },
        NextPhaseID: P.PHASE_3,
      },
    ],
  },
});
