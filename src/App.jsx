import React, {Component} from 'react';
import './App.css';
import NYTimeList from './NYTimeList';

class App extends Component {
  render() {
    return (
      <div>
        <div id="fh5co-offcanvass">
      		<a href="#" className="fh5co-offcanvass-close js-fh5co-offcanvass-close">Menu <i className="icon-cross"></i> </a>
      		<h1 className="fh5co-logo"><a className="navbar-brand" href="index.html">NYTIMES</a></h1>
      		<ul>
      			<li className="active"><a href="/">Home</a></li>
      			<li><a href="#">About</a></li>
      			<li><a href="#">Contact</a></li>
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
      					<a className="navbar-brand" href="/">Le Nguyen Tuan Anh</a>
      				</div>
      			</div>
      		</div>
      	</header>

        <NYTimeList/>

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
