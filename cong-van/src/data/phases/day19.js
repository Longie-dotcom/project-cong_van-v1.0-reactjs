import { FLAG } from "../assets/stats";
import { MAIL_CONFIG } from "../assets/mails";
import { CHARACTER_CONFIG } from "../assets/characters";

export const DAY_19 = Object.freeze({
  EventID: "DAY_19",
  conditions: [],

  Objectives: {
    currentDay: 19,
    deadlineDay: 20,
    requiredCoal: 1000,
    title: "CHỈ TIÊU KHÔNG TƯỞNG",
    description:
      "1000 tấn than trước ngày kiểm tra. Không ai tin là có thể. Nhưng mệnh lệnh thì không quan tâm điều đó."
  },

  Mails: [
    {
      id: "mira_volkov_secret_letter",
      title: "THƯ MẬT — TRUYỀN TAY",

      content: [
        "Patrick,",
        "",
        "Tôi biết anh đang đọc những dòng này trong im lặng.",
        "Cái im lặng của một người vẫn phải tiếp tục làm việc dù mọi thứ đã sai từ lâu.",
        "",
        "1000 tấn.",
        "",
        "Anh không cần tôi nói nó vô lý.",
        "Anh đã thấy điều đó ngay khi con số được đưa xuống.",
        "",
        "Vấn đề không phải là khả thi hay không.",
        "Vấn đề là họ không còn quan tâm con người phải trả giá thế nào nữa.",
        "",
        "Tôi đã cố giữ mọi thứ ổn định.",
        "Tôi đã cố tin rằng có thể sửa từ bên trong.",
        "",
        "Nhưng Patrick…",
        "Đây không còn là hệ thống cần cải thiện.",
        "Đây là hệ thống đang thử xem con người chịu gãy đến mức nào trước khi phản kháng.",
        "",
        "Và anh đang đứng ngay trung tâm của nó.",
        "",
        "Tôi không viết thư này để ép anh.",
        "Tôi viết để anh không thể nói rằng anh không biết.",
        "",
        "Nếu anh còn một giới hạn mà anh không muốn vượt qua…",
        "thì đây là lúc anh chọn nó.",
        "",
        "Theo tôi.",
        "Hoặc tiếp tục làm việc như thể con số này là bình thường.",
        "",
        "Nhưng anh biết rồi đó…",
        "không có con đường thứ ba lâu dài đâu.",
        "",
        "— MIRA"
      ],

      normalImg: MAIL_CONFIG.ITEMS.mail_3.normal,
      hoverImg: MAIL_CONFIG.ITEMS.mail_3.hover,

      choices: [
        {
          text: "THEO MIRA — RỜI KHỎI HỆ THỐNG",
          actionType: "JOIN_REVOLUTION",
          flagAction: {
            flag: FLAG.JOINED_THE_REVOLUTION,
            value: true,
            operator: "="
          }
        },
        {
          text: "BÁO CÁO CHO CẤP TRÊN",
          actionType: "REJECT_REVOLUTION",
          flagAction: {
            flag: FLAG.JOINED_THE_REVOLUTION,
            value: false,
            operator: "="
          }
        }
      ]
    }
  ]
});