import AdminTemplate from "../../templates/admin-template";
import {Carousel} from "react-responsive-carousel";
import {IoFastFoodOutline, IoSearch} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {LuGamepad2} from "react-icons/lu";
import {GiClothes} from "react-icons/gi";
import {AiFillCar, AiOutlineGift, AiOutlineSync} from "react-icons/ai";
import {FaTools} from "react-icons/fa";

const itemsCategory = [
    {
        id: 0,
        title: 'Jogos',
        icon: <LuGamepad2 size={30} color='#555'/>,

    },
    {
        id: 1,
        title: 'Roupas',
        icon: <GiClothes size={30} color='#555'/>,
    },
    {
        id: 2,
        title: 'Veículos',
        icon: <AiFillCar size={30} color='#555'/>,
    },
    {
        id: 3,
        title: 'Ferramentas',
        icon: <FaTools size={30} color='#555'/>,
    },
    {
        id: 4,
        title: 'Comidas',
        icon: <IoFastFoodOutline size={30} color='#555'/>,
    },
    {
        id: 5,
        title: 'Presentes',
        icon: <AiOutlineGift size={30} color='#555'/>,
    },
    {
        id: 6,
        title: 'Outros',
        icon: <AiOutlineSync size={30} color='#555'/>
    }
]

export default function Dashboard() {

    const navigate = useNavigate()

    return (
        <AdminTemplate>
            <div className='max-w-[70%] self-center'>
                <Carousel showThumbs={false}>
                    <div>
                        <img src='https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/ZrEAAOSwxGJmcYwL/$_57.JPG'/>
                    </div>
                    <div>
                        <img src='https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/ZrEAAOSwxGJmcYwL/$_57.JPG'/>
                    </div>
                    <div>
                        <img src='https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/ZrEAAOSwxGJmcYwL/$_57.JPG'/>
                    </div>
                </Carousel>
                <div className='flex flex-row border-2 rounded-md h-[45px] items-center mt-10'>
                    <input className='flex-1 h-full p-3' placeholder='Estou buscando por...'/>
                    <button className='px-4' onClick={() => navigate('/products/search')}>
                        <IoSearch size={30}/>
                    </button>
                </div>
            </div>

            <h2 className='mt-[50px]'>Itens recentes</h2>
            <div className='grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2'>
                {/*<CardProduct/><CardProduct/><CardProduct/><CardProduct/>*/}
                {/*<CardProduct/><CardProduct/><CardProduct/><CardProduct/>*/}
            </div>
            <p className='mt-4'>Ver mais</p>

            <div className='bg-primary p-10 rounded-lg mt-[50px]'>
                <h2 className='text-white text-[20px] mb-5'>
                    Categorias
                </h2>
                <div className='flex justify-between px-[10%]'>
                    {itemsCategory.map((category) => (
                        <button onClick={() => navigate('/products/search')}
                                className='flex flex-col justify-center items-center'>
                            <div
                                className='bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>{category.icon}</div>
                            <p className='text-white mt-2'>{category.title}</p>
                        </button>
                    ))
                    }
                </div>
            </div>

            <h2 className='mt-[50px]'>Anúncios</h2>
            <div className='grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2'>
                {/*<CardProduct/><CardProduct/><CardProduct/><CardProduct/>*/}
                {/*<CardProduct/><CardProduct/><CardProduct/><CardProduct/>*/}
            </div>
            <p className='mt-4'>Ver mais</p>
        </AdminTemplate>
    )
}