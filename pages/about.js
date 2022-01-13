import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>Spencer Wong | About me</title>
        </Head>
        <h1>About Me</h1>
        <p>I am Spencer Wong and I graduated from San Jose State University in May 2020. I am based out of the San Francisco Bay Area, and I am currently purusing a full-time software engineering position.</p>
          <a href="https://github.com/spencerwrong"><AiFillGithub size="3rem"/></a>
          <a href="https://linkedin.com/in/spencerwrong"><AiFillLinkedin size="3rem"/></a>

    </Layout>
    </>
  )
}
