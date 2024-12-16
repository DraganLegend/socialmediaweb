<template>
  <div class="dashboard">
    <!-- 左侧导航栏 -->
    <nav class="sidebar">
      <h2>CRM Dashboard</h2>
      <ul class="menu">
        <li>
          <router-link to="/dashboard/profile" active-class="active">
            <i class="icon">🏠</i> Profile
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/report" active-class="active">
            <i class="icon">📊</i> Report
          </router-link>
        </li>
        <li>
          <router-link to="dashboard/channels" active-class="active">
            <i class="icon">📞</i> Channels
          </router-link>
        </li>
        <li>
          <router-link to="dashboard/tickets" active-class="active">
            <i class="icon">🎫</i> Tickets
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 默认显示欢迎信息 -->
      <div class="default-content">
        <h1>Welcome to CRM Dashboard</h1>
        <p>Select an option from the menu to get started.</p>
      </div>

      <!-- 路由内容将加载到这里 -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
};
</script>

<style>
/* 全局样式重置 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* 避免多余滚动条 */
}

#app {
  width: 100%;
  height: 100%;
}

/* Dashboard 主容器 */
.dashboard {
  display: flex;
  height: 100%; /* 占满父容器的高度 */
  width: 100%; /* 占满页面宽度 */
  background-color: #1e1e2f; /* 设置背景色，消除白色区域 */
}

/* 左侧导航栏 */
.sidebar {
  width: 250px; /* 固定宽度 */
  background: #2a2a3d; /* 背景色 */
  color: white; /* 字体颜色 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.sidebar h2 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
}

.menu {
  list-style: none;
  padding: 0;
  width: 100%; /* 菜单宽度铺满 */
}

.menu li {
  margin: 15px 0;
}

.menu li a {
  text-decoration: none;
  color: #bbb;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.menu li a:hover,
.menu li a.active {
  background: #6c63ff; /* 激活状态背景色 */
  color: white;
}

.icon {
  margin-right: 10px;
}

/* 主内容区域 */
.main-content {
  flex: 1; /* 占满剩余空间 */
  padding: 20px;
  background: #232336; /* 背景色 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  overflow-y: auto;
}

/* 默认内容样式 */
.default-content {
  text-align: center;
}

.default-content h1 {
  font-size: 28px;
  color: #66e0ff;
  margin-bottom: 10px;
}

.default-content p {
  font-size: 16px;
  color: #bbb;
}
</style>