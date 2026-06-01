import { useEffect, useRef, useState } from 'react';
import * as signalR from "@microsoft/signalr";

export function useGameHub(hubUrl) {
    const connection = useRef(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Khởi tạo kết nối
        connection.current = new signalR.HubConnectionBuilder()
            .withUrl(hubUrl, {
                transport: signalR.HttpTransportType.WebSockets, // Ép dùng WebSockets ngay
                skipNegotiation: true // Bỏ qua bước negotiation để kết nối nhanh hơn
            })
            .withAutomaticReconnect()
            .build();

        connection.current.start()
            .then(() => {
                console.log("SignalR Connected!");
                setIsConnected(true);
            })
            .catch(err => console.error("SignalR Connection Error: ", err));

        // Cleanup khi component unmount
        return () => {
            if (connection.current) {
                connection.current.stop();
            }
        };
    }, [hubUrl]);

    // Hàm gửi dữ liệu lên server
    const sendPlayerState = (playerState) => {
        if (connection.current && isConnected) {
            connection.current.invoke("UpdatePlayerState", playerState)
                .catch(err => console.error("Error sending state: ", err));
        }
    };

    // Hàm cho Admin join group
    const joinAdminGroup = () => {
        if (connection.current && isConnected) {
            connection.current.invoke("JoinAdminGroup");
        }
    };

    return { isConnected, sendPlayerState, joinAdminGroup, connection };
}