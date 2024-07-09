import AuthTemplate from "../../templates/auth-template";
import {useForm} from "react-hook-form";
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

type LoginForm = {
    email: string
    password: string
}

const schemaValidation = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail válido").required("E-mail obrigatório"),
    password: Yup.string().min(4, "A senha precisa ter pelo menos 4 caracteres").required("Senha obrigatória")
})

export default function Login() {

    const {register, handleSubmit, formState: {errors}}
        = useForm<LoginForm>(
        {
            resolver: yupResolver(schemaValidation)
        })

    function logar(values: LoginForm) {
        console.log(values)
    }

    return (
        <AuthTemplate>
            <form className='bg-gray-400 p-5 rounded-lg w-[400px] self-center' onSubmit={handleSubmit(logar)}>
                <h1 className='text-center text-[25px] font-bold'>RodrigoBay</h1>
                <p className='text-center my-3'>Acesse sua conta</p>

                <div>
                    <input {...register('email')} type="email"
                           className='w-full border-2 h-[40px] px-2 rouded-md'
                           placeholder='Digite seu e-mail'/>
                    {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
                </div>
                <div>
                    <input {...register('password')} type="password" placeholder="Digite sua senha"
                           className='w-full border-2 h-[40px] px-2 rouded-md mt-3'/>
                    {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
                </div>

                <button className='mt-4 bg-primary w-full h-[40px] text-white' type="submit">Entrar</button>
            </form>
        </AuthTemplate>
    )
}