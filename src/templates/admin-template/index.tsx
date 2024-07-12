import {PropsWithChildren} from "react";
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";
import {ToastContainer} from "react-toastify";

type AdminTemplateProps = PropsWithChildren & {}
export default function AdminTemplate(props: AdminTemplateProps) {

    return (
        <div className='min-h-screen flex flex-col bg-gray-100'>
            <HeaderAdmin/>
            <div className='flex flex-1 flex-col px-[10%] py-[20px] justify-center'>
                {props.children}
            </div>
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

            <Footer/>
        </div>
    )
}