import { FaArrowRight } from "react-icons/fa6";
export const Article = ({props})=> {
   
    return (
        <li key={props.id} className={props.id % 2 ===0 ? "even-side" : "odd-side" }>
            <img src={props.img_url} alt="content-img" className="content-image" />
            <div className="article-sub-details">
                <h1>
                    {
                     props.title
                    }
                </h1>
                
                <p>
                    {
                        props.content
                    }
                </p>
                <div className="right-arrow">
                         <button className="arrow-btn"> <a href="">  <FaArrowRight className="arrow"/> </a></button>
                        </div>
            </div>
        </li>
    );
}