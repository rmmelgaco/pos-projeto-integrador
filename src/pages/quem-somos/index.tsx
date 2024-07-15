import UserTemplate from "../../templates/user-template";
import ImageSkeleton from "./image-skeleton.tsx";

export default function QuemSomos() {
    return (
        <UserTemplate>
            <h1 className="text-4xl font-bold mb-4">Quem Somos</h1>
            <ImageSkeleton src='https://picsum.photos/800/400?random=1' alt='Nossa Empresa' />
            <p className="text-lg mb-4">
                Nossa Empresa é uma plataforma inovadora de compra e venda de produtos, conectando vendedores e
                compradores de todo o mundo. Desde a nossa fundação, temos nos dedicado a proporcionar a melhor
                experiência de e-commerce, combinando tecnologia de ponta com um atendimento ao cliente
                excepcional.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Nossa Missão</h2>
            <ImageSkeleton src='https://picsum.photos/400/200?random=2' alt='Nossa Missão' />
            <p className="text-lg mb-4">
                Nossa missão é empoderar vendedores de todos os tamanhos a alcançar um público global, enquanto
                proporcionamos aos compradores uma vasta gama de produtos únicos e de qualidade. Trabalhamos
                continuamente para garantir um ambiente seguro e confiável para todas as transações.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Nossa Equipe</h2>
            <ImageSkeleton src='https://picsum.photos/400/200?random=3' alt='Nossa Equipe' />
            <p className="text-lg mb-4">
                Somos uma equipe diversificada de profissionais apaixonados por e-commerce, tecnologia e
                inovação. Juntos, trabalhamos para criar uma plataforma que não só atenda às necessidades dos
                nossos usuários, mas também exceda suas expectativas.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Nossos Valores</h2>
            <ul className="list-disc pl-5">
                <li className="text-lg mb-2">Integridade e Transparência</li>
                <li className="text-lg mb-2">Inovação Contínua</li>
                <li className="text-lg mb-2">Foco no Cliente</li>
                <li className="text-lg mb-2">Responsabilidade Social</li>
            </ul>
            <ImageSkeleton src='https://picsum.photos/800/200?random=4' alt='Nossos Valores' />
        </UserTemplate>
    )
}