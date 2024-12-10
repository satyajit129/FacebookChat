"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Comment.module.css';
import { FaAlignLeft, FaAlignRight, FaBars, FaBookmark, FaCheck, FaClipboard, FaComment, FaEdit, FaEnvelope, FaFacebook, FaGripVertical, FaPlus, FaRegSmile, FaSearch, FaShareAlt, FaTrashAlt, FaUser, FaUserPlus } from 'react-icons/fa';
import SelectField from '../../components/Select/Select';
import ActionIcon from '@/components/ActionIcon/ActionIcon';

const responses = [
    { id: 2, name: "Name 2", value: "lorem ipsum delor shit amnet. 1" },
    { id: 1, name: "Name 1", value: "lorem ipsum delor shit amnet. 2" },
    { id: 3, name: "Name 3", value: "lorem ipsum delor shit amnet. 3" },
    { id: 4, name: "Name 4", value: "lorem ipsum delor shit amnet. 4" },
    { id: 5, name: "Name 5", value: "lorem ipsum delor shit amnet. 5" },
    { id: 6, name: "Name 6", value: "lorem ipsum delor shit amnet. 6" }
];

const Comment = () => {

    const dynamicOptionsOne = [
        { value: 'general_query', label: 'General Query' },
    ];
    const dynamicOptionsTwo = [
        { value: 'positive', label: 'Positive' },
        { value: 'neutral', label: 'Neutral' },
        { value: 'negative', label: 'Negative' },
    ];
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [pastedText, setPastedText] = useState('');
    const [showMessageTextarea, setShowMessageTextarea] = useState(false);

    const handlePlusClick = () => {
        setModalContent('Add New Item');
        setShowModal(true);
    };

    const handleEditClick = (user) => {
        setModalContent(`Edit ${user.name}`);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent('');
    };
    const handleUserClick = (userName) => {
        setSelectedUser(userName);
    };
    const handleEnvelopeClick = () => {
        setShowInput((prev) => !prev);
      };
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

    useEffect(() => {
        window.addEventListener('keydown', handlePaste);

        return () => {
            window.removeEventListener('keydown', handlePaste);
        };
    }, []);
    return (
        <div className={styles.commentBody}>
            <div className='row'>
                <div className='col-lg-9'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <div className='card'>
                                <div className='card-body' style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px', alignItems: 'center', }}>
                                    <FaFacebook size={40} color="#3b5998" />
                                    <h4>EduTune</h4>
                                </div>
                                <div className={`card-body ${styles.postDetails}`}>
                                    <p>
                                        জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে।মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে। জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে।মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className='card'>
                                <div className='card-body'>
                                    <div className={styles.commentList}>
                                        <img
                                            src="/images/user.png"
                                            alt="User"
                                            className={styles.userAvatar}
                                        />
                                        <div className={styles.commentDetails}>
                                            <h6 className={styles.commentUser}>John Doe</h6>
                                            <span className={styles.commentText}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium finibus tincidunt.
                                            </span>
                                            <span className={styles.commentTime}>Tue Nov 28, 2024 11:00:11 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <ActionIcon onEnvelopeClick={handleEnvelopeClick} />

                        <div className='col-lg-12'>
                            <textarea
                                placeholder="Write Your Reply Here...."
                                className="form-control"
                                style={{ height: '125px' }}
                                value={selectedUser}
                                onChange={(e) => setSelectedUser(e.target.value)}
                            ></textarea>
                        </div>
                        {/* Conditionally render the input field */}

                        {showMessageTextarea && (
                            <div className='col-lg-12'>
                                <textarea
                                    type="text"
                                    style={{ height: '125px' }}
                                    placeholder="Type your message..."
                                    className="form-control mt-2">
                                </textarea>
                            </div>
                        )}

                        <div className='col-lg-12 mt-3'>
                            <div className='selectField' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '10px' }}>
                                <SelectField isMulti={true} options={dynamicOptionsOne} />
                                <SelectField isMulti={false} options={dynamicOptionsTwo} />
                                <button className='btn btn-outline-primary' style={{ padding: '6px 30px' }}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className={styles.UserInfo}>
                                <img
                                    src="/images/user.png"
                                    alt="User"
                                    className={styles.userAvatar}
                                />
                                <div className={styles.commentDetails}>
                                    <h6 className={styles.commentUser}>John Doe</h6>
                                </div>
                            </div>
                            <div>
                                {/* Input Group */}
                                <div className="input-group mt-2">
                                    <span className="input-group-text">Comment ID</span>
                                    <input
                                        className="form-control"
                                        id="commentId"
                                        aria-label="With textarea"
                                        placeholder="Enter Comment ID"
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
                    </div>

                    <div className="card mt-3">
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

                            {/* Search Box */}
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

                            {/* User List */}
                            <ul className="list-unstyled mt-3">
                                {responses.map(user => (
                                    <li key={user.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                                        <div className="d-flex gap-2 align-items-center">
                                            <FaAlignLeft className="mr-2" style={{ fontSize: '18px' }} />
                                            <span style={{ cursor: 'pointer' }} onClick={() => handleUserClick(user.value)}>{user.name}</span>
                                        </div>
                                        <FaGripVertical
                                            style={{ fontSize: '18px', cursor: 'pointer' }}
                                            onClick={() => handleEditClick(user)}
                                        />
                                    </li>
                                ))}
                            </ul>
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
    )
}

export default Comment