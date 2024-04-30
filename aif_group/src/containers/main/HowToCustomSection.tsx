import Image from 'next/image';

export default function HowToCustomSection() {
  return (
    <main className="w-full h-banner bg-[#E6E6E6] flex justify-center items-center">
      <section className="w-full h-[33.1875rem] flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[2.625rem] leading-[58px]">How to Custom</div>
          <div className="text-[1.3125rem] leading-[37px] text-[#555555]">AIF 디자인 툴 사용 방법</div>
        </div>
        <div className="w-[78.375rem] h-[23.0625rem] flex justify-center items-center mt-[67px]">
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center mr-[4.25rem]">
            <Image
              alt="how_to_custom_1"
              src={'/images/how_to_custom_1.svg'}
              width={210}
              height={212}
              className="drop-shadow-gray"
            />
            <div className="w-[10.8125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px]">디자인 키워드</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555]">
                만들려고 하는 이미지를 <br /> 키워드로 작성하세요.
              </div>
            </div>
          </div>
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center mr-[2.375rem]">
            <Image
              alt="how_to_custom_2"
              src={'/images/how_to_custom_2.svg'}
              width={165}
              height={218}
              className="drop-shadow-gray"
            />
            <div className="w-[10.8125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px]">디자인 스타일</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555]">
                원하는 이미지 스타일 <br /> 옵션을 선택하세요.
              </div>
            </div>
          </div>
          <div className="w-1 h-[314px] border-l-[2.5px] border-white mr-[1.875rem]"></div>
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center mr-[1.875rem]">
            <Image
              alt="how_to_custom_3"
              src={'/images/how_to_custom_3.svg'}
              width={210}
              height={210}
              className="drop-shadow-mint"
            />
            <div className="w-[10.8125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px] flex">
                디자인 생성
                <span className="relative top-1.5 left-1.5">
                  <Image alt="cursor_icon" src={'/icons/cursor_icon.svg'} width={39} height={39} />
                </span>
              </div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555]">
                디자인 생성 클릭 시 <br /> 이미지가 4개 생성됩니다.
              </div>
            </div>
          </div>
          <div className="w-1 h-[314px] border-l-[2.5px] border-white mr-[2.375rem]"></div>
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center mr-[4.25rem]">
            <Image
              alt="how_to_custom_4"
              src={'/images/how_to_custom_4.svg'}
              width={166}
              height={227}
              className="drop-shadow-gray"
            />
            <div className="w-[10.8125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px]">디자인 선택하기</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555]">
                생성된 이미지 중 <br /> 최대 3개를 선택 해주세요.
              </div>
            </div>
          </div>
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center">
            <Image
              alt="how_to_custom_5"
              src={'/images/how_to_custom_5.svg'}
              width={210}
              height={228}
              className="drop-shadow-gray"
            />
            <div className="w-[10.8125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px]">티셔츠 미리보기</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555]">
                선택한 프린트 디자인 <br /> 티셔츠를 확인하세요.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}