<template>
  <div
    class="diff-viewer-container flex flex-col bg-gray-200 p-8 divide-y divide-dashed gap-y-4"
  >
    <div
      class="flex flex-col gap-4 p-4 rounded-md justify-start items-center bg-gray-200 shadow-sm"
    >
      <div class="text-3xl font-bold text-main">
        Fix miChecker Automatically
      </div>
      <div class="flex flex-row justify-start items-center gap-4">
        <a href="#source-code-diff" class="scroll-button h-10">
          Scroll to Source Code
        </a>
        <a href="#iframe-diff" class="scroll-button h-10">Scroll to Iframe</a>
        <a href="#error-diff" class="scroll-button h-10">Scroll to Errors</a>
      </div>
    </div>
    <div>
      <source-code-diff
        ref="sourceCodeDiff"
        id="source-code-diff"
        :urlBefore="urlBefore"
        :urlAfter="urlAfter"
      />

      <iframe-diff
        ref="iframeDiff"
        id="iframe-diff"
        :urlBefore="urlBefore"
        :urlAfter="urlAfter"
      />
    </div>
  </div>
</template>

<script>
import SourceCodeDiff from "@/components/SourceCodeDiff.vue";
import IframeDiff from "@/components/IframeDiff.vue";
export default {
  components: {
    SourceCodeDiff,
    IframeDiff,
  },
  data() {
    return {
      msg: {
        type: String,
      },

      sourceCodeBefore: "<!-- Your HTML source code before changes -->",
      sourceCodeAfter: "<!-- Your HTML source code after changes -->",
      iframeSrcBefore: "<!-- Your iframe source URL before changes -->",
      iframeSrcAfter: "<!-- Your iframe source URL after changes -->",
      errorsBefore: ["Error 1", "Error 2"],
      errorsAfter: ["Error 3", "Error 4"],
      urlBefore: "https://d15d0zlgq9wfnq.cloudfront.net/index.html",
      urlAfter: "https://d15d0zlgq9wfnq.cloudfront.net/tmp_index.html",
    };
  },
  methods: {
    scrollTo(componentName) {
      const componentRef = this.$refs[componentName];
      if (componentRef) {
        componentRef.$el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss">
.diff-viewer-container {
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.scroll-button {
  background-color: #299d73dd;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.scroll-button:hover {
  background-color: #247d63dd;
}
.editor {
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      width: 100%;
    }

    div {
      width: calc(50% - 10px);
    }

    textarea {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
