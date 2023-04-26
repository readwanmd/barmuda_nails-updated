import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carosel_control_icon.css';
// import image from "../img/maria-lupan-ZiZ4q21W9vc-unsplash.jpg";

export default function Home() {
	return (
		<div id="home">
			<Carousel fade interval={null} indicators={false}>
				<Carousel.Item>
					<div className="home">
						<div className="home-overlay"></div>
					</div>
					{/* <img className="carousel-image" src={image} alt="" /> */}
					<Carousel.Caption>
						<p className="carousel-headline" variant="h6">
							First slide label
						</p>
						<p className="carousel-subline">
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="home">
						<div className="home-overlay"></div>
					</div>
					<Carousel.Caption>
						<p className="carousel-headline" variant="h6">
							Second slide label
						</p>
						<p className="carousel-subline">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="home">
						<div className="home-overlay"></div>
					</div>
					<Carousel.Caption>
						<p className="carousel-headline" variant="h6">
							Third slide label
						</p>
						<p className="carousel-subline">
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
