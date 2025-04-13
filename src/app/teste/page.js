"use client"

import {useState, useEffect} from "react";
import MyHeader from "../layouts/header";
import Lists from "../components/lists";
import MyFooter from "../layouts/footer";
import MyLi from "../components/liDec";
export default function Teste({Titulo, TituloDesc, TituloIntroduc, TituloNum, listas, ListAlimentos, capa }){

    const [minhasListas,  definirMinhasListas] = useState([]);
    const [listasAlimentos, definirListasAlimentos] = useState([]);

    useEffect(() =>{
        if(listas){
            definirMinhasListas(listas);
        }
        if(ListAlimentos){
            definirListasAlimentos(ListAlimentos);
        }
    },[]);


    return(
        <div className="">
            <MyHeader/>
            <main className="paddinglayout pb-4 brancoSuave bg-[#f3f4f6] relative pt-4">
                <img src={capa} alt="banner" className="mb-4 xl:mb-6 aspect-video object-cover rounded-lg"/>
                <div className="flex flex-col">
                    <h1 className="text-base sm:text-base md:text-lg lg:text-2xl xl:text-4xl font-bold Poppins text-center">{Titulo}</h1>
                    <h1 className="mt-4 text-sm sm:text-base md:text-base xl:text-2xl font-bold Poppins xl:mt-10">
                        Introdução
                    </h1>
                    <p className="text-xs sm:text-sm mt-2 pb-0 lg:text-base xl:text-lg font-semibold xl:mt-4 xl:pb-10 text-neutral-700 dosis">{TituloDesc}
                        
                    </p>
                    <h1 className="text-base sm:text-base md:text-base xl:text-2xl font-bold Poppins mt-6">{TituloNum}</h1>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold mt-2 text-neutral-700 dosis">{TituloIntroduc}</p>
                    <ul className="sm:mt-4 xl:pl-2 xl:pb-10">
                        {Array.isArray(minhasListas) ? minhasListas.map((item, index) =>{
                            return(
                                <MyLi key={index} name={item.name} number={item.number}/>
                            )
                        }): ""}
                    </ul>
                    {Array.isArray(listasAlimentos) ? listasAlimentos?.map((item, index) =>{
                        return(
                            <Lists key={index} descriptionName={item.descriptionName} comoConsumir={item.comoConsumir} imageList={item.imageList} listName={item.listName} beneficios={item.beneficios}/>
                        )
                    }) : ""}
                </div>
                
                

            </main>
            <MyFooter/>
        </div>
    )
}