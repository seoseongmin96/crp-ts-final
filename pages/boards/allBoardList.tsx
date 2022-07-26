import React, {useEffect, useRef, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch } from '@/hooks'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { writeComment } from '@/modules/slices/boardSlce'
import axios from 'axios'
import { Article } from '@/modules/types'
//import { findComment } from '@/modules/apis/article'

export interface Props {
  list : InferGetServerSidePropsType<typeof getServerSideProps>
  
}

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",

}

const AllBoardListPage: NextPage<Props> = ({list} : Props) => {
  const [comment, setComment] = useState<Article>({comment: '', title: ''})
  const [commentList, setCommentList] = useState<Article> ({title: ''})


  
  return (
    <AllBoardList list = {list} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/articles/list`,{headers})
  const list = await response.data
  return {props: {list}
  }
}


export default AllBoardListPage