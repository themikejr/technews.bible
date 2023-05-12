<script setup>
const { data } = await useAsyncData("issues", () =>
  queryContent("issues").find()
);
</script>

<template>
  <main class="container mx-auto px-4 prose prose-invert">
    <h1>Past Issues</h1>
    <article v-for="issue in data">
      <a :href="issue._path">{{ issue.title }}</a>
      <p class="m-0">{{ issue.description }}</p>
    </article>
  </main>
</template>
