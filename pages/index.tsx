import Head from 'next/head'
import Main from './components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zeektate | The Web Developer</title>
        <meta name="description" content="The Web devloper Sohail Khan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Main />
      </div>
    </>
  )
}
