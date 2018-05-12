import React, { Component } from 'react';
import './App.css';

class NYTimeItem extends Component {
  render() {
    const {item, id} = this.props;
    console.log('item', item.multimedia.length);
    let url_image = "images/no_pic_image.png"
    if (item.multimedia.length > 0) {
      url_image = `https://static01.nyt.com/${item.multimedia[0].url}`
    }
    return (
      <div className="item">
        <div className="animate-box">
	        <a href={`${url_image}`} className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?">
            <img src={`${url_image}`} alt=""/>
          </a>
        </div>
        <div className="fh5co-desc">
          <h3>{item.snippet}</h3>
          <h4 className="text-right"><em>{item.pub_date}</em></h4>
          <h4 className="text-right"><em>{item.source}</em></h4>
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
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    const FETCH_URL = `${BASE_URL}api-key=8acc38aab8b240869e39017bc4cda88e&q=singapore&page=0`;
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL)
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
      this.setState({species: json.response.docs, loading: true, fetched: true});
      console.log('this.state', this.state);
    });
  }

  render() {
    const {fetched, loading, species} = this.state;
    let content;
    if (fetched) {
      content = <div id="fh5co-board" data-columns>{species.map((item, index) =>< NYTimeItem key = {
          item._id
        }
        id = {
          index + 1
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
    			<div className="row">
            {content}
          </div>
        </div>
      </div>
    )
  }

}

export default NYTimeList;
