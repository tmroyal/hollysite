# take all photos in a folder and rename them with a number

import os
import sys
import shutil

# get the path of the folder
path = sys.argv[1]

# get the list of files in the folder
files = os.listdir(path)

# get the number of files
num_files = len(files)

# get the number of digits of the number of files
num_digits = len(str(num_files))

# get the extension of the files
extension = files[0].split('.')[-1]

# create a new folder
new_folder = path + '/renamed'
os.mkdir(new_folder)

# rename the files
for i in range(num_files):
    # get the old name
    old_name = path + '/' + files[i]
    # get the new name
    new_name = new_folder + '/' + str(i+1).zfill(num_digits) + '.' + extension
    # rename the file
    shutil.copyfile(old_name, new_name)

print('Done!')  
