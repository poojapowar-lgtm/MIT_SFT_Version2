import React from "react";
import "./awardstories.css";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import DividerWithTitle from "../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const AwardStories = () => {
  const bgImage = "/assets/images/home/nt2.webp";
  const title = "Award-Winning Stories";
  const subtitle = "Start Your Journey With Us";

  const awardsData = [
    {
      film: "SUTTI,CHOWNDKI & TAAL ",
      award: "Official Selection Bangalore Queer Film Festival-2024",
      student: "Arpit & Mandar",
    },
    {
      film: "SAI",
      award: "Special Jury Award Tamizhagam International Film Festival",
      student: "Aniruddha Haridas",
    },
     {
      film: "DIVINE CANOPIES  ",
      award: "Best Video Educational eContent category NCERT Kerala 2021 2023-24",
      student: "Prof.Wasimbarry Maner",
    },
     {
      film: "MONKEY BRAIN SUSHI ",
      award: "Official Selection Signs Film Festival,Kerala 2021",
      student: "Prof. Shrikant Agawane",
    },
     {
      film: "INDHANAM ",
      award: "Audience Choice Award Mokkho International Film Festival 2024",
      student: "Surya Vakkalanka",
    },
     {
      film: "SIYA ",
      award: "Official Selection The Women's Bioscope 2024",
      student: "Hetansa Rajkotiya",
    }, {
      film: "SIYA ",
      award: "Best VFX Award Asian Talent International Film Festival 2024",
      student: "Hetansa Rajkotiya",
    },
     {
      film: "GUMNAAM ",
      award: "1st Gujrati Short Film Ahmedabad International Film Festival 2024",
      student: "Arpit Modh",
    },
     {
      film: "DIVINE CANOPIES ",
      award: "Best Editing All India Children's education eContent 2023-24",
      student: "Prof.Wasimbarry Maner",
    },
     {
      film: "AAMHI DOGHE ",
      award: "Official Screening Short film of the Year India 2024",
      student: "Neel Phadnis",
    },
     {
      film: "KOYTA ",
      award: "Theme based Educational eContent category NCERT 2023-24",
      student: "Shaksham Vyas",
    },
     {
      film: "INDHANAM",
      award: "Winner of Top 100 Short Film DPIFF-2024",
      student: "Surya Vakkalanka",
    }, {
      film: "NIRAST ",
      award: "Official Screening Golden/Silver Comma Award 2022-23",
      student: "Purva Dutiya",
    },
     {
      film: "SUNITA ",
      award: "1st Film Maker Lift-of Global Network Film Festival",
      student: "Tapasya Chhibber",
    },
     {
      film: "INDHANAM ",
      award: "Best Cinematographer International Film od Andhra Pradesh 2024",
      student: "Surya Vakkalanka",
    },
     {
      film: "GHUNGHAT ",
      award: "Best Hindi Film IFH National Level Short Film Awards 2023",
      student: "Neel Phadnis",
    },
     {
      film: "RHYTHM OF LIFE ",
      award: "Best Documentary Student World International Film Festival 2023",
      student: "Surya Vakkalanka",
    },
     {
      film: "ASAMTOL",
      award: "Special Festival Mention Award Pune International Film Festival 2023",
      student: "Archit Kirkinde",
    }, {
      film: "ASAMTOL ",
      award: "Best Director One Leaf International Film Festival 2023",
      student: "Archit Kirkinde",
    },
     {
      film: "ICHWACHA DIRHAD ",
      award: "Official Selection Alpaviram 6th International Youth Festival - 2022",
      student: "Sharvari Khambe",
    },
     {
      film: "NINAIVUGALIL ",
      award: "Official Selection 12th cut.in National Students' Film Festival-2023",
      student: "Jayshankar Ramu",
    },
     {
      film: "SHALECHYE DWARI ",
      award: "Special Festival Mention Award Jaipur International Film Festival Oct 2022",
      student: "Manthan Mese",
    },
     {
      film: "SUNITA ",
      award: "Best Documentary Director 12th Pune Short Film Festival 2022",
      student: "Tapasya Chhibber",
    },
     {
      film: "AYENA ",
      award: "Best First Film Mumbai Asian Short Film Festival 2017",
      student: "Jay Agarwal",
    }, {
      film: "VIPRALABDHA",
      award: "Best Short Film International Film Festival Ahmednagar",
      student: "Bhushan Gokhale",
    },
     {
      film: "THE MOST BEAUTIFUL ",
      award: "Best Actor Mumbai Asian Short Film Festival 2017",
      student: "Ankit Bhat",
    },
     {
      film: "PARIAH",
      award: "Best Director 68th National Film Awards Dadasaheb Phalke Award 2020",
      student: "Vishesh lyer",
    },
     {
      film: "YAKSHIKA ",
      award: "Best Director Mumbai Asian Short Film Festival 2017",
      student: "Ajay Patil",
    },
     {
      film: "YAKSHIKA ",
      award: "Special Festival Mention Award 6th Delhi Shorts International Film Festival 2017",
      student: "Ajay Patil",
    },
     {
      film: "WILL ",
      award: "",
      student: " IT BE YOU ?",
    }, 
   
  ];

  return (
    <>
      <InnerBanner bgImage={bgImage}/>
      <div className="awards-section">
        <DividerWithTitle title="Award-Winning Stories by Our Students" />

        <div className="awards-row five" style={{width:"100%", backgroundColor:"#520c17",margin:"50px auto",padding:"50px"}}>
          {awardsData.map((item, index) => (
            <div
              key={index}
              className="award-card"
              style={{ backgroundImage: "url(/assets/images/home/award_card_s.svg)" }}
            >
              <div className="award-content">
                <p className="film-name">{item.film}</p>
                <p className="award-name">{item.award}</p>
                <p className="student-name">{item.student}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardStories;
