<template>
  <div class="category">
    <q-page> 
       <q-btn align="around" class="btn-fixed-width"  to="/AddMovement" color="brown-5" label="Nouveau mouvement" icon="lightbulb_outline" />
    <!-- debut Card -->
    <!-- fin Card -->
     <q-markup-table flat bordered>
      <thead class="bg-teal">
          <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <q-img
                style="width: 650px;height:100px;"

                :ratio="1"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/donuts.png"
              />
              <div class="text-h4 q-ml-md text-white" to="/AddCategory">Hotelerie</div>
             <!-- <router-link>Ajouter nouveau Categorie</router-link>       -->
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
          <q-btn round color="blue" icon="edit" />
          <q-btn round color="danger" icon="delete" />
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
           <q-btn round color="blue" icon="edit" />
          <q-btn round color="danger" icon="delete" />
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
           <q-btn round color="blue" icon="edit" />
          <q-btn round color="danger" icon="delete" />
        </tr>
         <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
           <q-btn round color="blue" icon="edit" />
          <q-btn round color="danger" icon="delete" />
        </tr>
         <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
           <q-btn round color="blue" icon="edit" />
          <q-btn round color="danger" icon="delete" />
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
           <q-btn round color="blue" icon="edit" />
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
            <!-- debu drawer -->
         <q-drawer
      v-model="drawerLeft"
        show-if-above
        :width="300"
        :breakpoint="700"
        elevated
        class="bg-info text-white">

        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
            to="/"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Acceuil
              </q-item-section>
            </q-item>
            <q-item 

            to="/Product"
            active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="product"/>
              </q-item-section>

              <q-item-section>
                Produit
              </q-item-section>
            </q-item>

            <q-item 
               to="/about"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Matiere
              </q-item-section>
            </q-item>

            <q-item
            to="/Category" 
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="category" />
              </q-item-section>

              <q-item-section>
                Category
              </q-item-section>
            </q-item>
            <q-item
            to="/Command" 
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="category" />
              </q-item-section>

              <q-item-section>
                Commande
              </q-item-section>
            </q-item>
            <q-item
            to="/Movement" 
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="Mouvement" />
              </q-item-section>
              <q-item-section>
                Mouvement
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

        <!-- fin drawer --> 
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
  .btn-fixed-width
  width: 200px
</style>
