// src/data/gameStory.js
import AlexanderWhitmore from '../assets/image/character/alexander-whitmore.png';
import AlexanderWhitmoreSerious from '../assets/image/character/alexander-whitmore-serious.png';
import BernardHale from '../assets/image/character/bernard-hale.png';
import EleanorWentworth from '../assets/image/character/eleanor-wentworth.png';
import ClaraVoss from '../assets/image/button/reorganize1.png';
import JonahReed from '../assets/image/button/reorganize2.png';
import MiraVolkov from '../assets/image/character/mira-volkov.png';
import Elias from '../assets/image/character/elias.png';
import EliasSad from '../assets/image/character/elias-sad.png';
import EliasHappy from '../assets/image/character/elias-happy.png';

import AlexanderWhitmoreSound from '../assets/sound/alexander-whitmore.mp3';
import BernardHaleSound from '../assets/sound/bernard-hale.mp3';
import EleanorWentworthSound from '../assets/sound/eleanor-wentworth.mp3';
import ClaraVossSound from '../assets/sound/alexander-whitmore.mp3'; // change later
import JonahReedSound from '../assets/sound/alexander-whitmore.mp3'; // change later
import MiraVolkovSound from '../assets/sound/mira-volkov.mp3';
import EliasSound from  '../assets/sound/elias.mp3';

import MailNormalImage1 from '../assets/mail/mail1.png';
import MailHoverImage1 from '../assets/mail/mail2.png';
import MailNormalImage2 from '../assets/mail/mail3.png';
import MailHoverImage2 from '../assets/mail/mail4.png';
import MailNormalImage3 from '../assets/mail/mail5.png';
import MailHoverImage3 from '../assets/mail/mail6.png';
import MailNormalImage4 from '../assets/mail/mail7.png';
import MailHoverImage4 from '../assets/mail/mail8.png';

export const GAME_PHASES = {
  "PHASE_1": {
    "PhaseID": "PHASE_1",
    "Events": [
      "EV_MAIN_P1_001",
      "EV_RAND_P1_001",
      "EV_RAND_P1_002",
      "EV_RAND_P1_003"
    ]
  },

  "PHASE_2A": {
    "PhaseID": "PHASE_2A",
    "Events": [
      "EV_MAIN_P2A_001",
      "EV_RAND_P2A_001",
      "EV_RAND_P2A_002",
      "EV_RAND_P2A_003"
    ]
  },

  "PHASE_2B": {
    "PhaseID": "PHASE_2B",
    "Events": [
      "EV_MAIN_P2B_001",
      "EV_RAND_P2B_001",
      "EV_RAND_P2B_002"
    ]
  },

  "PHASE_2C": {
    "PhaseID": "PHASE_2C",
    "Events": [
      "EV_MAIN_P2C_001",
      "EV_RAND_P2C_001",
      "EV_RAND_P2C_002",
      "EV_RAND_P2C_003"
    ]
  },

  "PHASE_3": {
    "PhaseID": "PHASE_3",
    "Events": [
      "EV_MAIN_P3_001",
      "EV_RAND_P3_001",
      "EV_RAND_P3_002",
      "EV_RAND_P3_003",
      "EV_RAND_P3_004"
    ]
  },

  "PHASE_4A": {
    "PhaseID": "PHASE_4A",
    "Events": [
      "EV_MAIN_P4A_001",
      "EV_RAND_P4A_001",
      "EV_RAND_P4A_002"
    ]
  },

  "PHASE_4B": {
    "PhaseID": "PHASE_4B",
    "Events": [
      "EV_MAIN_P4B_001",
      "EV_RAND_P4B_001",
      "EV_RAND_P4B_002"
    ]
  },

  "PHASE_4C": {
    "PhaseID": "PHASE_4C",
    "Events": [
      "EV_MAIN_P4C_001",
      "EV_RAND_P4C_001",
      "EV_RAND_P4C_002",
      "EV_RAND_P4C_003"
    ]
  },

  "PHASE_5": {
    "PhaseID": "PHASE_5",
    "Events": [
      "EV_MAIN_P5_001",
      "EV_RAND_P5_001",
      "EV_RAND_P5_002",
      "EV_RAND_P5_003"
    ]
  }
};

