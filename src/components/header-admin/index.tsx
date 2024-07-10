import {Link, useNavigate} from "react-router-dom";

export default function HeaderAdmin() {

    const navigate = useNavigate()

    return (
        <div className='bg-primary flex flex-row justify-between items-center p-2'>
            <button onClick={() => navigate('/')}>
                <h1 className='text-white text-[30px] font-bold'>
                    RodrigoBay
                </h1>
            </button>
            <ul className='flex gap-5 items-center text-white'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/quem-somos'>
                        Quem somos
                    </Link>
                </li>
                <li>
                    <Link to='/fale-conosco-admin'>
                        Fale conosco
                    </Link>
                </li>
                <li>
                    <button>
                        Sair
                    </button>
                </li>
                <li>
                    <button
                        className='bg-white px-8 py-2 rounded-md transition-all text-secondary'>Anunciar
                    </button>
                </li>
            </ul>
        </div>
    )
}