import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_7 = Object.freeze({
    EventID: "DAY_7",
    conditions: [],

    Objectives: {
        currentDay: 7,
        deadlineDay: 10,
        requiredCoal: 60,
        title: "Chỉ tiêu đợt 2",
        description: "Đạt tối thiểu 60 tấn than trước ngày kiểm tra của hội đồng quản trị. Đừng khiến họ thất vọng."
    },

    Telephone: {
        calls: [
            {
                // Cuộc gọi từ phe Vô sản (Công nhân)
                callID: "MIRA_BLUNT_DRILLS",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, các mũi khoan đã cùn hết rồi! Anh em công nhân đang phải dùng cơ bắp để bù cho máy móc, mất gấp đôi thời gian chỉ để phá một lớp vỉa.",
                            "Họ đang kiệt sức dưới hầm lò lò số 4 đấy."
                        ],
                        choices: [
                            { text: "Dữ liệu vận hành và phản ánh của cô tôi đang xem xét.", nextNodeID: "observing" },
                            { text: "Tình trạng hao mòn thiết bị là điều không thể tránh khỏi lúc này.", nextNodeID: "neutral" }
                        ]
                    },
                    observing: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Xem xét thì nhanh lên! Sức người có hạn, máy móc không tự sắc bén lại bằng ba cái báo cáo của anh được đâu."],
                        nextNodeID: null
                    },
                    neutral: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Không tránh khỏi? Anh đang nói giọng điệu giống hệt lão Bernard rồi đấy. Hãy nhớ ai là người đang đổ mồ hôi cho cái mỏ này."],
                        nextNodeID: null
                    }
                }
            },
            {
                // Cuộc gọi từ phe Thượng tầng (Cartel)
                callID: "WENTWORTH_MARGIN_PRESSURE",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
                        senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
                        senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
                        senderText: [
                            "Patrick, tôi là Eleanor Wentworth từ Hội đồng quản trị.",
                            "Báo cáo sơ bộ cho thấy tốc độ khai thác hôm nay sụt giảm. Tôi không quan tâm vấn đề kỹ thuật của anh là gì, nhưng biên lợi nhuận kỳ vọng của chúng tôi không thể bị kéo tụt."
                        ],
                        choices: [
                            { text: "Mọi biến động hiệu suất đều đang nằm trong sự giám sát của tôi.", nextNodeID: "monitoring" },
                            { text: "Tôi đang rà soát lại chi phí để tìm phương án tối ưu nhất.", nextNodeID: "optimizing" }
                        ]
                    },
                    monitoring: {
                        senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
                        senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
                        senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
                        senderText: ["Giám sát suông không tạo ra tấn than nào cả, Patrick. Hội đồng cần những con số thực tế hiển thị trên biểu đồ tài chính ngày mai."],
                        nextNodeID: null
                    },
                    optimizing: {
                        senderName: CHARACTER_CONFIG.ELEANOR_WENTWORTH.name,
                        senderImage: CHARACTER_CONFIG.ELEANOR_WENTWORTH.images.default,
                        senderBlip: CHARACTER_CONFIG.ELEANOR_WENTWORTH.sound,
                        senderText: ["Tối ưu cho khéo. Đừng để bộ phận kỹ thuật biến thành cái hố tiêu tiền của tập đoàn ngay trước kỳ kiểm tra."],
                        nextNodeID: null
                    }
                }
            }
        ]
    },

    Paper: {
        choices: {
            I: {
                title: "Thay mũi khoan mới (Hợp kim cứng)",
                description: "Mua linh kiện cao cấp từ nhà cung ứng của tập đoàn để tối ưu hiệu suất đào.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 10, explaination: "Hiệu suất đào tăng vượt trội, thợ mỏ bớt áp lực." },
                    { stat: [STATS.ECONOMY], value: -20, explaination: "Chi phí linh kiện đắt đỏ làm thâm hụt ngân sách." },
                    { stat: [STATS.COAL], value: 5, explaination: "Tốc độ khai thác cải thiện rõ rệt." }
                ],
                triggeredNews: {
                    title: "Thông báo: Nâng cấp linh kiện khai thác",
                    content: "Mũi khoan hợp kim mới đã được lắp đặt khẩn cấp. Sản lượng khai thác tăng nhờ công cụ đạt chuẩn."
                }
            },
            II: {
                title: "Mài lại mũi khoan hiện tại",
                description: "Tận dụng tài nguyên cũ để tiết kiệm ngân sách theo đúng ý Hội đồng.",
                effect: [
                    { stat: [STATS.RESOURCE], value: -5, explaination: "Mũi khoan mài lại vẫn khá yếu, thợ mỏ tốn sức." },
                    { stat: [STATS.ECONOMY], value: -2, explaination: "Chi phí nhân công mài giũa không đáng kể." },
                    { stat: [STATS.COAL], value: 0, explaination: "Hiệu suất khai thác không có biến động lớn." }
                ],
                triggeredNews: {
                    title: "Thông báo: Bảo dưỡng thủ công",
                    content: "Các mũi khoan được mài thủ công để tiết kiệm chi phí. Chúng chỉ tạm thời đáp ứng yêu cầu cơ bản."
                }
            },
            III: {
                title: "Tiếp tục sử dụng mũi khoan cùn",
                description: "Bỏ qua vấn đề kỹ thuật, ép thợ mỏ tăng ca dồn lực phá vỉa bằng tay.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -10, explaination: "Sự nản lòng lan rộng trong đội thợ do công cụ quá tệ." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Không tiêu tốn ngân sách mỏ." },
                    { stat: [STATS.COAL], value: -10, explaination: "Tốc độ khai thác chậm lại đáng kể do thiết bị quá cùn." }
                ],
                triggeredNews: {
                    title: "Cảnh báo: Hiệu suất khai thác xuống thấp",
                    content: "Việc trì hoãn thay mới linh kiện khiến tốc độ khai thác giảm mạnh. Đội thợ báo cáo gặp khủng hoảng vận hành."
                }
            }
        }
    }
});