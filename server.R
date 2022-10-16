library(datasets)
WorldPhones = data.frame(WorldPhones)
WorldPhones$Year = rownames(WorldPhones)

# Define a server for the Shiny app
function(input, output,session) {
  
   
  observe({
    
    # to send the data to javascript we will use session$sendCustomMessage
    # the type = 'phonedata' ,we can give any name here but it must be match with d3js.js file
    session$sendCustomMessage(type='r-data2-d3', jsonlite::toJSON(data.frame(cbind("Year"=WorldPhones[,"Year"],"Country"=WorldPhones[,input$region]))))
    
  })
  
}