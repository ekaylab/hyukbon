import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import MainPerformanceCarousel from "@/app/MainPerformanceCarousel";

export default function Home() {
  return (
    <article className="flex flex-col flex-wrap px-3.5 md:px-0 overflow-x-hidden ">
      <div className="w-full max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
        <Link
          href="/about"
          className="pt-3 md:pt-8 lg:pt-4 group select-none flex text-white"
        >
          <div className="rounded-2xl overflow-hidden relative lg:h-[486px] xl:h-[621px]">
            <div className="absolute top-4 md:top-7 lg:top-12 lg:left-10 xl:left-12 left-6 md:left-8 z-10 text-28">
              <p className="text-21 md:text-28 inline-block">
                고객의 가치 실현을 최우선으로
              </p>
              <h3 className="text-28 md:text-38 font-bold tracking-tight -mt-1">
                빛나는 성과를 만듭니다.
              </h3>
            </div>
            <Image
              src="/메인.jpg"
              alt="main_image"
              className="brightness-50 md:hidden h-[240px] group-hover:brightness-100 main-duration-300 "
              height={740}
              width={1316}
            />
            <Image
              src="/메인(1).jpg"
              alt="main_image"
              className="brightness-50 hidden md:flex group-hover:brightness-100 main-duration-300 animate-zoom-in"
              height={740}
              width={1316}
            />
            <div className="absolute text-14 flex flex-row lg:text-22 font-medium bottom-4 md:bottom-6 lg:bottom-9 xl:bottom-10 lg:right-10 right-4  md:right-6">
              <Link
                href="/(주)혁본 지명원.pdf"
                className="flex hover:text-gray-300 flex-row main-duration-300 items-center pr-10"
              >
                <p className="pr-2">회사 지명원 다운로드</p>
                <span className="text-18 md:text-22">
                  <FaArrowCircleRight />
                </span>
              </Link>
              <Link
                href="/about"
                className="flex hover:text-gray-300 main-duration-300 flex-row items-center"
              >
                <div className="pr-2">회사소개 바로가기</div>
                <span className="text-18 md:text-22">
                  <FaArrowCircleRight />
                </span>
              </Link>
            </div>
          </div>
        </Link>
        <section className="">
          <div className="pt-3 md:pt-2.5 lg:pt-4  text-white">
            <ul className="flex flex-wrap flex-col md:flex-row justify-between select-none">
              <li className="bg-gray-100 group rounded-2xl text-16 overflow-hidden w-full h-[220px] md:h-[231px] relative md:w-[32.5%]">
                <Link href="/scope">
                  <div className="absolute left-6 top-6 lg:left-10 xl:left-11 lg:top-10 xl:top-11 z-10">
                    <p>최적의 컨설팅과 솔루션 제공</p>
                    <h3 className="text-28"> 사업분야</h3>
                  </div>
                  <Image
                    className="brightness-50 group-hover:brightness-100 main-duration-300 h-full"
                    src="/사업분야.jpg"
                    alt="분양대행이미지"
                    width={428}
                    height={340}
                  />
                  <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                    <p className="pr-2">사업분야 바로가기</p>
                    <span className="text-18">
                      <FaArrowCircleRight />
                    </span>
                  </div>
                </Link>
              </li>
              <li className="bg-gray-100 group rounded-2xl text-16 mt-3 md:mt-0 overflow-hidden w-full h-[220px] md:h-[231px] relative md:w-[32.5%]">
                <Link href="/performance">
                  <div className="absolute left-6 top-6 lg:left-10 xl:left-11 lg:top-10 xl:top-11 z-10">
                    <p>신의, 성실, 신뢰 기반의</p>
                    <h3 className="text-28"> 업무실적</h3>
                  </div>
                  <Image
                    className="brightness-50 group-hover:brightness-100 main-duration-300 h-full"
                    src="/업무실적.jpg"
                    alt="업무실적이미지"
                    width={700}
                    height={500}
                  />
                  <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                    <p className="pr-2">업무실적 바로가기</p>
                    <span className="text-18">
                      <FaArrowCircleRight />
                    </span>
                  </div>
                </Link>
              </li>
              <li
                suppressHydrationWarning
                className="bg-gray-100 group rounded-2xl text-16 mt-3 md:mt-0 overflow-hidden w-full h-[220px] md:h-[231px] relative md:w-[32.5%]"
              >
                <div className="absolute left-6 top-6 lg:left-10 xl:left-11 lg:top-10 xl:top-11 z-10">
                  <p>A부터 Z까지 모두모두</p>
                  <h3 className="text-28">인재채용</h3>
                </div>
                <Link
                  href="/recruite"
                  target="_blank"
                >
                  <Image
                    className="brightness-50 group-hover:brightness-100 main-duration-300 h-full"
                    src="/인재채용.jpg"
                    alt="인재채용이미지"
                    width={600}
                    height={400}
                  />
                </Link>
                <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                  <p className="pr-2">인재채용 보러가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="mt-10 py-10 flex flex-col items-start relative">
          <div className="absolute -z-10 left-1/2 right-1/2 top-0 -translate-x-1/2 bg-zinc-100 w-screen h-full"></div>
          <h2 className="text-26">고객이 있기에 저희가 있습니다.</h2>
          <p className="text-14 md:text-16 pt-6 md:pt-2">
            혁본은 오로지 “가치 창출”과 “고객 감동”을 위해 움직입니다.
            <br /> 최선을 다해 차별화된 마케팅 서비스를 제공하겠습니다.
          </p>
          <div className="mt-10 xl:mt-20 md:px-0">
            <ul className="lg:divide-y-0 text-14 md:text-16 flex flex-col lg:flex-row">
              <li className="pb-3 md:py-5 lg:pr-5 border-b">
                <h4 className="text-16 md:text-18">최대 이익 창출</h4>
                <p className="font-light pt-3">
                  축적된 노하우와 데이터베이스를 통해<br/> 최소의 비용으로 최대의 고객이익 창출
                </p>
              </li>
              <li className="py-3 md:py-5 lg:px-5 border-b">
                <h4 className="text-16 md:text-18">가치의 극대화</h4>
                <p className="font-light pt-3">
                  경험이 풍부한 임직원, 부동산 관련업계를 통한<br/> 상호 소통 중점의 유기적 업무 플로우 구축
                </p>
              </li>
              <li className=" py-3 md:py-5 lg:px-5 border-b">
                <h4 className="text-16 md:text-18">신의 성실 윤리</h4>
                <p className="font-light pt-3">
                  철저한 윤리규정 준수를 통한 투명한 업무 수행<br/>고객의 이익을 우선시하는 운영 방안 기획
                </p>
              </li>
              <li className="pt-3 md:pt-5 lg:pl-5">
                <h4 className="text-16 md:text-18">고객의 만족도</h4>
                <p className="font-light pt-3">
                  안정성을 기반으로 높은 품질의 서비스<br/>수행과정 및 결과에 대한 상세한 피드백 제공
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="relative lg:flex flex-row h-[480px] hidden">
          <div className="absolute -z-10 left-1/2 right-1/2 top-0 -translate-x-1/2 bg-zinc-100 w-screen h-full flex flex-row">
            <span className="flex w-5/12 grow-0 relative">
              <Image
                src="/혁본사무실.png"
                alt="혁본사무실"
                fill
                className="flex"
              />
            </span>
            <div className="w-7/12 flex-col flex h-full items-start justify-center relative">
              <div className="bg-black z-10 opacity-70 w-full h-full absolute"></div>
              <Image src="/혁본사무실2.png" alt="" fill />
              <div className="z-20 text-white pl-10 xl:pl-20">
                <h3 className="text-36">고객 중심의 최대 이익</h3>
                <p className="text-18 mt-6">
                  혁본은 오로지 고객 중심의 최대 이익이라는 목표와
                  <br /> 상품의 가치 실현에 무한한 책임감과 희로애락을 느끼는
                  기업입니다.
                  <br />
                  <br /> 20년 이상의 노하우와 데이터 베이스를 통해
                  <br /> 부동산 마케팅 업계에서 가장 정직하고 실력 있는 기업이
                  되겠습니다.
                  <br />
                  <br /> 갇혀 있는 조직이 아닌 구성원과의 소통, 다양한 협력을
                  통해
                  <br /> 유기적 시스템으로 효율성을 극대화합니다.
                  <br />
                  <br /> 다년간 전문성을 갖춘 인력들과 시스템으로
                  <br /> 고객 중심의 분양 파트너로 성공적인 성과를
                  이뤄내겠습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-20">
          <div className="flex flex-row items-center justify-between">
            <h2 className="pr-2.5">사업실적</h2>
            <Link
              href="/performance"
              className="flex items-center text-14 font-medium md:text-21 rounded-lg pl-4 py-1.5"
            >
              모아보기
              <FaArrowCircleRight className="ml-1.5" />
            </Link>
          </div>
          <div className="pt-10">
            <MainPerformanceCarousel />
          </div>
        </section>
      </div>
    </article>
  );
}
