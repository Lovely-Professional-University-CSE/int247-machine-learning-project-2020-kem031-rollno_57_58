<template>
  <v-container>
    <v-row>
      <v-col v-if="!executed" cols="12">
        <v-card>
          <v-card-title class="display-2">
            Hi, there!
          </v-card-title>
          <v-card-text class="text-justify text-uppercase text--primary">
            Demonstration of a
            <span class="font-weight-bold"
              >fradulant credit card transaction detector</span
            >
            using machine learning algorithms for the
            <span class="font-weight-bold">INT-247</span> coursework project
          </v-card-text>
          <v-card-text class="text-justify pt-0 text-uppercase text--primary">
            It uses various algorithms to detect whether the occured transaction
            is <span class="font-weight-bold">fraud or not fraud</span>. It also
            presents a <span class="font-weight-bold">comparison</span> between
            these algorithms on the metrics of
            <span class="font-weight-bold">accuracy and runtime</span>. you can
            <span class="font-weight-bold">
              browse source and also view the corresponding notebook here.</span
            >
            <v-btn
              href="https://github.com/Lovely-Professional-University-CSE/int247-machine-learning-project-2020-kem031-rollno_57_58/tree/master"
              small
              target="_blank"
              class="ml-2"
            >
              view source code
            </v-btn>
          </v-card-text>
          <v-divider />
          <v-card-text class="text-justify text-uppercase text--primary">
            The frontend is made using
            <span class="font-weight-bold">vuejs</span> and the backend uses
            <span class="font-weight-bold">firebase cloud function</span> to run
            the inference on-demand. To try this, just
            <span class="font-weight-bold">fill the form</span> and
            <span class="font-weight-bold">hit validate</span>. To reset
            everything, <span class="font-weight-bold">hit reset</span>.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-spacer />
            <span class="text-uppercase">
              Enter the details and hit validate !
            </span>
            <v-spacer />
          </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
        </v-card>
      </v-col>

      <v-col v-if="executed" cols="12">
        <v-card>
          <v-card-title>
            <v-spacer />
            <span> Execution Summary </span>
            <v-spacer />
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-data-table hide-default-footer :headers="headers" :items="items">
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Algorithm",
          value: "algorithm",
          align: "center",
        },
        {
          text: "Result(Y/N)",
          value: "result",
          align: "center",
        },
        {
          text: "Accuracy(%)",
          value: "accuracy",
          align: "center",
        },
        {
          text: "Runtime(ms)",
          value: "runtime",
          align: "center",
        },
      ],
    };
  },

  computed: {
    items() {
      return this.$store.state.executionResult.detailed;
    },
    executed() {
      return this.$store.state.executed;
    },
  },
};
</script>
