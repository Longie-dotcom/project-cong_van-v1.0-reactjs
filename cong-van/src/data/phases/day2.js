import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_2 = Object.freeze({
    EventID: "DAY_2",
    conditions: [],

    Objectives: {
        currentDay: 2,
        deadlineDay: 5,
        requiredCoal: 30,
        title: "Chỉ tiêu đợt 1",
        description: "Đạt tối thiểu 30 tấn than trước ngày kiểm tra của hội đồng quản trị."
    },

    Telephone: {
        calls: [
            {
                callID: "ELEANOR_SHIFT_EXTEND_CALL",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
                        senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
                        senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
                        senderText: [
                            "Patrick, tôi là Eleanor đây. Hy vọng anh đã quen với chiếc ghế quản đốc.",
                            "Hội đồng quản trị vừa ký hợp đồng cung ứng than lớn với bên đường sắt quốc gia.",
                            "Chúng ta cần tăng thêm một ca đêm kéo dài 4 tiếng tại phân khu phía Đông để kịp bàn giao hàng."
                        ],
                        choices: [
                            { text: "Tôi sẽ triển khai lệnh tăng ca ngay.", nextNodeID: "agree" },
                            { text: "Tăng ca lúc này sẽ làm công nhân quá tải.", nextNodeID: "hesitate" }
                        ]
                    },
                    agree: {
                        senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
                        senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
                        senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
                        senderText: [
                            "Rất tốt. Sự quyết đoán của anh là lý do chúng tôi chọn anh.",
                            "Tất nhiên, lợi nhuận của chuyến hàng này sẽ giúp vị thế của anh vững chắc hơn."
                        ],
                        nextNodeID: "ending"
                    },
                    hesitate: {
                        senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
                        senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
                        senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
                        senderText: [
                            "Patrick, quản lý một tập đoàn công nghiệp không phải là làm từ thiện.",
                            "Họ là thợ mỏ, họ được trả tiền để đào than. Nếu không chịu nổi áp lực, họ có thể rời đi để người khác vào thay."
                        ],
                        nextNodeID: "ending"
                    },
                    ending: {
                        senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
                        senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
                        senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
                        senderText: [
                            "Văn bản điều chỉnh thời gian làm việc đã gửi tới chỗ anh rồi.",
                            "Đừng làm tôi và ngài Whitmore thất vọng."
                        ],
                        nextNodeID: null
                    }
                }
            },

            {
                callID: "MIRA_SHIFT_COMPLAINT_CALL",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, tôi vừa nhận được thư khiếu nại khẩn từ Jonah và anh em thợ đào ca đêm ở phân khu Đông.",
                            "Họ nói ban quản lý lại định ép họ cày thêm 4 tiếng ban đêm dưới hầm lò ngột ngạt.",
                            "Họ đã làm việc 10 tiếng một ngày rồi, nếu gồng gánh thêm mà không có phúc lợi gì thì họ sẽ kiệt sức mất!"
                        ],
                        choices: [
                            { text: "Tôi hiểu, tôi sẽ cố gắng điều chỉnh phúc lợi tăng ca.", nextNodeID: "sympathy" },
                            { text: "Đây là lệnh từ tập đoàn, mọi người phải chấp hành thôi.", nextNodeID: "strict" }
                        ]
                    },
                    sympathy: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Nếu anh trích ngân sách tăng phụ cấp xứng đáng hoặc giảm giờ làm ngày hôm sau, tôi sẽ thuyết phục anh em.",
                            "Sự bóc lột nào cũng phải có giới hạn của nó."
                        ],
                        nextNodeID: "ending"
                    },
                    strict: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Lệnh của tập đoàn? Anh ngồi trên văn phòng mát mẻ nên quên mất sương muối và bụi than gặm mòn phổi họ thế nào rồi sao?",
                            "Hy vọng anh chịu nổi trách nhiệm nếu có ai gục xuống dưới hầm lò."
                        ],
                        nextNodeID: "ending"
                    },
                    ending: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Đơn kiến nghị và văn bản điều phối ca làm việc tôi đã gửi kèm vào tập hồ sơ trên bàn anh rồi.",
                            "Cân nhắc cho kỹ, quản đốc."
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
                title: "Tăng phụ cấp và giới hạn giờ làm",
                description: "Chấp nhận tăng ca đêm nhưng trích ngân sách trả gấp đôi lương giờ và giảm 1 tiếng làm ca ngày hôm sau.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 3, explaination: "Công nhân mệt mỏi nhưng hài lòng vì được bù đắp." },
                    { stat: [STATS.COAL], value: 11, explaination: "Sản lượng tăng nhờ ca bổ sung." },
                    { stat: [STATS.ECONOMY], value: -18, explaination: "Tăng lương nên quỹ lương sẽ thâm hụt nặng." }
                ],
                triggeredNews: {
                    title: "Thông báo: Thay đổi cơ chế tính lương tăng ca khu Đông",
                    content: "Áp dụng hệ số lương x2.0 cho nhân sự làm việc ca đêm tăng cường tại phân khu Đông."
                }
            },
            II: {
                title: "Giữ nguyên quy chế (Tăng ca tiêu chuẩn)",
                description: "Yêu cầu tăng ca theo đúng quy định chung của tập đoàn, phụ cấp ở mức tối thiểu.",
                effect: [
                    { stat: [STATS.RESOURCE], value: -5, explaination: "Công nhân uể oải, năng suất sụt giảm." },
                    { stat: [STATS.COAL], value: 11, explaination: "Thu về lượng than ổn định nhưng nhỉnh hơn." },
                    { stat: [STATS.ECONOMY], value: -14, explaination: "Trả thêm tiền phụ cấp" }
                ]
            },
            III: {
                title: "Ép tiến độ tối đa (Không phụ cấp)",
                description: "Bắt buộc tăng ca 4 tiếng, áp lệnh phạt nặng nếu tổ đội nào không đạt chỉ tiêu sản lượng.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -15, explaination: "Nhiều công nhân kiệt sức, mầm mống phản kháng nhen nhóm." },
                    { stat: [STATS.COAL], value: 15, explaination: "Sản lượng đạt đỉnh, vượt mức kỳ vọng." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Quỹ lương không thay đổi." }
                ],
                triggeredNews: {
                    title: "Quyết định hành chính: Áp chỉ tiêu sản lượng khẩn cấp",
                    content: "Yêu cầu bắt buộc tăng ca đêm thêm 04 giờ đối với toàn bộ thợ mỏ khu Đông."
                }
            }
        }
    }
});