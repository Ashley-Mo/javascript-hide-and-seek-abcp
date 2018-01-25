function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
   return document.querySelector('#grand-node div div div div');
}


function increaseRankBy(n){
//var rankedLists=document.querySelectorAll('.ranked-list');
var lists=document.querySelectorAll('.ranked-list');
// var firstList = rankedLists[0];
// var secondList = rankedLists[1];

for (var i = 0, l = lists.length; i < l; i++) {
        document.querySelector(lists[i]).innerHTML=parseInt(children[i].innerHTML)+n;
      }

      var children = firstList.children;
      
      // for (var i = 0, l = children.length; i < l; i++) {
      //   document.querySelector(children[i]).innerHTML=parseInt(children[i].innerHTML)+n;
      // }

      // var children2 = secondList.children;
    

      // for (var j = 0, l1 = children2.length; j < l1; j++) {
      //   document.querySelector(children2[j]).innerHTML=parseInt(children2[j].innerHTML)+n;
      // }
}


