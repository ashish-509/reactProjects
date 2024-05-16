import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
    };
  }

  async componentDidMount() {
    // const url = "https://newsapi.org/..."; // Your API URL here
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ article: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Taja News - Top Khabar</h2>
        <div className="row">
          {this.state.article.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 25)}
                description={element.description.slice(0, 50)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
