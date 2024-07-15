import {Link, useNavigate} from "react-router-dom";
import Modal from "react-modal";
import {useState} from "react";
import {useAuthSessionStore} from "../../hooks/use-auth-session.ts";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function HeaderAdmin() {

    const navigate = useNavigate()
    const [isModalOpened, setIsModalOpened] = useState(false);
    const {clearToken} = useAuthSessionStore()

    async function logout() {
        clearToken()
        navigate('/')
    }

    return (
        <>
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
                        <button onClick={() => setIsModalOpened(true)}>
                            Sair
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/my-products')}
                                className='bg-white px-8 py-2 rounded-md transition-all text-secondary'>Anunciar
                        </button>
                    </li>
                </ul>
            </div>
            <Modal
                isOpen={isModalOpened}
                onRequestClose={() => setIsModalOpened(false)}
                style={customStyles}
            >
                <h1 className='text-[20px] font-bold mb-2'>Confirmar logout</h1>
                <p>Deseja realmente sair?</p>
                <div className='flex justify-center gap-4 mt-4'>
                    <button
                        onClick={() => logout()}
                        className='bg-primary text-white px-8 py-2 rounded-lg'>
                        Sim
                    </button>
                    <button
                        className='bg-white text-primary border border-primary px-8 py-2 rounded-lg'
                        onClick={() => setIsModalOpened(false)}
                    >
                        Não
                    </button>
                </div>
            </Modal>
        </>
    )
}