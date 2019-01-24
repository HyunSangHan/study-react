def res(by, arr, m, n, base, added, tmp):
    #for stop
    if m==by or n==by:
        return
    #for base
    base += 1 
    #for added
    if arr[m][n] > tmp: 
        added += arr[m][n] - tmp
    tmp = arr[m][n]
    #for checking ans
    global ans
    real = base + added
    if m==by-1 and n==by-1:
        if ans > real:
            ans = real
        return
    #for search
    res(by, arr, m+1, n, base, added, tmp)
    res(by, arr, m, n+1, base, added, tmp)
    
T = int(input())
ans = 100000
tmp = 0

for t in range(T):
    bynum = int(input())
    #make array(str)
    array = []
    for i in range(bynum):
        array.append(input().split())
    #convert array str to int
    for i in range(bynum):
        for j in range(bynum):
            array[i][j] = int(array[i][j])
    #start using function
    res(bynum, array, 0, 0, -1, 0, 0)
    #print
    print("#{} {}".format(t+1, ans))    
    ans = 100000
    tmp = 0