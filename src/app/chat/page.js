"use client"
import React, { useEffect, useState } from 'react'
import "../globals.css";
import MessageItem from "@/components/Message/MessagesList";
import ChatSidebar from "@/components/Sidebar/ChatSidebar";
import SelectField from '@/components/Select/Select';
import { Image, Offcanvas } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { FaAlignLeft, FaBookmark, FaClipboard, FaComment, FaEdit, FaEnvelope, FaEye, FaGripVertical, FaPaperclip, FaPlus, FaRegSmile, FaSearch, FaShareAlt, FaTrashAlt, FaUserPlus } from 'react-icons/fa';
import ContentSidebar from '@/components/Sidebar/ContentSidebar';
import styles from '@/styles/Comment.module.css';
import $ from "jquery";
import axios from 'axios';
import { toast } from 'react-toastify';

const Chat = () => {
    const handleMessageSubmit = async () => {
        const payload = {
            recipient: {
                id: userID,
            },
            message: {
                text: Message || "hello test",
            },
        };

        console.log(payload);
        // Example API call
        try {
            const response = await fetch(
                'https://graph.facebook.com/v21.0/431751180032336/messages?access_token=EAATriRmScZB4BO4YfgfC4bgATIREaR9SLCxp84vqqZAU6qJLcmtUZCDhkqLXgZA8xeYpTW1mS6EqhcLBczVYPwNs6IQRnYClAF86FOuIlnloW3juYsYzr14L7eFQaNrV9dzO2s38zbBCjX7p1QAO0slcXJV9keWAFLkbe4uAYWu5sdZC4IIViJeUHL2lbyggQRdt3Ks9BgCCc5TG3',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }
            );
            const data = await response.json();
            if (response.ok) {
                toast.success('Message sent successfully!');
                setMessage('');  // Clear the textarea
                console.log('Message sent:', data);
            } else {
                toast.error(`Error: ${data.error.message}`);
            }
        } catch (error) {
            toast.error('Error sending message: ' + error.message);
            console.error('Error sending message:', error);
        }
    };
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleShow = () => setShowOffcanvas(true);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const handleClose = () => setShowOffcanvas(false);
    const handleCopyClick = () => {
        const commentIdInput = document.getElementById('commentId');
        const commentIdValue = commentIdInput.value;

        if (commentIdValue) {
            navigator.clipboard.writeText(commentIdValue).then(() => {
                alert('Copied to clipboard!');
            });
        }
    };

    const handlePaste = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
            navigator.clipboard.readText().then((text) => {
                setPastedText(text);
            });
        }
    };

    const responses = [
        { id: 1, short_message: "Message 1", message: "Message Details 1" },
        { id: 2, short_message: "Message 2", message: "Message Details 2" },
        { id: 3, short_message: "Message 3", message: "Message Details 3" },
        { id: 4, short_message: "Message 4", message: "Message Details 4" },
        { id: 5, short_message: "Message 5", message: "Message Details 5" },
        { id: 6, short_message: "Message 6", message: "Message Details 6" }
    ];
    const dynamicOptionsOne = [
        { value: 'general_query', label: 'General Query' },
    ];
    const dynamicOptionsTwo = [
        { value: 'positive', label: 'Positive' },
        { value: 'neutral', label: 'Neutral' },
        { value: 'negative', label: 'Negative' },
    ];
    const [isActive, setIsActive] = useState(false);
    // State to store the active conversation user's data
    const [activeConversation, setActiveConversation] = useState({
        name: '',
        image: '',
        status: '',
        messages: []
    });

    const handleClick = (event, message) => {
        event.preventDefault();
        const conversationId = message.conversationId;
        console.log(conversationId);

        const messagesAPIUrl = `https://graph.facebook.com/v15.0/${conversationId}/messages?access_token=EAATriRmScZB4BO2FMmlUM7yLfZCVfbBecmzFryaXe6IkkFb5QgCjchfUWXtudVCEmmEgkaBWoRJ6ZB98tWnOVfVUWmpxtYLCquLYYEFWasK1o3vpyBrqtx9QBOGCZCztM1ZBs4pZBO1WzafwB8VrGtjTAmv9hIjRF6pAB39CZBfjavrn6siZCjFl6JZBzGDfo22fMxk1fSEtMscvW8zfS`;
        console.log(messagesAPIUrl);

        $.ajax({
            url: messagesAPIUrl,
            method: "GET",
            success: function (response) {
                const messages = response.data;
                console.log(messages);
                const allMessages = [];

                // Iterate over all messages to fetch the details
                messages.reverse().forEach(message => {
                    const messageDetailsUrl = `https://graph.facebook.com/v15.0/${message.id}?fields=id,created_time,from,to,message&access_token=EAATriRmScZB4BO2FMmlUM7yLfZCVfbBecmzFryaXe6IkkFb5QgCjchfUWXtudVCEmmEgkaBWoRJ6ZB98tWnOVfVUWmpxtYLCquLYYEFWasK1o3vpyBrqtx9QBOGCZCztM1ZBs4pZBO1WzafwB8VrGtjTAmv9hIjRF6pAB39CZBfjavrn6siZCjFl6JZBzGDfo22fMxk1fSEtMscvW8zfS`;

                    $.ajax({
                        url: messageDetailsUrl,
                        method: "GET",
                        success: function (messageDetails) {
                            console.log(messageDetails);
                            const { from, to, message: messageContent, created_time } = messageDetails;
                            allMessages.push({
                                text: messageContent,
                                time: created_time,
                                fromID: from.id,
                                fromName: from ? from.name : 'Unknown',
                                fromImage: from ? from.profile_picture_url : ''
                            });
                            if (allMessages.length === messages.length) {
                                allMessages.sort((a, b) => new Date(a.time) - new Date(b.time));
                                const newActiveConversation = {
                                    name: from ? from.name : 'Unknown',
                                    image: from ? from.profile_picture_url : '',
                                    status: 'online',
                                    createdTime: created_time,
                                    messages: allMessages
                                };
                                setActiveConversation(newActiveConversation);
                                setIsActive(true);
                            }
                        },
                        error: function (error) {
                            console.log('Error fetching message details:', error);
                        }
                    });

                });
            },
            error: function (error) {
                console.log('Error fetching messages:', error);
            }
        });
    };
    const handleBack = () => {
        setIsActive(false);
    };
    const [Message, setMessage] = useState('');
    const handleMessagesClick = (message) => {
        setMessage(message);
    }
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDelete = () => {
        alert("Delete clicked!");
    };

    const handleBookmark = () => {
        alert("Bookmark clicked!");
    };

    const handleShare = () => {
        alert("Share clicked!");
    };

    const handleEmojiClick = () => {
        alert("Emoji clicked!");
    };
    const addQuickResponse = () => {
        setModalContent('Add New Item');
        setShowModal(true);
    };
    const handleEditResponse = (response) => {
        console.log(response);
        setModalContent(`Edit ${response}`);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setModalContent('');
    };
    const pageID = "431751180032336";
    const [userID, setUserID] = useState("");
    const getUserID = (messages) => {
        const userMessage = messages.find((message) => message.fromID !== pageID);
        return userMessage ? userMessage.fromID : null;
    };
    useEffect(() => {
        if (activeConversation && activeConversation.messages) {
            const id = getUserID(activeConversation.messages);
            setUserID(id || "");
        }
    }, [activeConversation]);
    return (
        <section className="chat-section">
            <div className="chat-container">
                {/* start: Sidebar */}
                <ChatSidebar />
                {/* start: Content */}
                <div className="chat-content">
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
                            <div className="conversation-user">
                                <img
                                    className="conversation-user-image"
                                    src={activeConversation.image || 'default-image-url'}
                                    alt=""
                                />
                                <div>
                                    <div className="conversation-user-name">{activeConversation.name}</div>
                                    <div className={`conversation-user-status ${activeConversation.status}`}>
                                        {activeConversation.status}
                                    </div>
                                </div>
                            </div>
                            <div className="conversation-buttons">
                                <button type="button">
                                    <i className="ri-phone-fill" />
                                </button>
                                <button type="button">
                                    <i className="ri-vidicon-line" />
                                </button>
                                <button type="button">
                                    <i className="ri-information-line" />
                                </button>
                            </div>
                        </div>

                        <div className="conversation-main">
                            <ul className="conversation-wrapper">
                                <div className="coversation-divider">
                                    <span>Today</span>
                                </div>
                                {activeConversation && activeConversation.messages && (
                                    <>
                                        {activeConversation.messages.length > 0 ? (
                                            <>
                                                {(() => {
                                                    const userID = getUserID(activeConversation.messages);
                                                })()}
                                                {activeConversation.messages.map((message, index) => (
                                                    <li key={index} className={`conversation-item ${message.fromID !== pageID ? "me" : ""}`}>
                                                        <div className="conversation-item-side">
                                                            <img
                                                                className="conversation-item-image"
                                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="conversation-item-content">
                                                            <div className="conversation-item-wrapper">
                                                                <div className="conversation-item-box">
                                                                    <div className="conversation-item-text">
                                                                        <p>{message.text}</p>
                                                                        <div className="conversation-item-time">
                                                                            {new Date(message.time).toLocaleDateString('en-GB')} |
                                                                            {new Date(message.time).toLocaleTimeString('en-US', {
                                                                                hour: '2-digit',
                                                                                minute: '2-digit',
                                                                                second: '2-digit',
                                                                                hour12: true,
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </>
                                        ) : (
                                            <div>No messages yet</div>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>
                        <div>
                            <div>
                                <div className='col-lg-12' style={{ padding: '8px 16px', backgroundColor: '#fff', }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className={styles.commenthelper}>
                                            {/* Emoji Icon */}
                                            {/* Emoji Icon */}
                                            <FaRegSmile className={styles.icon} title="Emojis" onClick={handleEmojiClick} />

                                            {/* File Attachment Icon */}
                                            <label htmlFor="file-upload">
                                                <FaPaperclip className={styles.icon} title="Attachment" />
                                            </label>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                style={{ display: "none" }}
                                                onChange={handleFileChange}
                                            />



                                            {/* Bookmark Icon */}
                                            <FaBookmark className={styles.icon} title="Bookmark" onClick={handleBookmark} />

                                            {/* Share Icon */}
                                            <FaShareAlt className={styles.icon} title="Share" onClick={handleShare} />

                                            {/* Delete Icon */}
                                            <FaTrashAlt className={styles.icon} title="Delete" onClick={handleDelete} />
                                        </div>

                                        <div>
                                            <FaEye className={styles.icon} onClick={handleShow} />
                                        </div>


                                        {/* Offcanvas Component with placement="end" to open from the right */}
                                        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
                                            <Offcanvas.Header closeButton>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className={styles.UserInfo}>
                                                                    <img
                                                                        src="/images/user.png"
                                                                        alt="User"
                                                                        className={styles.userAvatar}
                                                                    />
                                                                    <div className={styles.commentDetails}>
                                                                        <h6 className={styles.commentUser}>John Doe </h6>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="input-group mt-2">
                                                                        <span className="input-group-text">Conv ID</span>
                                                                        <input
                                                                            className="form-control"
                                                                            id="commentId"
                                                                            aria-label="With textarea"
                                                                            placeholder="Enter Conv ID"
                                                                        />
                                                                        <button
                                                                            onClick={handleCopyClick}
                                                                            className="btn btn-outline-secondary input-group-text"
                                                                            type="button"
                                                                            id="copyButton"
                                                                        >
                                                                            <FaClipboard title="Copy" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-toolbar mt-3" role="toolbar" aria-label="Toolbar with button groups" style={{ width: '100%' }}>
                                                                    <div className="btn-group" role="group" aria-label="Icon buttons" style={{ width: '100%', gap: '15px' }}>
                                                                        <button type="button" className="btn btn-outline-secondary" style={{ fontSize: '14px' }}>
                                                                            <FaComment className="mr-2" /> 0
                                                                        </button>
                                                                        <button type="button" className="btn btn-outline-secondary" style={{ fontSize: '14px' }}>
                                                                            <FaEnvelope className="mr-2" /> 0
                                                                        </button>
                                                                        <button type="button" className="btn btn-outline-secondary" style={{ fontSize: '14px' }}>
                                                                            <FaEdit className="mr-2" /> 0
                                                                        </button>
                                                                        <button type="button" className="btn btn-outline-secondary" style={{ fontSize: '14px' }}>
                                                                            <FaUserPlus className="mr-2" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <h6>Quick Response</h6>
                                                                <div className="btn-toolbar mt-3" role="toolbar" aria-label="Toolbar with button groups" style={{ width: '100%' }}>
                                                                    <div className="btn-group" role="group" aria-label="Icon buttons" style={{ width: '100%', gap: '15px' }}>
                                                                        <button type="button" className="btn btn-outline-secondary" style={{ fontSize: '14px' }}>
                                                                            Favourite
                                                                        </button>
                                                                        <button type="button" className="btn btn-outline-secondary" style={{ fontSize: '14px' }}>
                                                                            Admin
                                                                        </button>
                                                                        <button type="button" className="btn btn-outline-secondary" style={{ fontSize: '14px' }}>
                                                                            Mine
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-secondary"
                                                                            style={{ fontSize: '14px' }}
                                                                            onClick={addQuickResponse}
                                                                        >
                                                                            <FaPlus />
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3 position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search..."
                                                                        style={{ fontSize: '14px', borderRadius: '5px', paddingLeft: '30px' }}
                                                                    />
                                                                    <FaSearch
                                                                        className="position-absolute"
                                                                        style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', fontSize: '16px', color: '#888' }}
                                                                    />
                                                                </div>
                                                                <ul className="list-unstyled mt-3">
                                                                    {responses.map(messages => (
                                                                        <li key={messages.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                                                                            <div className="d-flex gap-2 align-items-center">
                                                                                <FaAlignLeft className="mr-2" style={{ fontSize: '18px' }} />
                                                                                <span style={{ cursor: 'pointer' }}
                                                                                    onClick={() => handleMessagesClick(messages.message)}
                                                                                >
                                                                                    {messages.short_message}
                                                                                </span>
                                                                            </div>
                                                                            <FaEdit
                                                                                style={{ fontSize: '18px', cursor: 'pointer' }}
                                                                                onClick={() => handleEditResponse(messages.message)}
                                                                            />
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </div>
                                    {file && <p>{file.name}</p>}
                                </div>

                                <div className="conversation-form">
                                    <input
                                        type="text"
                                        id="user-id"
                                        value={userID}
                                        readOnly
                                        hidden
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <div className="conversation-form-group">
                                        <textarea
                                            className="conversation-form-input"
                                            rows={1}
                                            placeholder="Type here..."
                                            value={Message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                        <button type="button" className="conversation-form-record">
                                            <i className="ri-mic-line" />
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-12' style={{ padding: '8px 16px', backgroundColor: '#fff', }}>
                                    <div className='selectField' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '10px', }}>
                                        <SelectField isMulti={true} options={dynamicOptionsOne} />
                                        <SelectField isMulti={false} options={dynamicOptionsTwo} />
                                        <button
                                            type="button"
                                            className="conversation-form-button conversation-form-submit"
                                            onClick={handleMessageSubmit}
                                        >
                                            <i className="ri-send-plane-2-line" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {showModal && (
                                <div className="modal show d-block" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                                    <div className="modal-dialog modal-lg modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">{modalContent}</h5>
                                                <button type="button" className="btn-close" onClick={closeModal}></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Here you can {modalContent.toLowerCase()}.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                                    Close
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Chat



