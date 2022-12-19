import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
// const myFont = localFont({ src: '../Inter-VariableFont_slnt,wght.ttf' })

export default function ImageToImageAi() {
  return (
      <>
        <Head>
          <title>Splashhh - Image to Image - Generative AI for creative flow</title>
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
              <h2>Image to Image</h2> <br />
              <p>
                The image to image feature is a function of a generative AI model that allows the user to input an image and generate a new image based on it. The model uses computer vision techniques to analyze the content of the input image, and then uses this information to generate a new image that is related to the input image in some way. This can be useful for a variety of applications, such as image editing and image style transfer. For example, the model could be used to add a specific filter or effect to an input image, or to transfer the style of one image to another. The quality and accuracy of the generated images will vary depending on the capabilities of the underlying AI model.
              </p>
            </div>

          </div>

          <div className={styles.center}>
            <Image
                src="/design-image-to-image.png"
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