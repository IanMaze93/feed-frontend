import Banner from "../../../components/common/banner";

type Props = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Feed({ params }: Props) {
  const { userId } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p
          className="self-center font-bold"
          style={{
            color: "green",
          }}
        >
          {" "}
          Logged in! UserId: {userId}
        </p>
      </main>
    </div>
  );
}
