<template>
  <div id="app">
    <h3>{{ message }}</h3>
    <div>
      <div>
        <div v-for="item of oldArray" @click="addItem(item, $event)">{{item.name}}</div>
      </div>
      <div>
        <ul>
          <child-li :item="item" v-for="item of tempArray" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import childLi from './components/childLi'

  export default {
    name: 'App',
    components: {
      childLi
    },

    data() {
      return {
        message: '这就是一个 表格',
        oldArray: [],
        tempArray: []
      }
    },
    created() {
      this.oldArray = [
        {
          name: '旧数据111',
          time: new Date(),
          isChecked: false,
        },
        {
          name: '旧数据222',
          time: new Date(),
          isChecked: false,
        }
      ]
    },
    methods: {
      addItem(item, event) {
        // 处理颜色、增加数据
        if (event.toElement.getAttribute("style") !== "background-color: red") {
          item.isChecked = true;
          event.toElement.setAttribute("style", "background-color: red")
          this.tempArray.push(item)
        } else {
          // 删除数据
          event.toElement.removeAttribute("style")
          console.log('----------this.tempArray.indexOf(item)----------', this.tempArray.indexOf(item))
          if (this.tempArray.indexOf(item) > -1) {
            this.tempArray.splice(this.tempArray.indexOf(item), 1)
          }

          console.log('---------after-remove----------', this.tempArray)
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
  }
</style>
