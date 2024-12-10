"use client";
import { useState, useEffect } from 'react';
import { FaPaperPlane, FaPaperclip } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import styles from '@/styles/Message.module.css';

export default function Message() {
    const [message, setMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false); // State to handle loading
    const numberOfUsers = 25;

    const sampleMessages = {};
    for (let i = 1; i <= numberOfUsers; i++) {
        const userName = `User ${i}`;
        sampleMessages[userName] = [
            { from: userName, text: `Hello! This is the first message from ${userName}` },
            { from: 'Franchis Choper', text: 'Hello! How can I help you today?' },
            { from: userName, text: `I wanted to ask about the services provided by Franchis Choper.` },
            { from: 'Franchis Choper', text: 'Of course! What would you like to know?' },
            { from: userName, text: `Do you offer any special plans, ${userName}?` },
            { from: 'Franchis Choper', text: 'Yes, we have several customizable plans for your needs.' },
            { from: userName, text: `I am interested in your premium plans. Can you give me more details?` },
            { from: 'Franchis Choper', text: 'Sure! Our premium plans include special features like priority support and more.' },
            { from: userName, text: `That sounds great! What are the pricing details?` },
            { from: 'Franchis Choper', text: 'Our premium plans start at $99 per month, with discounts available for yearly subscriptions.' },
            { from: userName, text: `I might be interested in the yearly subscription. How can I proceed?` },
            { from: 'Franchis Choper', text: 'You can sign up on our website or contact our sales team for more personalized assistance.' },
            { from: userName, text: `I just visited your website, and I have a few more questions.` },
            { from: 'Franchis Choper', text: 'Of course! What would you like to ask?' },
            { from: userName, text: `Can I upgrade my plan later if needed?` },
            { from: 'Franchis Choper', text: 'Yes, you can always upgrade or downgrade your plan as per your needs.' },
            { from: userName, text: `What kind of support do you offer with the premium plan?` },
        ];
    }

    const conversations = Array.from({ length: numberOfUsers }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        text: `Hello! This is message number ${index + 1}`,
        image: "/images/user.png",
    }));

    const handleUserClick = (user) => {
        setLoading(true); // Set loading to true when selecting a user
        setTimeout(() => {
            setSelectedUser({
                ...user,
                messages: sampleMessages[user.name]
            });
            setLoading(false);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            const newMessage = {
                from: 'Franchis Choper',
                text: message,
            };
            setMessage('');
        }
    };

    return (
        <div className={`row ${styles.chatBody}`}>
            <div className="col-3">
                <div className={styles.leftPanel}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Messaging</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.userList}>
                                {conversations.map((user) => (
                                    <div key={user.id} className={styles.userItem} onClick={() => handleUserClick(user)}>
                                        <img src={user.image} alt={user.name} className={styles.userImage} />
                                        <div className={styles.userDetails}>
                                            <p className={styles.userName}>{user.name}</p>
                                            <p className={styles.userText}>{user.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <div className={styles.rightPanel}>
                    {loading ? (
                        <div className={styles.loaderContainer}>
                            <img src="/images/Edutune.png" alt="Loading..." className={styles.loaderGif} />
                        </div>
                    ) : selectedUser ? (
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{selectedUser.name}'s Chat</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.messages}>
                                    <div className={styles.messageBody}>
                                        {selectedUser.messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`${styles.message} ${message.from === selectedUser.name ? styles.userMessage : styles.senderMessage}`}
                                            >
                                                <div className={styles.messageIcon}>
                                                    <FaUser className={message.from === selectedUser.name ? styles.userIcon : styles.senderIcon} />
                                                </div>
                                                <span className={`${message.from === selectedUser.name ? styles.userMessageContent : styles.senderMessageContent}`}>
                                                    {message.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.chatInputContainer}>
                                    <textarea
                                        className={styles.chatInput}
                                        placeholder="Type your message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <div className={styles.chatActions}>
                                        <button className={styles.submitButton} onClick={handleSubmit}>
                                            <FaPaperPlane /> Send
                                        </button>
                                        <input
                                            type="file"
                                            className={styles.attachmentInput}
                                            id="attachment"
                                            style={{ display: 'none' }}
                                        />
                                        <label htmlFor="attachment" className={styles.attachmentLabel}>
                                            <FaPaperclip size={24} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.emptyUserContent}>
                            <p>Click From User list View the Chat</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="col-3">
                <div className={styles.additionalSection}>
                    <h3>Additional Content</h3>
                    <p>Some extra content or features can go here.</p>
                </div>
            </div>
        </div>

    );
}
