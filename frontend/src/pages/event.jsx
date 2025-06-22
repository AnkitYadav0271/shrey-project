import events from "./../API/events.json";


export const Event = () => {
    return (
        <>
            <div className="faculty-page-container flex justify-center items-center" style={{background:"#DF2531",maxWidth:"80%", minHeight:"80px", borderRadius:"20px" ,display:"flex",justifyContent:"center",alignItems:"center" ,margin:"auto", marginTop:"16px" ,padding:"10px"}}>
                <h1 style={{color:"#FFF" ,placeItems:"center"}}>Events at GPM</h1>
            </div>
            <div className="">
                <ul className="images-and-other-details faculty-detail-container">
                    {events?.map((curEvent) => (
                        <li key={curEvent.id} className="courses-img-container flex" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img src={curEvent.img_src} alt={curEvent.title} />
                            <h1>{curEvent.date}</h1>
                            <p>{curEvent.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
