import { FLAG, STATS } from "../assets/stats";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_15 = Object.freeze({
    EventID: "DAY_15",
    conditions: [],
    MinCoalRequired: 90,

    Objectives: {
        currentDay: 15,
        deadlineDay: 20,
        requiredCoal: 1000,
        title: "Chỉ tiêu đợt 4",
        description: "Cartel ban hành chỉ tiêu 1000 tấn than. Không giải thích. Không thương lượng."
    },

    Telephone: {
        calls: [

            // =========================
            // CALL 1: ALEX - CARTEL DECISION
            // =========================
            {
                callID: "ALEX_QUOTA_ANNOUNCEMENT",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
                        senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.default,
                        senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
                        senderText: [
                            "Patrick.",
                            "Chỉ tiêu mới đã được phê duyệt."
                        ],
                        choices: [
                            { text: "Bao nhiêu?", nextNodeID: "ask" },
                            { text: "Đừng nói là…", nextNodeID: "realize" },
                            { text: "Ông đang đùa tôi đúng không?", nextNodeID: "anger" }
                        ]
                    },

                    ask: {
                        senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
                        senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.default,
                        senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
                        senderText: [
                            "1000 tấn.",
                            "Trước ngày 20."
                        ],
                        nextNodeID: null
                    },

                    realize: {
                        senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
                        senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.default,
                        senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
                        senderText: [
                            "Tôi không có thói quen báo tin ‘nhẹ nhàng’.",
                            "Đây là con số cuối cùng."
                        ],
                        nextNodeID: null
                    },

                    anger: {
                        senderName: CHARACTER_CONFIG.ALEXANDER_WHITMORE.name,
                        senderImage: CHARACTER_CONFIG.ALEXANDER_WHITMORE.images.serious,
                        senderBlip: CHARACTER_CONFIG.ALEXANDER_WHITMORE.sound,
                        senderText: [
                            "Cảm xúc không thay đổi được chỉ tiêu.",
                            "Hiệu suất thì có."
                        ],
                        nextNodeID: null
                    }
                }
            },

            // =========================
            // CALL 2: MIRA - BREAKDOWN
            // =========================
            {
                callID: "MIRA_QUOTA_BREAK",
                startNodeID: "root",
                nodes: {
                    root: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Patrick…",
                            "Anh xác nhận lại cho tôi một lần nữa.",
                            "1000 tấn… là thật sao?"
                        ],
                        choices: [
                            { text: "Đúng.", nextNodeID: "yes" },
                            { text: "Tôi không biết nữa.", nextNodeID: "doubt" },
                            { text: "Tôi không kiểm soát được.", nextNodeID: "powerless" },
                            { text: "Tôi cũng đang muốn đập nát nó.", nextNodeID: "anger_sync" }
                        ]
                    },

                    // =========================
                    // PATH 1: YES (cold collapse)
                    // =========================
                    yes: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "…",
                            "Vậy là không còn ‘hiểu lầm’ nữa."
                        ],
                        nextNodeID: "yes_2"
                    },

                    yes_2: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "1000 tấn không phải chỉ tiêu.",
                            "Nó là bài kiểm tra xem ai sẽ gãy trước."
                        ],
                        nextNodeID: null
                    },

                    // =========================
                    // PATH 2: DOUBT
                    // =========================
                    doubt: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Ngay cả anh cũng không chắc…",
                            "Vậy ai đang nắm quyền ra quyết định này?"
                        ],
                        nextNodeID: "doubt_2"
                    },

                    doubt_2: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Tôi bắt đầu nghĩ chúng ta không quản lý cái mỏ này nữa.",
                            "Chúng ta chỉ đang vận hành một thứ không cần con người hiểu nó."
                        ],
                        nextNodeID: null
                    },

                    // =========================
                    // PATH 3: POWERLESS
                    // =========================
                    powerless: {
                        senderName: "PATRICK",
                        senderText: [
                            "Tôi không có quyền thay đổi nó.",
                            "Tôi chỉ đang giữ cho mọi thứ chưa sập."
                        ],
                        nextNodeID: "mira_power"
                    },

                    mira_power: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Vậy là không ai có quyền…",
                            "NHƯNG VẪN CÓ NGƯỜI RA LỆNH."
                        ],
                        nextNodeID: null
                    },

                    // =========================
                    // PATH 4: ANGER SYNC
                    // =========================
                    anger_sync: {
                        senderName: "PATRICK",
                        senderText: [
                            "TÔI CŨNG KHÔNG CHỊU NỔI NỮA, MIRA.",
                            "1000 TẤN KHÔNG PHẢI MỤC TIÊU—NÓ LÀ SỰ ĐIÊN RỒ CÓ CHỮ KÝ!"
                        ],
                        nextNodeID: "mira_sync"
                    },

                    mira_sync: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "…",
                            "Ít nhất anh cũng thấy nó là gì rồi."
                        ],
                        nextNodeID: "mira_sync_2"
                    },

                    mira_sync_2: {
                        senderName: CHARACTER_CONFIG.MIRA_VOLKOV.name,
                        senderImage: CHARACTER_CONFIG.MIRA_VOLKOV.images.default,
                        senderBlip: CHARACTER_CONFIG.MIRA_VOLKOV.sound,
                        senderText: [
                            "Không ai ở đây đang quản lý sản xuất cả.",
                            "Chúng ta đang chứng kiến một hệ thống tự ăn chính nó."
                        ],
                        nextNodeID: null
                    }
                }
            }
        ]
    }
});