import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommentList = ({ comments, onDeleteComment }) => {
    const navigate = useNavigate();

    const fetchSingleComment = (id) => {
        navigate(`/comments/${id}`); // Navigate to the selected comment page
    };

    return (
        <ul className="space-y-4 mb-4 mt-8">
            {comments.map((comment) => (
                <li
                    key={comment.id}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded cursor-pointer"
                    onClick={() => fetchSingleComment(comment.id)}
                >
                    <span>{comment.text}</span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent parent click handler
                            onDeleteComment(comment.id);
                        }}
                        className="text-red-500 hover:text-red-700 font-semibold"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CommentList;
