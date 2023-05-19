<script setup>
useHead({ title: "TechNews.Bible | Home" });
</script>

<template>
  <div class="container mx-auto px-6 prose prose-invert">
    <h1 class="text-center font-black">
      A newsletter for Bible translation technologists
    </h1>
    <p class="font-thin text-white text-center text-2xl">
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

    <JoinNewsletter />
  </div>
</template>
