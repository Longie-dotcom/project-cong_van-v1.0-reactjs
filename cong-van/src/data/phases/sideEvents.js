import { STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";
import { MAIL_CONFIG } from "../assets/mails";

export const SIDE_EVENT = Object.freeze({
    // 1. Sự kiện "Độ Mixi gọi điện dọa (phong cách 'Alo Vũ')"


    // 2. Sự kiện "Phụ huynh FPT đến trường đòi công bằng"
    EV_RAND_FPT_PARENT: {
        EventID: "EV_RAND_FPT_PARENT",
        Telephone: {
            senderName: "Phụ huynh sinh viên",
            senderText: [
                "Tại sao con tôi phải làm việc trong mỏ than mà không được đi học?",
                "Tôi sẽ kiện lên phòng CTSV FPT!"
            ],
            choices: [
                {
                    text: "Giải quyết êm đẹp. (-20000 Tiền)",
                    effect: { [STATS.ECONOMY]: -20000 }
                },
                {
                    text: "Cứ kiện đi, tôi không sợ.",
                    effect: { }
                }
            ]
        }
    },

    // 3. Sự kiện "Đánh cắp tài liệu của Cartel"
    EV_RAND_LEAKED_DOCS: {
        EventID: "EV_RAND_LEAKED_DOCS",
        MailsList: [{
            id: "mail-leak-02",
            title: "TÀI LIỆU MẬT BỊ RÒ RỈ",
            content: "Patrick, tôi đã đánh cắp được bảng lương của Cartel. Họ đang bóc lột ngài còn hơn cả công nhân.",
            normalImg: MAIL_CONFIG.ITEMS.mail_3.normal,
            hoverImg: MAIL_CONFIG.ITEMS.mail_3.hover,
            choices: [
                { text: "Công khai lên mạng (-100000 Tiền)", effect: { [STATS.ECONOMY]: -100000 } },
                { text: "Đốt bỏ (An toàn)", effect: {} }
            ]
        }]
    },

    // 4. Sự kiện "Thầy Hoàng kiểm tra code mỏ"
    EV_RAND_THAY_HOANG_CODE: {
        EventID: "EV_RAND_THAY_HOANG_CODE",
        Telephone: {
            senderName: CHARACTER_CONFIG.GIAOLANG.name,
            senderImage: CHARACTER_CONFIG.GIAOLANG.images.default, // Dùng ảnh GiaoLang.jpg
            senderBlip: CHARACTER_CONFIG.GIAOLANG.sound,
            senderText: [
                "Patrick! Cái code quản lý than của anh dùng dependency injection kiểu gì thế này?",
                "Tôi cho anh 30 phút để refactor, không là tôi cho F' hết nhé!"
            ],
            choices: [
                {
                    text: "Ngồi sửa code gấp. (-5000 Than tiêu thụ)",
                    effect: { [STATS.COAL]: -5000 }
                },
                {
                    text: "Giả vờ mất mạng. (Rủi ro cao)",
                    effect: { }
                }
            ]
        }
    },

    // 5. Sự kiện "Công nhân đình công... vì game"
    EV_RAND_GAME_STRIKE: {
        EventID: "EV_RAND_GAME_STRIKE",
        Telephone: {
            senderName: "Đại diện công nhân",
            senderText: [
                "Sếp ơi, hôm nay game 'Shroomfall' update version mới.",
                "Anh em chúng tôi xin nghỉ làm để cày game, sếp cho phép không?"
            ],
            choices: [
                {
                    text: "Đồng ý, cày chung luôn! (-10000 Than)",
                    effect: { [STATS.COAL]: -10000 }
                },
                {
                    text: "Chỉ được nghỉ 1 tiếng!",
                    effect: { }
                }
            ]
        }
    },

    EV_RAND_SENA_ULTIMATE: {
        EventID: "EV_RAND_SENA_ULTIMATE",
        Telephone: {
            senderName: CHARACTER_CONFIG.TUSENA.name,
            senderImage: CHARACTER_CONFIG.TUSENA.images.default,
            senderBlip: CHARACTER_CONFIG.TUSENA.sound,
            senderText: [
                "Anh em nhé nhá, một ngày em Tú phải 12 nghìn kim cương. Vì thế thằng nào có tiền thì nạp tiền vào donate cho tao.",
                "Ít thì 5 quả trứng, nhiều thì 1 trái tên lửa. Chúng mày hiểu anh nói gì chưa? Anh không thích nói nhiều, anh nói để chúng mày nghe."
            ],
            choices: [
                {
                    text: "Donate 1 trái tên lửa (Tất tay: -50.000 Tiền)",
                    effect: { [STATS.ECONOMY]: -50000 },
                    triggeredNews: {
                        title: "QUẢN ĐỐC CHI BẠO VÌ 'TÊN LỬA'",
                        content: "Patrick đã gây sốc khi chi toàn bộ ngân sách mỏ cho một món quà trên sóng livestream của một người lạ mặt."
                    }
                },
                {
                    text: "Chỉ donate 5 quả trứng (-5.000 Tiền)",
                    effect: { [STATS.ECONOMY]: -5000 }
                },
                {
                    text: "Anh nói nhiều quá! Cúp máy.",
                    effect: { },
                    triggeredNews: {
                        title: "SENA TỨC GIẬN RỜI ĐI",
                        content: "Đối tượng tên Tú đã rời khỏi khu vực mỏ sau khi bị quản đốc 'cắt ngang' giữa cuộc nói chuyện."
                    }
                }
            ]
        }
    },

    // 6. Sự kiện "Kèo thơm từ Độ Mixi"
    EV_RAND_MIXIGAMING_BUFF: {
        EventID: "EV_RAND_MIXIGAMING_BUFF",
        Telephone: {
            senderName: CHARACTER_CONFIG.DOMIXI.name,
            senderImage: CHARACTER_CONFIG.DOMIXI.images.default,
            senderBlip: CHARACTER_CONFIG.DOMIXI.sound,
            senderText: [
                "Alo Patrick à? Anh đây.",
                "Đang ngồi livestream tiện tay bốc được hộp khô gà đè tem ngon quá, mà lại vừa thắng kèo được 80 nghìn tiền mặt.",
                "Thôi coi như có lộc, anh gửi tí quà này xuống mỏ than cho anh em ăn uống lấy sức mà làm việc nhé!"
            ],
            choices: [
                {
                    text: "Nhận khô gà và tiền từ Độ Mixi (+80000 Tiền, +5000 Than)",
                    effect: { [STATS.ECONOMY]: 80000, [STATS.COAL]: 5000 },
                    triggeredNews: {
                        title: "ĐỘ MIXI 'ĐỘ' MỎ THAN",
                        content: "Streamer Độ Mixi bất ngờ gửi tặng 80.000 tiền mặt và một lô khô gà đặc biệt cho tập thể công nhân mỏ."
                    }
                },
                {
                    text: "Em cám ơn anh, khô gà này em xin!",
                    effect: { },
                    triggeredNews: {
                        title: "BỮA ĂN NHẸ TRƯỚC GIỜ LÀM",
                        content: "Toàn bộ công nhân mỏ đang được tận hưởng món khô gà 'đè tem' trứ danh do quản đốc Patrick đích thân phân phát."
                    }
                }
            ]
        }
    },

    // 7. Sự kiện "Trúng mánh dưới hầm"
    EV_RAND_GOLD_VEIN: {
        EventID: "EV_RAND_GOLD_VEIN",
        Telephone: {
            senderName: "Quản lý tầng",
            senderText: [
                "Sếp! Anh em công nhân vừa đào trúng một túi tài nguyên ẩn.",
                "Không biết là của ai để lại, nhưng nó đầy ắp than và tiền!"
            ],
            choices: [
                {
                    text: "Thu hồi ngay! (+50000 Than, +10000 Tiền)",
                    effect: { [STATS.COAL]: 50000, [STATS.ECONOMY]: 10000 },
                    triggeredNews: {
                        title: "KHO BÁU DƯỚI LÒNG ĐẤT",
                        content: "Một túi tài nguyên bí ẩn được tìm thấy sâu trong vỉa than số 9, mang lại nguồn thu bất ngờ cho mỏ."
                    }
                }
            ]
        }
    },

    // 8. Sự kiện "Dự án Shroomfall lên kệ"
    EV_RAND_SHROOMFALL_SALE: {
        EventID: "EV_RAND_SHROOMFALL_SALE",
        Telephone: {
            senderName: "Đội ngũ Marketing",
            senderText: [
                "Sếp ơi! Game 'Shroomfall' vừa bán chạy trên Steam.",
                "Tiền đổ về tài khoản mỏ không ngừng nghỉ!"
            ],
            choices: [
                {
                    text: "Lấy tiền làm vốn sản xuất (+50000 Tiền)",
                    effect: { [STATS.ECONOMY]: 50000 },
                    triggeredNews: {
                        title: "SHROOMFALL GÂY SỐT TOÀN CẦU",
                        content: "Tựa game indie Shroomfall đang làm mưa làm gió trên Steam, mang lại lợi nhuận khổng lồ cho nhà phát triển."
                    }
                },
                {
                    text: "Đổi tiền lấy Than để tăng tiến độ (+30000 Than)",
                    effect: { [STATS.COAL]: 30000 }
                }
            ]
        }
    },

    // 9. Sự kiện "Elias hỏi về kỷ niệm gia đình"
    EV_RAND_ELIAS_MEMORY: {
        EventID: "EV_RAND_ELIAS_MEMORY",
        Telephone: {
            senderName: CHARACTER_CONFIG.ELIAS.name,
            senderImage: CHARACTER_CONFIG.ELIAS.images.happy,
            senderBlip: CHARACTER_CONFIG.ELIAS.sound,
            senderText: [
                "Cha ơi, tối nay mình cùng xem lại album ảnh cũ được không ạ?",
                "Con thích nhất tấm ảnh cha dạy con tập đi xe đạp ấy."
            ],
            choices: [
                {
                    text: "Cha sẽ về sớm.",
                    effect: { }
                },
                {
                    text: "Cha bận quá, mai nhé.",
                    effect: { }
                }
            ]
        }
    },

    // 11. Sự kiện "Elias muốn học nấu ăn"
    EV_RAND_ELIAS_COOK: {
        EventID: "EV_RAND_ELIAS_COOK",
        Telephone: {
            senderName: CHARACTER_CONFIG.ELIAS.name,
            senderImage: CHARACTER_CONFIG.ELIAS.images.happy,
            senderBlip: CHARACTER_CONFIG.ELIAS.sound,
            senderText: [
                "Cha ơi, con muốn học nấu món cha thích nhất.",
                "Con đã chuẩn bị sẵn nguyên liệu rồi, cha hướng dẫn con qua điện thoại được không?"
            ],
            choices: [
                {
                    text: "Tận tình chỉ dẫn (-10000 Tiền nguyên liệu)",
                    effect: { [STATS.ECONOMY]: -10000 }
                },
                {
                    text: "Để mẹ giúp con nhé.",
                    effect: { }
                }
            ]
        }
    },

    // 13. Sự kiện "Elias khoe thành tích"
    EV_RAND_ELIAS_GRADE: {
        EventID: "EV_RAND_ELIAS_GRADE",
        Telephone: {
            senderName: CHARACTER_CONFIG.ELIAS.name,
            senderImage: CHARACTER_CONFIG.ELIAS.images.happy, 
            senderBlip: CHARACTER_CONFIG.ELIAS.sound,
            senderText: [
                "Cha ơi! Con vừa nhận kết quả bài kiểm tra trên lớp.",
                "Con được điểm tuyệt đối đấy ạ! Cha có vui không?"
            ],
            choices: [
                {
                    text: "Cha tự hào về con lắm!",
                    effect: { }
                },
                {
                    text: "Giỏi lắm, mai cha thưởng quà nhé. (-5000 Tiền)",
                    effect: { [STATS.ECONOMY]: -5000 }
                }
            ]
        }
    },

    // 14. Sự kiện "Elias lo lắng khi trời mưa"
    EV_RAND_ELIAS_RAIN: {
        EventID: "EV_RAND_ELIAS_RAIN",
        Telephone: {
            senderName: CHARACTER_CONFIG.ELIAS.name,
            senderImage: CHARACTER_CONFIG.ELIAS.images.sad, // Giả định bạn có ảnh lo lắng
            senderBlip: CHARACTER_CONFIG.ELIAS.sound,
            senderText: [
                "Cha ơi, ngoài trời mưa to quá, sấm sét đáng sợ lắm...",
                "Cha đang ở đâu ạ? Cha nhớ giữ ấm kẻo cảm lạnh nhé!"
            ],
            choices: [
                {
                    text: "Cha không sao, con ở nhà ngoan nhé.",
                    effect: { }
                },
                {
                    text: "Cha về ngay đây, đừng sợ.",
                    effect: { }
                }
            ]
        }
    }
})