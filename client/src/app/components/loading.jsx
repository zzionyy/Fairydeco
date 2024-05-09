import Image from 'next/image'
import BookGif from '../../../public/image/books.gif'

export default function Loading() {
    console.log('loading...')
    return (
        <div className="flex h-[600px] w-[100%] flex-col items-center justify-center bg-white text-4xl">
            <Image src={BookGif} alt="Loading..." />
            이야기를 만들고 있어요! 20까지 천천히 세어볼까요?
        </div>
    )
}