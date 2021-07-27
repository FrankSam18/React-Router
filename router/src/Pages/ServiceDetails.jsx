import React from 'react';

const ServiceDetails = (props) => {
    return (
        <div>
            <h1> Service Details:{props.match.params.id} </h1>
            <p>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quia quam voluptatum totam, consequuntur tenetur quis asperiores dolores?</h3>
            </p>
        </div>
    );
}

export default ServiceDetails;
