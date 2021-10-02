# 반복문 풀이
def factorial(num):
    result = 1
    for i in range(2,num+1):
        result*=i
        print(i)
    return result

# 재귀호출 풀이
def factorial_recu(num):
    if num < 2:
        return num
    return num*factorial_recu(num-1)

def main():
    print(factorial(5)) # should return 120
    print(factorial_recu(5)) # should return 120

if __name__ == "__main__":
    main()