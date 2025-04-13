"use client"

import MyFooter from "@/app/layouts/footer";
import MyHeader from "@/app/layouts/header";
import MyMain from "@/app/layouts/main";

export default function Saude(){
    return(
        <div>
            <MyHeader/>
            <MyMain category="Saude"/>
            <MyFooter/>


        </div>
    )
}