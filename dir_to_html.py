# take a folder of photos
# and convert them to html tags
# output to console

import os
import sys

# get the path of the folder
path = sys.argv[1]

# get the list of files in the folder
files = os.listdir(path)

# initialize the html string
html = ''
alt = 'Images from Holly\'s flower field.' 

# create the html string
for file in files:
    path = sys.argv[1] + '/' + file
    html += '<img src="' + path + '" alt="' + alt + '">\n'

# print the html string
print(html)