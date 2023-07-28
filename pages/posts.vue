<script setup>
useHead({ title: "TechNews.Bible | Posts" });

const { data } = await useAsyncData("issues", () =>
  queryContent("posts").find()
);

const filteredData = data.value.filter((post) => post.draft === false);
</script>

<template>
  <main class="container mx-auto px-6 prose prose-invert">
    <h1>Posts</h1>
    <article v-if="!filteredData.length">
      <p>There aren't any posts yet. In future you might find:</p>

      <ul>
        <li>Announcements and opportunities for collaboration</li>
        <li>Updates on the <strong>TechNews.Bible</strong> community</li>
        <li>Original content</li>
      </ul>
    </article>

    <article v-else v-for="post in filteredData">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      <p class="m-0">{{ post.description }}</p>
    </article>
  </main>
</template>
