console.info('test')

var Shift = Backbone.Model.extend({
  defaults:{
    users:[]
  },
  initialize: function() {
    console.log('New shift created...');
  }
});

var shift1 = new Shift({
  id: 1,
  start: "13:00",
  end: "14:00",
  name:"Schicht 1"
});

var shift2 = new Shift({
  id: 2,
  start: "14:00",
  end: "15:00",
  name:"Schicht 2"
});

var shift3 = new Shift({
  id: 3,
  start: "15:00",
  end: "16:00",
  name:"Schicht 3"
});

var Shifts = Backbone.Collection.extend({
  model: Shift,
  initialize: function() {
    console.log('New collection initialized...');
  }
});  

var theShifts = new Shifts([shift1, shift2, shift3]);  
var ShiftListView = Backbone.View.extend({
  el: '.content',
  initialize:function(){
    this.render();
  },
  render: function () {
    var source = $('#shift-list-template').html();
    var template = Handlebars.compile(source);
    var html = template(theShifts.toJSON());
    this.$el.html(html);
  }
});

var shiftListView = new ShiftListView();