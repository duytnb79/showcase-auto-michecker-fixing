<template>
  <div class="flex flex-col">
    <div>
      <h2 class="text-3xl font-bold mb-2">URL Diff</h2>
      <div class="gap-2 py-2 flex flex-col">
        <label class="text-sm text-black font-medium" for="url1">URL 1: </label>
        <input
          class="w-full p-1 bg-yellow-100 px-4 rounded-md"
          v-model="url1"
          type="text"
          id="url1"
        />
      </div>
    </div>
    <div>
      <div class="gap-2 py-2 flex flex-col">
        <label class="text-sm text-black font-medium" for="url2">URL 2: </label>
        <input
          class="w-full p-1 bg-yellow-100 px-4 rounded-md"
          v-model="url2"
          type="text"
          id="url2"
        />
      </div>
    </div>
    <button @click="this.compareUrls" class="scroll-button w-40 h-10 my-3">
      Compare URLs
    </button>

    <error-diff class="w-full" ref="errorDiff" id="error-diff" />
    <div v-if="initHtml && diffHtml">
      <div>
        <h2 class="font-bold mb-4 text-3xl mt-4">Diff Checker</h2>
        <VueDiff :prev="initHtml" :current="diffHtml" :prevUrl="url1" :currentUrl="url2"></VueDiff>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import VueDiff from "@/components/diff/Diff.vue";
import ErrorDiff from "@/components/ErrorDiff.vue";

export default defineComponent({
  name: "SourceCodeDiff",
  components: {
    VueDiff,
    ErrorDiff,
  },
  props: {
    urlBefore: String,
    urlAfter: String,
  },
  setup() {
    const url1 = ref<string>("");
    const url2 = ref<string>("");

    onMounted(async () => {
      // Set default URLs for testing
      url1.value = this.urlBefore;
      url2.value = this.urlAfter;
    });

    return {
      url1,
      url2,
    };
  },
  data() {
    return {
      initHtml: ref<string>(""),
      diffHtml: ref<string>(""),
    };
  },
  async mounted() {
    await this.compareUrls();
  },
  methods: {
    async compareUrls() {
      console.log("compareUrls", this.url1, this.url2);
      try {
        this.initHtml = await useFetch(this.url1).data.value;
        this.diffHtml = await useFetch(this.url2).data.value;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
</script>

<style scoped>
.added {
  background-color: #a2f5c0; /* Màu nền cho phần thêm mới */
}

.removed {
  background-color: #ffb8b8; /* Màu nền cho phần bị loại bỏ */
}

.unchanged {
  /* Bạn có thể để trống hoặc thêm kiểu dáng tùy ý cho phần giữ nguyên */
}
</style>
