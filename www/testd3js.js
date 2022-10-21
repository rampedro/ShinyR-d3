// get the data from shiny with Shiny.addCustomMessageHandler
// 'phonedata' is what we have specified in server and it must match here



Shiny.addCustomMessageHandler("r-data2-d3",d3jschart);

function d3jschart(d3data){

		
		
		var margin = {top: 50, right: 50, bottom: 50, left: 50},
	width = 851 - margin.left - margin.right,
	height = 550 - margin.top - margin.bottom;
	
     const { range, timer , selection} = d3;
      const { sin } = Math;
      const n = 30;

  
  	// to remove previous chart
	d3.selectAll("svg").remove();
	
	// decide the margin
	
      
	var svg = d3.select("#D3Plot")
		.append("svg")
		
		
		const w = svg.attr("width", width + margin.left + margin.right)
		const h = svg.attr("height", height + margin.top + margin.bottom);
		 const frequency = 0.3;

      

      const radius = width / n / 2;

      const x = (d) => ((d + 0.5) * width) / n;
      const y = (t) => (d) =>
        (sin(d *frequency + t / 1000) * height * 1.5) / 4 + height / 2;

      svg
        .selectAll('circle')
        .data(range(n))
        .enter()
        .append('circle')
        .attr('cx', x)
        .attr('r', radius)
        
        .call((selection) => {
          
          timer((time) => {
            selection.attr('cy', y(time));
            
            });
            
            
        });
        
        // Because these are being perfomed on data eneter() it fires only once
        //.on("click", function send2R() {
        // console.log("Clicked")
        //  Shiny.setInputValue("foo", "bar", {priority: "event"});
        //  console.log("variable foo has been set to bar")
         // d3.event.stopPropagation();
        //  });
        
        function myTimer(time) {
            return timer(y(time));
            
            };
            
     
           function send2R(mytext) {
         //console.log("Clicked")
          Shiny.setInputValue("foo", mytext, {priority: "event"});
          //console.log("variable foo has been set to bar")
         // d3.event.stopPropagation();
          }
          
          send2R("print frequncy or some number from d3");
          
         
          
          // function fromR (mytext) // Set frequncy of the motion from R to D3


 
          	var worldphonesdata = d3data;
          	console.log(worldphonesdata[0]);
          	
          	
     
     
            
  
		

        
        
        //  	worldphonesdata.forEach(function(k) {
         //   console.log(k)
         //     });	
          
};

	

// Receiving data from R and printing it to console

            
Shiny.addCustomMessageHandler("sentMsg",newFun);
function newFun(thisData){
  
  	d3.selectAll("g").remove();

  
var margin = {top: 200, right: 50, bottom: 50, left: 50},
	width = 851 - margin.left - margin.right,
	height = 550 - margin.top - margin.bottom;
	
     const { range, timer , selection} = d3;
      const { sin } = Math;
      const n = 30;

	// decide the margin
	
	//..var svg2 = d3.select(".someClass")
	//	.append("svg")
       var g1 = d3.select(".someClass")
            .append("g")
            .attr("width", width)
            .attr("height", height)

 

   g1.selectAll("button")
  .data(thisData)
  .join('button')
  .attr("id", function(thisData) {return thisData.id})
  .text((thisData) => { return "print" + " " + thisData.y })
  .on('click', (thisData) => { console.log(thisData.y)});
  
  
  var g2 = d3.select(".otherClass")
            .append("g")
            .attr("width", width)
            .attr("height", height)

g2.selectAll("button")
  .data(thisData)
  .join('button')
  .attr("id", function(thisData) {return thisData.id})
  .text((thisData) => { return "print" + " " + thisData.y })
  .on('click', (thisData) => { console.log(thisData.y)});
  

};
