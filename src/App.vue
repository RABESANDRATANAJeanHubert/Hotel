
<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" container style="height: 600px"  >
  <q-header elevated class="bg-cyan">
        <q-toolbar>
          <q-btn flat round dense icon="assignment_ind" />
          <q-space/>
          <q-btn flat round dense icon="sim_card" class="q-mr-xs"/>
          <q-btn flat round dense icon="gamepad"/>
        </q-toolbar>
       <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 26px; text-align:center">
              <q-breadcrumbs-el to="/" label="Acceuil"/>
            <q-breadcrumbs-el to="/Product" label="Produit"/>
            <q-breadcrumbs-el to="/Category" label="Category"/>          
            <q-breadcrumbs-el to="/Command" label="Commande"/>
            <q-breadcrumbs-el to="/Movement" label="Mouvement"/>
             <q-breadcrumbs-el to="/about" label=""/>
          </q-breadcrumbs>
        </q-toolbar>
      </q-header>

      <q-drawer
      v-model="drawerLeft"
     >
      </q-drawer>
      <q-page-container>
        <q-page padding>
             <HelloWorld />
        </q-page>   
      </q-page-container>
    </q-layout>
  </div>
</template>


<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
  },

  setup () {
    return {
     drawerLeft: ref(false),
      tab: ref('images')
       
    }
  }
}
</script>

