library(datasets)

# Use a fluid Bootstrap layout
fluidPage(theme="d3style.css",
  
  # Give the page a title
  titlePanel("Testing D3 v1"),
  
  
   
  # Generate a row with a sidebar
  sidebarLayout(      
    
    # Define the sidebar with one input
    sidebarPanel(
      selectInput("region", "Region:", 
                  choices=colnames(WorldPhones)),
      hr(),
      helpText("Source data"),
      textInput("caption", "Caption:", "Data Summary"),
      textInput("TEXT1", "tEXT:", "Data Summary"), 
      actionButton("goButton", "Go"),
    ),
    
    # main panel where we will show the d3 plot
    mainPanel(
      
      # it will load the d3.js of version 5 in html from cdn
      tags$head(tags$script(src="https://d3js.org/d3.v5.min.js")),
      tags$head(tags$script(src="https://d3js.org/d3-scale-chromatic.v1.min.js")),


      # this is the script where we create our d3 chart, which resides in www folder
      tags$script(src="testd3js.js"),
      
      # place for d3 chart
      plotOutput("D3Plot"),
      
      # Text part shown based on shiny control side panel
      #h3(textOutput("TEXT1", container="click on the circle to lock output text to foo value")),
      div("Some Examples -  ", class="someClass"),
      div("Some Other examples -  ", class="otherClass"),
      
      h3(textOutput("caption", container = span)),
      h3(textOutput("TEXT1", container = span))
      #div("Somee text", class="someClass", 
      #    tags$input(type="submit", value="Dismiss")
      #)
      
    )
    
  )
)