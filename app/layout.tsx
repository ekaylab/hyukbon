import type {Metadata, Viewport} from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import {RxHamburgerMenu} from "react-icons/rx";

export const metadata: Metadata = {
    metadataBase: new URL('https://hyukbon.com'),
    title: {
        default: '㈜혁본 | 분양대행·부동산개발',
        template: '%s | ㈜혁본',
    },
    description: '㈜혁본은 분양 대행 및 부동산 개발과 관련된 전과정을 포괄적으로 수행하고있는 회사입니다.',
    openGraph: {
        title: '㈜혁본',
        description: '㈜혁본은 분양 대행 및 부동산 개발과 관련된 전과정을 포괄적으로 수행하고있는 회사입니다.',
        url: 'https://hyukbon.com',
        siteName: '㈜혁본',
        locale: 'ko_KR',
        type: 'website',
        images: [{url: '/main.jpg', alt: '혁본'}],
    },
    authors: [{name: '임익환'}, {name: '김다민'}],
    formatDetection: {
        telephone: false,
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: 'white',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <head>
            <meta name="naver-site-verification" content="716b87f5b19c4f5e72515e83be5f2d1f0e35b745"/>
        </head>
        <body>
        <header className="mx-auto h-14 md:h-20 sticky border-b top-0 border-solid z-50 bg-white">
            <div
                className="mx-auto px-4 md:px-0 flex items-center h-full w-full md:w-[712px] xl:w-[1316px] lg:w-[952px]">
                <nav className="flex flex-row w-full justify-between relative">
                    <Link href="/" className="flex items-center">
                        <Image
                            className="w-[120px] md:w-[155px]"
                            src="/혁본로고.png"
                            alt="혁본로고"
                            width={155}
                            height={30}
                        />
                    </Link>
                    <ul className="hidden md:flex flex-row flex-wrap justify-between text-18 w-3/5">
                        <li className="flex items-center"><Link href="/about">회사소개</Link></li>
                        <li className="flex items-center"><Link href="/scope">사업분야</Link></li>
                        <li className="flex items-center"><Link href="/performance">업무실적</Link></li>
                        <li className="flex items-center"><Link href="/recruite">인재채용</Link></li>
                    </ul>
                    <div className="flex items-center md:hidden">
                        <label htmlFor="menu-toggle" className="cursor-pointer">
                            <RxHamburgerMenu className="text-22"/>
                        </label>
                        <input type="checkbox" id="menu-toggle" className="hidden peer"/>
                        <ul className="absolute w-screen top-10 p-0 bg-white text-22 z-50 -left-4 right-0 shadow
          max-h-0 overflow-hidden peer-checked:p-5 peer-checked:max-h-screen">
                            <li className="border-b my-4"><Link href="/about">회사소개</Link></li>
                            <li className="border-b my-4"><Link href="/scope">사업분야</Link></li>
                            <li className="border-b my-4"><Link href="/performance">업무실적</Link></li>
                            <li className="border-b my-4"><Link href="/recruite">인재채용</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <main>{children}</main>
        <footer className="bg-neutral-800 md:px-0 text-14 py-14 text-txt-06 flex items-center justify-center ">
            <div className="max-w-[384px] flex flex-row md:max-w-none md:w-[712px] lg:w-[1000px] xl:w-[1500px]">
                <div className=" flex flex-col">
                    <h4 className="text-30">HYUKBON</h4>
                    <p className="mt-4">
                        주식회사 혁본 ㅣ 경기도 화성시 동탄기흥로 614,<br className="md:hidden"/> 더퍼스트타워2차
                        301호 (영천동) ㅣ<br className="md:hidden"/> 대표번호 : 1522-9432 ㅣ 팩스 : 050-4132-9432
                    </p>
                    <p>Copyright(c) HYUKBON.co.Ltd., All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
