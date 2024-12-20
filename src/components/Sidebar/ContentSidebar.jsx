"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ContentSidebar = ({ handleClick }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const pathname = usePathname();

    const conversationsAPIUrl =
        "https://graph.facebook.com/v15.0/431751180032336/conversations?access_token=EAATriRmScZB4BO2FMmlUM7yLfZCVfbBecmzFryaXe6IkkFb5QgCjchfUWXtudVCEmmEgkaBWoRJ6ZB98tWnOVfVUWmpxtYLCquLYYEFWasK1o3vpyBrqtx9QBOGCZCztM1ZBs4pZBO1WzafwB8VrGtjTAmv9hIjRF6pAB39CZBfjavrn6siZCjFl6JZBzGDfo22fMxk1fSEtMscvW8zfS";

    useEffect(() => {
        let intervalId;

        const fetchMessages = () => {
            setLoading(true);
            setError(null); 

            fetch(conversationsAPIUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch data.");
                    }
                    return response.json();
                })
                .then((data) => {
                    const formattedMessages = data.data.map((conversation) => ({
                        id: conversation.id,
                        name: conversation.id || "Unknown User",
                        image:
                            conversation.participants?.data[0]?.profile_pic ||
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                        time: new Date(conversation.updated_time).toLocaleTimeString(),
                        conversationId: conversation.id,
                    }));
                    setMessages(formattedMessages);
                })
                .catch((err) => setError(err.message))
                .finally(() => setLoading(false));
        };

        const totalPosts = "https://graph.facebook.com/v21.0/431751180032336/posts?access_token=EAATriRmScZB4BO2FMmlUM7yLfZCVfbBecmzFryaXe6IkkFb5QgCjchfUWXtudVCEmmEgkaBWoRJ6ZB98tWnOVfVUWmpxtYLCquLYYEFWasK1o3vpyBrqtx9QBOGCZCztM1ZBs4pZBO1WzafwB8VrGtjTAmv9hIjRF6pAB39CZBfjavrn6siZCjFl6JZBzGDfo22fMxk1fSEtMscvW8zfS";

        const fetchPosts = () => {
            setLoading(true);
            setError(null);
            fetch(totalPosts)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch data.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    const formattedPostMessages = data.data.map((post_comment) => ({
                        id: post_comment.id,
                        name: post_comment.id || "Unknown User",
                        image:
                            post_comment.participants?.data[0]?.profile_pic ||
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                        time: new Date(post_comment.created_time).toLocaleTimeString(),
                        post_commentId: post_comment.id,
                    }));
                    setMessages(formattedPostMessages);
                })
                .catch((error) => {
                    console.error(error);
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        

        if (pathname === "/chat") {
            fetchMessages();
            intervalId = setInterval(fetchMessages, 30000);
        }else if(pathname === "/post_comment") {
            fetchPosts();
        }else {
            setMessages([]);
        }

        return () => {
            clearInterval(intervalId); 
        };
    }, [pathname]);

    const getSidebarTitle = () => {
        switch (pathname) {
            case "/chat":
                return "Chats";
            case "/post_comment":
                return "Post Comments";
            case "/dashboard":
                return "Dashboard";
            default:
                return "Chats";
        }
    };

    return (
        <div className="content-sidebar">
            <div className="content-sidebar-title">{getSidebarTitle()}</div>

            {/* Search Form */}
            <form action="" className="content-sidebar-form">
                <input
                    type="search"
                    className="content-sidebar-input"
                    placeholder="Search..."
                />
                <button type="submit" className="content-sidebar-submit">
                    <i className="ri-search-line" />
                </button>
            </form>

            {/* Messages Section */}
            <div className="content-messages">
                <ul className="content-messages-list">
                    <li className="content-message-title">
                        <span>Recently</span>
                    </li>
                    {loading ? (
                        <li className="content-message-loader">
                            <p style={{ textAlign: 'center', }}>Loading...</p>
                        </li>
                    ) : (
                        messages.map((message) => (
                            <li key={message.id}>
                                <a
                                    onClick={(e) => handleClick(e, message)}
                                    href="#"
                                    data-conversation={message.conversationId}
                                >
                                    <img
                                        className="content-message-image"
                                        src={message.image}
                                        alt={message.name}
                                    />
                                    <span className="content-message-info">
                                        <span className="content-message-name">
                                            {message.name}
                                        </span>
                                        <span className="content-message-time">
                                            Time: {message.time}
                                        </span>
                                    </span>
                                </a>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ContentSidebar;
