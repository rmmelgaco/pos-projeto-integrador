import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getApiAllProductsByName} from "./services.ts";
import {Product} from "../home/types.ts";
import ListLoading from "../../components/list-loading";

export default function SearchProducts() {

    const {productToSearch} = useParams()

    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [loadingAllProducts, setLoadingAllProducts] = useState<boolean>(true)

    async function getAllProductsByName() {
        try {
            setLoadingAllProducts(true)
            const response = await getApiAllProductsByName(productToSearch!)
            setAllProducts(response.data)
        } catch (error: any) {
            alert('Erro ao buscar produtos pelo nome - ' + error.message)
        }
        setLoadingAllProducts(false)
    }

    useEffect(() => {
        getAllProductsByName()
    }, [])

    return (
        <div>
            <UserTemplate>
                <h1>
                    Resultado da busca
                </h1>

                {loadingAllProducts && <ListLoading/>}
                <div className='grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                    {allProducts.map((product) => (
                        <CardProduct key={`recent-${product._id}`} product={product}/>
                    ))}
                </div>

                <p>Total: {allProducts.length} {allProducts.length > 1 ? 'itens' : 'item'}</p>
            </UserTemplate>
        </div>
    )
}