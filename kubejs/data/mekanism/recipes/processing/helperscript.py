# This script adds the empty json files to remove oreproc recipes

# Creates an empty json file
import os


def make_file(path):
    open(path, "w+")
    
def make_folder(path):
    try:
        os.mkdir(path)
    except:
        pass

# List of metals
metals = ["copper", "gold", "iron", "lead", "osmium", "tin", "uranium"]

for metal in metals:
    make_folder(metal)
    
    for folder in ["clump", "crystal", "dirty_dust", "dust", "shard", "slurry"]:
        make_folder(f"{metal}/{folder}")
        
    # Clump
    for filename in ["from_ore", "from_raw_block", "from_raw_ore", "from_shard"]:
        make_file(f"{metal}/clump/{filename}.json")
        
    make_file(f"{metal}/crystal/from_slurry.json")
    make_file(f"{metal}/dirty_dust/from_clump.json")
    make_file(f"{metal}/dust/from_dirty_dust.json")
    
    for filename in ["from_crystal", "from_ore", "from_raw_block", "from_raw_ore"]:
        make_file(f"{metal}/shard/{filename}.json")
        
    make_file(f"{metal}/slurry/clean.json")