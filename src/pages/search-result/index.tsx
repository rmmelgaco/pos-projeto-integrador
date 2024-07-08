import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";

export default function SearchProducts() {
    return (
        <div>
            <UserTemplate>
                <h1>
                    Resultado da busca
                </h1>

                <div className='grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2'>
                    {
                        Array.from({length: 14}).map(() => (
                            <CardProduct/>
                        ))
                    }
                </div>

                <p>Total: 4 itens</p>
            </UserTemplate>
        </div>
    )
}