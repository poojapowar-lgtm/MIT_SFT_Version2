import React from "react";
import "./history.css";

const History = () => {
  return (
    <div>
      <h2 className="innerpage-title">Institute History</h2>

      {/* Section 1 */}
      <div className="history-row">
        <div className="history-text">
          <p>
            The Media and Entertainment Industry in India is growing at a pace
            faster than the country’s galloping GDP. The MIT School of Film and
            Television (MIT-SFT) was established in 2015 to address the evolving
            needs of this rapidly expanding sector. The school functions under
            the MIT Art, Design and Technology University Act, 2015 (Government
            of Maharashtra University Act No. XXXIX of 2015) and is located at
            Rajbaug, Pune.
          </p>
          <p>
            The school was established under the visionary leadership of Prof.
            Dr. Mangesh T. Karad, Executive President, MIT–ADT University, who
            strongly believes that universities are reflections of society,
            embodying collective knowledge, wisdom, and cultural values. Under
            the academic tutelage and guidance of legendary filmmaker and
            multiple National Award winner Dr. Jabbar Patel, the School has
            evolved with a strong commitment to cinematic excellence, artistic
            integrity, and professional rigor. At MIT School of Film &
            Television, we nurture the next generation of creative storytellers,
            performers, and technicians who are prepared to meet the creative
            and professional challenges of the film industry. Our programs
            combine artistic exploration, technical mastery, and structured
            academic engagement, enabling students to grow into confident,
            innovative filmmaking professionals.
          </p>
        </div>

        <div className="history-image">
          <img src="/assets/images/bts/convocation1.webp" alt="History" />
        </div>
      </div>

      {/* Section 2 (reverse) */}
      <div className="history-row reverse">
        <div className="history-text">
          <p>
            Beyond core filmmaking disciplines, SFT integrates interdisciplinary
            subjects such as Political Science, Sociology, Psychology,
            Literature, History of Art, and Music. This holistic academic
            approach provides students with a broad understanding of human
            behaviour and cultural contexts essential for crafting meaningful
            and powerful cinematic narratives.
          </p>
          <p>
            SFT also offers the B.A. in Screen Acting, a specialized program
            designed to train aspiring actors in the art and craft of
            performance for the camera. The curriculum focuses on body language,
            voice modulation, emotional expression, improvisation, and on-set
            discipline, while simultaneously introducing students to filmmaking
            processes. Through workshops, camera-facing exercises, and close
            collaboration with filmmaking students, actors develop authentic
            screen performances grounded in cinematic understanding.
          </p>

        
        </div>

        <div className="history-image">
          <img src="/assets/images/bts/students.webp" alt="Growth" />
        </div>


      </div>
        <p>
            The B.Sc. and M.Sc. programs in Filmmaking are meticulously aligned
            with Indian and international industry standards and are recognized
            by the University Grants Commission (UGC), ensuring academic
            credibility and professional relevance. The campus houses
            state-of-the-art production and post-production facilities,
            including high-end digital cameras, professional editing suites,
            sound recording and design studios, VFX facilities, and one of the
            largest air-conditioned shooting floors in Pune (110 × 90 × 80 sq.
            ft.), providing students with immersive, hands-on experience using
            industry-grade equipment.
          </p>
    </div>
  );
};

export default History;
