# 재귀 
class Fib():  
    def fibonacci(self, num):
        if num<2:
            return num
        return self.fibonacci(num-1) + self.fibonacci(num-2)

# 메모이제이션
class FibMemoization():
    def fibonacci(self, num): 
        cache = [0,1]`
        if num<2:
            return cache[num] 
        for i in range(2,num+1): 
            cache.append(cache[i-1] + cache[i-2]) 
        return cache[num]

# 반복문 풀이
class FibLoop:
    def fibonacci(self, num):
        val, next = 0,1
        for i in range(num): 
            val,next = next,val+next
        return val
    
def main():
    f = Fib()
    fm = FibMemoization()
    fl = FibLoop()
    
    print(f.fibonacci(10)) # should return 55 
    print(fm.fibonacci(10)) # should return 55 
    print(fl.fibonacci(10)) # should return 55

if __name__ == "__main__":
    main()