# ---- Dependencies --- #
from tkinter import *
from tkinter import colorchooser
import PIL.ImageGrab as ImageGrab
from tkinter import filedialog
from tkinter import messagebox

# Tkinter init
root = Tk()
root.title("Paint App")
root.geometry("1100x600")


# stroke size options
options = [1, 2, 3, 4, 5, 10, 15, 20]

stroke_size = IntVar()
stroke_size.set(1)

stroke_color = StringVar()
stroke_color.set("black")

previousColor = StringVar()
previousColor.set("white")

previousColor2 = StringVar()
previousColor2.set("white")

# variables for pencil
prevPoint = [0, 0]
currentPoint = [0, 0]

# variable for text
textValue = StringVar()

def usePencil():
    stroke_color.set("black")
    canvas["cursor"] = "arrow"


def useEraser():
    stroke_color.set("white")
    canvas["cursor"] = DOTBOX


def selectColor():
    selectedColor = colorchooser.askcolor("blue", title="Select Color")
    if selectedColor[1] == None:
        stroke_color.set("black")
    else:
        stroke_color.set(selectedColor[1])
        previousColor2.set(previousColor.get())
        previousColor.set(selectedColor[1])

        previousColorButton["bg"] = previousColor.get()
        previousColor2Button["bg"] = previousColor2.get()


def paint(event):
    global prevPoint
    global currentPoint
    x = event.x
    y = event.y
    currentPoint = [x, y]

    if prevPoint != [0, 0]:
        canvas.create_polygon(prevPoint[0], prevPoint[1], currentPoint[0], currentPoint[1], fill=stroke_color.get(),
                              outline=stroke_color.get(), width=stroke_size.get())

    prevPoint = currentPoint

    if event.type == "5":
        prevPoint = [0, 0]


def paintRight(event):
    x = event.x
    y = event.y
    canvas.create_arc(x, y, x + stroke_size.get(), y + stroke_size.get(), fill=stroke_color.get(),
                      outline=stroke_color.get(), width=stroke_size.get())


def saveImage():
    try:
        fileLocation = filedialog.asksaveasfilename(defaultextension="jpg")
        x = root.winfo_rootx()
        y = root.winfo_rooty() + 100
        img = ImageGrab.grab(bbox=(x, y, x + 1100, y + 500))
        img.save(fileLocation)
        showImage = messagebox.askyesno("Paint App", "Do you want to open image?")
        if showImage:
            img.show()

    except Exception as e:
        messagebox.showinfo("Paint app: ", "Error occured")


def clear():
    if messagebox.askokcancel("Paint app", "Do you want to clear everything?"):
        canvas.delete('all')


def createNew():
    if messagebox.askyesno("Paint app", "Do you want to save before you clear everything?"):
        saveImage()
    clear()


def help():
    helpText = "1. Draw by holding right button of mouse to create dotted lines.\n2.Click scroll well to put text on Canvas.\n3. Click on Select Color Option select specific color\n4. Click on Clear to clear entire Canvas"
    messagebox.showinfo("Help", helpText)


def settings():
    messagebox.showwarning("Settings", "Not Available")


def about():
    messagebox.showinfo("About", "This paint app is best!")


def writeText(event):
    canvas.create_text(event.x, event.y, text=textValue.get())


# Interface

frame1 = Frame(root, height=100, width=1100)
frame1.grid(row=0, column=0, sticky=NW)

# ToolsFrame
toolsFrame = Frame(frame1, height=100, width=100, relief=SUNKEN, borderwidth=3)
toolsFrame.grid(row=0, column=0)

pencilButton = Button(toolsFrame, text="Pencil", width=10, command=usePencil)
pencilButton.grid(row=0, column=0)
eraserButton = Button(toolsFrame, text="Eraser", width=10, command=useEraser)
eraserButton.grid(row=1, column=0)
toolsLabel = Label(toolsFrame, text="Tools", width=10)
toolsLabel.grid(row=3, column=0)

# SizeFrame
sizeFrame = Frame(frame1, height=100, width=100, relief=SUNKEN, borderwidth=3)
sizeFrame.grid(row=0, column=1)

defaultButton = Button(sizeFrame, text="Default", width=10, command=usePencil)
defaultButton.grid(row=0, column=0)
sizeList = OptionMenu(sizeFrame, stroke_size, *options)
sizeList.grid(row=1, column=0)
sizeLabel = Label(sizeFrame, text="Size", width=10)
sizeLabel.grid(row=2, column=0)

