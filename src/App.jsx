import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{
    setReadingTime(readingTime+time);
  }
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
