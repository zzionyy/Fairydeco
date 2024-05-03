'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function TitleBox({ title, bookId }) {
    const [newTitle, setNewTitle] = useState('')

    useEffect(() => {
        setNewTitle(title)
    }, [title])

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
    }

    const handleTitleButton = (event) => {
        changeTitle()
        console.log(newTitle)
    }

    const changeTitle = async () => {
        try {
            const response = await axios.put(
                'http://k10a402.p.ssafy.io:8081/book/title',
                {
                    bookId: bookId,
                    bookName: newTitle,
                }
            )
            if (response.data.status == 'success') {
                alert('수정 되었습니다.')
            } else {
                alert('수정이 실패했습니다. 다시 한 번 시도해주세요')
            }
        } catch (error) {
            console.error('title error', error)
        }
    }
    return (
        <div className=" m-4 flex h-14 w-2/5 items-center rounded-lg border-2 border-customOrange bg-[#FFE7A8] p-4 pl-8">
            <div className="text-2xl">제목 : </div>
            <input
                className="ml-2 w-2/3 border-black bg-[#FFE7A8] text-2xl focus:border-b focus:outline-none"
                value={newTitle}
                onChange={handleTitleChange}
            ></input>
            <button
                className="btn btn-sm ml-8 w-[80px] border-2 border-customOrange bg-white text-sm hover:border-customOrange hover:bg-white"
                onClick={handleTitleButton}
            >
                제목수정
            </button>
        </div>
    )
}