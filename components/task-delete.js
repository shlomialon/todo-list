Vue.component('task-delete',{
    template:`<button v-bind:style="{'background-color':'yellow'}" @click="removeItem" >Delete</button>`,
    props: ['item'],
    methods: {
     removeItem:function () {
         this.$emit("remove-item",this.item);
     }
    }
});