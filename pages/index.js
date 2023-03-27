import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Frontend Developer
              <br className="hidden lg:inline-block" />
              이효정 -.&lt;
            </h1>
            <p className="mb-8 leading-relaxed">
              어머니, 계절이 이네들은 까닭입니다. 이름과, 아침이 시인의
              까닭입니다. 너무나 별 못 비둘기, 릴케 나는 거외다. 무엇인지 추억과
              책상을 노새, 어머니, 쉬이 까닭이요, 언덕 봅니다. 차 파란 별을 옥
              위에 동경과 가슴속에 까닭입니다. 하나에 한 별 이웃 피어나듯이
              거외다. 이 이름을 책상을 별들을 하나에 다 가득 토끼, 풀이
              듯합니다. 없이 우는 이름과, 사랑과 나는 아이들의 듯합니다. 밤이
              나는 벌써 아이들의 하나에 이네들은 청춘이 위에 노루, 봅니다.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Portfolio
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
