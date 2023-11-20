import React from "react";

function Footer(){

    const primaryColor = 'bg-blue-500';

    return(
        <div>
            <footer className={`${primaryColor} text-lg text-white text-center py-2 h-[100px] justify-center items-center`}>
                <p className="pt-2"> </p>
                <p>&copy; {new Date().getFullYear()} The Missionary Mental Health App</p>
                <p className="py-1">Created by: Dalyn Baldwin, Spencer Cable, Rylan Dunning, Koleton Murray, Carter Walch</p>
            </footer>
        </div>
    )

}

export default Footer;