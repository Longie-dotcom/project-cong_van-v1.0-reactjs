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
            "Trò chơi thăng bằng của anh chỉ đang bám víu vào mấy con số giả tạo",
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
            "Người dân đã hiểu: được lắng nghe hay không tùy túi tiền của Cartel.",
            "Đừng dùng niềm tin làm tường che cho bóc lột.",
            "Nếu niềm tin biến mất, họ sẽ tự lấy lại nhà máy và mọi thứ sẽ sụp đổ nhanh hơn a nghĩ.",
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
        Title: "Ban hành ưu đãi tài phiệt chiến lược",
        Content:
          "Ban hành ưu đãi tài phiệt để kéo tăng trưởng. Cartel hưởng lợi, công nhân chịu bất bình đẳng.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 8 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ban hành ưu đãi tài phiệt chiến lược'."
          },
          {
            effect: { [E.TRUST]: -4 },
            text: "Hậu quả của 'ban hành ưu đãi tài phiệt chiến lược' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.EQUALITY]: -5 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ban hành ưu đãi tài phiệt chiến lược'."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Duy trì thỏa ước đình chiến giai cấp",
        Content:
          "Duy trì thỏa ước đình chiến để giữ thế cân bằng. Thành phố cầm cự, bế tắc tiếp tục kéo dài.",
        Effects: [
          {
            effect: { [E.TRUST]: -5 },
            text: "Quyết sách 'duy trì thỏa ước đình chiến giai cấp' đẩy nhanh tiến trình tha hóa lao động vô sản."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Hậu quả của 'duy trì thỏa ước đình chiến giai cấp' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.ECONOMY]: 2 },
            text: "Quyết sách 'duy trì thỏa ước đình chiến giai cấp' tăng cường bóc lột sức lao động của công nhân."
          }
        ],
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Trưng dụng ngân khố cứu trợ lao động",
        Content:
          "Trưng dụng ngân khố cứu trợ lao động. Người dân được giữ ấm, tích lũy tư bản suy giảm.",
        Effects: [
          {
            effect: { [E.TRUST]: 5 },
            text: "Chủ trương 'trưng dụng ngân khố cứu trợ lao động' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Giai cấp vô sản hoàn toàn ủng hộ sách lược 'trưng dụng ngân khố cứu trợ lao động'."
          },
          {
            effect: { [E.ECONOMY]: -5 },
            text: "Việc 'trưng dụng ngân khố cứu trợ lao động' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          }
        ],
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
            "Công nhân East Rail vừa ngừng việc vì khẩu phần lại bị cắt để nuôi lò.",
            "Họ nói than của họ bị dồn cho lợi nhuận.",
            "Nếu chuyện này lan rộng, đó không còn là đình công mà là đòi lại quyền sở hữu.",
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
        Title: "Chấp thuận yêu sách và bù khẩu phần",
        Content:
          "Chấp thuận yêu sách và bù khẩu phần cho công nhân. Đời sống lao động ổn định hơn, dự trữ tài nguyên giảm.",
        Effects: [
          {
            effect: { [E.TRUST]: 6 },
            text: "Chủ trương 'chấp thuận yêu sách và bù khẩu phần' đánh thức ý thức giai cấp của quần chúng vô sản."
          },
          {
            effect: { [E.EQUALITY]: 5 },
            text: "Giai cấp vô sản hoàn toàn ủng hộ sách lược 'chấp thuận yêu sách và bù khẩu phần'."
          },
          {
            effect: { [E.RESOURCE]: -4 },
            text: "Việc 'chấp thuận yêu sách và bù khẩu phần' đã bóp nghẹt lực lượng sản xuất của toàn thành phố."
          },
          {
            effect: { [E.ECONOMY]: -6 },
            text: "Quy luật giá trị trừng phạt giới tài phiệt sau sách lược 'chấp thuận yêu sách và bù khẩu phần'."
          }
        ],
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "B",
        Title: "Cưỡng chế quay lại nhà máy",
        Content:
          "Cưỡng chế quay lại nhà máy để bảo vệ lợi nhuận. Kỷ luật tăng, lòng tin lao động sụp đổ.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 4 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'cưỡng chế quay lại nhà máy'."
          },
          {
            effect: { [E.TRUST]: -5 },
            text: "Hậu quả của 'cưỡng chế quay lại nhà máy' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.EQUALITY]: -5 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'cưỡng chế quay lại nhà máy'."
          }
        ],
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "C",
        Title: "Áp đặt thương lượng có kiểm soát",
        Content:
          "Áp đặt thương lượng có kiểm soát để giữ sản xuất. Thỏa hiệp hình thức, mâu thuẫn vẫn chưa được giải.",
        Effects: [
          {
            effect: { [E.TRUST]: -5 },
            text: "Quyết sách 'áp đặt thương lượng có kiểm soát' đẩy nhanh tiến trình tha hóa lao động vô sản."
          },
          {
            effect: { [E.ECONOMY]: 1 },
            text: "Giá trị thặng dư được tối ưu hóa thông qua chủ trương 'áp đặt thương lượng có kiểm soát'."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'áp đặt thương lượng có kiểm soát'."
          }
        ],
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
        Title: "Ký ưu đãi cho tư bản ngoại bang",
        Content:
          "Ký ưu đãi cho tư bản ngoại bang để hút vốn. Lợi nhuận tăng, công nhân bị ép giá.",
        Effects: [
          {
            effect: { [E.ECONOMY]: 7 },
            text: "Tích lũy tư bản gia tăng vượt bậc từ việc triển khai 'ký ưu đãi cho tư bản ngoại bang'."
          },
          {
            effect: { [E.EQUALITY]: -4 },
            text: "Hậu quả của 'ký ưu đãi cho tư bản ngoại bang' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          },
          {
            effect: { [E.TRUST]: -5 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'ký ưu đãi cho tư bản ngoại bang'."
          }
        ],
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "B",
        Title: "Công bố kế hoạch tự lực quốc gia",
        Content:
          "Công bố kế hoạch tự lực quốc gia để trấn an thị trường. Ổn định bề mặt, cải cách thực chất bị trì hoãn.",
        Effects: [
          {
            effect: { [E.TRUST]: -5 },
            text: "Quyết sách 'công bố kế hoạch tự lực quốc gia' đẩy nhanh tiến trình tha hóa lao động vô sản."
          },
          {
            effect: { [E.ECONOMY]: 2 },
            text: "Giá trị thặng dư được tối ưu hóa thông qua chủ trương 'công bố kế hoạch tự lực quốc gia'."
          },
          {
            effect: { [E.EQUALITY]: -6 },
            text: "Quần chúng chịu cảnh bần cùng hóa nặng nề sau quyết định 'công bố kế hoạch tự lực quốc gia'."
          }
        ],
        NextPhaseID: P.PHASE_4B,
      },
      {
        ChoiceID: "C",
        Title: "Im lặng để thị trường tự tháo chạy",
        Content:
          "Im lặng để thị trường tự tháo chạy. Dòng vốn rút đi, khu lao động chịu suy thoái sâu.",
        Effects: [
          {
            effect: { [E.ECONOMY]: -3 },
            text: "Chủ trương 'im lặng để thị trường tự tháo chạy' gây ra cuộc khủng hoảng tích lũy sâu sắc."
          },
          {
            effect: { [E.TRUST]: -2 },
            text: "Hậu quả của 'im lặng để thị trường tự tháo chạy' làm sâu sắc thêm mâu thuẫn đối kháng giai cấp."
          }
        ],
        NextPhaseID: P.PHASE_4B,
      },
    ],
  },
});
