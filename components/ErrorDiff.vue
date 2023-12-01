<template>
  <div class="my-8 flex flex-row space-x-8">
    <div class="w-1/2">
      <h2
        class="text-3xl font-bold mb-4 flex flex-row justify-start items-center gap-4"
      >
        Before <ScoreCircle :score="20" :size="'80px'" />
      </h2>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th
              v-for="(value, key) in tableData[0]"
              :key="key"
              class="border px-4 py-2 w-20"
            >
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td
              v-for="(value, key) in row"
              :key="key"
              :class="getCellClass(key)"
              class="border px-4 py-2 text-center"
            >
              <span>
                {{ value }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-1/2">
      <h2
        class="text-3xl font-bold mb-4 flex flex-row justify-start items-center gap-4"
      >
        After <ScoreCircle :score="70" :size="'80px'" />
      </h2>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th
              v-for="(value, key) in updatedTableData[0]"
              :key="key"
              class="border px-4 py-2 w-20"
            >
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in updatedTableData" :key="index">
            <td
              v-for="(value, key) in row"
              :key="key"
              :class="getCellClass(key)"
              class="border px-4 py-2 text-center"
            >
              <p class="flex justify-around items-center gap-2">
                <span  v-if="key == 'totalCmp'">{{value}}</span>
                <span
                  v-if="key != 'criteria'"
                  class="flex flex-row justify-center items-center gap-2"
                  v-html="getArrowIcon(row.criteria, row[key], key)"
                ></span>
                <span v-else>{{ value }}</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ScoreCircle from "./ScoreCircle.vue";

export default {
  components: { ScoreCircle },
  data() {
    return {
      tableData:[{"criteria": "perceivable", "total": 7, "err": 4, "probablyErr": 3, "humanCheck": 0, "needCfm": 0}, {"criteria": "operable", "total": 10, "err": 8, "probablyErr": 2, "humanCheck": 0, "needCfm": 0}, {"criteria": "understandable", "total": 4, "err": 3, "probablyErr": 1, "humanCheck": 0, "needCfm": 0}, {"criteria": "robust", "total": 5, "err": 5, "probablyErr": 0, "humanCheck": 0, "needCfm": 0}],
      updatedTableData: [{"criteria": "perceivable", "total": 0, "err": 0, "probablyErr": 0, "humanCheck": 0, "needCfm": 0}, {"criteria": "operable", "total": 1, "err": 1, "probablyErr": 0, "humanCheck": 0, "needCfm": 0}, {"criteria": "understandable", "total": 1, "err": 0, "probablyErr": 1, "humanCheck": 0, "needCfm": 0}, {"criteria": "robust", "total": 0, "err": 0, "probablyErr": 0, "humanCheck": 0, "needCfm": 0}],
    };
  },
  mounted(){
    this.handleTotalCmp()
  },
  methods: {
    handleTotalCmp(){
      this.updatedTableData[0]['totalCmp'] =  this.updatedTableData[0]['total'] 
      this.updatedTableData[1]['totalCmp'] =  this.updatedTableData[1]['total'] 
      this.updatedTableData[2]['totalCmp'] =  this.updatedTableData[2]['total'] 
      this.updatedTableData[3]['totalCmp'] =  this.updatedTableData[3]['total'] 
    },
    getCellClass(key) {
      return {
        "bg-red-200": key === "err",
        "bg-yellow-200": key === "probablyErr",
        "bg-blue-200": key === "humanCheck",
        "bg-green-200": key === "needCfm",
        "hover:bg-gray-200": key !== "criteria",
      };
    },
    getArrowIcon(criteria, value, key) {
      const oldValue = this.getOldValue(criteria, key);

      if (value > oldValue) {
        return (
          `<span>${value - oldValue}</span>` +
          '<svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5 15l7-7 7 7"></path></svg>'
        );
      } else if (value < oldValue) {
        return (
          `<span>${oldValue - value}</span>` +
          '<svg class="w-4 h-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M19 9l-7 7-7-7"></path></svg>'
        );
      } else {
        return `<p class="font-bold ml-2">-</p>`;
      }
    },
    getOldValue(criteria, key) { 
      const oldRow = this.tableData.find((row) => row.criteria === criteria);
      return oldRow ? oldRow[key] : 0;
    },
  },
};
</script>

<style scoped>
.table {
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #e2e8f0;
}

.table th,
.table td {
  padding: 8px;
  text-align: left;
}
</style>
