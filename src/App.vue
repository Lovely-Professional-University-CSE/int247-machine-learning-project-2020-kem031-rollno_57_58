<template>
  <v-app>
    <v-app-bar dense app>
      <v-spacer />
      <span class="headline font-weight-medium"> FRAUDULANT CREDIT CARD TRANSACTION DETECTOR </span>
      <v-spacer />
    </v-app-bar>

    <v-content app>
      <v-container class="fill-height" fluid>
        <v-row justify="space-around" class="fill-height" align="center">
          <v-col cols="6">
            <Result />
          </v-col>
          <v-col cols="6">
            <FormInput />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer class="overline" app>
      <div >
        <a href="https://opensource.org/licenses/MIT" target="_blank"> MIT </a>
        &copy; {{ new Date().getFullYear() }}
      </div>
      <v-spacer />
      <div>
        Made with <v-icon small color="red"> mdi-heart </v-icon> by
        <a href="http://bitbeast.me/" target="_blank"> bitbeast </a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Result from "@/components/Result.vue";
import FormInput from "@/components/FormInput.vue";

export default {
  components: {
    Result,
    FormInput,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #000000 !important;
}
</style>
