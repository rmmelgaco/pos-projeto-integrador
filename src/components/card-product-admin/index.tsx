import img_product from '../../assets/product.png';
import {useNavigate} from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

export default function CardProductAdmin() {

    const navigate = useNavigate()
    return (
        <button
            // onClick={() => navigate('/products/details')}
            className='shadow-md rounded-md p-6 flex flex-col justify-center items-center bg-white m-2'>
            <h1 className='text-center'>Nome do produto</h1>
            <img src={img_product} className='w-[100px] mt-2' alt='Imagem do produto'/>
            <div className='flex items-end flex-row'>
                <div>
                    <p className='w-full mt-3'>Amazon</p>
                    <p className='w-full text-[25px]'>R$ 799,99</p>
                </div>
                <div className='ml-2 flex flex-col gap-1'>
                    <button onClick={() => navigate('/form-product')}>
                        <AiOutlineEdit size={25}/>
                    </button>
                    <button>
                        <AiOutlineDelete size={25}/>
                    </button>
                </div>
            </div>
        </button>
    )
}