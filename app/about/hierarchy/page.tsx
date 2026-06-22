import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "조직구성",
  description: "구성원과 함께 시너지를 극대화하는 ㈜혁본의 조직구성을 안내합니다.",
};

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
      <h1 className="text-28 md:text-40">HIERACHY</h1>
      <div className="text-14 md:text-18 pt-4">
        <p>
          갇혀 있는 조직이 아닌 구성원과의 소통, 다양한 협력을 통해
          <br />
          유기적 시스템으로 효율성을 극대화합니다.
        </p>
      </div>
      <div className="pt-12">
        <Image
          src="/hierachy.png"
          alt="조직도"
          width={1316}
          height={1300}
          className="w-4/5 mx-auto"
        />
      </div>
    </article>
  );
}

export default Page;
