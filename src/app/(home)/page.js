import Link from "next/link";

export const metadata = {
  title: "SoundKick",
  description: "Free Tools for Singers!",
};

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen p-8 grid grid-cols-2 gap-6">
        <Link href={'/ear-training'} className="flex items-end justify-start transition-all ease-in-out col-span-1 border-green-800 rounded-lg bg-green-100 p-4 active:border-b-2 active:border-r-2 border-b-8 border-r-8">
          <h1 className="text-2xl font-semibold flex gap-2 items-center">
            Ear Training
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </span>
          </h1>
        </Link>
        <Link href={'/piano'} className="flex items-end justify-start transition-all ease-in-out col-span-1 border-red-800 rounded-lg bg-red-100 p-4 active:border-b-2 active:border-r-2 border-b-8 border-r-8">
          <h1 className="text-2xl font-semibold flex gap-2 items-center">
            Practice Listening
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </span>
          </h1>
        </Link>
        <Link href={'/sing-in-key'} className="flex items-end justify-start transition-all ease-in-out col-span-2 border-blue-800 rounded-lg bg-blue-100 p-4 active:border-b-2 active:border-r-2 border-b-8 border-r-8">
        <h1 className="text-2xl font-semibold flex gap-2 items-center">
                Ear Training
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                </span>
                </h1>
        </Link>
      </div>
    </main>
  );
}
