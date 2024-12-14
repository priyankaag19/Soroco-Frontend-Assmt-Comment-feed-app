## Comment Feed Application  

This is a React-based application for managing a comment feed. It supports the following features:  

- **Display**: Shows an ordered list of comments.  
- **Add Comments**: Add new comments to the list.  
- **Delete Comments**: Delete existing comments from the feed.  
- **Search Comments**: Search for comments with real-time API calls, ensuring all previous requests are canceled.  

Additionally, the application includes using [json-server](https://github.com/typicode/json-server) to mock a backend for this task.
---

## Requirements  

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/en/) installed.  
- **npm**: Comes with Node.js installation.  

---

## Setup Instructions  

### 1. Clone the Repository  
```bash  
git clone <repository-url>  
cd <repository-directory>  
```  

### 2. Install Dependencies  
Run the following command to install required packages:  
```bash  
npm install  
```  

### 3. Run the Application  

#### Start the Development Server  
```bash  
npm start  
```  

This will:  
- Start the React development server on [http://localhost:3000].  
- Automatically open the application in your default browser.  

#### Start the Mock Backend  
In a new terminal, run:  
```bash  
npx json-server db.json --port 3001  
```  

This will:  
- Start the backend server on [http://localhost:3001].  

---

## API Endpoints  

The backend provides the following API endpoints:  

### Get All Comments  
```http  
GET /api/comments  
```  

- **Response**:  
```json  
[  
    { "id": 1, "text": "This is a comment." },  
    { "id": 2, "text": "This is a second comment." }  
]  
```  

### Get Single Comment  
```http  
GET /api/comments/<id>  
```  

- **Response**:  
```json  
{ "id": 1, "text": "This is a comment." }  
```  

### Add a Comment  
```http  
POST /api/comments  
```  

- **Body**:  
```json  
{ "text": "New comment text" }  
```  
- **Response**:  
```json  
{ "id": 3, "text": "New comment text" }  
```  

### Delete a Comment  
```http  
DELETE /api/comments/<id>  
```  

- **Response**:  
```json  
{}  
```  

### Search Comments  
```http  
GET /api/comments?q=<query>  
```  

- **Response**:  
```json  
[  
    { "id": 3, "text": "searched comment" }  
]  
```  

---

## Application Features  

### 1. Add a Comment  
- Input a new comment in the form field and click the **Add Comment** button.  
- If the input is empty, an error message appears in red.  

### 2. Delete a Comment  
- Click the **Delete** button next to a comment to remove it.  

### 3. Search Comments  
- Type a query in the search box.  
- The application makes an API call to search for comments, ensuring previous requests are canceled for optimized performance.  

### 4. View Comment Details  
- Click on a comment to view more details.  

---

## File Structure  
 
src/  
├── components/  
│   ├── CommentForm.js          # Form to add new comments  
│   ├── CommentList.js          # Displays the list of comments  
│   └── SelectedComment.js      # Displays details of a selected comment  
├── App.js                      # Main application logic   
├── index.js                    # Entry point of the application  
```  

---

## Dependencies  

- **React**: UI library for building components.  
- **React Router DOM**: Routing for SPA navigation.  
- **Axios**: HTTP client for API calls.  
- **JSON Server**: Mock backend for local development.  

---

## Notes  

- Ensure that the mock backend is running on port `3001`.  
- The application redirects to `/comments` on load.  

  