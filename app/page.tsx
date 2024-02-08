'use client'
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/footer";
import React, { Fragment, useState } from "react";
import NewsCard from "@/components/cards/newsCard";
import Nav from "@/components/nav/main";
import Link from "next/link";


export default function Home() {
  const [text, setText] = useState('')

  const news =  [
    {
      title: "Pitch termsheet backing validation focus release.",
      avatar : {
        name: 'Chandler Bing',
        image: '/img/avatar_female_1.png'
      },
      createdAt: 'November 22, 2021',
      bannerImage: '/img/card_image_01.png',
      category: 'Category'
    },
    {
      title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      avatar : {
        name: 'Rachel Green',
        image: '/img/avatar_female_2.png'
      },
      createdAt: 'November 22, 2021',
      bannerImage: '/img/card_image_02.png',
      category: 'Category'
    },
    {
      title: "Beta prototype sales iPad gen-z marketing network effects value proposition.",
      avatar : {
        name: 'Monica Geller',
        image: '/img/avatar_female_3.png'
      },
      createdAt: 'November 22, 2021',
      bannerImage: '/img/card_image_03.png',
      category: 'Category'
    },
    {
      title: "Pitch termsheet backing validation focus release.",
      avatar : {
        name: 'Chandler Bing',
        image: '/img/avatar_female_1.png'
      },
      createdAt: 'November 22, 2021',
      bannerImage: '/img/card_image_04.png',
      category: 'Category'
    },
    {
      title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      avatar : {
        name: 'Rachel Green',
        image: '/img/avatar_female_2.png'
      },
      createdAt: 'November 22, 2021',
      bannerImage: '/img/card_image_05.png',
      category: 'Category'
    },
    {
      title: "Beta prototype sales iPad gen-z marketing network effects value proposition.",
      avatar : {
        name: 'Monica Geller',
        image: '/img/avatar_female_3.png'
      },
      createdAt: 'November 22, 2021',
      bannerImage: '/img/card_image_06.png',
      category: 'Category'
    },
  ]
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {setText(e.target.value)}
  const onSubmit = (e: React.FormEvent) => { e.preventDefault()}
  return (
    <main className="flex min-h-screen flex-col">
      <Head>
        <meta 
          name='description' 
          content='Boldo'
        />
        <link rel="icon" href="/favicon.png" />

        <title key={"home"}>Boldo</title>
      </Head>
        <Nav />
        <section className="mb-6  md:mb-10 w-full">
            <div className="flex flex-col w-full gap-8 py-4 md:py-8 px-4 md:px-10 max-w-screen-xl m-auto">
               <p className="text-lg text-blue-850 text-center">Blog</p>
               <h1 className="text-4xl xs:text-5xl md:text-6xl text-blue-850 text-center">
                  Thoughts and words
               </h1>
               <div className="border-blue-850 border-b pb-10 md:pb-16">
               <NewsCard isBanner={true} />
               </div>
            </div>
        </section>
        <section className="max-w-screen-xl m-auto px-4 md:px-10">
          <div className="flex flex-col gap-8 py-10">
            <h3 className="text-4xl">Latest News</h3>
            <div className="flex flex-wrap max-w-screen-lg mx-auto gap-10 items-center justify-center">
              {
                news.map((item, index) => <Fragment key={index}><NewsCard news={item} containerClasses="w-[90vw] max-w-[300px]"/></Fragment>)
              }
            </div>
            <Link href="#" className={`text-base mt-10 font-semibold text-blue-850 mx-auto rounded-full border-2 border-blue-850 px-9 py-2`}>
                Load more
            </Link>          
          </div>
          <div>
          </div>
        </section>
        <section className="max-w-screen-xl w-full m-auto px-4 md:px-10">
          <div className='flex flex-col md:flex-row w-full my-12'>
             <div className='md:bg-[url("../public/svg/bg_hero.svg")] w-full rounded-3xl gap-12 pt-16 py-10 flex flex-col items-center'>
                <h5 className='text-white text-4xl max-w-xl leading-[3rem] text-center'>
                  An enterprise template to ramp up your company website
                </h5>
                <div >
                    <form onSubmit={onSubmit} className='mb-8 p-1 gap-4 justify-center flex-wrap  w-[80vw] flex max-w-lg mx-auto' >
                      <input 
                        placeholder='Your email address'
                        required={true}
                        value={text}
                        onChange={onChange}
                        type="email"
                        className="py-3 w-full border bg-transparent px-4 pl-8 bg-white placeholder-black max-w-xs placeholder-white rounded-full"
                        
                      />
                      <button type='submit' className='rounded-full px-9 py-2 bg-green-200 font-bold text-blue-850'>Start now</button>
                    </form>
                </div>
             </div>
          </div>
        </section>
        <Footer />
    </main>
  );
}
