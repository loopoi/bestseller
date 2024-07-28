import React from 'react';
import BestSellerListClient from "@/components/BestSellerListClient";

async function getBestSellerList() {
    const response = await fetch("https://books-api.nomadcoders.workers.dev/lists");
    const datas = await response.json();
    return datas.results;
}

export default async function BestSellerList() {
    const datas = await getBestSellerList();
    return <BestSellerListClient datas={datas}/>;
}