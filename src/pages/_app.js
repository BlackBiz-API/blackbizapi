import React from "react";
import Head from 'next/head'
import '@/styles/globals.css'
import config from '../../config/config.json'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {

  const { title, description, favicon } = config.site;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
        <meta name="keywords" content="black-owned businesses, API, directory, consumer, developer, support"/>
        <meta name="author" content="Uthman Olomide"></meta>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </>
  )
}
