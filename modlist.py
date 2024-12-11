# This creates a list of the mods in the pack. I made this since I don't have a manifest set up yet.
import os


with open("modlist.txt", "w+") as f:
    for name in os.listdir("mods"):
        if name != ".index":
            f.write(f"{name}\n")