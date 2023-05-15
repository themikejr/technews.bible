<template>
  <div class="container mx-auto px-4 prose prose-invert">
    <h1 class="text-center font-black">
      A newsletter for Bible translation technologists
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

    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      action="
    https://buttondown.email/api/emails/embed-subscribe/technews.bible
  "
      method="post"
      target="popupwindow"
    >
      <h3 class="text-black text-center m-0 font-black">
        Join the Newsletter!
      </h3>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email Address
        </label>

        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>
      <div class="flex items-center justify-end">
        <input type="hidden" value="1" name="embed" />
        <input
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Subscribe"
        />
      </div>
    </form>

    <!-- <form -->
    <!--   action=" -->
    <!--     https://buttondown.email/api/emails/embed-subscribe/themikejr -->
    <!--   " -->
    <!--   method="post" -->
    <!--   target="popupwindow" -->
    <!--   class="embeddable-buttondown-form" -->
    <!-- > -->
    <!--   <label for="email">Email</label> -->
    <!--   <input -->
    <!--     type="email" -->
    <!--     name="email" -->
    <!--     placeholder="you@example.com" -->
    <!--   /> -->
    <!--   <input type="hidden" value="1" name="embed" /> -->
    <!--   <input type="submit" value="Subscribe" /> -->
    <!--   <p> -->
    <!--     <a href="https://buttondown.email" target="_blank"> -->
    <!--         Powered by Buttondown. -->
    <!--     </a> -->
    <!--   </p> -->
    <!-- </form> -->
  </div>
</template>
