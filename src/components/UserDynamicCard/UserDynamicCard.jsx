import React from 'react'
import { FaBookmark, FaCheck, FaEnvelope, FaRegSmile, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import styles from "./UserDynamicCard.module.css";
const UserDynamicCard = () => {
    return (
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
    );
};

export default UserDynamicCard