import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";
import {LuGamepad2} from "react-icons/lu";
import {GiClothes} from "react-icons/gi";
import {AiFillCar, AiOutlineSync} from "react-icons/ai";
import {FaTools} from "react-icons/fa";
import {IoFastFoodOutline, IoSearch} from "react-icons/io5";
import {Carousel} from 'react-responsive-carousel';

import carousel1 from '../../assets/carousel1.jpeg';

const itemsCategory = [
    {
        id: 0,
        title: 'Jogos',
        icon: <LuGamepad2/>,

    },
    {
        id: 1,
        title: 'Roupas',
        icon: <GiClothes/>,
    },
    {
        id: 2,
        title: 'Veículos',
        icon: <AiFillCar/>,
    },
    {
        id: 3,
        title: 'Ferramentas',
        icon: <FaTools/>,
    },
    {
        id: 4,
        title: 'Comidas',
        icon: <IoFastFoodOutline/>,
    },
    {
        id: 5,
        title: 'Outros',
        icon: <AiOutlineSync/>
    }
]

export default function Home() {
    return (
        <UserTemplate>

            <div>
                <Carousel showThumbs={false}>
                    <div>
                        <img src={carousel1}/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={carousel1}/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={carousel1}/>
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>

            <div className='flex flex-row border-2 rouded-md h-[45px] items-center mt-2'>
                <input className='flex-1 h-full p-3' placeholder='Estou buscando por...'/>
                <IoSearch size={30}/>
            </div>

            <h2 className='mt-[50px]'>Itens recentes</h2>
            <div className='flex flex-wrap'>
                <CardProduct/><CardProduct/><CardProduct/><CardProduct/>
            </div>
            <p className='mt-4'>Ver mais</p>

            <div className='bg-primary p-10 rounded-md mt-[50px]'>
                <h2 className='text-white text-[20px] mb-5'>
                    Categorias
                </h2>
                <div className='flex justify-between px-[10%]'>
                    {itemsCategory.map((category) => (
                        <div className='flex flex-col justify-center items-center'>
                            <div
                                className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center'>{category.icon}</div>
                            <p className='text-white'>{category.title}</p>
                        </div>
                    ))
                    }
                </div>
            </div>

            <h2 className='mt-[50px]'>Anúncios</h2>
            <div className='flex flex-wrap'>
                <CardProduct/><CardProduct/><CardProduct/><CardProduct/>
            </div>
            <p className='mt-4'>Ver mais</p>
        </UserTemplate>
    )
}