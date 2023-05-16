<script setup>
useHead({
  title: "TechNews.Bible",
  meta: [
    {
      name: "description",
      content: "A newsletter for Bible translation technologists.",
    },
  ],
  bodyAttrs: {
    // GRADIENT
    class: "bg-gradient-to-r from-slate-900 to-blue-900",
    // Standard DARK/LIGHT
    // class: 'bg-white dark:bg-slate-900 text-black dark:text-white'
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <header class="h-5 flex justify-between prose prose-invert max-w-none">
      <div class="p-4 font-black text-xl">
        <a class="no-underline" href="/">TechNews.Bible</a>
      </div>

      <nav class="p-4 flex justify-evenly gap-3">
        <a class="" href="/about">About</a>
        <a href="/issues">Past Issues</a>
        <a href="/posts">Posts</a>
      </nav>
    </header>

    <div class="mb-auto my-12">
      <slot />
    </div>

    <footer
      class="prose prose-invert flex justify-between p-4 bg-slate-900 max-w-none"
    >
      <div class="justify-start max-w-[280px]">
        <p>2023 © Mike Brinker <br />All Rights Reserved</p>
        <p>
          <a href="/">TechNews.Bible</a> exists to curate and develop content
          for technologists and innovators in Bible Translation.
        </p>
      </div>

      <nav class="p-4 flex flex-col bg-slate-900 text-right">
        <a class="" href="/about">About</a>
        <a href="/issues">Past Issues</a>
        <a href="/posts">Posts</a>
        <a href="/contact">Contact</a>
      </nav>
    </footer>
  </div>
</template>
