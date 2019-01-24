def convert_list(series):
    res = []
    for c in range(15): #need to be editted... I want it is 15!
        for r in range(5):
            try:
                res.extend(series[r][c])
            except:
                pass
    return res

test_case_num = int(input())

for n in range(test_case_num):
    row = []
    for i in range(5):
        str_row = input()
        tmp = list(str_row)
        row.append(tmp)

    print('#{} {}'.format(n+1, ''.join(convert_list(row))))