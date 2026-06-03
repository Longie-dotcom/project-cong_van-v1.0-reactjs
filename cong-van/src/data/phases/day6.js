import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_6 = Object.freeze({
    EventID: "DAY_6",
    conditions: [],

    Objectives: {
        currentDay: 6,
        deadlineDay: 10,
        requiredCoal: 60,
        title: "Chỉ tiêu đợt 2",
        description: "Đạt tối thiểu 60 tấn than trước ngày kiểm tra của hội đồng quản trị. Đừng khiến họ thất vọng."
    },

    Telephone: {
        calls: [
            {
                callID: "MIRA_DRILL_OVERHEAT",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, nhiệt độ máy khoan ở sector 5 đã vượt mức an toàn 90 độ.",
                            "Nếu cứ để nó chạy ở công suất này, động cơ sẽ nổ tung trong vài giờ nữa."
                        ],
                        choices: [
                            { text: "Báo cáo của cô tôi đã nhận được.", nextNodeID: "acknowledge" },
                            { text: "Tình hình cụ thể tôi sẽ tự kiểm tra qua dữ liệu.", nextNodeID: "check" }
                        ]
                    },
                    acknowledge: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Dữ liệu thực tế và báo cáo của tôi trùng khớp đấy. Đừng để máy hỏng rồi mới tìm cách sửa."],
                        nextNodeID: null
                    },
                    check: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Cứ kiểm tra đi. Nhưng đừng đợi đến khi khói bốc lên mới bắt đầu hoảng loạn."],
                        nextNodeID: null
                    }
                }
            },
            {
                callID: "BERNARD_EFFICIENCY_CHECK",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Patrick, biểu đồ sản lượng đang có dấu hiệu đi ngang.",
                            "Tôi nhắc lại, chỉ tiêu 60 tấn là con số không thể thay đổi. Anh đang xử lý vấn đề kỹ thuật đó như thế nào?"
                        ],
                        choices: [
                            { text: "Tôi đang đánh giá các phương án bảo trì.", nextNodeID: "assessing" },
                            { text: "Chúng tôi vẫn đang bám sát tiến độ, dù có chút khó khăn kỹ thuật.", nextNodeID: "tracking" }
                        ]
                    },
                    assessing: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Đánh giá nhanh lên. Đừng để bộ phận kỹ thuật biến thành cái hố tiêu tiền của tôi."],
                        nextNodeID: null
                    },
                    tracking: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Khó khăn là chuyện của anh. Kết quả là thứ tôi nhìn vào. Hãy nhớ lấy."],
                        nextNodeID: null
                    }
                }
            }
        ]
    },

    Paper: {
        choices: {
            I: {
                title: "Đại tu hệ thống làm mát",
                description: "Dừng máy, thay thế linh kiện tản nhiệt. Tốn kém nhưng an toàn.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 15, explaination: "Thiết bị vận hành ổn định, công nhân bớt lo." },
                    { stat: [STATS.ECONOMY], value: -15, explaination: "Chi phí linh kiện thay thế." },
                    { stat: [STATS.COAL], value: -10, explaination: "Dừng máy làm giảm sản lượng." }
                ],
                triggeredNews: {
                    title: "Thông báo: Bảo trì hệ thống làm mát sector 5",
                    content: "Hệ thống tản nhiệt đã được thay thế. Hiệu suất máy ổn định nhưng sản lượng trong ngày giảm do gián đoạn vận hành."
                }
            },
            II: {
                title: "Throttling (Giảm xung nhịp)",
                description: "Ép máy chạy chậm lại để giảm nhiệt. Giải pháp trung dung.",
                effect: [
                    { stat: [STATS.RESOURCE], value: 0, explaination: "Thiết bị không bị quá tải nhưng cũ dần." },
                    { stat: [STATS.ECONOMY], value: -2, explaination: "Chi phí nhân công điều chỉnh thông số." },
                    { stat: [STATS.COAL], value: -2, explaination: "Sản lượng giảm nhẹ." }
                ],
                triggeredNews: {
                    title: "Chỉ thị: Điều chỉnh vận hành",
                    content: "Máy khoan hoạt động ở công suất thấp để duy trì nhiệt độ ổn định. Sản lượng đạt mức trung bình."
                }
            },
            III: {
                title: "Overclock (Ép tải tối đa)",
                description: "Bỏ qua cảnh báo nhiệt. Ép máy chạy hết công suất để đuổi kịp sản lượng.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -15, explaination: "Nguy cơ cháy nổ máy móc tăng cao." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Không mất phí." },
                    { stat: [STATS.COAL], value: 15, explaination: "Sản lượng tăng vọt bất chấp rủi ro." }
                ],
                triggeredNews: {
                    title: "Cảnh báo: Máy khoan sector 5 đang quá tải",
                    content: "Cảnh báo nhiệt độ đạt đỉnh. Mọi biện pháp an toàn bị vô hiệu hóa để ưu tiên mục tiêu sản lượng."
                }
            }
        }
    }
});