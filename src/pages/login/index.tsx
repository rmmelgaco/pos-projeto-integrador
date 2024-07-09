import AuthTemplate from "../../templates/auth-template";
import {useForm} from "react-hook-form";

type LoginForm = {
    email: string
    password: string
}

export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm<LoginForm>()

    function logar(values: LoginForm) {
        console.log(values)
    }

    return (
        <AuthTemplate>
            <form className='bg-gray-400 p-5 rounded-lg' onSubmit={handleSubmit(logar)}>
                <h1 className='text-center text-[25px] font-bold'>RodrigoBay</h1>
                <p className='text-center my-3'>Acesse sua conta</p>

                <div>
                    <input {...register('email', {required: true})} type="email"
                           className='w-full border-2 h-[40px] px-2 rouded-md'
                           placeholder='Digite seu e-mail'/>
                    {errors.email && <span className='text-red-700'>Campo obrigatório</span>}
                </div>
                <div>
                    <input {...register('password', {required: true})} type="password" placeholder="Digite sua senha"
                           className='w-full border-2 h-[40px] px-2 rouded-md mt-3'/>
                    {errors.password && <span className='text-red-700'>Campo obrigatório</span>}
                </div>

                <button className='mt-4 bg-primary w-full h-[40px] text-white' type="submit">Entrar</button>
            </form>
        </AuthTemplate>
    )
}