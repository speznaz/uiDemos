  console.info('test')

  // create a tempalte loading function
  // enables loading of Templates in external folders
  Handlebars.getTemplate = function(name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      $.ajax({
        url : 'js/templates/' + name + '.handlebars',
        success : function(data) {
          if (Handlebars.templates === undefined) {
            Handlebars.templates = {};
          }
          Handlebars.templates[name] = Handlebars.compile(data);
        },
        async : false
      });
    }
    return Handlebars.templates[name];
  };


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
      var template = Handlebars.getTemplate('ShiftList');
      var html = template(theShifts.toJSON());
      this.$el.html(html);
    }
  });

  var shiftListView = new ShiftListView();