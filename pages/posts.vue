<script setup>
const { data } = await useAsyncData("issues", () =>
  queryContent("posts").find()
);

const filteredData = data.value.filter((post) => post.draft === false);
</script>

<template>
  <main class="container mx-auto prose prose-invert">
    <h1>Posts</h1>
    <article v-if="!filteredData.length">
      <p>There aren't any posts yet.</p>
    </article>

    <article v-else v-for="post in filteredData">
      <a :href="post._path">{{ post.title }}</a>
      <p class="m-0">{{ post.description }}</p>
    </article>
  </main>
</template>
