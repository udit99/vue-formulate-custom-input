import Vue from 'vue'
const VueFormulate = require('@braid/vue-formulate')
import TestComponent from '~/components/TestComponent'

Vue.component('TestComponent', TestComponent)

Vue.use(VueFormulate, {
    library: {
        testcomponent: {
            classification: 'text',
            component: 'TestComponent'
        }
    }
})
