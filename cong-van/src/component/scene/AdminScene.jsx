import { useState, useEffect } from "react";
import { useGameHub } from "../../hooks/useGameHub";
import './AdminScene.css';

export default function AdminScene() {
    const [players, setPlayers] = useState({});
    const [showHappiness, setShowHappiness] = useState(false);
    const { isConnected, joinAdminGroup, connection } = useGameHub(
        "https://uncommendable-projectively-elenor.ngrok-free.dev/gameHub"
    );

    useEffect(() => {
        if (isConnected && connection?.current) {
            joinAdminGroup();
            connection.current.on("ReceivePlayerUpdate", (data) => {
                const playerId = data.connectionId || data.name || Math.random().toString(36).substring(7);
                setPlayers((prev) => ({ ...prev, [playerId]: { ...data, connectionId: playerId } }));
            });
            return () => { connection.current.off("ReceivePlayerUpdate"); };
        }
    }, [isConnected, connection]);

    return (
        <div className="admin-container">
            <header className="admin-header">
                <p className="admin-header-text">Bảng xếp hạng Quản đốc</p>
                <div className="header-right-group">
                    <button onClick={() => setShowHappiness(!showHappiness)} className="toggle-btn">
                        {showHappiness ? "Ẩn" : "Hiện"}
                    </button>
                    <div className="status-badge">
                        Kết nối: {isConnected ? "Online" : "Offline"}
                    </div>
                </div>
            </header>

            <div className="admin-table-wrapper">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Than</th>
                            <th>Tiền</th>
                            {showHappiness && <th>Hạnh phúc</th>}
                            <th>Nhân lực</th>
                            <th>Ký túc xá</th>
                            <th>Nâng cấp</th>
                            <th>Tự động hóa</th>
                            <th>Giai đoạn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(players).map(([id, p]) => (
                            <tr key={id}>
                                <td style={{ fontWeight: 'bold' }}>{p.name || "Unknown"}</td>
                                <td>{p.COAL?.toLocaleString()} {p.COAL < 0 && <span className="status-label label-debt">(Nợ)</span>}</td>
                                <td>{p.ECONOMY?.toLocaleString()} {p.ECONOMY < 0 && <span className="status-label label-debt">(Nợ)</span>}</td>
                                {showHappiness && <td>{p.HAPPINESS}</td>}
                                <td>{p.RESOURCE?.toLocaleString()} {p.RESOURCE < 0 && <span className="status-label label-death">(Tử vong)</span>}</td>
                                <td><div className="upgrade-group">{[p.village_1, p.village_2, p.village_3, p.village_4].map((v, i) => <span key={i} className="level-pill">{v}</span>)}</div></td>
                                <td><div className="upgrade-group">{[p.b_upgrade_1, p.b_upgrade_2, p.b_upgrade_3, p.b_upgrade_4].map((u, i) => <span key={i} className="level-pill">{u}</span>)}</div></td>
                                <td><div className="upgrade-group">{[p.railway, p.auto, p.tools, p.storage].map((x, i) => <span key={i} className="level-pill">{x}</span>)}</div></td>
                                <td><span className="phase-badge">{p.currentPhaseID}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}