;(function(){
     $.fn.extend({
        "tabs": function (options) {
        	var defaults = {
				bindevent: "click",				
		        focusClass: "cur",
		        panelClass: "panel"
		    };
		   var _self = $(this)          
		   var options = $.extend(defaults, options);
			function setClass(obj){
				obj.addClass(options.focusClass)
				obj.siblings().removeClass(options.focusClass)
			}
			function showPanel(obj){
				var panels  =  null;			
				if( obj.parent().siblings("." + options.panelClass).length){
					panels = obj.parent().siblings("." + options.panelClass)									
				}else if(obj.parent().siblings().find("." + options.panelClass).length){
					panels = obj.parent().siblings().find("."+  options.panelClass)					
				}else{
					return false
				}								
				panels.hide();	
				panels.eq(obj.index()).show();				
			}
			return this.each(function () {				
				_self.find("ul:first").children("li").bind(options.bindevent,function(){
					var $this = $(this)		
					setClass($this)	
					showPanel($this)						
				})
			})
        }
    });	
})(jQuery)
