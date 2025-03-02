function solution(n) {
    const dp = [1, 1, 2]
    
    for(let i = 3; i <= n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567 
    }
    
    return dp[n]
}