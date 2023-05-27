import React from "react";
import Project from "./Project";

const ProjectsCollection = () => {
    return (
        <>
            <section class="project__section">
            <div class="projects__title">
                <h1 class="title">Projects</h1>
            </div>
            <div class="projects__container">
                <Project name={"Instagram Clone"} description={"Home page of Instagram"} link={"https://9ib5lk.csb.app/"} img={"https://i.insider.com/615781510037100018433e8e?width=700" }/>
                <Project name={"Zomato Website"} description={"Home page of Zomato"} link={""} img={"https://www.talkwalker.com/images/2020/zomato-lp.jpg" }/>
                <Project name={"HaveSum Cakes"} description={"A website for Cake shop"} link={"https://ojn3fs.csb.app/"} img={"cakes.png" }/>
            </div>
        </section>
        </>
    );
};

export default ProjectsCollection;
