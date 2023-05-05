import {useRouter} from "next/router";
import { useEffect } from "react";
import LeftBar from "./_/LeftBar";

export default function Anime() {
    const router = useRouter();
    useEffect(()=>{
        console.log(router.route)
    },[])
    return (
        <>
            <section className="grid grid-cols-6">
                <div className="col-span-1">
                    <LeftBar />
                </div>
                <div className="col-span-5">
                    in 
                </div>
            </section>
        </>
    )
}