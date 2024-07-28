import React from 'react';
import BookListClient from "@/components/BookListClient";

async function getBestSellerList(list_name_encoded) {
    const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${list_name_encoded}`);
    const datas = await response.json();
    return datas.results.books;
}
export default async function BookList({list_name_encoded}: string) {
    const datas = await getBestSellerList(list_name_encoded)
    return <BookListClient datas={datas}/>;
}