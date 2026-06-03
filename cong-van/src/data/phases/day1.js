import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_1 = Object.freeze({
  EventID: "DAY_1",
  conditions: [],

  Objectives: {
    currentDay: 1,
    deadlineDay: 5,
    requiredCoal: 30,
    title: "Chỉ tiêu đợt 1",
    description: "Đạt tối thiểu 30 tấn than trước ngày kiểm tra của hội đồng quản trị."
  },

  Telephone: {
    calls: [
      {
        callID: "BERNARD_WELCOME_CALL",
        startNodeID: "root",
        nodes: {
          root: {
            senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
            senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
            senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
            senderText: [
              "Patrick.",
              "Chúc mừng anh được bổ nhiệm làm Quản đốc của mỏ Blackridge.",
              "Từ hôm nay toàn bộ hoạt động của khu mỏ này sẽ do anh phụ trách. Hội đồng quản trị kỳ vọng rất nhiều vào anh."
            ],
            choices: [
              { text: "Tôi sẽ không làm ông thất vọng.", nextNodeID: "response_1" },
              { text: "Tôi sẽ cố gắng hết sức.", nextNodeID: "response_2" },
              { text: "Tôi cần thời gian để nắm tình hình.", nextNodeID: "response_3" }
            ]
          },
          response_1: {
            senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
            senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
            senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
            senderText: [
              "Tốt. Tôi thích những người tự tin.",
              "Nhớ kỹ, thước đo tự tin duy nhất ở đây là những chuyến tàu đầy ắp than đá.",
              "Giờ thì văn phòng là của anh."
            ],
            choices: [{ text: "Tôi cảm ơn ngài.", nextNodeID: "ending" }]
          },
          response_2: {
            senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
            senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
            senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
            senderText: [
              "Cố gắng thôi là chưa đủ, Patrick. Chúng tôi cần kết quả thực tế.",
              "Đừng để cái ghế quản đốc làm anh phân tâm khỏi mục tiêu doanh thu."
            ],
            choices: [{ text: "Tôi cảm ơn ngài.", nextNodeID: "ending" }]
          },
          response_3: {
            senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
            senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
            senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
            senderText: [
              "Đừng mất quá nhiều thời gian.",
              "Mỗi giờ trôi qua mà than không được đào lên là một đống tiền của chúng tôi bay mất.",
              "Blackridge không chờ đợi ai cả. Giờ thì văn phòng là của anh."
            ],
            nextNodeID: "ending"
          },
          ending: {
            senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
            senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
            senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
            senderText: [
              "Từ bây giờ, cứ 5 ngày là anh cần phải đạt chỉ tiêu than tối thiểu",
              "Tôi không quan tâm anh làm bằng cách nào, cứ sau 4 ngày, ban quản trị cấp cao sẽ kiểm tra một lần",
              "Chỉ tiêu của anh trong đợt này là...",
              "... 30 (tấn) Than",
              "Giờ thì tôi còn vài cuộc họp phải tham dự với các cổ đông ở thủ đô.",
              "Chúc anh có một ngày làm việc hiệu quả và mang lại lợi nhuận."
            ],
            nextNodeID: null
          }
        }
      },
      {
        callID: "MIRA_FIRST_CALL",
        startNodeID: "root",
        nodes: {
          root: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Chào quản đốc mới.",
              "Tôi là Mira Volkov. Tôi là đại diện cho công đoàn thợ mỏ tại khu mỏ này.",
              "Nghe nói anh cũng xuất thân từ tầng lớp lao động, hy vọng anh sẽ dễ lắng nghe chúng tôi hơn những người tiền nhiệm."
            ],
            choices: [
              { text: "Rất vui được gặp cô, Mira.", nextNodeID: "friendly" },
              { text: "Tôi có thể giúp gì cho công đoàn?", nextNodeID: "neutral" },
              { text: "Tôi đang khá bận điều hành.", nextNodeID: "cold" }
            ]
          },
          friendly: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Tôi cũng hy vọng thế.",
              "Sự tử tế là thứ rất hiếm hoi ở cái thung lũng Blackridge đầy khói bụi này."
            ],
            nextNodeID: "problem"
          },
          neutral: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Được, tôi biết anh có rất nhiều việc phải làm, vậy tôi sẽ đi thẳng vào vấn đề luôn."
            ],
            nextNodeID: "problem"
          },
          cold: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Tôi hiểu. Ai ngồi vào cái ghế đó rồi cũng sẽ bận rộn với những con số lợi nhuận thôi.",
              "Nhưng chuyện này liên quan đến mạng sống con người, nên anh phải nghe."
            ],
            nextNodeID: "problem"
          },
          problem: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Máy khoan chính ở khu khai thác số 3 đã hoạt động liên tục hơn mười hai năm mà chưa từng được đại tu.",
              "Trong vài tuần gần đây nó thường phát ra những âm thanh rung lắc bất thường.",
              "Anh em thợ mỏ đang rất lo sợ nó sẽ sập hoặc phát nổ dưới hầm."
            ],
            choices: [
              { text: "Tôi sẽ xem xét lệnh bảo trì toàn diện.", nextNodeID: "answer_1" },
              { text: "Để tôi yêu cầu một bản sửa chữa tạm thời xem sao.", nextNodeID: "answer_2" },
              { text: "Nếu nó vẫn chạy được thì chưa phải vấn đề lớn.", nextNodeID: "answer_3" }
            ]
          },
          answer_1: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Cảm ơn anh, quản đốc. Đó là một quyết định dũng cảm.",
              "Tôi sẽ báo lại ngay để anh em yên tâm làm việc."
            ],
            nextNodeID: "ending"
          },
          answer_2: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Sửa tạm thời sao...? Ít nhất thì nó vẫn tốt hơn là bỏ mặc.",
              "Tôi sẽ gửi tài liệu kỹ thuật chi tiết qua văn phòng của anh."
            ],
            nextNodeID: "ending"
          },
          answer_3: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Chưa phải vấn đề? Đợi đến khi nó sập xuống và chôn vùi mười mạng người dưới đó thì mới là vấn đề sao?",
              "Hy vọng anh sẽ không phải trả giá đắt cho sự thờ ơ này."
            ],
            nextNodeID: "ending"
          },
          ending: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Tài liệu và các phương án phê duyệt đã được đặt trên bàn làm việc của anh.",
              "Chúc anh một ngày tốt lành, quản đốc Patrick."
            ],
            nextNodeID: null
          }
        }
      }
    ]
  },

  Paper: {
    choices: {
      I: {
        title: "Bảo trì toàn diện",
        description: "Tạm dừng hoạt động Khu mỏ số 3 để kiểm tra và thay thế toàn bộ linh kiện xuống cấp.",
        flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "+" },
        effect: [
          { stat: [STATS.RESOURCE], value: 10, explaination: "Công nhân an tâm và tin tưởng ban quản lý." },
          { stat: [STATS.COAL], value: 0, explaination: "Sản lượng trong ngày bị ngừng" },
          { stat: [STATS.ECONOMY], value: -15, explaination: "Chi phí linh kiện thay thế đắt đỏ." }
        ],
        triggeredNews: {
          title: "V/v: Tạm dừng vận hành dây chuyền hầm lò số 3",
          content: "Ngừng khai thác phân khu số 3 kể từ ca sau để đại tu kỹ thuật hệ thống máy khoan chính."
        }
      },
      II: {
        title: "Sửa chữa tạm thời",
        description: "Chỉ vá các lỗi rò rỉ cơ bản, giữ máy khoan chạy ở công suất trung bình để không làm gián đoạn khai thác.",
        effect: [
          { stat: [STATS.RESOURCE], value: 3, explaination: "Công nhân phần nào bớt lo lắng nhưng vẫn hoài nghi." },
          { stat: [STATS.COAL], value: 7, explaination: "Ảnh hưởng không đáng kể đến tiến độ." },
          { stat: [STATS.ECONOMY], value: -10, explaination: "Chi phí gia công và vá lỗi nhỏ." }
        ]
      },
      III: {
        title: "Tiếp tục vận hành",
        description: "Bác bỏ đề xuất bảo trì. Yêu cầu thợ mỏ tiếp tục làm việc để hoàn thành chỉ tiêu của Bernard Hale.",
        flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "-" },
        effect: [
          { stat: [STATS.RESOURCE], value: -8, explaination: "Sự bất mãn lan rộng, thợ mỏ lo sợ tai nạn." },
          { stat: [STATS.COAL], value: 10, explaination: "Sản lượng than được duy trì tối đa." },
          { stat: [STATS.ECONOMY], value: 0, explaination: "Không tốn chi phí kỹ thuật." }
        ],
        triggeredNews: {
          title: "Chỉ thị: Đảm bảo tiến độ khai thác phân khu số 3",
          content: "Ban quản lý yêu cầu giữ nguyên cường độ vận hành máy móc khu 3 để hoàn thành hợp đồng đúng thời hạn. Nghiêm cấm tự ý dừng thiết bị."
        }
      }
    }
  }
});