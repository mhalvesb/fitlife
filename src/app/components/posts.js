"use client"


import {useRouter} from "next/navigation";


export default function Posts({imageName, categoryName, titleName, descriptionName, webAdd}){


    const router = useRouter();

    const HandleClickPost = (PostAdd) =>{
      if(PostAdd){
        router.push(PostAdd);
      }
      
    }
    return(
        <div className="w-[47%] mt-20 cursor-pointer" onClick={() => HandleClickPost(webAdd)}>
                  <img src="/images/capas/alimentos.jfif" alt="" className="w-[100%]  rounded-lg"/>
                  <p className="text-blue-700 py-1">{categoryName}</p>
                  <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold py-1 text-neutral-900">{titleName}</h1>
                  <p className="text-xs md:text-xs lg:text-sm xl:text-base font-normal py-1 text-neutral-800">
                    {descriptionName}
                  </p>
        </div>
    )
}