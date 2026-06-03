import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_14 = Object.freeze({
    EventID: "DAY_14",
    conditions: [],

    Objectives: {
        currentDay: 14,
        deadlineDay: 15,
        requiredCoal: 90,
        title: "Cận kề kiểm tra",
        description: "Chỉ còn 1 ngày trước khi hội đồng kiểm tra. Đạt hoặc vượt 90 tấn than để tránh thất bại."
    },

    Telephone: {
        calls: [
            {
                callID: "MIRA_STRAINING_WORKFORCE",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, tình hình đang vượt khỏi tầm kiểm soát.",
                            "Một số nhóm thợ đã bắt đầu đình công cục bộ dưới khu số 2."
                        ],
                        choices: [
                            { text: "Tôi sẽ cử người đối thoại với họ.", nextNodeID: "dialogue" },
                            { text: "Kích hoạt ca thay thế để duy trì sản lượng.", nextNodeID: "replace" }
                        ]
                    },
                    dialogue: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Nếu không có hành động thực sự, họ sẽ không nghe đối thoại nữa đâu."
                        ],
                        nextNodeID: null
                    },
                    replace: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Anh đang đẩy mọi thứ đến giới hạn cuối cùng rồi đó, Patrick."
                        ],
                        nextNodeID: null
                    }
                }
            },

            {
                callID: "CARTELO_FINAL_PRESSURE",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Tôi cần số liệu sản lượng ngay lập tức.",
                            "Hợp đồng giao hàng sẽ bị phạt nếu không đạt mức tối thiểu hôm nay."
                        ],
                        choices: [
                            { text: "Công nhân đang đình công.", nextNodeID: "labor_issue" },
                            { text: "Tôi sẽ ép tăng sản lượng.", nextNodeID: "push_output" }
                        ]
                    },
                    labor_issue: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Đình công không nằm trong điều khoản hợp đồng của chúng tôi."
                        ],
                        nextNodeID: null
                    },
                    push_output: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Tốt. Chúng tôi mong thấy kết quả, không phải lý do."
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
                title: "Đàm phán với công nhân",
                description: "Ưu tiên ổn định nội bộ, giảm áp lực khai thác để tránh đình công lan rộng.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 20, explaination: "Công nhân dần hạ nhiệt, giảm đình công." },
                    { stat: [STATS.ECONOMY], value: -20, explaination: "Mất hợp đồng ngắn hạn do giảm sản lượng." },
                    { stat: [STATS.COAL], value: -5, explaination: "Sản lượng giảm do gián đoạn." }
                ],
                triggeredNews: {
                    title: "Báo cáo: Đối thoại lao động khẩn cấp",
                    content: "Ban quản lý tổ chức đối thoại với công nhân để giảm căng thẳng sản xuất."
                }
            },

            II: {
                title: "Ưu tiên sản lượng tuyệt đối",
                description: "Bỏ qua yêu cầu công nhân, tập trung hoàn thành chỉ tiêu và hợp đồng Cartel.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -20, explaination: "Bất mãn lao động tăng mạnh." },
                    { stat: [STATS.ECONOMY], value: 15, explaination: "Doanh thu tăng nhờ hợp đồng lớn." },
                    { stat: [STATS.COAL], value: 15, explaination: "Sản lượng tăng cao." }
                ],
                triggeredNews: {
                    title: "Chỉ thị: Tăng cường khai thác tối đa",
                    content: "Cartel yêu cầu đảm bảo sản lượng bất chấp tình hình nội bộ."
                }
            },

            III: {
                title: "Kích hoạt điều phối khẩn cấp",
                description: "Cân bằng tạm thời bằng cách điều chuyển nhân lực giữa các khu vực để giữ cả sản lượng và trật tự.",
                effect: [
                    { stat: [STATS.RESOURCE], value: 5, explaination: "Tình hình tạm ổn nhưng căng thẳng ngầm." },
                    { stat: [STATS.ECONOMY], value: -10, explaination: "Chi phí điều phối và vận hành tăng." },
                    { stat: [STATS.COAL], value: 8, explaination: "Duy trì sản lượng trung bình." }
                ],
                triggeredNews: {
                    title: "Báo cáo: Điều phối nhân lực khẩn cấp",
                    content: "Khu mỏ áp dụng tái phân bổ lao động để duy trì hoạt động."
                }
            }
        }
    }
});