import Header from "../../components/header";
import Footer from "../../components/footer";
import {PropsWithChildren} from "react";

type UserTemplateProps = PropsWithChildren

export default function UserTemplate(props: UserTemplateProps) {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <div className='flex flex-1 flex-col p-[30px]'>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}