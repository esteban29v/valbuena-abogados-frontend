<!-- eslint-disable vue/script-setup-uses-vars -->
<!-- src/views/Login.vue -->
<template>
    <div id="login" class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-6 text-center">Valbuena Abogados</h2>
  
        <form>
          <div class="mb-4">
            <label for="email" class="block text-gray-600 mb-2">Correo electrónico</label>
            <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Ingrese el correo electrónico" required>
          </div>
  
          <div class="mb-6">
            <label for="password" class="block text-gray-600 mb-2">Contraseña</label>
            <input type="password" id="password" class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Ingresa la contraseña" required>
          </div>
  
          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg focus:outline-none">Ingresar</button>
        </form>
  
        <p class="mt-4 text-sm text-gray-600 text-center">
          ¿Olvidó su contraseña?
          <a href="#" class="text-blue-500 hover:underline">Haga clic aquí</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    mounted() {
        document.title = 'Iniciar sesion - Valbuena Abogados';
    }
  }
  </script>
  
  <style scoped>
  #login {
    background-color: #f3f4f6;
  }
  </style>
  