import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function ListLoading() {
    return (
        <div className='flex justify-between mt-2 flex-wrap'>
            {
                Array.from({length: 6}).map((_, index) => (
                    <div key={`listsLoading-${index}`} className='shadow-md rounded-md p-10 flex flex-col justify-center items-center bg-white m-2'>
                        <Skeleton height={15} width={150}/>
                        <Skeleton height={150} width={150}/>
                        <Skeleton height={15} width={150}/>
                        <Skeleton height={30} width={150}/>
                    </div>
                ))}
        </div>
    );
}