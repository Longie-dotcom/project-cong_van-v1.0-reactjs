import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_8 = Object.freeze({
    EventID: "DAY_8",
    conditions: [],

    Objectives: {
        currentDay: 8,
        deadlineDay: 10,
        requiredCoal: 60,
        title: "Chỉ tiêu đợt 2",
        description: "Đạt tối thiểu 60 tấn than trước ngày kiểm tra của hội đồng quản trị. Đừng khiến họ thất vọng."
    },

    Telephone: {
        calls: [
            {
                callID: "MIRA_SUPPLY_SHORTAGE",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, kho lương thực tại khu trại đang cạn kiệt. Thợ mỏ đang làm việc với cái bụng đói.",
                            "Điều này ảnh hưởng trực tiếp đến sức bền của họ."
                        ],
                        choices: [
                            { text: "Báo cáo tồn kho đã nằm trên bàn của tôi.", nextNodeID: "reviewing" },
                            { text: "Tình hình chuỗi cung ứng hiện tại đang gặp trục trặc.", nextNodeID: "logistics" }
                        ]
                    },
                    reviewing: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Nằm trên bàn thì không giúp họ no bụng được. Hy vọng anh sớm có hướng giải quyết."],
                        nextNodeID: null
                    },
                    logistics: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Trục trặc là vấn đề của quản lý. Công nhân chỉ thấy là họ đang bị bỏ đói."],
                        nextNodeID: null
                    }
                }
            },
            {
                callID: "BERNARD_INSPECTION_LOOMING",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Patrick, chỉ còn 48 giờ nữa là hội đồng có mặt.",
                            "Tôi muốn biết tình trạng sẵn sàng của khu mỏ tính đến thời điểm này."
                        ],
                        choices: [
                            { text: "Tôi đang giám sát tiến độ hoàn thành hạn ngạch.", nextNodeID: "monitoring" },
                            { text: "Mọi chỉ số sản xuất vẫn đang được theo dõi sát sao.", nextNodeID: "tracking" }
                        ]
                    },
                    monitoring: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Giám sát là việc của người điều hành. Tôi cần thấy những đống than đầy."],
                        nextNodeID: null
                    },
                    tracking: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Hy vọng sự theo dõi đó đi kèm với con số thực tế. Đừng làm tôi thất vọng."],
                        nextNodeID: null
                    }
                }
            }
        ]
    },

    Paper: {
        choices: {
            I: {
                title: "Nhập khẩu tiếp tế khẩn cấp",
                description: "Chi tiền mua thực phẩm chất lượng để đảm bảo sức khỏe thợ mỏ.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 25, explaination: "Sức khỏe và tinh thần thợ mỏ phục hồi." },
                    { stat: [STATS.ECONOMY], value: -30, explaination: "Chi phí nhập khẩu thực phẩm cao." },
                    { stat: [STATS.COAL], value: 0, explaination: "Không ảnh hưởng sản lượng." }
                ],
                triggeredNews: {
                    title: "Thông báo: Cải thiện chế độ dinh dưỡng",
                    content: "Nguồn tiếp tế đã được bổ sung. Sức khỏe của lực lượng lao động ổn định trở lại."
                }
            },
            II: {
                title: "Thực hiện chế độ khẩu phần (Rationing)",
                description: "Cắt giảm khẩu phần ăn để tiết kiệm chi phí, chỉ cấp đủ năng lượng tối thiểu.",
                effect: [
                    { stat: [STATS.RESOURCE], value: -5, explaination: "Công nhân không hài lòng nhưng vẫn làm việc." },
                    { stat: [STATS.ECONOMY], value: -5, explaination: "Chi phí vận hành kho vận thấp." },
                    { stat: [STATS.COAL], value: 2, explaination: "Không thay đổi nhiều về năng suất." }
                ],
                triggeredNews: {
                    title: "Chỉ thị: Áp dụng khẩu phần tiết kiệm",
                    content: "Ban quản lý bắt đầu cắt giảm thực phẩm để ưu tiên tiết kiệm ngân sách."
                }
            },
            III: {
                title: "Phớt lờ vấn đề lương thực",
                description: "Để mặc công nhân tự lo, tập trung ngân sách cho công cụ và sản xuất.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -25, explaination: "Sự phẫn nộ bùng phát do bị bỏ đói." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Không mất chi phí." },
                    { stat: [STATS.COAL], value: 8, explaination: "Duy trì sản lượng nhờ ép tiến độ." }
                ],
                triggeredNews: {
                    title: "Cảnh báo: Thiếu hụt nhu yếu phẩm trầm trọng",
                    content: "Tình trạng thiếu lương thực tại trại mỏ không được giải quyết, gây ảnh hưởng nghiêm trọng đến lòng tin."
                }
            }
        }
    }
});