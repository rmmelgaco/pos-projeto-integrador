import UserTemplate from "../../templates/user-template";
import CardProduct from "../../components/card-product";

export default function Home() {
    return (
        <UserTemplate>
            <h2>Itens recentes</h2>
            <div className='flex flex-wrap'>
                <CardProduct/><CardProduct/><CardProduct/><CardProduct/>
            </div>
            <p>Ver mais</p>
            <h2>Anúncios</h2>
            <div className='flex flex-wrap'>
                <CardProduct/><CardProduct/><CardProduct/><CardProduct/>
            </div>
            <p>Ver mais</p>
        </UserTemplate>
    )
}