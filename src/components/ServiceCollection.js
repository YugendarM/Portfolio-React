import React from "react";
import Service from "./Service";

const ServiceCollection = () => {
    return (
        <>
            <section class="services__section">
                <div >
                    <h1 class="title">What I do,</h1>
                </div>
                <div class="service__cards__container">
                    <Service name={"Website Design"} description ={"We design attractive website designs for your business."} logo= {"fa-solid fa-wand-magic-sparkles"}/>
                    <Service name={"Website Development"} description ={"We Create user friendly website designs for your business."} logo= {"fa-solid fa-code"}/>
                    <Service name={"UI/UX Development"} description ={"We design better User Interface and User experience for your applications."} logo= {"fa-solid fa-wand-magic-sparkles"}/>
                </div>
            </section>

        </>
    );
};

export default ServiceCollection;