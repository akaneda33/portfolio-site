//textanimationクラスに入っている文字列を一文字ずつfor分で回してspanタグをかける実装。
//documentはhtml全体のこと。querySelectorAllはcssのセレクタを使ってhtmlを配列で取得する関数。
const animationTargetElements = document.querySelectorAll(".textAnimation");
//animationTargetElements.lengthはアニメーションをかける行数。２行あったら２。まあ今回デザインの都合上今回は一行しか書いてませんが。
for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement = animationTargetElements[i],
  //以下、中の文字列に対する実装。要素tagertelement(一行分)に対して文字を取得したい場合はtextContent関数を実行。
        texts=targetElement.textContent,
        //配列でまとめて後で一気に取得するために、あらかじめテキストの空の配列を用意する。
        textsArray = [];
        //文字列を一旦消した後にspanタグで囲った文字以下のfor分で入れる。
  targetElement.textContent = "";  
//上は行に対対してfor分を回していたけど次は中の文字列に対してfor文を回す。lengthで文字列分回す。
  for (let j = 0; j < texts.split("").length; j++) {
    //textsを配列にする。splitは（）の中で指定した文字で区切って配列にする。今回""で指定することで無条件で全て配列にすることが可能。
    const t = texts.split("")[j];
    //空白の文字列があったら、textArrayにpushするものはspanタグで囲ったものではなく、" " 空白を返す。
    if (t === " ") {
      //先に作った空の配列texstArrayにpushする。
      textsArray.push(" ");
    } else {
//空の配列に入れる時にポイントとなるのが、入れる際にspanタグで囲むという点。
    }
    //spanタグで囲った一文字に対してanimaton-delayをかけ、j * .1～を施すことで、後発の文字ほど時間をかえて登場させる。
    //spanを二重構造にさせる
    textsArray.push('<span><span style="animation-delay: ' + ((j * .1) + .3) + 's;">' + t + '</span></span>')
  }
  //textsArray分for文を回す。spanタグを含むのでinnerhtmlで追加する。k++とすることで、spanタグで囲まれた一文字が一文字ずつ追加される。
  for (let k = 0; k < textsArray.length; k++) {
    targetElement.innerHTML += textsArray[k];
  }      
}


//animationTargetという属性が付いたものを全部取得し、スクロールするたびに以下のfor文が走る
const targetElement = document.querySelectorAll(".animationTarget");
console.log(targetElement);
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    //上からの」距離を取得
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight *
    .6
    /*innerHeightで現在のブラウザの高さを取得*/ 
    if (window.innerHeight > getElementDistance) {
      //スクロールしていって、i番目のli要素が見えたらshowさせる
      targetElement[i].classList.add("show");
    }
  }
})
