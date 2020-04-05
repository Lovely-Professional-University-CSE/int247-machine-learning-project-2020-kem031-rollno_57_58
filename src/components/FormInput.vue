<template>
  <v-container>
    <v-card elevation="24">
      <v-card-text>
        <v-form>
          <v-text-field> </v-text-field>
          <v-text-field> </v-text-field>
          <v-text-field> </v-text-field>
          <v-text-field> </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="pa-3">
          <v-spacer/>
          <v-btn x-large class="mr-2 error">
              reset
          </v-btn>
          <v-btn width="350px" class="mr-2 success" x-large>
              validate transaction
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
