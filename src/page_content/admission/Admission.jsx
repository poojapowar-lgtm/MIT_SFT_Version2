import React from "react";
import { useState } from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./admission.css";
import DividerWithTitle from "../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const Admission = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const bgImage = "/assets/images/inner-banner/admission-bnr.webp";
  const title = "Admission";
  const subtitle = "Start Your Journey With Us";

  const stages = [
    {
      title: "Stage 1: MCQ-Based Assessment",
      content: `Candidates appear for two objective test papers: English and Awareness. 
              A Google Form link is emailed to the candidate on the scheduled date and time, 
              through which the test is taken.`,
    },
    {
      title: "Stage 2: Creative Reasoning",
      content: `Candidates are given one hour to complete a creative assignment. 
              A question paper containing images and related questions is emailed to them. 
              Students must demonstrate creative interpretation, type their answers in a Word document, 
              and email it back within the stipulated time. The acting evaluation is conducted directly 
              during the personal interview.`,
    },
    {
      title: "Stage 3: Personal Interview",
      content: `A personal interview is conducted to assess candidates on three key parameters:`,
      list: [
        "Interest in Filmmaking and its Techniques",
        "Eagerness to Learn",
        "Knowledge of the Specialization Applied For",
      ],
    },
  ];

  const faqData = [
    {
      question: "What programs are offered at MIT-SFT?",
      answer:
        "MIT-SFT offers B.Sc. in Filmmaking, M.Sc. in Filmmaking, and B.A. in Screen Acting, all focused exclusively on cinema and screen-based storytelling. ",
    },
    {
      question:
        " Is MIT-SFT a filmmaking school or a media/mass communication institute?",
      answer:
        "MIT-SFT is a pure filmmaking and screen performance school. It does not teach mass communication, journalism, or broadcasting. ",
    },
    {
      question: "What makes MIT-SFT different from other film schools? ",
      answer:
        "Its production-based learning model, internationally benchmarked curriculum, Pune’s largest shooting studio, one-to-one equipment access, and strong industry engagement make it distinct. ",
    },
    {
      question: "Are the degrees recognized? ",
      answer:
        " Yes. All programs are UGC-recognized degrees offered under MIT–ADT University.",
    },
    {
      question: " How early do students start practical filmmaking or acting?",
      answer:
        "From the first year itself. Students work on practical projects every semester, supported by workshops and studio-based learning. ",
    },
    {
      question: "Do acting students also learn filmmaking? ",
      answer:
        "Yes. B.A. in Screen Acting students study the fundamentals of filmmaking in the first year alongside B.Sc. students, enhancing camera awareness and on-set performance.",
    },
    {
      question: "What kind of facilities are available? ",
      answer:
        "Professional cameras, sound recording and design studios, Mac & PC-based editing suites, VFX facilities, and one of Pune’s largest air-conditioned shooting floors. ",
    },
    {
      question: "Is there industry exposure during the course? ",
      answer:
        "Yes. Students participate in film festivals like PIFF, attend masterclasses, interact with industry professionals, and receive jury evaluations from practitioners. ",
    },
    {
      question: "How are students evaluated? ",
      answer:
        "Through continuous assessment, practical projects, and jury evaluations by industry experts, rather than only written exams. ",
    },
    {
      question: "What career opportunities are available after graduation? ",
      answer:
        " Graduates work in cinema, OTT platforms, television, advertising, independent filmmaking, acting, sound, editing, cinematography, VFX, and related fields.",
    },
    ,
    {
      question: "Can students pursue independent films while studying? ",
      answer:
        "Students primarily work on structured semester-end production projects that form a core part of the curriculum. These films are entirely student-driven, with story, screenplay, direction, cinematography, lighting, camera movement, editing, and post-sound executed by the students themselves. This ensures focused learning, fair evaluation, and rigorous assessment under faculty guidance and industry jury review, rather than parallel independent productions.. ",
    },
    ,
    {
      question: "Where is the campus located? ",
      answer:
        " MIT-SFT is located at Rajbaug, Loni Kalbhor, Pune, on a scenic 120-acre campus along the river Mutha.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <InnerBanner bgImage={bgImage} title={title} subtitle={subtitle} />
      <div>
        <div className="admission">
          <DividerWithTitle title="Admission Open Now" />

          {/* Section 1 */}
          <section className="admission-section">
            <h3 style={{ textAlign: "center" }} className="subtitle">
              Admission Details
            </h3>

            <table className="admission-table">
              <thead>
                <tr>
                  <th>Programs</th>
                  <th>Duration</th>
                  <th>Eligibilty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B.A. in Screen Acting</td>
                  <td>3 Years</td>
                  <td>10+2 (Any Stream)</td>
                </tr>
                <tr>
                  <td>B.Sc. in Film Making</td>
                  <td>3 Years</td>
                  <td>10+2 (Any Stream)</td>
                </tr>
                <tr>
                  <td>M.Sc. in Film Making</td>
                  <td>2 Years</td>
                  <td>Any Graduate</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section 2 */}
          <section className="admission-section">
            <div className="info-box">
              <p style={{ textAlign: "center" }}>
                Aspirants seeking admission must visit www.mituniversity.ac.in
                and register by clicking on the Apply Now link.
              </p>

              <h3 className="innerpage-subtitle">
                The registration process consists of three steps :
              </h3>
              <ul className="page-list">
                <li>
                  Login using the registered credentials and complete the
                  personal and educational details
                </li>
                <li>Pay the registration fee of Rs. 1800/- online</li>
                <li>
                  After successful registration, Eligibility Verification is
                  carried out. Once verified, candidates are scheduled for the
                  MIT SFT Filmmaking Creative Aptitude Test, which is conducted
                  online in three stages.
                  <br />
                  The test is initiated immediately after confirmation of paid
                  registration.
                </li>
              </ul>

              {/* stages */}
              <div className="stages-wrapper">
                {stages.map((stage, index) => (
                  <div
                    key={index}
                    className={`stage-cards ${
                      index % 2 === 0 ? "left" : "right"
                    }`}
                  >
                    <div className="common-card stage-card">
                      <p className="innerpage-hg">{stage.title}</p>
                      <p className="stage-text">{stage.content}</p>
                      {stage.list && (
                        <ul className="page-list">
                          {stage.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="innerpage-subtitle">Note: Admission Category</h3>
              <p>
                Admissions are processed under the Open Category, regardless of
                caste. Only students eligible under the EWS category receive fee
                benefits as per Government rules and regulations.
              </p>
            </div>
          </section>

          {/* faq */}
          <div className="faq-wrapper">
            <DividerWithTitle title="Frequently Asked Questions" />

            <div className="faq-container">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-que"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p>
                      {" "}
                      <span>{item.question}</span>
                    </p>
                    <span className="faq-icon">
                      {activeIndex === index ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
