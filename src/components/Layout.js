import React from 'react'
import Helmet from 'react-helmet'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import './styles.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />

        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Martel:400,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Alegreya:400,700&display=swap" rel="stylesheet"/>

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
