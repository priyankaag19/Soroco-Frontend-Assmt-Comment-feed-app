import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SelectedComment = ({ comments }) => {
    const { id } = useParams(); // Get comment ID from URL
    const [selectedComment, setSelectedComment] = useState(null);

    useEffect(() => {
        if (id && comments.length > 0) {
            const commentId = id.toString();
            const comment = comments.find(c => c.id.toString() === commentId);

            if (comment) {
                setSelectedComment(comment);
            } else {
                setSelectedComment(null); // Clear if comment doesn't exist
            }
        }
    }, [id, comments]);

    // Do not render anything if selectedComment is null
    if (!selectedComment) return null;

    return (
        <div className="p-4 bg-blue-200 rounded mt-4">
            <h2 className="font-bold text-lg">Selected Comment</h2>
            <p>{selectedComment.text}</p>
        </div>
    );
};

export default SelectedComment;
