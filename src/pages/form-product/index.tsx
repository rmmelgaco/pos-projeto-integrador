import AdminTemplate from "../../templates/admin-template";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {FormNewProduct} from "./types.ts";
import {saveApiProduct} from "./services.ts";
import {toast} from "react-toastify";
import {showErrorMessage} from "../../services/toastUtil.ts";
import {useAuthSessionStore} from "../../hooks/use-auth-session.ts";
import {useNavigate} from "react-router-dom";

const schemaValidation = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    manufacturer: Yup.string().required("Fabricante obrigatório"),
    category: Yup.string().required("Categoria obrigatória"),
    price: Yup.number().required("Preço obrigatória"),
    url1: Yup.string().required("Url1 obrigatória"),
    url2: Yup.string().required("Url2 obrigatória"),
    description: Yup.string()
})

export default function FormProduct() {

    const [description, setDescription] = useState<string>()
    const {token} = useAuthSessionStore()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<FormNewProduct>({
        resolver: yupResolver(schemaValidation)
    })

    async function saveProduct(values: FormNewProduct) {
        try {
            await saveApiProduct({...values, description}, token)
            reset()
            toast.success('Produto cadastrado com sucesso!')
            setTimeout(() => navigate('/my-products'), 3000);
        } catch (error: any) {
            showErrorMessage('Erro ao salvar o produto', error)
        }
    }

    return (
        <div>
            <AdminTemplate>
                <h1 className='text-[25px] mb-4'>Novo produto</h1>
                <form onSubmit={handleSubmit(saveProduct)}>
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