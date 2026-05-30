// Resource upgrading - Tab I (Nhân sự)
import LocalVillage from './../assets/upgrading/icon/icon17.png';
import SmallTown from './../assets/upgrading/icon/icon18.png';
import SmallCity from './../assets/upgrading/icon/icon19.png';
import CenterCity from './../assets/upgrading/icon/icon20.png';

// Coal value - Tab II (Chất lượng than)
import RefiningTechnology from './../assets/upgrading/icon/icon21.png';
import CompressingTechnology from './../assets/upgrading/icon/icon22.png';
import FilteringTechnology from './../assets/upgrading/icon/icon23.png';
import ChemicalTechnology from './../assets/upgrading/icon/icon24.png';

// Passive coal collector - Tab III (Tự động hóa)
import RailwayLevel1 from './../assets/upgrading/icon/icon1.png'; 
import RailwayLevel2 from './../assets/upgrading/icon/icon2.png'; 
import RailwayLevel3 from './../assets/upgrading/icon/icon3.png'; 
import RailwayLevel4 from './../assets/upgrading/icon/icon4.png'; 
 
import AutomationLevel1 from './../assets/upgrading/icon/icon5.png'; 
import AutomationLevel2 from './../assets/upgrading/icon/icon6.png'; 
import AutomationLevel3 from './../assets/upgrading/icon/icon7.png'; 
import AutomationLevel4 from './../assets/upgrading/icon/icon8.png'; 
 
import ToolLevel1 from './../assets/upgrading/icon/icon9.png'; 
import ToolLevel2 from './../assets/upgrading/icon/icon10.png'; 
import ToolLevel3 from './../assets/upgrading/icon/icon11.png'; 
import ToolLevel4 from './../assets/upgrading/icon/icon12.png'; 

import StorageLevel1 from './../assets/upgrading/icon/icon13.png'; 
import StorageLevel2 from './../assets/upgrading/icon/icon14.png'; 
import StorageLevel3 from './../assets/upgrading/icon/icon15.png'; 
import StorageLevel4 from './../assets/upgrading/icon/icon16.png'; 

// Chuyển phase và bán than
import PaperIcon from './../assets/upgrading/icon/icon25.png';
import EconomySell from './../assets/upgrading/icon/icon26.png';

const UPGRADE_DATA = {
  // 🌟 Tab A: Tách thành 4 dòng nâng cấp nhân sự tuyến tính
  A: [
    { id: "village_1", name: "Phòng Trọ Nhỏ", level: 1, baseCost: 10, metric: "Nhân lực", value: 50, asset: LocalVillage },
    { id: "village_2", name: "Ký Túc Xá", level: 2, baseCost: 40, metric: "Nhân lực", value: 120, asset: SmallTown },
    { id: "village_3", name: "Khu Cư Xá", level: 3, baseCost: 150, metric: "Nhân lực", value: 300, asset: SmallCity },
    { id: "village_4", name: "Đại Cư Xá", level: 4, baseCost: 500, metric: "Nhân lực", value: 800, asset: CenterCity }
  ],

  // 🌟 Tab B: Tách thành 4 dòng nâng cấp công nghệ tinh chế
  B: [
    { id: "tech_1", name: "Công Nghệ Tinh Chế", level: 1, baseCost: 15, metric: "Giá trị than", value: 1.5, asset: RefiningTechnology },
    { id: "tech_2", name: "Nén Áp Suất Cao", level: 1, baseCost: 60, metric: "Giá trị than", value: 2.5, asset: CompressingTechnology },
    { id: "tech_3", name: "Lọc Tạp Chất", level: 1, baseCost: 200, metric: "Giá trị than", value: 4.0, asset: FilteringTechnology },
    { id: "tech_4", name: "Biến Đổi Hóa Học", level: 1, baseCost: 700, metric: "Giá trị than", value: 7.5, asset: ChemicalTechnology }
  ],

  // Tab C: Giữ nguyên cấu trúc gộp mảng để chạy MaxLevel (Cấp 1 -> Cấp 4)
  C: [
    { id: "railway", name: "Đường Ray Vận Tải", level: 1, maxLevel: 4, baseCost: 20, metric: "Than/s", value: 5, assets: [RailwayLevel1, RailwayLevel2, RailwayLevel3, RailwayLevel4] },
    { id: "auto", name: "Tự Động Hóa", level: 1, maxLevel: 4, baseCost: 35, metric: "Than/s", value: 12, assets: [AutomationLevel1, AutomationLevel2, AutomationLevel3, AutomationLevel4] },
    { id: "tools", name: "Công Cụ Khai Thác", level: 1, maxLevel: 4, baseCost: 15, metric: "Than/s", value: 3, assets: [ToolLevel1, ToolLevel2, ToolLevel3, ToolLevel4] },
    { id: "storage", name: "Kho Chứa Than", level: 1, maxLevel: 4, baseCost: 25, metric: "Than/s", value: 8, assets: [StorageLevel1, StorageLevel2, StorageLevel3, StorageLevel4] }
  ],

  // 🌟 TAB D: QUYẾT ĐỊNH CỦA QUẢN ĐỐC (QUẢN LÝ SẢN LƯỢNG)
  D: [
    { 
      id: "sell_market", 
      name: "Tuồn Than Ra Thị Trường", 
      level: 1, 
      baseCost: 0, 
      metric: "Quỹ đen", 
      value: "Vốn đầu tư", 
      description: "Lén lút tuồn số Than hiện có ra thị trường tự do để thu về Tiền mặt (Vàng). Dùng nguồn vốn này để mua sắm trang thiết bị, đẩy mạnh dây chuyền sản xuất.",
      asset: EconomySell 
    },
    { 
      id: "submit_cartel", 
      name: "Nộp Hoàn Thành Chỉ Tiêu", 
      level: 1, 
      baseCost: 0, 
      metric: "Chỉ tiêu", 
      value: "Uy tín sếp", 
      description: "Giao nộp Than cho Cartel để hoàn thành hạn ngạch được giao.",
      asset: PaperIcon 
    }
  ]
};

export default UPGRADE_DATA;