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
      <div class="p-6 font-black text-xl">
        <NuxtLink class="no-underline" to="/">TechNews.Bible</NuxtLink>
      </div>

      <nav class="p-6 flex justify-evenly gap-3">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/issues">Issues</NuxtLink>
        <NuxtLink to="/posts">Posts</NuxtLink>
      </nav>
    </header>

    <div class="mb-auto my-12">
      <slot />
    </div>

    <footer
      class="prose prose-invert flex justify-between p-6 bg-slate-900 max-w-none"
    >
      <div class="justify-start max-w-[280px]">
        <p>2023 © Mike Brinker <br />All Rights Reserved</p>
        <p>
          <NuxtLink to="/">TechNews.Bible</NuxtLink> exists to curate and
          develop content for technologists and innovators in Bible Translation.
        </p>
      </div>

      <nav class="p-4 flex flex-col bg-slate-900 text-right">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/issues">Issues</NuxtLink>
        <NuxtLink to="/posts">Posts</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/colophon">Colophon</NuxtLink>
      </nav>
    </footer>
  </div>
</template>
