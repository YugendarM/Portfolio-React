import React from "react";

const Header = () => {
    return (
        <>
            <div class="header">
                <div class="header__content__container">
                    <div>
                        <h1 class="header__hello"><span>H</span><span>i</span><span>,</span></h1>
                        <h1 class="header__intro"><span>I</span><span>&nbsp;</span><span>a</span><span>m</span><span>&nbsp;</span><span class="name"><span class="name2">YUGENDAR</span></span></h1>
                        <h1 class="header__role"><span>W</span><span>e</span><span>b</span><span>&nbsp;</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></h1>
                    </div>
                </div>
                <div class="profile__container">
                    <img src="Frame 1 (2).jpg" class="profile__img" alt=""/>
                    <div class="vignette"></div>
                </div>
            </div>
        </>
    );
};
export default Header;