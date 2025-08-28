<script>

import {defineComponent} from "vue";
import Counter from "@/components/Counter.vue";
import ButtonClickAlert from "@/components/ButtonClickAlert.vue";
import InputFieldLive from "@/components/InputFieldLive.vue";
import ConditionalRender from "@/components/ConditionalRender.vue";
import UseVfor from "@/components/UseVfor.vue";
import ButtonClickColorChange from "@/components/ButtonClickColorChange.vue";
import FullNameComputed from "@/components/FullNameComputed.vue";
import TotalPrice from "@/components/TotalPrice.vue";
import ValuChangeWatch from "@/components/ValuChangeWatch.vue";
import ButtonClickEnableDisable from "@/components/ButtonClickEnableDisable.vue";

export default defineComponent({
  components: {Counter, ButtonClickAlert, InputFieldLive,
    ConditionalRender, UseVfor, ButtonClickColorChange,
    FullNameComputed, TotalPrice, ValuChangeWatch,
    ButtonClickEnableDisable
  },
})
</script>

<template>
  <!--  <Counter/>-->
  <!--  <ButtonClickAlert/>-->
  <!--  <InputFieldLive/>-->
  <!--  <ConditionalRender/>-->
  <!--  <UseVfor/>-->
<!--  <ButtonClickColorChange/>-->
<!--  <FullNameComputed/>-->
<!--  <TotalPrice/>-->
<!--  <ValuChangeWatch/>-->
  <ButtonClickEnableDisable/>
</template>

<style scoped>

</style>
