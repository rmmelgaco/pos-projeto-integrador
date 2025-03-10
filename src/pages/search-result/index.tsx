import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getApiAllProductsByCategory, getApiAllProductsByName} from "./services.ts";
import {Product} from "../home/types.ts";
import ListLoading from "../../components/list-loading";
import {showErrorMessage} from "../../services/toastUtil.ts";

export default function SearchProducts() {

    const {productNameToSearch, category} = useParams()

    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [loadingAllProducts, setLoadingAllProducts] = useState<boolean>(true)

    async function getAllProductsByName() {
        if (productNameToSearch) {
            try {
                setLoadingAllProducts(true)
                const response = await getApiAllProductsByName(productNameToSearch!)
                setAllProducts(response.data)
            } catch (error: any) {
                showErrorMessage('Erro ao buscar produtos pelo nome', error)
            }
            setLoadingAllProducts(false)
        }
    }

    async function getAllProductsByCategory() {
        if (category) {
            try {
                setLoadingAllProducts(true)
                const response = await getApiAllProductsByCategory(category!)
                setAllProducts(response.data)
            } catch (error: any) {
                showErrorMessage('Erro ao buscar produtos pela categoria', error)
            }
            setLoadingAllProducts(false)
        }
    }

    useEffect(() => {
        getAllProductsByName()
        getAllProductsByCategory()
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

                <p>Total: {allProducts.length} {allProducts.length !== 1 ? 'itens' : 'item'}</p>
            </UserTemplate>
        </div>
    )
}