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
      <p>There aren't any posts yet.</p>
    </article>

    <article v-else v-for="post in filteredData">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      <p class="m-0">{{ post.description }}</p>
    </article>
  </main>
</template>
