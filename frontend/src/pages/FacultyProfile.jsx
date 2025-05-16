import { Link, useNavigate, useParams } from "react-router-dom";
import faculty from '../API/faculty.json';
import './FacultyProfile.css'

export const FacultyProfile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const facultyMember = faculty.find((fac) => fac.slug === slug);

  const GoHome = () => {
    navigate('/home');
  };

  function GoBack() {
    navigate(-1);
  }

  if (!facultyMember) {
    return (
      <>
        <h3>We do not have such Faculty</h3>
        <div className="button-container">
          <button onClick={GoHome}>Go Home</button>
          <button onClick={GoBack}>Go Back</button>
        </div>
      </>
    );
  }

  return (
    <div className="faculty-profile-container">
      <div className="register-container">
        <h1>{`${facultyMember.name}'s Profile`}</h1>
      </div>

      <div className="faculty-image-at-profile">
        <img src={`/${facultyMember.img_url}`} alt={facultyMember.name} />
      </div>
     <div className="details-faculty-paragraph">
      <p><strong>Qualification:</strong> {facultyMember.qualification}</p>
      <p><strong>Experience:</strong> {facultyMember.experience}</p>
      <p><strong>Email:</strong> {facultyMember.email}</p>
      <p><strong>Role:</strong> {facultyMember.role}</p>
      </div>
      <p className="about-para">{facultyMember.about}</p>

      <div className="other-faculty-links ">
        <div className="heading">
          <h1>Other Faculty</h1>
        </div>
        <ul>
          <li><Link to={'/faculty/mrs-preeti-pandey'}>Mrs. Preeti Pandey</Link></li>
          <li><Link to={'/faculty/miss-prachi-singh'}>Miss Prachi Singh</Link></li>
          <li><Link to={'/faculty/miss-sapna-yadav'}>Miss Sapna Yadav</Link></li>
          <li><Link to={'/faculty/mr-navin-verma'}>Mr. Naveen Verma</Link></li>
          <li><Link to={'/faculty/miss-shagufta-parveen'}>Miss Shagufta Parveen</Link></li>
        </ul>
      </div>
    </div>
  );
};
