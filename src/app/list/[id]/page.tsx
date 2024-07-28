"use client"
import React from 'react';
import BookList from "@/components/BookList";
import {useSearchParams} from "next/navigation";


export default function Page({params: {id}}: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const title = searchParams.get('title')
    return (
        <div className="pt-16 w-11/12 mx-auto shadow-2xl al">
            <h1 className="text-black text-4xl text-center m-20">{title}</h1>
            <BookList list_name_encoded={id}/>
        </div>
    );
}