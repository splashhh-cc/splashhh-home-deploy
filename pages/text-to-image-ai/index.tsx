import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../Inter-VariableFont_slnt,wght.ttf' })

export default function TextToImageAi() {
  return (
      <>
        <Head>
          <title>Splashhh - Text to Image - Generative AI for creative flow</title>
          <meta name="description" content="Genrative art using ML and AI models" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <Link href="../" >
              {/*<Image*/}
              {/*  src="/vercel.svg"*/}
              {/*  alt="Vercel Logo"*/}
              {/*  className={styles.vercelLogo}*/}
              {/*  width={100}*/}
              {/*  height={24}*/}
              {/*  priority*/}
              {/*/>*/}
            <p>
              Splashhh - Generative <code className={styles.code}>AI</code> for image creation
            </p>
            </Link>
            <div>
              <Link
                  href="../"
              >
                Coming soon
              </Link>
            </div>
          </div>

          <div className={styles.center}>
            <div className={styles.card}>
              <h2>Text to Image</h2> <br />
              <p >The text to image feature is a function of a generative AI model that allows the user to input text and generate an image based on the contents of the text. The model uses natural language processing (NLP) techniques to understand the meaning and content of the text, and then uses this information to generate an image that is relevant to the text. This can be useful for a variety of applications, such as creating visual summaries of text documents or generating images for social media posts.</p>
            </div>

          </div>

          <div className={styles.center}>
            <img
                src="/design-text-to-image.png"
                alt="splashhh design"
                className={styles.image}
                width={761}
                height={887}
                // fill
                // priority
            />
          </div>


        </main>
      </>
  )
}