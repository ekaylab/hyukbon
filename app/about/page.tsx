import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "회사소개",
  description: "고객 중심의 최대 이익을 목표로 하는 ㈜혁본의 인사말, 경영이념, 조직구성, 수행역량을 소개합니다.",
};

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">회사소개</h1>
      <div className="pt-4 text-16 break-normal">
        <p>고객 중심의 최대 이익이라는 목표와</p>
        <p>상품의 가치 실현에 무한한 책임감과 희로애락을 느끼는 기업입니다.</p>
      </div>
      <section className="pt-20 md:pt-32">
        <ul className="flex divide-y md:divide-y-0 justify-between md:divide-x-2 divide-gray-200 flex-row text-28 md:text-22 lg:text-28 flex-wrap">
          <li className="w-full md:w-auto pb-4 md:pb-0">
            <Link href="/about/greetings">
              <h3>GREETING</h3>
              <p className="font-light text-18 lg:text-22">인사말</p>
            </Link>
          </li>
          <li className="w-full md:w-auto py-4 md:pt-0 md:pl-5 md:-mr-8">
            <Link href="/about/hierarchy">
              <h3>HIERARCHY </h3>
              <p className="font-light text-18 lg:text-22">조직도</p>
            </Link>
          </li>
          <li className="w-full md:w-auto md:pl-5 py-4 md:pt-0 md:-mr-6">
            <Link href="/about/philosophy">
              <h3>PHILOSOPHY</h3>
              <p className="font-light text-18 lg:text-22">경영이념</p>
            </Link>
          </li>
          <li className="w-1/2 md:w-auto md:pl-5 pt-4 md:pt-0">
            <Link href="/about/capability">
              <h3>CAPABILITY</h3>
              <p className="font-light text-18 lg:text-22">사업역량</p>
            </Link>
          </li>
        </ul>
      </section>
      <div className="w-full rounded-lg mt-10 md:mt-40 md:flex hidden md:h-[400px] relative overflow-hidden">
        <div className="flex relative w-1/2">
          <Image
            src="/혁본사무실.png"
            alt=""
            fill
            className="relative flex w-full h-full"
          />
        </div>
        <div className="w-1/2 relative">
          <div className="bg-black opacity-80 z-10 absolute h-full w-full top-0"></div>
          <div className="z-20 absolute p-10 text-white flex flex-col h-full">
            <p className="text-18">회사 연혁</p>
            <ul className="border-l border-solid pl-4 text-16 h-full flex flex-col justify-between py-2 mt-4">
              <li className="flex">
                <p className="pr-6">2023. 07</p>
                <p>본사 이전 “경기도 화성시 동탄기흥로 614</p>
              </li>
              <li className="flex">
                <p className="pr-6">2019. 11</p>
                <p>주택건설사업자등록</p>
              </li>
              <li className="flex">
                <p className="pr-6">2019. 10</p>
                <p>납입 자본금 3억원 증자</p>
              </li>
              <li className="flex">
                <p className="pr-6">2019. 09</p>
                <p>한국부동산마케팅협회 회원사 등록</p>
              </li>
              <li className="flex">
                <p className="pr-6">2018. 03</p>
                <p>1군 브랜드 시공사 협력업체 등록</p>
              </li>
              <li className="flex">
                <p className="pr-6">2015. 06</p>
                <p>부동산 마케팅업을 목적으로 ㈜혁본 창립</p>
              </li>
            </ul>
          </div>
          <Image
            src="/혁본사무실2.png"
            alt=""
            fill
            className="relative flex w-full h-full"
          />
        </div>
      </div>
    </article>
  );
}

export default Page;
