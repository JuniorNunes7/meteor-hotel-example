import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.cadastroHotel.onCreated(function helloOnCreated() {
  // MeteorCamera.getPicture({}, function(error, response) {
  //   console.log(response);
  // })
});

Template.listarHotel.helpers({
  
  hoteis() {
    return Hotel.find()
  },
});

//Cadastrar
Template.cadastroHotel.events({
  'click button'(event, instance) {
    let id = document.querySelector('#idHotel')
    var nome = document.querySelector('#nomeHotel')
    var imagem = document.querySelector('#imagemHotel')
    var descricao = document.querySelector('#descricaoHotel')
    
    let hotel = {
      nome: nome.value,
      imagem: imagem.value,
      descricao: descricao.value
    }

    if(id.value === "") {
      Meteor.call('add', hotel)
    } else {
      Meteor.call('update', id.value, hotel)
      id.value = ''
    }
    nome.value=''
    imagem.value=''
    descricao.value=''
  },

});//EndCadastrar

Template.listarHotel.events({

  'click .remove'() {

    //Hotel.remove(this._id);
    Meteor.call('remove',this._id)

  },

  'click .edit'() {

    //Preencher os campos da View de cadastro
    document.querySelector('#idHotel').value = this._id;
    document.querySelector('#nomeHotel').value = this.nome;
    document.querySelector('#imagemHotel').value = this.imagem;
    document.querySelector('#descricaoHotel').value = this.descricao;
    

  },
});
