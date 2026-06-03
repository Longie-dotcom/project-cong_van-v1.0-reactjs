import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_13 = Object.freeze({
    EventID: "DAY_13",
    conditions: [],

    Objectives: {
        currentDay: 13,
        deadlineDay: 15,
        requiredCoal: 90,
        title: "Chỉ tiêu đợt 3",
        description: "Đạt tối thiểu 90 tấn than trước kỳ kiểm tra tiếp theo của hội đồng và các bên đầu tư."
    },

    Telephone: {
        calls: [
            {
                callID: "MIRA_WORKER_AID_REQUEST",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, tình hình dưới mỏ đang rất căng thẳng.",
                            "Ca làm kéo dài, thiết bị xuống cấp và công nhân đang yêu cầu được hỗ trợ thêm."
                        ],
                        choices: [
                            { text: "Tôi sẽ xem xét phân bổ ngân sách hỗ trợ.", nextNodeID: "support" },
                            { text: "Hiện tại ưu tiên vẫn là sản lượng.", nextNodeID: "production" }
                        ]
                    },
                    support: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Ít nhất anh vẫn còn quan tâm đến họ. Tôi sẽ thông báo để trấn an công nhân."
                        ],
                        nextNodeID: null
                    },
                    production: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Nếu cứ tiếp tục ép như vậy, sẽ có ngày mọi thứ sụp đổ dưới lòng đất."
                        ],
                        nextNodeID: null
                    }
                }
            },

            {
                callID: "CARTELO_PRODUCTION_DIRECTIVE",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Quản đốc Patrick, tôi đã xem báo cáo sản lượng gần đây.",
                            "Yêu cầu của thị trường đã tăng. Anh cần đẩy sản lượng lên mức tối đa."
                        ],
                        choices: [
                            { text: "Công nhân đang quá tải.", nextNodeID: "labor_warning" },
                            { text: "Tôi sẽ tăng ca khai thác.", nextNodeID: "comply" }
                        ]
                    },
                    labor_warning: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Công nhân là vấn đề nội bộ của anh. Hợp đồng quan trọng hơn cảm xúc."
                        ],
                        nextNodeID: null
                    },
                    comply: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Tốt. Đó là thứ tôi muốn nghe từ một quản đốc."
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
                title: "Phân bổ viện trợ cho công nhân",
                description: "Giảm lợi nhuận để hỗ trợ điều kiện làm việc và tinh thần thợ mỏ theo đề xuất của Mira.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 25, explaination: "Công nhân ổn định tinh thần, giảm đình công." },
                    { stat: [STATS.ECONOMY], value: -25, explaination: "Chi phí phúc lợi tăng mạnh." },
                    { stat: [STATS.COAL], value: 3, explaination: "Sản lượng ổn định nhưng không bùng nổ." }
                ],
                triggeredNews: {
                    title: "Thông báo: Tăng cường phúc lợi lao động",
                    content: "Ban quản lý quyết định bổ sung hỗ trợ cho công nhân khu mỏ."
                }
            },

            II: {
                title: "Tuân thủ chỉ thị Cartel",
                description: "Tăng ca khai thác để đáp ứng nhu cầu thị trường bất chấp áp lực lên công nhân.",
                effect: [
                    { stat: [STATS.RESOURCE], value: -15, explaination: "Công nhân kiệt sức và bất mãn gia tăng." },
                    { stat: [STATS.ECONOMY], value: 10, explaination: "Doanh thu tăng từ hợp đồng lớn." },
                    { stat: [STATS.COAL], value: 12, explaination: "Sản lượng tăng mạnh." }
                ],
                triggeredNews: {
                    title: "Chỉ thị: Tăng cường khai thác",
                    content: "Cartel yêu cầu nâng sản lượng để đáp ứng nhu cầu thị trường."
                }
            },

            III: {
                title: "Cân bằng tạm thời",
                description: "Vừa hạn chế hỗ trợ vừa tăng nhẹ sản lượng, giữ trạng thái trung lập giữa Cartel và công đoàn.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "=" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 5, explaination: "Tình hình ổn định tạm thời." },
                    { stat: [STATS.ECONOMY], value: -5, explaination: "Chi phí điều chỉnh vận hành." },
                    { stat: [STATS.COAL], value: 6, explaination: "Sản lượng duy trì mức trung bình." }
                ],
                triggeredNews: {
                    title: "Báo cáo: Điều chỉnh vận hành khu mỏ",
                    content: "Ban quản lý áp dụng chính sách cân bằng giữa sản lượng và phúc lợi."
                }
            }
        }
    }
});