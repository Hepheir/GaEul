#!/usr/bin/python
import random
import re

# used pre-defined list of natural numbers from 0 - 9 to avoid number overlapping
n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

card = [0, 0, 0, 0]

# this loop will tell you how many numbers are rest
for i in range(0, 4):
    r = random.randint(0, 9-i)
    card[i] = str(n[r])
    del n[r]

print('\n\n [?][?][?][?] <0~9>')
# so, now the card is ready! (aware that card is a list)

# time to get numbers from users!
def checkValid():
    ui = input('\n ')
    if ui == 'quit' or ui == 'exit':
        return '0'
    if len(ui) != 4 or not re.match("[0-9]{4}", ui):
        return '1'
    for i in range(3):
        for j in range(i+1, 4):
            if ui[i] == ui[j]:
                return '1'
    return ui

card_backup = list(card)
nth_try = 1
ordinal = 'st'
while 1:
    card = list(card_backup)
    user_input = list(checkValid())
    s = 0
    b = 0

    # user is quitting the game
    if user_input == ['0']:
        print(">>> you've just quitted your game.")
        break
    elif user_input == ['1']:
        print('>>invalid input')
    else:
        if card == user_input:
            print('\n>>> 4 Strikes!!! (%d%s try)' %(nth_try, ordinal))
            print(' End of the game.')
            input('press return to exit.')
            break

        for i in range(3, -1, -1):
            if card[i] == user_input[i]:
                del card[i]
                del user_input[i]
                s += 1
                i -= 1

        for i in range(0, len(card)):
            for j in range(0, len(card)):
                if card[i] == user_input[j]:
                    b += 1

        print('>>> %d Strikes and %d Balls! (%d%s try)' %(s, b, nth_try, ordinal))
        nth_try += 1
        if nth_try == 2:
            ordinal = 'nd'
        elif nth_try == 3:
            ordinal = 'rd'
        else:
            ordinal = 'th'

# equals to system.('pause');
# input()
