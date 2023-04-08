import Link from "next/link";
import React from "react";

export default function Custom404() {
    return (
        <section>
        <div className="error404">
				<div className="container">
                    <div className='row'>
					<div className="error-wrap justify-center text-center">
						<h2>404 Error</h2>
						<b>Page not found, but at least you found your sense of humor.</b>
						<p>Return to the <Link href={"/"} title="Homepage">Homepage</Link> and try again</p>
					</div>
                    </div>
				</div>
        </div>
        </section>
    );
}