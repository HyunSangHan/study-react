def check(raws):
    checked = []
    for num in range(0, 100):
        checked.append(0)
    for num in range(0, 100):
        for raw in raws:
            if raw == num:
                checked[num] += 1
    most = max(checked)
    for num in range(0, 100):
        if checked[num] == most:
            most_num = num                   
    return most_num

all_cases = int(input())

for i in range(all_cases):
#Initialize..
    scores = []
    tmp = []
#input...
    test_case = int(input())
    tmp.extend(input().split())    
    for a in range(len(tmp)):   # for change str to int
        scores.append(int(tmp[a]))
#output..
    print("#{} {}".format(test_case, check(scores)))