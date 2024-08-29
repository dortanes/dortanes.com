<template>
  <v-row no-gutters>
    <v-col :cols="12">
      <v-card elevation="20" rounded="lg">
        <v-card-title class="bg-deep-purple-darken-1"
          ><b>Products</b></v-card-title
        >
        <v-divider />
        <v-row class="ma-4">
          <v-col
            v-for="(item, key) in products"
            :key="key"
            :sm="6"
            :lg="4"
            :cols="12"
          >
            <v-card
              variant="flat"
              rounded="lg"
              :href="item.href"
              :elevation="0"
              color="blue-grey-lighten-5"
            >
              <v-img
                class="align-end text-white"
                height="200"
                :src="item.image"
                cover
              >
                <v-card-title :style="{ fontWeight: 800, fontSize: '24px' }">{{
                  item.title
                }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4" v-if="item.opts.length > 0">
                <v-chip
                  color="red-darken-4"
                  v-if="item.opts.includes('inProgress')"
                  >In Progress</v-chip
                >
              </v-card-subtitle>

              <v-card-text>
                <div v-html="item.subtitle.replaceAll('\n', '<br />')" />
              </v-card-text>

              <v-card-actions>
                <v-btn
                  v-if="item.opts.includes('source')"
                  prepend-icon="mdi-github"
                  rounded="lg"
                  :href="item.sourceLink"
                  target="_blank"
                  block
                >
                  Source code
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<style></style>
<script setup>
import { ref } from "vue";

const products = ref([
  {
    href: "",
    image: "/assets/products/casto.jpg",
    title: "Casto",
    subtitle:
      "Open source cross-platform live production/streaming software powered with Electron & Vue.js.\n\nDevelopment is in progress from October 2023. Doing it by myself and looking for contributors.",
    opts: ["inProgress", "source"],
    sourceLink: "https://github.com/castoapp/casto",
  },
]);
</script>
