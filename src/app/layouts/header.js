"use client"

import HeaderButtons from "../components/headerbuttons";
import {useState} from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";

export default function MyHeader(){
    const router = useRouter();
    const [showInput, setShowInput] = useState();
    const [showNavs, setShowNavs] = useState(false);
      const HandleInputSearch = () =>{
        if (showInput){
          setShowInput(false);
          console.log("false");
        } else{
          setShowInput(true);
          console.log("true");
        }
    }

    const showNavigation = () =>{
      if(showNavs){
        setShowNavs(false);
      } else{
        setShowNavs(true);
      }
    } 

    const goToMainPage = () =>{
      router.push("/");
    }

    

     

    return(
        <header className=" flex flex-col Poppins bg-color-white headerShadow relative z-10">
                        <section className="flex justify-center h-20 paddinglayout py-4 items-center relative sm:justify-between" >
                          <div className="flex cursor-pointer justify-self-center w-max h-max items-center sm:relative" onClick={() => goToMainPage()}>
                              <img src="/images/capas/fitlifelogo.png" alt="logotipo" className="w-7  sm:w-7 md:w-7 lg:w-8 xl:w-10 mr-2 h-full rounded-lg"/>
                              <h1 className="text-base md:text-2xl lg:text-3xl xl:text-4xl dosis">FitLife</h1>
                          </div>
                          
                          <div className="flex justify-center items-center border-gray-500 h-14 absolute right-[10%] sm:static">
                            <div className="absolute right-0  sm:hidden" onClick={() => showNavigation()}>
                              <ul className="flex items-center justify-center flex-col gap-1">
                                <li className="h-1 w-6 bg-black"></li>
                                <li className="h-1 w-6 bg-black"></li>
                                <li className="h-1 w-6 bg-black"></li>
                              </ul>
                            </div>
                          <div className={`${showNavs ? "block" : "hidden"} sm:block flex flex-col items-start fixed top-0 right-0 z-50 w-screen h-screen bg-black text-white sm:bg-transparent sm:text-black sm:w-auto sm:h-auto sm:static`}>
                            <li className={`${showNavs ? "block" : "hidden"} sm:hidden text-white self-end mr-4 text-2xl mt-4`} onClick={() => showNavigation()}>X</li>
                            <a href="/categoria/alimentacao" className="text-lg sm:text-xs md:text-sm lg:text-base xl:text-lg my-2 sm:my-0 mx-2 md:mx-5 cursor-pointer 
                                  hover:border-b border-b-white hover:text-neutral-500 hover:border-b-black z-10 ">
                              Alimentação
                            </a>

                            <a href="/categoria/fitness" className="text-lg sm:text-xs md:text-sm lg:text-base xl:text-lg my-2 sm:my-0 mx-2 md:mx-5 cursor-pointer hover:border-b
                            border-b-white hover:text-neutral-500 hover:border-b-black z-10">
                              Fitness
                            </a>

                            <a href="/categoria/saude" className="text-lg sm:text-xs md:text-sm lg:text-base xl:text-lg my-2 sm:my-0 mx-2 cursor-pointer hover:border-b
                            border-b-white hover:text-neutral-500 hover:border-b-black z-10">
                              Saúde
                            </a>
                          </div>
                          </div>

                          <div className="flex items-center cursor-pointer hidden">
                              <div onClick={() => HandleInputSearch()} className={`flex items-center ${showInput ? "hidden" : "block"}`}>
                                <img src="/images/icons/lupaarredondada.png" alt="lupa" className="w-4 select-none"></img>
                                <h1 className="pl-2 select-none">Buscar</h1>
                              </div>
                              <input type="text" placeholder="Buscar" className={`${showInput ? "block" : "hidden"} bg-amber-50 text-black rounded-lg pl-2 outline-0 py-1`}/>
                          </div>

                        </section>
                        
                </header>
    )
}