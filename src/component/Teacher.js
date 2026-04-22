function Teacher(props){
    return(
        <div ref={props.teacher} style={props.style} className="teacher">
            <div>
                <img src = {props.teacherImg} alt= {props.alt} />
                <div>
                    <p className="teacher-name">{props.teacherName}</p>
                    <p className="job">{props.job}</p>
                </div>
            </div>
            <p className="contant">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis </p>
        </div>
    )
}
export default Teacher