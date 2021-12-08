import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD_6Dqn6XPCh-cuIvFvDu7ngtXDW3BKzk4',
    // libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})
