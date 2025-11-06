<script setup>
const { data: post } = await useAsyncData("bt-post", () =>
  queryContent("posts/bible-translation-and-technology").findOne()
);

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
});
</script>

<template>
  <main class="container mx-auto mb-8 px-6 text-lg prose prose-invert">
    <article>
      <h1>{{ post.title }}</h1>
      <p class="italic">{{ post.description }}</p>
      <ContentRenderer :value="post" />
    </article>
  </main>
</template>
