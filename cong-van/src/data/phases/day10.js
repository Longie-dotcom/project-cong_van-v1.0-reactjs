import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";
import { MAIL_CONFIG } from "../assets/mails";

export const DAY_10 = Object.freeze({
    EventID: "DAY_10",
    MinCoalRequired: 60, // Phải đạt ít nhất 60 tấn tại mốc này để không bị Game Over
    conditions: [],

    Objectives: {
        currentDay: 10,
        deadlineDay: 15,
        requiredCoal: 90,
        title: "Chỉ tiêu đợt 3",
        description: "Hội đồng đang có mặt để kiểm tra. Mục tiêu tổng đã nâng lên 90 tấn trước ngày 15. Nhận ngân sách và chuẩn bị cho giai đoạn khắc nghiệt nhất."
    },

    Mails: [
        {
            id: "board_funding_midterm",
            title: "GIẢI NGÂN NGÂN SÁCH ĐỢT 3",
            content: "Patrick, \n\nHội đồng ghi nhận khu mỏ đã vượt qua mốc cơ bản đầu tiên. Tuy nhiên, mục tiêu cuối cùng của chúng ta là 90 tấn vào Ngày 15. \n\nTôi đã phê duyệt giải ngân 40 đơn vị ngân sách để anh tiếp tục duy trì hoạt động và chuẩn bị khai thác tầng sâu. Đừng làm tôi thất vọng. \n\n- E. Wentworth.",
            normalImg: MAIL_CONFIG.ITEMS.mail_3.normal,
            hoverImg: MAIL_CONFIG.ITEMS.mail_3.hover,
            choices: [
                {
                    text: "* Ký nhận ngân sách (+40 Tiền) *",
                    actionType: "RECEIVE_FUNDS",
                    effect: [
                        { stat: [STATS.RESOURCE], value: 0, explaination: "Không ảnh hưởng trực tiếp đến thợ mỏ." },
                        { stat: [STATS.ECONOMY], value: 40, explaination: "Hội đồng giải ngân ngân sách đợt 3." },
                        { stat: [STATS.COAL], value: 0, explaination: "Chưa tác động lên sản lượng." }
                    ]
                }
            ]
        }
    ],

    Telephone: {
        calls: [
            {
                callID: "BERNARD_MIDTERM_AUDIT",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: [
                            "Patrick, đoàn thanh tra đã vào vị trí. Chúng tôi sẽ đối chiếu sổ sách của anh với thực tế hầm lò.",
                            "Tiền đã được chuyển. Giờ là lúc anh chứng minh con số 90 tấn vào ngày 15 là khả thi."
                        ],
                        choices: [
                            { text: "Báo cáo số liệu đã được chuẩn bị sẵn trên bàn.", nextNodeID: "confirm" },
                            { text: "Các thông số kỹ thuật và nhân sự đang được tổng hợp đợt cuối.", nextNodeID: "neutral" }
                        ]
                    },
                    confirm: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Tốt. Tôi hy vọng những con số trên giấy không khác biệt quá lớn so với lượng than thực tế dưới mỏ."],
                        nextNodeID: null
                    },
                    neutral: {
                        senderName: CHARACTER_CONFIG.BERNARD_HALE.name,
                        senderImage: CHARACTER_CONFIG.BERNARD_HALE.images.default,
                        senderBlip: CHARACTER_CONFIG.BERNARD_HALE.sound,
                        senderText: ["Đừng kéo dài thời gian, Patrick. Hội đồng không có cả ngày để chờ anh cộng sổ."],
                        nextNodeID: null
                    }
                }
            },
            {
                callID: "MIRA_AUDIT_WARNING",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick, đoàn thanh tra đang đi ngang qua trạm y tế. Họ phớt lờ hoàn toàn những công nhân đang phải thở oxy.",
                            "Báo cáo của anh lát nữa sẽ có nhắc đến sự kiệt quệ này chứ? Hay lại là những con số được làm đẹp?"
                        ],
                        choices: [
                            { text: "Báo cáo sẽ phản ánh đúng các chỉ số vận hành hiện tại.", nextNodeID: "objective" },
                            { text: "Tôi đang xử lý các thủ tục hành chính, không thể nói trước điều gì.", nextNodeID: "dodging" }
                        ]
                    },
                    objective: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["'Chỉ số vận hành' - một cụm từ thật lạnh lùng. Hãy nhớ những chỉ số đó được đánh đổi bằng máu và phổi của chúng tôi."],
                        nextNodeID: null
                    },
                    dodging: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: ["Né tránh luôn là sở trường của anh. Chúc may mắn với màn kịch trước mặt Hội đồng."],
                        nextNodeID: null
                    }
                }
            }
        ]
    },

    Paper: {
        choices: {
            I: {
                title: "Báo cáo làm đẹp (Creative Accounting)",
                description: "Chi tiền thuê kế toán làm giả sổ sách, che giấu các khoản chi phí an toàn để làm hài lòng Hội đồng.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 2, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -15, explaination: "Thợ mỏ phát hiện sự giả dối, lòng tin giảm sút." },
                    { stat: [STATS.ECONOMY], value: -10, explaination: "Chi phí để 'bôi trơn' và làm giả hồ sơ." },
                    { stat: [STATS.COAL], value: 5, explaination: "Sản lượng trên giấy tờ được tối ưu đôi chút." }
                ],
                triggeredNews: {
                    title: "Thanh tra giữa kỳ: Mọi thứ trong tầm kiểm soát",
                    content: "Báo cáo của Blackridge được Hội đồng đánh giá cao. Sổ sách hoàn hảo dù thực trạng tại mỏ đang rất căng thẳng."
                }
            },
            II: {
                title: "Báo cáo thực trạng trung thực",
                description: "Trình bày rõ khó khăn về máy móc và y tế. Chấp nhận chịu phạt để giữ uy tín với công nhân.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 3, operator: "+" },
                effect: [
                    { stat: [STATS.RESOURCE], value: 25, explaination: "Công nhân cảm kích vì quản đốc dám nói lên sự thật." },
                    { stat: [STATS.ECONOMY], value: -25, explaination: "Hội đồng tức giận và phạt một khoản tiền trừ vào quỹ hoạt động." },
                    { stat: [STATS.COAL], value: -5, explaination: "Quá trình thanh tra kéo dài làm gián đoạn khai thác." }
                ],
                triggeredNews: {
                    title: "Căng thẳng tại Blackridge: Báo cáo gây tranh cãi",
                    content: "Hội đồng không hài lòng với thực trạng yếu kém của khu mỏ, cảnh báo sẽ có biện pháp mạnh tay nếu không đạt 90 tấn."
                }
            },
            III: {
                title: "Diễn kịch ép tiến độ",
                description: "Ép công nhân làm việc với cường độ cao nhất ngay lúc Hội đồng đi ngang qua để chứng minh hiệu suất.",
                flagAction: { flag: [FLAG.SUPPORTED_WORKER_SCORE], value: 4, operator: "-" },
                effect: [
                    { stat: [STATS.RESOURCE], value: -30, explaination: "Sức khỏe và tinh thần của đội thợ lao dốc nghiêm trọng." },
                    { stat: [STATS.ECONOMY], value: 0, explaination: "Không tiêu tốn ngân sách." },
                    { stat: [STATS.COAL], value: 15, explaination: "Màn kịch mang lại hiệu quả khai thác thức thời." }
                ],
                triggeredNews: {
                    title: "Biểu diễn hiệu suất: Công nhân kiệt sức",
                    content: "Để gây ấn tượng với đoàn thanh tra, thợ mỏ bị ép hoạt động trên 200% công suất trong một ca làm việc."
                }
            }
        }
    }
});