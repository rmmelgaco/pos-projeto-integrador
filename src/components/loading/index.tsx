import ReactLoading from "react-loading";
import {useLoadingSession} from "../../hooks/use-loading-session.ts";
import './index.css'


export default function Loading() {
    const {loading} = useLoadingSession()

    return (loading &&
        <div className="loading-overlay">
            <ReactLoading type={'spin'} color={'blue'} className='bg-white rounded-lg' height={60} width={60}/>
        </div>
    )
}