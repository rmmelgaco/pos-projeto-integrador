import UserTemplate from "../../templates/user-template";
import {Carousel} from "react-responsive-carousel";
import {useParams} from "react-router-dom";
import {getApiProductById} from "./services.ts";
import {Product} from "../home/types.ts";
import {useEffect, useState} from "react";
import ProductLoading from "../../components/product-loading";
import {toast, ToastContainer} from "react-toastify";

export default function Details() {

    const {productId} = useParams()
    const [product, setProduct] = useState<Product>({} as Product)
    const [loadingProduct, setLoadingProduct] = useState<boolean>(true)

    async function getProductById() {
        try {
            setLoadingProduct(true)
            const response = await getApiProductById(productId!)
            setProduct(response.data)
        } catch (error: any) {
            toast.error(`Erro ao buscar o produto - ${error.message}`)
        }
        setLoadingProduct(false)
    }

    useEffect(() => {
        getProductById()
    }, [])

    return (
        <UserTemplate>
            {loadingProduct && <ProductLoading/>}
            {!loadingProduct && <>
                <p className='text-[30px]'>{product.name}</p>
                <div className='flex mt-10 gap-10 justify-center'>
                    <div className='w-[40%]'>
                        <Carousel showThumbs={false}>
                            <div>
                                <img src={product.url1}/>
                            </div>
                            <div>
                                <img src={product.url2}/>
                            </div>
                        </Carousel>
                    </div>
                    <div>
                        <div className='shadow-sm bg-white px-10 mt-4'>
                            <p>Informações do vendedor</p>
                            <p>Rodrigo de Melo Melgaço</p>
                            <p>Brasília DF</p>
                            <p>Email: xxx@yyy.com</p>
                            <p>Telefone: (61) 99999-9999</p>
                        </div>
                        <div className='shadow-sm bg-white px-10 py-2'>
                            <p className='text-[30px]'>R$ {product.price}</p>
                        </div>
                    </div>
                </div>

                <h3 className='mt-10 text-[20px]'>
                    Detalhes do produto
                </h3>
                <div className='mt-3' dangerouslySetInnerHTML={{__html: product.description}}>
                </div>
            </>}
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </UserTemplate>
    )
}