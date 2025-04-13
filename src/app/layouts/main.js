"use client"

import Posts from "../components/posts";
import {useRouter} from "next/navigation";

import {useState, useEffect, useCallback} from "react";


export default function MyMain({category}){

    const slide = [
        {
            id: 1,
            image: "/images/capas/alimentosb.png",
            info: "A chave para um emagrecimento saudável e sustentável está na escolha dos alimentos certos, que aceleram o metabolismo, aumentam a saciedade e fornecem nutrientes essenciais para o corpo.",
            category: "ALIMENTOS",
            postAdd: "/alimentos/oitoalimentos"
        },
        {
            id: 2,
            image: "/images/capas/capagordura.jfif",
            info: "Cuidar do seu coração começa com as escolhas alimentares. Uma dieta rica em nutrientes específicos pode fortalecer o músculo cardíaco, melhorar a circulação e reduzir o risco de doenças cardiovasculares.",
            category: "SAÚDE",
            postAdd: "/saude/evitargorduranosangue"
        },
        {
            id: 3,
            image: "/images/capas/capaparaexercicio.jfif",
            info: "Incorporar exercícios físicos à rotina é fundamental para quem busca emagrecer de forma saudável e sustentável. As atividades apresentadas a seguir são reconhecidas por sua alta capacidade de queima calórica e por seus benefícios adicionais para o condicionamento físico geral.",
            category: "FITNESS",
            postAdd: "/fitness/exerciciosparaemagrecer"
        }
        
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const nextSlide = useCallback(() =>{
        console.log(currentIndex);
        setCurrentIndex((prev) => (prev === slide.length - 1 ? 0 : prev + 1));
        
    }, [slide, currentIndex]);

    const prevSlide = useCallback(()=>{
        setCurrentIndex((prev) => (prev === 0 ? slide.length - 1 : prev -1));
    })

    const goToSlide = (index) =>{
        setCurrentIndex(index);
    }

    useEffect(() =>{
        if (isPaused) return

        const interval = setInterval(() =>{
            nextSlide();
            console.log(currentIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide])

    const router = useRouter();

    const OnClickPost = (PostAddress) =>{
        router.push(PostAddress);
    }
    return(
       <div className="flex flex-col">
        <section className={`mt-10 ${category == "All" ? "block" : "hidden"}`}>
            <div className="h-[350px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[630px] flex flex-col items-center justify-center relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
               
                <img src={slide[currentIndex].image} className="object-cover absolute brightness-[35%] w-full h-full z-0"/>
                <div className="w-2/3 sm:w-1/2 text-center z-0 flex flex-col items-center justify-center">
                <p className="text-white text-[10px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl tracking-widest">{slide[currentIndex].category}</p>
                <h1 className=" text-[10px]  sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-semibold mt-8">{slide[currentIndex].info}</h1>
                <p className=" py-1 px-1 text-xs text-white sm:px-2 sm:py-1 sm:text-sm md:text-sm md:px-4 md:py-1 lg:text-base lg:py-2 bg-green-400 rounded-lg mt-10 font-semibold cursor-pointer" onClick={() => OnClickPost(slide[currentIndex].postAdd)}>Descubra mais</p>
                
                <ul className="zIndex flex gap-10 bottom-2 absolute">
                    <li onClick={() => goToSlide(0)} className={` ${currentIndex == 0 ? "text-green-500" : "text-white"} text-4xl sm:text-5xl md:text-8xl zIndex p-0 m-0 cursor-pointer`}>.</li>
                    <li onClick={() => goToSlide(1)} className={` ${currentIndex == 1 ? "text-green-500" : "text-white"} text-4xl sm:text-5xl md:text-8xl zIndex p-0 m-0 cursor-pointer`}>.</li>
                    <li onClick={() => goToSlide(2)} className={` ${currentIndex == 2 ? "text-green-500" : "text-white"} text-4xl sm:text-5xl md:text-8xl zIndex p-0 m-0 cursor-pointer`}>.</li>
                </ul>

                </div>
            </div>
        </section>
         <main className="paddinglayout flex justify-between flex-wrap pb-4">
                {category == "All" || category == "Alimentacao" ? <Posts categoryName="Alimentação" 
                titleName="8 Melhores alimentos para emagrecer" 
                descriptionName="Os melhores 
                alimentos para emagrecer consistem em alimentos de baixa caloria como, verduras, frutas, alimentos leves..."
                webAdd={"/alimentos/oitoalimentos"}
                />: ""
                }

                {category == "All" || category == "Saude" ? <Posts categoryName="Saúde" 
                titleName="Alimentos para o bom funcionamento do coração" 
                descriptionName="Alimentos 
                para o bom funcionamentos do coração consiste em alimentos de baixo sódio e de gorduras boas..."
                webAdd={"/alimentos/alimentosparacor"}
                /> : ""
                }

                {category == "All" || category == "Saude" ? <Posts categoryName="Saúde" 
                titleName="Como evitar gordura no sangue" 
                descriptionName="Venha conferir como
                diminuir a sua gordura no sangue e manter uma vida mais saúdavel..."
                webAdd={"/saude/evitargorduranosangue"}
                /> : ""
                }

                {category == "All" || category == "Fitness" ? <Posts categoryName="Fitness" 
                titleName="Melhores exercicios para emagrecer"
                descriptionName="Os exercicios de emagrecimentos consiste em exercicios aonde se costuma gastar bastante
                calorias...."
                webAdd={"/fitness/exerciciosparaemagrecer"}
                /> : ""
                }
        </main>
       </div>
    )
}