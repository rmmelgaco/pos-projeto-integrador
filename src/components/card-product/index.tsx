import img_product from '../../assets/product.png';
import {useNavigate} from "react-router-dom";
import {Product} from "../../pages/home/types.ts";

interface CardProductProps {
    product?: Product
}

export default function CardProduct({product}: CardProductProps) {

    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/products/details')}
                className='shadow-md rounded-md p-10 flex flex-col justify-center items-center bg-white m-2'>
            <h1 className='text-center'>Nome do produto</h1>
            <img src={img_product} className='w-[100px] mt-2' alt='Imagem do produto'/>
            <p className='w-full mt-3'>Amazon</p>
            <p className='w-full text-[25px]'>R$ 799,99</p>
        </button>
    )
}