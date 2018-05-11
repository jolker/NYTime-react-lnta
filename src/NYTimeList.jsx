import React, { Component } from 'react';
import './App.css';

class NYTimeList extends Component {

  render() {
    return(
      <div id="fh5co-main">
    		<div className="container">
    			<div className="row">
            <div id="fh5co-board" data-columns>
            	<div className="item">
            		<div className="animate-box">
    	        		<a href="images/img_1.jpg" className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?">
                  <img src="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" alt="Free HTML5 Bootstrap template"/></a>
            		</div>
            		<div className="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
            	</div>
              <div className="item">
            		<div className="animate-box">
    	        		<a href="images/img_1.jpg" className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?">
                  <img src="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" alt="Free HTML5 Bootstrap template"/></a>
            		</div>
            		<div className="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
            	</div>
              <div className="item">
            		<div className="animate-box">
    	        		<a href="images/img_2.jpg" className="image-popup fh5co-board-img">
                  <img src="images/img_2.jpg" alt="Free HTML5 Bootstrap template"/></a>
    	        		<div className="fh5co-desc">Veniam voluptatum voluptas tempora debitis harum totam vitae hic quos.</div>
            		</div>
            	</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NYTimeList;
