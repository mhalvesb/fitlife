export default function MyFooter(){
    return(
        <footer className="bg-black text-white paddinglayout text-center py-5 mt-20">
            <div className="flex justify-center items-center mb-4">
                <hr className="w-full mr-2"></hr>
                <div className="flex items-center w-max">
                    <img src="/images/capas/fitlifelogo.png" className="w-20 rounded-lg sm:w-25 md:w-30 lg:w-35 xl:w-40" alt="logo"/>
                </div>
                <hr className="w-full ml-2"></hr>
            </div>



              <p className="dosis text-xs sm:text-sm md:text-base lg:text-base">“As informações e sugestões contidas neste site têm caráter meramente informativo. 
                Elas não substituem o aconselhamento e acompanhamentos de médicos, nutricionistas, 
                psicólogos, profissionais de educação física e outros especialistas.”</p>

                <p className="mt-4 Poppins text-xs font-semibold sm:text-sm">FitLife - Todos os direitos reservados.</p>
         </footer>
    )
}