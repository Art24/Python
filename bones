import random
switch=int(input("Выберите режим игры:С компьютером = 1,с другом = 2\n"))
if switch==1:
    balance=1000
    balancepc=1000
    while balance!=0 or balancepc!=0:
        print(balance," - Ваш баланс",balancepc," - Баланс компьютера")
        betpl=int(input("Ставьте ставку - "))
        if betpl>balance:
               print("Недостаточно средств")
               continue;
        setp=int(input("Предскажите число которое выпадет - "))
        setk=random.randint(2,12)
        r1=random.randint(1,6)
        r2=random.randint(1,6)
        if setp==r1+r2:
            balance=balance+betpl*5
            print("Вы просто везунчик,Ваш баланс равен - ",balance)
        if setp!=r1+r2:
            balance=balance-betpl
            print("Вы проиграли,Ваш баланс равен - ",balance)
        if setk==r1+r2:
            balancepc=balance+betpl*5
            print("Компьютр выйграл,его баланс - ",balancepc)
        if setk!=r1+r2:
            balancepc=balancepc-betpl
            print("Компьютер проиграл,его баланс - ",balancepc)
        if balancepc==0:
            print("Вы выйграли")
        if balance==0:
            print("Вы проиграли")
if switch==2:
    player1=str(input("Игрок 1,Представьтесь"))
    player2=str(input("Игрок 2,Представьтесь"))
    balancep1=1000
    balancep2=1000
    while balancep1!=0 or balancep2!=0
        print()
