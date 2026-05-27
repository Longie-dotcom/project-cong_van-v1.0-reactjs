import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, MAILS, SOUNDS } from "../assets";

const NAMES = CHARACTER_NAMES;
const P = PHASES;
const B = BRANCHES;
const E = EFFECT_STATS;
const IMG = IMAGES.CHARACTERS;
const SFX = SOUNDS;
const MAIL = MAILS;

export const PHASE4B_EVENTS = Object.freeze({
  EV_MAIN_P4B_001: {
    EventID: "EV_MAIN_P4B_001",
    Title: "Nền Hòa Bình Mong Manh",
    Branch: B.PHASE_MAIN,
    PhaseID: P.PHASE_4B,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ALEXANDER_WHITMORE,
          senderImage: IMG.ALEXANDER_WHITMORE,
          senderBlip: SFX.ALEXANDER_WHITMORE,
          senderText: [
            "Anh đang cố giữ cân bằng bằng những con số đẹp đẽ.",
            "Nhưng công nghiệp không thể sống bằng sự do dự.",
            "Sớm muộn gì Theodore cũng phải chọn phe.",
          ],
        },
        {
          senderName: NAMES.BERNARD_HALE,
          senderImage: IMG.BERNARD_HALE,
          senderBlip: SFX.BERNARD_HALE,
          senderText: [
            "Các tuyến vận tải vẫn hoạt động.",
            "Nhưng chỉ cần thêm một cuộc đình công nữa, mọi thứ sẽ vỡ trận.",
            "Ổn định không phải trạng thái tự nhiên.",
          ],
        },
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Thị trường đang quan sát anh rất kỹ.",
            "Nhà đầu tư ghét sự bất định hơn cả khủng hoảng.",
            "Họ muốn biết Theodore thuộc về ai.",
          ],
        },
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Ít nhất người dân vẫn còn cảm thấy họ được lắng nghe.",
            "Đừng phá hủy điều cuối cùng giữ thành phố này bình tĩnh.",
            "Nếu niềm tin biến mất, mọi thứ sẽ sụp đổ nhanh hơn anh nghĩ.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "THEODORE TẠM THOÁT KHỎI KHỦNG HOẢNG TOÀN DIỆN",
      Content:
        "Sau nhiều tuần căng thẳng, chính quyền Theodore tạm thời duy trì được cân bằng giữa sản xuất công nghiệp và nhu cầu dân sinh.\n\nTuy nhiên, cả giới tài phiệt lẫn các tổ chức lao động đều cho rằng chính phủ đang thiếu lập trường rõ ràng.\n\nNhiều chuyên gia cảnh báo rằng sự ổn định hiện tại chỉ mang tính tạm thời.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Nghiêng về công nghiệp",
        Content: "Tăng hỗ trợ cho các tập đoàn để củng cố kinh tế.",
        Effects: {
          [E.ECONOMY]: 8,
          [E.TRUST]: -4,
          [E.EQUALITY]: -5,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Tiếp tục cân bằng",
        Content: "Duy trì phân phối hiện tại dù áp lực tăng cao.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 4,
          [E.ECONOMY]: 2,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Mở rộng hỗ trợ dân sinh",
        Content: "Đầu tư thêm vào các khu lao động và năng lượng dân dụng.",
        Effects: {
          [E.TRUST]: 8,
          [E.EQUALITY]: 7,
          [E.ECONOMY]: -5,
        },
        NextPhaseID: P.PHASE_5,
      },
    ],
  },

  EV_RAND_P4B_001: {
    EventID: "EV_RAND_P4B_001",
    Title: "Đình Công Cục Bộ",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_4B,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.MIRA_VOLKOV,
          senderImage: IMG.MIRA_VOLKOV,
          senderBlip: SFX.MIRA_VOLKOV,
          senderText: [
            "Một nhóm công nhân ở East Rail vừa ngừng làm việc.",
            "Họ nói khẩu phần than bị cắt thêm lần nữa.",
            "Nếu chuyện này lan rộng, mọi thứ sẽ khó kiểm soát.",
          ],
        },
      ],
    },

    Newspaper: {
      Title: "CÔNG NHÂN EAST RAIL TẠM NGỪNG LÀM VIỆC",
      Content:
        "Một số tuyến hậu cần bị chậm trễ sau khi công nhân yêu cầu cải thiện điều kiện sinh hoạt và phân phối nhiên liệu mùa đông.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Nhượng bộ yêu cầu",
        Content: "Cấp thêm khẩu phần than cho công nhân.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 5,
          [E.RESOURCE]: -4,
        },
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "B",
        Title: "Ép họ quay lại làm việc",
        Content: "Đe dọa cắt lương và sa thải.",
        Effects: {
          [E.ECONOMY]: 4,
          [E.TRUST]: -5,
        },
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "C",
        Title: "Đàm phán trung lập",
        Content: "Tổ chức thương lượng giữa công đoàn và doanh nghiệp.",
        Effects: {
          [E.TRUST]: 3,
          [E.ECONOMY]: 1,
        },
        NextPhaseID: P.PHASE_4B,
      },
    ],
  },

  EV_RAND_P4B_002: {
    EventID: "EV_RAND_P4B_002",
    Title: "Tin Đồn Trên Thị Trường",
    Branch: B.RANDOM,
    PhaseID: P.PHASE_4B,

    Telephone: {
      phoneCalls: [
        {
          senderName: NAMES.ELEANOR_WENTWORTH,
          senderImage: IMG.ELEANOR_WENTWORTH,
          senderBlip: SFX.ELEANOR_WENTWORTH,
          senderText: [
            "Một số nhà đầu tư đang rút vốn khỏi Theodore.",
            "Họ tin chính phủ không đủ mạnh để kiểm soát khủng hoảng.",
            "Niềm tin thị trường mong manh hơn anh tưởng.",
          ],
        },
      ],
    },

    MailsList: [
      {
        id: "mail-secret-4",
        Title: "LÁ THƯ KHÔNG ĐÓNG DẤU",
        Content:
          "Kính gửi Ngài Patrick,\n\nCa làm tiếp theo của tôi sẽ bắt đầu lúc 7 giờ sáng.\n\nDạo gần đây tôi thường có cảm giác mọi lá thư gửi đi đều đang bị đọc bởi một ai đó khác trước khi tới nơi cần đến.\nCó lẽ vì vậy mà tôi không còn biết nên viết điều gì nữa.\n\nTuy nhiên, nếu ngài thật sự đọc những lá thư trước đây,\ntôi mong ngài hãy để ý tới những con số xuất hiện trong đó.\n\nCó những điều trong thành phố này không thể được nói ra một cách trực tiếp.\n\nTrân trọng,\nClara Voss",
        NormalAsset: MAIL.MAIL_4.NORMAL,
        HoverAsset: MAIL.MAIL_4.HOVER,
      },
    ],

    Newspaper: {
      Title: "GIỚI ĐẦU TƯ LO NGẠI VỀ TƯƠNG LAI THEODORE",
      Content:
        "Nhiều doanh nghiệp bắt đầu chuyển tài sản sang các thành phố phía Bắc do lo ngại bất ổn kéo dài tại Theodore.",
    },

    Choices: [
      {
        ChoiceID: "A",
        Title: "Cam kết bảo vệ doanh nghiệp",
        Content: "Đưa ra ưu đãi cho các tập đoàn lớn.",
        Effects: {
          [E.ECONOMY]: 7,
          [E.EQUALITY]: -4,
        },
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "B",
        Title: "Trấn an công chúng",
        Content: "Công bố kế hoạch phục hồi quốc gia.",
        Effects: {
          [E.TRUST]: 5,
          [E.ECONOMY]: 2,
        },
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "C",
        Title: "Không phản hồi",
        Content: "Để thị trường tự điều chỉnh.",
        Effects: {
          [E.ECONOMY]: -3,
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_4B,
      },
    ],
  },
});
