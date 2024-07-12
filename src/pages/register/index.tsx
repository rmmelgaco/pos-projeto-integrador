import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {RegisterForm} from "./types.ts";
import {registerUser} from "./services.ts";
import {toast} from "react-toastify";
import {showErrorMessage} from "../../services/toastUtil.ts";

const schemaValidation = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("E-mail obrigatório"),
    phone: Yup.string().required("Telefone obrigatório"),
    city: Yup.string().required("Cidade obrigatória"),
    state: Yup.string().required("Estado obrigatório"),
    password: Yup.string().min(4, "A senha precisa ter pelo menos 4 caracteres").required("Senha obrigatória")
})

export default function Register() {

    const {
        register, handleSubmit, reset, formState: {errors}
    }
        = useForm<RegisterForm>(
        {
            resolver: yupResolver(schemaValidation)
        })

    const navigate = useNavigate()

    async function createUser(values: RegisterForm) {

        try {
            await registerUser(values)
            toast.success('Usuário cadastrado com sucesso!')
            reset()
        } catch (error: any) {
            showErrorMessage('Erro ao cadastrar usuário', error)
        }
        console.log(values)
    }

    return (
        <AuthTemplate>
            <form className='bg-gray-400 p-5 rounded-lg w-[400px] self-center' onSubmit={handleSubmit(createUser)}>
                <h1 className='text-center text-[25px] font-bold'>RodrigoBay</h1>
                <p className='text-center my-3'>Cadastre-se</p>

                <div>
                    <input {...register('name')} type="text"
                           className='w-full border-2 h-[40px] px-2 rounded-md'
                           placeholder='Digite seu nome'/>
                    {errors.name && <span className='text-red-700'>{errors.name.message}</span>}
                </div>
                <div>
                    <input {...register('email')} type="email"
                           className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
                           placeholder='Digite seu e-mail'/>
                    {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
                </div>
                <div>
                    <input {...register('phone')} type="text"
                           className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
                           placeholder='Digite seu telefone'/>
                    {errors.phone && <span className='text-red-700'>{errors.phone.message}</span>}
                </div>
                <div>
                    <input {...register('city')} type="text"
                           className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
                           placeholder='Digite sua cidade'/>
                    {errors.city && <span className='text-red-700'>{errors.city.message}</span>}
                </div>
                <div>
                    <input {...register('state')} type="text"
                           className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
                           placeholder='Digite seu estado'/>
                    {errors.state && <span className='text-red-700'>{errors.state.message}</span>}
                </div>
                <div>
                    <input {...register('password')} type="password" placeholder="Digite sua senha"
                           className='w-full border-2 h-[40px] px-2 rounded-md mt-2'/>
                    {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
                </div>

                <button className='mt-4 bg-primary w-full h-[40px] text-white' type="submit">
                    Cadastrar
                </button>
                <div className='flex justify-center items-center'>
                    <button className='mt-4' onClick={() => navigate('/login')}>
                        Entrar
                    </button>
                </div>
            </form>
        </AuthTemplate>
    )
}