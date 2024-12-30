<template>
  <div class="emotion-dashboard">
    <!-- 頁面標題 -->
    <h1 class="page-title">Emotion Dashboard</h1>

    <!-- 卡片區域 -->
    <div class="emotion-container">
      <div
          class="emotion-card"
          v-for="(emotion, index) in emotions"
          :key="index"
          :style="{ backgroundColor: emotionColors[emotion.type] }"
      >
        <h3>{{ emotion.type }}</h3>
        <p>{{ emotion.text }}</p>
        <button class="small-button" @click="fetchEmotionText(emotion.type, index)">換一條</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TextDashboard",
  data() {
    return {
      // 初始8種情感類型
      emotions: [
        { type: "anger", text: "" },
        { type: "joy", text: "" },
        {type: "sadness", text: ""},
        {type: "fear", text: ""},
        {type: "surprise", text: ""},
        {type: "disgust", text: ""},
        {type: "neutral", text: ""},
        {type: "shame", text: ""},
      ],
      // 每種類型的顏色對應
      emotionColors: {
        anger: "#FF6347", // 紅色
        joy: "#FFD700", // 黃色
        sadness: "#87CEFA", // 藍色
        fear: "#708090", // 灰色
        surprise: "#FF69B4", // 粉紅色
        disgust: "#8B4513", // 棕色
        trust: "#32CD32", // 綠色
        anticipation: "#FFA500", // 橙色
      },
      apiEmotionEndpoint: "http://localhost:8080/api/emotion/random",
    };
  },
  mounted() {
    // 初始化卡片內容
    this.emotions.forEach((emotion, index) => {
      this.fetchEmotionText(emotion.type, index);
    });
  },
  methods: {
    // 獲取單個情感的隨機文本
    async fetchEmotionText(emotionType, index) {
      try {
        const response = await axios.get(`${this.apiEmotionEndpoint}?emotion=${emotionType}`);
        console.log("API response:", response.data); // 打印 API 返回數據

        // 直接修改 emotions 數組中的對象
        this.emotions[index] = {
          type: emotionType,
          text: response.data.text || "暫無內容", // 確保有默認值
        };

        console.log("Updated emotion:", this.emotions[index]); // 確認數據更新
      } catch (error) {
        console.error(`Error fetching emotion text for ${emotionType}:`, error);
      }
    }
  },
};
</script>

<style scoped>
.emotion-dashboard {
  padding: 20px;
  background: #232336;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #fff;
}

.emotion-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.emotion-card {
  flex: 1 1 calc(25% - 16px);
  max-width: 200px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
}

.emotion-card:hover {
  transform: translateY(-10px);
}

p {
  word-wrap: break-word; /* 長單詞換行 */
  white-space: pre-wrap; /* 支持多行文本，保留原始換行符 */
  overflow-wrap: break-word; /* 保證長單詞能在多瀏覽器中正確換行 */
  text-align: center; /* 可選：保持文字居中對齊 */
  max-height: 80px; /* 限制文本顯示區域高度 */
  overflow: auto; /* 當內容超過高度時，顯示滾動條 */
}

.small-button {
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.small-button:hover {
  background-color: #f0f0f0;
}
</style>