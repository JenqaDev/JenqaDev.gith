import os
import time
import keyboard

isOpen = True
started = False
mtime = os.path.getmtime("index.html")

def openLiveEditor():
    global started
    started = True
    mtime = os.path.getmtime("index.html")
    os.startfile("index.html")

def closeLiveEditor():
    global started
    started = True

openLiveEditor()

while started:
    if(mtime != os.path.getmtime("index.html")):
        os.startfile("update.bat")
        print('Updating...')
        mtime = os.path.getmtime("index.html")
    if keyboard.is_pressed('ctrl+alt+q'):
        print('Done Editing')
        break
    print("Waiting for changes...")
