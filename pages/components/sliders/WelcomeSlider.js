import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Accordion, Tab, Nav } from 'react-bootstrap';
import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function WelcomeSlider() {
  // Partners slider
  const partnersettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1080,
        partnersettings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        partnersettings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        partnersettings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        partnersettings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Achievements slider
  const [achiveSliderMain, setachiveSliderMain] = useState(0);
  const [achiveSliderNav, setachiveSliderNav] = useState(0);

  const achiveSliderMainRef = useRef();
  const achiveSliderNavRef = useRef();

  const handleSliderOneBeforeChange = (oldIndex, newIndex) => {
    setachiveSliderMain(newIndex);
    achiveSliderNavRef.current.slickGoTo(newIndex);
  };

  const handleSliderTwoBeforeChange = (oldIndex, newIndex) => {
    setachiveSliderNav(newIndex);
    achiveSliderMainRef.current.slickGoTo(newIndex);
  };

  const settings01 = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
    beforeChange: handleSliderTwoBeforeChange,
  };

  const settings02 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: handleSliderOneBeforeChange,
  };
  return (
    <section className="welcome-slider-sec">
      <section className="wel-slider-sec">
        <div className="sec-bg-graphics">
          <div className="social-shape"></div>
          <div className="slider-d-shape"></div>
        </div>
        <div className="sec-con-cover h-100">
          <div className="wel-slider-cover">
            <div className="wel-slider">
              <img src="images/welcome-slider-01.jpg" alt="Image" />
            </div>
            <div className="down-arrow">
              <img src="images/arrow-down.png" alt="Down Arrow" />
            </div>
          </div>
        </div>
      </section>

      <section className="wel-dean-sec  pt-5 pt-xl-6 px-3 px-lg-5 px-xl-6">
        <div className="wel-dean-cover">
          <Row>
            <Col className="col-xs-12 col-md-6 d-flex justify-content-center align-items-end">
              <div className="dean-img">
                <img src="images/maha-kobeil-img.png" alt="Image" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="dean-content">
                <div className="dean-con-hd">
                  <div className="dean-name">Dr. Maha Kobeil</div>
                  <div className="dean-desig">
                    Dean & CEO <br />
                    Majan University College
                  </div>
                </div>
                <div className="dean-con-body">
                  <div className="dean-con-scroll">
                    <h4>
                      It is my pleasure to welcome you to Majan University
                      College (MUC), the first private higher education
                      institution established in Oman, and an institution that,
                      over almost three decades of operation, has gained a
                      well-deserved reputation for maintaining high academic
                      standards.
                    </h4>
                    <p>
                      At Majan, we aim to produce graduates with the
                      self-confidence, skills, knowledge and values that will
                      enable them to pursue their chosen career path with
                      success; to be active and constructive citizens; and to
                      continue learning and developing as they grow older.
                    </p>
                    <p>
                      MUC has for many years believed in blended learning,
                      because when students spend significant amounts of time
                      online, carrying out tasks or searching for information,
                      they acquire skills that are greatly appreciated in the
                      job market.Indeed, the experience of the past two years,
                      during the Covid pandemic, has shown us still more clearly
                      that a combination of online study and face to face
                      learning, facilitated by experienced and empathetic
                      lecturers, is the ideal way to nurture our students.
                      Through a mix of studying independently and guided tuition
                      from our staff, Majan's graduates emerge with strong 21st
                      century skills in such key areas as information literacy,
                      critical thinking, and collaborative working.
                    </p>
                    <p>
                      In recent times, the College has invested heavily in
                      facilities and IT infrastructure,with the most visible
                      example of this being the six-storey Al Maha Building,
                      with its impressive auditorium and well-equipped
                      classrooms, offices, and recreational spaces. Yet, in all
                      honesty, it is not the buildings and infrastructure that
                      provide the key to Majan University College's continuing
                      success; rather, it is the warm relationship between the
                      students and all the College's staff, whether academic or
                      non-academic.
                    </p>
                    <h4>
                      To all prospective students I say this: choose the Majan
                      experience and join the Majan family. You will never
                      regret your decision.
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="wel-vison-sec">
        <div className="vision-item-cover">
          <Container fluid className="px-0">
            <Row className="g-0">
              <Col xs={12} lg={4}>
                <div className="vision-item">
                  <figure>
                    <img src="images/vision-img-01.png" alt="Image" />
                  </figure>
                  <div className="vision-it-body">
                    <h4>Vision</h4>
                    <p>
                      Recognising potential, engaging minds, transforming
                      futures.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="vision-item bg-mission">
                  <figure>
                    <img src="images/vision-img-02.png" alt="Image" />
                  </figure>
                  <div className="vision-it-body">
                    <h4>Mission</h4>
                    <p>
                      To provide an innovative learning environment that
                      supports students in reaching their full potential in a
                      changing world.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="vision-item bg-values">
                  <figure>
                    <img src="images/vision-img-03.png" alt="Image" />
                  </figure>
                  <div className="vision-it-body">
                    <h4>Our Values</h4>
                    <ul>
                      <li>Excellence</li>
                      <li>Integrity</li>
                      <li>Creativity</li>
                      <li>Teamwork</li>
                      <li>Inclusivity</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="abt-majan-sec">
        <div className="abt-majan-cover">
          <Container fluid className="px-0">
            <Row className="g-0">
              <Col xs={12} xl={6}>
                <div className="abt-maj-content px-5 px-xl-6 py-5 py-xl-6">
                  <h3>ABOUT MAJAN</h3>
                  <p>
                    Established in 1995 as the first private sector college in
                    Oman, Majan University College (MUC) has developed rapidly
                    to become one of the most trusted higher education
                    institutions. Today, it has 2,600 students, delivers eight
                    undergraduate degrees and also offers four Postgraduate
                    degrees. In December 2017 it became the first higher
                    education institution to receive accreditation from the Oman
                    Academic Accreditation Authority (OAAA) - illustrating its
                    prominence in the higher education sector.
                  </p>
                  <p>
                    MUC is an accredited college of the University of
                    Bedfordshire, UK (UoB). A bilateral agreement allows Majan
                    to design, develop, review and update the curriculum for its
                    undergraduate programmes. All curricula, assessments and
                    teaching are subject to rigorous quality assurance measures,
                    overseen by the University of Bedfordshire, which also
                    issues the academic certificates. Currently, the College
                    offers undergraduate programmes in
                  </p>
                  <Accordion className="abt-maj-accordion">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Business Administration (with 8 pathways)
                        <span className="icon"></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>General</li>
                          <li>Human Resource Management</li>
                          <li>Information Systems</li>
                          <li>Tourism & Event Management</li>
                          <li>Transport and Operations Management</li>
                          <li>Small Business</li>
                          <li>Marketing</li>
                          <li>Accounting</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Finance</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Accounting</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Marketing</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Islamic Banking and Finance
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Computer & Internet Applications
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>Networking</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        Computing (with 3 pathways){' '}
                        <span className="icon"></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Oil & Gas (Regular & On/Off)</li>
                          <li>Software Engineering</li>
                          <li>Banking Information Systems</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>English Language</Accordion.Header>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col xs={12} xl={6}>
                <div className="abt-maj-img">
                  <img src="images/abt-maj-img.jpg" alt="Image" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="attribute-sec px-5 px-xl-6 py-5 py-xl-7">
        <div className="sec-con-cover">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <div className="attr-tb-hd">
                  <h3>Graduate Attributes</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="attr-tb-cover">
                  <Tab.Container
                    id="tab-attribute"
                    defaultActiveKey="attr-tab-01"
                  >
                    <Nav className="attr-tb-nav">
                      <Nav.Item>
                        <Nav.Link eventKey="attr-tab-01">
                          <span className="nav-icon">
                            <img
                              src="images/graduate-gra-icon-01.png"
                              alt="Icon"
                            />
                          </span>
                          <span className="nav-label">Adaptive</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="attr-tab-02">
                          <span className="nav-icon">
                            <img
                              src="images/graduate-gra-icon-02.png"
                              alt="Icon"
                            />
                          </span>
                          <span className="nav-label">Entrepreneurial</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="attr-tab-03">
                          <span className="nav-icon">
                            <img
                              src="images/graduate-gra-icon-03.png"
                              alt="Icon"
                            />
                          </span>
                          <span className="nav-label">Global Citizen</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="attr-tab-06">
                          <span className="nav-icon">
                            <img
                              src="images/graduate-gra-icon-06.png"
                              alt="Icon"
                            />
                          </span>
                          <span className="nav-label">Employable</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="attr-tab-05">
                          <span className="nav-icon">
                            <img
                              src="images/graduate-gra-icon-05.png"
                              alt="Icon"
                            />
                          </span>
                          <span className="nav-label">Innovative</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="attr-tab-04">
                          <span className="nav-icon">
                            <img
                              src="images/graduate-gra-icon-04.png"
                              alt="Icon"
                            />
                          </span>
                          <span className="nav-label">KNowledgeable</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <div className="attr-tb-body">
                      <div className="attr-tb-dot dot-01"></div>
                      <div className="attr-tb-dot dot-02"></div>
                      <div className="attr-tb-dot dot-03"></div>
                      <div className="attr-tb-dot dot-04"></div>
                      <div className="attr-tb-dot dot-05"></div>
                      <div className="attr-tb-dot dot-06"></div>
                      <Tab.Content>
                        <Tab.Pane eventKey="attr-tab-01">
                          <div className="attr-tb-con">
                            <h4>Adaptive</h4>
                            <ul>
                              <li>
                                Demonstrates discipline-specific knowledge and
                                skills;
                              </li>
                              <li>
                                Has the ability to apply current knowledge of
                                the discipline to professional situations;
                              </li>
                              <li>
                                Analyses and critically evaluates from multiple
                                perspectives;
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="attr-tab-02">
                          <div className="attr-tb-con">
                            <h4>Entrepreneurial</h4>
                            <ul>
                              <li>
                                Demonstrates discipline-specific knowledge and
                                skills;
                              </li>
                              <li>
                                Has the ability to apply current knowledge of
                                the discipline to professional situations;
                              </li>
                              <li>
                                Analyses and critically evaluates from multiple
                                perspectives;
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="attr-tab-03">
                          <div className="attr-tb-con">
                            <h4>Global Citizen</h4>
                            <ul>
                              <li>
                                Demonstrates discipline-specific knowledge and
                                skills;
                              </li>
                              <li>
                                Has the ability to apply current knowledge of
                                the discipline to professional situations;
                              </li>
                              <li>
                                Analyses and critically evaluates from multiple
                                perspectives;
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="attr-tab-04">
                          <div className="attr-tb-con">
                            <h4>Knowledgeable</h4>
                            <ul>
                              <li>
                                Demonstrates discipline-specific knowledge and
                                skills;
                              </li>
                              <li>
                                Has the ability to apply current knowledge of
                                the discipline to professional situations;
                              </li>
                              <li>
                                Analyses and critically evaluates from multiple
                                perspectives;
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="attr-tab-05">
                          <div className="attr-tb-con">
                            <h4>Innovative</h4>
                            <ul>
                              <li>
                                Demonstrates discipline-specific knowledge and
                                skills;
                              </li>
                              <li>
                                Has the ability to apply current knowledge of
                                the discipline to professional situations;
                              </li>
                              <li>
                                Analyses and critically evaluates from multiple
                                perspectives;
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="attr-tab-06">
                          <div className="attr-tb-con">
                            <h4>Employable</h4>
                            <ul>
                              <li>
                                Demonstrates discipline-specific knowledge and
                                skills;
                              </li>
                              <li>
                                Has the ability to apply current knowledge of
                                the discipline to professional situations;
                              </li>
                              <li>
                                Analyses and critically evaluates from multiple
                                perspectives;
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="partners-sec px-5 px-xl-6 py-5 py-xl-6">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="partners-caro-hd">
                <h3>Our Partners</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider className="slider partner-carousel" {...partnersettings}>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-01.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="partner-item">
                      <figure>
                        <img src="images/partner-logo-02.png" alt="Partner" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-03.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-04.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-05.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-06.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-07.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="achievement-sec">
        <div className="achievement-cover">
          <div className="row g-0">
            <div className="col-12 col-ach-caro">
              <div className="achievement-caro-cover px-5 px-xl-6 py-5 py-xl-6">
                <div className="achievement-hd">
                  <h3>Achievements</h3>
                </div>
                <Slider
                  className="slider achievement-caro-nav"
                  {...settings01}
                  ref={achiveSliderNavRef}
                >
                  <div>
                    <a className="ach-nav-item">2023</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2022</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2021</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2019</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2017</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2016</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2015</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2014</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2013</a>
                  </div>
                </Slider>
                <Slider
                  className="slider achievement-caro-con"
                  {...settings02}
                  ref={achiveSliderMainRef}
                >
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          Top Omani Brand' in the 'Higher Education' category -
                          15th of March, 2023
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          MUC won 4 awards: Student Support, Advance Tech, Best
                          Exhibitor and eventually the distinguished ‘Best of
                          Best’ award at the Excellence in Higher Education
                          Award Event hosted by the Global Higher Education
                          Expo, GHEDEX 2022.
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          MUC won the Internet of Things (IoT) award at the
                          Future Skills & HRD Conference by GHEDEX Series 2021
                          held in December at the Crown Plaza, Qurum.
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          Most Trusted Private Higher Education brand in Oman by
                          OER, 2019.
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-02.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          1st higher education institution to achieve full
                          institutional accreditation by the Oman Academic
                          Accreditation Authority and Quality Assurance of
                          Education (OAAAQAE), 2017
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          - No 1 in AIWA Awards for Best Performing Companies in
                          2016 <br />
                          - Partner of the Year Award' by the University of
                          Bedfordshire in their awards ceremony 2016 <br />-
                          Most Trusted Brand Award by OER, 2016
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          - No 1 in AIWA Awards for Best Performing Companies in
                          2015 <br />- Most Trusted Brand Award by OER, 2015
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          No 1 in AIWA Awards for Best Performing Companies in
                          2014
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <h4>
                          No 2 in AIWA Awards for Best Performing Companies in
                          2013
                        </h4>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-12 col-ach-img">
              <div className="achievement-img">
                <img src="images/achievement-img.jpg" alt="Image" />
                <div className="achieve-img-shape">
                  <svg height={0} width={0}>
                    <defs />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wel-video-sec px-5 px-xl-6 py-5 py-xl-6">
        <div className="sec-bg-graphics">
          <div className="vid-shape shape-01"></div>
          <div className="vid-shape shape-02"></div>
          <div className="vid-shape shape-03"></div>
        </div>
        <div className="sec-con-cover">
          <div className="wel-video-cover">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/z6l55yJJRII"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
