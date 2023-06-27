<script setup>
useHead({ title: "TechNews.Bible | Issues" });

const { data } = await useAsyncData("issues", () =>
  queryContent("issues")
    .where({ draft: { $ne: true } })
    .find()
);
</script>

<template>
  <main class="container mx-auto px-6 prose prose-invert">
    <h1>Issues</h1>

    <article v-for="issue in data">
      <NuxtLink :to="issue._path">{{ issue.shortTitle }}</NuxtLink>
      <p class="m-0">{{ issue.description }}</p>
      <br />
    </article>
  </main>
</template>
