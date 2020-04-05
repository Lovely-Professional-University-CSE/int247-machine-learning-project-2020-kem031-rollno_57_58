<template>
  <v-app>
    <v-app-bar dense app>
      <v-spacer />
      <span> Fraudulent Credit Card Transaction Detector </span>
      <v-spacer />
    </v-app-bar>

    <v-content app> </v-content>

    <v-footer app> 
      <div> &copy; {{new Date().getFullYear()}} </div>
      <v-spacer/>
      <div> 
        Made with <v-icon color="red"> mdi-heart </v-icon> by 
        <a href="http://bitbeast.me/" target="_blank"> bitbeast </a>  
      </div>

    </v-footer>
  </v-app>
</template>

<style scoped>

a {
  text-decoration: none;
  font-weight: bold;
  color: #000000!important;
}

</style>
