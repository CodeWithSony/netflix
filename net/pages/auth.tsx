import Image from "next/image";

export default function Auth() {
  return (
    <div className="relative netflix-bg h-full w-full bg-[url('/images/netbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="">
          <img
            src="/images/logo.jpg"
            alt="netflix"
            width={100}
            height={100}
            className="bg-white"
          />
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black  px-16 py-16 self self-center mt-2 lg:w-2/5 lg:max-md bg-opacity-70">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In </h2>
            NETFLIX
          </div>
        </div>
      </div>
    </div>
  );
}
