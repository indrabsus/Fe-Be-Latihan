// middleware/auth.js

import { useRouter } from 'vue-router';

export function requireAuth(to, from, next) {
  // Implementasi logika untuk memeriksa apakah pengguna sudah login.
  const isLoggedIn = !!localStorage.getItem('token'); // Misalnya, token disimpan di localStorage.

  if (!isLoggedIn) {
    next('/login'); // Redirect ke halaman login jika pengguna belum login.
  } else {
    next();
  }
}
