import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

import Myself from "../../assets/Myself.png";
import emailIcon from "../../assets/email.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";

import html from "../../assets/html.png";
import python from "../../assets/python.png";
import cplus from "../../assets/c++.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import boostrap from "../../assets/bootstrap.png";
import vue from "../../assets/vue.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import Nelson from "../../assets/n.png";
import Csharp from "../../assets/csharp.png";
import Myself2 from "../../assets/transcon2.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isHover, setIsHover] = useState(false);

  const handleImageHover = () => {
    setIsHover(true);
  };
  const handleImageUnhover = () => {
    setIsHover(false);
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleEmailClick = () => {
    const email = "nelson.castro.work@gmail.com";
    const subject = "Interview Request";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  return (
    <>
      <div className="bg-black w-full h-screen">
        <img
          src={Nelson}
          alt="Nelson"
          className="w-14 h-14 overflow-hidden fixed sm:top-2 sm:left-2 sm:m-2 cursor-pointer text-white px-2 py-2 rounded font-semibold z-50"
          onClick={handleHomeClick}
        />

        <h1 className="info-section text-xs  overflow-hidden fixed bottom-1 right-1 sm:m-2 px-2 py-2 rounded z-50">
          nelson.castro.work@gmail.com
        </h1>

        <div
          className="flex sm:flex-row items-center justify-center sm:h-3/5 "
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageUnhover}
        >
          {/* --------------------------------------------HOME */}
          <br></br>

          {/* <img
              src={Myself}
              alt="Myself"
              className="w-40 h-auto relative sm:w-1/4 sm:h-auto sm:mr-10"
            /> */}

          {isHover ? (
            <img
              src={Myself2}
              alt="Myself"
              className="w-40 h-auto relative sm:w-1/4 sm:h-auto sm:mr-10"
            />
          ) : (
            <img
              src={Myself}
              alt="Myself"
              className="w-40 h-auto relative sm:w-1/4 sm:h-auto sm:mr-10"
            />
          )}

          <div className="sm:mt-10 m-5">
            <h1 className=" name text-white sm:text-4xl">
              Hi, I'm Nelson Castro
            </h1>
            <h2 className="text-white font-bold text-xl sm:text-2xl">
              <Typewriter
                options={{
                  strings: [
                    "Front-end Developer",
                    "Computer Engineer",
                    "Android App Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 5000,
                }}
              />
            </h2>
            <h4 className="desc about-section text-sm sm:text-base text-justify mt-2 sm:w-96 ">
              <Typewriter
                options={{
                  strings: [
                    "Experienced Front-end Developer and a fresh graduate of Computer Engineering. Passionate about creating innovative and impactful software solutions.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  pauseFor: 100000,
                  deleteSpeed: 1,
                }}
              />
            </h4>
            <br></br>

            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center justify-center  sm:w-52 relative">
                <h1 className="relative animate-character2 text-white font-bold sm:text-lg sm:m-3">
                  Contact Me
                </h1>
                <Fade duration={8000}>
                  <div className="name flex items-center justify-around">
                    <button onClick={handleEmailClick}>
                      <img
                        src={emailIcon}
                        alt="emailIcon"
                        className="w-auto h-auto relative m-1"
                      />
                    </button>
                    <a
                      href="https://www.linkedin.com/in/nlsncstr18"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedinIcon}
                        alt="linkedinIcon"
                        className="name w-auto h-auto relative m-1 "
                      />
                    </a>

                    <a
                      href="https://github.com/nlsncstr18"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={githubIcon}
                        alt="githubIcon"
                        className="name w-auto h-auto relative m-1 "
                      />
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:h-1/2  w-auto justify-center ">
          <Fade duration={7000}>
            <div className="info-section border-t sm:w-1/2 sm:flex justify-around relative ">
              <div className="flex justify-start flex-col sm:text-sm gap-2">
                <h1 className=" items-center flex justify-center hover:border-white hover:text-white sm:text-lg mt-5 border border-gray-400 border-t-0 border-l-0 border-r-0">
                  Tech Stacks
                </h1>
                <div className="flex flex-row gap-2 about-section font-semibold justify-center">
                  <div className="border-trans p-2 gap-1 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={cplus}
                      alt="c++Icon"
                      className=" relative sm:w-1/4 sm:h-auto "
                    />
                    <span>C++</span>
                  </div>
                  <div className="border-trans p-2 gap-1 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={python}
                      alt="pythonIcon"
                      className=" relative sm:w-1/4 sm:h-auto "
                    />
                    <span>Python</span>
                  </div>
                  <div className="border-trans p-2  gap-1 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={html}
                      alt="htmlIcon"
                      className=" relative sm:w-1/4 sm:h-auto "
                    />
                    <span>html</span>
                  </div>
                </div>
                <div className="flex flex-row gap-2 about-section font-semibold justify-center">
                  <div className="border-trans gap-1 p-2 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={css}
                      alt="cssIcon"
                      className=" relative sm:w-1/4 sm:h-auto "
                    />
                    <span>CSS</span>
                  </div>
                  <div className="border-trans gap-1 p-2 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={tailwind}
                      alt="tailwindIcon"
                      className=" relative sm:w-1/4 sm:h-auto "
                    />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="border-trans gap-1 p-2 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={boostrap}
                      alt="boostrapIcon"
                      className=" relative sm:w-5 sm:h-auto "
                    />
                    <span>Bootstrap CSS</span>
                  </div>
                </div>
                <div className="flex flex-row gap-2 about-section font-semibold justify-center">
                  <div className="border-trans gap-1 p-2 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={vue}
                      alt="vueIcon"
                      className=" relative sm:w-5 sm:h-auto "
                    />
                    <span>Vue</span>
                  </div>
                  <div className="border-trans gap-1 p-2 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={react}
                      alt="reactIcon"
                      className=" relative sm:w-5 sm:h-auto "
                    />
                    <span>React</span>
                  </div>
                  <div className="border-trans gap-1 p-2 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={git}
                      alt="gitIcon"
                      className=" relative sm:w-5 sm:h-auto "
                    />
                    <span>GIT</span>
                  </div>
                  <div className="border-trans gap-1 p-2 flex justify-center items-center hover:border-gray-500 hover:text-white">
                    <img
                      src={Csharp}
                      alt="CsharpIcon"
                      className=" relative sm:w-5 sm:h-auto "
                    />
                    <span>C-sharp</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start flex-col sm:text-sm gap-2">
                <h1 className=" items-center flex justify-center hover:border-white hover:text-white sm:text-lg mt-5 border border-gray-400 border-t-0 border-l-0 border-r-0">
                  Project/s
                </h1>
                <div className="flex sm:flex-row gap-2 about-section font-semibold justify-center">
                  <Link
                    to="https://nlsncstr18.github.io/TransConnect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-trans p-2 flex justify-center hover:border-gray-500 hover:text-white"
                  >
                    TransConnect
                  </Link>
                  <div className="border-trans p-2 flex justify-center hover:border-gray-500 hover:text-white">
                    NotiGrade
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default App;
