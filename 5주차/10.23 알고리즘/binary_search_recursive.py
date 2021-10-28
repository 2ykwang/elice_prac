
# 이진탐색 (재귀)
def binary_search_recursive(nums, num):
    def recur(nums, num, l, r):
        # 
        if l > r:
            return l
            
        mid = (l + r) //2
        
        if nums[mid] < num:
            return recur(nums, num, mid +1, r)
        else:
            return recur(nums, num, l, mid -1)
    return recur(nums, num, 0, len(nums) - 1)
    
# 이진탐색
def binary_search(nums, num):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] < num:
            left = mid + 1
        else:
            right = mid - 1
            
    return left
    
    



# 4가 출력되어야 합니다.
print(binary_search([1, 2, 4, 6], 7))

# 1이 출력되어야 합니다.
print(binary_search([1, 3, 5, 6], 2))

# 0이 출력되어야 합니다.
print(binary_search([1, 5, 7, 9], 0))