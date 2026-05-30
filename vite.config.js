import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Needed for React Router to work on page refresh when deployed
  server: {
    historyApiFallback: true,
  },
});
