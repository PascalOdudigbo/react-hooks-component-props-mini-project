import React from "react";

function Article({articleTitle, articleDate = "January 1, 1970", articlePreview}) {
    return (
        <article>
            <h3>{articleTitle}</h3>
            <small>{articleDate}</small>
            <p>{articlePreview}</p>
        </article>
    );
}

export default Article;