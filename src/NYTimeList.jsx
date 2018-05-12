import React, { Component } from 'react';
import './App.css';
import { Image } from 'react-bootstrap';

class NYTimeItem extends Component {
  render() {
    const {item} = this.props;
    let url_image = "images/no_pic_image.png"
    if (item.multimedia.length > 0) {
      url_image = `https://static01.nyt.com/${item.multimedia[0].url}`
    }
    return (
      <div className="item col-xs-6 col-md-3">
        <div className="animate-box">
	        <a href={`${url_image}`} className="image-popup fh5co-board-img" title={`${item.snippet} - ${item.source} - ${item.pub_date} `}>
            <Image src={`${url_image}`} responsive />;
            <div className="fh5co-desc">
              <h4>{item.snippet}</h4>
              <div className="text-right"><em>{item.pub_date}</em></div>
              <div className="text-right"><em>{item.source}</em></div>
            </div>
          </a>
        </div>

      </div>
    )
  }
}

class NYTimeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      species: [],
      fetched: false,
      loading: false
    };
  }

  componentWillMount() {
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    const FETCH_URL = `${BASE_URL}api-key=8acc38aab8b240869e39017bc4cda88e&q=singapore&page=0`;
    fetch(FETCH_URL)
    .then(response => response.json())
    .then(json => {
      this.setState({species: json.response.docs, loading: true, fetched: true});
    });
  }

  render() {
    const {fetched, loading, species} = this.state;
    let content;
    if (fetched) {
      content = <div id="fh5co-board" className="row" data-columns>{species.map((item) =>< NYTimeItem key = {
          item._id
        }
        item = {
          item
        } />)}</div>;
    } else if (loading && !fetched) {
      content = <p>Loading ...</p>;
    }
    return(
      <div id="fh5co-main">
    		<div className="container">
    			{content}
        </div>
      </div>
    )
  }

}

export default NYTimeList;
