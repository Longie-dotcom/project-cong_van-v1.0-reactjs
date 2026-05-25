import { useState, useEffect } from "react";
import Logo from './../../assets/image/avatar.gif';
import './BootScene.css';
import StampSound from './../../assets/sound/stamp.mp3';
import OpenMailSound from './../../assets/sound/open-mail.mp3'; // Đã import sẵn

export default function BootScene({ onFinish }) {
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (!isActivated) return;

    // Hàm phát tiếng đóng dấu
    const playStamp = () => {
      const audio = new Audio(StampSound);
      audio.volume = 0.8;
      audio.play().catch(err => console.log("Audio playback failed:", err));
    };

    // 🔊 Hàm phát tiếng mở thư cho frame cuối
    const playOpenMail = () => {
      const audio = new Audio(OpenMailSound);
      audio.volume = 0.7; // Điều chỉnh âm lượng vừa phải
      audio.play().catch(err => console.log("Audio playback failed:", err));
    };

    // 🔊 1. Đóng dấu phát thứ nhất NGAY KHI CLICK -> Hiện Text One luôn (Giây 0)
    playStamp();

    // 🔊 2. Đóng dấu phát thứ hai tại giây thứ 3 -> Hiện Text Two
    const timerTextTwo = setTimeout(() => {
      playStamp();
    }, 3000);

    // 🔊 3. Phát tiếng mở thư tại giây thứ 6 (Ngay lúc rèm đen .boot-curtain-overlay bắt đầu sập xuống)
    const timerOpenMail = setTimeout(() => {
      playOpenMail();
    }, 6000);

    // 🏁 Kết thúc BootScene tại giây thứ 7
    const timerFinish = setTimeout(() => {
      onFinish();
    }, 7000);

    return () => {
      clearTimeout(timerTextTwo);
      clearTimeout(timerOpenMail);
      clearTimeout(timerFinish);
    };
  }, [isActivated, onFinish]);

  return (
    <div 
      className="screen boot-screen" 
      onClick={() => !isActivated && setIsActivated(true)}
      style={{ cursor: !isActivated ? 'pointer' : 'default' }}
    >
      {/* 1. Logo: Nếu CHƯA click thì hiện, CLICK RỒI thì biến mất ngay lập tức */}
      {!isActivated && (
        <img src={Logo} alt="Studio Logo" className="boot-logo" />
      )}
      
      {/* 2. Điều phối các Layer Text xuất hiện nối đuôi nhau sau khi click */}
      {isActivated && (
        <>
          {/* Xuất hiện ngay lập tức ở giây 0 đến giây 3 */}
          <p className="boot-text-one">Một sản phẩm thuộc nhóm 5 - SE1839</p>
          
          {/* Xuất hiện từ giây 3 đến giây 6 */}
          <p className="boot-text-two">Dự án phục vụ môn Triết học Mác - Lênin (MLN111)</p>
          
          {/* Rèm đen hạ xuống ở giây thứ 6 */}
          <div className="boot-curtain-overlay" />
        </>
      )}

      {/* 3. Chữ bấm tương tác lúc đầu */}
      {!isActivated && (
        <div className="boot-click-trigger">
          <p>- Nhấn để tiếp tục -</p>
        </div>
      )}
    </div>
  );
}