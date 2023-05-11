<script setup>

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    // GRADIENT
    class: 'bg-gradient-to-r from-slate-900 to-blue-900'
    // Standard DARK/LIGHT
    // class: 'bg-white dark:bg-slate-900 text-black dark:text-white'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>


<template>
  <div class="w-screen flex justify-between prose prose-invert max-w-none">
    <div class="p-4 font-bold">
      <a class="no-underline" href="/">TechNews.Bible</a>

    </div>

    <div class="p-4 flex justify-evenly gap-3">
      <a class="" href="/about">About</a>
      <a href="/issues">Past Issues</a>
      <a href="/posts">Posts</a>
    </div>
  </div>

  <slot />
</template>
