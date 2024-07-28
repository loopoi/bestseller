"use client"
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Link from "next/link";
import {motion} from "framer-motion";

interface Book {
    rank: number;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    description: string;
    price: number;
    title: string;
    author: string;
    contributor: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    amazon_product_url: string;
    age_group: string;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
    article_chapter_link: string;
    isbns: ISBN[];
    buy_links: BuyLink[];
    book_uri: string;
}

export interface ISBN {
    isbn10: string;
    isbn13: string;
}

export interface BuyLink {
    name: string;
    url: string;
}

const Img = styled.img`
    width: 300px;
    height: 400px;
`;

const Button = styled(motion.button)`
    border: solid 5px hsl(0, 0%, 0%);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    padding:1em;
    line-height:1.5em;
`;


const btnVariants = {
    normal: {
        border: "2px solid",
        borderColor: "rgb(0, 0, 0, 1)",
    },
    hover: {
        y: 4,
    },
    tap: {
        borderColor: "rgb(150, 150, 150, 1)",
        transition: {
            duration: 0.1,
        }
    }
}


const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding-bottom: 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: #D1D5DB;
`;

function getRandomBorderRadius(){
    const blRadius = Math.floor(Math.random() * 50);
    const brRadius = Math.floor(Math.random() * 102);

    return `0px 0px ${blRadius}px ${brRadius}px / 0px 0px ${brRadius}px ${blRadius}px`
}

export default function BookListClient({datas}: {datas: Book[]}) {
    const [radiusList, setRadiusList] = useState<string[]>([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (!flag){
            const newRadiusList = datas.map(()=>getRandomBorderRadius());
            setRadiusList(newRadiusList);
            setFlag(true);
        }
    }, [datas]);

    return (
        <div className={"grid grid-cols-4 gap-10 m-10 p-10"}>
            {datas.map((data, index)=>(
                <Card key={data.rank} style={{ borderRadius: radiusList[index] }}>
                    <Img src={data.book_image} alt={data.description}/>
                    <div className={"w-11/12 mx-auto"}>
                        <p className={"text-lg font-bold my-3"}>{data.title}</p>
                        <p className={"text-sm text-blue-600 mb-4"}>{data.author}</p>
                        <Link href={data.amazon_product_url}>
                            <Button
                                className={"border-2 border-solid p-2"}
                                variants={btnVariants}
                                initial="normal"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Buy now &rarr;
                            </Button>
                        </Link>
                    </div>

                </Card>
                ))}
        </div>
    );
}