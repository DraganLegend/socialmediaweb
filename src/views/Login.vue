<template>
  <div id="app">
    <div class="login-container">
      <h1>Welcome Back</h1>
      <p>Please login to your account</p>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message); // 顯示後端返回的消息
          this.$router.push('/dashboard'); // 登錄成功後跳轉
        } else {
          const error = await response.json();
          alert(error.message || 'Invalid username or password.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    },
  },
};
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: linear-gradient(to bottom, #e0f7fa, #ffffff); /* 單一方向的漸層 */
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  background: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 調整陰影透明度 */
  text-align: center;
  width: 350px;
  backdrop-filter: blur(10px); /* 添加模糊效果 */
}

.login-container h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.login-container p {
  font-size: 14px;
  margin-bottom: 20px;
  color: #666;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease;
}

input:focus {
  border: 1px solid #4facfe;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: white;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: linear-gradient(to right, #00f2fe, #4facfe);
}
</style>