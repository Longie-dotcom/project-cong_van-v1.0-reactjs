import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_4 = Object.freeze({
  EventID: "DAY_4",
  conditions: [],

  Objectives: {
    currentDay: 4,
    deadlineDay: 5,
    requiredCoal: 30,
    title: "Chỉ tiêu đợt 1",
    description: "Ngày cuối trước kỳ kiểm tra. Mọi sai sót lúc này đều có thể dẫn đến hậu quả nghiêm trọng."
  },

  Telephone: {
    calls: [
      {
        callID: "BERNARD_FINAL_PUSH_CALL",
        startNodeID: "root",
        nodes: {
          root: {
            senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
            senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
            senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
            senderText: [
              "Patrick, mai là ngày hội đồng quản trị đến kiểm tra rồi.",
              "Tập trung toàn lực. Bằng mọi giá, mỏ phải hoạt động 200% công suất trong 24h tới. Đừng làm tôi thất vọng."
            ],
            nextNodeID: null
          }
        }
      },
      {
        callID: "MIRA_GAS_LEAK_CALL",
        startNodeID: "root",
        nodes: {
          root: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Patrick! Hệ thống thông khí phân khu phía Bắc vừa hỏng hoàn toàn!",
              "Nồng độ khí metan đang tăng vọt, đã có 3 thợ mỏ đã ngất xỉu.",
              "Tôi đã gửi mẫu đơn 'Xử lý sự cố khẩn cấp' lên ngay trên bàn làm việc của anh. Anh phải ký vào đó ngay!"
            ],
            nextNodeID: "wait_for_decision"
          },
          wait_for_decision: {
            senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
            senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
            senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
            senderText: [
              "Anh chọn an toàn cho họ hay chỉ chăm chăm vào chỉ tiêu!?",
              "Đừng để tôi phải coi thường anh. RA QUYẾT ĐỊNH NHANH ĐI!!."
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
        title: "Lệnh sơ tán và xử lý sự cố khí độc",
        description: "Ngừng khai thác ngay lập tức, ưu tiên sơ tán toàn bộ khu vực phía Bắc.",
        flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "+" },
        effect: [
          { stat: [STATS.RESOURCE], value: 20, explaination: "Lòng tin của công nhân tăng cao." },
          { stat: [STATS.COAL], value: -15, explaination: "Sản lượng hụt trầm trọng." },
          { stat: [STATS.ECONOMY], value: -20, explaination: "Chi phí phạt hợp đồng và cứu hộ." }
        ],
        triggeredNews: {
          title: "Thông báo: Ngừng khai thác khẩn cấp",
          content: "Phân khu phía Bắc đã được sơ tán do nồng độ khí metan vượt ngưỡng an toàn. Mọi hoạt động đã tạm dừng."
        }
      },
      II: {
        title: "Vận hành hạn chế (Giảm công suất)",
        description: "Giảm tốc độ máy khoan, chỉ làm việc với một nhóm nhỏ công nhân lành nghề.",
        effect: [
          { stat: [STATS.RESOURCE], value: 5, explaination: "Công nhân chấp nhận rủi ro vừa phải." },
          { stat: [STATS.COAL], value: 5, explaination: "Sản lượng thấp nhưng ổn định." },
          { stat: [STATS.ECONOMY], value: -15, explaination: "Chi phí thiết bị bảo hộ." }
        ],
        triggeredNews: {
          title: "Chỉ thị: Hoạt động cầm chừng",
          content: "Khu vực phía Bắc hoạt động ở mức 30% công suất để đảm bảo an toàn thông khí. Tiến độ bị chậm lại đáng kể."
        }
      },
      III: {
        title: "Bịt kín khu vực, ép tiến độ tối đa",
        description: "Phớt lờ cảnh báo khí độc, phong tỏa khu vực để tập trung đào than.",
        flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "-" },
        effect: [
          { stat: [STATS.RESOURCE], value: -30, explaination: "Phản kháng dữ dội từ phía công nhân." },
          { stat: [STATS.COAL], value: 30, explaination: "Đạt chỉ tiêu sản lượng bằng mọi giá." },
          { stat: [STATS.ECONOMY], value: -12, explaination: "Chi phí vận hành khẩn cấp." }
        ],
        triggeredNews: {
          title: "Cảnh báo an toàn: Mỏ vẫn hoạt động",
          content: "Ban quản lý bác bỏ đề xuất sơ tán. Toàn bộ đội ngũ vẫn làm việc tại phân khu phía Bắc để đảm bảo hạn ngạch than cho hội đồng."
        }
      }
    }
  }
});