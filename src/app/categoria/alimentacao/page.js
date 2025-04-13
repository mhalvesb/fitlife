import MyFooter from "@/app/layouts/footer";
import MyHeader from "@/app/layouts/header";
import MyMain from "@/app/layouts/main";


export default function Alimentacao(){
    return(
        <div>
            <MyHeader/>
            <MyMain category="Alimentacao"/>
            <MyFooter/>
        </div>
    )
}