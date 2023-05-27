import React from "react";

const Service = (props) => {
    return(
    <>
        <div class="service__card">
            <div  class="service__logo">
                <i class={props.logo}></i>
            </div>
            <h2 class="service__title">{props.name}</h2>
            <p class="service__desc">{props.description}</p>
        </div>
    </>
    );
};

export default Service;