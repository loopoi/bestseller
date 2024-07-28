import React, {Suspense} from 'react';
import BestSellerList from "@/components/BestSellerList";

export default function Page() {
    return (
        <>
            <div className="pt-16 w-9/12 mx-auto shadow-2xl">
                <h1 className="text-black text-4xl p-4">THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
                <Suspense fallback={<h1>Loading Best Seller List</h1>}>
                    <BestSellerList/>
                </Suspense>
            </div>
        </>

    );
}