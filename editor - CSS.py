import os
import time
import keyboard

current_dir = os.getcwd()
isOpen = True
started = False
mtime = os.path.getmtime("arts.css")

def openLiveEditor():
    global started
    started = True
    mtime = os.path.getmtime("arts.css")
    os.startfile("arts.css")

def closeLiveEditor():
    global started
    started = True

openLiveEditor()

while started:
    if(mtime != os.path.getmtime("arts.css")):
        os.startfile("update.bat")
        print('Updating...')
        mtime = os.path.getmtime("arts.css")
    if keyboard.is_pressed('ctrl+alt+q'):
        print('Done Editing')
        break
    print("Waiting for changes...")
    time.sleep(0.2)
