<template>
  <div class="flex flex-row mx-auto flex space-x-8 my-8">
    <div class="w-1/2">
      <h2 class="text-3xl font-bold mb-4">Number of item - Before</h2>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th
              v-for="(value, key) in tableData[0]"
              :key="key"
              class="border px-4 py-2"
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
              :class="{
                'bg-red-500': key === 'error',
                'bg-yellow-500': key === 'probablyErr',
                'bg-blue-500': key === 'humanCheck',
                'bg-green-500': key === 'needConfirm',
                'hover:bg-gray-200': key !== 'criteria',
              }"
              class="border px-4 py-2"
            >
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-1/2">
      <h2 class="text-3xl font-bold mb-4">Number of item - After</h2>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th
              v-for="(value, key) in updatedTableData[0]"
              :key="key"
              class="border px-4 py-2"
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
              :class="{
                'bg-red-500': key === 'error',
                'bg-yellow-500': key === 'probablyErr',
                'bg-blue-500': key === 'humanCheck',
                'bg-green-500': key === 'needConfirm',
                'hover:bg-gray-200': key !== 'criteria',
              }"
              class="border px-4 py-2"
            >
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          criteria: "知覚",
          error: 3,
          probablyErr: 1,
          humanCheck: 10,
          needConfirm: 10,
        },
        {
          criteria: "操作",
          error: 0,
          probablyErr: 0,
          humanCheck: 2,
          needConfirm: 12,
        },
        {
          criteria: "理解",
          error: 0,
          probablyErr: 0,
          humanCheck: 1,
          needConfirm: 12,
        },
        {
          criteria: "堅牢",
          error: 0,
          probablyErr: 0,
          humanCheck: 0,
          needConfirm: 7,
        },
      ],
      updatedTableData: [
        {
          criteria: "知覺",
          error: 0,
          probablyErr: 1,
          humanCheck: 10,
          needConfirm: 10,
        },
        {
          criteria: "操作",
          error: 0,
          probablyErr: 0,
          humanCheck: 2,
          needConfirm: 12,
        },
        {
          criteria: "理解",
          error: 0,
          probablyErr: 0,
          humanCheck: 1,
          needConfirm: 12,
        },
        {
          criteria: "堅牢",
          error: 0,
          probablyErr: 0,
          humanCheck: 0,
          needConfirm: 7,
        },
      ],
    };
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
