'use client'

import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";
import { useEffect, useState } from "react";


export default function DisplayImage({ imagename }: { imagename: string }) {
    const [Url, setUrl] = useState<string>("");

    async function getImageURL() {
        const response = await getDownloadURL(
            ref(storage, `blog/${imagename}`)
        );
        setUrl(response);
        return response;
    }

    useEffect(() => {
        getImageURL();
    }, []);


    return (
        <div className="h-96 aspect-square">
            <img src={Url} alt="" className="object-cover w-full h-full" />
        </div>
    );
}