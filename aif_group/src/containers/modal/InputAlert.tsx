'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useValidation from '@/hooks/useValidation';
interface InputAlertProps {
  onClose: () => void;
}

const InputAlert: React.FC<InputAlertProps> = ({ onClose }) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState(false);
  const [isFirstTry, setIsFirstTry] = useState(true);

  const { refetch } = useValidation(email);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data: isValid } = await refetch();
    isValid ? setIsValid(true) : setIsValid(false);
    setIsFirstTry(false);
    isValid ? onClose() : null;
  };

  const handleClose = () => {
    router.push('/');
  };
  return (
    <div className=" w-[43.75rem] h-[21.25rem] border border-black rounded-[16px] shadow-xl bg-white">
      <div className="relative">
        <button className="absolute top-4 right-4" onClick={handleClose}>
          <Image src="/icons/close.svg" alt="clear" width={21} height={21} />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-11">
        <p className="bg-main_active text-[28px] font-bold px-2 mb-4">이메일 주소를 입력해주세요.</p>
        <p className="text-xl mb-3">
          <span className="font-bold">이메일주소</span> 등록 시 이미지를&nbsp;
          <span className="font-bold">최대 8개 무료로 생성</span>할 수 있습니다.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <div className="w-fit flex flex-col justify-start">
            <p className="text-base text-btn_text">
              &bull; 이메일 주소를 입력하면 AI이미지와 티셔츠 이미지를 다운로드할 수 있습니다.
            </p>
            <p className="text-base text-btn_text mb-3 flex items-center">
              &bull; 개인정보 이용에 동의하십니까? (미동의시 서비스 이용에 제한이 있습니다)&nbsp;
              <input
                type="checkbox"
                required
                className="h-[1.2rem] w-[1.2rem] appearance-none border-[2px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center"
              />
            </p>
          </div>

          <input
            type="email"
            onChange={handleEmailChange}
            placeholder="이메일주소를 입력해주세요."
            className="p-2 bg-gray-100 placeholder-[#79DDCB] rounded-md w-[24.625rem] h-[2.5rem] text-[15px]"
            required
            value={email}
          />
          <div className={`${(isFirstTry || isValid) && 'h-[1.949375rem]'}`} />
          <div className={`text-red-500 w-[23.625rem] text-[0.9rem] p-[0.3rem] ${(isFirstTry || isValid) && 'hidden'}`}>
            유효한 이메일을 입력해주세요.
          </div>
          <button type="submit" className="bg-main_active w-[15rem] h-[2.5rem] rounded-md font-medium">
            디자인 시작하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputAlert;
