import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_3 = Object.freeze({
    EventID: "DAY_3",
    conditions: [],

    Objectives: {
        currentDay: 3,
        deadlineDay: 5,
        requiredCoal: 30,
        title: "Chỉ tiêu đợt 1",
        description: "Đạt tối thiểu 30 tấn than trước ngày kiểm tra của hội đồng quản trị."
    },

    Telephone: {
        calls: [
            {
                callID: "BERNARD_BUDGET_CUT_CALL",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Patrick, tôi xem qua báo cáo tài chính mấy ngày qua rồi.",
                            "Chi phí vận hành phi sản xuất của anh đang quá cao. Đặc biệt là cái trạm xá mỏ và tiền mua khẩu trang lọc độc.",
                            "Cắt giảm nó đi. Thuốc men hay bông băng không đào ra than được."
                        ],
                        choices: [
                            { text: "Tôi sẽ tối ưu hóa lại ngân sách y tế.", nextNodeID: "agree" },
                            { text: "Trạm xá rất quan trọng để duy trì sức lao động.", nextNodeID: "defend" }
                        ]
                    },
                    agree: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Chính xác. Ai đổ bệnh thì cho nghỉ việc, tuyển người mới vào. Ngoài kia thiếu gì kẻ đói rách đang thèm việc.",
                            "Hãy ký lệnh tinh giảm ngân sách phúc lợi đi."
                        ],
                        nextNodeID: "ending"
                    },
                    defend: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Anh đang lo hão huyền rồi, Patrick.",
                            "Bọn thợ mỏ sống dai hơn anh nghĩ đấy. Đừng để lòng thương hại làm hỏng số liệu kinh doanh của tôi."
                        ],
                        nextNodeID: "ending"
                    },
                    ending: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Hồ sơ cắt giảm chi tiêu y tế đã nằm trên bàn anh.",
                            "Hãy chứng minh anh là người biết lo cho túi tiền of công ty."
                        ],
                        nextNodeID: null
                    }
                }
            },

            {
                callID: "MIRA_HEALTH_CRISIS_CALL",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, Clara bên phân khu sàng lọc vừa gửi báo cáo y tế của tuần này qua cho tôi.",
                            "Tình hình rất tồi tệ. Trạm xá mỏ đã cạn sạch thuốc ho và bình oxy, trong khi hơn một phần ba thợ mỏ lâu năm đang có dấu hiệu ho ra máu do bệnh bụi phổi.",
                            "Chúng tôi cần trích ngân sách khẩn cấp để mua mặt nạ phòng độc đạt chuẩn, chứ không phải mấy miếng vải rách hiện tại."
                        ],
                        choices: [
                            { text: "Tôi sẽ cấp ngân sách nâng cấp y tế.", nextNodeID: "help" },
                            { text: "Ngân sách hiện tại không cho phép, Mira.", nextNodeID: "deny" }
                        ]
                    },
                    help: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Quyết định đúng đắn đấy, quản đốc. Nếu phổi của công nhân nát bấy, cái mỏ này cũng sớm thành nghĩa địa thôi.",
                            "Để xem anh có giữ vững được lập trường này trước lão Bernard không."
                        ],
                        nextNodeID: "ending"
                    },
                    deny: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Không cho phép? Tiền bán than đổi bằng mạng sống của chúng tôi chảy vào túi các người đâu có thiếu một cắc!",
                            "Anh đang gián tiếp ký vào bản án tử hình cho chính những người đã cày cuốc để nuôi cái ghế của anh đấy."
                        ],
                        nextNodeID: "ending"
                    },
                    ending: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Đơn thỉnh nguyện và danh sách bệnh án đã được nộp lên bàn làm việc của anh.",
                            "Hy vọng lương tâm của anh còn hoạt động."
                        ],
                        nextNodeID: null
                    }
                }
            },

            {
                callID: "MIRA_HEALTH_CRISIS_CALL",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.DOMIXI.name,
                        senderImage: CHARACTER_CONFIG.DOMIXI.images.default, // Dùng ảnh DoMixi.png
                        senderBlip: CHARACTER_CONFIG.DOMIXI.sound,
                        senderText: [
                            "Alo em có phải Vũ không?",
                            "Ui Vũ ơi em đừng có chối, thông tin về tên địa chỉ nhà, học trường gì, ở đâu, bố mẹ tên là gì anh có cả ở đây rồi."
                        ],
                        choices: [
                            {
                                text: "* Chặn số *",
                            }
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
                title: "Nâng cấp y tế và bảo hộ lao động",
                description: "Trích ngân sách mua khẩu trang lọc độc chuyên dụng và bổ sung trang thiết bị cấp cứu cho trạm xá.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 5, explaination: "Sức khỏe thợ mỏ hồi phục, tỷ lệ nghỉ bệnh giảm." },
                    { stat: [STATS.ECONOMY], value: -20, explaination: "Chi phí y tế tăng cao." },
                    { stat: [STATS.COAL], value: 7, explaination: "Sản lượng duy trì ổn định." }
                ],
                triggeredNews: {
                    title: "Thông báo: Cấp phát vật tư bảo hộ và y tế lò mỏ",
                    content: "Ban quản lý phê duyệt gói ngân sách bổ sung thiết bị lọc khí đạt chuẩn và tái cung cấp cơ số thuốc cho trạm xá trung tâm."
                }
            },
            II: {
                title: "Giữ nguyên ngân sách phúc lợi",
                description: "Không tăng thêm chi phí bảo hộ, chỉ cấp các loại thuốc giảm đau thông thường để tiết kiệm.",
                effect: [
                    { stat: [STATS.RESOURCE], value: -3, explaination: "Bệnh tình công nhân không giảm, sự mệt mỏi tích tụ." },
                    { stat: [STATS.ECONOMY], value: -14, explaination: "Ngân sách thay đổi không đáng kể." },
                    { stat: [STATS.COAL], value: 7, explaination: "Sản lượng duy trì ổn định." }
                ]
            },
            III: {
                title: "Cắt giảm tối đa chi phí y tế",
                description: "Đóng cửa trạm xá không thiết yếu, dừng cấp khẩu trang vải để dồn tiền mua linh kiện máy đào.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 1, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -20, explaination: "Bệnh phổi lan rộng, lòng căm phẫn giai cấp dâng cao." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Cắt giảm khoản chi y tế lớn." },
                    { stat: [STATS.COAL], value: 10, explaination: "Máy móc mới tăng nhẹ năng suất thô." }
                ],
                triggeredNews: {
                    title: "Chỉ thị: Tối ưu hóa ngân sách vận hành phi sản xuất",
                    content: "Chính thức tạm dừng hoạt động trạm xá phụ và ngưng cấp phát khẩu trang định kỳ kể từ ngày mai."
                }
            }
        }
    }
});