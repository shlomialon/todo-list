Vue.component('task-details', {
    template: `  
  <div v-if="selectedItem">
        <label  for="item-text">text:</label>
        <input id="item-text" type=text v-model="selectedItem.text"/>
        <button v-bind:style="{'background-color': selectedItem.activity ? '#4CAF50' : 'red'}" v-on:click="selectedItem.activity = !selectedItem.activity">{{selectedItem.activity}}</button>
        <task-delete :item="selectedItem" v-on:remove-item="removeItem"></task-delete>
    </div>
`,
    props: ['selectedItem'],
    data: function () {
        return {
        }
    },
    methods: {
        removeItem: function (item) {
            this.$emit("remove-item",item);
        }
    }
});