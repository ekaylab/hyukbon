import React from "react";
import Link from "next/link";
import Image from "next/image";
import performanceList from "@/app/assets/performance";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

async function Page(props: { searchParams: Promise<{ category: string }> }) {
  const searchParams = await props.searchParams;
  const category = searchParams.category;

  const filteredPerformanceByCategory = performanceList.filter(
    (property: any) => !category || property.category === category,
  );

  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">업무실적</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          저희 혁본은 고객의 상품 가치 격상 및 성공적인 사업을 위해
          <br /> 투입부터 마지막까지 최선을 다하여 책임지는 기업입니다.
        </p>
      </div>

      <section className="pt-20 md:pt-32">
        <div className="mb-5">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row flex-wrap justify-start">
              <NavigationMenuItem>
                <Link
                  scroll={false}
                  href="/performance"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${!category ? "bg-accent" : ""}`}
                  >
                    전체
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  scroll={false}
                  href="/performance?category=공동주택"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${category === "공동주택" ? "bg-accent" : ""}`}
                  >
                    공동주택
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  scroll={false}
                  href="/performance?category=상업시설"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${category === "상업시설" ? "bg-accent" : ""}`}
                  >
                    상업시설
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  scroll={false}
                  href="/performance?category=오피스텔"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${category === "오피스텔" ? "bg-accent" : ""}`}
                  >
                    오피스텔
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  scroll={false}
                  href="/performance?category=오피스"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${category === "오피스" ? "bg-accent" : ""}`}
                  >
                    오피스
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  scroll={false}
                  href="/performance?category=생활숙박시설"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${category === "생활숙박시설" ? "bg-accent" : ""}`}
                  >
                    생활숙박시설
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <ul className="flex flex-row flex-wrap">
          {filteredPerformanceByCategory.map(
            (performance: any, index: number) => (
              <li
                className="relative md:w-[337px] md:mr-4 lg:mr-5 h-[400px] hover:opacity-80 main-duration-300 md:h-[460px] w-full flex lg:w-[410px] mt-4 lg:mt-5 overflow-hidden md:justify-center"
                key={index}
              >
                <div
                  className="shrink-0 overflow-hidden bg-gray-100 flex flex-col w-full relative justify-between borders rounded-2xl"
                >
                  <div className="p-4 md:p-5.5 xl:px-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center xl:items-start">
                      <h3 className="text-18 lg:text-24">{performance.name}</h3>
                    </div>
                    <ul className="text-12 lg:text-14">
                      <li className="pt-5 md:pt-6 flex items-center">
                        <h4 className="mr-3">위치</h4>
                        <p className="pl-1"> : {performance.address}</p>
                      </li>
                      <li className="flex items-center">
                        <h4 className="mr-3">규모</h4>
                        <p className="pl-1"> : {performance.scale}</p>
                      </li>
                      {performance.units && (
                        <li className="flex items-center">
                          <h4>세대수</h4>
                          <p className="pl-1"> : {performance.units}</p>
                        </li>
                      )}
                      <li className="flex items-center">
                        <h4>건설사</h4>
                        <p className="pl-1"> : {performance.contractor}</p>
                      </li>
                      <li className="flex items-center">
                        <h4 className="mr-3">일시</h4>
                        <p className="pl-1"> : {performance.year}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full h-3/5 shrink-0">
                    <Image
                      priority={true}
                      fill
                      src={`/실적/${performance.name}.jpg`}
                      alt={performance.name}
                    />
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </section>
    </article>
  );
}

export default Page;
