
var messagesRef = firebase.database().ref('messages')

// create Vue app
var messages = new Vue({
  // element to mount to
  el: '#messages',
  // initial data
  data: {
    newMessage: 'This is an occasionally random page, where one certain person can freely share his piece of life.'
  },
  // firebase binding
  // https://github.com/vuejs/vuefire
  firebase: {
    messages: messagesRef
  },
  // computed property for form validation state
  computed: {
    addUser: function () {
        messagesRef.push(this.newMessage)
      }
    }
  }
})