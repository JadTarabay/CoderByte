import React, { useState } from "react";
import './style.css';

// Array of articles
const articles = [
  {
    id: 1,
    title: "React Basics",
    content: "React is a JavaScript library used for building user interfaces. It allows developers to build single-page applications with a component-based architecture. In React, everything is a component, and each component can maintain its own state. React also utilizes a virtual DOM, which helps in making updates to the user interface more efficient by reducing unnecessary re-rendering of the page."
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    content: "JavaScript is a versatile programming language that powers much of the web. It is used to create dynamic and interactive effects in webpages. JavaScript can be used for both front-end and back-end development. On the front-end, it manipulates the DOM (Document Object Model) and handles events such as clicks, form submissions, and user interactions. On the back-end, JavaScript can be used with Node.js to create server-side applications."
  },
  {
    id: 3,
    title: "Frontend Development",
    content: "Frontend development focuses on the client side of web development. It deals with the visual and interactive parts of a website or application that users see and interact with directly. Technologies involved in frontend development include HTML, CSS, and JavaScript. HTML is used for the structure of the webpage, CSS is used for styling and layout, and JavaScript is used for interactivity. Modern frontend development often involves frameworks like React, Angular, and Vue."
  },
  {
    id: 4,
    title: "Backend Development with Node.js",
    content: "Backend development focuses on the server side of applications. Node.js is a runtime environment for JavaScript that allows developers to write server-side code. It is built on Chrome's V8 JavaScript engine and is known for its fast execution. With Node.js, developers can create scalable network applications. Common tools used in Node.js include Express.js, which helps in routing and handling HTTP requests, and MongoDB, a NoSQL database."
  },
  {
    id: 5,
    title: "Introduction to Python Programming",
    content: "Python is a high-level programming language known for its simplicity and readability. It is widely used in web development, data science, artificial intelligence, automation, and more. Python is an interpreted language, meaning that code is executed line by line, making it great for rapid development and prototyping. Python has a large ecosystem of libraries and frameworks, such as Django for web development and Pandas for data analysis, making it a versatile language for various fields."
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    content: "Machine learning is a subset of artificial intelligence that involves training algorithms to identify patterns in data and make decisions without human intervention. There are several types of machine learning: supervised learning, unsupervised learning, and reinforcement learning. Supervised learning involves training a model with labeled data, while unsupervised learning deals with data that has no labels. Reinforcement learning is used for decision-making problems, where an agent learns by interacting with an environment and receiving feedback."
  },
  {
    id: 7,
    title: "Web Accessibility Principles",
    content: "Web accessibility is the practice of making websites usable by people with various disabilities. It includes designing websites that are compatible with screen readers, providing alternative text for images, ensuring proper color contrast, and making content navigable by keyboard. Web accessibility is important because it allows individuals with disabilities to have equal access to information and functionality on the web. Many countries have laws and regulations requiring websites to meet certain accessibility standards."
  },
  {
    id: 8,
    title: "Cybersecurity in the Modern World",
    content: "Cybersecurity is the practice of protecting computer systems and networks from digital attacks. With the increasing reliance on the internet and technology, cybersecurity has become a critical field. Attacks such as hacking, phishing, and malware have become more sophisticated and frequent. To protect sensitive data, organizations use a combination of encryption, firewalls, intrusion detection systems, and secure authentication methods. Cybersecurity professionals also work to ensure that software vulnerabilities are patched and systems are regularly updated."
  },
  {
    id: 9,
    title: "Cloud Computing and Its Impact",
    content: "Cloud computing refers to the delivery of computing services such as storage, processing power, and networking over the internet. Cloud services are provided by companies like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud. The main benefits of cloud computing include flexibility, cost-effectiveness, and scalability. Companies can store vast amounts of data on the cloud and scale their resources as needed. Cloud computing has revolutionized industries by enabling businesses to access powerful computing resources without having to invest in costly infrastructure."
  },
  {
    id: 10,
    title: "The Importance of Digital Marketing",
    content: "Digital marketing is the use of the internet and digital technologies to promote products and services. It includes tactics such as search engine optimization (SEO), social media marketing, email marketing, and content marketing. Digital marketing allows businesses to reach a wider audience at a lower cost compared to traditional marketing methods. It also provides measurable results, allowing companies to track the success of their campaigns and adjust strategies in real-time. As consumers increasingly turn to the internet for purchasing decisions, digital marketing is becoming an essential component of business strategy."
  }
];

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  // Handles change in the search box
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to highlight the matching text
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>{part}</span>
      ) : part
    );
  };

  // Filter articles based on the search term
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
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id}>
              <h2>{highlightText(article.title, searchTerm)}</h2>
              <p>{highlightText(article.content, searchTerm)}</p>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchBox;