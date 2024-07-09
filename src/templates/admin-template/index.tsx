import {PropsWithChildren} from "react";
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";

type AdminTemplateProps = PropsWithChildren & {}
export default function AdminTemplate(props: AdminTemplateProps) {

    return (
        <div className='min-h-screen flex flex-col bg-gray-100'>
            <HeaderAdmin/>
            <div className='flex flex-1 flex-col px-[10%] py-[20px] justify-center'>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}