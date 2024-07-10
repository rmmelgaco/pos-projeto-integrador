import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";
import {LuGamepad2} from "react-icons/lu";
import {GiClothes} from "react-icons/gi";
import {AiFillCar, AiOutlineGift, AiOutlineSync} from "react-icons/ai";
import {FaTools} from "react-icons/fa";
import {IoFastFoodOutline, IoSearch} from "react-icons/io5";
import {Carousel} from 'react-responsive-carousel';

import {Link, useNavigate} from "react-router-dom";
import {getApiRecentProducts, getApiRecommendedProducts} from "./services.ts";
import {useEffect, useState} from "react";
import {Product} from "./types.ts";
import ListLoading from "../../components/list-loading";

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

export default function Home() {

    const navigate = useNavigate()

    const [recentProducts, setRecentProducts] = useState<Product[]>([])
    const [loadingRecentProducts, setLoadingRecentProducts] = useState<boolean>(true)
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([])
    const [loadingRecommendedProducts, setLoadingRecommendedProducts] = useState<boolean>(true)
    const [inputProductToSearch, setInputProductToSearch] = useState<string>('')

    async function getRecentProducts() {
        try {
            setLoadingRecentProducts(true)
            const response = await getApiRecentProducts()
            setRecentProducts(response.data)
        } catch (error: any) {
            alert(`Erro ao buscar produtos recentes - ${error.message}`)
        }
        setLoadingRecentProducts(false)
    }

    async function getRecommendedProducts() {
        try {
            setLoadingRecommendedProducts(true)
            const response = await getApiRecommendedProducts()
            setRecommendedProducts(response.data)
        } catch (error: any) {
            alert(`Erro ao buscar produtos recomendados - ${error.message}`)
        }
        setLoadingRecommendedProducts(false)
    }

    useEffect(() => {
        getRecentProducts()
    }, [])

    useEffect(() => {
        getRecommendedProducts()
    }, [])

    return (
        <UserTemplate>

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
                    <input className='flex-1 h-full p-3' placeholder='Estou buscando por...'
                           onChange={(e) => setInputProductToSearch(e.target.value)}
                    />
                    <button className='px-4' onClick={() => navigate(`/products/search/${inputProductToSearch}`)}>
                        <IoSearch size={30}/>
                    </button>
                </div>
            </div>

            <h2 className='mt-[50px]'>Itens recentes</h2>
            {loadingRecentProducts && <ListLoading/>}
            <div className='grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                {recentProducts.map((product) => (
                    <CardProduct key={`recent-${product._id}`} product={product}/>
                ))}
            </div>
            <Link to='/all-recent-products'>
                <p className='mt-4'>Ver todos os produtos recentes</p>
            </Link>

            <div className='bg-primary p-10 rounded-lg mt-[50px]'>
                <h2 className='text-white text-[20px] mb-5'>
                    Categorias
                </h2>
                <div className='flex justify-between px-[10%]'>
                    {itemsCategory.map((category, index) => (
                        <button key={index} onClick={() => navigate('/products/search')}
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
            {loadingRecommendedProducts && <ListLoading/>}
            <div className='grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                {recommendedProducts.map((product) => (
                    <CardProduct key={`recommended-${product._id}`} product={product}/>
                ))}
            </div>
            <Link to='/all-products'>
                <p className='mt-4'>Ver todos os produtos</p>
            </Link>
        </UserTemplate>
    )
}