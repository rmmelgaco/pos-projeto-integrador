import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FaleConoscoForm = {
    nome: string
    email: string,
    mensagem: string
}

const schemaValidation = Yup.object().shape({
    nome: Yup.string().required("Nome obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("E-mail obrigatório"),
    mensagem: Yup.string().min(10, "Mensagem deve ter no mínimo 10 caracteres")
        .required("Mensagem obrigatória"),
})

export default function FaleConoscoComponent() {

    const {register, handleSubmit, formState: {errors}}
        = useForm<FaleConoscoForm>(
        {
            resolver: yupResolver(schemaValidation)
        })


    function enviar(values: FaleConoscoForm) {
        console.log(values)
    }

    return (
        <form className='bg-white rounded-lg w-[700px] self-center p-20' onSubmit={handleSubmit(enviar)}>
            <h1 className='text-primary text-center text-[25px] font-bold'>RodrigoBay</h1>
            <p className='text-center my-3 mt-6'>Fale conosco através do formulário abaixo</p>

            <div>
                <input {...register('nome')} type="text"
                       className='w-full border-2 h-[50px] px-2 rounded-xl shadow mt-8'
                       placeholder='Nome completo'/>
                {errors.nome && <span className='text-red-700'>{errors.nome.message}</span>}
            </div>
            <div>
                <input {...register('email')} type="email" placeholder="E-mail"
                       className='w-full border-2 h-[50px] px-2 rounded-lg shadow mt-6'/>
                {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
            </div>
            <div>
                    <textarea {...register('mensagem')} placeholder="Escreva sua mensagem aqui"
                              className='w-full border-2 h-[200px] px-2 rounded-lg shadow mt-6'/>
                {errors.mensagem && <span className='text-red-700'>{errors.mensagem.message}</span>}
            </div>

            <button className='bg-primary w-full h-[40px] text-white mt-6 rounded-lg' type="submit">
                Enviar
            </button>
        </form>
    )
}