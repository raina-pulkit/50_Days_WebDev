for _ in range(int(input())):
    n = int(input())
    
    a = list(map(int, input().split()))
    cola = list(map(int, input().split()))
    b = list(map(int, input().split()))
    colb = list(map(int, input().split()))
    
    flag = True
    for i in range(len(a)-1):
        if(a[i] <= a[i+1]):
            continue
        
        minChoice = -1
        for j in range(len(b)):
            if(cola[i] == colb[j] and b[j] <= a[i+1]):
                if b[j] < b[minChoice]:
                    minChoice = j
        if minChoice != -1:
            a[i], b[minChoice] = b[minChoice], a[i]
            continue
        
        flag = False
        print("No")
        break
        
        
    if not flag:
        continue
    print("Yes")