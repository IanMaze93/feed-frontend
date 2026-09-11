import { backendGet } from "@/app/lib/server/routes";
import { capitalize } from "@/app/lib/utils/formatting";
import { getBadgeColor } from "@/app/lib/utils/badge";
import Banner from "../../../components/common/banner";
import type { AllTopicStoriesResponse } from "@/app/types/topics";

type Props = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Feed({ params }: Props) {
  const { userId } = await params;

  const data: AllTopicStoriesResponse = await backendGet(
    `users/${userId}/stories`
  );

  return (
    <div className="h-screen min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <Banner />

      <main className="h-[calc(100vh-145px)] w-full overflow-hidden">
        <div className="flex h-full w-full gap-6 overflow-x-auto p-4">
          {data.stories.map((topic) => (
            <section
              key={topic.topic}
              className="
                h-full
                basis-full
                sm:basis-[calc(50%-0.75rem)]
                lg:basis-[calc(25%-1.125rem)]
                shrink-0
                grow-0
                flex
                flex-col
                rounded-md
                border-2
                border-[#ff6a00]
                shadow-md
              "
            >
              <h2 className="mb-0 border-b-2 border-[#ff6a00] text-center text-2xl font-bold text-white p-4">
                {topic.topic}
              </h2>

              <div className="flex-1 overflow-y-auto">
                {topic.entries
                  .sort(
                    (a, b) =>
                      new Date(b.published_at).getTime() -
                      new Date(a.published_at).getTime()
                  )
                  .map((story) => (
                    <div
                      key={story._id}
                      className="border-b-2 border-[#ff6a00]"
                    >
                      <a
                        href={story.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg text-black dark:text-white"
                      >
                        <h3
                          className={`text-center font-bold ${getBadgeColor(story.source)} text-white`}
                        >
                          {capitalize(story.source)}
                        </h3>

                        <p className="p-4 text-center">{story.title}</p>
                        <p className="p-4 text-sm text-center text-gray-500">
                          {new Date(story.published_at).toLocaleString()}
                        </p>
                      </a>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
