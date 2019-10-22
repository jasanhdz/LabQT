import React from 'react';
import './styles/article.css';

function fetchArticles(item, index) {
  if (item.imagenLink !== null) {
    console.log("La imagen existe :)");
    return <ImgArticle key={index} {...item} />
  }
}

const Article = props => {
  return (
    <div className="Article__container">
      {
        props.data.map((item, index) => {
          return fetchArticles(item, index)  
        })
      }
    </div>
  );
};

export default Article;