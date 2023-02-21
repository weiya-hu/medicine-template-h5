<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <keep-alive :include="['MyOrder', 'OrderIndex']">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
