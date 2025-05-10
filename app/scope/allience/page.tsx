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
      <h1 className="text-28 md:text-40">ALLIENCE</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          신뢰를 바탕으로 한 협력사들과의 교류를 통해
          <br />
          변화무쌍한 부동산 시장 속 대응력을 갖추기 위해 노력합니다.
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-start pt-20">
        <div className="w-full md:w-1/2 flex flex-col items-center pt-10">
          <h3>협력사</h3>
          <p className="text-22 leading-loose flex mt-10">
            고객이 신뢰 할 수 있는 기업,
            <br />
            믿고 의지 할 수 있는 사업 파트너
            <br />
            함께 이루고 노력하겠습니다
            <br /> 고객만족에 최선을 다하며
            <br /> 사업 파트너로서 최선을 다하겠습니다.
            <br />
            <br /> 현재에 만족하지 않고 더 나은 성과를 위해
            <br /> 노력할 것을 약속 드립니다. <br />
            <br />
            감사합니다.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <Image src="/협력사.png" alt="" width={5863} height={3869} />
        </div>
      </div>
      <div className="flex border-t border-solid mt-20 flex-row flex-wrap pt-20">
        <div className="w-full md:w-1/2 flex flex-col items-center pt-4">
          <h3>주택건설사업자등록증</h3>
        </div>
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <Image
            src="/주택건설사업자등록증.png"
            alt=""
            width={5863}
            height={3869}
          />
        </div>
      </div>
      <div className="flex border-t border-solid mt-20 flex-row flex-wrap pt-20">
        <div className="w-full md:w-1/2 flex flex-col items-center pt-4">
          <h3>한국부동산마케팅협회 공식 회원사</h3>
          <p className="text-22 leading-loose flex mt-10">
            한국부동산마케팅협회의 회원사로서
            <br />
            분양대행자 법정교육을 통한
            <br />
            기본소양과 판매윤리를 투명하게 지키며
            <br /> 리스크 없는 고객의 최대 이익을
            <br />
            위해 끊임 없이 혁신을 거듭하겠습니다.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <Image src="/회원사 1.png" alt="" width={5863} height={3869} />
        </div>
      </div>
    </article>
  );
}

export default Page;
