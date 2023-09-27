import Navbar from "../components/navbar";
import "./HomePage.css";
import xIcon from "../assets/images/x.svg";
import facebookIcon from "../assets/images/facebook.svg";
import linkedIcon from "../assets/images/linkedin.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import vector1 from "../assets/images/Vector1.svg";
import vector2 from "../assets/images/Vector2.svg";

import vector8 from "../assets/images/vector8.svg";
import vector3 from "../assets/images/vector3.svg";
import vector5 from "../assets/images/vector5.svg";

import vector10 from "../assets/images/vector10.svg";
import vector13 from "../assets/images/vector13.svg";
import vector14 from "../assets/images/vector14.svg";
import vector15 from "../assets/images/vector15.svg";
import vector16 from "../assets/images/vector16.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import man from "../assets/images/man2.svg";
import ButtonComp from "../components/button";
import { Link } from "react-router-dom";
import PhoneNav from "../components/phoneNav";
function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [answers, setAnswers] = useState(Array(6).fill("default value"));
  const imageRef = useRef(null);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.5, rotation: 0 },
      { opacity: 1, scale: 1, duration: 1, rotation: 360, ease: "power2.out" }
    );
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  const fetchData = () => {
    axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => {
        console.log("API Data:", response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };
  const openAnswer = (e) => {
    e.target.className = "active";
  };
  const openNav = () => {
    setNavOpen(true);
  };
  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <div className="homepage">
      <PhoneNav navOpen={navOpen} closeNav={closeNav} />
      <div className="nav_wrapper">
        <Navbar page="home" openNav={openNav} />
      </div>
      <div className="border_line"></div>
      <main className="home_main">
        <section id="overview" className="first_section">
          <div className="first_top_text_div">
            <h2 className="first_top_text">
              Igniting a Revolution in HR Innovation
            </h2>
            <img className="text_underline" src={vector1} alt="vector1" />
          </div>
          <div className="main_contents">
            <div className="left_top_div">
              <div className="text_box_div">
                <img className="text_img" src={vector2} alt="vector2" />

                <p>
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
                </p>
                <Link to="/register">
                  <ButtonComp text="Register" />
                </Link>
                <p className="time_comp">
                  <span>{hours}</span>
                  <sub>H</sub>
                  <span>{minutes}</span>
                  <sub>M</sub>
                  <span>{seconds}</span>
                  <sub>S</sub>
                </p>
              </div>
            </div>
            <div className="first_sec_img_div">
              <img
                src={man}
                ref={imageRef}
                className="first_sec_img"
                alt="man"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="border_line"></div>
      <section className="second_section">
        <div className="left_second">
          <img src={vector3} alt="vector3" />
        </div>
        <div className="right_second">
          <p className="left_header">
            Introduction to getlinked <br />
            <span style={{ color: "#D434FE" }}>tech Hackathon 1.0</span>
          </p>
          <p className="long_text">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
      <div className="border_line"></div>
      <section className="third_section">
        <div className="left_second">
          <img className="third_sec_img" src={vector5} alt="vector5" />
        </div>
        <div className="right_second">
          <p className="left_header">
            Rules and <span style={{ color: "#D434FE" }}>Guidelines</span>
          </p>
          <p className="long_text">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
      <div className="border_line"></div>
      <section className="fourth_section">
        <div className="left_second">
          <img className="fourth_sec_img" src={vector8} alt="vector7" />
        </div>
        <div className="right_second">
          <p className="left_header">
            Judging Criteria <br />
            <span style={{ color: "#D434FE" }}>Key attributes</span>
          </p>
          <div className="long_text">
            <div className="deftn_wrapper">
              <span className="deftn_term">Innovation and Creativity:</span>
              <span className="deftn_descr">
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it apresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </div>
            <div className="deftn_wrapper">
              <span className="deftn_term">Functionality:</span>
              <span className="deftn_descr">
                {" "}
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </div>
            <div className="deftn_wrapper">
              <span className="deftn_term">Impact and Relevance:</span>
              <span className="deftn_descr">
                {" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </div>
            <div className="deftn_wrapper">
              <span className="deftn_term">Technical Complexity:</span>
              <span className="deftn_descr">
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </div>
            <div className="deftn_wrapper">
              <span className="deftn_term">Adherence to Hackathon Rules:</span>
              <span className="deftn_descr">
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </div>
          </div>
          <div className="btn_wrapper">
            <ButtonComp text="Read More" />
          </div>
        </div>
      </section>
      <div className="border_line"></div>
      <section className="fifth_section" id="faqs">
        <div className="left_second">
          <img className="fifth_sec_img" src={vector10} alt="vector10" />
        </div>
        <div className="right_second">
          <p className="left_header">
            Frequently Ask <br />
            <span style={{ color: "#D434FE" }}>Question</span>
          </p>
          <div className="long_text">
            {answers.map((e, i) => {
              return (
                <div className="qa_div">
                  <div class="question">
                    Can I work on a project I started before the hackathon?
                    <span onClick={openAnswer} class="plus-button">
                      +
                    </span>
                  </div>
                  <div class="answer">Paris is the capital of France.</div>
                </div>
              );
            })}
          </div>

          <div className="btn_wrapper">
            <ButtonComp text="Read More" />
          </div>
        </div>
      </section>
      <div className="border_line"></div>
      <section id="timeline" className="sixth_section">
        <h2 className="sixth_header">Timeline</h2>
        <p className="sixth_sub_header">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        <div className="main_section">
          <div className="middle_section">
            <img src={vector13} alt="vector13" />
          </div>
          <div className="timeline">
            <div className="left">
              <h3 className="event">Hackathon Announcement</h3>
              <p className="details">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="right">
              <p className="time">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="left">
              <p className="time">November 18, 2023</p>
            </div>
            <div className="right">
              <h3 className="event">Hackathon Announcement</h3>
              <p className="details">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
          </div>
          <div className="timeline">
            <div className="left">
              <h3 className="event">Teams Registration ends</h3>
              <p className="details">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="right">
              <p className="time">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="left">
              <p className="time">November 18, 2023</p>
            </div>
            <div className="right">
              <h3 className="event">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="details">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="timeline">
            <div className="left">
              <h3 className="event">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="details">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="right">
              <p className="time">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="left">
              <p className="time">November 18, 2023</p>
            </div>
            <div className="right">
              <h3 className="event">Demo Day</h3>

              <p className="details">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="border_line"></div>
      <section className="seventh_section">
        <h3>
          Prizes and
          <br /> <span style={{ color: "#d434fe" }}>Rewards</span>
        </h3>
        <p>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
        <div className="seventh_wrapper">
          <div className="left_seventh">
            <img src={vector14} alt="vector14" />
          </div>
          <div className="right_seventh">
            <img src={vector15} alt="vector15" />
          </div>
        </div>
      </section>
      <div className="border_line"></div>
      <section className="eight_section">
        <h3>Partners and Sponsors</h3>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div className="img_wrapper">
          <img src={vector16} alt="vector16" />
        </div>
      </section>
      <footer>
        <div className="footer_wrapper">
          <div
            className="
        left_footer"
          >
            <h3>
              get<span style={{ color: "#D434FE" }}>linked</span>
            </h3>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <p>
              Terms of Use <span style={{ color: "#D434FE" }}>| </span>Privacy
              Policy
            </p>
          </div>
          <div
            className="
        middle_footer"
          >
            <p>Useful Links</p>
            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="socials">
              <p>Follow us</p>
              <img src={InstagramIcon} alt="insta_icon" />
              <img src={xIcon} alt="x_icon" />
              <img src={facebookIcon} alt="fb_icon" />
              <img src={linkedIcon} alt="linkdin_icon" />
            </div>
          </div>
          <div
            className="
        right_footer"
          >
            <p className="header">Contact us</p>
            <p>+234 6707653444</p>
            <p>
              27,Alara Street
              <br /> Yaba 100012 <br />
              Lagos State
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
