def isPrime(n){
    divisor = 2;
    
    if (n == 1) {
        return false;
    }
    while (n > divisor) {
        if (n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}

print(is_prime(3))
print(is_prime(3))