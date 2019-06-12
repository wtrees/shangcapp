<template>
  <div class="appl">
<cube-button @click="showDrawer">Show Drawer</cube-button>
<cube-drawer
  ref="drawer"
  title="请选择"
  :data="data"
  :selected-index="selectedIndex"
  @change="changeHandler"
  @select="selectHandler"
  @cancel="cancelHandler"></cube-drawer>
  </div>
</template>
<script>

export default {
  data() {
    return {
      selectedIndex: [],
      data: [
        provinceList,
        [],
        []
      ]
    }
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show()
    },
    changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
      // fake request
      setTimeout(() => {
        let data
        if (index === 0) {
          // procince change, get city data
          data = cityList[item.value]
        } else {
          // city change, get area data
          data = areaList[item.value]
        }
        // refill panel(index + 1) data
        this.$refs.drawer.refill(index + 1, data)
      }, 200)
    },
    selectHandler(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandler() {
      console.log('cancel')
    }
  }
}
</script>
<style scoped>
.appl{
    background-color: #666;
    height: 600px;
}
</style>

