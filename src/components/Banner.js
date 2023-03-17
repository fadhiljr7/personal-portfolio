import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/contact-img.svg";
import myVideo from '../assets/img/backround-video2.mp4';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Analyst", "Data Analyst", "Data Analyst" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return (
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={myVideo} type="video/mp4" />
        </video>
        <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm MUFIN`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Analyst", "Data Analyst", "Data Analyst" ]'><span className="wrap">{text}</span></span></h1>
                    <p>MUFIN AKA MUHAMMAD FADHIL ABIDIN is a skilled data analyst with sixth month of experience in GOTO. I'm proficient in data management and have expertise in statistical analysis, data visualization, and predictive modeling also skilled in programming languages such as Python, Ruby, and SQL and has experience working with various data analysis tools such as Tableau, Power BI, Google Data Studio, and Excel.</p>
                    <button onClick={() => window.open('https://www.linkedin.com/in/mufiiin', '_blank')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              {/* <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility> */}
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    );
}