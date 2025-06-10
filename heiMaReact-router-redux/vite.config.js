// 修改后（添加 resolve.extensions）
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // 移除 .tsx 扩展名
  }
})
