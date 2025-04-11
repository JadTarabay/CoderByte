import React, { useState } from "react";

// Array of articles
const articles = [
  { id: 1, title: "React Basics", content: "Learn about React components and hooks." },
  { id: 2, title: "JavaScript Fundamentals", content: "Learn how to manipulate the DOM and handle events." },
  { id: 3, title: "Frontend Development", content: "Discover how HTML, CSS, and JavaScript work together." },
];

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp((`${searchTerm}`), "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? <span key={index} style={{ backgroundColor: "yellow" }}>{part}</span> : part
    );
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search articles..."
      />
      <div>
        {filteredArticles.map((article) => (
          <div key={article.id}>
            <h2>{highlightText(article.title, searchTerm)}</h2>
            <p>{highlightText(article.content, searchTerm)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;