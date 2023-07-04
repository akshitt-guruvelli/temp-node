const { readFile, writeFile } = require('fs')

readFile('./content/subfolder/firstText.txt', 'utf-8', (err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        const first = result;
        readFile('./content/subfolder/secondText.txt', 'utf-8', (err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                const second = result;
                writeFile('./content/resultText.txt', `Here is the result : ${first}, ${second}`, (err, result)=>{
                    if(err){
                        console.log(err);
                    }
                })
            }
        })
    }
})
