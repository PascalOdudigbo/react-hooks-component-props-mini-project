import React from "react";
import Article from "./Article";
import blogData from "../data/blog";


function ArticleList() {
    let articles = blogData.posts.map(article => <Article key={article.id} articleTitle={article.title} articleDate={article.date} articlePreview={article.preview}/>)
    return (
        <main>
            {articles}
        </main>
    );
    
}

export default ArticleList;