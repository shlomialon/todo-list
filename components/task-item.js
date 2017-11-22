Vue.component("task-item",{
   template:`  <div @click='selectItemEdit(item)' v-bind:style="{'text-decoration': item.activity ? 'line-through' : null}">{{item.text}} </div>` ,
    props: ['item'],
    methods:{
        selectItemEdit: function (item) {
            this.$emit('select-item', item);
        },
    }
});