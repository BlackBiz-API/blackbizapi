import React from "react";
import Link from "next/link";

function Hero() {
return (
    <section className="hero_tw">
        <div className="container">
            <div className="content">
                <div className="section_title">
                    <h1>Empower <br/> Black-Owned Businesses</h1>
                        <p>Get access to verified information on Black-owned businesses with our API. <br/>
                            Empower your projects, celebrate their success, and support their growth with just one API call.</p>
                </div>
                <Link href="/account" className="bg_btn">Get API Key</Link>
            </div>
        </div>
        <div className="shape_img">
            <img className="one" src="./assets/images/4.png" />
            <img className="two" src="./assets/images/5.png"/>
            <img className="three" src="./assets/images/3.png"/>
        </div>
    </section>
    );
}

export default Hero;