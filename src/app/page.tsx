import Image from 'next/image'
import data from '../../data.json'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Head from 'next/head';

function Icon({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a
      className='flex items-center justify-center w-full text-3xl text-gray-100 shadow-md hover:shadow-lg hover:scale-105 active:scale-100'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}


function LinkCard({ title, href, image }: { title: string, href: string, image?: string }) {
  return (
    <a
      className='flex w-full bg-gray-100 max-w-3xl text-gray-700 items-center justify-between transition-all duration-300 border
        p-2 space-y-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 active:scale-100'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div>
        {image && <Image className=' rounded-sm'
          src={image}
          alt={title}
          width={24}
          height={24}
        />}
      </div>
      <h2 className=' font-medium text-lg'>{title}</h2>
      <div></div>
    </a>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Aristos&lsquo;  Linktree</title>
        <meta name='description' content="Aristos Xanthus&lsquo; custom linktree." key='desc' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='Aristos&lsquo; Linktree' key='title' />
        <meta property='og:description' content="Aristos Xanthus&lsquo; custom linktree." key='ogdesc' />
      </Head>
      <main className="flex flex-col  my-10 mx-8 space-y-8 items-center" >
        <header className=' space-y-5 flex flex-col items-center '>
          <Image
            className='rounded-full'
            src={data.avatar}
            alt={data.name}
            width={96}
            height={96}
          />
          <h1 className='font-semibold text-xl'>@{data.name}</h1>
        </header>
        <article className='space-y-5 w-full flex flex-col items-center'>
          {data.links.map((link) => <LinkCard key={link.title} {...link} />)}
        </article>
        <article>
          <div className='flex space-x-3'>
            <Icon href={data.socials[0].href}>
              <BsTwitterX />
            </Icon>
            <Icon href={data.socials[1].href}>
              <FaGithub />
            </Icon>
            <Icon href={data.socials[2].href}>
              <FaLinkedin />
            </Icon>
          </div>
        </article>
      </main>
    </>
  )
}


