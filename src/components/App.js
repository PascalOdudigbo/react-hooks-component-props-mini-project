import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData.name);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList/>
    </div>
  );
}

export default App;
