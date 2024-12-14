import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import SelectedComment from './components/SelectedComment';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

// Move all logic to a new child component that is within the Router context
const AppContent = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComment, setSelectedComment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchComments();
    navigate('/comments'); // Redirect to /comments when the app starts
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments', error);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim()) {
      const filteredComments = comments.filter((comment) =>
        comment.text.toLowerCase().includes(query.toLowerCase())
      );
      setComments(filteredComments);
    } else {
      fetchComments();
    }
  };

  const handleAddComment = async (newCommentText) => {
    if (newCommentText.trim()) {
      try {
        const response = await axios.post('http://localhost:3001/comments', { text: newCommentText });
        setComments([...comments, response.data]);
        setNewComment('');
      } catch (error) {
        console.error('Error adding comment', error);
      }
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));

      // Redirect to /comments if the deleted comment was selected
      if (selectedComment && selectedComment.id === id) {
        setSelectedComment(null);
        navigate('/comments');
      }
    } catch (error) {
      console.error(`Error deleting comment with ID: ${id}`, error);
    }
  };

  return (
    <div className="App p-5">
      <h1 className="text-2xl font-bold mb-4">Comment Feed</h1>

      <input
        type="text"
        placeholder="Search comments..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border rounded px-4 py-2 mb-4 w-full"
      />

      <CommentForm newComment={newComment} setNewComment={setNewComment} onAddComment={handleAddComment} />
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />

      <Routes>
        <Route path="/" element={<Navigate to="/comments" />} /> {/* Redirect from / to /comments */}
        <Route path="/comments" element={<div>Welcome to the Comment Feed! Select a comment to view more details.</div>} />
        <Route path="/comments/:id" element={comments.length > 0 ? <SelectedComment comments={comments} selectedComment={selectedComment} /> : <div>No Comments Available...</div>} />
      </Routes>
    </div>
  );
};

export default App;
