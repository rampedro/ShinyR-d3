library(datasets)

# Use a fluid Bootstrap layout
fluidPage(theme="d3style.css",
  
  # Give the page a title
  titlePanel("Telephones by region"),
   
  # Generate a row with a sidebar
  sidebarLayout(      
    
    # Define the sidebar with one input
    sidebarPanel(
      selectInput("region", "Region:", 
                  choices=colnames(WorldPhones)),
      hr(),
      helpText("Data from AT&T (1961) The World's Telephones.")
    ),
    
    # main panel where we will show the d3 plot
    mainPanel(
      
      # it will load the d3.js of version 5 in html from cdn
      tags$head(tags$script(src="https://d3js.org/d3.v5.min.js")),
      tags$head(tags$script(src="https://d3js.org/d3-scale-chromatic.v1.min.js")),


      # this is the script where we create our d3 chart, which resides in www folder
      tags$script(src="d3js.js"),
      
      # place for d3 chart
      plotOutput("D3Plot")
    )
    
  )
)