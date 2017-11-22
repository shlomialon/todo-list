Vue.component('task-delete',{
    template:`<button  class="mdl-button mdl-js-button mdl-button--icon" @click="removeItem" ><i class="material-icons">delete</i></button>`,
    props: ['item'],
    methods: {
     removeItem:function () {
         this.$emit("remove-item",this.item);
     }
    }
});