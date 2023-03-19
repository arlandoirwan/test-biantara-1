import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from 'flowbite-react'
import Layout from '../widget/Layout'

import { useState } from 'react'

import { fetchApi } from '@/pages/api'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
export async function getServerSideProps() {
  let res = await fetch(`https://reqres.in/api/users`)
  let Produk = await res.json()
  return {
    props: {
      Produk,
    },
  }
}

export default function Home({ Produk }) {
  const [dataProduk, setDataProduct] = useState(Produk)

  const [like, setLike] = useState(5)
  const [dislike, setdislike] = useState(3)

  const [likeactive, setlikeactive] = useState(false)
  const [dislikeactive, setdislikeactive] = useState(false)

  function likef() {
    if (likeactive) {
      setlikeactive(false)
      setLike(like - 1)
    } else {
      setlikeactive(true)
      setLike(like + 1)
      if (dislikeactive) {
        setdislikeactive(false)
        setLike(like + 1)
      }
    }
  }
  function dislikef() {
    if (dislikeactive) {
      setdislikeactive(false)
      setdislike(like - 1)
    } else {
      setdislikeactive(true)
      setdislike(like + 1)
      if (likeactive) {
        setlikeactive(false)
        setdislike(dislike + 1)
      }
    }
  }

  const { isError, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchApi,
  })

  if (isError) {
    return <p>ini error</p>
  }
  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <>
      <Layout>
        <div className="flex flex-wrap gap-10 justify-center lg:justify-center items-center p-5">
          {dataProduk?.data.length > 0 &&
            dataProduk?.data.map((res) => {
              return (
                <>
                  <div
                    className="relative border border-gray-100 "
                    style={{ width: '300px' }}
                  >
                    <div className="relative object-cover w-full ">
                      <Image
                        src={res.avatar}
                        alt=""
                        sizes="(max-width: 768px)200vw, (max-width: 1200px)100vw,33vw"
                        width={300}
                        height={300}
                        quality={80}
                      />
                    </div>
                    {/* <img className="object-cover w-full h-56 lg:h-72" src={data.image_url} alt="Build Your Own Drone" loading="lazy" /> */}
                    <div className="p-6">
                      <h5 className="mt-4 ">First Name : {res.first_name} </h5>
                      <h5 className="mt-4 ">Last Name : {res.last_name} </h5>
                      <h5 className="mt-4 ">Email : {res.email} </h5>

                      <button
                        onClick={likef}
                        className="block w-full p-4 mt-5 text-sm font-medium text-white bg-blue-500 border rounded-sm"
                        type="button"
                      >
                        like: {like}
                      </button>

                      <button
                        onClick={dislikef}
                        className="block w-full p-4 mt-5 text-sm font-medium text-white bg-red-500 border rounded-sm"
                        type="button"
                      >
                        dislike : {dislike}
                      </button>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
      </Layout>
    </>
  )
}
