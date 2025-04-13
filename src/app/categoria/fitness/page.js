import MyFooter from "@/app/layouts/footer";
import MyHeader from "@/app/layouts/header";
import MyMain from "@/app/layouts/main";

export default function Fitness(){
    return(
        <div>
            <MyHeader/>
            <MyMain category="Fitness"/>
            <MyFooter/>
        </div>
    )
}