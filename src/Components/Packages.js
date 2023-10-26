
export default function Packages(props) {
    
    return (
        <div className="container card mt-2">
            <img src={props.imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <h6 className="card-title mb-2">Package : {props.package}</h6>
                <div className="d-flex justify-content-between align-items-center">
                <h4 className="card-title">&#8377; {props.price}</h4>
                <button className="btn btn-color">Book Now</button>
                </div>
            </div>
        </div>
     
    );
}
