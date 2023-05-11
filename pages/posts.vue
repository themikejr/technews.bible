<script setup>
const { data } = await useAsyncData("issues", () =>
  queryContent("posts").find()
);
</script>

<template>
  <main class="container mx-auto prose prose-invert">
    <h1>Posts</h1>
    <article v-if="!data.length">
      <p>There aren't any posts yet.</p>
    </article>

    <article v-else v-for="issue in data">
      <a :href="issue._path">{{ issue.title }}</a>
      <p class="m-0">{{ issue.description }}</p>
    </article>
  </main>
</template>
