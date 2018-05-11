import React, {Component} from 'react';
import './App.css';
import NYTimeList from './NYTimeList';

class App extends Component {
  render() {
    return (
      <div>
        <div id="fh5co-offcanvass">
      		<a href="#" className="fh5co-offcanvass-close js-fh5co-offcanvass-close">Menu <i className="icon-cross"></i> </a>
      		<h1 className="fh5co-logo"><a className="navbar-brand" href="index.html">Hydrogen</a></h1>
      		<ul>
      			<li className="active"><a href="index.html">Home</a></li>
      			<li><a href="about.html">About</a></li>
      			<li><a href="pricing.html">Pricing</a></li>
      			<li><a href="contact.html">Contact</a></li>
      		</ul>
      		<h3 className="fh5co-lead">Connect with us</h3>
      		<p className="fh5co-social-icons">
      			<a href="#"><i className="icon-twitter"></i></a>
      			<a href="#"><i className="icon-facebook"></i></a>
      			<a href="#"><i className="icon-instagram"></i></a>
      			<a href="#"><i className="icon-dribbble"></i></a>
      			<a href="#"><i className="icon-youtube"></i></a>
      		</p>
      	</div>

        <header id="fh5co-header" role="banner">
      		<div className="container">
      			<div className="row">
      				<div className="col-md-12">
      					<a href="#" className="fh5co-menu-btn js-fh5co-menu-btn">Menu <i className="icon-menu"></i></a>
      					<a className="navbar-brand" href="index.html">Hydrogen</a>
      				</div>
      			</div>
      		</div>
      	</header>

        <div id="fh5co-main">
      		<div className="container">
      			<div className="row">
              <div id="fh5co-board" data-columns>
              	<div className="item">
              		<div className="animate-box">
      	        		<a href="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?">
                    <img src="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" alt="Free HTML5 Bootstrap template"/></a>
              		</div>
              		<div className="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
              	</div>
                <div className="item">
              		<div className="animate-box">
      	        		<a href="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?">
                    <img src="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" alt="Free HTML5 Bootstrap template"/></a>
              		</div>
              		<div className="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipis321321icing elit. Explicabo, eos?</div>
              	</div>
                <div className="item">
              		<div className="animate-box">
      	        		<a href="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" className="image-popup fh5co-board-img">
                    <img src="https://static01.nyt.com/images/2017/11/06/world/06cook5-inyt/06cook5-inyt-articleLarge.jpg" alt="Free HTML5 Bootstrap template"/></a>
      	        		<div className="fh5co-desc">Veniam voluptatum voluptas tempora de321321bitis harum totam vitae hic quos.</div>
              		</div>
              	</div>
              </div>
            </div>
          </div>
        </div>

        <footer id="fh5co-footer">
      		<div className="container">
      			<div className="row row-padded">
      				<div className="col-md-12 text-center">
      					<p className="fh5co-social-icons">
      						<a href="#"><i className="icon-twitter"></i></a>
      						<a href="#"><i className="icon-facebook"></i></a>
      						<a href="#"><i className="icon-instagram"></i></a>
      						<a href="#"><i className="icon-dribbble"></i></a>
      						<a href="#"><i className="icon-youtube"></i></a>
      					</p>
      					<p><small>&copy; LNTAnh Web Developer. All Rights Reserved.</small></p>
      				</div>
      			</div>
      		</div>
      	</footer>
      </div>
    )
  }
}

export default App;
