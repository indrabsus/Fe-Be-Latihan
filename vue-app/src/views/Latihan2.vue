<template>
    <v-card>
      <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
  
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
          <v-toolbar-title>My files</v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <v-btn variant="text" icon="mdi-magnify"></v-btn>
  
          <v-btn variant="text" icon="mdi-filter"></v-btn>
  
          <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          location="bottom"
          temporary
        >
          <v-list
            :items="items"
          ></v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 500px;">
          <v-card-text>
            The navigation drawer will appear from the bottom on smaller size screens.
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
    <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
  </template>
  <script>
    export default {
      data: () => ({
        drawer: false,
        group: null,
        items: [
          {
            title: 'Foo',
            value: 'foo',
          },
          {
            title: 'Bar',
            value: 'bar',
          },
          {
            title: 'Fizz',
            value: 'fizz',
          },
          {
            title: 'Buzz',
            value: 'buzz',
          },
        ],
      }),
  
      watch: {
        group () {
          this.drawer = false
        },
      },
    }
  </script>