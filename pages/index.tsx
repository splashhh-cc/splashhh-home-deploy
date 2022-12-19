import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './Inter-VariableFont_slnt,wght.ttf' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Splashhh - Generative AI for creative flow</title>
        <meta name="description" content="Genrative art using ML and AI models" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Splashhh - Generative <code className={styles.code}>AI</code> for image creation
          </p>
          <div>
              Coming soon
              {/*<Image*/}
              {/*  src="/vercel.svg"*/}
              {/*  alt="Vercel Logo"*/}
              {/*  className={styles.vercelLogo}*/}
              {/*  width={100}*/}
              {/*  height={24}*/}
              {/*  priority*/}
              {/*/>*/}
          </div>
        </div>

        <div className={styles.grid}>
          <Link
              href="/text-to-image-ai"
              className={styles.card}
              // target="_blank"
              // rel="noopener noreferrer"
          >
            <h2 className={myFont.className}>
              Text to Image
            </h2>
            <p className={myFont.className}>
              The text to image feature is a function of a generative AI model that allows the user to input text and generate an image based on the contents of the text. The model uses natural language processing (NLP) techniques to understand the meaning and content of the text, and then uses this information to generate an image that is relevant to the text. This can be useful for a variety of applications, such as creating visual summaries of text documents or generating images for social media posts.
            </p>
          </Link>

          <Link
              href="/image-to-image-ai"
              className={styles.card}
              // target="_blank"
              // rel="noopener noreferrer"
          >
            <h2 className={myFont.className}>
              Image to Image
            </h2>
            <p className={myFont.className}>
              The image to image feature is a function of a generative AI model that allows the user to input an image and generate a new image based on it. The model uses computer vision techniques to analyze the content of the input image, and then uses this information to generate a new image that is related to the input image in some way. This can be useful for a variety of applications, such as image editing and image style transfer. For example, the model could be used to add a specific filter or effect to an input image, or to transfer the style of one image to another. The quality and accuracy of the generated images will vary depending on the capabilities of the underlying AI model.
            </p>
          </Link>

          <Link
              href="/auto-color-ai"
              className={styles.card}
              // target="_blank"
              // rel="noopener noreferrer"
          >
            <h2 className={myFont.className}>
              Auto color
            </h2>
            <p className={myFont.className}>
              The auto-color using generative AI feature is a function of a generative AI model that allows the user to automatically colorize an image, with a particular focus on coloring comics. The model uses advanced computer vision techniques to analyze the input image and determine the appropriate colors for different objects or regions in the image. It then applies these colors to the image to create a colorized version, with a particular emphasis on achieving a stylized, comic book-like appearance. This can be useful for a variety of applications, such as restoring old black and white comic strips or adding color to monochrome comics.
            </p>
          </Link>

          {/*<a*/}
          {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
          {/*    className={styles.card}*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  <h2 className={myFont.className}>*/}
          {/*    Deploy <span>-&gt;</span>*/}
          {/*  </h2>*/}
          {/*  <p className={myFont.className}>*/}
          {/*    Instantly deploy your Next.js site to a shareable URL*/}
          {/*    with&nbsp;Vercel.*/}
          {/*  </p>*/}
          {/*</a>*/}
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo_transparent.png"
            alt="splashhh Logo"
            width={280}
            height={280}
            priority
          />
          <div className={styles.thirteen}>
            {/*<Image*/}
            {/*  src="/thirteen.svg"*/}
            {/*  alt="13"*/}
            {/*  width={40}*/}
            {/*  height={31}*/}
            {/*  priority*/}
            {/*/>*/}
            <h2>alpha</h2>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            src="/design-examples.png"
            alt="splashhh design"
            className={styles.vercelLogo}
            width={828}
            height={537}
            // fill
            // priority

            // fill
            // sizes="(max-width: 768px) 100vw,
            //   (max-width: 1200px) 50vw,
            //   33vw"
          />
        </div>


      </main>
    </>
  )
}
