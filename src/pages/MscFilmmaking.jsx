import React, { useRef } from "react";
import InnerBanner from "../components/inner_banner/InnerBanner";
import Sidebar from "../components/sidebar/Sidebar";
import "./Pages.css";
import AboutCourse from "../page_content/course/aboutCourse/AboutCourse";
import Specialization from "../page_content/course/specialization/Specialization";
import Curriculum from "../page_content/course/curriculum/Curriculum";
import WhyThis from "../page_content/course/whyThis/WhyThis";
import Scope from "../page_content/course/scope/Scope";

const MscFilmmaking = () => {
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
      title:
        "Advanced specialization aligned with international filmmaking practices ",
    },
    {
      id: 2,
      title:
        " Strong emphasis on creative leadership and independent filmmaking",
    },
    {
      id: 3,
      title: " Professional-grade productions evaluated by industry juries",
    },
    {
      id: 3,
      title:
        " Ideal for graduates aiming for senior creative, technical, or independent cinema roles",
    },
  ];

  return (
    <>
      <InnerBanner
        title="MSC Film Making"
        subtitle={subtitle}
        bgImage="/assets/images/inner-banner/Msc-bnr.webp"
      />

      <div className="page-layout">
        <Sidebar menuItems={menu} onItemClick={scrollToSection} />

        <div className="page-content">
          <section ref={aboutRef} id="about-course">
            <AboutCourse
              title="About M.Sc. in Filmmaking"
              headerRight={
                <>
                  <p>Eligibility:Any Graduate </p>
                  <p>Duration:2 Years </p>
                </>
              }
              // specializationTitle="Specializations Offered"
              // specializations={specializations}
            >
              <div>
                <p>
                  The M.Sc. in Filmmaking is a specialization focused
                  postgraduate program designed for graduates who wish to
                  achieve professional mastery in a specific filmmaking
                  discipline. The curriculum is aligned with contemporary
                  industry practices and emphasizes advanced production
                  workflows, aesthetic refinement, and industry-level execution,
                  enabling students to operate confidently in real-world
                  cinematic environments.
                </p>
                <p>
                  The program offers in-depth specialization in direction and
                  screenplay writing, cinematography, film editing, sound
                  recording and design, or VFX & motion graphics. Students
                  engage in complex, high-level production projects that
                  simulate professional industry conditions, including concept
                  development, pre-production planning, team leadership,
                  budgeting, and post-production management. This hands-on
                  approach allows students to refine both creative vision and
                  technical expertise while understanding the responsibilities
                  of senior creative and technical roles.
                </p>
                <p>
                  A key component of the program is the Master’s capstone film,
                  which serves as an independent, professionally executed
                  project evaluated by a jury of eminent industry professionals.
                  Supported by mentorship, industry interaction, and access to
                  professional infrastructure, graduates of the M.Sc. in
                  Filmmaking emerge as confident practitioners, creative
                  leaders, and independent filmmakers prepared to contribute
                  meaningfully across all platforms where cinema is created and
                  experienced.
                </p>
              </div>
            </AboutCourse>
          </section>

       <Specialization specializationTitle="Specializations Offered"/>

          <section ref={curriculumRef} id="curriculum">
            <Curriculum
              title="Academic Curriculum"
              imageSrc="/assets/images/bts/Msc.webp"
            >
              <p>
                The M.Sc. in Filmmaking program deepens student’s artistic and
                technical expertise through advanced production driven learning.
                Building upon foundational skills, the curriculum emphasizes
                concept development, script analysis, visual design, production
                management, and advanced post-production techniques.
              </p>
              <p>
                Students undertake specialized projects in their chosen
                discipline such as Direction & Screenplay Writing,
                Cinematography, Editing or Sound Recording & Design through the
                structured stages such as Development, Pre-Production,
                Production, and Post-Production.
              </p>
              <p>
                The program culminates in a capstone film project evaluated by a
                jury of eminent industry professionals, ensuring a strong
                interface between academia and the film industry. By integrating
                creative research, innovation, and industry mentorship, the
                program prepares graduates to emerge as independent filmmakers,
                creative leaders, and advanced practitioners in the evolving
                cinematic landscape.
              </p>
            </Curriculum>
          </section>

          <section ref={whyRef} id="why-this">
            <WhyThis title="Why Choose This" whyThisData={whyThisData} />
          </section>

          <section ref={futureRef} id="future">
            <Scope
              title="Future Scope"
              imageSrc="/assets/images/bts/msc-shoot.webp"
              ctaPath="/careers"
            >
              <p>
                The M.Sc. in Filmmaking is critical for graduates who aim to
                attain advanced mastery and leadership in a specific filmmaking
                discipline. With its emphasis on specialized practice, advanced
                production workflows, and independent project execution, the
                program prepares students for senior creative and technical
                roles within the film industry.
              </p>
              <p>
                Graduates of this program can work as directors,
                cinematographers, editors, sound designers, VFX supervisors,
                creative producers, or independent filmmakers. The master’s
                capstone film strengthens professional portfolios and opens
                opportunities at film festivals, production houses, and high-end
                cinematic projects. The program is also significant for those
                aspiring to pursue teaching, research, or advanced creative
                practice in cinema, positioning graduates as creative leaders
                and specialists in an evolving cinematic landscape.
              </p>
            </Scope>
          </section>
        </div>
      </div>
    </>
  );
};

export default MscFilmmaking;
