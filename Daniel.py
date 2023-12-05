import io

with open("daniel.dat", "r") as file:
	lines = file.readlines()

for line in lines:
	arr = line.split(" ")
	prt = ""
	place = 1
	reset = False
	done = False
	count = 0
    
	while not done and count < len(arr):
    	check = False
    	if reset:
        	place = 1
        	reset = False
    	for j in range(place):
        	if count < len(arr):
            	test = prt + " " + arr[count]
            	if len(test.strip()) <= 30:
                	prt = (prt + " " + arr[count]).strip()
                	count += 1
            	else:
                	reset = True
    	place += 1
    	print(prt)
    	prt = ""
    
	print("---------*---------*---------*")









