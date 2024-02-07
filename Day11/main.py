# --- Dependencies --- #
from config import *
import telebot
import threading
from telebot.types import ReplyKeyboardMarkup, ReplyKeyboardRemove, ForceReply
from random import randint

# User info
user_info = {}

# Bot init
bot = telebot.TeleBot(TOKEN)

# Config main commands
bot.set_my_commands([
    telebot.types.BotCommand('/start', 'Starts the bot'),
    telebot.types.BotCommand('/help', 'Gives the list of commands'),
    telebot.types.BotCommand('/hi', 'The bot greets you'),
    telebot.types.BotCommand('/nickname', 'Sets your nickname'),
    telebot.types.BotCommand('/100daysofprojects', 'Shows the QR of the 100 Days Of Projects Repo'),
])

# --- Commands --- #
# Start command
@bot.message_handler(commands=['start'])
def cmd_start(message):
    bot.reply_to(message, 'Welcome, how can I help you?')

# Help command
@bot.message_handler(commands=['help'])
def cmd_help(message):
    bot.send_chat_action(message.chat.id, 'typing')
    bot_msg = '<b><u>Commands List</u></b>\n' \
              '<b>Start command: </b> /start\n' \
              '<b>Greetings command: </b> /hi /hello /greetings\n' \
              '<b>Nickname command: </b> /nickname\n' \
              '<b>Social media command: </b> /socialmedia \n' \
              '<b>Play command: </b> /play\n' \
              '<b>100DaysOfProjects command: </b> /100daysofprojects \n'

    bot.send_message(message.chat.id, bot_msg, parse_mode='html')

# Nickname command
@bot.message_handler(commands=['nickname'])
def nickname(message):
    bot.send_chat_action(message.chat.id, 'typing')
    markup = ForceReply()
    msg = bot.send_message(message.chat.id, 'How would you like me to call you?', reply_markup=markup)
    bot.register_next_step_handler(msg, set_nickname)

def set_nickname(message):
    user_info[message.chat.id] = {}
    user_info[message.chat.id]['nickname'] = message.text

# Greetings command
@bot.message_handler(commands=['hi', 'greetings', 'hello'])
def cmd_greetings(message):
    bot.send_chat_action(message.chat.id, 'typing')
    if not user_info :
        name = message.from_user.first_name
        bot.reply_to(message, f'Hello {name}!!')
    else :
        bot.reply_to(message, f'Hello {user_info[message.chat.id]["nickname"]}')

# Social Media command
@bot.message_handler(commands=['socialmedia'])
def social_media_command(message):
    bot.send_chat_action(message.chat.id, 'typing')
    msg = '<b>My social media :D </b>\n' \
          '<b><u>Instagram</u>:</b> lara_vel.dev\n' \
          '<b><u>Threads</u>:</b> lara_vel.dev\n' \
          '<b><u>Twitter</u>:</b> lara_vel_dev\n' \
          '<b><u>LinkedIn</u>:</b> daniela-lara-lozano\n' \
          '<b><u>Github</u>:</b> lara-vel-dev\n'
    bot.send_message(message.chat.id, msg, parse_mode='html')

# Guess the number command
@bot.message_handler(commands=['play'])
def guess_the_number_command(message):
    random_number = randint(1,10)
    chat_id = message.chat.id
    user_info[chat_id] = random_number
    btn = ReplyKeyboardMarkup(input_field_placeholder='Select a number')
    btn.add('1', '2', '3', '4', '5', '6', '7', '8', '9', '10')
    msg = bot.send_message(message.chat.id, "Guess the number between 1 and 10", reply_markup=btn)
    bot.register_next_step_handler(msg, validate_number)

def validate_number(message):
    chat_id = message.chat.id
    if not message.text.isdigit():
        msg = bot.send_message(message.chat.id, 'ERROR: Please add a number')
        bot.register_next_step_handler(msg, validate_number)
    else:
        n = int(message.text)
        if n < 1 or n > 10:
            msg = bot.send_message(message.chat.id, 'ERROR: Out of range number')
            bot.register_next_step_handler(msg, validate_number())
        else:
            if n == user_info[chat_id]:
                markup = ReplyKeyboardRemove()
                bot.reply_to(message, "You won!!", reply_markup=markup)
            elif n > user_info[chat_id]:
                msg = bot.reply_to(message, 'Lower')
                bot.register_next_step_handler(msg, validate_number)
            else:
                msg = bot.reply_to(message, 'Higher')
                bot.register_next_step_handler(msg, validate_number)


# Show repo command
@bot.message_handler(commands=['100daysofprojects'])
def show_repo_command(message):
    img = open('./frame.png', 'rb')
    bot.send_photo(message.chat.id, img)


# Message handler
@bot.message_handler(content_types=['text'])
def bot_message_handler(message):
    if message.text.startswith('/'):
        bot.send_chat_action(message.chat.id, 'typing')
        bot.send_message(message.chat.id, "That's not a valid command, use /help to see the commands list")
    else:
        bot.send_chat_action(message.chat.id, 'typing')
        bot.send_message(message.chat.id, "I'm not sure what you mean, please use /help to see the commands list")

# Threading function
def receive_msg():
    bot.infinity_polling()

if __name__ == '__main__':
    # Thread
    thread_bot = threading.Thread(name='thread_bot', target=receive_msg)
    thread_bot.start()