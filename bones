        import random
        #Выбор меню
        while True:
            switch=int(input("Выберите режим игры:С компьютером = 1,с другом = 2\n"))
            if switch==1:
                #Инициализация баланса
                balance=1000
                balancepc=1000
                #Начало цикла
                while balance!=0 or balancepc!=0:
                    print(balance," - Ваш баланс",balancepc," - Баланс компьютера")
                    #Ставка
                    betpl=int(input("Ставьте ставку - "))
                    #Проверка Ставки
                    if betpl>balance:
                           print("Недостаточно средств")
                           continue;
                    #Предсказывание числа 
                    setp=int(input("Предскажите число которое выпадет - "))
                    #Предсказывание числа компом
                    setk=random.randint(2,12)
                    #Генерация "Костей"
                    r1=random.randint(1,6)
                    r2=random.randint(1,6)
                    # "Кто выйграл ,а кто проиграл"
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
                    #"Поздравляющее" окно
                    if balancepc==0:
                        print("Вы выйграли")
                    if balance==0:
                        print("Вы проиграли")
            if switch==2:
                #Раздаю имена 
                player1=str(input("Игрок 1,Представьтесь - "))
                player2=str(input("Игрок 2,Представьтесь - "))
                balancep1=1000
                balancep2=1000
                #Начало цикла
                while balancep1!=0 or balancep2!=0:
                    #Ставка
                    betpl1=int(input(player1+"  Введите вашу ставку - "))
                    betpl2=int(input(player2+"  Введите вашу ставку - "))
                    #Проверка ставки
                    if betpl1>balancep1 or betpl2>balancep2:
                        print("Ошибка недостаточно средств\n")
                        continue;
                    #Предсказание числа
                    setp1=int(input(player1+" Предскажите число которое выпадет - "))
                    setp2=int(input(player2+" Предскажите число которое выпадет - "))
                    #Генерация "Костей"
                    r1=random.randint(1,6)
                    r2=random.randint(1,6)
                    #"Кто победил ,а кто проиграл"
                    if setp1==r1+r2:
                        balancep1=balancep1+betp11*5
                        print(player1+" Вы выйграли,Ваш баланс = ",balancep1)
                    if setp2==r1+r2:
                        balancep2=balancep2+betpl2*5
                        print(player2+" Вы выйгради,Ваш баланс = ",balancep2)
                    if setp1!=r1+r2:
                        balancep1-=betpl1
                        print(player1+" Вы проиграли,Ваш баланс = ",balancep1)
                    if setp2!=r1+r2:
                        balancep2-=betpl2
                        print(player2+" Вы проиграли,Ваш баланс = ",balancep2)
                        #Поздравляющее окно
                        if balancep1==0 or balancep2==0
                         print("Ничья")
                    elif balancep1==0:
                        print(player1+" Вы ВЫЙГРАЛИ\n")
                        print(player2+" Вы Проиграли\n")
                    elif balancep2==0:
                        print(player1+" Вы ВЫЙГРАЛИ\n")
                        print(player2+" Вы проиграли\n")
                    
            else:
                print("Ошибка выбора режима")
