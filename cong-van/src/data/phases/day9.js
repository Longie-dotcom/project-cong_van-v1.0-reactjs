import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_9 = Object.freeze({
    EventID: "DAY_9",
    conditions: [],

    Objectives: {
        currentDay: 9,
        deadlineDay: 10,
        requiredCoal: 60,
        title: "Chỉ tiêu đợt 2",
        description: "Đạt tối thiểu 60 tấn than trước ngày kiểm tra của hội đồng quản trị. Đừng khiến họ thất vọng."
    },

    Telephone: {
        calls: [
            {
                callID: "MIRA_UNREST_WARNING",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, công nhân đang tụ tập ở khu vực trung tâm. Họ kiệt sức và bắt đầu có dấu hiệu phản kháng.",
                            "Nếu không có động thái nhượng bộ nào từ văn phòng quản đốc, ngày mai đoàn thanh tra đến sẽ là một thảm họa."
                        ],
                        choices: [
                            { text: "Tôi đã nhận được báo cáo về tình hình tụ tập dưới mỏ.", nextNodeID: "noted" },
                            { text: "Báo cáo cho tôi biết chính xác ai đang dẫn đầu vụ việc này.", nextNodeID: "investigate" }
                        ]
                    },
                    noted: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Ghi nhận thì tốt, nhưng hành động thực tế mới cứu được anh khỏi sự cố ngày mai."],
                        nextNodeID: null
                    },
                    investigate: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Đừng tìm cách dập tắt bằng vũ lực hay trừng phạt cá nhân. Đó là lỗi của hệ thống quản lý ép tải này."],
                        nextNodeID: null
                    }
                }
            },
            {
                callID: "ALEXANDER_FINAL_AUDIT_PREP",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
                        senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
                        senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
                        senderText: [
                            "Patrick. Ngày mai tôi và Hội đồng quản trị sẽ có mặt tại Blackridge.",
                            "Tôi không muốn thấy bất kỳ sự sai lệch nào giữa sổ sách tài chính và sản lượng thực tế. Mọi số liệu báo cáo phải hoàn hảo."
                        ],
                        choices: [
                            { text: "Tôi đang rà soát lại các mục chi tiêu cuối cùng để đồng bộ dữ liệu.", nextNodeID: "reviewing" },
                            { text: "Mọi hồ sơ và chứng từ đang được tổng hợp theo đúng quy trình.", nextNodeID: "tracking" }
                        ]
                    },
                    reviewing: {
                        senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
                        senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
                        senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
                        senderText: ["Rà soát cho kỹ vào. Tôi không dung thứ cho bất kỳ vết gợn nào trong sổ sách làm ảnh hưởng đến uy tín của tập đoàn."],
                        nextNodeID: null
                    },
                    tracking: {
                        senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
                        senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
                        senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
                        senderText: ["Quy trình chỉ có giá trị khi con số cuối cùng làm hài lòng các cổ đông. Đừng để xảy ra sai sót vào giờ chót."],
                        nextNodeID: null
                    }
                }
            }
        ]
    },

    Paper: {
        choices: {
            I: {
                title: "Dọn dẹp và chuẩn bị đón tiếp",
                description: "Ngừng sản xuất sớm để dọn dẹp khu mỏ, sửa chữa thẩm mỹ cho Hội đồng hài lòng.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 20, explaination: "Không gian sạch sẽ giúp công nhân dễ chịu hơn." },
                    { stat: [STATS.ECONOMY], value: -20, explaination: "Chi phí nhân công dọn dẹp gấp." },
                    { stat: [STATS.COAL], value: -15, explaination: "Sản lượng bị cắt giảm để tập trung dọn dẹp." }
                ],
                triggeredNews: {
                    title: "Thông báo: Vệ sinh công nghiệp khu mỏ",
                    content: "Toàn bộ khu mỏ được dọn dẹp sạch sẽ để chuẩn bị đón tiếp đoàn thanh tra."
                }
            },
            II: {
                title: "Vận hành theo lịch trình",
                description: "Duy trì mọi thứ ở trạng thái bình thường, không phô trương.",
                effect: [
                    { stat: [STATS.RESOURCE], value: 0, explaination: "Tình trạng ổn định." },
                    { stat: [STATS.ECONOMY], value: -5, explaination: "Phí hành chính chuẩn bị hồ sơ." },
                    { stat: [STATS.COAL], value: 0, explaination: "Sản lượng duy trì ở mức trung bình." }
                ],
                triggeredNews: {
                    title: "Chỉ thị: Hoạt động bình thường",
                    content: "Không có sự thay đổi nào về lịch trình vận hành trong ngày cuối."
                }
            },
            III: {
                title: "Chiến dịch 'Than cho Hội đồng'",
                description: "Ép thợ mỏ làm việc 24/7, phớt lờ mọi cảnh báo an toàn để đẩy sản lượng lên đỉnh điểm.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 3, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -40, explaination: "Sức chịu đựng của công nhân chạm đáy." },
                    { stat: [STATS.ECONOMY], value: -5, explaination: "Chi phí vận hành tăng ca khẩn cấp." },
                    { stat: [STATS.COAL], value: 25, explaination: "Tối đa hóa sản lượng cho giờ chót." }
                ],
                triggeredNews: {
                    title: "Cảnh báo: Tình trạng kiệt sức tập thể",
                    content: "Ban quản lý ban bố tình trạng khẩn cấp. Mọi nguồn lực bị vắt kiệt để chạy đua chỉ tiêu cuối cùng."
                }
            }
        }
    }
});