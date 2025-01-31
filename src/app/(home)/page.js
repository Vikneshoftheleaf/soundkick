import NavBar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SoundKick",
  description: "Free Tools for Singers!",
};


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">Train Your Musical Skills Like a Pro</h2>
        <p className="text-lg text-gray-700 mb-6">Enhance your music skills with fun and interactive tools designed for musicians of all levels.</p>
        <Link href={"/#features"} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
          Get Started
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </span>

        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow-lg text-center">
          <Image className="mb-4" src={'/metronome.png'} height={100} width={100} alt="Metronome"></Image>
          <h3 className="text-xl font-semibold mb-2">Metronome</h3>
          <p className="text-gray-600 mb-4">Perfect your timing and rhythm with a metronome.</p>
          <Link href={'/metronome'}>
            <button className="flex items-center gap-2  bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Try Metronome
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
          <Image className="mb-4" src={'/ear.png'} height={100} width={100} alt="Ear"></Image>

          <h3 className="text-xl font-semibold mb-2">Ear Training</h3>
          <p className="text-gray-600 mb-4">Improve your musical ear with our interactive exercises.</p>
          <Link href={'/ear-training'}>
            <button className="flex items-center gap-2  bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Try Ear Training
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg></button>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
          <Image className="mb-4" src={'/piano.png'} height={100} width={100} alt="Piano"></Image>
          <h3 className="text-xl font-semibold mb-2">Piano</h3>
          <p className="text-gray-600 mb-4">Learn piano notes, chords, and practice your skills.</p>
          <Link href={'/piano'}>
            <button className="flex items-center gap-2  bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Try Piano
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg></button>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
          <Image className="mb-4" src={'/music.png'} height={100} width={100} alt="Music"></Image>
          <h3 className="text-xl font-semibold mb-2">Singing in Key</h3>
          <p className="text-gray-600 mb-4">Sing in tune with real-time feedback on your pitch.</p>
          <Link href={'/sing-in-key'}>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Try Singing
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg></button>
          </Link>
        </div>


      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">How to Start</h2>
          <p className="text-lg text-gray-700 mb-8">Follow these simple steps to begin your musical journey!</p>

          {/* Steps Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">

              <h3 className="text-xl font-semibold mb-2 flex gap-2 items-center w-full justify-center">
                <span className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
                  </svg>
                </span>
                <span>
                  Choose a Feature
                </span>
              </h3>
              <p className="text-gray-600">Pick from our various tools: ear training, piano lessons, singing in key, or metronome.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">

              <h3 className="text-xl font-semibold mb-2 flex gap-2 items-center w-full justify-center">
                <span className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                  </svg>
                </span>
                <span>
                  Set Your Preferences
                </span>
              </h3>

              <p className="text-gray-600">Adjust settings like BPM, difficulty, or key to personalize your experience.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 flex gap-2 items-center w-full justify-center">
                <span className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                  </svg>
                </span>
                <span>
                  Start Practicing
                </span>
              </h3>

              <p className="text-gray-600">Begin your practice with real-time feedback and improve your skills!</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 w-full flex justify-center">
            <Link href={'/#features'}>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                Get Started Now
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 SoundKicks</p>
          {/*
          <nav>
            <ul className="flex justify-center space-x-6 mt-2">
              <li><Link href={'/'} className="hover:text-yellow-300">Terms of Service</Link></li>
              <li><Link href={'/'} className="hover:text-yellow-300">Privacy Policy</Link></li>
            </ul>
          </nav>
  */}
        </div>
      </footer>
    </div>
  );
}
