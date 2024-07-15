import UserTemplate from "../../templates/user-template";
import {Carousel} from "react-responsive-carousel";
import {useParams} from "react-router-dom";
import {getApiProductById} from "./services.ts";
import {Product} from "../home/types.ts";
import {useEffect, useState} from "react";
import ProductLoading from "../../components/product-loading";
import {showErrorMessage} from "../../services/toastUtil.ts";
import {formatPrice} from "../../util/format-price.ts";

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
            showErrorMessage('Erro ao buscar o produto', error)
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
                            <p>{product.user?.name || '-'}</p>
                            <p>{product.user?.city || '-'} {product.user?.state || ''}</p>
                            <p>Email: {product.user?.email || '-'}</p>
                            <p>Telefone: {product.user?.phone || '-'}</p>
                        </div>
                        <div className='shadow-sm bg-white px-10 py-2'>
                            <p className='text-[30px]'>{formatPrice(product.price)}</p>
                        </div>
                    </div>
                </div>

                <h3 className='mt-10 text-[20px]'>
                    Detalhes do produto
                </h3>
                <div className='mt-3' dangerouslySetInnerHTML={{__html: product.description!}}>
                </div>
            </>}
        </UserTemplate>
    )
}