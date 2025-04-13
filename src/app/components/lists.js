export default function Lists({listName, descriptionName, imageList, comoConsumir, beneficios}){
    const frases = comoConsumir.split(".");
    



    return(
        <div className={`my-4 py-2 xl:my-8 xl:py-10 flex xl:gap-10 items-start justify-start mb-4 flex-col postShadow px-8 rounded-lg`}>
                            <img src={imageList} className="w-full md:w-8/12 rounded-lg self-center" alt="listImage"/>
                        
                            <div className="ml-0 mt-4 w-full">
                                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">{listName}</h1>

                                <ul className="list-disc xl:pl-8">
                                    <h2 className="text-sm sm:text-base xl:text-xl font-bold mt-4">Descrição: </h2>
                                    <li className="text-xs sm:text-sm xl:text-lg text-neutral-700 font-bold py-2 dosis">
                                    {descriptionName}
                                    </li>
                                    <h2 className="text-sm sm:text-base xl:text-xl font-bold mt-4">Beneficios: </h2>
                                    <li className="text-xs sm:text-sm xl:text-lg text-neutral-700 font-bold py-2 dosis">
                                        {beneficios}
                                    </li>
                                    <h2 className="text-sm sm:text-base xl:text-xl font-bold mt-4">O que fazer: </h2>
                                    
                                    {frases.map((item, index) =>{
                                            return(
                                                item ? <li className="text-xs sm:text-sm xl:text-lg text-neutral-900 font-medium py-2 dosis" key={index}>{item.trim()}</li> : ""
                                            )
                                        })}
                                    
                                </ul>
                            </div>

        </div>
    )
}