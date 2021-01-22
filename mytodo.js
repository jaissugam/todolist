new Vue({
    el:'#todo',
    data:{
        todos:[],
        availabetodo:false
    },
    methods:{
        addtodo:function(){
            newtodo=document.getElementById("newtodo").value;
            if(newtodo.length!=0)
            {
            this.todos.push(newtodo);
            this.availabletodo=true;
            newtodo='';
            }
            else{
                window.alert('There is no to-do to add!');
            }
        }
    }
});
function clearThis(target) 
{
    target.value= "";
}
function done(newtarget)
{
    newtarget.classList.toggle("done");
}
