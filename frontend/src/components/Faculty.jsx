import facultyImages from "../API/faculty.json"
import { FaArrowRight } from "react-icons/fa6";
import "./Faculty.css"
import { Link } from "react-router-dom";
export const Faculty = () => {
    return (
      <>
      <div className="faculty-container">
        <div className="introduction">
            <h1>People Behind Our excellence</h1>
        </div>
        <div className="faculty-detail-container">
            {
                facultyImages?.map((curFaculty)=> {
                    return (
                        <ul className="images-and-other-details" key={curFaculty.slug}>
                            <li key={curFaculty.id} className="courses-img-container">
                                <img src={curFaculty.img_url} alt={curFaculty.name} />
                                <h1>{curFaculty.name}</h1>
                                <p>Lecturer Electrical</p>
                                <p>Qualification:{curFaculty.qualification}</p>
                                <p>Email:{curFaculty.email}</p>
                            </li>

                            <div className="right-arrow">
                                <button className="arrow-btn">
                                    <Link to={`/faculty/${curFaculty.slug}`}>
                                    <FaArrowRight className="arrow" />
                                  </Link>
                                </button>
                            </div>
                        </ul>
                    );
                })
            }
        </div>
      </div>
      </>
    );
}