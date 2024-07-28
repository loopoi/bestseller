"use client"
import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import Link from "next/link";

const BookCard = styled(motion.button)`
    border: solid 5px hsl(0, 0%, 0%);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    padding:1em;
    line-height:1.5em;
`;

const cardVariants = {
    normal: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.59)",
        border: "2px solid",
        borderColor: "rgb(0, 0, 0, 1)",
    },
    hover: {
        y: 4,
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",

    },
    tap: {
        borderColor: "rgb(150, 150, 150, 1)",
        transition: {
            duration: 0.1,
        }
    }
}

export interface BestSellerList {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: string;
}

export default function BestSellerListClient({datas}: {datas:BestSellerList[]}) {
    return (
        <div className="flex flex-wrap gap-2">
            {datas.map(data => (
                <Link key={data.list_name_encoded} href={{
                    pathname: `/list/${data.list_name_encoded}`,
                    query: {title: data.display_name}
                }}>
                    <BookCard
                        key={data.list_name_encoded}
                        className="border-2 border-solid p-5 m-3"
                        initial="normal"
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        {data.display_name} &rarr;
                    </BookCard>
                </Link>

            ))}
        </div>
    );
}