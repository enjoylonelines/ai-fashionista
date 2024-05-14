'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DesignHeader() {
  const [innerWidth, setInnerWidth] = useState(1220);
  const [isMouseHoverToQuestion, setIsMouseHoverToQuestion] = useState(false);
  const [isMouseHoverToImage, setIsMouseHoverToImage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [innerWidth]);

  return (
    <div>
      {innerWidth >= 490 && (
        <div className="w-full h-header px-[3rem] py-[2.3125rem] flex justify-center items-center bg-white md:px-3">
          <div className="w-[78.75rem] h-full flex justify-between items-center">
            <button onClick={() => router.push('/')} className="h-full md:w-[40%]">
              <Image alt="logo" src={'/icons/logo.svg'} width={237} height={68} priority className="object-contain" />
            </button>
            <div className="w-[46rem] flex justify-end ml-3 space-x-6 md:w-[60%] md:space-x-4 sm:!space-x-3">
              <button
                className="text-xl font-medium w-[13.75rem] h-[3.25rem] px-2 bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md flex justify-center items-center sm:w-fit sm:text-lg"
                onMouseEnter={() => setIsMouseHoverToQuestion(true)}
                onMouseLeave={() => setIsMouseHoverToQuestion(false)}
                onClick={() => router.push(`/design/howtouse`)}>
                {isMouseHoverToQuestion ? (
                  <Image alt="question_icon_hover" src={'/icons/question_icon_hover.svg'} width={37.38} height={31.5} />
                ) : (
                  <Image alt="question_icon" src={'/icons/question_icon.svg'} width={37.38} height={31.5} />
                )}
                <div className="group-hover:text-black group-active:text-black ml-4 sm:ml-2">
                  디자인 <span className="sm:hidden">하는 방법</span>
                </div>
              </button>
              <button
                className="text-xl font-medium w-[13.75rem] h-[3.25rem] px-2 bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md flex justify-center items-center sm:w-fit sm:text-lg"
                onMouseEnter={() => setIsMouseHoverToImage(true)}
                onMouseLeave={() => setIsMouseHoverToImage(false)}
                onClick={() => router.push('/design/sampleImage')}>
                {isMouseHoverToImage ? (
                  <Image alt="image_icon_hover" src={'/icons/image_icon_hover.svg'} width={34.14} height={32.45} />
                ) : (
                  <Image alt="image_icon" src={'/icons/image_icon.svg'} width={34.14} height={32.45} />
                )}
                <div className="group-hover:text-black group-active:text-black ml-4 sm:ml-2">
                  생성 이미지 <span className="sm:hidden">샘플</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
