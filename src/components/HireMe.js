import React from "react";

const HireMe = () => {
    return (
        <>
           <section class="hireMe__section" id="hireMe">
                <div>
                    <center>
                        <h1 class="title">Hire me,</h1>
                    </center>
                </div>
                <div class="hireMe__contents">
                    <input type="email" placeholder="Your email Address" class="email__input"/>
                    <textarea name="" id="" cols="30" rows="10" class="query__input" placeholder="Your queries.."></textarea>
                    <button class="hire__btn">Send Request</button>
                </div>
            </section>  
        </>
    );
};

export default HireMe;