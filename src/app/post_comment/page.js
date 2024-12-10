"use client"
import React, { useState } from 'react'
import "../globals.css";
import { Image, Offcanvas } from 'react-bootstrap';
import MessageItem from "@/components/Message/MessagesList";
import ChatSidebar from "@/components/Sidebar/ChatSidebar";
import SelectField from '@/components/Select/Select';
import ActionIcon from '@/components/ActionIcon/ActionIcon';
import { Button } from 'bootstrap';
import { FaAlignLeft, FaBookmark, FaClipboard, FaComment, FaEdit, FaEnvelope, FaEye, FaGripVertical, FaPaperclip, FaPlus, FaRegSmile, FaSearch, FaShareAlt, FaTrashAlt, FaUserPlus } from 'react-icons/fa';

import styles from '@/styles/Comment.module.css';
import ContentSidebar from '@/components/Sidebar/ContentSidebar';

const Comment = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleShow = () => setShowOffcanvas(true);
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

    const handlePlusClick = () => {
        setModalContent('Add New Item');
        setShowModal(true);
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
    const [Message, setMessage] = useState('');
    const handleMessagesClick = (message) => {
        setMessage(message);
    }

    const handleBack = () => {
        setIsActive(false);
    };


    // Dynamically set the title based on the route

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
                                    <span>Today </span>
                                </div>
                                <li className="conversation-item me">
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
                                                    <p>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing
                                                        elit. Amet natus repudiandae quisquam sequi nobis
                                                        suscipit consequatur rerum alias odio repellat!
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-item-wrapper">
                                            <div className="conversation-item-box">
                                                <div className="conversation-item-text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Eaque, tenetur!
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="conversation-item">
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
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing
                                                        elit.
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-item-wrapper">
                                            <div className="conversation-item-box">
                                                <div className="conversation-item-text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Atque eos ab in?
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-item-wrapper">
                                            <div className="conversation-item-box">
                                                <div className="conversation-item-text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sint, debitis. Iste natus est aliquam ipsum doloremque
                                                        fugiat, quidem eos autem? Dolor quisquam laboriosam enim
                                                        cum laborum suscipit perferendis adipisci praesentium.
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="conversation-item me">
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
                                                    <p>
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing
                                                        elit. Quas, eos, magni temporibus, placeat consectetur
                                                        nobis incidunt dicta a culpa vel esse. Facilis fugiat
                                                        possimus eveniet accusamus dignissimos pariatur
                                                        inventore animi rem vero, eligendi obcaecati fugit
                                                        quaerat? Officia ex quod eaque maxime ipsam, tempore
                                                        error laboriosam laborum, magnam ipsum doloremque quas.
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-item-wrapper">
                                            <div className="conversation-item-box">
                                                <div className="conversation-item-text">
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing
                                                        elit. Temporibus debitis odio maiores perferendis ipsa
                                                        repudiandae amet blanditiis quod. Ullam, dolorum.
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conversation-item-wrapper">
                                            <div className="conversation-item-box">
                                                <div className="conversation-item-text">
                                                    <p>
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing
                                                        elit. Accusantium blanditiis ea, voluptatum, eveniet at
                                                        harum minima maxime enim aut non, iure expedita
                                                        excepturi tempore nostrum quasi natus voluptas dolore
                                                        ducimus!
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='col-lg-12' style={{ padding: '8px 16px', backgroundColor: '#fff', }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className={styles.commenthelper}>
                                        <FaRegSmile className={styles.icon} title="Emojis" />
                                        <FaPaperclip className={styles.icon} title="Attachment" />
                                        <FaBookmark className={styles.icon} title="Bookmark" />
                                        <FaShareAlt className={styles.icon} title="Share" />
                                        <FaTrashAlt className={styles.icon} title="Delete" />
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
                                                                        onClick={handlePlusClick}
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
                                                                        <FaAlignLeft
                                                                            style={{ fontSize: '18px', cursor: 'pointer' }}
                                                                            onClick={() => handleEditClick(messages)}
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

                            </div>

                            <div className="conversation-form">
                                <div className="conversation-form-group">
                                    <textarea
                                        className="conversation-form-input"
                                        rows={1}
                                        placeholder="Type here..."
                                        value={Message} // Bind textarea value to Message state
                                        onChange={(e) => setMessage(e.target.value)} // Handle changes to the textarea
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
                                    >
                                        <i className="ri-send-plane-2-line" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Comment