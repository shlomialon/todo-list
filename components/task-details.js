Vue.component('task-details', {
    template: `  
    
<div v-if="selectedItem">
    <div class="mdl-textfield mdl-js-textfield">
        <label  class="mdl-textfield__label" for="sample1">text:</label>
        <input  class="mdl-textfield__input" id="item-text" type=text v-model="selectedItem.text"/>
    </div> 
    <input type="checkbox" id="switch-1" class="mdl-switch__input" v-model="selectedItem.activity">
 
    <task-delete :item="selectedItem" v-on:remove-item="removeItem"></task-delete>
</div>
`,
    props: ['selectedItem'],

    methods: {
        removeItem: function (item) {
            this.$emit("remove-item", item);
        },
    }
});