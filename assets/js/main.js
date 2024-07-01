var siteNameInput = document.getElementById('sn');
var siteURLInput = document.getElementById('su');
var allSites=[];
var btnStatus = 'Submit';
var proId ;


if(localStorage.getItem('allSites') != null){
    allSites = JSON.parse(localStorage.getItem('allSites')) 
dispalySites();

} 

function addNewSite(){
   
    var site={
        name: siteNameInput.value,
        url: siteURLInput.value,
    }
    if(btnStatus === 'Submit'){
        allSites.push(site);
        
    }else{
        allSites[proId] = site;
        btnStatus = 'Submit';
        document.getElementById('sub').innerHTML='Submit';

    }
    
    localStorage.setItem('allSites',JSON.stringify(allSites))
    
    
    
    clearInputs();
    dispalySites();
 
}
function clearInputs(){
    siteNameInput.value = "";
    siteURLInput.value = "";
}

function dispalySites(){
    var box = ""; 
    for(var i= 0; i < allSites.length; i++){
        box +=  `<tr>
        <td> ${i}</td>
        <td>${allSites[i].name}</td>
        <td><a href="${allSites[i].url}"><button  class=" btn btn-info">visit</button></a></td>
        <td><button onclick="deleteElement(${i})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="updateElement(${i})" class="btn btn-warning">Update</button></td>
    </tr> ` 

    }

    document.getElementById('tbody').innerHTML = box;
}
function deleteElement(idx){
    allSites.splice(idx,1);
    localStorage.setItem('allSites',JSON.stringify(allSites))
    dispalySites();
}
function updateElement(idx){
    siteNameInput.value = allSites[idx].name;
    siteURLInput.value = allSites[idx].url;
    document.getElementById('sub').innerHTML='Update';
     btnStatus = 'Update';
     proId = idx;
     
}


function searchElement(term){
    var cartona = "";    
    for(var i =0; i<allSites.length; i++){
       
       
        // check name includes user input 
        if(allSites[i].name.toLowerCase().includes(term.toLowerCase() ) == true)
        
        cartona += `<tr>
        <td> ${i}</td>
        <td>${allSites[i].name}</td>
        <td><a href="${allSites[i].url}"><button  class=" btn btn-info">visit</button></a></td>
        <td><button onclick="deleteElement(${i})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="updateElement(${i})" class="btn btn-warning">Update</button></td>
    </tr> ` 

    }
    document.getElementById('tbody').innerHTML=cartona;
}


