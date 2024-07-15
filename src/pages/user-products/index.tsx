import AdminTemplate from "../../templates/admin-template";
import {useNavigate} from "react-router-dom";
import {getApiMyProducts} from "./services.ts";
import {useAuthSessionStore} from "../../hooks/use-auth-session.ts";
import {showErrorMessage} from "../../services/toastUtil.ts";
import {useEffect, useState} from "react";
import {Product} from "../home/types.ts";
import CardProductAdmin from "../../components/card-product-admin";

export default function UserProducts() {

    const navigate = useNavigate()

    const {token} = useAuthSessionStore()

    const [myProducts, setMyProducts] = useState<Product[]>([])

    async function getMyProducts() {

        try {
            const response = await getApiMyProducts(token)
            setMyProducts(response.data)
        } catch (error: any) {
            showErrorMessage('Erro ao buscar produtos do usuário', error)
        }
    }

    useEffect(() => {
        getMyProducts()
    }, [])

    return (
        <AdminTemplate>
            <div className='flex justify-between items-center'>
                <h1>
                    Anúncios
                </h1>
                <button
                    className='bg-secondary px-8 py-2 text-white rounded-md'
                    onClick={() => navigate('/form-product')}
                >
                    Criar anúncio
                </button>
            </div>

            <div className='grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2'>
                {myProducts.map((product) => (
                    <CardProductAdmin
                        key={`my-product-${product._id}`}
                        product={product}
                        setMyProducts={setMyProducts}
                    />
                ))}
            </div>

            <p>Total: {myProducts.length} {myProducts.length !== 1 ? 'itens' : 'item'}</p>
        </AdminTemplate>
    )
}