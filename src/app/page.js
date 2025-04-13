"use client"

import Image from "next/image";
import MyHeader from "./layouts/header";
import {useState, useEffect} from "react";
import MyMain from "./layouts/main";
import MyFooter from "./layouts/footer";

export default function Home() {
  


  return (
    <div className="">
            <MyHeader/>
            <MyMain category="All"/>
            <MyFooter/>
    </div>
  );
}
