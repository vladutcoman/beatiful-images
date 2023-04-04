import React from "react";
import { PostReel } from "./components/PostsFeed";

function App() {
  return (
    <main className="text-center min-h-screen">
      <h1 className="mb-4 text-4xl px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
        Beautiful Images
      </h1>
      <section className="mt-12 flex align-middle justify-center">
        <PostReel />
      </section>
    </main>
  );
}

export default App;
