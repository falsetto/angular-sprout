'use strict'

/**
* Defines a menu item.
*/

Application.Directives
	.directive('menuItem', function() {
	  return {
	  	restrict : 'E',
	  	replace : true,
	  	templateUrl : 'menu/menu-item-template.html',
	  	scope: {
	  		id : '=id',
	  		name : '=name'
	  	},
	  	link : function(scope, element, attrs) {
	    },
	  }
  });