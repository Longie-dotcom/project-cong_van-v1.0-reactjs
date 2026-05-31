import { useEffect } from 'react';
import { PAPER_CONFIG } from '../data/assets/paper';
import { STATS } from '../data/assets/stats';
import { GAME_BALANCE } from '../data/config';

export function usePassiveCoal(playerState, setPlayerState) {
    const { railway, auto, tools, storage } = playerState;

    useEffect(() => {
        if (!GAME_BALANCE.PASSIVE_INCOME.ENABLED) return;

        const interval = setInterval(() => {
            setPlayerState(prev => {
                let coalPerSecond = 0;

                // Tính tổng thu nhập dựa trên các nâng cấp Tab C
                PAPER_CONFIG.UPGRADES.C.forEach(item => {
                    const currentLevel = prev[item.id] || 0;
                    coalPerSecond += (item.value * currentLevel * GAME_BALANCE.PASSIVE_INCOME.GLOBAL_MULTIPLIER);
                });

                // Nếu không có thu nhập (hoặc âm do các sự kiện trừ than), vẫn tính toán bình thường
                // Math.trunc giúp cắt bỏ phần thập phân, giữ nguyên dấu (+ hoặc -)
                const finalChange = Math.trunc(coalPerSecond);

                // Nếu không có thay đổi gì, trả về state cũ để tránh re-render
                if (finalChange === 0) return prev;

                return {
                    ...prev,
                    [STATS.COAL]: prev[STATS.COAL] + finalChange
                };
            });
        }, GAME_BALANCE.PASSIVE_INCOME.INTERVAL_MS);

        // Dọn dẹp interval khi component unmount hoặc khi dependency thay đổi
        return () => clearInterval(interval);
    }, [railway, auto, tools, storage, setPlayerState]);
}