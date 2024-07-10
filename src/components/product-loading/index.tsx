import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductLoading() {
    return (
        <div>
            <p className='text-[30px]'>
                <Skeleton height={20} width={500}/>
            </p>
            <div className='flex mt-10 gap-10 justify-center'>
                <div className='w-[40%]'>
                    <Skeleton height={500} width={500}/>
                </div>
                <div>
                    <div className='shadow-sm bg-white px-10 mt-4'>
                        <Skeleton height={200} width={200}/>
                    </div>
                </div>
            </div>

            <h3 className='mt-10 text-[20px]'>
                <Skeleton height={10} width={500}/>
            </h3>
            <div className='mt-3'>
                <Skeleton height={10} width={500}/>
            </div>
        </div>
    );
}