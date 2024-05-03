"use client";
import { IUser } from "@/types/IUser";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

function page({}: Props) {
  const [data, setData] = useState<IUser[]>([]);

  const getData = async () => {
    const response = await axios.get<IUser[]>(
      `https://663489fc9bb0df2359a1d17d.mockapi.io/api/v1/users`
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    {/* {data.map((d, index) => (
      <div key={index}>{d.first_name}</div>
    ))} */}
      <table>
        <tbody>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.phone_number}</td>
              <td>{item.email}</td>
              <td>
                <Link href={`/${item.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default page;
