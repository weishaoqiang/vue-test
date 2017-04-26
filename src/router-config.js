// import Child1 from './components/child1.vue'
// import Child2 from './components/child2.vue'
// import Child3 from './components/child3.vue'
export default {
    routes:[
        {path:'/child1',component: require('./components/child1.vue')},
        {path:'/child2',component: require('./components/child2.vue')},
        {path:'/child3',component: require('./components/child3.vue')},
    ]
}
