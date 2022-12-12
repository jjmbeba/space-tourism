import {Html, Head, Main, NextScript} from 'next/document'

import React from 'react'

function _document() {
  return (
    <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600;700&family=Bellefair&display=swap" rel="stylesheet"/>
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}

export default _document