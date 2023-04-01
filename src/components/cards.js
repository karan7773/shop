import React from "react";

export default function Cards(props){
    const sale=props.detail.saleBadge
    const stars=props.detail.star
    const strick=props.detail.lineThroughPrice
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {sale && <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>Sale</div>}
                <img className="card-img-top" src={props.detail.img} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.detail.productName}</h5>
                        {stars && <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                    </div>
                        }
                        {strick && <span class="text-muted text-decoration-line-through">{strick}</span>}
                        {props.detail.productPrice}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{props.detail.productAction}</a></div>
                </div>
            </div>
        </div>
    )
}