import React, { useState } from 'react';

const CommentForm = ({ newComment, setNewComment, onAddComment }) => {
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (newComment.trim() === '') {
            setError('Please add your text message'); // Set error if input is empty
        } else {
            setError(''); // Clear error on successful submission
            onAddComment(newComment);
            setNewComment(''); // Clear the input field after adding
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex">
                <input
                    type="text"
                    placeholder="Add a new comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="border rounded px-4 py-2 flex-grow mr-2"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Comment
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
        </div>
    );
};

export default CommentForm;
