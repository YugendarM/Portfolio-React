import React from "react";

const Project = (props) => {
    return (
        <>
           <div class="project__card">
                <a href={props.link} class="project__link">
                    <div>
                        <div class="project__card__image">
                            <img src={props.img} alt="" class="project__image"/>
                        </div>
                        <div class="overlay">
                            <div class="project__card__contents">
                                <h2 class="project__name">{props.name}</h2>
                                <p class="project__desc">{props.description}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div> 
        </>
    );
};

export default Project;