<template>
  <div class="dashboard">
    <!-- 左侧导航栏 -->
    <nav class="sidebar">
      <h2 class="logo">Dashboard</h2>

      <!-- 菜单项 -->
      <ul class="menu">
        <!-- Profile -->
        <li>
          <router-link to="/dashboard/profile" active-class="active">
            <i class="fas fa-user"></i> PROFILE
          </router-link>
        </li>

        <!-- Report (不可点击标题) -->
        <li class="menu-title non-clickable">
          <i class="fas fa-chart-bar"></i> REPORT
        </li>
        <li>
          <router-link to="/dashboard/graphs" active-class="active">
            <i class="fas fa-chart-line"></i> Graphs
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/Text" active-class="active">
            <i class="fas fa-file-alt"></i> Texts
          </router-link>
        </li>

        <!-- Channels -->
        <div class="menu-title">CHANNELS</div>
        <li>
          <router-link to="/dashboard/channels" active-class="active">
            <i class="fas fa-phone-alt"></i> Phone Call
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/emails" active-class="active">
            <i class="fas fa-envelope"></i> Emails
          </router-link>
        </li>

        <!-- Tickets -->
        <div class="menu-title">TICKETS STATUS</div>
        <li>
          <router-link to="/dashboard/tickets" active-class="active">
            <i class="fas fa-ticket-alt"></i> Resolved
            <span class="status-label new">new</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/tickets/open" active-class="active">
            <i class="fas fa-folder-open"></i> Open
          </router-link>
        </li>
      </ul>

      <!-- 下载报告 -->
      <div class="download-section">
        <button class="download-btn">
          <i class="fas fa-download"></i> Download Report
        </button>
      </div>
    </nav>

    <!-- 主内容区域 -->
    <div class="main-content">
      <router-view /> <!-- 這裡動態切換頁面 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
};
</script>

<style>
/* 重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

.dashboard {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #1e1e2f;
}

.main-content {
  flex: 1;
  margin-left: 250px; /* 避免覆盖侧边栏 */
  padding: 20px;
  background: #232336;
  color: white;
  min-height: 100vh; /* 确保填满整个视窗高度 */
  box-sizing: border-box;
  overflow: auto;
}

/* 左侧导航栏样式 */
.sidebar {
  position: fixed; /* 固定侧边栏位置 */
  top: 0; /* 从顶部开始 */
  left: 0; /* 从左侧开始 */
  width: 250px; /* 侧边栏宽度 */
  height: 100vh; /* 占满整个屏幕高度 */
  background: #2a2a3d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  z-index: 1000; /* 确保侧边栏在最上层 */
}

.logo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.menu {
  list-style: none;
}

.menu li {
  margin-bottom: 10px;
}

.menu li a {
  display: flex;
  align-items: center;
  color: #bbb;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.menu li a i {
  margin-right: 10px;
}

.menu li a.active,
.menu li a:hover {
  background: #6c63ff;
  color: white;
}

/* 不可点击的标题样式 */
.non-clickable {
  color: #888;
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: default; /* 不可点击 */
}

.non-clickable i {
  margin-right: 10px;
  font-size: 14px;
}

/* 分组标题样式 */
.menu-title {
  font-size: 12px;
  color: #888;
  margin: 15px 0 5px 10px;
  text-transform: uppercase;
}

/* 状态标签样式 */
.status-label {
  background-color: #ff4f81;
  color: white;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 10px;
}

.status-label.new {
  background: #6c63ff;
}

/* 下载按钮 */
.download-section {
  margin-top: auto;
  text-align: center;
}

.download-btn {
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #524ac4;
}
</style>