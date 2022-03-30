var projectListObject = [
    {
      name:'Javasript One'
    },
    {
      name:'Javascript Two'
    }
  ];
   
  function showProject(ListId) {
     
  
  projectListObject.forEach(function(value,index){
    console.log(value);
    var template ='<div class="project-card">'+ value.name +
    ' <ul>'+
        ' <li>Task One</li>'+
         '<li>Task Two</li>'+
    ' </ul>'+
  '</div>';
   
  //document.getElementById('projectlist').innerHTML = document.getElementById('projectlist').innerHTML + template;
    document.getElementById(ListId).innerHTML += template;
   
  });
   
  } 
   
   function  toggleMenu() {
     var toggleVar = document.getElementsByClassName('Menu-bar')[0];
  
      if( toggleVar.style.display=='none'){
        toggleVar.style.display='';
      }else{
        toggleVar.style.display='none';
      }
   }
  
   function removeCard(){
    document.getElementById('projectlist').innerHTML = '';
   }
    
  var idName = 1;
   function addBoard(id){
     idName++;
     var ListId = 'projectlist_'+ idName;
     var boardID = 'board_'+ idName;
    var templateBlock = '<section class="board-block" id='+boardID+'>'+
    '<div>'+id.value+'<button class="btn" onclick="removeCard()">Remove card</button></div>'+
    '<div class="project-block" id='+ListId+'>'+    
    '</div>'+
    '</section>';
    document.getElementById('boardblocklist').innerHTML += templateBlock ;
    showProject(ListId)
    document.getElementById('menuList').innerHTML += '<li onclick = "loadMenu('+boardID+')">'+id.value +'</li>';
   }
   function loadMenu(element) {
     console.log(element.id);
     document.getElementById(element.id).style.display = 'block';
   }