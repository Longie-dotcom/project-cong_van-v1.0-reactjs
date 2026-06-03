import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_12 = Object.freeze({
    EventID: "DAY_12",
    conditions: [],

    Objectives: {
        currentDay: 12,
        deadlineDay: 15,
        requiredCoal: 90,
        title: "Chỉ tiêu đợt 3",
        description:
            "Đạt tối thiểu 90 tấn than trước ngày kiểm tra của hội đồng quản trị. Áp lực sản xuất tiếp tục kéo theo nhiều yêu cầu hỗ trợ từ công nhân."
    },

    Telephone: {
        calls: [
            {
                callID: "MIRA_WORKER_REQUESTS_DAILY",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, tôi có danh sách yêu cầu từ khu công nhân hôm nay.",
                            "Không có gì nghiêm trọng, nhưng đang tăng dần theo từng ca làm.",
                            "Tôi cần anh quyết định cách xử lý."
                        ],
                        choices: [
                            { text: "Xử lý từng yêu cầu nhỏ.", nextNodeID: "careful" },
                            { text: "Ưu tiên sản xuất, tạm hoãn hỗ trợ.", nextNodeID: "delay" },
                            { text: "Cắt bớt các yêu cầu không cần thiết.", nextNodeID: "strict" }
                        ]
                    },

                    careful: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Ổn. Ít nhất họ sẽ cảm thấy được lắng nghe.",
                            "Nhưng ngân sách sẽ bị kéo dần xuống."
                        ],
                        nextNodeID: null
                    },

                    delay: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Tôi hiểu ưu tiên sản xuất…",
                            "Nhưng trì hoãn quá lâu thì họ sẽ bắt đầu phản ứng."
                        ],
                        nextNodeID: null
                    },

                    strict: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Nếu làm vậy, họ sẽ coi đây là tín hiệu bị bỏ mặc.",
                            "Tôi sẽ cố giữ tình hình ổn định ở mức thấp nhất có thể."
                        ],
                        nextNodeID: null
                    }
                }
            },

            {
                callID: "MANAGEMENT_DIRECTIVE_1",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: "Ban Điều Hành Blackridge",
                        senderText: [
                            "Yêu cầu giảm chi phí vận hành 10% ngay lập tức.",
                            "Bao gồm cắt giảm hỗ trợ sinh hoạt và bảo trì không thiết yếu."
                        ],
                        choices: [
                            { text: "Thực hiện theo chỉ thị.", nextNodeID: "accept" },
                            { text: "Yêu cầu xem xét lại tác động lao động.", nextNodeID: "pushback" }
                        ]
                    },

                    accept: {
                        senderName: "Ban Điều Hành Blackridge",
                        senderText: [
                            "Tốt. Hiệu quả tài chính là ưu tiên hàng đầu."
                        ],
                        nextNodeID: null
                    },

                    pushback: {
                        senderName: "Ban Điều Hành Blackridge",
                        senderText: [
                            "Các vấn đề lao động không được phép ảnh hưởng mục tiêu sản xuất.",
                            "Chúng tôi kỳ vọng anh xử lý nội bộ."
                        ],
                        nextNodeID: null
                    }
                }
            },

            {
                callID: "MANAGEMENT_DIRECTIVE_2",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: "Phòng Tài Chính",
                        senderText: [
                            "Đề xuất: hoãn nâng cấp thiết bị an toàn để dồn ngân sách cho khai thác.",
                            "Rủi ro vận hành sẽ được chấp nhận trong ngắn hạn."
                        ],
                        choices: [
                            { text: "Đồng ý hoãn nâng cấp.", nextNodeID: "agree" },
                            { text: "Không chấp nhận rủi ro an toàn.", nextNodeID: "refuse" }
                        ]
                    },

                    agree: {
                        senderName: "Phòng Tài Chính",
                        senderText: [
                            "Ghi nhận. Ngân sách sẽ được chuyển hướng."
                        ],
                        nextNodeID: null
                    },

                    refuse: {
                        senderName: "Phòng Tài Chính",
                        senderText: [
                            "Điều này sẽ ảnh hưởng chỉ tiêu lợi nhuận ngắn hạn.",
                            "Chúng tôi sẽ ghi nhận ý kiến của anh."
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
                title: "Ưu tiên hỗ trợ công nhân",
                description: "Giữ ổn định đời sống lao động, giảm áp lực xã hội.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 10, explaination: "Công nhân ổn định tinh thần." },
                    { stat: [STATS.ECONOMY], value: -10, explaination: "Tăng chi phí vận hành." },
                    { stat: [STATS.COAL], value: 2, explaination: "Sản lượng ổn định nhẹ." }
                ]
            },

            II: {
                title: "Cân bằng giữa sản xuất và hỗ trợ",
                description: "Giữ mức hỗ trợ tối thiểu, không tăng thêm chi phí.",
                effect: [
                    { stat: [STATS.RESOURCE], value: 0, explaination: "Tình hình ổn định trung bình." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Không thay đổi ngân sách." },
                    { stat: [STATS.COAL], value: 5, explaination: "Sản lượng duy trì." }
                ]
            },

            III: {
                title: "Thực hiện cắt giảm theo chỉ thị",
                description: "Giảm hỗ trợ để tối ưu hóa lợi nhuận theo yêu cầu ban điều hành.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -15, explaination: "Công nhân bất mãn tăng dần." },
                    { stat: [STATS.ECONOMY], value: 10, explaination: "Tăng lợi nhuận ngắn hạn." },
                    { stat: [STATS.COAL], value: 8, explaination: "Đẩy mạnh sản xuất." }
                ]
            }
        }
    }
});