import { useState, useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Modal from 'react-modal';
import { useEffect } from 'react';
import projectComponents from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement('#__next');

// Local Data
import data from "../data/portfolio.json";

const closeButtonStyle = {
  position: 'absolute',
  color: 'white',
  top: '20px',
  right: '20px',
  background: 'none',
  border: 'none',
  fontSize: '3rem',
  cursor: 'pointer',
};

function WorkCardWithModal({ project, current, onShowNext, onShowPrev, setCurrentProjectIndex, index }) {
  const [modalIsOpen, setModalIsOpen] = useState(current);
  const ProjectComponent = projectComponents[project.url];

  // Open the modal when the project becomes the current project
  useEffect(() => {
    setModalIsOpen(current);
  }, [current]);

  return (
    <div key={project.id}>
      <WorkCard
        img={project.imageSrc}
        name={project.title}
        description={project.description}
        onClick={() => {
          setModalIsOpen(true);
          setCurrentProjectIndex(index);
        }}
      />

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Project Details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            color: 'white',  // this changes the text color inside the modal to black
            background: 'black',  // changes the background color of the content
            // maxWidth: '500px',  // sets a maximum width
            margin: '36px',  // centers the modal on the page
            padding: '36px',  // adds some padding
            borderRadius: '4px',  // gives the modal rounded corners
          },
        }}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={() => setModalIsOpen(false)} style={closeButtonStyle}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <ProjectComponent project={project} />

        <button className="prevButton" onClick={onShowPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="nextButton" onClick={onShowNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <style jsx>{`
          .prevButton, .nextButton {
            position: fixed;
            top: 50%;  // Center vertically
            transform: translateY(-50%);  // Ensure the center of the button is the point that gets centered
            font-size: 3rem;
          }
          .prevButton {
            left: 20px;
          }
          .nextButton {
            right: 20px;
          }
        `}</style>
      </Modal>



      {/* <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Project Details"
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal> */}
    </div>
  );
}

function VideoSection() {
  return (
    <div className="videoSection" style={{ paddingTop: '50px' }}>
      <div className="videoWrapper">
        <iframe 
          width="100%" 
          height="315"
          src="https://www.youtube.com/embed/1mjEmOuLd-A" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="YouTube video 1"
        ></iframe>
      </div>
      {/* <div className="videoWrapper">
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/IspOxcpNzNs" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="YouTube video 2"
        ></iframe>
      </div> */}
      <style jsx>{`
        .videoSection {
          display: flex; 
          flexDirection: row; 
          alignItems: center;
          justify-content: center;  // Add this line
          gap: 20px;
        }
        .videoWrapper {
          width: 45%;
        }
        @media (max-width: 768px) {
          .videoSection {
            flex-direction: column;
          }
          .videoWrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);

  const showNextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % data.projects.length);
  };
  
  const showPrevProject = () => {
    setCurrentProjectIndex((currentProjectIndex - 1 + data.projects.length) % data.projects.length);
  };
  
  return (
    <div>
      {data.showCursor}
      <Head>
        <title>{data.name}</title>
      </Head>

      {/* <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div> */}

      <div className="container mx-auto mb-10">
        <div className="homeHeader">
          <Header
            handleWorkScroll={handleWorkScroll}
            handleAboutScroll={handleAboutScroll}
          />
        </div>

        <div className="home">
          <div className="flex justify-center">
            <h1
              ref={textOne}
              className="text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
          </div>

          <div className="flex justify-center">
            <h1
              ref={textOne}
              className="text-center text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
          </div>

          {/* <div className="laptop:mt-20 mt-10">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            </div>

            <Socials className="mt-2 laptop:mt-5" />
          </div> */}

          <VideoSection />
        </div>
      </div>
    </div>
  );
}
