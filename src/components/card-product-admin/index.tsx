import {useNavigate} from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import Modal from 'react-modal';
import {useState} from "react";
import {CardProductProps} from "../card-product/types.ts";
import {removeApiProduct} from "./services.ts";
import {showErrorMessage} from "../../services/toastUtil.ts";
import {getApiMyProducts} from "../../pages/user-products/services.ts";
import {useAuthSessionStore} from "../../hooks/use-auth-session.ts";
import {toast} from "react-toastify";

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

Modal.setAppElement('#root');

export default function CardProductAdmin({product, setMyProducts}: CardProductProps) {

    const [modalIsOpen, setIsOpen] = useState(false);

    const {token} = useAuthSessionStore()

    async function removeProduct() {
        try {
            await removeApiProduct(product._id, token)
            const response = await getApiMyProducts(token)
            setMyProducts(response.data)
            setIsOpen(false)
            toast.success('Produto excluído com sucesso!')
        } catch (error) {
            setIsOpen(false)
            showErrorMessage('Erro ao excluir produto', error)
        }
    }

    const navigate = useNavigate()
    return (
        <div>
            <button
                // onClick={() => navigate('/products/details')}
                className='shadow-md rounded-md p-6 flex flex-col justify-center items-center bg-white m-2'>
                <h1 className='text-center'>{product.name}</h1>
                <img src={product.url1} className='w-[100px] mt-2' alt='Imagem do produto'/>
                <div className='flex items-end flex-row'>
                    <div>
                        <p className='w-full mt-3'>{product.manufacturer}</p>
                        <p className='w-full text-[25px]'>R$ {product.price}</p>
                    </div>
                    <div className='ml-2 flex flex-col gap-1'>
                        <button onClick={() => navigate('/form-product')}>
                            <AiOutlineEdit size={25}/>
                        </button>
                        <button>
                            <AiOutlineDelete onClick={() => setIsOpen(true)} size={25}/>
                        </button>
                    </div>
                </div>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <h1 className='text-[20px] font-bold mb-2'>Excluir produto</h1>
                <p>Deseja realmente excluir este produto?</p>
                <div className='flex justify-center gap-4 mt-4'>
                    <button
                        onClick={() => removeProduct()}
                        className='bg-primary text-white px-8 py-2 rounded-lg'>
                        Sim
                    </button>
                    <button
                        className='bg-white text-primary border border-primary px-8 py-2 rounded-lg'
                        onClick={() => setIsOpen(false)}
                    >
                        Não
                    </button>
                </div>
            </Modal>
        </div>
    )
}