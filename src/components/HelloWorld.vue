<template>
  <div class="hello">
    <h1>{{ EX_Test.print(msg) }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import $Test from '@/typescript/classes/test'
@Options({
  props: {
    msg: String,
  },
  computed:{
    EX_Test(): $Test {
      return new $Test()
    }
  }
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">

</style>
