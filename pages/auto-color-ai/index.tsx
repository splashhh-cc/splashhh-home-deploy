import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../Inter-VariableFont_slnt,wght.ttf' })

export default function AutoColorAi() {
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
              <h2>Auto Color</h2> <br />
              <p>
                The auto-color using generative AI feature is a function of a generative AI model that allows the user to automatically colorize an image, with a particular focus on coloring comics. The model uses advanced computer vision techniques to analyze the input image and determine the appropriate colors for different objects or regions in the image. It then applies these colors to the image to create a colorized version, with a particular emphasis on achieving a stylized, comic book-like appearance. This can be useful for a variety of applications, such as restoring old black and white comic strips or adding color to monochrome comics.
              </p>
            </div>

          </div>

          <div className={styles.center}>
            <Image
                src="/design-auto-color.png"
                alt="splashhh design"
                className={styles.vercelLogo}
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