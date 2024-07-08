import {BsFacebook, BsLinkedin} from "react-icons/bs";

export default function Footer() {
    return (
        <footer className='bg-primary text-white p-10'>
            <h2 className='text-[22px] font-bold mb-5'>Unybay</h2>
            <p className='text-center'>
                Unyleya Educational | todos os direitos reservados
            </p>
            <div className='flex justify-center gap-2 mt-[20px] mb-[10px]'>
                <a href='https://www.linkedin.com' className='cursor-pointer'>
                    <BsLinkedin/>
                </a>
                <a href='https://www.facebook.com' className='cursor-pointer'>
                    <BsFacebook/>
                </a>
            </div>
        </footer>
    )
}