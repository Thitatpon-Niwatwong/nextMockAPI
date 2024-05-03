"use client";

import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = (props: Props) => {
    const param = useParams<{id: string}>();
    const [dataById, setDataById] =  useState<IUser | null>(null);
    const getDataById = async () =>{
        const response = await axios.get(`https://663489fc9bb0df2359a1d17d.mockapi.io/api/v1/users/${param.id}`)
        setDataById(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getDataById();
      }, []);
  return (
    <>
     <div style={{margin: '10px'}}>
        <h2>Detail</h2>
        <label htmlFor="">First name: </label> {dataById?.first_name} <br />
        <label htmlFor="">Last name: </label> {dataById?.last_name} <br />
        <label htmlFor="">Phone number: </label> {dataById?.phone_number} <br />
        <label htmlFor="">Email: </label> {dataById?.email} <br />
     </div>
    </>
  )
}

export default page