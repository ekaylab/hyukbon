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
      <h1 className="text-28 md:text-40">RESEARCH</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          양방향 분석을 통한 객관적인 시장 데이터 기반으로
          <br /> 소비자에 맞춘 완벽한 전략을 개발합니다.
        </p>
      </div>
      <div className="flex flex-row pt-20 flex-wrap">
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <div className="absolute z-10  p-4 md:p-6 lg:p-8 text-white text-14 md:text-18">
            <h3 className="text-26">RESEARCH BUSINESS</h3>
            <hr className="my-2" />
            <p>
              객관적인 데이터 기반으로 사업의 타당성을 검토하고
              <br /> 혁본만의 전략 수립 및 분석을 진행합니다.
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
        <ul className="w-full md:w-1/2 p-4">
          <li className="flex flex-row items-center justify-start border-t py-4 md:px-8">
            <h4 className="w-1/2">REAL ESTATE</h4>
            <p className="text-14 md:text-16">
              사업 타당성을 위한 조사
              <br />
              분양 전략수립 조사
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-t py-4 md:px-8">
            <h4 className="w-1/2">BRAND</h4>
            <p className="text-14 md:text-16">
              상품 브랜드 선호 조사
              <br />
              건설사 및 브랜드 지표 조사
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-y py-4 md:px-8">
            <h4 className="w-1/2">TREND</h4>
            <p className="text-14 md:text-16">
              상품 관련 시장 트렌드 조사
              <br />
              소비자 상품 선호 조사
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Page;
