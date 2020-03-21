//var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
//console.log(delete ary[0]);
//console.log(ary);
//var obj = {x:1, y:2};
//console.log(delete obj.x);
//console.log(obj.x);
//var obj2 = {x:obj, y:2};
//console.log(delete obj2.x);
//console.log(obj2);
//var data1 = 1;
//console.log(delete data1);
//console.log(data1);
//data2 = 2;
//console.log(delete data2);
//console.log(data2);
//配列の削除は後ろの要素が繰り上がらない。宣言した変数は消せない。プロパティは消せるが、プロパティが参照するオブジェクトは削除できない。

//var x = 15;
//if (x >= 10) {
//	console.log('変数は10以上です。');
//}
//elseは省略することもできる

//var x = 20;
//if (x >= 10){
//	if(x >= 20){
//		console.log('変数xは20以上です。');
//		}else {
//			console.log('変数xは10以上20未満です');
//		}
//}else {
//	console.log('変数は10未満です');
//}
//if文の中にネストすることで条件分岐を増やせる。


/*var rank = 'B';
switch(rank){
	case'A':
	console.log('Aランクです');
	break;
	case'B':
	console.log('Bランクです');
	break;
	case'C':
	break;
	default :
	console.log('ランク外です');
	break;
}
case文の最後にはbreakで処理を抜けること*/

/*var rank ='B';
switch(rank) {
	case'A':
	case'B':
	case'C':
		console.log('合格');
		break;
		case'D':
		console.log('不合格');
}
breakを記述しないケースのswitch文*/


/*var x = 10;
while(x < 10) {
	console.log('xの値は' + x);
	x++
}
//while内の条件がtrueの時のみ繰り返し実行され続ける。

var x = 11;
do {
	console.log('xの値は' + x);
	x++
}
while (x < 10);
do文ではfalseの場合でもループ処理が一回実行される*/

/*for (var x = 8; x < 10; x++){
	console.log('xの値は' + x );
}

var data = { apple:150, orange:100, banana:120};
for (var key in data){
	console.log(key + '=' + data[key]);
}
オブジェクトを繰り返す*/

var data =[ 'apple', 'orange', 'banana'];
Array.prototype.hoge = function(){}
for (var value of data){
	console.log(value);
}

var result = 0;
for (var i = 1; i <= 100; i++){
	result += i;
	if (result > 1000){break;}
}
console.log('合計値が1000を超えるのは' + i);

var result = 0;
for (var i = 1; i < 100; i++){
	if(i % 2 === 0){ continue; }
	result += i;
}
console.log('合計;' + result);


var i = 1;
try{
	i = i * j;
}catch(e){
	console.log(e.message);
	// 例外の有無にかかわらず、最終的に処理される
}finally{
	console.log('処理は完了しました。');
}
// 例外を処理し、スクリプトを停止させない

var x = 1;
var y = 0;
try{
	if(y === 0){throw new Error('0で割ろうとしました。');}
	var z = x / y;
}catch(e){
	console.log(e.message);
}
// エラ〜メッセーを表示させる




































