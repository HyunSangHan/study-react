def convert(num, l):
    converted = []
    for i in range(100):
        converted.append([])
    for j in range(l):
        if j % 2 == 1:
            converted[num[j-1]].extend(num[j])
    return converted

#def result(converted):
#    global ans

#ans = -1

level, length = input().split()
nums = list(map(int, input().split())) #making list of int

#print("#{} {}".format(level, res))
#ans = -1

print(convert(nums, length)) #this is for test