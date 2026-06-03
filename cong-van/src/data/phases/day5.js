import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";
import { MAIL_CONFIG } from "../assets/mails";

export const DAY_5 = Object.freeze({
    EventID: "DAY_5",
    MinCoalRequired: 30,
    conditions: [],

    Objectives: {
        currentDay: 5,
        deadlineDay: 10,
        requiredCoal: 60,
        title: "Chỉ tiêu đợt 2",
        description: "Đạt tối thiểu 60 tấn than trước ngày kiểm tra của hội đồng quản trị. Đừng khiến họ thất vọng."
    },

    Telephone: {
        calls: [
            {
                callID: "MIRA_FILTER_REQUEST",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, bộ lọc khí của hầm lò số 4 đã hết hạn. Công nhân đang hít bụi than trực tiếp.",
                            "Tôi cần anh biết tình trạng này."
                        ],
                        choices: [
                            { text: "Tôi đã nhận được báo cáo về tình trạng này.", nextNodeID: "acknowledge" },
                            { text: "Tôi đang đánh giá lại ngân sách mỏ, tình hình không mấy khả quan.", nextNodeID: "complain" }
                        ]
                    },
                    acknowledge: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Thông tin đã được ghi nhận. Hy vọng nó không nằm lại trên bàn giấy của anh quá lâu."],
                        nextNodeID: null
                    },
                    complain: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Ngân sách luôn là lý do cửa miệng. Tôi chỉ đang thông báo thực trạng, không đợi anh than vãn."],
                        nextNodeID: null
                    }
                }
            },
            {
                callID: "BERNARD_QUOTA_PRESSURE",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Patrick, chỉ tiêu 30 tấn đã xong. Đợt này mục tiêu nâng lên 60 tấn than.",
                            "Tình hình nhân sự và máy móc phía anh đang thế nào?"
                        ],
                        choices: [
                            { text: "Tôi đang kiểm tra lại dữ liệu sản lượng và hiệu suất.", nextNodeID: "checking" },
                            { text: "Mọi thứ đang được điều chỉnh để theo sát chỉ tiêu.", nextNodeID: "adjusting" }
                        ]
                    },
                    checking: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Đừng mất quá nhiều thời gian để kiểm tra. Hãy đảm bảo con số cuối cùng là 60."],
                        nextNodeID: null
                    },
                    adjusting: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Điều chỉnh nhanh lên. Hội đồng không thích sự chậm trễ trong báo cáo."],
                        nextNodeID: null
                    }
                }
            }
        ]
    },

    Paper: {
        choices: {
            I: {
                title: "Thay mới bộ lọc khí",
                description: "Đầu tư hệ thống lọc mới. Chi phí lớn.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 20, explaination: "Sức khỏe đảm bảo." },
                    { stat: [STATS.ECONOMY], value: -25, explaination: "Chi phí mua thiết bị mới." },
                    { stat: [STATS.COAL], value: 3, explaination: "Sản lượng giảm nhẹ do lắp đặt." }
                ],
                triggeredNews: {
                    title: "Thông báo: Nâng cấp hệ thống thông khí",
                    content: "Hệ thống lọc khí tại hầm lò số 4 đã được thay mới. Môi trường làm việc cải thiện đáng kể."
                }
            },
            II: {
                title: "Bảo trì bộ lọc cũ",
                description: "Sửa chữa tạm thời. Chi phí thấp.",
                effect: [
                    { stat: [STATS.RESOURCE], value: 0, explaination: "Công nhân tạm chấp nhận." },
                    { stat: [STATS.ECONOMY], value: -9, explaination: "Chi phí bảo trì nhỏ." },
                    { stat: [STATS.COAL], value: 7, explaination: "Sản lượng ổn định." }
                ],
                triggeredNews: {
                    title: "Thông báo: Bảo trì kỹ thuật định kỳ",
                    content: "Bộ lọc cũ đã được sửa chữa tạm thời. Cần theo dõi thêm về độ ổn định."
                }
            },
            III: {
                title: "Tạm hoãn bảo trì",
                description: "Không chi tiêu. Dồn lực khai thác.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -20, explaination: "Phẫn nộ tăng." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Không tiêu tốn ngân sách." },
                    { stat: [STATS.COAL], value: 10, explaination: "Đạt mức tối đa." }
                ],
                triggeredNews: {
                    title: "Chỉ thị: Ưu tiên khai thác sản lượng",
                    content: "Mọi yêu cầu bảo trì tạm hoãn. Toàn bộ tập trung vào việc đạt hạn ngạch 60 tấn than."
                }
            }
        }
    },

    Mails: [
        {
            id: "cartel_funding_1",
            title: "CẤP VỐN CHO VẬN HÀNH ĐỢT 2",
            content: "Sau khi xem xét báo cáo sản lượng đạt 30 tấn, Hội đồng quản trị ra quyết định cấp thêm ngân sách để tiếp tục vận hành. Hãy sử dụng cho đúng mục đích.",
            normalImg: MAIL_CONFIG.ITEMS.mail_3.normal,
            hoverImg: MAIL_CONFIG.ITEMS.mail_3.hover,
            choices: [
                {
                    text: "* Nhận vốn (Tiền +70) *",
                    actionType: "RECEIVE_FUNDS",
                    effect: [
                        { stat: [STATS.RESOURCE], value: 0, explaination: "Không ảnh hưởng nhân lực." },
                        { stat: [STATS.ECONOMY], value: 70, explaination: "Cấp vốn từ doanh nghiệp." },
                        { stat: [STATS.COAL], value: 0, explaination: "Không ảnh hưởng sản lượng." }
                    ]
                }
            ]
        }
    ]
});