# Box colors
colorBoxFrame = Frame(frame1, height=100, width=100, relief=SUNKEN, borderwidth=3)
colorBoxFrame.grid(row=0, column=2)

colorBoxButton = Button(colorBoxFrame, text="Select Color", width=10, command=selectColor)
colorBoxButton.grid(row=0, column=0)
previousColorButton = Button(colorBoxFrame, text="Previous", width=10,
                             command=lambda: stroke_color.set(previousColor.get()))
previousColorButton.grid(row=1, column=0)
previousColor2Button = Button(colorBoxFrame, text="Previous2", width=10,
                              command=lambda: stroke_color.set(previousColor2.get()))
previousColor2Button.grid(row=2, column=0)

# Frame colors
colorsFrame = Frame(frame1, height=100, width=100, relief=SUNKEN, borderwidth=3)
colorsFrame.grid(row=0, column=3)

redButton = Button(colorsFrame, text="Red", bg="red", width=10, command=lambda: stroke_color.set("red"))
redButton.grid(row=0, column=0)
greenButton = Button(colorsFrame, text="Green", bg="green", width=10, command=lambda: stroke_color.set("green"))
greenButton.grid(row=1, column=0)
blueButton = Button(colorsFrame, text="Blue", bg="blue", width=10, command=lambda: stroke_color.set("blue"))
blueButton.grid(row=2, column=0)
yellowButton = Button(colorsFrame, text="Yellow", bg="yellow", width=10, command=lambda: stroke_color.set("yellow"))
yellowButton.grid(row=0, column=1)
orangeButton = Button(colorsFrame, text="Orange", bg="orange", width=10, command=lambda: stroke_color.set("orange"))
orangeButton.grid(row=1, column=1)
purpleButton = Button(colorsFrame, text="Purple", bg="purple", width=10, command=lambda: stroke_color.set("purple"))
purpleButton.grid(row=2, column=1)

# saveImageFrame
saveImageFrame = Frame(frame1, height=100, width=100, relief=SUNKEN, borderwidth=3)
saveImageFrame.grid(row=0, column=4)

saveImageButton = Button(saveImageFrame, text="Save", bg="white", width=10, command=saveImage)
saveImageButton.grid(row=0, column=0)
newImageButton = Button(saveImageFrame, text="New", bg="white", width=10, command=createNew)
newImageButton.grid(row=1, column=0)
clearImageButton = Button(saveImageFrame, text="Clear", bg="white", width=10, command=clear)
clearImageButton.grid(row=2, column=0)

# Settings
helpSettingFrame = Frame(frame1, height=100, width=100, relief=SUNKEN, borderwidth=3)
helpSettingFrame.grid(row=0, column=5)

helpButton = Button(helpSettingFrame, text="Help", bg="white", width=10, command=help)
helpButton.grid(row=0, column=0)
settingButton = Button(helpSettingFrame, text="Settings", bg="white", width=10, command=settings)
settingButton.grid(row=1, column=0)
aboutButton = Button(helpSettingFrame, text="About", bg="white", width=10, command=about)
aboutButton.grid(row=2, column=0)

# Text
textFrame = Frame(frame1, height=100, width=200, relief=SUNKEN, borderwidth=3)
textFrame.grid(row=0, column=6)

textTitleButton = Label(textFrame, text="Write you Text here:", bg="white", width=20)
textTitleButton.grid(row=0, column=0)
entryButton = Entry(textFrame, textvariable=textValue, bg="white", width=20)
entryButton.grid(row=1, column=0)
clearButton = Button(textFrame, text="Clear", bg="white", width=20, command=lambda: textValue.set(""))
clearButton.grid(row=2, column=0)

# Note
noteFrame = Frame(frame1, height=100, width=200, relief=SUNKEN, borderwidth=3)
noteFrame.grid(row=0, column=7)

textTitleButton = Text(noteFrame, bg="white", width=40, height=4)
textTitleButton.grid(row=0, column=0)

frame2 = Frame(root, height=500, width=1100, bg="yellow")
frame2.grid(row=1, column=0)

canvas = Canvas(frame2, height=500, width=1100, bg="white")
canvas.grid(row=0, column=0)
canvas.bind("<B1-Motion>", paint)
canvas.bind("<ButtonRelease-1>", paint)
canvas.bind("<B3-Motion>", paintRight)
canvas.bind("<Button-2>", writeText)

root.resizable(False, False)
root.mainloop()