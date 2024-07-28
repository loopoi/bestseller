import React, {Suspense} from 'react';
import BestSellerList from "@/components/BestSellerList";

export default function Page() {
    return (
        <>
            <div className="pt-16 w-9/12 mx-auto shadow-2xl p-4">
                <h1 className="text-black text-4xl p-4">About US</h1>
                <p className="p-4">
                    Welcome to the official explorer for The New York Times Best Seller list explorer.
                </p>
                <p className="p-4">
                    We hope you enjoy your stay!
                </p>
            </div>
        </>
    );
}