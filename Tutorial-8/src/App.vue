<script>
export default {
  data(){
    return {
      text : '',
      form:{
        email:'',
        select:'',
        multiSelect:[],
        textarea:'',
        termsAndConditions:false,
        admins:[],
        gender:'',
        dynamicData:''
      }
    }
  },computed:{
  computedSelectData(){
    return this.dynamicSelectTag();
  }
},
  methods:{
    transformData(){
      this.form.name = this.form.name.toUpperCase();
    },
    dynamicSelectTag(){
      return [
        { text: 'Frontend', value: 'frontend' },
        { text: 'Backend', value: 'backend' },
        { text: 'Full stack', value: 'fullstack' }
      ]
    }
  }
}
</script>

<template>

<!--  <input-->
<!--      :value="text"-->
<!--      @input="event => text = event.target.value">-->
<!--  <p>{{text}}</p>-->

<!--  <input type="text" v-model="form.name">-->
<!--  <button @click="transformData">Transform</button>-->

  <p style="white-space: pre-line;">{{ form.textarea }}</p>


  <p>{{form}}</p>
  <hr>

  <div class="container">
    <div class="col-6 text-center m-4">
      <div class="card">
        <div class="card-header">Form</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" v-model="form.email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" v-model="form.select" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Example multiple select</label>
              <select multiple class="form-control" v-model="form.multiSelect" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" v-model="form.textarea" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="form.termsAndConditions" type="checkbox" value="" id="defaultCheck1">
              <label class="form-check-label" for="defaultCheck1">
                Terms and conditions
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="form.admins" type="checkbox"  value="Ashad Admin" id="defaultCheck1">
              <label class="form-check-label" for="defaultCheck1">
                Admins
              </label>
            </div><div class="form-check">
            <input class="form-check-input" v-model="form.admins" type="checkbox" value="Hiya Sub Admin" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
              Sub admins
            </label>
          </div>
            
            <div class="form-check">
              <label for="">Gender</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" v-model="form.gender" name="exampleRadios" id="exampleRadios1" value="male" >
                <label class="form-check-label" for="exampleRadios1">
                 Male
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" v-model="form.gender" name="exampleRadios" id="exampleRadios2" value="female">
                <label class="form-check-label" for="exampleRadios2">
                  Female
                </label>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Role</label>
              <select  class="form-control" v-model="form.dynamicData" id="exampleFormControlSelect2">
                <option v-for="item in computedSelectData" :value="item.value">{{item.text}}</option>

              </select>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
