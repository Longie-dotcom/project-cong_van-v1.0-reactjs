// Resource upgrading - Tab I (Resource)
import LocalVillage from '../../assets/image/paper/icon/icon17.png';
import SmallTown from '../../assets/image/paper/icon/icon18.png';
import SmallCity from '../../assets/image/paper/icon/icon19.png';
import CenterCity from '../../assets/image/paper/icon/icon20.png';

// Coal value - Tab II (coal_value)
import RefiningTechnology from '../../assets/image/paper/icon/icon21.png';
import CompressingTechnology from '../../assets/image/paper/icon/icon22.png';
import FilteringTechnology from '../../assets/image/paper/icon/icon23.png';
import ChemicalTechnology from '../../assets/image/paper/icon/icon24.png';

// Passive coal collector - Tab III (Coal/s)
import RailwayLevel1 from '../../assets/image/paper/icon/icon1.png'; 
import RailwayLevel2 from '../../assets/image/paper/icon/icon2.png'; 
import RailwayLevel3 from '../../assets/image/paper/icon/icon3.png'; 
import RailwayLevel4 from '../../assets/image/paper/icon/icon4.png'; 
 
import AutomationLevel1 from '../../assets/image/paper/icon/icon5.png'; 
import AutomationLevel2 from '../../assets/image/paper/icon/icon6.png'; 
import AutomationLevel3 from '../../assets/image/paper/icon/icon7.png'; 
import AutomationLevel4 from '../../assets/image/paper/icon/icon8.png'; 
 
import ToolLevel1 from '../../assets/image/paper/icon/icon9.png'; 
import ToolLevel2 from '../../assets/image/paper/icon/icon10.png'; 
import ToolLevel3 from '../../assets/image/paper/icon/icon11.png'; 
import ToolLevel4 from '../../assets/image/paper/icon/icon12.png'; 

import StorageLevel1 from '../../assets/image/paper/icon/icon13.png'; 
import StorageLevel2 from '../../assets/image/paper/icon/icon14.png'; 
import StorageLevel3 from '../../assets/image/paper/icon/icon15.png'; 
import StorageLevel4 from '../../assets/image/paper/icon/icon16.png'; 

// Move on to next phase or sell current coal - Tab IV (Level up)
import PaperIcon from '../../assets/image/paper/icon/icon25.png';
import EconomySell from '../../assets/image/paper/icon/icon26.png';

// Paper components
import PaperBackground from '../../assets/image/paper/paper.png';
import TabI1 from '../../assets/image/paper/tab/paper-tab-i1.png';
import TabI2 from '../../assets/image/paper/tab/paper-tab-i2.png';
import TabII1 from '../../assets/image/paper/tab/paper-tab-ii1.png';
import TabII2 from '../../assets/image/paper/tab/paper-tab-ii2.png';
import TabIII1 from '../../assets/image/paper/tab/paper-tab-iii1.png';
import TabIII2 from '../../assets/image/paper/tab/paper-tab-iii2.png';
import TabIV1 from '../../assets/image/paper/tab/paper-tab-iv1.png';
import TabIV2 from '../../assets/image/paper/tab/paper-tab-iv2.png';

export const UPGRADE_DATA = Object.freeze({
  // Tab A
  A: [
    { id: "village_1", name: "Phòng Trọ Nhỏ", level: 1, baseCost: 10, metric: "Nhân lực", value: 50, asset: LocalVillage },
    { id: "village_2", name: "Ký Túc Xá", level: 2, baseCost: 40, metric: "Nhân lực", value: 120, asset: SmallTown },
    { id: "village_3", name: "Khu Cư Xá", level: 3, baseCost: 150, metric: "Nhân lực", value: 300, asset: SmallCity },
    { id: "village_4", name: "Đại Cư Xá", level: 4, baseCost: 500, metric: "Nhân lực", value: 800, asset: CenterCity }
  ],

  // Tab B
  B: [
    { id: "tech_1", name: "Công Nghệ Tinh Chế", level: 1, baseCost: 15, metric: "Giá trị than", value: 1.5, asset: RefiningTechnology },
    { id: "tech_2", name: "Nén Áp Suất Cao", level: 1, baseCost: 60, metric: "Giá trị than", value: 2.5, asset: CompressingTechnology },
    { id: "tech_3", name: "Lọc Tạp Chất", level: 1, baseCost: 200, metric: "Giá trị than", value: 4.0, asset: FilteringTechnology },
    { id: "tech_4", name: "Biến Đổi Hóa Học", level: 1, baseCost: 700, metric: "Giá trị than", value: 7.5, asset: ChemicalTechnology }
  ],

  // Tab C
  C: [
    { id: "railway", name: "Đường Ray Vận Tải", level: 1, maxLevel: 4, baseCost: 20, metric: "Than/s", value: 5, assets: [RailwayLevel1, RailwayLevel2, RailwayLevel3, RailwayLevel4] },
    { id: "auto", name: "Tự Động Hóa", level: 1, maxLevel: 4, baseCost: 35, metric: "Than/s", value: 12, assets: [AutomationLevel1, AutomationLevel2, AutomationLevel3, AutomationLevel4] },
    { id: "tools", name: "Công Cụ Khai Thác", level: 1, maxLevel: 4, baseCost: 15, metric: "Than/s", value: 3, assets: [ToolLevel1, ToolLevel2, ToolLevel3, ToolLevel4] },
    { id: "storage", name: "Kho Chứa Than", level: 1, maxLevel: 4, baseCost: 25, metric: "Than/s", value: 8, assets: [StorageLevel1, StorageLevel2, StorageLevel3, StorageLevel4] }
  ],

  // Tab D
  D: [
    { id: "sell_market", name: "Tuồn Than Ra Thị Trường", level: 1, baseCost: 0, metric: "Quỹ đen", value: "Vốn đầu tư", description: "Lén lút tuồn số Than hiện có ra thị trường tự do để thu về Tiền mặt (Vàng). Dùng nguồn vốn này để mua sắm trang thiết bị, đẩy mạnh dây chuyền sản xuất.", asset: EconomySell },
    { id: "submit_cartel", name: "Nộp Hoàn Thành Chỉ Tiêu", level: 1, baseCost: 0, metric: "Chỉ tiêu", value: "Uy tín sếp", description: "Giao nộp Than cho Cartel để hoàn thành hạn ngạch được giao.", asset: PaperIcon }
  ]
});

export const PAPER = Object.freeze({
  PaperBackground: PaperBackground,
  TabI1: TabI1,
  TabI2: TabI2,
  TabII1: TabII1,
  TabII2: TabII2,
  TabIII1: TabIII1,
  TabIII2: TabIII2,
  TabIV1: TabIV1,
  TabIV2: TabIV2,
});