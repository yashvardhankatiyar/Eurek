import React from 'react';
import { useNavigate } from "react-router";
import { useContext } from "react";
import MyContext from "../../context/myContext";

const CompanyCard = () => {
    const navigate = useNavigate();
    const { getAllCompany } = useContext(MyContext);

    return (
        <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="row">
                {getAllCompany.map((item, index) => {
                    const { name } = item;
                    return (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card">
                                <img
                                    src="https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-Is-_Inc_-In-a-Company-Name_-.jpg"
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <button
                                        onClick={() => navigate(`/company/${item.id}`)}
                                        className="btn btn-primary"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CompanyCard;
