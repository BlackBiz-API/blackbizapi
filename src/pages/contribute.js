import React from "react";
import Loader from "@/components/Loader/Loader";
import Airtable from "@/page-components/Contribute/Airtable";
import Head from "next/head";

function contribute() {
    return (
        <div className="contribute">
        <Head>
            <title>Contribute to the API</title>
        </Head>
        <Loader/>
        <Airtable/>
        </div>
    );
}

export default contribute;