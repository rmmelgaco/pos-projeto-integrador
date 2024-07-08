import UserTemplate from "../../templates/user-template";
import {Carousel} from "react-responsive-carousel";
import carousel1 from "../../assets/carousel1.jpeg";

export default function Details() {
    return (
        <UserTemplate>
            <p className='text-[30px]'>Brasão do Galo</p>
            <div className='flex mt-10 gap-10 justify-center'>
                <div className='w-[40%]'>
                    <Carousel showThumbs={false}>
                        <div>
                            <img src={carousel1}/>
                        </div>
                        <div>
                            <img src={carousel1}/>
                        </div>
                        <div>
                            <img src={carousel1}/>
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
                        <p className='text-[30px]'>R$ 799,99</p>
                    </div>
                </div>
            </div>

            <h3 className='mt-10 text-[20px]'>
                Detalhes do produto
            </h3>
            <div>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae orci ultrices, feugiat nisi
                    non, faucibus justo. Curabitur convallis lacus at imperdiet consequat. Sed congue magna a diam
                    blandit luctus. Integer sit amet nunc vitae turpis viverra finibus. Donec ac felis magna.
                    Suspendisse quis odio cursus, auctor dolor sed, commodo orci. Proin metus mi, faucibus in tellus
                    volutpat, ultrices euismod lorem. Integer congue libero ac sapien sagittis viverra. Aliquam tempus
                    dictum dolor in fermentum. Morbi eget diam convallis, ultricies tortor sit amet, feugiat ipsum.
                    Vivamus in placerat tortor.
                </p>
                <p className='mt-10'>
                    Mauris elementum, orci sit amet cursus malesuada, mauris tortor ultricies nibh, ac maximus urna urna
                    sit
                    amet felis. Ut tincidunt tincidunt sapien, in accumsan tellus bibendum quis. Nam ultrices placerat
                    leo
                    ac sagittis. Nunc nisl mauris, aliquet et tempus sit amet, molestie sit amet purus. Fusce eget felis
                    pharetra felis mattis vehicula. Quisque vitae lectus quis dui laoreet pulvinar. Nunc iaculis, turpis
                    in
                    scelerisque ultrices, ex nisl hendrerit enim, sed interdum elit risus vitae nunc. Maecenas vel
                    libero
                    consectetur nisl fringilla lobortis. Sed ac elit eget orci tempor condimentum.
                </p>
            </div>
        </UserTemplate>
    )
}