import { BRANCHES, CHARACTER_NAMES, EFFECT_STATS, PHASES } from "../constants";
import { IMAGES, SOUNDS } from "../assets";

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
            "Người dân vẫn còn sống.",
            "Sau tất cả những gì đã xảy ra... có lẽ đó đã là một chiến thắng.",
            "Nhưng họ sẽ không quên những quyết định của anh.",
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
          "Đặt kỷ luật thị trường và lợi nhuận lên trên sinh mạng, củng cố quyền lực cưỡng bức của nhà nước cho Cartel.",
        Effects: {
          [E.ECONOMY]: 12,
          [E.SECURITY]: 5,
          [E.EQUALITY]: -10,
        },
        NextPhaseID: P.ENDING,
        EndingPayload: {
          title: "KỶ NGUYÊN THÉP",
          subtitle: "Theodore Trở Thành Đầu Tàu Công Nghiệp Lạnh Lùng",
          description:
            "Kinh tế tăng trưởng vượt bậc, khói bụi nhà máy che mờ bầu trời. Giới tài phiệt hài lòng, nhưng người lao động phải oằn mình gánh chịu sự bất bình đẳng sâu sắc.",
        },
      },
      {
        ChoiceID: "B",
        Title: "Duy trì thỏa ước đình chiến giai cấp",
        Content:
          "Giữ hiện trạng bằng thỏa hiệp, kìm xung đột nhưng không giải quyết nguồn gốc bóc lột.",
        Effects: {
          [E.TRUST]: 8,
          [E.ECONOMY]: 4,
          [E.EQUALITY]: 4,
        },
        NextPhaseID: P.ENDING,
        EndingPayload: {
          title: "BÌNH MINH HÒA GIẢI",
          subtitle: "Con Đường Ngoại Giao Khôn Khéo",
          description:
            "Bạn đã chèo lái Theodore vượt qua cơn bão bằng sự thỏa hiệp. Thành phố không giàu lên quá nhanh, nhưng sự bình yên và lòng tin đã trở lại với các khu phố.",
        },
      },
      {
        ChoiceID: "C",
        Title: "Ban hành sắc lệnh tước đoạt Cartel",
        Content:
          "Tước quyền sở hữu tư liệu sản xuất, đặt nhà máy dưới quyền hội đồng công nhân và ưu tiên tái thiết giai cấp.",
        Effects: {
          [E.TRUST]: 10,
          [E.EQUALITY]: 12,
          [E.ECONOMY]: -8,
        },
        NextPhaseID: P.ENDING,
        EndingPayload: {
          title: "CHUYÊN CHÍNH VÔ SẢN",
          subtitle: "Giải Phóng Tư Liệu Sản Xuất",
          description:
            "Cartel bị xóa bỏ, các nhà máy chuyển sang do hội đồng công nhân (Soviet) điều hành. Lực lượng sản xuất được giải phóng trong một giai đoạn quá độ gian nan, nơi chính quyền công nhân vừa xây dựng vừa đấu tranh.",
        },
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
          "Mở luồng hàng hóa để cứu lợi nhuận, đẩy gánh nặng tài nguyên lên người lao động.",
        Effects: {
          [E.ECONOMY]: 6,
          [E.RESOURCE]: -2,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Trưng dụng vận tải cho hội đồng lao động",
        Content:
          "Ưu tiên đoàn tàu cứu trợ và tái thiết dưới sự kiểm soát của công nhân.",
        Effects: {
          [E.TRUST]: 5,
          [E.EQUALITY]: 4,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Thiết lập tích trữ chiến lược do nhà nước kiểm soát",
        Content:
          "Gom dự trữ để bảo toàn an ninh nhiên liệu, chấp nhận phục hồi chậm và kỷ luật phân phối.",
        Effects: {
          [E.RESOURCE]: 6,
          [E.ECONOMY]: -2,
        },
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
            "Người dân bắt đầu dựng bia tưởng niệm cho những người không sống sót qua mùa đông.",
            "Họ nói Theodore cần nhớ cái giá của sự sống còn.",
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
          "Công khai thừa nhận hy sinh của lao động và củng cố ký ức đấu tranh.",
        Effects: {
          [E.TRUST]: 7,
          [E.EQUALITY]: 4,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Ra tuyên cáo khép lại đấu tranh",
        Content:
          "Ép xã hội quên đi mất mát để phục hồi, ưu tiên ổn định cho giới có của.",
        Effects: {
          [E.ECONOMY]: 3,
          [E.TRUST]: -2,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Ban hành lệnh siết truyền thông",
        Content:
          "Dập mọi tiếng nói dễ châm ngòi phản kháng, bảo vệ trật tự bằng cưỡng bức.",
        Effects: {
          [E.SECURITY]: 5,
          [E.TRUST]: -5,
        },
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
            "Theodore sẽ trở thành biểu tượng... hoặc lời cảnh báo.",
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
          "Dồn vốn cho thép và vận tải, tăng tích lũy tư bản nhưng nới rộng bất bình đẳng.",
        Effects: {
          [E.ECONOMY]: 8,
          [E.EQUALITY]: -4,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "B",
        Title: "Phát động cải cách phúc lợi do công nhân giám sát",
        Content:
          "Ưu tiên nhà ở và phúc lợi dưới quyền giám sát của hội đồng lao động, chấp nhận tăng trưởng chậm.",
        Effects: {
          [E.TRUST]: 6,
          [E.EQUALITY]: 7,
          [E.ECONOMY]: -3,
        },
        NextPhaseID: P.PHASE_5,
      },
      {
        ChoiceID: "C",
        Title: "Tập trung quyền lực trung ương",
        Content:
          "Siết kiểm soát để ngăn khủng hoảng tái diễn, hy sinh lòng tin xã hội.",
        Effects: {
          [E.SECURITY]: 7,
          [E.TRUST]: -4,
        },
        NextPhaseID: P.PHASE_5,
      },
    ],
  },
});
