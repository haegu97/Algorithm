function solution(w, h) {
    if(w <= h){
        let num = 0
        for(let i = 1; i <= w; i++){
            if(w % i == 0 && h % i == 0){
                num = i
            }
        }
        return (w * h) - ((w / num) + (h / num) - 1) * num
        
    }
    else{
        for(let i = 1; i <= h; i++){
            if(w % i == 0 && h % i == 0){
                num = i
            }
        }
        return (w * h) - ((w / num) + (h / num) - 1) * num
    }
}