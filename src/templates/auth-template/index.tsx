import {PropsWithChildren} from "react";
import Footer from "../../components/footer";
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Loading from "../../components/loading";

type AuthTemplateProps = PropsWithChildren & {}
export default function AuthTemplate(props: AuthTemplateProps) {

    const navigate = useNavigate()

    return (
        <div className='min-h-screen flex flex-col bg-gray-100'>
            <div className='bg-primary flex justify-between p-2'>
                <button onClick={() => navigate('/')}>
                    <h1 className='text-white font-bold text-[30px]'>RodrigoBay</h1>
                </button>
                <div/>
            </div>
            <div className='flex flex-1 flex-col px-[10%] py-[20px] justify-center'>
                {props.children}
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Footer/>
           <Loading/>
        </div>
    )
}