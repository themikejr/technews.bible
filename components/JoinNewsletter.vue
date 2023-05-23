<template>
  <form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    action="
    https://buttondown.email/api/emails/embed-subscribe/technews.bible
  "
    method="post"
    target="popupwindow"
  >
    <h3 class="text-black text-center m-0 font-black">Join the Newsletter</h3>
    <p class="text-black text-center">Fresh content in your email inbox</p>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email Address
      </label>

      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
      />
    </div>
    <div class="flex items-center justify-end">
      <input type="hidden" value="1" name="embed" />
      <input
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        value="Subscribe"
      />
    </div>
  </form>
</template>
