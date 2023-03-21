var N = prompt('Nhap gia tri N')
{
    var flag = true;
    if (N < 2){
        flag = false;
    }
    else if (N == 2){
        flag = true;
    }
    else if (N % 2 == 0){
        flag = false;
    }
    else if (N > 10){
        flag = false;
    }
    else{
        for (var i = 3; i < N-1; i+=2)
        {
            if (N % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        for(i=0;i<N;i++) {
            for(j=0;j<=i;j++) {
                document.writeln(" * ")
            }
            document.writeln("<br/>")}
    }
    else{
        document.write(N + " Không phù hợp<br/>");
    }
    }
	