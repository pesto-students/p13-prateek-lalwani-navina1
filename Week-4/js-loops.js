function drawTriangle(size) {
    for (let i = 1; i <= size; i++){
        let line = "";
        for (let j = 1; j <= i; j++){
            line = line + "*";
        }
        console.log(line)
    }
}

drawTriangle(4)