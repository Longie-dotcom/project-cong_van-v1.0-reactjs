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
            "Nhưng sống sót không có nghĩa là chiến thắng.",
            "Thành phố này cần một hướng đi rõ ràng.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Kho vận đang kiệt sức.",
            "Chúng ta không thể tiếp tục đổi hướng chính sách mỗi tháng.",
            "Hệ thống cần sự ổn định.",
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
        Title: "Trao thêm quyền cho The Cartel",
        Content: "Hợp tác sâu hơn với giới tài phiệt để tái thiết công nghiệp.",
        Effects: {
          [E.ECONOMY]: 10,
          [E.EQUALITY]: -8,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_4A,
      },
      {
        ChoiceID: "B",
        Title: "Duy trì chính quyền cân bằng",
        Content: "Giữ Theodore ở trạng thái ổn định trung lập.",
        Effects: {
          [E.TRUST]: 5,
          [E.ECONOMY]: 3,
          [E.EQUALITY]: 4,
        },
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "C",
        Title: "Đẩy mạnh cải cách dân sinh",
        Content: "Giảm quyền lực giới tài phiệt để mở rộng phúc lợi xã hội.",
        Effects: {
          [E.TRUST]: 8,
          [E.EQUALITY]: 10,
          [E.ECONOMY]: -8,
          [E.SECURITY]: -4,
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
            "Một số người tin Theodore cần lãnh đạo mạnh tay hơn.",
            "Thị trường không thích sự bất ổn kéo dài.",
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
        Title: "Tăng kiểm soát an ninh",
        Content: "Theo dõi các nhóm chống đối.",
        Effects: {
          [E.SECURITY]: 7,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Mở đối thoại chính trị",
        Content: "Cố gắng xoa dịu các phe phái.",
        Effects: {
          [E.TRUST]: 5,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Phớt lờ tin đồn",
        Content: "Không phản ứng công khai.",
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
          "Kính gửi Ngài Patrick,\n\nTôi vừa được chuyển sang khu lò số 42 theo điều động mới của nhà máy.\n\nKhông khí tại đó đặc và nóng đến mức nhiều người không thể làm việc quá vài giờ liên tục.\nTuy vậy, chúng tôi vẫn được yêu cầu tiếp tục vận hành dây chuyền như bình thường.\n\nTôi hiểu rằng những người ở vị trí của ngài phải đưa ra rất nhiều quyết định khó khăn.\nNhưng đôi lúc tôi tự hỏi liệu thành phố này có còn nhìn thấy những con người đang đứng phía dưới hay không.\n\nXin thứ lỗi nếu lời lẽ của tôi có phần vượt quá bổn phận.\n\nTrân trọng,\nClara Voss",
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
            "Chúng tôi cần tài nguyên để sửa chữa ngay lập tức.",
            "Nếu sản xuất dừng lại, toàn bộ Theodore sẽ trả giá.",
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
        Title: "Cứu nhà máy bằng mọi giá",
        Content: "Dồn tài nguyên sửa chữa Blackforge.",
        Effects: {
          [E.ECONOMY]: 8,
          [E.RESOURCE]: -6,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Điều tra an toàn lao động",
        Content: "Tạm đóng nhà máy để thanh tra.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 4,
          [E.ECONOMY]: -5,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Bắt Whitmore tự chịu trách nhiệm",
        Content: "Không hỗ trợ tài chính.",
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
        Title: "Phân phát lương thực khẩn cấp",
        Content: "Dùng ngân sách cứu trợ người dân.",
        Effects: {
          [E.TRUST]: 7,
          [E.EQUALITY]: 6,
          [E.ECONOMY]: -4,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Ưu tiên ổn định kinh tế",
        Content: "Không can thiệp mạnh.",
        Effects: {
          [E.ECONOMY]: 4,
          [E.TRUST]: -5,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Thiết quân luật phân phối",
        Content: "Quân đội kiểm soát thực phẩm.",
        Effects: {
          [E.SECURITY]: 7,
          [E.TRUST]: -3,
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
            "Các quỹ đầu tư từ phương Bắc muốn vào Theodore.",
            "Nhưng họ cần một tín hiệu rõ ràng từ anh.",
            "Không ai đầu tư vào một thành phố lưỡng lự.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE THU HÚT NHÀ ĐẦU TƯ NƯỚC NGOÀI",
      Content:
        "Một số tập đoàn tài chính quốc tế bắt đầu quan tâm tới thị trường thép và logistics của Theodore.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Mở cửa đầu tư hoàn toàn",
        Content: "Cho phép vốn ngoại vào Theodore.",
        Effects: {
          [E.ECONOMY]: 10,
          [E.EQUALITY]: -5,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "B",
        Title: "Kiểm soát đầu tư",
        Content: "Giới hạn ảnh hưởng nước ngoài.",
        Effects: {
          [E.SECURITY]: 5,
          [E.ECONOMY]: -2,
        },
        NextPhaseID: P.PHASE_3,
      },
      {
        ChoiceID: "C",
        Title: "Từ chối hợp tác",
        Content: "Giữ Theodore độc lập.",
        Effects: {
          [E.TRUST]: 4,
          [E.ECONOMY]: -5,
        },
        NextPhaseID: P.PHASE_3,
      },
    ],
  },
});
