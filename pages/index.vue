<template>
  <div class="container mx-auto px-4 prose prose-invert">
    <h1 class="text-center">
      A newsletter for technologists working on Bible translation
    </h1>
    <p class="font-thin text-center text-2xl">
      Discover. Learn. Share. Collaborate.
    </p>

    <p>
      TechNews.Bible exists to curate and develop content for technologists in
      the Bible translation community. We believe that sharing knowledge will
      help us learn faster and collaborate better. Examples of the content we
      aim to share:
    </p>

    <ol>
      <li>
        <strong>News</strong>: releases and updates for libraries, tools,
        content, and projects.
      </li>
      <li>
        <strong>Deep Dives</strong>: tutorials, demonstrations, case studies,
        and post-mortems.
      </li>
      <li>
        <strong>Community Interaction</strong>: Requests for feedback, events,
        employment opportunities, and more.
      </li>
    </ol>

    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="email-address"
        >
          Email Address
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email-address"
          type="text"
          placeholder="Enter your email address here"
        />
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
</template>
