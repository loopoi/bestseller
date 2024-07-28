import React, {Suspense} from 'react';
import BookList from "@/components/BookList";


export default function Page({params: {id}, searchParams: {title}}: { params: { id: string }, searchParams:{title:string} }) {

    return (
        <div className="pt-16 w-11/12 mx-auto shadow-2xl al">
            <h1 className="text-black text-4xl text-center m-20">{title}</h1>
            <Suspense fallback={<h1>Loading Book List</h1>}>
                <BookList list_name_encoded={id}/>
            </Suspense>
        </div>
    );
}