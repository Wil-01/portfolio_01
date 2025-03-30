import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../ProjectCarousel.css';

// Import des médias
import twitterpng from "../../Assets/Projects/twitter.png";
import cinemapng from "../../Assets/Projects/log.png";
import meeticpng from "../../Assets/Projects/meetic.png";
import eventpng from "../../Assets/Projects/event.png";
import robipng from "../../Assets/Projects/rob.png";
import puiss from "../../Assets/Projects/puissance4.png";
import twittervideo from "../../Assets/Projects/twe.webm";
import meeticvideo from "../../Assets/Projects/meet.webm";
import eventvideo from "../../Assets/Projects/event.webm";
import robivideo from "../../Assets/Projects/robi.webm";
import puissvideo from "../../Assets/Projects/tw.mp4";
import cinevideo from "../../Assets/Projects/cine_compressed.webm";


const ProjectCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "EVENT - APPLICATION EVENEMENTIEL",
      subtitle: "PYTHON • POSTGRESQL • TAILWIND-CSS",
      description: "Application d''évènementiel intuitif et dynamique avec fonctonnalités de payement en ligne et bien plus",
      image: eventpng,
      video: eventvideo,
      demoLink: "#"
    },
    {
      title: "MEETIC - SITE DE RENCONTRE",
      subtitle: "PHP • MYSQL • CSS",
      description: "Éditeur supportant HTML, CSS, JS avec prévisualisation instantanée",
      image: meeticpng,
      video: meeticvideo,
      demoLink: "#"
    },
    {
      title: "Twitter - PLATEFORME DE TWEET",
      subtitle: "PHP • MYSQL • TAILWIND-CSS",
      description: "Tweet en temps réel avec partage de fichiers et réactions",
      image: twitterpng,
      video: twittervideo,
      demoLink: "#"
    },
    {
      title: "JEU PUISSANCE 4",
      subtitle: "HTML • CSS • JAVA SCRIPT",
      description: "Blog personnel avec mode sombre et gestion de contenu",
      image: puiss,
      video: puissvideo,
      demoLink: "#"
    },
    {
      title: "PORTFOLIO ROBBIE LENS",
      subtitle: "HTML • CSS",
      description: "Portfolio d'une photographe avec un desigh épuré et dynamique",
      image: robipng,
      video: robivideo,
      demoLink: "#"
    },
    {
      title: "My Cinema",
      subtitle: "PHP • CSS • API",
      description: "Site de référencement de films de streaming comme netflix",
      image: cinemapng,
      video: cinevideo, 
      demoLink: "#"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  return (
    <div className="torenizing-carousel">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="carousel-item">
            <div className="media-container">
              <div 
                className="image-wrapper"
                onMouseEnter={() => project.video && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                
                {hoveredIndex === index && project.video && (
                  <ReactPlayer
                    url={project.video}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="project-video"
                  />
                )}
              </div>
            </div>
            
            <div className="project-info">
              <h1 className="project-title purple">{project.title}</h1>
              <h3 className="project-subtitle">{project.subtitle}</h3>
              <p className="project-description">{project.description}</p>
              {project.demoLink && project.demoLink !== "#" && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="demo-button"
                >
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;