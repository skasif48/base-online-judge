import { Card } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="text-style">
        <h1
          style={{
            fontSize: "2rem",
            textAlign: "center",
            textShadow: "1px 1px 1.5px #481a72",
          }}
        >
          About Base Online Judge
        </h1>
        <p
          className="text-center"
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            margin: "1.5rem 4rem",
          }}
        >
          This project entitled <b>“Base Online Judge”</b> is submitted to the
          Department of Computer Science & Engineering, Jahangirnagar University.
          
          It is an Interactive Online Judging Platform. 

          This project is developed by
        </p>
      </div>
    
        <div
      
          className="about-card"
        >
          <Card.Img
            variant="top"
            src="../assets/Photo.jpg"
            className="card-img-dev"
          />
            <Card.Body>
              <Card.Title
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                className="text-center"
              >
                Sheikh Asif Rahman
              </Card.Title>
            </Card.Body>
        </div>
       
    </div>
  );
};

export default About;
