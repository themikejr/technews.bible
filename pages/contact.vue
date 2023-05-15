<template>
  <!-- <form id="contact" name="contact" method="POST" data-netlify="true"> -->
  <!--   <input id="contact-name" type="text" name="name" placeholder="Name" /> -->
  <!--   <input -->
  <!--     id="contact-email" -->
  <!--     type="email" -->
  <!--     name="email" -->
  <!--     placeholder="Email Address" -->
  <!--   /> -->
  <!--   <textarea -->
  <!--     id="contact-message" -->
  <!--     name="message" -->
  <!--     placeholder="Your Message" -->
  <!--   ></textarea> -->
  <!--   <button id="contact-submit" type="submit">Send</button> -->
  <!-- </form> -->

  <div class="container mx-auto px-4 prose prose-invert">
    <h1>Contact Us!</h1>
    <p>
      We are always seeking feedback or addition partners to collaborate. Please
      include a return email address where you can be reached and let us know
      what is on your mind!
    </p>
    <form
      id="contact"
      name="contact"
      method="POST"
      netlify
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h3 class="text-black text-center m-0 font-black">Contact Us</h3>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email Address

          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label class="block text-gray-700 text-sm font-bold mb-2 my-8"
          >Message</label
        >
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          class="shadow appearance-none border rounded w-full py-2 px-3 h-60 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-end">
        <input type="hidden" value="1" name="embed" />
        <input
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  </div>
</template>
