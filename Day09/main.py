# ---- Dependencies ---- #
# For GUI
import PySimpleGUI as sg
# For file management
import pandas as pd
import os
# For sending automate messages
import time
import webbrowser as web
import pyautogui as pg
# from pynput.keyboard import Key, Controller


# Gets current path
working_directory = os.getcwd()
# keyboard = Controller()

layout = [
    [sg.Text("Choose an Excel file:")],
    [sg.InputText(key="-FILE_PATH-"),
    sg.FileBrowse(initial_folder=working_directory, file_types=[("Excel Files", "*.xlsx")])],
    [sg.Button("Submit"), sg.Exit()]
]

window = sg.Window("Automatic Whatsapp Messages", layout)

while True:
    event, values = window.read()
    if event in (sg.WIN_CLOSED, 'Exit'):
        break
    elif event == "Submit":
        excel_file_path = values["-FILE_PATH-"]
        excel_file_df = pd.read_excel(excel_file_path)

        for i in range(len(excel_file_df)):
            name = excel_file_df.loc[i, 'Nombre']
            card_account = excel_file_df.loc[i, 'Terminación'].astype(str)
            balance_due = excel_file_df.loc[i, 'Saldo Vencido'].astype(str)
            phone = excel_file_df.loc[i, 'Teléfono'].astype(str)

            # Creates Message
            message = f"Estimado/a {name}, su tarjeta con terminación {card_account} presenta " \
                      f"un saldo vencido de ${balance_due}.00. Favor de pagar lo antes posible. Gracias!"

            # Opens whatsapp web
            web.open(f'https://web.whatsapp.com/send?phone={phone}&text={message}')

            # Sends message
            time.sleep(8)
            pg.press('enter')
            # keyboard.press(Key.enter)

            # Closes whatsapp window
            time.sleep(1.5)
            pg.hotkey('command', 'w')
            time.sleep(1)


window.close()