<template>
  <div class="graphs-page">
    <!-- 頁面標題 -->
    <h1 class="page-title">Graphs Dashboard</h1>

    <!-- 統計數據區域 -->
    <div class="stats-container">
      <div class="stat-card">
        <h2>Avg First Reply Time</h2>
        <p>
          <span class="stat-number">30</span> h <span class="stat-minutes">15</span> min
        </p>
      </div>
      <div class="stat-card">
        <h2>Avg Full Resolve Time</h2>
        <p>
          <span class="stat-number">22</span> h <span class="stat-minutes">40</span> min
        </p>
      </div>
    </div>

    <!-- 圓餅圖區域 -->
    <div class="chart-container">
      <div class="chart-card" ref="chart"></div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import axios from "axios";

export default {
  name: "PieChart",
  data() {
    return {
      apiEndpoint: "http://localhost:8080/api/emotion/random",
    };
  },
  mounted() {
    // 初始化卡片內容

    // 加載圓餅圖數據
    this.fetchDataAndCreatechart();
  },
  methods: {
    async fetchDataAndCreatechart() {
      try {
        // 從後端獲取數據
        const response = await axios.get("http://localhost:8080/api/emotion/stats");
        const data = response.data;

        // 創建圓餅圖
        this.createPieChart(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    },
    createPieChart(data) {
      const width = 500;
      const height = Math.min(500, width / 2);
      const outerRadius = height / 2 - 10;
      const innerRadius = outerRadius * 0.75;
      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const tooltip = d3.select(this.$refs.chart)
          .append("div")
          .style("position", "absolute")
          .style("background", "#333")
          .style("color", "#fff")
          .style("border", "1px solid #ccc")
          .style("border-radius", "5px")
          .style("padding", "10px")
          .style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)")
          .style("pointer-events", "none")
          .style("opacity", 0);

      const svg = d3.select(this.$refs.chart)
          .append("svg")
          .attr("viewBox", [-width / 2, -height / 2, width, height]);

      const arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius);

      const pie = d3.pie()
          .sort(null)
          .value((d) => d.count);

      svg.datum(data)
          .selectAll("path")
          .data(pie)
          .join("path")
          .attr("fill", (d, i) => color(i))
          .attr("d", arc)
          .each(function (d) {
            this._current = d;
          })
          .on("mouseover", function (event, d) {
            tooltip
                .style("opacity", 1)
                .html(`<strong>Emotion:</strong> ${d.data.emotion}<br><strong>Count:</strong> ${d.data.count}`)
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY - 10}px`);
          })
          .on("mousemove", function (event) {
            tooltip
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY - 10}px`);
          })
          .on("mouseout", function () {
            tooltip.style("opacity", 0);
          });
    },
  },
};
</script>

<style scoped>
/* 保持樣式一致，略作調整 */

.stats-container {
  display: flex;
  justify-content: flex-start; /* 左對齊卡片 */
  gap: 10px; /* 減小卡片之間的距離 */
  margin-bottom: 20px; /* 與圖表保持間距 */
  padding: 0 20px; /* 添加左右間距 */
}

.stat-card {
  background: linear-gradient(135deg, #7f7fd5, #86a8e7, #91eae4);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  flex: 1;
  max-width: 200px; /* 限制卡片最大寬度 */
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>