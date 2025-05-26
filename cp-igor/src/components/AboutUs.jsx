import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-us-page">

      <div className="about-us-content">

        <div className="about-us-text">
          <h1 className="page-title">EHB STUDENTS</h1>

          <p className="about-paragraph">
            EHB-studenten Front-End Development werken dit semester
            met React aan een parallax website rond het thema sprookjes.
            Ze combineren techniek en creativiteit om een interactieve webervaring te creëren met diepte-effecten en animaties.
            Zo leren ze React-componenten, state management en visuele effecten toepassen om hun sprookjeswereld tot leven te brengen.
          </p>

          <div className="about-button">
            <Link to="/">
              <button className="all-projects-button">ALL PROJECTS</button>
            </Link>
          </div>
        </div>

        <div className="image-collage">
          <img src="./images/au1.png" alt="Project 1" className="collage-img img1" />
          <img src="./images/au2.png" alt="Project 2" className="collage-img img2" />
          <img src="./images/au3.png" alt="Project 3" className="collage-img img3" />
          <img src="./images/au4.png" alt="Project 4" className="collage-img img4" />
          <img src="./images/au5.png" alt="Project 5" className="collage-img img5" />
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
