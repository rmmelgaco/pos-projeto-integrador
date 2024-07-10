import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";
import {getApiAllProducts, getApiAllProductsOrderedByPrice} from "./services.ts";
import {useEffect, useState} from "react";
import {Product} from "../home/types.ts";
import ListLoading from "../../components/list-loading";

export default function ListAllProducts() {

    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [loadingAllProducts, setLoadingAllProducts] = useState<boolean>(true)

    async function getAllProducts() {
        setAllProducts([])
        try {
            setLoadingAllProducts(true)
            const response = await getApiAllProducts()
            setAllProducts(response.data)
        } catch (error: any) {
            alert(`Erro ao buscar todos os produtos - ${error.message}`)
        }
        setLoadingAllProducts(false)
    }

    async function getAllProductsOrderedByPrice(orderType: "descending" | "ascending") {
        setAllProducts([])
        try {
            setLoadingAllProducts(true)
            const response = await getApiAllProductsOrderedByPrice(orderType)
            setAllProducts(response.data)
        } catch (error: any) {
            alert(`Erro ao buscar todos os produtos ordenados pelo preço - ${error.message}`)
        }
        setLoadingAllProducts(false)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            <UserTemplate>
                <h1>
                    Todos os produtos
                </h1>
                <div>
                    <p>
                        Ordenar por: <button
                        onClick={() => getAllProductsOrderedByPrice('ascending')}
                        className='text-primary'>Menor preço</button> |{' '}
                        <button
                            onClick={() => getAllProductsOrderedByPrice('descending')}
                            className='text-primary'>Maior preço
                        </button>
                    </p>
                </div>

                {loadingAllProducts && <ListLoading/>}
                <div className='grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                    {allProducts.map((product) => (
                        <CardProduct key={`recent-${product._id}`} product={product}/>
                    ))}
                </div>
            </UserTemplate>
        </div>
    )
}