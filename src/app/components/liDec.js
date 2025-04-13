export default function MyLi({name, number}){
    return(
        <li className="my-1 text-xs sm:text-sm md:text-base xl:text-lg">
            {number}.<span className="font-bold"> {name}</span>
        </li>
    )
}