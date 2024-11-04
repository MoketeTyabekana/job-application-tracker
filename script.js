

// Accessing the form

document.addEventListener("DOMContentLoaded", ()=>{

const jobForm=document.getElementById('jobForm');
const applicationsTable=document.getElementById('applicationsTable').getElementsByTagName('bbody')[0];

jobForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    addJobApplication();
    jobForm.reset();
});

function addJobApplication(){

  const company =document.getElementById('company');
  const title =document.getElementById('title');
  const date =document.getElementById('date');
  const status =document.getElementById('status');

  const row =applicationsTable.insertRow();

}



});