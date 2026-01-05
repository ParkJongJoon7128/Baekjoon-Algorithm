function solution(a, b) {
    const n1 = String(a) + String(b);
    const n2 = String(b) + String(a);
    
    if(n1 > n2) {
        return Number(n1);
    } else if(n1 === n2){
        return Number(n1);
    } else {
        return Number(n2);
    }
}