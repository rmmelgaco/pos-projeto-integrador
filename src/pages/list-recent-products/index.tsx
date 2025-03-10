import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";
import {getApiAllRecentProducts} from "./services.ts";
import {useEffect, useState} from "react";
import {Product} from "../home/types.ts";
import ListLoading from "../../components/list-loading";
import {showErrorMessage} from "../../services/toastUtil.ts";

export default function ListAllRecentProducts() {

    const [allRecentProducts, setAllRecentProducts] = useState<Product[]>([])
    const [loadingRecentProducts, setLoadingRecentProducts] = useState<boolean>(true)

    async function getAllRecentProducts() {
        try {
            setLoadingRecentProducts(true)
            const response = await getApiAllRecentProducts()
            setAllRecentProducts(response.data)
        } catch (error: any) {
            showErrorMessage('Erro ao buscar todos os produtos recentes', error)
        }
        setLoadingRecentProducts(false)
    }

    useEffect(() => {
        getAllRecentProducts()
    }, [])

    return (
        <div>
            <UserTemplate>
                <h1>
                    Itens recentes
                </h1>

                {loadingRecentProducts && <ListLoading/>}
                <div className='grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                    {allRecentProducts.map((product) => (
                        <CardProduct key={`recent-${product._id}`} product={product}/>
                    ))}
                </div>
            </UserTemplate>
        </div>
    )
}