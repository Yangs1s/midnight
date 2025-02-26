'use client'
import React, {useState} from 'react';
import Image from "next/image";

const ChatInput = ({search}: { search: boolean }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const addEmoji = (emoji: string) => {
        setMessage(prev => prev + emoji);
        setShowEmojiPicker(false);
    };

    return (
        <div className="fixed bottom-0 bg-[#181818] h-20 w-full p-4">
            {
                !search ? (
                    <div className="flex gap-2 items-center">
                        <button>
                            <Image src="/icon/plus.svg" width={32} height={32} alt="플러스 아이콘"/>
                        </button>
                        <div className="relative w-full h-9">
                            <input
                                type="text"
                                className="h-9 rounded-[32px] placeholder:text-[13px] text-[13px] text-[#999999] bg-[#2F2F2F] px-3 w-full"
                                placeholder="조용한 크림파스타로 채팅 입력"
                                value={message}
                                onChange={handleInputChange}
                            />
                            <button
                                onClick={toggleEmojiPicker}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                <img src="/icon/smileIcon.svg" alt="스마일 이모지"/>
                            </button>
                            {showEmojiPicker && (
                                <div className="absolute bottom-full mb-2 bg-white p-2 rounded shadow">
                                    <button onClick={() => addEmoji("😊")} className="text-xl">😊</button>
                                    <button onClick={() => addEmoji("😂")} className="text-xl ml-2">😂</button>
                                    <button onClick={() => addEmoji("😍")} className="text-xl ml-2">😍</button>
                                </div>
                            )}
                        </div>
                        <button className={''}>
                            <Image width={32} height={32} src="/icon/send.svg" alt="전송 아이콘"/>
                        </button>
                    </div>

                ) : (

                    <div className={'w-full ml-auto flex items-center justify-end h-full'}>
                        <div className="flex gap-1 items-center">
                            <Image width={24} height={24} src="/icon/upIcon.svg" alt="전송 아이콘"/>
                            <Image width={24} height={24} src="/icon/downIcon.svg" alt="전송 아이콘"/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ChatInput;
