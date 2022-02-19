const nowtime=2022;

// document.getElementById("result").textContent="あなたの誕生西暦は"+1+"、和暦は"+1+"です";

document.getElementById("diagnose").addEventListener('mouseout', () => {
    document.getElementById("diagnose").className="diagnose1";
});

document.getElementById("diagnose").addEventListener('mouseover', () => {
    document.getElementById("diagnose").className="diagnose2";
});

document.getElementById("diagnose").onclick = function() {
    let Year= nowtime-document.getElementById("age").value;
    if(Year > 2018){
        var jacanumber = 2018;
        var jacaname = "令和"
    }else if(Year > 1988){
        var jacanumber = 1988;
        var jacaname = "平成"
    }else if(Year > 1925){
        var jacanumber = 1925;
        var jacaname = "昭和"
    }else if(Year > 1911){
        var jacanumber = 1911;
        var jacaname = "大正";
    }
    let jaca = Year-jacanumber;
    
        if(document.getElementById("age").value==""){
            alert("年齢が入力されていないかデータ型が無効です")
        }else{
            if(document.getElementById("age").value <= 0){
                alert("入力値が無効です\n1才以上で設定してください")
            }else{
                
                if(document.getElementById("name").value==""){
                let result1 = confirm(document.getElementById("age").value+'才でよろしいですか？');
                    if (result1) {
                        document.getElementById("result").style.visibility="visible";
                        document.getElementById("result").textContent="あなたの誕生西暦は"+Year+"年、和暦は"+jacaname+""+jaca+"年です";
                    } else {}
                        }else{
                            let result2 = confirm(document.getElementById("name").value+"さんの年齢は"+document.getElementById("age").value+"才でよろしいですか？");
                            if (result2) {
                                document.getElementById("result").style.visibility="visible";
                                document.getElementById("result").textContent=document.getElementById("name").value+"さんの誕生西暦は"+Year+"年、和暦は"+jacaname+""+jaca+"年です";
                            } else {}
            }
            }
            
        }
        
}

