// get the data from shiny with Shiny.addCustomMessageHandler
// 'phonedata' is what we have specified in server and it must match here

//=	Shiny.addCustomMessageHandler("sliderValue",frequency);

 //   function frequency(datum){
		 //var frequency = datum[0].val;
		 //console.log(frequency)
//};
var dummyNum = 10;
            
Shiny.addCustomMessageHandler("sentMsg",newFun);
function newFun(thisData){
  
  	d3.selectAll("g").remove();
  		//console.log(parseFloat(thisData[0].val))
  		
  		const x = d3.scaleLinear().domain([d3.min(d3.range(10)),d3.max(d3.range(10))])
  		console.log(x.domain())
  		let frequncy = parseFloat(thisData[0].val)

  
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
  .on('click', (thisData) => { 
    
    console.log(thisData.y)
    
    if (thisData.y == "Asia"){
    dummyNum = -10
    }else if (thisData.y == "Africa"){
      dummyNum = 10
      
    }
  });
  
  
  var g2 = d3.select(".otherClass")
            .append("g")
            .attr("width", width)
            .attr("height", height)

g2.selectAll("button")
  .data(thisData)
  .join('button')
  .attr("id", function(thisData) {return thisData.id})
  .text((thisData) => { return "print" + " " + thisData.y })
  .on('click', (thisData) => { console.log(thisData.y)
  
    
    
  });
  

};


// Receiving data from R and printing it to console



    
    

Shiny.addCustomMessageHandler("r-data2-d3",d3jschart);


function d3jschart(d3data){

 //console.log(d3data[0].other)
	var frequency = d3data[0].other
		
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
		


      

      const radius = width / n / 2;

      const x = (d) => ((d + 0.5 + dummyNum ) * width) / n;
      const y = (t) => (d) =>
        (sin(d *frequency + t / 1000) * height * 1.5) / 4 + height / 2;

      svg
        .selectAll('circle')
        .data(range(n))
        .join('circle')
     //   .enter()
      // .append('circle')
        .attr('cx', x)
        .attr('r', (d, i) => i*radius/10)
        
        .call((selection) => {
          
          timer((time) => {
            selection.attr('cy', y(time) );
            
            });
            
            
        })
        .on("click", function(){
          Shiny.setInputValue("foo", "bar", {priority: "event"});
          
        })
        .on('mouseover',function(d) { d3.select(this).style("fill", "#fff8ee")})
        
        ;
        
        
        
        // Because these are being perfomed on data enter() it fires only once
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
         // 	console.log(worldphonesdata[0]);

          	
     
     
            
  
		

        
        
        //  	worldphonesdata.forEach(function(k) {
         //   console.log(k)
         //     });	
          
};

	


    
    