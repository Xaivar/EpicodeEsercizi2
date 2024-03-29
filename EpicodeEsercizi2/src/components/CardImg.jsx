import React from "react";
import { Col } from "react-bootstrap";

const CardImg = ({movies}) => {

    return (
        <div className="display-flex">
            {movies.map((movie) => 
                <Col className="mb-2 px-1">
                    <img className="img-fluid" src={movie} alt="movie picture" />
                </Col>
            )}
        </div>
    );
}

export default CardImg;