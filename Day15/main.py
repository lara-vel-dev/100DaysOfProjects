import onetimepad
from tkinter import *

win = Tk()
win.title("Encryption")
def encryptmessage():
    message = e1.get()
    ciphertext = onetimepad.encrypt(msg=message, key='random')
    e2.insert(0, ciphertext)


ogmsg = Label(win, text='Enter message')
ogmsg.grid(row=10, column=1)
emsg = Label(win, text='Encrypted message')
emsg.grid(row=11, column=1)

e1 = Entry(win)
e1.grid(row=10, column=2)
e2 = Entry(win)
e2.grid(row=11, column=2)

encryptionButton = Button(win, text='Encryption', bg='grey', fg='black', command=encryptmessage)
encryptionButton.grid(row=13, column=2)

win.mainloop()