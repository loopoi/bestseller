import React from 'react';
import BookListClient from "@/components/BookListClient";

export async function getBestSellerList(list_name_encoded: string) {
    const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${list_name_encoded}`);
    return response.json();

}
export default async function BookList({list_name_encoded}: { list_name_encoded: string }) {
    const datas = await getBestSellerList(list_name_encoded)
    return <BookListClient datas={datas.results.books}/>;
}