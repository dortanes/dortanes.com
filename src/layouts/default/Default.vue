<template>
  <v-app>
    <v-layout>
      <v-main class="d-flex justify-center" style="min-height: 300px">
        <v-container>
          <v-row>
            <v-col :cols="12">
              <toolbar />
            </v-col>
            <v-col :cols="12" :sm="12" :lg="4">
              <v-card
                class="pa-0 ma-0"
                color="deep-purple-darken-1 d-flex"
                rounded="lg"
                elevation="20"
                style="width: 100%"
              >
                <img src="@/assets/avatar.png" style="width: 100%" />
              </v-card>
              <div class="mt-6 text-center">
                <h2 class="text-h2 title">
                  Anton <span class="text-h5">aka Anthy</span>
                </h2>
                <h3 class="text-h5 subtitle">fullstack developer</h3>
              </div>
            </v-col>
            <v-col :cols="12" :lg="8">
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
<style scoped>
.title {
  font-weight: 900;
  background: -webkit-linear-gradient(#641adb, #490baf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.15));
}

.subtitle {
  font-weight: 300;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
  color: #641adb;
}
</style>
