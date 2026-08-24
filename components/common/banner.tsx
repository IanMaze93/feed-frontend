import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-white dark:bg-black">
        <Image
          className="-translate-x-3"
          src="/logo-feed.png"
          alt="The Feed logo"
          width={500}
          height={500}
          priority
        />
      </div>

      <div
        className="
                h-[2px] w-full
                bg-[#ff6a00]
                shadow-[0_1px_5px_rgba(255,106,0,1),0_3px_12px_rgba(255,106,0,0.6)]
                "
      />
    </>
  );
}
