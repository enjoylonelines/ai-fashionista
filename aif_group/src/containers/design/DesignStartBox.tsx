import React, { useState } from 'react';
import Image from 'next/image';
import ErrorAlert1 from '../modal/ErrorAlert1';

interface DesignStartBoxProps {
  onCreateDesign: () => void;
  onError: () => void;
  disabled: boolean;
}

const DesignStartBox: React.FC<DesignStartBoxProps> = ({ onCreateDesign, onError, disabled }) => {
  const [inputText, setInputText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');

  const styles = [
    { id: '레트로', src: '/icons/Ellipse 152.svg' },
    { id: '꼴라쥬', src: '/icons/Ellipse 153.svg' },
    { id: '데코', src: '/icons/Ellipse 154.svg' },
    { id: '그라피티', src: '/icons/Ellipse 155.svg' },
    { id: '키덜트', src: '/icons/Ellipse 156.svg' },
    { id: '라인아트', src: '/icons/Ellipse 157.svg' },
    { id: '스테인글라스', src: '/icons/Ellipse 158.svg' },
    { id: '빈티지포스터', src: '/icons/Ellipse 159.svg' },
    { id: '엠블럼', src: '/icons/Ellipse 160.svg' },
    { id: '애니메이션', src: '/icons/Ellipse 161.svg' },
  ];

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleCreateDesign = () => {
    if (!inputText.trim() || !selectedStyle) {
      onError();
      return;
    }
    onCreateDesign();
  };

  return (
    <div className="w-[27rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl">
      <header className="bg-black rounded-t-[14px] w-full h-[9.9375rem] flex flex-col justify-center items-center mb-7">
        <span className="bg-main_active text-sm w-[4.375rem] h-[1.25rem] rounded-sm mb-2 text-center">
          STEP
          <span className="bg-main_active font-bold"> 01</span>
        </span>
        <p className="text-main_active text-2xl font-bold mb-2">디자인 하기</p>
        <p className="text-white text-xs">텍스트를 디자인으로 생성합니다.</p>
        <p className="text-white text-xs">상상을 현실로 만들어보세요.</p>
      </header>
      <section>
        <div className="ml-4">
          <span className="text-lg font-bold">키워드</span>
          <span className="text-text text-sm"> 한글, 영어, 숫자를 &quot;,&quot; 로 구분하여 작성하세요.</span>
        </div>
        <input
          type="text"
          placeholder="ex)테니스,호랑이,여성1명,얼굴..."
          className="placeholder-[#92EADA] bg-gray-100 text-[15px] px-2 w-[23.625rem] mt-1 h-[2.5rem] ml-4 mb-7 rounded-sm"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          disabled={disabled}
        />
      </section>

      <section>
        <div className="ml-4">
          <span className="text-lg font-bold">스타일</span>
          <span className="text-text text-sm"> 원하는 스타일 1개를 선택 해 주세요.</span>
        </div>

        <div className="justify-center items-center text-center flex scroll-pt-11">
          <div className="grid grid-cols-4 w-[23.75rem] h-[20.75rem] mt-1">
            {styles.map(style => (
              <div key={style.id} className="flex flex-col items-center">
                <button
                  onClick={() => handleStyleSelect(style.id)}
                  className={`w-20 h-20 rounded-full border overflow-hidden ${
                    selectedStyle === style.id ? 'ring-4 ring-main_active' : 'ring-1 ring-[#AFAFAF]'
                  } focus:outline-none`}>
                  <Image
                    src={style.src}
                    alt={style.id}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </button>
                <span className="text-sm text-text">{style.id}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[15rem] h-[2.5rem] mt-[1.4375rem] mx-[6.1875rem] flex justify-between">
          <button
            onClick={handleCreateDesign}
            className="w-[15rem] h-full border-btn_border border-[1px] rounded-[4px] hover:bg-main_active hover:border-none text-btn_text hover:text-black">
            디자인 생성하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default DesignStartBox;
