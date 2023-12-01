<template>
  <div class="circle-score bg-white" >
    <div class="circle-container flex items-center justify-center  border-2 border-gray-300 rounded-full" :style="{  ...getCircleStyle, width: size, height: size }">
      <div class="score">{{ score }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      default: "100px", // Kích thước mặc định nếu không có props size được truyền vào
    },
  },
  data() {
    return {
      animate: false,
    };
  },
  computed: {
    getCircleStyle() { 
      return {
        background: this.getColor(),
      };
    },
  },
  methods: {
    getColor() {
      const hue = Math.min((this.score /100) * 120, 120);
      return `hsl(${hue}, 100%, 50%)`;
    }, 
  },
  mounted() {
    // Kích hoạt hiệu ứng sau khi component được mount
    this.animate = true;
  },
};
</script>

<style lang="scss"> 
 
</style>
