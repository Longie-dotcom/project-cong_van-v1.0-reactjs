import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";
import { MAIL_CONFIG } from "../assets/mails";

export const DAY_11 = Object.freeze({
    EventID: "DAY_11",
    conditions: [],

    Objectives: {
        currentDay: 11,
        deadlineDay: 15,
        requiredCoal: 90,
        title: "Khai thác Tầng 3",
        description: "Bắt đầu khai thác sâu tại Tầng 3. Khí độc tích tụ đe dọa trực tiếp mạng sống thợ mỏ, nhưng áp lực từ Cartel không hề giảm bớt."
    },

    Mails: [
        {
            id: "cartel_directive_phase3",
            title: "CHỈ THỊ VẬN HÀNH TẦNG SÂU",
            content: "Quản đốc Patrick, \n\nKể từ hôm nay, toàn bộ mũi khoan phải hướng xuống Tầng địa chất thứ 3. Biểu đồ địa tầng cho thấy trữ lượng than ở đây có mật độ carbon rất cao, tối ưu cho việc bốc xếp lên tàu của tập đoàn. \n\nMọi báo cáo về 'môi trường không an toàn' hay 'khí độc' từ phía công nhân phải được xử lý nội bộ, không làm gián đoạn dây chuyền. Lợi nhuận của đợt bàn giao ngày 15 phụ thuộc vào sự cứng rắn của anh. \n\n- Jonah Reed, Giám đốc Khai thác lâm thời.",
            normalImg: MAIL_CONFIG.ITEMS.mail_1.normal,
            hoverImg: MAIL_CONFIG.ITEMS.mail_1.hover,
            choices: [
                {
                    text: "* Xác nhận chỉ thị *",
                    actionType: "READ_NOTICE",
                    effect: [
                        { stat: [STATS.RESOURCE], value: 0, explaination: "Đã tiếp nhận thông tin." },
                        { stat: [STATS.ECONOMY], value: 0, explaination: "Không có ngân sách bổ sung." },
                        { stat: [STATS.COAL], value: 0, explaination: "Chưa có biến động sản lượng." }
                    ]
                }
            ]
        }
    ],

    Telephone: {
        calls: [
            {
                // Elias là con của Patrick
                callID: "ELIAS_FAMILY_CALL",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.ELIAS.name,
                        senderImage: CHARACTER_CONFIG.ELIAS.images.sad,
                        senderBlip: CHARACTER_CONFIG.ELIAS.sound,
                        senderText: [
                            "Bố…",
                            "Dạo này bố có về nhà không?",
                            "Con nghe mẹ nói bố làm việc nhiều lắm… gần như không ngủ."
                        ],
                        choices: [
                            {
                                text: "Bố đang bận. Đừng lo quá nhiều.",
                                nextNodeID: "busy_reply"
                            },
                            {
                                text: "Bố ổn. Chỉ là công việc thôi.",
                                nextNodeID: "fine_lie"
                            },
                            {
                                text: "…Bố không chắc mọi thứ còn ổn không.",
                                nextNodeID: "honest_break"
                            }
                        ]
                    },

                    busy_reply: {
                        senderName: CHARACTER_CONFIG.ELIAS.name,
                        senderImage: CHARACTER_CONFIG.ELIAS.images.sad,
                        senderBlip: CHARACTER_CONFIG.ELIAS.sound,
                        senderText: [
                            "Nhưng bố lúc nào cũng nói vậy…",
                            "Con chỉ thấy giọng bố ngày càng mệt hơn thôi."
                        ],
                        nextNodeID: null
                    },

                    fine_lie: {
                        senderName: CHARACTER_CONFIG.ELIAS.name,
                        senderImage: CHARACTER_CONFIG.ELIAS.images.sad,
                        senderBlip: CHARACTER_CONFIG.ELIAS.sound,
                        senderText: [
                            "Vậy sao…",
                            "Nhưng nếu ‘ổn’ mà nghe như đang cố chịu đựng thì có thật là ổn không bố?"
                        ],
                        nextNodeID: null
                    },

                    honest_break: {
                        senderName: CHARACTER_CONFIG.ELIAS.name,
                        senderImage: CHARACTER_CONFIG.ELIAS.images.sad,
                        senderBlip: CHARACTER_CONFIG.ELIAS.sound,
                        senderText: [
                            "…",
                            "Con không hiểu hết chuyện của người lớn.",
                            "Nhưng con biết khi ai đó nói câu đó thì họ đang rất mệt rồi."
                        ],
                        nextNodeID: null
                    }
                }
            },
            {
                // Bernard Hale gọi xuống ép sản lượng
                callID: "BERNARD_OUTPUT_PRESSURE",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Patrick, ngân sách đợt 3 đã chuyển vào ngày hôm qua rồi. Tôi muốn thấy những xe than từ Tầng 3 được kéo lên ngay lập tức.",
                            "Bên thu mua của tập đoàn đang giục tiến độ để kịp chuyến tàu viễn dương."
                        ],
                        choices: [
                            { text: "Hệ thống đang điều chỉnh để thích nghi với địa tầng mới.", nextNodeID: "adjusting" },
                            { text: "Tiến độ khai thác vẫn đang nằm trong tầm giám sát của tôi.", nextNodeID: "monitoring" }
                        ]
                    },
                    adjusting: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Điều chỉnh cho nhanh lên. Đừng dùng lý do địa tầng để bào chữa cho việc sụt giảm sản lượng đầu ngày."],
                        nextNodeID: null
                    },
                    monitoring: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Giám sát phải đi đôi với kết quả. Nhớ lấy, mục tiêu đợt này là 90 tấn, không có chỗ cho sự chậm trễ."],
                        nextNodeID: null
                    }
                }
            }
        ]
    },

    Paper: {
        choices: {
            I: {
                title: "Lắp đặt quạt hút thông gió công nghiệp",
                description: "Trích ngân sách mua hệ thống thông gió công suất lớn để đẩy khí độc ra ngoài. Tốn kém nhưng an toàn.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 15, explaination: "Không khí lưu thông tốt hơn, thợ mỏ an tâm làm việc." },
                    { stat: [STATS.ECONOMY], value: -25, explaination: "Chi phí thiết bị thông gió và lắp đặt rất cao." },
                    { stat: [STATS.COAL], value: -5, explaination: "Tạm dừng một số mũi khoan để lắp máy làm chậm tiến độ." }
                ],
                triggeredNews: {
                    title: "Tin tức Blackridge: Ưu tiên an toàn lao động",
                    content: "Ban quản lý phê duyệt lắp đặt hệ thống lọc khí khẩn cấp tại Tầng 3 nhằm bảo vệ sức khỏe thợ mỏ trước nguy cơ ngộ độc Metan."
                }
            },
            II: {
                title: "Cấp mặt nạ lọc than hoạt tính rẻ tiền",
                description: "Giải pháp trung dung, phát mặt nạ bảo hộ loại thường để công nhân tự che chắn và tiếp tục làm việc.",
                effect: [
                    { stat: [STATS.RESOURCE], value: -10, explaination: "Mặt nạ rẻ tiền gây khó thở khi làm việc nặng, công nhân bất mãn." },
                    { stat: [STATS.ECONOMY], value: -5, explaination: "Tốn một khoản chi phí nhỏ để mua vật tư bảo hộ." },
                    { stat: [STATS.COAL], value: 10, explaination: "Thợ mỏ vẫn phải bám lò đào, duy trì sản lượng tốt." }
                ],
                triggeredNews: {
                    title: "Thông báo nội bộ: Trang bị bảo hộ Tầng 3",
                    content: "Công nhân được phát mặt nạ lọc độc tiêu chuẩn thấp để đối phó với túi khí Metan mới phát hiện."
                }
            },
            III: {
                title: "Phớt lờ túi khí, ép tăng ca",
                description: "Làm theo chỉ thị của Cartel. Không chi tiền cho an toàn, ép thợ mỏ chịu đựng để tối đa hóa tốc độ đào.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 3, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -35, explaination: "Hàng loạt thợ mỏ ngộ độc khí, tinh thần toàn mỏ phẫn nộ dữ dội." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Không tốn một xu nào cho công tác bảo an." },
                    { stat: [STATS.COAL], value: 20, explaination: "Sản lượng than tăng vọt do khai thác bất chấp tính mạng." }
                ],
                triggeredNews: {
                    title: "Báo động đỏ: Ngộ độc tập thể dưới hầm lò",
                    content: "Nhiều thợ mỏ tại Blackridge ngất xỉu do hít phải khí độc độc hại tại Tầng 3. Làn sóng phản đối ban quản lý dâng cao."
                }
            }
        }
    }
});