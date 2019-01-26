def miro(arr, visited, m, n):
    global ans
    if(arr[m][n] == 3):
        ans = 1
        return
    if(arr[m][n] == 1 or visited[m][n] == 1):
        return
    visited[m][n] = 1
    miro(arr, visited, m+1, n)
    miro(arr, visited, m, n+1)
    miro(arr, visited, m-1, n)
    miro(arr, visited, m, n-1)
    
BYNUM = 100
ans = -1
test_cases = range(10)

for test_case in test_cases:
    t = input()
    array = []
    is_visited = []
    tmp = []
    for a in range(BYNUM):
        for b in range(BYNUM):
            tmp.append(0)
        array.append(list(map(int, input())))
        is_visited.append(tmp)

    miro(array, is_visited, 1, 1)
    print("#{} {}".format(test_case+1, ans))
    ans = -1