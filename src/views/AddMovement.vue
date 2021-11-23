<template>
  <div class="category">
    <q-page> 
    <!-- debut Card -->
   <q-drawer
        v-model="drawerRight"
        show-if-above
        bordered
        :padding-right="500"
        :width="400"
        :breakpoint="400"
        class="bg-cyan"
      >
      <h4>Entrer l'information du categorie :</h4>
      <br>

      <q-input clearable filled bg-color="white" color="red-12" v-model="text" label="Quantity:" /> <br>
      <q-input clearable filled bg-color="white"  color="red-12" v-model="text" label="Stock: " /> <br>
    <q-select bg-color="white" v-model="model" :options="options" label="Prix" />     
      <br> <br> <br>
       <q-btn color="green-14"  ma label="Ajouter" />
        <!-- <q-route-tab color="primary" to="/" ma label="Back" /> -->
      </q-drawer>
     
    <!-- fin Card -->
     <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <q-img
                style="width: 600px;height:120px;"

                :ratio="1"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/donuts.png"
              />
              <div class="text-h4 q-ml-md text-white">Treats</div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Protein (g)</th>
           <th class="text-right">Action</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3">   
         <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
           <q-btn round color="blue" icon="edit"/>
          <q-btn round color="danger" icon="delete" />
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
           <q-btn round color="blue" icon="edit"/>
          <q-btn round color="danger" icon="delete" />
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
           <q-btn round color="blue" icon="edit"/>
          <q-btn round color="danger" icon="delete" />
        </tr>
         <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
           <q-btn round color="blue" icon="edit"/>
          <q-btn round color="danger" icon="delete" />
        </tr>
         <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
           <q-btn round color="blue" icon="edit"/>
          <q-btn round color="danger" icon="delete" />
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
           <q-btn round color="blue" icon="edit"/>
          <q-btn round color="danger" icon="delete" />
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
           <q-btn round color="blue" icon="edit"/>
          <q-btn round color="danger" icon="delete" />
        </tr>
      </tbody>
    </q-markup-table>
    </q-page>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'
export default {
  name: 'Category',
      data(){
        return{
          msg:'helloworld rankizy', 
            model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
        }
      }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
