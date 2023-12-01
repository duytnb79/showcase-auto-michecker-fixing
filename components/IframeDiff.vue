<template>
  <div class="flex w-full gap-4 my-4">
    <div class="w-1/2">
      <h2 class="text-3xl font-bold mb-2">Iframe Diff {{urlBefore}}</h2>
      <iframe
        :src="urlBefore"
        class="w-full rounded-lg border hover:shadow-lg transition duration-300"
        style="height: 2000px"
      ></iframe>
    </div>
    <div class="w-1/2">
      <h2 class="text-3xl font-bold mb-2">After: {{urlAfter}}</h2>
      <iframe
        :src="urlAfter"
        class="w-full rounded-lg border hover:shadow-lg transition duration-300"
        style="height: 2000px"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iframeSrcBefore: String,
    iframeSrcAfter: String,

    urlBefore: String,
    urlAfter: String,
  },
};
</script>
