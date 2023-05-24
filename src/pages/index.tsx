import LeftBar from "./_/LeftBar";

export default function Anime() {
    
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