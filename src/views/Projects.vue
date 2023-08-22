<template>
  <v-row no-gutters>
    <v-col :cols="12">
      <v-card elevation="20" rounded="lg">
        <v-card-title class="bg-deep-purple-darken-1"
          ><b>Projects</b></v-card-title
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
                v-if="item.image"
                :src="item.image"
                cover
              >
                <v-card-title :style="{ fontWeight: 800, fontSize: '24px' }">
                  {{ item.title }}
                </v-card-title>
              </v-img>
              <v-card-title
                v-if="!item.image"
                :style="{ fontWeight: 800, fontSize: '24px' }"
                class="pt-5"
                >{{ item.title }}</v-card-title
              >

              <v-card-subtitle
                class="pt-4"
                v-if="item.opts.includes('inProgress')"
              >
                <v-chip color="red-darken-4">In Progress</v-chip>
              </v-card-subtitle>

              <v-card-text>
                <div>{{ item.subtitle }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  v-if="item.opts.includes('source')"
                  prepend-icon="mdi-github"
                  rounded="lg"
                  :href="item.sourceLink"
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
import { ref } from 'vue';

const products = ref([
  {
    href: "https://t.me/shortggbot",
    title: "GGShort",
    subtitle:
      "Telegram bot that downloads videos via a link from Reels/TikTok/Shorts",
    opts: ["source"],
    sourceLink: "https://github.com/dortanes/shortggbot",
  },
]);
</script>
