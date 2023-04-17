var v=1

v=2
console.log('v : ' ,v)

const c = 1

// c = 1
// console.log('c : ',c)

//값을 재할당한다는 것은 변수에 이미 할당된 값을 변경하는 것을 의미함
//즉 변수가 가리키고 있는 메모리 주소에 새로운 값을 할당하는 것을 의미
var p1 = 1
var p2 = 1
console.log(p1==p2) // ==> true
console.log(p1===p2) // ==> true

//원시 타입의 값에는 실제 메모리에 값(여기서는 1)이 저장되고 서로 같은 메모리 주소 참조하지 않음 

var obj1={a:1}
var obj2=obj1
console.log(obj1==obj2) // ==> true
console.log(obj1===obj2) // ==> true

//참조타입은 변수가 참조하는 메모리 주소는 실제 값이 저장된 다른 메모리 주소 가르킴
//그러나 obj1과 obj2는 같은 주소를 참조

var obj3={a:2}
var obj4={a:2}
console.log(obj3==obj4) // ==> false
console.log(obj3===obj4) // ==> false

var o1={name:'kim'}
var o2=Object.assign({},o1) //깊은복사,o1값을 객체형태로 복사
console.log(o1===o2) // ==> false

