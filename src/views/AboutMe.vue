<template>
  <v-row no-gutters>
    <v-col :cols="12">
      <v-card elevation="20" rounded="lg">
        <v-card-title class="bg-deep-purple-darken-1"
          ><b>About Me</b></v-card-title
        >
        <v-divider />
        <v-expansion-panels
          class="generalPanels"
          variant="accordion"
          v-model="panels"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-title>
              <strong>General</strong>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list class="generalList">
                <v-list-item
                  v-for="(item, i) in generalListData"
                  :key="i"
                  :prepend-icon="'mdi-' + item.icon"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.text"
                  ></v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <strong>What I'm using</strong>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="pa-6 text-center">
                <v-col v-for="(item, i) in usingListData" :key="i">
                  <v-chip size="large" :color="item?.c ?? ''">{{
                    item?.t ?? item
                  }}</v-chip>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>
<style>
.v-expansion-panel-text__wrapper {
  padding: 0 !important;
}

.generalList b {
  font-weight: 500 !important;
}

.generalPanels strong {
  font-weight: 700 !important;
  font-size: 17px !important;
}

.generalList .v-list-item-subtitle {
  font-size: 17px;
  line-height: 1.3rem;
  -webkit-line-clamp: unset !important;
}
</style>
<script setup>
import { ref } from "vue";

const panels = ref([0, 1]);

const generalListData = ref([
  {
    icon: "home",
    title: "Where am I living right now?",
    text: "Currently I'm living in <b>Batumi, Georgia</b>",
  },
  {
    icon: "face-recognition",
    title: "How old am I?",
    text: "I'm <b>19</b> years old",
  },
  {
    icon: "creation",
    title: "How many years are you in development?",
    text: "I'm in the web development industry for <b>7 years</b> now",
  },
  {
    icon: "domain",
    title: "How many years of commercial experience do you have?",
    text: "I have about <b>5 years</b> of commercial experience",
  },
  {
    icon: "alphabetical-variant",
    title: "What is your English level?",
    text: "At the moment my English level is between <b>B2-C1</b>",
  },
]);

const usingListData = ref([
  { t: "JavaScript", c: "primary" },
  { t: "TypeScript", c: "primary" },
  { t: "Vue.js", c: "primary" },
  { t: "TailwindCSS", c: "primary" },
  { t: "Node.js", c: "primary" },
  "Vuetify",
  "PrelineUI",
  "Moleculer.js",
  "Nest.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PHP",
  "PostgreSQL",
  "BigchainDB",
  "Firebase",
  "Laravel",
  "Redis",
  "Socket.io",
  "Tensorflow.js",
  "Nuxt.js",
  "Electron",
  "Selenium",
  "Puppeteer",
  "Playwright",
  "Nginx",
  "Git",
  "Next.js",
  "Nest.js",
]);
</script>
