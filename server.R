library(datasets)
?datasets
WorldPhones = data.frame(WorldPhones)
WorldPhones$Year = rownames(WorldPhones)

# Define a server for the Shiny app
function(input, output,session) {
  

   
  observe({
    
    # this is act as a listener. Once the R (shiny drop down is changed) the corresponding d3 elements,
    # buttons that are bind to R input$region value will also be change. 
    
    # to send the data 2 javascript we will use session$sendCustomMessage
    # the type = 'dataNAME' ,we can give any name here but it must be match with d3js.js file                                      #,"nums"=input$foo         
    session$sendCustomMessage(type='sentMsg', jsonlite::toJSON(data.frame(cbind('id'=c('one','two','three','four'),'y'=input$region,'val'=input$slider))))
    
     session$sendCustomMessage(type='r-data2-d3', jsonlite::toJSON(data.frame(cbind('other'=input$slider,"Year"=WorldPhones[,"Year"],"Country"=WorldPhones[,input$region]))))

    
    #input$slider
    #session$sendCustomMessage(type='sliderValue', jsonlite::toJSON(data.frame(cbind('val'=input$slider))))
    
    output$result <- renderText({
      input$slider
      
    })
    
  })
  
  
  
  cap <- eventReactive(input$goButton, {
    input$caption
  })
  
  text <- eventReactive(input$goButton, {
    #input$TEXT1
    # If circles in d3 clicked then the go button from Rshiny updates the dom with new text
    # This can be helpful in running any R code and outputing the result to screen in Text format
      input$foo 
   
    
  })
  
  
  output$caption <- renderText({
    cap()
  })
  
  output$TEXT1 <- renderText({
    text()
  })
  

  
  
  
  
}