export const ServiceCard = ({title, para, img}) => {
    
        console.log(img);
    return (
        <div className="col-12 col-md-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{para}</p>
                    <a href="#" className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
    )
}
