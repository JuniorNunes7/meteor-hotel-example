import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 
  Meteor.methods({

    'add'(hotel){
      Hotel.insert(hotel)

    },

    'remove'(idHotel){
      Hotel.remove(idHotel)
    },

    'update'(id, hotel){
      return Hotel.update(id, { $set: hotel })
    }
  })
  

});
