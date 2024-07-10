import AdminTemplate from "../../templates/admin-template";
import CardProductAdmin from "../../components/card-product-admin";
import {useNavigate} from "react-router-dom";

export default function UserProducts() {

    const navigate = useNavigate()

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
                {
                    Array.from({length: 14}).map(() => (
                        <CardProductAdmin/>
                    ))
                }
            </div>

            <p className='text-right'>Total: 4 itens</p>
        </AdminTemplate>
    )
}