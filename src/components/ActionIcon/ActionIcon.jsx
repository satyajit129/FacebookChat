import React, { useState } from 'react';
import { Image, Offcanvas } from 'react-bootstrap';
import { FaAlignLeft, FaBookmark, FaClipboard, FaComment, FaEdit, FaEnvelope, FaEye, FaGripVertical, FaPaperclip, FaPlus, FaRegSmile, FaSearch, FaShareAlt, FaTrashAlt, FaUserPlus } from 'react-icons/fa';
import styles from '@/styles/Comment.module.css';

const ActionIcon = ({ setMessage }) => {
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
    
    return (
        <>
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
                                                
                                            >
                                                {messages.short_message}
                                            </span>

                                        </div>
                                        <FaGripVertical
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
        </>
    );
};

export default ActionIcon;
