require "sinatra"
require "pry"

# homepage
get "/" do
	erb :index
end

# store a painting
def save_painting(target, line1, line2, line3, line4)
  target.write(line1)
  target.write(", ")
  target.write(line2)
  target.write(", ")
  target.write(line3)
  target.write(", ")
  target.write(line4)
  target.write("\n")

  target.close  
end

get '/store_painting' do
	
  target = open("gallery.csv", 'a+')
  
# define variables to params
  row1 = params["row1"]
  row2 = params["row2"]
  row3 = params["row3"]
  row4 = params["row4"]
 
  save_painting(target, row1, row2, row3, row4)
end




	# done! ruby function for adding a row to add_row_to_csv

	# done! run that function inside of a sinatra route

	# done! get the values of the painting data out of params instead of hard code

	# done! goal: type in http://localhost:4567/store_painting?row1=wwww&row2=bbbb&row3=rrrr&row4=yyyy


	# done! typing that line in should manually add to your csv /\




	# next step is to make a request at that url using xhr < this is when you start using ajax

	# final step: determing from the dom to dynamically get painting data for each row 



	# try to focus on one language at a time...

