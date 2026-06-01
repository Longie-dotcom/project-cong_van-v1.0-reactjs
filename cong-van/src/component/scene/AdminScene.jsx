import { useState, useEffect, useMemo } from "react";
import { useGameHub } from "../../hooks/useGameHub";
import './AdminScene.css';

export default function AdminScene() {
    const [sortKey, setSortKey] = useState("COAL");
    const [sortOrder, setSortOrder] = useState("desc");
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

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortOrder(prev => prev === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortOrder("desc");
        }
    };

    const sortedPlayers = useMemo(() => {
        return Object.entries(players).sort((a, b) => {
            const pa = a[1];
            const pb = b[1];

            const getValue = (p) => {
                switch (sortKey) {
                    case "COAL": return p.COAL ?? 0;
                    case "ECONOMY": return p.ECONOMY ?? 0;
                    case "HAPPINESS": return p.HAPPINESS ?? 0;
                    case "RESOURCE": return p.RESOURCE ?? 0;
                    default: return 0;
                }
            };

            const diff = getValue(pa) - getValue(pb);
            return sortOrder === "asc" ? diff : -diff;
        });
    }, [players, sortKey, sortOrder]);

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
                            <th onClick={() => handleSort("COAL")} style={{ cursor: "pointer" }}>
                                Than {sortKey === "COAL" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                            </th>

                            <th onClick={() => handleSort("ECONOMY")} style={{ cursor: "pointer" }}>
                                Tiền {sortKey === "ECONOMY" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                            </th>

                            {showHappiness && (
                                <th onClick={() => handleSort("HAPPINESS")} style={{ cursor: "pointer" }}>
                                    Hạnh phúc {sortKey === "HAPPINESS" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                                </th>
                            )}

                            <th onClick={() => handleSort("RESOURCE")} style={{ cursor: "pointer" }}>
                                Nhân lực {sortKey === "RESOURCE" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                            </th>
                            <th>Ký túc xá</th>
                            <th>Nâng cấp</th>
                            <th>Tự động hóa</th>
                            <th>Giai đoạn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPlayers.map(([id, p]) => (
                            <tr key={id}>
                                <td style={{ fontWeight: 'bold' }}>{p.name || "Unknown"}</td>
                                <td>{p.COAL?.toLocaleString()} {p.COAL < 0 && <span className="status-label label-debt">(Nợ)</span>}</td>
                                <td>{p.ECONOMY?.toLocaleString()} {p.ECONOMY < 0 && <span className="status-label label-debt">(Nợ)</span>}</td>
                                {showHappiness && <td>{p.HAPPINESS}</td>}
                                <td>{p.RESOURCE?.toLocaleString()} {p.RESOURCE < 0 && <span className="status-label label-death">(Tử vong)</span>}</td>
                                <td><div className="upgrade-group">{[p.village_1, p.village_2, p.village_3, p.village_4].map((v, i) => <span key={i} className="level-pill">{v}</span>)}</div></td>
                                <td><div className="upgrade-group">{[p.tech_1, p.tech_2, p.tech_3, p.tech_4].map((u, i) => <span key={i} className="level-pill">{u}</span>)}</div></td>
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