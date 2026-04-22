function Instructors(prop){
    return(
        <div className="instructors">
            <img src= {prop.img} alt= {prop.alt} />
            <p className="name">{prop.name}</p>
            <p className="job">{prop.job}</p>
            <p className="contant">{prop.contant}</p>
        </div>
    )
}

export default Instructors