"use client"
import styles from '@/styles/Dashboard.module.css';
import { FaCommentAlt, FaEnvelope, FaHistory } from "react-icons/fa";
import { useEffect, useState } from 'react';
import ChatSidebar from '@/components/Sidebar/ChatSidebar';
import ContentSidebar from '@/components/Sidebar/ContentSidebar';

const dynamicData = [
    {
        channel: "Face",
        assigned: 10,
        replied: 8,
        skipped: 2,
        hold: 1,
        transferred: 0,
        aht: '5m 30s',
        sla: '90%'
    },
    {
        channel: "YouTube",
        assigned: 15,
        replied: 12,
        skipped: 3,
        hold: 2,
        transferred: 1,
        aht: '6m 20s',
        sla: '85%'
    },
    {
        channel: "Instagram",
        assigned: 20,
        replied: 18,
        skipped: 2,
        hold: 0,
        transferred: 1,
        aht: '4m 50s',
        sla: '95%'
    }
];

export default function Dashboard() {
    const [isActive, setIsActive] = useState(false);
    // State to store the active conversation user's data
    const [activeConversation, setActiveConversation] = useState({
        name: '',
        image: '',
        status: '',
    });
    const handleClick = (event, message) => {
        event.preventDefault();
        setActiveConversation({
            name: message.name,
            image: message.image,
            status: message.status || 'online',
        });
        setIsActive(true);
    };
    return (
        <section className="chat-section">
            <div className="chat-container">
                <ChatSidebar />
                <div className="chat-content">
                    {/* start: Content side */}
                    <ContentSidebar
                        handleClick={handleClick}
                    />
                    <div className={`conversation conversation-default ${!isActive ? "active" : ""}`}>
                        <i className="ri-chat-3-line" />
                        <p>Select chat and view conversation!</p>
                    </div>
                    <div
                        className={`conversation ${isActive ? "active" : ""}`}
                    >
                        <div className="conversation-top">
                            <button type="button" className="conversation-back">
                                <i className="ri-arrow-left-line" />
                            </button>
                            {/* Conversation user details */}
                            <div className="conversation-user">
                                <img
                                    className="conversation-user-image"
                                    src={activeConversation.image || 'default-image-url'}
                                    alt=""
                                />
                                <div>
                                    <div className="conversation-user-name">{activeConversation.name}</div>
                                </div>
                            </div>
                            <div className="conversation-buttons">
                                <button type="button">
                                    <i className="ri-printer-fill" />
                                </button>
                            </div>
                        </div>
                        <div className="conversation-main">
                            <ul className="conversation-wrapper mt-2">
                                <div className="coversation-divider">
                                    <span>Today</span>
                                </div>
                            </ul>
                            <div className='card'>
                                <div className='card-body'>
                                    <table className={`table table-bordered table-striped ${styles.dataTable}`}>
                                        <thead>
                                            <tr>
                                                <th>Channel</th>
                                                <th>Assigned</th>
                                                <th>Replied</th>
                                                <th>Skipped</th>
                                                <th>Hold</th>
                                                <th>Transferred</th>
                                                <th>AHT</th>
                                                <th>SLA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dynamicData.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.channel}</td>
                                                    <td>{data.assigned}</td>
                                                    <td>{data.replied}</td>
                                                    <td>{data.skipped}</td>
                                                    <td>{data.hold}</td>
                                                    <td>{data.transferred}</td>
                                                    <td>{data.aht}</td>
                                                    <td>{data.sla}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <ul className="conversation-wrapper mt-2">
                                <div className="coversation-divider">
                                    <span>YesterDay</span>
                                </div>
                            </ul>
                            <div className='card'>
                                <div className='card-body'>
                                    <table className={`table table-bordered table-striped ${styles.dataTable}`}>
                                        <thead>
                                            <tr>
                                                <th>Channel</th>
                                                <th>Assigned</th>
                                                <th>Replied</th>
                                                <th>Skipped</th>
                                                <th>Hold</th>
                                                <th>Transferred</th>
                                                <th>AHT</th>
                                                <th>SLA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dynamicData.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.channel}</td>
                                                    <td>{data.assigned}</td>
                                                    <td>{data.replied}</td>
                                                    <td>{data.skipped}</td>
                                                    <td>{data.hold}</td>
                                                    <td>{data.transferred}</td>
                                                    <td>{data.aht}</td>
                                                    <td>{data.sla}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <ul className="conversation-wrapper mt-2">
                                <div className="coversation-divider">
                                    <span>Last 1 week</span>
                                </div>
                            </ul>
                            <div className='card'>
                                <div className='card-body'>
                                    <table className={`table table-bordered table-striped ${styles.dataTable}`}>
                                        <thead>
                                            <tr>
                                                <th>Channel</th>
                                                <th>Assigned</th>
                                                <th>Replied</th>
                                                <th>Skipped</th>
                                                <th>Hold</th>
                                                <th>Transferred</th>
                                                <th>AHT</th>
                                                <th>SLA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dynamicData.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.channel}</td>
                                                    <td>{data.assigned}</td>
                                                    <td>{data.replied}</td>
                                                    <td>{data.skipped}</td>
                                                    <td>{data.hold}</td>
                                                    <td>{data.transferred}</td>
                                                    <td>{data.aht}</td>
                                                    <td>{data.sla}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
