import React, { useRef } from "react";
import InnerBanner from "../components/inner_banner/InnerBanner";
import Sidebar from "../components/sidebar/Sidebar";
import "./Pages.css";
import AboutCourse from "../page_content/course/aboutCourse/AboutCourse";
import Curriculum from "../page_content/course/curriculum/Curriculum";
import WhyThis from "../page_content/course/whyThis/WhyThis";
import Scope from "../page_content/course/scope/Scope";

const BaScreenacting = () => {
  // Section refs
  const aboutRef = useRef(null);
  const curriculumRef = useRef(null);
  const whyRef = useRef(null);
  const futureRef = useRef(null);

  // Sidebar menu (NO routing paths here)
  const menu = [
    { name: "About Course", ref: aboutRef },
    { name: "Course Curriculum", ref: curriculumRef },
    { name: "Why Choose this", ref: whyRef },
    { name: "Future Scope", ref: futureRef },
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const subtitle = "Sailing Towards Future";

  const whyThisData = [
    {
      id: 1,
      title:
        "Unique first-year foundation in filmmaking alongside B.Sc. in Filmmaking students ",
    },
    {
      id: 2,
      title:
        "Deep understanding of camera, direction, editing, sound, and post-production ",
    },
    {
      id: 3,
      title: "Regular performance shoots and on-set experience ",
    },
    ,
    {
      id: 4,
      title:
        "Ideal pathway for professional careers in cinema, OTT platforms, and screen-based performance ",
    },
  ];

  return (
    <>
      <InnerBanner
        title="BA In screen acting"
        subtitle={subtitle}
        bgImage="/assets/images/inner-banner/BA-bnr.webp"
      />

      <div className="page-layout">
        <Sidebar menuItems={menu} onItemClick={scrollToSection} />

        <div className="page-content">
          <section ref={aboutRef} id="about-course">
            <AboutCourse
              title="About B.A. in Screen Acting "
              headerRight={
                <>
                  <p>Eligibility: 10 + 2 Any Stream or Equivalent </p>
                  <p>Duration: 3 Years</p>
                </>
              }
            >
              <div>
                <p>
                  The B.A. in Screen Acting is a specialized undergraduate
                  program designed exclusively for aspiring actors who wish to
                  build professional careers performing in front of the camera.
                  The program is rooted in the belief that effective screen
                  acting emerges from a deep understanding of filmmaking as a
                  collaborative art form, not from performance training in
                  isolation.
                </p>
                <p>
                  In the first year, students undergo a strong foundational
                  training in filmmaking, studying alongside B.Sc. in Filmmaking
                  students. During this phase, they learn the basics of
                  direction and screenplay writing, cinematography, film
                  editing, sound recording and design, and VFX & motion
                  graphics. This interdisciplinary foundation enables acting
                  students to understand camera language, shot composition,
                  continuity, sound, and post-production—significantly enhancing
                  their ability to perform with awareness, precision, and
                  creative sensitivity.
                </p>
                <p>
                  From the second year onwards, the program intensifies its
                  focus on screen acting and performance for camera, covering
                  acting methods, script analysis, character development,
                  emotional realism, body language, choreography, movement, and
                  voice modulation. Regular camera-facing exercises and
                  performance shoots help students develop screen presence,
                  on-set discipline, and professional confidence.
                </p>
                <p>
                  A distinctive strength of the program is its integration with
                  filmmaking students, allowing actors to collaborate on real
                  film projects and gain hands-on experience on professional
                  sets. Through supervised productions, workshops, and
                  jury-evaluated performances, the program develops versatile,
                  industry-ready screen actors with a strong foundation in
                  cinematic storytelling—preparing them to work across all
                  platforms where cinema is created and experienced.
                </p>
              </div>
            </AboutCourse>
          </section>

          <section ref={curriculumRef} id="curriculum">
            <Curriculum
              title="Academic Curriculum"
              imageSrc="/assets/images/bts/BA-shoot.webp"
            >
              <p>
                The B.A. in Screen Acting program offers a structured and
                performance-oriented curriculum designed to train actors for
                Film, Television, and OTT platforms. Core training areas include
                Acting for Camera, Voice and Speech, Movement, Character
                Development, Improvisation, and Performance for Screen.
                Specialized inputs in Choreography and Action Choreography
                further enhance body awareness and on-screen confidence.
              </p>
              <p>
                Students will be trained in acting methods tailored for the
                screen, including detailed script analysis, character
                development, and on-camera performance techniques. They will
                also gain valuable insights into the filmmaking process,
                equipping them to collaborate effectively with directors,
                cinematographers, and production teams.
              </p>
              <p>
                Through workshops, projects, and hands-on shoots, students will
                develop the artistic, technical, and professional competencies
                needed to excel in today’s competitive screen acting industry.
                Evaluation is conducted through jury assessments by industry
                professionals, providing valuable feedback and exposure to
                professional standards. The program fosters emotional
                intelligence, discipline, and screen presence, shaping students
                into versatile and industry- ready performers.
              </p>
            </Curriculum>
          </section>

          <section ref={whyRef} id="why-this">
            <WhyThis title="Why Choose This" whyThisData={whyThisData} />
          </section>

          <section ref={futureRef} id="future">
            <Scope
              title="Future Scope"
              imageSrc="/assets/images/home/programs3.webp"
              ctaPath="/careers"
            >
              <p>
                The B.A. in Screen Acting program prepares students for
                professional acting careers by combining performance training
                with a strong foundation in filmmaking. This dual focus
                significantly enhances employability, as actors trained in
                camera language, editing continuity, sound, and direction are
                better equipped to adapt to professional film sets.
              </p>
              <p>
                Graduates can pursue careers as screen actors in feature films,
                OTT platforms, television productions, web series, advertising
                films, and independent cinema. The program also opens avenues in
                voice-over, digital performance, content creation, and
                collaborative independent projects. The importance of this
                program lies in its cinema-centric acting pedagogy, which
                produces disciplined, versatile performers capable of sustaining
                long-term careers across evolving cinematic platforms.
              </p>
            </Scope>
          </section>
        </div>
      </div>
    </>
  );
};

export default BaScreenacting;
