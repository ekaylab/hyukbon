import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "사업분야",
  description: "부동산 시장 분석을 바탕으로 컨설팅, 리서치, 분양대행, 협력사업을 제공하는 ㈜혁본의 사업분야입니다.",
};

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">사업분야</h1>
      <div className="pt-4 text-16 break-normal">
        <p>살아 숨쉬는 부동산 시장을 분석하고</p>
        <p>최적의 컨설팅과 솔루션을 제안합니다.</p>
      </div>
      <section className="pt-20 md:pt-32">
        <ul className="flex divide-y md:divide-y-0 justify-between md:divide-x-2 divide-gray-200 flex-row text-28 md:text-22 lg:text-28 flex-wrap">
          <li className="w-full md:w-auto pb-4 md:pb-0">
            <Link href="/scope/research">
              <h3>RESEARCH</h3>
              <p className="font-light text-18 lg:text-22">
                리서치 및 시장조사
              </p>
            </Link>
          </li>
          <li className="w-full md:w-auto py-4 md:pt-0 md:pl-5 md:-mr-6">
            <Link href="/scope/consulting">
              <h3>CONSULTING</h3>
              <p className="font-light text-18 lg:text-22">
                마케팅 컨설팅 및 기획
              </p>
            </Link>
          </li>
          <li className="w-full md:w-auto md:pl-5 py-4 md:pt-0 md:-mr-6">
            <Link href="/scope/selling">
              <h3>SELLING</h3>
              <p className="font-light text-18 lg:text-22">부동산 분양대행</p>
            </Link>
          </li>
          <li className="w-1/2 md:w-auto md:pl-5 pt-4 md:pt-0">
            <Link href="/scope/allience">
              <h3>ALLIENCE</h3>
              <p className="font-light text-18 lg:text-22">전략적 제휴</p>
            </Link>
          </li>
        </ul>
      </section>
      <div className="w-full rounded-lg mt-40 hidden md:flex  h-[400px] relative overflow-hidden">
        <Image
          src="/사업분야.jpg"
          alt=""
          width={2000}
          height={1000}
          className="absolute w-full h-full object-cover object-top"
        />
      </div>
    </article>
  );
}

export default Page;
