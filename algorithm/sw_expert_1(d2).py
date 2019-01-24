length = [] # 1
str_num = [] # 2
num = [] # 3
total_score = [] # Final

for m in range(10):
    length.append(int(input())) # 1
    str_num.append(input().split()) # 2
    num.append([]) # 3
    total_score.append(0) # Final

    def check(m, n):
        tmp = [num[m][n-2], num[m][n-1], num[m][n+1], num[m][n+2]]
        if num[m][n] > max(tmp):
            num_ok = num[m][n] - max(tmp)
        else:
            num_ok = 0
        return num_ok
    
    for i in range(length[m]): # for change str to int
        num[m].append(int(str_num[m][i]))

    for i in range(2, length[m] - 2):
        total_score[m] += check(m, i)

    print("#{} {}".format(m+1, total_score[m]))