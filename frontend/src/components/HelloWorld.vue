<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [this.$store.dispatch("crewList")],
      member: {
        name: "",
        id: "",
      }
    }
  },
  computed: {
    members() {
      return this.$store.state.crewList;
    }
  },
  methods: {
    addMember() {
      this.$store.dispatch("addMember", {
        name: this.member.name,
      })
      window.alert("Un nouveau membre a été ajouter à l'équipage ! 🫵")
      location.reload();
    },
    deleteMember(e){
      this.$store.dispatch("deleteMember", e.target.id )
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })
      window.alert("Ce membre d'équipage a été renvoyé 👋")
      location.reload();
    }
  },
}
</script>

<template>
  <div class="hello">
    <h3>Ajouter un(e) membre à l'équipage</h3>
    <input v-model="this.member.name" type="text" />
    <button @click="addMember()">Ajouter un membre !</button>
  </div>

  <div crew--container>
    <ul class="crew--container">
      <li v-for="(member, index) in members" :key="index"> {{ member.name }}
        <span :id="member.id" :name="member.name" @click="deleteMember" class="red--cross">X</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.red--cross {
  color: red;
}

.crew--container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 60% auto;
  margin: 1rem auto;

}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
