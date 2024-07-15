import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useEffect, useState} from "react";
import {FormEditProduct} from "./types.ts";
import {toast} from "react-toastify";
import {showErrorMessage} from "../../services/toastUtil.ts";
import {useAuthSessionStore} from "../../hooks/use-auth-session.ts";
import {useNavigate, useParams} from "react-router-dom";
import AdminTemplate from "../../templates/admin-template";
import {getApiProductById} from "../details/services.ts";
import {editApiProduct} from "../../components/card-product-admin/services.ts";
import {useLoadingSession} from "../../hooks/use-loading-session.ts";

const schemaValidation = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    manufacturer: Yup.string().required("Fabricante obrigatório"),
    category: Yup.string().required("Categoria obrigatória"),
    price: Yup.number().required("Preço obrigatória"),
    url1: Yup.string().required("Url1 obrigatória"),
    url2: Yup.string().required("Url2 obrigatória"),
    description: Yup.string()
})

export default function FormProductEdit() {

    const [description, setDescription] = useState<string>()
    const {token} = useAuthSessionStore()
    const {setLoading} = useLoadingSession()
    const navigate = useNavigate()
    const {productId} = useParams()
    const [product, setProduct] = useState<FormEditProduct>({
        price: 0,
        category: '',
        description: '',
        manufacturer: '',
        name: '',
        url1: '',
        url2: ''
    })

    async function getProductById() {
        try {
            setLoading(true)
            const response = await getApiProductById(productId!)
            setProduct({...response.data})
            setDescription(response.data.description)
        } catch (error) {
            showErrorMessage('Erro ao recuperar produto pelo id', error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getProductById()
    }, [])

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormEditProduct>({
        resolver: yupResolver(schemaValidation),
        defaultValues: product,
        values: product
    })

    async function editProduct(values: FormEditProduct) {
        try {
            setLoading(true)
            await editApiProduct(productId!, {...values, description}, token)
            navigate('/my-products')
            setTimeout(() => toast.success('Produto alterado com sucesso!'), 500);
        } catch (error: any) {
            showErrorMessage('Erro ao alterar produto', error)
        }
        setLoading(false)
    }

    return (
        <div>
            <AdminTemplate>
                <h1 className='text-[25px] mb-4'>Novo produto</h1>
                <form onSubmit={handleSubmit(editProduct)}>
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <input
                                className='w-full border-2 h-[40px] px-2 rounded-md'
                                {...register("name")} type="text" placeholder="Nome do produto"/>
                            {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
                        </div>
                        <div className='flex-1'>
                            <input
                                className='w-full border-2 h-[40px] px-2 rounded-md'
                                {...register("manufacturer")} type="text" placeholder="Nome do fabricante"/>
                            {errors.manufacturer && <span className='text-red-600'>{errors.manufacturer.message}</span>}
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <select {...register("category")}
                                    className='w-full border-2 h-[40px] px-2 rounded-md'>
                                <option disabled selected>Selecione uma opção</option>
                                <option value={"Jogos"}>Jogos</option>
                                <option value={"Roupas"}>Roupas</option>
                                <option value={"Veiculos"}>Veículos</option>
                                <option value={"Ferramentas"}>Ferramentas</option>
                                <option value={"Comidas"}>Comidas</option>
                                <option value={"Presentes"}>Presentes</option>
                                <option value={"Outros"}>Outros</option>
                            </select>

                            {errors.category && <span className='text-red-600'>{errors.category.message}</span>}
                        </div>
                        <div className='flex-1'>
                            <input
                                className='w-full border-2 h-[40px] px-2 rounded-md'
                                {...register("price")} type="text" placeholder="Preço"/>
                            {errors.price && <span className='text-red-600'>{errors.price.message}</span>}
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <input
                                className='w-full border-2 h-[40px] px-2 rounded-md'
                                {...register("url1")} type="text" placeholder="Url 1"/>
                            {errors.url1 && <span className='text-red-600'>{errors.url1.message}</span>}
                        </div>
                        <div className='flex-1'>
                            <input
                                className='w-full border-2 h-[40px] px-2 rounded-md'
                                {...register("url2")} type="text" placeholder="Url 2"/>
                            {errors.url2 && <span className='text-red-600'>{errors.url2.message}</span>}
                        </div>
                    </div>
                    <ReactQuill theme="snow"
                                style={{height: 500, marginTop: 10, marginBottom: 100}}
                                value={description} onChange={setDescription}/>
                    <div className='flex justify-end gap-4 mt-4'>
                        <button type='submit' className='bg-primary text-white px-8 py-2 rounded-lg'>
                            Salvar
                        </button>
                        <button
                            className='bg-white text-primary border border-primary px-8 py-2 rounded-lg'
                            onClick={() => navigate('/my-products')}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </AdminTemplate>
        </div>
    )
}