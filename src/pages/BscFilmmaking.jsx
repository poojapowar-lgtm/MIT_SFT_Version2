import React, { useRef } from "react";
import InnerBanner from "../components/inner_banner/InnerBanner";
import Sidebar from "../components/sidebar/Sidebar";
import "./Pages.css";
import AboutCourse from "../page_content/course/aboutCourse/AboutCourse";
import Specialization from "../page_content/course/specialization/Specialization";
import Curriculum from "../page_content/course/curriculum/Curriculum";
import WhyThis from "../page_content/course/whyThis/WhyThis";
import Scope from "../page_content/course/scope/Scope";

const BscFilmmaking = () => {
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

  // const specializations = [
  //   {
  //     title: "Direction and Screenplay Writing",
  //     logo: "/assets/images/icons/direction.webp",
  //   },
  //   {
  //     title: "Cinematography",
  //     logo: "/assets/images/icons/cinematography.webp",
  //   },
  //   {
  //     title: "Film Editing",
  //     logo: "/assets/images/icons/megaphone.webp",
  //   },
  //   {
  //     title: "Sound Recording & Designing",
  //     logo: "/assets/images/icons/film-editing.webp",
  //   },
  //   {
  //     title: "VFX &amp; Motion Graphics",
  //     logo: "/assets/images/icons/VFX.webp",
  //   },
  // ];

  const whyThisData = [
    {
      id: 1,
      title: "Learn filmmaking by making films, not just studying theory",
    },
    {
      id: 2,
      title: "Production-focused curriculum aligned with industry standards",
    },
    {
      id: 3,
      title: "Access to professional studios and high-end equipment",
    },
    ,
    {
      id: 4,
      title:
        "Strong foundation for diverse careers within the cinematic ecosystem",
    },
  ];

  return (
    <>
      <InnerBanner
        title="Bsc Film Making"
        subtitle={subtitle}
        bgImage="/assets/images/inner-banner/Bsc-bnr.webp"
      />

      <div className="page-layout">
        <Sidebar menuItems={menu} onItemClick={scrollToSection} />

        <div className="page-content">
          <section ref={aboutRef} id="about-course">
            <AboutCourse
              title="About  B.Sc. in Filmmaking"
              headerRight={
                <>
                  <p>Eligibility: 10 + 2 Any Stream or Equivalent</p>
                  <p>Duration: 3 Years</p>
                </>
              }
              // specializationTitle="Specializations Offered"
              // specializations={specializations}
            >
              <div>
                <p>
                  The B.Sc. in Filmmaking is a comprehensive undergraduate
                  program designed to develop skilled filmmakers and specialist
                  technicians with a strong foundation in the art and craft of
                  cinema. The curriculum is aligned with contemporary industry
                  practices and follows a production-driven learning model,
                  enabling students to learn filmmaking through direct
                  engagement with real film projects from the first year itself.
                </p>
                <p>
                  The program offers structured exposure to all core filmmaking
                  disciplines—direction and screenplay writing, cinematography,
                  editing, sound recording and design, and VFX & motion
                  graphics—before students choose their major and minor
                  specializations. This holistic approach ensures a deep
                  understanding of the complete filmmaking process, from concept
                  development to post-production.
                </p>
                <p>
                  Through intensive workshops, studio-based instruction,
                  collaborative productions, and jury- evaluated film projects,
                  students develop aesthetic sensibility, technical mastery,
                  storytelling ability, and professional discipline. With access
                  to Pune's largest air-conditioned shooting floor and
                  one-to-one use of professional cameras, sound, and editing
                  systems, the program provides an immersive learning
                  environment that prepares graduates for careers across cinema,
                  television, OTT platforms, advertising, and independent
                  filmmaking.
                </p>
              </div>
            </AboutCourse>
          </section>

          <Specialization specializationTitle="Specializations Offered"/>

          <section ref={curriculumRef} id="curriculum">
            <Curriculum
              title="Academic Curriculum"
              imageSrc="/assets/images/bts/Bsc.webp"
            >
              <p>
                The B.Sc. in Filmmaking program follows a production and
                project-based learning model that mirrors real-world film
                practice. Students progressively explore all stages of the
                filmmaking process such as Development, Pre-Production,
                Production, and Post- Production through hands-on exercises and
                collaborative projects. Core areas such as Direction &
                Screenplay Writing, Cinematography, Editing, Sound Recording &
                Designing are taught through workshops and supervised film
                productions.
              </p>
              <p>
                Each semester culminates in guided short film projects evaluated
                by industry professionals serving as jury members, ensuring
                real-world feedback and professional readiness. The program
                nurtures creative thinking, technical mastery, and teamwork,
                preparing students for diverse roles within the Film,
                Television, and OTT sectors.
              </p>
            </Curriculum>
          </section>

          <section ref={whyRef} id="why-this">
            <WhyThis title="Why Choose This" whyThisData={whyThisData} />
          </section>

          <section ref={futureRef} id="future">
            <Scope
              title="Future Scope"
              imageSrc="/assets/images/bts/bts-actor1.webp"
              ctaPath="/careers"
            >
              <p>
                The B.Sc. in Filmmaking program follows a production and
                project-based learning model that mirrors real-world film
                practice. Students progressively explore all stages of the
                filmmaking process such as Development, Pre-Production,
                Production, and Post- Production through hands-on exercises and
                collaborative projects. Core areas such as Direction &
                Screenplay Writing, Cinematography, Editing, Sound Recording &
                Designing are taught through workshops and supervised film
                productions.
              </p>
              <p>
                Each semester culminates in guided short film projects evaluated
                by industry professionals serving as jury members, ensuring
                real-world feedback and professional readiness. The program
                nurtures creative thinking, technical mastery, and teamwork,
                preparing students for diverse roles within the Film,
                Television, and OTT sectors.
              </p>
            </Scope>
          </section>
        </div>
      </div>
    </>
  );
};

export default BscFilmmaking;
