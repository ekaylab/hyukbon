import React from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <div className="hidden xl:fixed xl:inline-block left-10 top-40 rounded overflow-hidden">
        <Link
          href="/scope"
          className="w-full flex h-full bg-gray-200 p-10 text-18"
        >
          사업분야
        </Link>
        <ul className="pl-3 pt-1 divide-y-2 text-16">
          <li className="py-2">
            <Link href="/scope/research">리서치 및 시장조사</Link>
          </li>
          <li className="py-2">
            <Link href="/scope/consulting">마케팅 컨설팅 및 기획</Link>
          </li>
          <li className="py-2">
            <Link href="/scope/selling">부동산 분양대행</Link>
          </li>
          <li className="py-2">
            <Link href="/scope/allience">전략적 제휴</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-28 md:text-40">SELLING</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          성공적인 분양을 위해
          <br />
          최상의 솔루션을 제안합니다.
        </p>
      </div>
      <div className="flex flex-wrap flex-row pt-20">
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <div className="absolute z-10 left-5 top-4 lg:top-10 lg:left-11 text-white text-16 md:text-18">
            <h3 className="text-26">SELLING BUSINESS</h3>
            <hr className="my-2" />
            <p>
              성공이라는 목표 달성을 위해
              <br />
              최선의 노력을 다할 것을 약속합니다.
            </p>
          </div>
          <Image
            src="/research.jpg"
            alt=""
            className="w-full h-[400px] brightness-50"
            width={5863}
            height={3869}
          />
        </div>
        <ul className="w-full md:w-1/2 px-0 md:p-4">
          <li className="flex flex-row items-center justify-start border-t py-4 lg:px-8">
            <h4 className="w-1/2">주거시설</h4>
            <p className="text-16">
              아파트, 주상복합
              <br />
              타운하우스 분양대행
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-t py-4 lg:px-8">
            <h4 className="w-1/2">비주거시설</h4>
            <p className="text-16">
              상업시설, 업무시설 등<br />
              수익형 부동산 분양대행
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-y py-4 lg:px-8">
            <h4 className="w-1/2">호텔/관광</h4>
            <p className="text-16">
              생활형 숙박시설, 리조트 등<br />
              호텔 및 관광시설 분양대행
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Page;
