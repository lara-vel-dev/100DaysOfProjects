from tkinter import messagebox as mb
import tkinter as tk
import random

r = tk.Tk()
r.geometry('700x550')
r.title('Roll Dice')
c = tk.Canvas(r, width=850, height=550)
c.pack()


def roll_dice():
    global btn_clicks
    # unicode character strings for dice
    dice = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685']
    d = {'\u2680':1, '\u2681':2, '\u2682':3, '\u2683':4, '\u2684':5, '\u2685':6}
    dice1 = random.choice(dice)
    dice2 = random.choice(dice)
    ldice.configure(text=f'{dice1} {dice2}')
    c.create_window(350, 250, window=ldice)
    res = d[dice1] + d[dice2]
    label2.configure(text="You got  "+str(res))
    btn_clicks += 1
    label1['text'] = "Dice rolled: " + str(btn_clicks) + " times"
    if (btn_clicks == 10 and res != 10):
        rollbutton.configure(state='disabled')
        mb.showerror("Game over", "Sorry,Try again")
    elif (res == 10):
        rollbutton.configure(state='disabled')
        mb.showinfo("Winner", "Congrats,you won!!")


def restart():
    global btn_clicks
    btn_clicks= 0
    label1.configure(text="")
    label2.configure(text="Not rolled yet")
    rollbutton.configure(state='normal')


ldice = tk.Label(r, text='', font=('Arial', 120),fg='#00B9FF')
rollbutton = tk.Button(r, text='Roll the dice', font=('Arial', 20,"bold"),state="disabled",background="brown",foreground='#FFEF28',height=1, width=15, command=roll_dice)
c.create_window(350, 120, window=rollbutton)
button1 = tk.Button(r, text='Start/Restart game', font=('Arial', 20,"bold"),background="blue",foreground='#FFFFFF',height=1, width=15, command=restart)
c.create_window(350, 50, window=button1)
label1 = tk.Label(r, text='', font=('Arial',20,'bold'),fg='brown')
c.create_window(180, 410, window=label1)
label2 = tk.Label(r, text='Not rolled yet', font=('Arial',20,'bold'),bg='#2883FF',fg='yellow',width=12)
c.create_window(480, 410, window=label2)
label3 = tk.Label(r, text='Winning rule: The player wins if he/she gets a sum of 10 on rolling 2 dice,within 10 chances', font=('Arial',13,'bold'),fg='white',bg="black")
c.create_window(350, 500, window=label3)

# call the mainloop of Tk
r.mainloop()