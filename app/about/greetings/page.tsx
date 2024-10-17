import React from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-32 max-w-[384px] md:w-[712px] lg:w-[802px]  md:max-w-none mx-auto text-26 md:text-30">
      <div className="hidden xl:fixed xl:inline-block left-10 top-40 rounded overflow-hidden">
        <Link
          href="/about"
          className="w-full flex h-full bg-gray-200 p-10 text-18"
        >
          회사소개
        </Link>
        <ul className="pl-3 pt-1 divide-y-2 text-16">
          <li className="py-2">
            <Link href="/about/greetings">인사말</Link>
          </li>
          <li className="py-2">
            <Link href="/about/hierarchy">조직도</Link>
          </li>
          <li className="py-2">
            <Link href="/about/philosophy">경영이념</Link>
          </li>
          <li className="py-2">
            <Link href="/about/capability">사업역량</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-28 md:text-40">GREETINGS</h1>
      <div className="text-14 md:text-18 pt-4">
        <p>
          20년 이상의 노하우와 데이터 베이스를 통해
          <br /> 부동산 마케팅 업계에서 가장 정직하고 실력 있는 파트너가
          되겠습니다.
        </p>
      </div>
      <section className="flex w-full pt-14 md:pt-20   mx-auto">
        <div className="w-full p-4 text-14 md:text-16 lg:text-18 text-txt-03">
          <p className="leading-8">
            안녕하십니까? <br />
            <br />
            ㈜혁본은 부동산 개발 및 마케팅의 새로운 기준을 제시하는 전문
            기업입니다.
            <br />
            <br /> 사업초기 타당성 분석부터 시장 조사, 분양 판매 전략 수립,
            마케팅 및 관리 계획에 이르기까지
            <br /> 부동산 개발의 모든 과정을 책임지며, 고객의 성공을 위한 최적의
            솔루션을 제공합니다.
            <br />
            <br /> 저희는 지난 20여년간 축적된 경험과 현장 노하우를 바탕으로 한
            무결점주의를 추구하며,
            <br /> 뛰어난 업무 추진력을 갖춘 임직원들과 열정적인 젊은 인재들로
            구성되어 있습니다.
            <br />
            <br /> 대한민국 부동산 마케팅 서비스의 새로운 패러다임을 만들어가는 것에
            최선을 다하고 있습니다.
            <br /> 아울러, 서울 경기 뿐 아닌 전국적인 인적 네트워크를 통해
            부동산 시장변동에 신속하게 대응하며,
            <br /> 최소의 비용으로 최고의 효과를 창출하여 고객의 이익을
            극대화하겠습니다.
            <br />
            <br /> 앞으로도 고객의 성공을 위해 혁신적인 부동산 마케팅 솔루션을
            제공하는 ㈜혁본이 되겠습니다.
            <br />
            <br /> 감사합니다
          </p>
          <h3 className="flex justify-end">주식회사 혁본 임직원 일동</h3>
        </div>
      </section>
      <div className="w-full rounded-lg mt-32 flex h-[300px] relative overflow-hidden">
        <Image
          src="/그림1.jpg"
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
