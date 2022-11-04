library(readr)
#college <- read_csv("college.csv")

college <- read.csv("college.csv",header = T)              
# File name or full path of the file
# Whether to read the header or not
#sep = ",",            # Separator of the values
#quote = "\"",         # Quoting character
#dec = ".",            # Decimal point
#fill = TRUE,          # Whether to fill blacks or not
#comment.char = "",    # Character of the comments or empty string 
#encoding = "unknown", # Encoding of the file
#...
# )   


#View(college)
View(college)
pairs(college[,2:5])

# aing new column to the table 
# Default value No, 
elite <- rep("No", nrow(college))
college <- data.frame(college,elite)
View(college)

