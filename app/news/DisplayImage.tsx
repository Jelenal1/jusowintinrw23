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
        <img src={Url} alt="" className="object-contain w-full h-80" />
    );
}