export const EVENTS_DATABASE = {
  "EV_MAIN_P1_001": {
    "EventID": "EV_MAIN_P1_001",
    "Title": "Mùa Đông Của Thành Phố Than",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_1",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Elias",
          "senderImage": Elias,
          "senderBlip": EliasSound,
          "senderText": [
            "Cha lại làm việc muộn nữa à?",
            "Con bảo đầu bếp giữ phần bánh táo cho cha rồi đó."
          ]
        },
        {
          "senderName": "Elias",
          "senderImage": EliasSad,
          "senderBlip": EliasSound,
          "senderText": [
            "Nhớ về sớm nhé..."
          ]
        },
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Patrick, Theodore không thể sống nếu thiếu thép.",
            "Nếu anh tiếp tục ưu tiên dân sinh, Blackforge sẽ dừng lại trong một tuần.",
          ]
        },
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmoreSerious,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Và khi lò nung tắt, thành phố này cũng tắt theo."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Tuyến đường sắt đang quá tải.",
            "Nếu không tăng phân bổ cho logistics, toàn bộ hệ thống sẽ nghẽn.",
            "Kinh tế không chờ lòng trắc ẩn."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Thị trường không quan tâm đạo đức.",
            "Nó chỉ quan tâm trật tự.",
            "Và trật tự luôn cần thép."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Người lao động không hỏi về kinh tế.",
            "Họ hỏi khi nào họ được sống."
          ]
        }
      ]
    },

    "MailsList": [
      {
        "id": "mail-secret-1",
        "Title": "THƯ TỪ KHU LAO ĐỘNG PHÍA ĐÔNG",
        "Content": "Kính gửi Ngài Patrick,\n\nTôi xin thứ lỗi vì đã làm phiền ngài bằng lá thư này.\n\nNgày hôm qua, tôi tiếp tục làm việc từ ca số 3 đến tận 8 giờ tối tại nhà máy phía Đông.\nNhiệt độ trong xưởng đã xuống thấp đến mức nhiều đường ống bắt đầu đóng băng.\n\nMột vài công nhân đã bắt đầu xin nghỉ việc,\nnhưng phần lớn chúng tôi đều hiểu rằng mình không còn nơi nào khác để đi.\n\nTôi chỉ mong ngài sẽ lưu tâm đôi chút tới tình hình hiện tại của khu lao động phía Đông.\n\nTrân trọng,\nClara Voss",
        "NormalAsset": MailNormalImage1,
        "HoverAsset": MailHoverImage1
      }
    ],

    "Newspaper": {
      "Title": "THEODORE ĐỨNG TRÊN BỜ VỰC KHỦNG HOẢNG NHIÊN LIỆU",
      "Content": "Mùa đông 1962...\n\nThan giảm mạnh trong khi công nghiệp tăng áp lực..."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Ưu tiên công nghiệp",
        "Content": "Dồn than cho Whitmore Steel và Hale Logistics.",
        "Effects": {
          "Economy": 12,
          "Equality": -12,
          "Resource": -8,
          "Trust": -5
        },
        "NextPhaseID": "PHASE_2A"
      },
      {
        "ChoiceID": "B",
        "Title": "Cân bằng",
        "Content": "Giữ ổn định giữa dân sinh và công nghiệp.",
        "Effects": {
          "Trust": 6,
          "Equality": 6,
          "Economy": 3
        },
        "NextPhaseID": "PHASE_2B"
      },
      {
        "ChoiceID": "C",
        "Title": "Ưu tiên dân sinh",
        "Content": "Giảm công nghiệp để cứu dân.",
        "Effects": {
          "Trust": 10,
          "Equality": 8,
          "Economy": -10,
          "Resource": -6
        },
        "NextPhaseID": "PHASE_2C"
      }
    ]
  },

  "EV_RAND_P1_001": {
    "EventID": "EV_RAND_P1_001",
    "Title": "Ga Tàu Quá Tải",
    "Branch": "RANDOM",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Các tuyến vận chuyển đang bị nghẽn tại ga trung tâm.",
            "Nếu không ưu tiên than cho logistics, toàn bộ chuỗi cung ứng sẽ đứng yên.",
            "Tàu không thể chạy bằng ý chí chính trị."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "TẮC NGHẼN LOGISTICS LAN RỘNG",
      "Content": "Hệ thống đường sắt của Theodore ghi nhận tình trạng quá tải nghiêm trọng. Nhiều đoàn tàu chở than phải dừng giữa đường do thiếu điều phối và bão tuyết."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Ưu tiên vận tải công nghiệp",
        "Content": "Dồn than cho hệ thống đường sắt của Hale.",
        "Effects": {
          "Economy": 6,
          "Resource": -4,
          "Trust": -2
        },
        "NextPhaseID": "PHASE_1"
      },
      {
        "ChoiceID": "B",
        "Title": "Giữ nguyên phân bổ",
        "Content": "Không thay đổi chính sách hiện tại.",
        "Effects": {
          "Trust": 2
        },
        "NextPhaseID": "PHASE_1"
      },
      {
        "ChoiceID": "C",
        "Title": "Giảm tải công nghiệp",
        "Content": "Giảm ưu tiên vận tải để tránh sụp hệ thống dân sinh.",
        "Effects": {
          "Equality": 4,
          "Economy": -3
        },
        "NextPhaseID": "PHASE_1"
      }
    ]
  },

  "EV_RAND_P1_002": {
    "EventID": "EV_RAND_P1_002",
    "Title": "Đêm Mất Điện Ở South District",
    "Branch": "RANDOM",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Khu tôi sống vừa mất điện thêm 6 giờ.",
            "Trẻ con phải ngủ trong chăn ướt lạnh.",
            "Nếu không có than sưởi, đây không còn là mùa đông nữa."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "KHỦNG HOẢNG NĂNG LƯỢNG LAN TỚI KHU DÂN CƯ",
      "Content": "Nhiều khu dân cư phía Nam Theodore ghi nhận tình trạng mất điện luân phiên do thiếu than cho nhà máy điện."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Ưu tiên dân sinh",
        "Content": "Chuyển than sang khu dân cư.",
        "Effects": {
          "Trust": 6,
          "Equality": 5,
          "Economy": -4
        },
        "NextPhaseID": "PHASE_1"
      },
      {
        "ChoiceID": "B",
        "Title": "Không can thiệp",
        "Content": "Giữ nguyên phân phối hiện tại.",
        "Effects": {
          "Trust": -2
        },
        "NextPhaseID": "PHASE_1"
      },
      {
        "ChoiceID": "C",
        "Title": "Ưu tiên công nghiệp",
        "Content": "Duy trì điện cho nhà máy thép.",
        "Effects": {
          "Economy": 5,
          "Equality": -4
        },
        "NextPhaseID": "PHASE_1"
      }
    ]
  },

  "EV_RAND_P1_003": {
    "EventID": "EV_RAND_P1_003",
    "Title": "Cuộc Họp Bí Mật Của The Cartel",
    "Branch": "RANDOM",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Thị trường không cần xin phép để tồn tại.",
            "Nếu chính quyền không kiểm soát được than, thì thị trường sẽ làm điều đó thay họ.",
            "Trật tự luôn đến từ kẻ mạnh nhất."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THE CARTEL TĂNG ÁP LỰC CHÍNH PHỦ",
      "Content": "Các tập đoàn công nghiệp lớn yêu cầu tăng quyền kiểm soát phân phối than nhằm ổn định sản xuất mùa đông."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Chấp nhận yêu cầu Cartel",
        "Content": "Trao thêm quyền phân phối than cho doanh nghiệp.",
        "Effects": {
          "Economy": 7,
          "Equality": -6,
          "Trust": -4
        },
        "NextPhaseID": "PHASE_1"
      },
      {
        "ChoiceID": "B",
        "Title": "Từ chối",
        "Content": "Giữ quyền kiểm soát nhà nước.",
        "Effects": {
          "Trust": 5,
          "Equality": 3
        },
        "NextPhaseID": "PHASE_1"
      },
      {
        "ChoiceID": "C",
        "Title": "Trì hoãn quyết định",
        "Content": "Không đưa ra phản hồi ngay lập tức.",
        "Effects": {
          "Trust": -1
        },
        "NextPhaseID": "PHASE_1"
      }
    ]
  },

  "EV_MAIN_P2A_001": {
    "EventID": "EV_MAIN_P2A_001",
    "Title": "Thành Phố Trong Guồng Máy",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_2A",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Sản lượng thép đang vượt mọi dự báo.",
            "Nhưng nếu dừng lại dù chỉ một ngày, chuỗi cung ứng sẽ sụp.",
            "Không có chỗ cho sự chậm trễ."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Đường sắt đang bị bào mòn từng giờ.",
            "Chúng ta đang vận hành trên giới hạn an toàn.",
            "Một sai lầm nhỏ sẽ làm tê liệt toàn bộ hệ thống."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Công nhân ngủ ngay cạnh máy móc.",
            "Không ai dám nghỉ.",
            "Thành phố này không còn ngày nghỉ nữa."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE TRỞ THÀNH TRUNG TÂM CÔNG NGHIỆP MIỀN BẮC",
      "Content": "Whitmore Steel đạt sản lượng kỷ lục. Tuy nhiên các báo cáo nội bộ cho thấy tỷ lệ tai nạn lao động tăng mạnh và hệ thống logistics bắt đầu xuống cấp."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Ép tối đa sản xuất",
        "Content": "Duy trì công suất cao bất chấp rủi ro.",
        "Effects": { "Economy": 12, "Equality": -10, "Trust": -6 },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "B",
        "Title": "Giới hạn sản xuất",
        "Content": "Giảm tốc độ để bảo vệ hệ thống.",
        "Effects": { "Security": 6, "Economy": -5 },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "C",
        "Title": "Tăng kiểm soát lao động",
        "Content": "Siết kỷ luật công nhân để tránh đình trệ.",
        "Effects": { "Security": 8, "Trust": -8 },
        "NextPhaseID": "PHASE_2A"
      }
    ]
  },

  "EV_RAND_P2A_001": {
    "EventID": "EV_RAND_P2A_001",
    "Title": "Dấu Hiệu Đình Công",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2A",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Có nhóm công nhân đang tụ tập sau ca làm.",
            "Họ không nói lớn, nhưng ánh mắt không còn sợ nữa.",
            "Tôi nghĩ họ sắp dừng máy."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "TIN ĐỒN ĐÌNH CÔNG LAN TRONG NHÀ MÁY",
      "Content": "Một số khu công nghiệp tại Theodore ghi nhận dấu hiệu bất ổn lao động. Công nhân bắt đầu từ chối tăng ca."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Thương lượng",
        "Content": "Cử đại diện đối thoại với công nhân.",
        "Effects": { "Trust": 6, "Security": -2 },
        "NextPhaseID": "PHASE_2A"
      },
      {
        "ChoiceID": "B",
        "Title": "Phớt lờ",
        "Content": "Tiếp tục sản xuất như bình thường.",
        "Effects": { "Economy": 4, "Trust": -3 },
        "NextPhaseID": "PHASE_2A"
      },
      {
        "ChoiceID": "C",
        "Title": "Trấn áp nhẹ",
        "Content": "Tăng giám sát khu công nghiệp.",
        "Effects": { "Security": 5, "Equality": -4 },
        "NextPhaseID": "PHASE_2A"
      }
    ]
  },

  "EV_RAND_P2A_002": {
    "EventID": "EV_RAND_P2A_002",
    "Title": "Sụp Đường Sắt Nhánh Bắc",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2A",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Một tuyến đường sắt đã bị hỏng hoàn toàn.",
            "Nếu không điều chuyển than, nhà máy phía bắc sẽ dừng.",
            "Chúng ta đang chạy trên dây thép mỏng."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "TẮC NGHẼN LOGISTICS LAN RỘNG",
      "Content": "Sự cố kỹ thuật tại tuyến đường sắt phía Bắc khiến chuỗi cung ứng than bị gián đoạn."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Ưu tiên nhà máy",
        "Content": "Điều chuyển toàn bộ than cho công nghiệp.",
        "Effects": { "Economy": 6, "Equality": -5 },
        "NextPhaseID": "PHASE_2A"
      },
      {
        "ChoiceID": "B",
        "Title": "Phân bổ lại",
        "Content": "Chia đều cho dân sinh và công nghiệp.",
        "Effects": { "Trust": 4 },
        "NextPhaseID": "PHASE_2A"
      },
      {
        "ChoiceID": "C",
        "Title": "Dừng một phần sản xuất",
        "Content": "Ưu tiên sửa chữa hệ thống.",
        "Effects": { "Security": 6, "Economy": -4 },
        "NextPhaseID": "PHASE_2A"
      }
    ]
  },

  "EV_RAND_P2A_003": {
    "EventID": "EV_RAND_P2A_003",
    "Title": "Áp Lực Từ The Cartel",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2A",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Chính quyền không thể điều hành nếu thiếu thị trường.",
            "Chúng tôi chỉ yêu cầu hiệu quả.",
            "Không phải cảm xúc."
          ]
        }
      ]
    },

    "MailsList": [
      {
        "id": "mail-secret-2",
        "Title": "BÁO CÁO TỪ TRẠM PHÂN PHÁT THỰC PHẨM",
        "Content": "Kính gửi Ngài Patrick,\n\nTôi không rõ liệu lá thư này có thật sự đến được tay ngài hay không.\n\nHôm nay tôi đã phải đứng gần 19 phút ngoài trạm phân phát thực phẩm giữa trời tuyết chỉ để nhận khẩu phần bánh mì của tuần này.\nMột người phụ nữ phía trước tôi đã ngất đi vì lạnh.\n\nKhông ai trong chúng tôi dám gây náo loạn,\nbởi tất cả đều biết thành phố đang rất bất ổn.\n\nTôi chỉ hy vọng những người ở bên trong dinh thự vẫn còn nhớ tới cuộc sống bên ngoài các bức tường ấy.\n\nTrân trọng,\nClara Voss",
        "NormalAsset": MailNormalImage2,
        "HoverAsset": MailHoverImage2
      }
    ],

    "Newspaper": {
      "Title": "CÁC TẬP ĐOÀN YÊU CẦU MỞ RỘNG QUYỀN KIỂM SOÁT",
      "Content": "The Cartel đề xuất tăng quyền trực tiếp trong phân phối than để ổn định sản xuất."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Chấp nhận",
        "Content": "Trao thêm quyền cho Cartel.",
        "Effects": { "Economy": 7, "Equality": -6 },
        "NextPhaseID": "PHASE_2A"
      },
      {
        "ChoiceID": "B",
        "Title": "Từ chối",
        "Content": "Giữ quyền nhà nước.",
        "Effects": { "Trust": 5 },
        "NextPhaseID": "PHASE_2A"
      },
      {
        "ChoiceID": "C",
        "Title": "Trì hoãn",
        "Content": "Không đưa ra quyết định ngay.",
        "Effects": { "Trust": -2 },
        "NextPhaseID": "PHASE_2A"
      }
    ]
  },

  "EV_MAIN_P2B_001": {
    "EventID": "EV_MAIN_P2B_001",
    "Title": "Hiệp Ước Tạm Ổn Định",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_2B",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Elias",
          "senderImage": Elias,
          "senderBlip": EliasSound,
          "senderText": [
            "Con gần như không thấy cha ở dinh thự nữa.",
            "Mọi người dạo này đều rất căng thẳng..."
          ]
        },
        {
          "senderName": "Elias",
          "senderImage": EliasSad,
          "senderBlip": EliasSound,
          "senderText": [
            "Con hơi nhớ những ngày bình thường trước đây."
          ]
        },
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Chúng ta đã giảm được áp lực sản xuất.",
            "Nhưng thị trường không thích sự chậm lại.",
            "Blackforge đang mất lợi thế từng ngày."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Hệ thống vận tải ổn định hơn, nhưng không đủ nhanh.",
            "Chúng ta đang sống sót, không phải tăng trưởng.",
            "Đó là một sự khác biệt nguy hiểm."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Ổn định nghe có vẻ tốt trên giấy tờ.",
            "Nhưng người dân không sống trong biểu đồ.",
            "Họ vẫn lạnh."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Thị trường ghét sự do dự.",
            "Nhưng nó còn ghét hỗn loạn hơn.",
            "Giữ cân bằng là một chiến lược, không phải yếu đuối."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE TẠM GIẢM ÁP LỰC CÔNG NGHIỆP",
      "Content": "Chính quyền Theodore công bố chính sách cân bằng tạm thời giữa công nghiệp thép và nhu cầu dân sinh.\n\nCác nhà máy giảm tốc độ sản xuất để ổn định nguồn than.\n\nTuy nhiên, giới công nghiệp cảnh báo rằng việc này có thể khiến Theodore mất vị thế cạnh tranh trong khu vực."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Tiếp tục chính sách cân bằng",
        "Content": "Giữ ổn định xã hội thay vì tối đa hóa sản lượng.",
        "Effects": {
          "Trust": 6,
          "Equality": 5,
          "Economy": -2
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "B",
        "Title": "Quay lại công nghiệp hóa mạnh",
        "Content": "Khôi phục sản lượng thép tối đa.",
        "Effects": {
          "Economy": 10,
          "Equality": -8,
          "Trust": -4
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "C",
        "Title": "Thắt chặt kiểm soát nhà nước",
        "Content": "Chính phủ can thiệp sâu vào phân phối tài nguyên.",
        "Effects": {
          "Trust": 3,
          "Economy": 4,
          "Equality": -3
        },
        "NextPhaseID": "PHASE_3"
      }
    ]
  },

  "EV_RAND_P2B_001": {
    "EventID": "EV_RAND_P2B_001",
    "Title": "Biểu Tình Lạnh Giá",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2B",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Người dân đang tụ tập trước tòa thị chính.",
            "Họ không mang vũ khí.",
            "Chỉ mang theo chăn mỏng và sự giận dữ."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "BIỂU TÌNH VÌ NHIÊN LIỆU SƯỞI ẤM",
      "Content": "Hàng nghìn người dân xuống đường yêu cầu phân bổ thêm than cho khu dân cư trong khi mùa đông đạt mức khắc nghiệt nhất."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Nhượng bộ người dân",
        "Content": "Tăng phân bổ than cho dân sinh.",
        "Effects": {
          "Trust": 8,
          "Economy": -5,
          "Equality": 6
        },
        "NextPhaseID": "PHASE_2B"
      },
      {
        "ChoiceID": "B",
        "Title": "Giải tán biểu tình",
        "Content": "Dùng lực lượng kiểm soát đám đông.",
        "Effects": {
          "Trust": -8,
          "Equality": -6,
          "Economy": 4
        },
        "NextPhaseID": "PHASE_2B"
      },
      {
        "ChoiceID": "C",
        "Title": "Phớt lờ yêu cầu",
        "Content": "Không thay đổi chính sách hiện tại.",
        "Effects": {
          "Trust": -3
        },
        "NextPhaseID": "PHASE_2B"
      }
    ]
  },

  "EV_RAND_P2B_002": {
    "EventID": "EV_RAND_P2B_002",
    "Title": "Báo Cáo Sụt Giảm Sản Lượng",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2B",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Tuyến vận tải đang mất hiệu suất nghiêm trọng.",
            "Nếu không tăng đầu tư, hệ thống sẽ tụt dốc không thể đảo ngược.",
            "Chúng ta đang đẩy giới hạn vật lý."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "NỀN KINH TẾ BẮT ĐẦU CHẬM LẠI",
      "Content": "Các chỉ số sản xuất của Theodore ghi nhận mức giảm nhẹ nhưng liên tục trong 3 tuần liên tiếp.\n\nGiới phân tích cho rằng đây là hệ quả của chính sách cân bằng kéo dài."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Đầu tư mạnh trở lại công nghiệp",
        "Content": "Khôi phục tốc độ sản xuất tối đa.",
        "Effects": {
          "Economy": 8,
          "Resource": -5
        },
        "NextPhaseID": "PHASE_2B"
      },
      {
        "ChoiceID": "B",
        "Title": "Giữ ổn định hiện tại",
        "Content": "Không thay đổi chính sách.",
        "Effects": {
          "Trust": 3
        },
        "NextPhaseID": "PHASE_2B"
      },
      {
        "ChoiceID": "C",
        "Title": "Chuyển ưu tiên sang dân sinh",
        "Content": "Giảm áp lực sản xuất.",
        "Effects": {
          "Equality": 6,
          "Economy": -6,
          "Trust": 4
        },
        "NextPhaseID": "PHASE_2B"
      }
    ]
  },

  "EV_MAIN_P2C_001": {
    "EventID": "EV_MAIN_P2C_001",
    "Title": "Những Căn Nhà Có Lửa",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_2C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Lần đầu tiên sau nhiều tuần, trẻ em ở South District có thể ngủ mà không bị cóng.",
            "Người dân đang gọi anh là vị thống đốc của nhân dân.",
            "Đừng để họ thất vọng lần nữa."
          ]
        },
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmoreSerious,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Các lò nung đang nguội dần, Patrick.",
            "Anh đang đốt tương lai công nghiệp của Theodore để mua vài ngày yên bình.",
            "Lịch sử không thưởng cho lòng thương hại."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Các tuyến vận tải công nghiệp đã bắt đầu chậm lại.",
            "Nếu chuỗi logistics đổ vỡ, sẽ không còn tài nguyên để cứu bất kỳ ai.",
            "Một thành phố không thể sống bằng lòng tốt."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Thị trường đang hoảng loạn.",
            "Các nhà đầu tư đã bắt đầu chuyển vốn khỏi Theodore.",
            "Anh đang khiến giới tài phiệt tin rằng chính quyền này chống lại họ."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "CHÍNH PHỦ CHUYỂN THAN CHO KHU DÂN CƯ",
      "Content": "Sau quyết định cắt giảm sản lượng công nghiệp, hàng loạt khu dân cư tại Theodore đã được khôi phục điện và sưởi ấm.\n\nTỷ lệ bất ổn xã hội giảm mạnh trong tuần qua.\n\nTuy nhiên, các tập đoàn công nghiệp cảnh báo rằng nền kinh tế thành phố đang tiến gần tới suy thoái nếu sản lượng thép tiếp tục giảm."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Tiếp tục ưu tiên dân sinh",
        "Content": "Duy trì phân bổ tài nguyên cho người dân dù kinh tế suy giảm.",
        "Effects": {
          "Trust": 10,
          "Equality": 8,
          "Economy": -8,
          "Resource": -4
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "B",
        "Title": "Khôi phục một phần công nghiệp",
        "Content": "Cân bằng lại giữa sản xuất và dân sinh.",
        "Effects": {
          "Economy": 5,
          "Trust": 3,
          "Equality": 2
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "C",
        "Title": "Quốc hữu hóa phân phối than",
        "Content": "Tước quyền kiểm soát tài nguyên khỏi The Cartel.",
        "Effects": {
          "Trust": 6,
          "Equality": 10,
          "Economy": -10,
          "Security": -4
        },
        "NextPhaseID": "PHASE_3"
      }
    ]
  },

  "EV_RAND_P2C_001": {
    "EventID": "EV_RAND_P2C_001",
    "Title": "Nhà Máy Blackforge Giảm Công Suất",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Blackforge vừa phải tắt thêm hai lò nung.",
            "Công nhân đang bị cắt ca hàng loạt.",
            "Anh nghĩ họ sẽ còn đứng về phía anh bao lâu nữa?"
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "BLACKFORGE CẮT GIẢM SẢN XUẤT",
      "Content": "Whitmore Steel xác nhận nhiều dây chuyền luyện thép đã phải tạm dừng do thiếu than.\n\nGiới tài phiệt cảnh báo Theodore đang đánh mất sức mạnh công nghiệp cốt lõi."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Khôi phục than cho nhà máy",
        "Content": "Tăng phân bổ cho Blackforge.",
        "Effects": {
          "Economy": 7,
          "Equality": -5,
          "Trust": -3
        },
        "NextPhaseID": "PHASE_2C"
      },
      {
        "ChoiceID": "B",
        "Title": "Giữ nguyên chính sách",
        "Content": "Tiếp tục ưu tiên dân sinh.",
        "Effects": {
          "Trust": 5,
          "Equality": 4
        },
        "NextPhaseID": "PHASE_2C"
      },
      {
        "ChoiceID": "C",
        "Title": "Bắt Blackforge tự cắt giảm",
        "Content": "Ép Whitmore tự hấp thụ tổn thất.",
        "Effects": {
          "Equality": 6,
          "Economy": -5,
          "Security": -2
        },
        "NextPhaseID": "PHASE_2C"
      }
    ]
  },

  "EV_RAND_P2C_002": {
    "EventID": "EV_RAND_P2C_002",
    "Title": "Bữa Ăn Miễn Phí Ở South District",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Các bếp ăn cộng đồng đang hoạt động trở lại.",
            "Người dân bắt đầu tin rằng chính quyền vẫn còn nhìn thấy họ.",
            "Niềm tin đó rất mong manh."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "KHU LAO ĐỘNG NHẬN HỖ TRỢ KHẨN CẤP",
      "Content": "Chính quyền Theodore triển khai thêm các điểm phát thực phẩm và sưởi ấm tại South District.\n\nTỷ lệ tội phạm vặt tại khu vực này giảm đáng kể trong tuần qua."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Mở rộng chương trình cứu trợ",
        "Content": "Tăng thêm hỗ trợ cho người dân.",
        "Effects": {
          "Trust": 7,
          "Equality": 7,
          "Resource": -5
        },
        "NextPhaseID": "PHASE_2C"
      },
      {
        "ChoiceID": "B",
        "Title": "Giữ quy mô hiện tại",
        "Content": "Duy trì hỗ trợ ở mức ổn định.",
        "Effects": {
          "Trust": 3
        },
        "NextPhaseID": "PHASE_2C"
      },
      {
        "ChoiceID": "C",
        "Title": "Cắt giảm trợ cấp",
        "Content": "Chuyển tài nguyên về ngân sách công nghiệp.",
        "Effects": {
          "Economy": 5,
          "Trust": -5,
          "Equality": -4
        },
        "NextPhaseID": "PHASE_2C"
      }
    ]
  },

  "EV_RAND_P2C_003": {
    "EventID": "EV_RAND_P2C_003",
    "Title": "Dòng Vốn Rời Khỏi Theodore",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_2C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Các quỹ đầu tư đang rút khỏi Theodore.",
            "Không ai muốn đặt tiền vào một thành phố chống lại công nghiệp.",
            "Thị trường luôn bỏ phiếu bằng tiền."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "GIỚI ĐẦU TƯ BẮT ĐẦU RỜI KHỎI THEODORE",
      "Content": "Nhiều tập đoàn tài chính đã bắt đầu đóng băng đầu tư mới vào Theodore sau hàng loạt chính sách ưu tiên dân sinh của chính phủ."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Xoa dịu giới đầu tư",
        "Content": "Cam kết khôi phục tăng trưởng công nghiệp.",
        "Effects": {
          "Economy": 8,
          "Trust": -3
        },
        "NextPhaseID": "PHASE_2C"
      },
      {
        "ChoiceID": "B",
        "Title": "Phớt lờ thị trường",
        "Content": "Tiếp tục chính sách dân sinh.",
        "Effects": {
          "Equality": 6,
          "Trust": 5,
          "Economy": -6
        },
        "NextPhaseID": "PHASE_2C"
      },
      {
        "ChoiceID": "C",
        "Title": "Kiểm soát dòng vốn",
        "Content": "Áp đặt hạn chế tài chính khẩn cấp.",
        "Effects": {
          "Security": 5,
          "Economy": -4,
          "Trust": -2
        },
        "NextPhaseID": "PHASE_2C"
      }
    ]
  },

  "EV_MAIN_P3_001": {
    "EventID": "EV_MAIN_P3_001",
    "Title": "Mùa Đông Thứ Hai",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_3",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Theodore đã sống sót qua mùa đông đầu tiên.",
            "Nhưng sống sót không có nghĩa là chiến thắng.",
            "Thành phố này cần một hướng đi rõ ràng."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Kho vận đang kiệt sức.",
            "Chúng ta không thể tiếp tục đổi hướng chính sách mỗi tháng.",
            "Hệ thống cần sự ổn định."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "The Cartel đã bắt đầu chia rẽ.",
            "Một số muốn hợp tác với anh.",
            "Một số khác muốn thay thế anh."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Người dân vẫn còn hy vọng.",
            "Nhưng hy vọng là thứ dễ chết nhất trong mùa đông.",
            "Đừng bắt họ sống thêm một năm nữa bằng lời hứa."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE TIẾN VÀO MÙA ĐÔNG THỨ HAI",
      "Content": "Sau nhiều tháng khủng hoảng nhiên liệu và bất ổn chính trị, Theodore bước vào mùa đông thứ hai với nền kinh tế suy yếu nhưng xã hội vẫn giữ được ổn định tương đối.\n\nTuy nhiên, áp lực từ The Cartel, giới lao động và thị trường quốc tế đang đẩy chính quyền Patrick Vale tới giới hạn."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Trao thêm quyền cho The Cartel",
        "Content": "Hợp tác sâu hơn với giới tài phiệt để tái thiết công nghiệp.",
        "Effects": {
          "Economy": 10,
          "Equality": -8,
          "Trust": -4
        },
        "NextPhaseID": "PHASE_4A"
      },
      {
        "ChoiceID": "B",
        "Title": "Duy trì chính quyền cân bằng",
        "Content": "Giữ Theodore ở trạng thái ổn định trung lập.",
        "Effects": {
          "Trust": 5,
          "Economy": 3,
          "Equality": 4
        },
        "NextPhaseID": "PHASE_4B"
      },
      {
        "ChoiceID": "C",
        "Title": "Đẩy mạnh cải cách dân sinh",
        "Content": "Giảm quyền lực giới tài phiệt để mở rộng phúc lợi xã hội.",
        "Effects": {
          "Trust": 8,
          "Equality": 10,
          "Economy": -8,
          "Security": -4
        },
        "NextPhaseID": "PHASE_4C"
      }
    ]
  },

  "EV_RAND_P3_001": {
    "EventID": "EV_RAND_P3_001",
    "Title": "Tin Đồn Đảo Chính",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_3",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Có những cuộc họp đang diễn ra sau lưng anh.",
            "Một số người tin Theodore cần lãnh đạo mạnh tay hơn.",
            "Thị trường không thích sự bất ổn kéo dài."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "TIN ĐỒN CHÍNH TRỊ LAN RỘNG",
      "Content": "Nhiều tin đồn về xung đột nội bộ giữa chính quyền Theodore và giới công nghiệp bắt đầu xuất hiện trong tuần qua."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Tăng kiểm soát an ninh",
        "Content": "Theo dõi các nhóm chống đối.",
        "Effects": {
          "Security": 7,
          "Trust": -4
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "B",
        "Title": "Mở đối thoại chính trị",
        "Content": "Cố gắng xoa dịu các phe phái.",
        "Effects": {
          "Trust": 5
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "C",
        "Title": "Phớt lờ tin đồn",
        "Content": "Không phản ứng công khai.",
        "Effects": {
          "Security": -3
        },
        "NextPhaseID": "PHASE_3"
      }
    ]
  },

  "EV_RAND_P3_002": {
    "EventID": "EV_RAND_P3_002",
    "Title": "Tai Nạn Nhà Máy",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_3",

    "MailsList": [
      {
        "id": "mail-secret-3",
        "Title": "ĐƠN KIẾN NGHỊ TỪ NHÀ MÁY PHÍA ĐÔNG",
        "Content": "Kính gửi Ngài Patrick,\n\nTôi vừa được chuyển sang khu lò số 42 theo điều động mới của nhà máy.\n\nKhông khí tại đó đặc và nóng đến mức nhiều người không thể làm việc quá vài giờ liên tục.\nTuy vậy, chúng tôi vẫn được yêu cầu tiếp tục vận hành dây chuyền như bình thường.\n\nTôi hiểu rằng những người ở vị trí của ngài phải đưa ra rất nhiều quyết định khó khăn.\nNhưng đôi lúc tôi tự hỏi liệu thành phố này có còn nhìn thấy những con người đang đứng phía dưới hay không.\n\nXin thứ lỗi nếu lời lẽ của tôi có phần vượt quá bổn phận.\n\nTrân trọng,\nClara Voss",
        "NormalAsset": MailNormalImage3,
        "HoverAsset": MailHoverImage3
      }
    ],

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Một lò luyện ở Blackforge vừa phát nổ.",
            "Chúng tôi cần tài nguyên để sửa chữa ngay lập tức.",
            "Nếu sản xuất dừng lại, toàn bộ Theodore sẽ trả giá."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "NỔ LÒ LUYỆN TẠI BLACKFORGE",
      "Content": "Một vụ nổ công nghiệp lớn xảy ra tại Blackforge Steel khiến hàng chục công nhân bị thương và làm gián đoạn sản xuất thép."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Cứu nhà máy bằng mọi giá",
        "Content": "Dồn tài nguyên sửa chữa Blackforge.",
        "Effects": {
          "Economy": 8,
          "Resource": -6
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "B",
        "Title": "Điều tra an toàn lao động",
        "Content": "Tạm đóng nhà máy để thanh tra.",
        "Effects": {
          "Trust": 5,
          "Equality": 4,
          "Economy": -5
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "C",
        "Title": "Bắt Whitmore tự chịu trách nhiệm",
        "Content": "Không hỗ trợ tài chính.",
        "Effects": {
          "Economy": -7,
          "Equality": 5
        },
        "NextPhaseID": "PHASE_3"
      }
    ]
  },

  "EV_RAND_P3_003": {
    "EventID": "EV_RAND_P3_003",
    "Title": "Đêm Không Bánh Mì",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_3",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Elias",
          "senderImage": EliasHappy,
          "senderBlip": EliasSound,
          "senderText": [
            "Con tìm thấy bộ cờ cũ của cha trong thư phòng.",
            "Lần tới nếu cha rảnh thì chơi với con nhé."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Các khu lao động đã bắt đầu thiếu lương thực.",
            "Người dân có thể chịu lạnh.",
            "Nhưng họ không thể chịu đói."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THIẾU LƯƠNG THỰC TẠI SOUTH DISTRICT",
      "Content": "Nguồn cung thực phẩm tại nhiều khu lao động giảm mạnh do khủng hoảng vận tải kéo dài."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Phân phát lương thực khẩn cấp",
        "Content": "Dùng ngân sách cứu trợ người dân.",
        "Effects": {
          "Trust": 7,
          "Equality": 6,
          "Economy": -4
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "B",
        "Title": "Ưu tiên ổn định kinh tế",
        "Content": "Không can thiệp mạnh.",
        "Effects": {
          "Economy": 4,
          "Trust": -5
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "C",
        "Title": "Thiết quân luật phân phối",
        "Content": "Quân đội kiểm soát thực phẩm.",
        "Effects": {
          "Security": 7,
          "Trust": -3
        },
        "NextPhaseID": "PHASE_3"
      }
    ]
  },

  "EV_RAND_P3_004": {
    "EventID": "EV_RAND_P3_004",
    "Title": "Những Nhà Đầu Tư Phương Bắc",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_3",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Các quỹ đầu tư từ phương Bắc muốn vào Theodore.",
            "Nhưng họ cần một tín hiệu rõ ràng từ anh.",
            "Không ai đầu tư vào một thành phố lưỡng lự."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE THU HÚT NHÀ ĐẦU TƯ NƯỚC NGOÀI",
      "Content": "Một số tập đoàn tài chính quốc tế bắt đầu quan tâm tới thị trường thép và logistics của Theodore."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Mở cửa đầu tư hoàn toàn",
        "Content": "Cho phép vốn ngoại vào Theodore.",
        "Effects": {
          "Economy": 10,
          "Equality": -5
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "B",
        "Title": "Kiểm soát đầu tư",
        "Content": "Giới hạn ảnh hưởng nước ngoài.",
        "Effects": {
          "Security": 5,
          "Economy": -2
        },
        "NextPhaseID": "PHASE_3"
      },
      {
        "ChoiceID": "C",
        "Title": "Từ chối hợp tác",
        "Content": "Giữ Theodore độc lập.",
        "Effects": {
          "Trust": 4,
          "Economy": -5
        },
        "NextPhaseID": "PHASE_3"
      }
    ]
  },

  "EV_MAIN_P4A_001": {
    "EventID": "EV_MAIN_P4A_001",
    "Title": "Thiết Quân Luật Công Nghiệp",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_4A",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Theodore cuối cùng cũng hiểu điều gì giữ thành phố tồn tại.",
            "Công nhân cần kỷ luật.",
            "Nếu vài khu phố phải im lặng để lò nung tiếp tục cháy, đó là cái giá hợp lý."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Các đoàn tàu quân sự đã được triển khai quanh South District.",
            "Ít nhất giờ hàng hóa có thể di chuyển mà không bị đình công cản trở.",
            "Trật tự luôn hiệu quả hơn đàm phán."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Thị trường đang phản ứng tích cực.",
            "Các nhà đầu tư bắt đầu tin Theodore vẫn còn kiểm soát được tình hình.",
            "Đừng mềm lòng ở giai đoạn này."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Họ đang bắt người ngay trên đường phố.",
            "Những ai phản đối phân phối than đều bị xem là phá hoại.",
            "Patrick... đây không còn là Theodore mà chúng ta từng biết nữa."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THIẾT QUÂN LUẬT ĐƯỢC ÁP DỤNG TẠI CÁC KHU CÔNG NGHIỆP",
      "Content": "Chính quyền Theodore chính thức triển khai lực lượng an ninh quanh các nhà máy và tuyến vận tải chiến lược.\n\nMọi hành vi đình công hoặc cản trở sản xuất sẽ bị xử lý theo luật khẩn cấp mùa đông.\n\nTrong khi The Cartel ca ngợi quyết định này là bước đi cần thiết để bảo vệ nền kinh tế, nhiều tổ chức lao động cho rằng Theodore đang tiến gần tới chế độ tài phiệt quân sự."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Mở rộng đàn áp",
        "Content": "Cho phép quân đội kiểm soát trực tiếp các khu lao động.",
        "Effects": {
          "Security": 12,
          "Economy": 8,
          "Equality": -12,
          "Trust": -10
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "B",
        "Title": "Giữ kiểm soát có giới hạn",
        "Content": "Duy trì thiết quân luật nhưng tránh leo thang bạo lực.",
        "Effects": {
          "Security": 6,
          "Economy": 5,
          "Trust": -3
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "C",
        "Title": "Bắt đầu nới lỏng",
        "Content": "Giảm hiện diện quân sự để xoa dịu công chúng.",
        "Effects": {
          "Trust": 6,
          "Equality": 4,
          "Security": -5
        },
        "NextPhaseID": "PHASE_5"
      }
    ]
  },

  "EV_RAND_P4A_001": {
    "EventID": "EV_RAND_P4A_001",
    "Title": "Nhà Máy Blackforge Không Ngủ",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_4A",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Blackforge đã hoạt động liên tục 11 ngày.",
            "Nếu giữ được tốc độ này, Theodore sẽ thống trị toàn bộ miền Bắc.",
            "Nhưng công nhân đang bắt đầu gục xuống vì kiệt sức."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "SẢN LƯỢNG THÉP THEODORE ĐẠT MỨC KỶ LỤC",
      "Content": "Các lò nung Blackforge tiếp tục hoạt động không nghỉ bất chấp thời tiết khắc nghiệt. Báo cáo nội bộ cho thấy tỷ lệ tai nạn lao động đang tăng nhanh."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Tiếp tục tăng sản lượng",
        "Content": "Ép nhà máy vận hành tối đa.",
        "Effects": {
          "Economy": 9,
          "Resource": -7,
          "Equality": -6
        },
        "NextPhaseID": "PHASE_4A"
      },
      {
        "ChoiceID": "B",
        "Title": "Giảm ca làm",
        "Content": "Cho công nhân nghỉ luân phiên.",
        "Effects": {
          "Trust": 4,
          "Equality": 5,
          "Economy": -3
        },
        "NextPhaseID": "PHASE_4A"
      },
      {
        "ChoiceID": "C",
        "Title": "Thưởng cho công nhân",
        "Content": "Dùng ngân sách để giữ ổn định lao động.",
        "Effects": {
          "Trust": 5,
          "Economy": -4
        },
        "NextPhaseID": "PHASE_4A"
      }
    ]
  },

  "EV_RAND_P4A_002": {
    "EventID": "EV_RAND_P4A_002",
    "Title": "Biểu Tình Trong Tuyết",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_4A",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Họ đang đứng ngoài trời tuyết chỉ để yêu cầu thêm than sưởi.",
            "Quân đội đã bao vây quảng trường.",
            "Nếu có tiếng súng vang lên... mọi thứ sẽ không thể quay lại nữa."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "HÀNG NGÀN NGƯỜI TỤ TẬP TẠI SOUTH DISTRICT",
      "Content": "Biểu tình tiếp tục lan rộng bất chấp lệnh giới nghiêm. Chính quyền tuyên bố sẽ sử dụng mọi biện pháp cần thiết để bảo vệ ổn định quốc gia."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Giải tán bằng vũ lực",
        "Content": "Ra lệnh trấn áp đám đông.",
        "Effects": {
          "Security": 10,
          "Trust": -12,
          "Equality": -8
        },
        "NextPhaseID": "PHASE_4A"
      },
      {
        "ChoiceID": "B",
        "Title": "Đàm phán với đại diện lao động",
        "Content": "Cử người thương lượng để tránh bạo lực.",
        "Effects": {
          "Trust": 7,
          "Security": -3
        },
        "NextPhaseID": "PHASE_4A"
      },
      {
        "ChoiceID": "C",
        "Title": "Phớt lờ cuộc biểu tình",
        "Content": "Không phản hồi công khai.",
        "Effects": {
          "Trust": -4,
          "Security": -2
        },
        "NextPhaseID": "PHASE_4A"
      }
    ]
  },

  "EV_MAIN_P4B_001": {
    "EventID": "EV_MAIN_P4B_001",
    "Title": "Nền Hòa Bình Mong Manh",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_4B",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Anh đang cố giữ cân bằng bằng những con số đẹp đẽ.",
            "Nhưng công nghiệp không thể sống bằng sự do dự.",
            "Sớm muộn gì Theodore cũng phải chọn phe."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Các tuyến vận tải vẫn hoạt động.",
            "Nhưng chỉ cần thêm một cuộc đình công nữa, mọi thứ sẽ vỡ trận.",
            "Ổn định không phải trạng thái tự nhiên."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Thị trường đang quan sát anh rất kỹ.",
            "Nhà đầu tư ghét sự bất định hơn cả khủng hoảng.",
            "Họ muốn biết Theodore thuộc về ai."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Ít nhất người dân vẫn còn cảm thấy họ được lắng nghe.",
            "Đừng phá hủy điều cuối cùng giữ thành phố này bình tĩnh.",
            "Nếu niềm tin biến mất, mọi thứ sẽ sụp đổ nhanh hơn anh nghĩ."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE TẠM THOÁT KHỎI KHỦNG HOẢNG TOÀN DIỆN",
      "Content": "Sau nhiều tuần căng thẳng, chính quyền Theodore tạm thời duy trì được cân bằng giữa sản xuất công nghiệp và nhu cầu dân sinh.\n\nTuy nhiên, cả giới tài phiệt lẫn các tổ chức lao động đều cho rằng chính phủ đang thiếu lập trường rõ ràng.\n\nNhiều chuyên gia cảnh báo rằng sự ổn định hiện tại chỉ mang tính tạm thời."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Nghiêng về công nghiệp",
        "Content": "Tăng hỗ trợ cho các tập đoàn để củng cố kinh tế.",
        "Effects": {
          "Economy": 8,
          "Trust": -4,
          "Equality": -5
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "B",
        "Title": "Tiếp tục cân bằng",
        "Content": "Duy trì phân phối hiện tại dù áp lực tăng cao.",
        "Effects": {
          "Trust": 5,
          "Equality": 4,
          "Economy": 2
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "C",
        "Title": "Mở rộng hỗ trợ dân sinh",
        "Content": "Đầu tư thêm vào các khu lao động và năng lượng dân dụng.",
        "Effects": {
          "Trust": 8,
          "Equality": 7,
          "Economy": -5
        },
        "NextPhaseID": "PHASE_5"
      }
    ]
  },

  "EV_RAND_P4B_001": {
    "EventID": "EV_RAND_P4B_001",
    "Title": "Đình Công Cục Bộ",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_4B",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Một nhóm công nhân ở East Rail vừa ngừng làm việc.",
            "Họ nói khẩu phần than bị cắt thêm lần nữa.",
            "Nếu chuyện này lan rộng, mọi thứ sẽ khó kiểm soát."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "CÔNG NHÂN EAST RAIL TẠM NGỪNG LÀM VIỆC",
      "Content": "Một số tuyến hậu cần bị chậm trễ sau khi công nhân yêu cầu cải thiện điều kiện sinh hoạt và phân phối nhiên liệu mùa đông."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Nhượng bộ yêu cầu",
        "Content": "Cấp thêm khẩu phần than cho công nhân.",
        "Effects": {
          "Trust": 6,
          "Equality": 5,
          "Resource": -4
        },
        "NextPhaseID": "PHASE_4B"
      },
      {
        "ChoiceID": "B",
        "Title": "Ép họ quay lại làm việc",
        "Content": "Đe dọa cắt lương và sa thải.",
        "Effects": {
          "Economy": 4,
          "Trust": -5
        },
        "NextPhaseID": "PHASE_4B"
      },
      {
        "ChoiceID": "C",
        "Title": "Đàm phán trung lập",
        "Content": "Tổ chức thương lượng giữa công đoàn và doanh nghiệp.",
        "Effects": {
          "Trust": 3,
          "Economy": 1
        },
        "NextPhaseID": "PHASE_4B"
      }
    ]
  },

  "EV_RAND_P4B_002": {
    "EventID": "EV_RAND_P4B_002",
    "Title": "Tin Đồn Trên Thị Trường",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_4B",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Một số nhà đầu tư đang rút vốn khỏi Theodore.",
            "Họ tin chính phủ không đủ mạnh để kiểm soát khủng hoảng.",
            "Niềm tin thị trường mong manh hơn anh tưởng."
          ]
        }
      ]
    },

    "MailsList": [
      {
        "id": "mail-secret-4",
        "Title": "LÁ THƯ KHÔNG ĐÓNG DẤU",
        "Content": "Kính gửi Ngài Patrick,\n\nCa làm tiếp theo của tôi sẽ bắt đầu lúc 7 giờ sáng.\n\nDạo gần đây tôi thường có cảm giác mọi lá thư gửi đi đều đang bị đọc bởi một ai đó khác trước khi tới nơi cần đến.\nCó lẽ vì vậy mà tôi không còn biết nên viết điều gì nữa.\n\nTuy nhiên, nếu ngài thật sự đọc những lá thư trước đây,\ntôi mong ngài hãy để ý tới những con số xuất hiện trong đó.\n\nCó những điều trong thành phố này không thể được nói ra một cách trực tiếp.\n\nTrân trọng,\nClara Voss",
        "NormalAsset": MailNormalImage4,
        "HoverAsset": MailHoverImage4
      }
    ],

    "Newspaper": {
      "Title": "GIỚI ĐẦU TƯ LO NGẠI VỀ TƯƠNG LAI THEODORE",
      "Content": "Nhiều doanh nghiệp bắt đầu chuyển tài sản sang các thành phố phía Bắc do lo ngại bất ổn kéo dài tại Theodore."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Cam kết bảo vệ doanh nghiệp",
        "Content": "Đưa ra ưu đãi cho các tập đoàn lớn.",
        "Effects": {
          "Economy": 7,
          "Equality": -4
        },
        "NextPhaseID": "PHASE_4B"
      },
      {
        "ChoiceID": "B",
        "Title": "Trấn an công chúng",
        "Content": "Công bố kế hoạch phục hồi quốc gia.",
        "Effects": {
          "Trust": 5,
          "Economy": 2
        },
        "NextPhaseID": "PHASE_4B"
      },
      {
        "ChoiceID": "C",
        "Title": "Không phản hồi",
        "Content": "Để thị trường tự điều chỉnh.",
        "Effects": {
          "Economy": -3,
          "Trust": -2
        },
        "NextPhaseID": "PHASE_4B"
      }
    ]
  },

  "EV_MAIN_P4C_001": {
    "EventID": "EV_MAIN_P4C_001",
    "Title": "Thành Phố Của Người Lao Động",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_4C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Elias",
          "senderImage": Elias,
          "senderBlip": EliasSound,
          "senderText": [
            "Con nghe người ngoài phố nhắc đến cha rất nhiều gần đây.",
            "Ai cũng trông rất giận dữ..."
          ]
        },
        {
          "senderName": "Elias",
          "senderImage": EliasSad,
          "senderBlip": EliasSound,
          "senderText": [
            "...Cha đang làm điều đúng đắn mà, đúng không?"
          ]
        },
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Các lò nung đang hoạt động dưới mức tối thiểu.",
            "Nếu chuyện này kéo dài thêm, Theodore sẽ đánh mất toàn bộ vị thế công nghiệp.",
            "Một thành phố không thể sống bằng lòng thương hại."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Các chuyến hàng bị trì hoãn khắp nơi.",
            "Chúng ta đang ưu tiên sưởi ấm dân cư hơn vận tải chiến lược.",
            "Hệ thống hậu cần đang bắt đầu rệu rã."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Nhà đầu tư đang tháo chạy khỏi Theodore.",
            "Họ tin chính quyền đã chọn cảm xúc thay vì ổn định.",
            "Thị trường không tha thứ cho sự yếu đuối."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Lần đầu tiên sau nhiều tháng, các khu dân cư có đủ than để sống qua đêm.",
            "Người dân bắt đầu tin chính quyền vẫn còn đứng về phía họ.",
            "Đừng để những kẻ quyền lực cướp mất điều đó."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE ƯU TIÊN DÂN SINH GIỮA KHỦNG HOẢNG",
      "Content": "Chính quyền Theodore tiếp tục mở rộng phân phối than cho các khu lao động và hệ thống sưởi dân dụng.\n\nTrong khi tỷ lệ tử vong mùa đông giảm mạnh, nhiều tập đoàn công nghiệp cảnh báo sản lượng thép đang lao dốc nghiêm trọng.\n\nGiới phân tích cho rằng Theodore đang đối mặt nguy cơ suy thoái kinh tế dài hạn."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Quốc hữu hóa công nghiệp",
        "Content": "Đưa các nhà máy chiến lược dưới quyền kiểm soát nhà nước.",
        "Effects": {
          "Equality": 10,
          "Trust": 8,
          "Economy": -10,
          "Security": -3
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "B",
        "Title": "Giữ mô hình hiện tại",
        "Content": "Tiếp tục cân bằng giữa cứu trợ và sản xuất hạn chế.",
        "Effects": {
          "Trust": 5,
          "Equality": 5,
          "Economy": -3
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "C",
        "Title": "Khôi phục hỗ trợ công nghiệp",
        "Content": "Chuyển một phần than trở lại cho doanh nghiệp.",
        "Effects": {
          "Economy": 7,
          "Trust": -4,
          "Equality": -5
        },
        "NextPhaseID": "PHASE_5"
      }
    ]
  },

  "EV_RAND_P4C_001": {
    "EventID": "EV_RAND_P4C_001",
    "Title": "Bếp Sưởi Cộng Đồng",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_4C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Người dân đang tự dựng các bếp sưởi tập thể quanh South District.",
            "Họ chia sẻ từng cục than còn sót lại với nhau.",
            "Nhưng nguồn dự trữ sẽ không kéo dài mãi."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "CÁC KHU LAO ĐỘNG TỰ TỔ CHỨC HỖ TRỢ MÙA ĐÔNG",
      "Content": "Nhiều cộng đồng dân cư tại Theodore bắt đầu lập bếp sưởi và kho thực phẩm tập thể nhằm đối phó tình trạng thiếu nhiên liệu."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Hỗ trợ thêm tài nguyên",
        "Content": "Cấp than và thực phẩm cho các khu cộng đồng.",
        "Effects": {
          "Trust": 7,
          "Equality": 6,
          "Resource": -5
        },
        "NextPhaseID": "PHASE_4C"
      },
      {
        "ChoiceID": "B",
        "Title": "Khuyến khích tự quản",
        "Content": "Để người dân tự điều hành hệ thống hỗ trợ.",
        "Effects": {
          "Trust": 3,
          "Economy": 1
        },
        "NextPhaseID": "PHASE_4C"
      },
      {
        "ChoiceID": "C",
        "Title": "Giảm hỗ trợ",
        "Content": "Chuyển tài nguyên sang khu công nghiệp.",
        "Effects": {
          "Economy": 5,
          "Trust": -5
        },
        "NextPhaseID": "PHASE_4C"
      }
    ]
  },

  "EV_RAND_P4C_002": {
    "EventID": "EV_RAND_P4C_002",
    "Title": "Doanh Nghiệp Rời Khỏi Theodore",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_4C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Ba tập đoàn vừa chuyển vốn sang Northreach.",
            "Họ không còn tin Theodore có thể duy trì lợi nhuận.",
            "Một thành phố không thể tồn tại nếu không còn ai đầu tư vào nó."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "LÀN SÓNG RÚT VỐN KHỎI THEODORE TIẾP TỤC TĂNG",
      "Content": "Nhiều doanh nghiệp công nghiệp bắt đầu đóng cửa nhà máy hoặc chuyển hoạt động sang các khu vực ổn định hơn."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Tăng thuế doanh nghiệp rời đi",
        "Content": "Ngăn dòng vốn tháo chạy bằng biện pháp cưỡng chế.",
        "Effects": {
          "Equality": 5,
          "Economy": -6,
          "Trust": -2
        },
        "NextPhaseID": "PHASE_4C"
      },
      {
        "ChoiceID": "B",
        "Title": "Đàm phán giữ doanh nghiệp",
        "Content": "Đưa ra thỏa thuận hỗ trợ tạm thời.",
        "Effects": {
          "Economy": 4,
          "Trust": 2
        },
        "NextPhaseID": "PHASE_4C"
      },
      {
        "ChoiceID": "C",
        "Title": "Để họ rời đi",
        "Content": "Tập trung nguồn lực cho dân sinh thay vì doanh nghiệp.",
        "Effects": {
          "Equality": 4,
          "Economy": -5
        },
        "NextPhaseID": "PHASE_4C"
      }
    ]
  },

  "EV_RAND_P4C_003": {
    "EventID": "EV_RAND_P4C_003",
    "Title": "Mùa Đông Dịu Lại",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_4C",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Nhiệt độ đang tăng lên.",
            "Lần đầu tiên sau nhiều tháng, trẻ con có thể ra ngoài mà không đóng băng.",
            "Có lẽ Theodore vẫn còn cơ hội."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "ĐỢT BÃO TUYẾT CUỐI CÙNG ĐANG RÚT ĐI",
      "Content": "Các chuyên gia khí tượng cho biết mùa đông tại Theodore có dấu hiệu kết thúc sớm hơn dự kiến, giúp giảm áp lực lên hệ thống nhiên liệu quốc gia."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Khôi phục sản xuất công nghiệp",
        "Content": "Tận dụng thời tiết để đưa nhà máy hoạt động lại.",
        "Effects": {
          "Economy": 7,
          "Resource": -3
        },
        "NextPhaseID": "PHASE_4C"
      },
      {
        "ChoiceID": "B",
        "Title": "Tái thiết khu dân cư",
        "Content": "Đầu tư phục hồi các khu lao động bị thiệt hại.",
        "Effects": {
          "Trust": 6,
          "Equality": 5
        },
        "NextPhaseID": "PHASE_4C"
      },
      {
        "ChoiceID": "C",
        "Title": "Tiết kiệm tài nguyên",
        "Content": "Giữ lại phần lớn kho than dự trữ.",
        "Effects": {
          "Resource": 6,
          "Economy": -2
        },
        "NextPhaseID": "PHASE_4C"
      }
    ]
  },

  "EV_MAIN_P5_001": {
    "EventID": "EV_MAIN_P5_001",
    "Title": "Mùa Đông Cuối Cùng",
    "Branch": "PHASE_MAIN",
    "PhaseID": "PHASE_5",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Elias",
          "senderImage": EliasSad,
          "senderBlip": EliasSound,
          "senderText": [
            "Dinh thự dạo này yên tĩnh quá...",
            "Con không còn nhớ lần cuối cả nhà ăn tối cùng nhau là khi nào nữa."
          ]
        },
        {
          "senderName": "Elias",
          "senderImage": Elias,
          "senderBlip": EliasSound,
          "senderText": [
            "Cha...",
            "Đừng để thành phố này thay đổi cha hoàn toàn."
          ]
        },
        {
          "senderName": "Alexander Whitmore",
          "senderImage": AlexanderWhitmore,
          "senderBlip": AlexanderWhitmoreSound,
          "senderText": [
            "Theodore đã thay đổi mãi mãi.",
            "Dù anh chọn công nghiệp hay dân sinh, thành phố này sẽ nhớ những gì đã xảy ra mùa đông năm nay.",
            "Lịch sử luôn được viết bởi kẻ còn tồn tại."
          ]
        },
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Các tuyến đường sắt cuối cùng cũng hoạt động ổn định trở lại.",
            "Nhưng thiệt hại đã vượt xa những con số thống kê.",
            "Theodore sẽ mất nhiều năm để hồi phục."
          ]
        },
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Thị trường đã chọn phe từ lâu.",
            "Câu hỏi duy nhất còn lại là liệu chính quyền có đủ mạnh để tồn tại sau cuộc khủng hoảng này hay không.",
            "Mọi đế chế đều được xây bằng khủng hoảng."
          ]
        },
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Người dân vẫn còn sống.",
            "Sau tất cả những gì đã xảy ra... có lẽ đó đã là một chiến thắng.",
            "Nhưng họ sẽ không quên những quyết định của anh."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE BƯỚC QUA MÙA ĐÔNG ĐEN TỐI",
      "Content": "Sau nhiều tháng khủng hoảng than đá, đình công và xung đột chính trị, Theodore cuối cùng đã vượt qua mùa đông khắc nghiệt nhất trong lịch sử hiện đại.\n\nTuy nhiên, thành phố giờ đây bị chia rẽ sâu sắc giữa giới tài phiệt công nghiệp, tầng lớp lao động và chính quyền trung ương.\n\nCác nhà sử học gọi mùa đông năm 1962 là bước ngoặt định hình tương lai của Theodore trong nhiều thập kỷ tới."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Xây dựng Theodore công nghiệp",
        "Content": "Đặt tăng trưởng kinh tế làm ưu tiên tối thượng cho tương lai.",
        "Effects": { "Economy": 12, "Security": 5, "Equality": -10 },
        "NextPhaseID": "ENDING", 
        "EndingPayload": {
          "title": "KỶ NGUYÊN THÉP",
          "subtitle": "Theodore Trở Thành Đầu Tàu Công Nghiệp Lạnh Lùng",
          "description": "Kinh tế tăng trưởng vượt bậc, khói bụi nhà máy che mờ bầu trời. Giới tài phiệt hài lòng, nhưng người lao động phải oằn mình gánh chịu sự bất bình đẳng sâu sắc."
        }
      },
      {
        "ChoiceID": "B",
        "Title": "Tái thiết cân bằng quốc gia",
        "Content": "Cố gắng hòa giải giữa doanh nghiệp và người lao động.",
        "Effects": { "Trust": 8, "Economy": 4, "Equality": 4 },
        "NextPhaseID": "ENDING",
        "EndingPayload": {
          "title": "BÌNH MINH HÒA GIẢI",
          "subtitle": "Con Đường Ngoại Giao Khôn Khéo",
          "description": "Bạn đã chèo lái Theodore vượt qua cơn bão bằng sự thỏa hiệp. Thành phố không giàu lên quá nhanh, nhưng sự bình yên và lòng tin đã trở lại với các khu phố."
        }
      },
      {
        "ChoiceID": "C",
        "Title": "Đặt người dân lên trên hết",
        "Content": "Ưu tiên phúc lợi xã hội và tái thiết cộng đồng lao động.",
        "Effects": { "Trust": 10, "Equality": 12, "Economy": -8 },
        "NextPhaseID": "ENDING",
        "EndingPayload": {
          "title": "THÀNH PHỐ CỦA NHÂN DÂN",
          "subtitle": "Phúc Lợi Xã Hội Chiến Thắng Khủng Hoảng",
          "description": "Người dân ca ngợi tên bạn như một vị cứu tinh. Ngân khố trống rỗng và kinh tế đình trệ, nhưng ngọn lửa nhân văn đã sưởi ấm Theodore sau mùa đông đen tối."
        }
      }
    ]
  },

  "EV_RAND_P5_001": {
    "EventID": "EV_RAND_P5_001",
    "Title": "Những Con Đường Tan Băng",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_5",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Bernard Hale",
          "senderImage": BernardHale,
          "senderBlip": BernardHaleSound,
          "senderText": [
            "Băng tuyết bắt đầu tan trên các tuyến đường phía Bắc.",
            "Các đoàn tàu có thể hoạt động bình thường trở lại.",
            "Ít nhất Theodore vẫn còn cơ hội đứng dậy."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "HOẠT ĐỘNG VẬN TẢI DẦN PHỤC HỒI",
      "Content": "Nhiều tuyến đường sắt quan trọng đã hoạt động trở lại sau nhiều tháng bị gián đoạn bởi bão tuyết và khủng hoảng nhiên liệu."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Khôi phục thương mại",
        "Content": "Tập trung đưa kinh tế trở lại bình thường.",
        "Effects": {
          "Economy": 6,
          "Resource": -2
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "B",
        "Title": "Ưu tiên tái thiết dân cư",
        "Content": "Dùng tuyến vận tải để hỗ trợ các khu lao động.",
        "Effects": {
          "Trust": 5,
          "Equality": 4
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "C",
        "Title": "Tích trữ dự phòng",
        "Content": "Chuẩn bị cho khủng hoảng tương lai.",
        "Effects": {
          "Resource": 6,
          "Economy": -2
        },
        "NextPhaseID": "PHASE_5"
      }
    ]
  },

  "EV_RAND_P5_002": {
    "EventID": "EV_RAND_P5_002",
    "Title": "Những Cái Tên Được Ghi Nhớ",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_5",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Mira Volkov",
          "senderImage": MiraVolkov,
          "senderBlip": MiraVolkovSound,
          "senderText": [
            "Người dân bắt đầu dựng bia tưởng niệm cho những người không sống sót qua mùa đông.",
            "Họ nói Theodore cần nhớ cái giá của sự sống còn.",
            "Có những thứ còn quan trọng hơn tăng trưởng."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "CÁC KHU LAO ĐỘNG TỔ CHỨC TƯỞNG NIỆM NẠN NHÂN MÙA ĐÔNG",
      "Content": "Nhiều cộng đồng dân cư tổ chức lễ tưởng niệm những người thiệt mạng trong khủng hoảng nhiên liệu và các cuộc bạo loạn mùa đông."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Tài trợ lễ tưởng niệm",
        "Content": "Công nhận mất mát của người dân.",
        "Effects": {
          "Trust": 7,
          "Equality": 4
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "B",
        "Title": "Tập trung vào tương lai",
        "Content": "Kêu gọi người dân bỏ lại quá khứ.",
        "Effects": {
          "Economy": 3,
          "Trust": -2
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "C",
        "Title": "Kiểm soát truyền thông",
        "Content": "Hạn chế các hoạt động dễ gây bất ổn.",
        "Effects": {
          "Security": 5,
          "Trust": -5
        },
        "NextPhaseID": "PHASE_5"
      }
    ]
  },

  "EV_RAND_P5_003": {
    "EventID": "EV_RAND_P5_003",
    "Title": "Tương Lai Của Theodore",
    "Branch": "RANDOM",
    "PhaseID": "PHASE_5",

    "Telephone": {
      "phoneCalls": [
        {
          "senderName": "Eleanor Wentworth",
          "senderImage": EleanorWentworth,
          "senderBlip": EleanorWentworthSound,
          "senderText": [
            "Khủng hoảng nào rồi cũng kết thúc.",
            "Điều còn lại là ai kiểm soát tương lai sau đống tro tàn.",
            "Theodore sẽ trở thành biểu tượng... hoặc lời cảnh báo."
          ]
        }
      ]
    },

    "Newspaper": {
      "Title": "THEODORE ĐỨNG TRƯỚC KỶ NGUYÊN MỚI",
      "Content": "Sau mùa đông lịch sử, chính quyền Theodore bắt đầu xây dựng kế hoạch phục hồi dài hạn nhằm tái định hình nền kinh tế và cấu trúc xã hội thành phố."
    },

    "Choices": [
      {
        "ChoiceID": "A",
        "Title": "Mở rộng công nghiệp",
        "Content": "Đầu tư mạnh vào thép và vận tải.",
        "Effects": {
          "Economy": 8,
          "Equality": -4
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "B",
        "Title": "Cải cách xã hội",
        "Content": "Tăng đầu tư cho nhà ở và phúc lợi.",
        "Effects": {
          "Trust": 6,
          "Equality": 7,
          "Economy": -3
        },
        "NextPhaseID": "PHASE_5"
      },
      {
        "ChoiceID": "C",
        "Title": "Củng cố quyền lực trung ương",
        "Content": "Tăng kiểm soát để tránh khủng hoảng tái diễn.",
        "Effects": {
          "Security": 7,
          "Trust": -4
        },
        "NextPhaseID": "PHASE_5"
      }
    ]
  },
};

// 🎯 Đối tượng lưu trữ trạng thái Game toàn cục (Global State)
export const GAME_STATE = {
  currentPhaseID: "PHASE_1",
  currentEventID: null,
  eventHistory: [] // Nơi lưu vết tất cả EventID đã từng xuất hiện
};

/**
 * Hàm lấy sự kiện ngẫu nhiên theo Phase và tự động cập nhật lịch sử vào Game State
 * @param {string} phaseID - ID của Phase muốn lấy sự kiện (e.g., "PHASE_1")
 * @param {Object} state - Đối tượng quản lý State (Mặc định dùng GAME_STATE toàn cục)
 * @returns {Object|null} Trả về dữ liệu Event hoặc null nếu hết sự kiện khả dụng
 */
export function getEventByPhase(phaseID, state = GAME_STATE) {
  const phase = GAME_PHASES[phaseID];

  if (!phase) {
    console.error(`❌ Phase not found: ${phaseID}`);
    return null;
  }
  console.log("AAAAAAAAAA: ", phaseID);
  // 1. Tạo danh sách các sự kiện thuộc Phase này từ Database
  let pool = (phase.Events || [])
    .map(id => EVENTS_DATABASE[id])
    .filter(Boolean);

  // 2. ❌ Loại bỏ sự kiện đang hiển thị trên màn hình hiện tại (nếu có)
  if (state.currentEventID) {
    pool = pool.filter(e => e.EventID !== state.currentEventID);
  }

  // 3. ❌ Loại bỏ tất cả các sự kiện đã từng gặp trong lịch sử (Đọc từ state.eventHistory)
  pool = pool.filter(
    e => !state.eventHistory.includes(e.EventID)
  );

  // 4. Nếu kho sự kiện trống, cảnh báo và dừng lại
  if (pool.length === 0) {
    console.warn(`⚠️ No available events in phase ${phaseID}`);
    return null;
  }

  // 5. 🎲 Bốc ngẫu nhiên một sự kiện từ kho sự kiện khả dụng còn lại
  const chosenEvent = pool[Math.floor(Math.random() * pool.length)];

  // ====================================================================
  // 💾 TIẾN HÀNH LƯU TRỮ VÀO STATE ĐỂ ĐỒNG BỘ LỊCH SỬ (MUTATE GAME STATE)
  // ====================================================================
  
  // Nếu sự kiện hiện tại đang chạy chưa nằm trong lịch sử, đẩy nó vào lịch sử trước khi đổi Event mới
  if (state.currentEventID && !state.eventHistory.includes(state.currentEventID)) {
    state.eventHistory.push(state.currentEventID);
  }

  // Cập nhật thông tin sự kiện mới được chọn vào State quản lý
  state.currentPhaseID = phaseID;
  state.currentEventID = chosenEvent.EventID;

  // Trả về dữ liệu sự kiện đã chọn để Component sẵn sàng hiển thị
  return chosenEvent;
}