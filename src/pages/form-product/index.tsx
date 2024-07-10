import AdminTemplate from "../../templates/admin-template";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";

type FormProduct = {
    name: string;
    manufactorer: string;
    category: string;
    price: number;
    url1: string;
    url2: string;
}

const schemaValidation = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    manufactorer: Yup.string().required("Fabricante obrigatório"),
    category: Yup.string().required("Categoria obrigatória"),
    price: Yup.number().required("Preço obrigatória"),
    url1: Yup.string().required("Url1 obrigatória"),
    url2: Yup.string().required("Url2 obrigatória")
})

export default function FormProduct() {

    const [value, setValue] = useState()

    const {
        register,
        formState: {errors}
    } = useForm<FormProduct>({
        resolver: yupResolver(schemaValidation)
    })

    return (
        <div>
            <AdminTemplate>
                <form>
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
                                {...register("manufactorer")} type="text" placeholder="Nome do fabricante"/>
                            {errors.manufactorer && <span className='text-red-600'>{errors.manufactorer.message}</span>}
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <select {...register("category")}
                                    className='w-full border-2 h-[40px] px-2 rounded-md'>
                                <option disabled>Selecione uma opção</option>
                                <option value={"Jogos"}>Jogos</option>
                                <option value={"Roupas"}>Roupas</option>
                                <option value={"Veiculos"}>Veículos</option>
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
                                value={value} onChange={setValue}/>
                    <button className='mt-4 bg-primary w-full h-[40px] text-white' type="submit">
                        Salvar
                    </button>
                </form>
            </AdminTemplate>
        </div>
    )
}