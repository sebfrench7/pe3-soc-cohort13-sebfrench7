import Card from "./components/card";
import { getHeadlines } from "./api";
import { searchNews } from "./api";
import { useState, useEffect } from "react";
import "./App.css";

//please see readme for my workings and notes

function App() {
  // state for headlines
  const [data, setData] = useState([]);
  // state for search results
  const [searchData, setSearchData] = useState([]);

  // get headlines on page load
  useEffect(() => {
    getHeadlines().then((data) => {
      setData(data.articles);
    });
  }, []);

  console.log(data.map((article) => article.title));

  // search for news
  const search = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    searchNews(searchTerm).then((data) => {
      setSearchData(data.articles);
    });
  };

  return (
    <div className="App">
      <h1>Top News</h1>
      <div className="headline-container">
        {/* map through headlines and display them */}
        {data.map((article) => (
          <Card
            title={article.title}
            image={article.image}
            content={article.content}
            date={article.publishedAt}
            source={article.source.name}
            author={article.author}
            url={article.url}
          />
        ))}
      </div>
      <h1>Search For News</h1>
      <div className="search-container">
        <form onSubmit={search}>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-results-container">
        {searchData.map((article) => (
          <Card
            title={article.title}
            image={article.image}
            content={article.content}
            date={article.publishedAt}
            source={article.source.name}
            author={article.author}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
