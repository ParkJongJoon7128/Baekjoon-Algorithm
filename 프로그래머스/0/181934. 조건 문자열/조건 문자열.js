function solution(ineq, eq, n, m) {
    switch(ineq){
        case "<":
            if(eq === "="){
                if(n <= m){
                    return 1;
                } else {
                    return 0;
                }
            } else {
                if(n < m){
                    return 1;
                } else{
                    return 0;
                }
            }
        case ">":
            if(eq === "="){
                if(n >= m){
                    return 1;
                } else {
                    return 0;
                }
            } else{
                if(n > m){
                    return 1;
                } else {
                    return 0;
                }
            }
            
    }
}