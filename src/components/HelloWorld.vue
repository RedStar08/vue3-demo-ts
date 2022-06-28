<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-space wrap>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-space>
    <el-row class="m-20">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
      <el-button round>中文</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 20px;
}
</style>
