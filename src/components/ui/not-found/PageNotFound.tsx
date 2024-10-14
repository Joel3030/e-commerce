import Image from "next/image";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="h[800px] flex w-full flex-col-reverse items-center justify-center align-middle md:flex-row">
      <div className="mx-5 px-5 text-center">
        <h2 className="text-9xl">404</h2>
        <p className="text-xl font-semibold">Whoops! Sorry.</p>
        <p className="font-light">
          <Link
            href={"/"}
            className="font-normal transition-all hover:underline"
          >
            Go to home
          </Link>
        </p>
      </div>
      <div className="mx-5 px-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
