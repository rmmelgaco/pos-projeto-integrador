import {useNavigate} from "react-router-dom";
import {CardProductProps} from "./types.ts";

export default function CardProduct({product}: CardProductProps) {

    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/products/details')}
                className='shadow-md rounded-md p-10 flex flex-col justify-center items-center bg-white m-2'>
            <h1 className='text-center'>{product.name}</h1>
            <img src={product.url1} className='w-[100px] mt-2' alt='Imagem do produto'/>
            <p className='w-full mt-3'>{product.manufacturer}</p>
            <p className='w-full text-[25px]'>R$ {product.price}</p>
        </button>
    )
}