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
      <h1 className="text-28 md:text-40">CONSULTING</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          고객의 이익을 보호하고
          <br />
          차별화된 서비스를 제공합니다
        </p>
      </div>
      <div className="flex flex-wrap flex-row pt-20">
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <div className="absolute z-10 top-4 lg:top-10 left-5 lg:left-11 text-white text-16 md:text-18">
            <h3 className="text-26">CONSULTING BUSINESS</h3>
            <hr className="my-2" />
            <p>
              최고의 가치를 창출하고
              <br />
              고객이 원하는 해답을 찾아냅니다.
            </p>
          </div>
          <Image
            src="/consulting.jpg"
            alt=""
            className="w-full h-[400px] brightness-50"
            width={5863}
            height={3869}
          />
        </div>
        <ul className="w-full md:w-1/2 p-4">
          <li className="flex flex-row items-center justify-start border-t py-4 lg:px-8">
            <h4 className="w-1/2">환경분석</h4>
            <p className="text-16">
              지역 특성 및 동향 분석
              <br />
              상품 특화 방향 분석
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-t py-4 lg:px-8">
            <h4 className="w-1/2">전략수립</h4>
            <p className="text-16">
              마케팅 사례 및 타겟 조사
              <br />
              성공 전략 계획 수립
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-y py-4 lg:px-8">
            <h4 className="w-1/2">대안제시</h4>
            <p className="text-16">
              지역적 특화 방안 모색
              <br />
              입지 최적화 대안제시
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Page;
