const buttons = document.querySelectorAll("button");

const result = document.querySelector("#result");

//入力のたびに数字を増やしていく箱を用意（何も書かれていないもの）
let addtext = "";

//ボタンが押されたときの処理を考える
const buttonpressed = (event)=> {

    const text = event.target.textContent;

    if(text === "="){
        addtext = eval(addtext); //＝を押したときにevalで計算（した結果をaddtextに書く）
    }else if(text === "C"){
        addtext = "" //Cをおしたらaddtextの中身を""にする（つまり消す）
    }else{
        addtext = addtext + text; //それ以外の場合はテキストを書き連ねていく（入力するたびに書き連ねた結果に書き換えする）
    }
    result.textContent = addtext //resultにはaddtextの中身を記入する
}

//上記で設定した関数を、すべてのbuttonに割り当てる必要がある。でも長いので、これを一行でやってる。
//スラッシュリーディング：buttonsに含まれる各要素すべてについて　buttonに対して右を実行してくれ　ボタンのクリックをしたとき、buttonpressedを実行する
buttons.forEach(button => button.addEventListener("click", buttonpressed));