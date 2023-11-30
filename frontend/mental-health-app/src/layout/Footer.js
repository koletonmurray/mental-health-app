import React from "react";

function Footer(){

    return(
        <div>
            <footer className={`bg-darkgreen text-md text-white text-center py-2 h-[100px] justify-center items-center font-serif`}>
                <h1 className="pt-2"> </h1>
                <h1 className=""><b>Liahona Lifts</b> &copy; {new Date().getFullYear()}</h1>
                <h1 className="py-1">Created by: Dalyn Baldwin, Spencer Cable, Rylan Dunning, Koleton Murray, Carter Walch</h1>
            </footer>
        </div>
    )

}

export default Footer;