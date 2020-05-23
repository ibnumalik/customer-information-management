<template>
  <nav class="bg-white shadow-md">
    <div class="container px-6 py-3 mx-auto">
      <div class="items-center justify-between md:flex">
        <div class="flex items-center justify-between">
          <div>
            <a
              href="#"
              class="text-xl font-bold text-gray-800 hover:text-gray-700 md:text-2xl"
              >CIM</a
            >
          </div>
          <div class="md:hidden">
            <button
              type="button"
              class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col hidden mt-3 md:flex-row md:mt-0 md:block">
          <router-link
            to="/"
            class="text-sm text-gray-800 hover:font-medium md:mx-4"
            >Home</router-link
          >
          <router-link
            to="/customer"
            class="text-sm text-gray-800 hover:font-medium md:mx-4"
            >Customers</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
