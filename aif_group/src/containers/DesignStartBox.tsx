import Image from 'next/image';

const DesignStartBox = () => {
  return (
    <div className="w-[27rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl">
      <section className="bg-black rounded-t-[14px] w-full h-[9.9375rem] flex flex-col justify-center items-center mb-7">
        <span className="bg-main_active text-sm w-[4.375rem] h-[1.25rem] rounded-sm mb-2 text-center">
          STEP
          <span className="bg-main_active font-bold"> 01</span>
        </span>
        <p className="text-main_active text-2xl font-bold mb-2">디자인 하기</p>
        <p className="text-white text-xs">텍스트를 디자인으로 생성합니다.</p>
        <p className="text-white text-xs">상상을 현실로 만들어보세요.</p>
      </section>
      <div className="ml-4">
        <span className="text-lg font-bold">키워드</span>
        <span className="text-text text-sm"> 한글, 숫자를 &quot;,&quot; 로 구분하여 작성하세요.</span>
      </div>
      <input
        type="text"
        placeholder="ex)테니스,호랑이,여성1명,얼굴..."
        className="placeholder-[#92EADA] bg-gray-100 text-[15px] px-2 w-[23.625rem] mt-1 h-[2.5rem] ml-4 mb-7 rounded-sm"
      />
      <div className="ml-4">
        <span className="text-lg font-bold">스타일</span>
        <span className="text-text text-sm"> 원하는 스타일 1개를 선택 해 주세요.</span>
      </div>
      <div className="justify-center items-center text-center flex scroll-pt-11">
        <div className="grid grid-cols-4 w-[23.75rem] h-[20.75rem] mt-1">
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 152.png"
                alt="레트로"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">레트로</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 153.png"
                alt="꼴라쥬"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">꼴라쥬</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 154.png"
                alt="데코"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">데코</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 155.png"
                alt="그라피티"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">그라피티</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 156.png"
                alt="키덜트"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">키덜트</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 157.png"
                alt="라인아트"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">라인아트</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 158.png"
                alt="스테인글라스"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">스테인글라스</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 159.png"
                alt="빈티지포스터"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">빈티지포스터</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 160.png"
                alt="엠블럼"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">엠블럼</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 h-20 rounded-full border overflow-hidden focus:outline-none focus:ring-4 focus:ring-main_active">
              <Image
                src="/Ellipse 161.png"
                alt="애니메이션"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
            <span className="text-sm text-text">애니메이션</span>
          </div>
        </div>
      </div>

      <div className="w-[15rem] h-[2.5rem] mt-[1.4375rem] mx-[6.1875rem] flex justify-between">
        <button className="w-[15rem] h-full border-btn_border border-[1px] rounded-[4px] hover:bg-main_active hover:border-none">
          디자인 생성하기
        </button>
      </div>
    </div>
  );
};

export default DesignStartBox;
