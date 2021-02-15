import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'


export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Notes App</title>
      </Head>
      <Navbar />     
      { children }
    </div>
  )
}
