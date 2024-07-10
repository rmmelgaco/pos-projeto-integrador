import Header from "../../components/header";
import Footer from "../../components/footer";
import {PropsWithChildren, useEffect} from "react";
import {useLocation} from "react-router-dom";

type UserTemplateProps = PropsWithChildren

export default function UserTemplate(props: UserTemplateProps) {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className='min-h-screen flex flex-col bg-gray-100'>
            <Header/>
            <div className='flex flex-1 flex-col px-[10%] py-[20px]'>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}