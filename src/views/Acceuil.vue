<template>
  <div class="category">
    <q-page> 
     <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <q-img
                style="width: 500px;height:300px;"

                :ratio="1"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/donuts.png"
              />
              <div class="text-h4 q-ml-md text-white">Treats</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="bg-grey-3">
      <q-btn  color="accent" label="Fit Menu" style="width: 300px; height:200px;">
        <q-menu fit>
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
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn  color="brown" clickable v-ripple  to="/" label="Max Height Menu" style="width: 300px; height:200px;">
      <li class="nav-item">
            <router-link  clickable v-ripple class="nav-link" to="/">Blog</router-link>
        </li>
      </q-btn>

      <q-btn color="indigo"  label="Max Width Menu" style="width: 300px; height:200px;">
        <q-menu max-width="600px">
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
          </q-list>
        </q-menu>
      </q-btn>
      <!-- debut drawer -->
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
      ],
         showing: ref(false)
        }
      }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
