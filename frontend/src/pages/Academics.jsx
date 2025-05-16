import { NavLink } from "react-router-dom";
import "./Academics.css"
import { FaArrowRight } from "react-icons/fa";

 export const Academics = () => {
    return (
        <>

        <div className="heading-image">
            <div className="img-dialogue">
                <div className="dialogue">
            <h2>
                Diploma Studies
            </h2>

            <p>
                 We are delighted to welcome you to the Government Polytechnic College
                  Manikpur family. This is the beginning of an exciting journey
                  where you will gain valuable technical knowledge, 
                  develop practical skills, and build lifelong friendships.
                 
                   Together, let's make your time here rewarding, inspiring, and transformative.
            </p>
            </div>
            <div className="svg-container">
                <img src="study_svg.webp" alt="svg image" />
            </div>
        </div>
        <div className="image-and-some-dialogue">
            <div className="img"><img src="coolege_students.png" alt="college-students" /></div>
            <div className="details-two-cols">
                <div className="first-cols">
                    <p>Choose from more than 110 majors, concentrations and tracks.
                         Don't worry if you haven't chosen a major yet—core courses and electives
                          will help you find the one that's right for you.
                     </p>
                     <h3>A Personal Experience</h3>
                     <p>Govt Polytechnic Manikpur professors focus on experiential learning that will help you
                         connect your education to the real world. Find your mentor and create a network
                          of faculty and staff that will help you make your dreams a reality. You'll 
                          also receive guidance from our award-winning advising program in selecting a major or
                           integrating internships, 
                        study abroad and research into your studies.</p>
                         <section className="register-now">
                <div className="register-container">
                    <button style={{width:'10rem'}}>
                       <NavLink to='/admissions' style={{color:'#000'}}>Register Now</NavLink>
                    </button>
                </div>
            </section>
                </div>
                <div className="second-cols">
                    <div className="first-box box">
                        <div className="heading">
                            <h1>Diploma Studies</h1>
                        </div>
                        <ul>
                            <li>Mechanical Engineering</li>
                            <li>Electrical Engineering</li>
                            <li>Civil Engineering</li>
                            <li>Information Technology</li>
                        </ul>
                    </div>

                    <div className="second-box box">
                        <div className="heading-second">
                            <h1>Research</h1>
                        </div>
                        <p>Make a real-world difference in your community.Regardless of you area of study, Govt Polytechnic fosters multidisciplinary research that breaks new ground, complements current knowledge and leads to superior teaching</p>
                       <div className="explore">
                        <div className="another-div">
                        <h3>Explore opportunities </h3>
                         <span><FaArrowRight/></span>
                        </div>
                      
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
 }