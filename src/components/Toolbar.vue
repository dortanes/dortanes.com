<template>
  <v-toolbar rounded="lg" color="deep-purple-darken-1" elevation="20">
    <v-menu>
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn
              variant="flat"
              rounded="lg"
              v-bind="mergeProps(menu, tooltip)"
              icon
            >
              <v-icon>mdi-file-plus</v-icon>
            </v-btn>
          </template>
          <span>CV</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item :href="docsLinks.en">
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
        <v-list-item :href="docsLinks.ru">
          <v-list-item-title>Русский</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-tooltip text="pls invite me somewhere i wanna work" location="top">
      <template v-slot:activator="{ props }">
        <v-btn rounded="lg" v-bind="props" icon>
          <v-icon>mdi-alien</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-spacer />

    <v-tooltip text="About Me" location="top">
      <template v-slot:activator="{ props }">
        <v-btn
          rounded="lg"
          v-bind="props"
          :active="$router.currentRoute.value.fullPath === '/'"
          :to="{ path: '/' }"
          icon
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip text="Projects" location="top">
      <template v-slot:activator="{ props }">
        <v-btn
          rounded="lg"
          v-bind="props"
          :active="$router.currentRoute.value.fullPath === '/projects'"
          :to="{ path: '/projects' }"
          icon
        >
          <v-icon>mdi-application</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip text="Products" location="top">
      <template v-slot:activator="{ props }">
        <v-btn
          rounded="lg"
          v-bind="props"
          :active="$router.currentRoute.value.fullPath === '/products'"
          :to="{ path: '/products' }"
          icon
        >
          <v-icon>mdi-group</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-spacer />

    <v-tooltip text="Telegram" location="top">
      <template v-slot:activator="{ props }">
        <v-btn rounded="lg" v-bind="props" href="https://dortanes.t.me" icon>
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip text="E-Mail" location="top">
      <template v-slot:activator="{ props }">
        <v-btn rounded="lg" v-bind="props" href="mailto:site@dortanes.com" icon>
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip text="GitHub" location="top">
      <template v-slot:activator="{ props }">
        <v-btn
          rounded="lg"
          v-bind="props"
          href="https://github.com/dortanes"
          icon
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </v-toolbar>
</template>
<script setup>
import { mergeProps, ref } from "vue";

const docsLinks = ref({
  en: "https://drive.google.com/file/d/1gdc_l1Kd-LMeeVxDVmmrS3fzxaNutLME/view?usp=share_link",
  ru: "https://drive.google.com/file/d/1TGNeZCjRrxJlF2B_Cx0kOMxxKpSGWigI/view?usp=share_link",
});
</script>
