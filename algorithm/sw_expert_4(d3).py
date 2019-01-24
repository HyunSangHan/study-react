def conv(lst):
    tmp = lst
    length = len(lst)
    for i in range(length):
        for j in range(length):
            tmp[i][j] = int(lst[i][j])        
    return tmp

def res(bynum, array, m, n, sum):
    global ans
    if m == bynum or n == bynum:
        return
    sum += array[m][n]
    if m == bynum-1 and n == bynum-1:
        if ans > sum:
            ans = sum
        return
    res(bynum, array, m+1, n, sum)
    res(bynum, array, m, n+1, sum)

T = int(input())
ans = 100000

for t in range(T):
    by = int(input())
    str_arr = []
    for a in range(by):
        str_arr.append(input().split())
    arr = conv(str_arr)

    res(by, arr, 0, 0, 0)

    print("#{} {}".format(t+1, ans))
    ans = 100000