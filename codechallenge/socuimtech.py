def printpair(arr,target):
    r=set()
    for num in arr:
        temp=target-num
        if temp in r:
            return (num,temp)
        r.add(num)
    return None
print(printpair([0, -1, 2, -3, 1],-2))
def sum_seris_num(arr):
    output=[]
    old = None
    for num in arr:
        if num == old:
            output[len(output)-1]+=num
        else:
            output.append(num)
            old= num
    return output
print(sum_seris_num([1,1,1,3,4,5,5,5,1,1]))
def changepoint(arr):
    output=[]
    sort_type=None
    if arr[0]>arr[1]:
        sort_type='dec'
    else:
        sort_type='inc'
    for i in range(1,len(arr)-1):
        if sort_type=='inc':
            if arr[i]>arr[i+1]:
                sort_type='dec'
                output.append(arr[i])
        else:
            if arr[i]<arr[i+1]:
                sort_type='inc'
                output.append(arr[i])
    return output
print(changepoint([1,2,3,6,5,4,3,2,10,11,12,11,10,3,5,6,1,2]))
def indexsum(arr,sum):
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i]+arr[j]==sum:
                return (i,j)
    return None
print(indexsum([3,2,4],7))
def permutation(arr):
    output=[]
    for i in range(len(arr)):
        output.append(arr[arr[i]])
    return output
print(permutation([0,2,1,5,3,4]))
def accArray(arr):
    accu=0
    output=[]
    for num in arr:
        accu+=num
        output.append(accu)
    return output
print(accArray([1,2,3,4]))
def good_pairs(arr):
    counter=0
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i]==arr[j]:
                counter+=1
    return counter
print(good_pairs([1,2,3,1,1,3]))
def smallerNum(arr):
    output=[]
    counter=0
    for i in range(len(arr)):
        counter=0
        for j in range(len(arr)):
            if arr[i]>arr[j]:
                counter+=1
        output.append(counter)
    return output
print(smallerNum([8,1,2,2,3]))
def shuffle_array(s,indices):
    output=['a']*len(indices)
    for i in range(len(indices)):
        output[indices[i]]=s[i]
    return ''.join(output)
print(shuffle_array("codeleet",[4,5,6,7,0,2,1,3]))
def missingNum(arr):
    arr_total=sum(arr)
    acu_total=((len(arr)+1)*(len(arr)+2)/2)
    return int(acu_total-arr_total)
print(missingNum([1,2,3,4,6,7,8,9]))
def elsemax(arr):
    max=arr[0]
    for num in arr:
        if num > max:
            max=num
    for i in range(len(arr)):
        if arr[i]==max:
            arr=arr[:i]+arr[i+1:]
    return arr
def elsemax(arr):
    max=arr[0]
    for num in arr:
        if num>max:
            max= num
    for i in range(len(arr)):
        if arr[i]==max:
            arr.pop(i)
            break
    return arr
print(elsemax([1,2,3,10,6,7,8,9]))
def findString(sentece,sring):
    for i in range(len(sentece)):
        if sentece[i:i+len(sring)]==sring:
            return True
    return False
print(findString('ahmed','hme'))
def mutual_numb(arr1,arr2):
    output=set()
    for num1 in arr1:
        for num2 in arr2:
            if num1==num2:
                output.add(num1)
    return output
print(mutual_numb([1,2,3,5,66],[5,6,2,3,5,8,10,66,9,2]))
def charcounter(words,chars):
    output={}
    for char in chars:
        counter=0
        for word in words:
            if char in word:
                counter+=1
        output[char]=counter
    return output
def charcounter(words,chars):
    output={}
    for char in chars:
        counter=0
        for word in words:
            if char in word:
                counter+=1
        output[char]=counter
    return output
print(charcounter(['wobad' , 'waord'], ['a', 'b']))
def tt(str):
    output=''
    number=0
    word=''
    save=False
    for i in range(len(str)):
        if str[i]==']':
            save=False
            output+=word*number
            word=''
        if save:
            word+=str[i]
        if str[i]=='[':
            number=int(str[i-1])
            save= True
    return output
def tt(string):
    output=''
    word=''
    save=False
    number=0
    for i in range(len(string)):
        if string[i]==']':
            output+=word*number
            save=False
            word=''
        if save:
            word+=string[i]
        if string[i]=='[':
            number=int(string[i-1])
            save=True
    return output
print(tt('2[a]3[bc]'))
def findPrimary(num):
    output=[]
    if num>1:
        for i in range(1,num):
            if num%i==0:
                output.append(i)
    else:
        return [num]
    return output
print(findPrimary(16))