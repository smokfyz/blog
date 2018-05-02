import React, { Component } from 'react';
import './Article.css'

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <h3>{this.props.article.title}</h3>
        <p>{this.props.article.content}</p>
      </div>
    );
  }
}

export default Article;
