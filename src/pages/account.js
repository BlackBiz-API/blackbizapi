import React from 'react';
import Head from "next/head";
import Account from "@/page-components/Account/Account";

function account() {
    return (
        <>
        <Head>
            <title>Get API Key</title>
        </Head>
        <Account/>
        </>
    );
}

export default account;