const themBtn = document.getElementById('them-btn')
const colors = ['#00cec9','#e84393','#1B1464','#a55eea','#fa8231','#20bf6b','#F4F7FF']
var index = 0
themBtn.addEventListener('click',function(){
    document.body.style.background = colors[index]
    index = (index + 1) % colors.length
})
//date set
const date = new Date()
const curDate = date.toDateString()
document.getElementById('set-date').innerText=curDate
//6btn
const completedButton = document.querySelectorAll('#completed-btn');
for (i = 0; i < completedButton.length; i++){
    const completeBtn = completedButton[i]
    completeBtn.addEventListener('click',function(event){
        alert('Board Updated Successfully')
        const addOrSubtract =1
        const taskNum = parseInt(document.getElementById('task-num').innerText);
        const navNum =parseInt(document.getElementById('nav-num').innerText);
        const newTaskNum=taskNum - addOrSubtract;
        const newNavNum = navNum + addOrSubtract;
        document.getElementById('task-num').innerText=newTaskNum;
        document.getElementById('nav-num').innerText=newNavNum;
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minute = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const amPm= hours >= 12 ? 'PM':'AM';
        const time =`${hours}:${minute}:${seconds} ${amPm}`
        const historyContainer = document.getElementById('history-container')
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]','py-3','px-2','rounded-[8px]','mt-[28px]','h-div')

        if(completeBtn.classList.contains('btn-n-one')){
            div.innerHTML =`
        <p>You have Completed The Task Fix Mobile Button Issue At ${time}</p>
        `
        }else if(completeBtn.classList.contains('btn-n-two')){
            div.innerHTML =`
        <p>You have Completed The Task Add Dark Mode At ${time}</p>
        `
        }else if(completeBtn.classList.contains('btn-n-three')){
            div.innerHTML =`
        <p>You have Completed The Task Optimize  Home page At ${time}</p>
        `
        }else if (completeBtn.classList.contains('btn-n-four')){
            div.innerHTML =`
        <p>You have Completed The Task Add new emoji 🤲 At ${time}</p>
        `
        }else if (completeBtn.classList.contains('btn-n-five')){
            div.innerHTML =`
        <p>You have Completed The Task Integrate OpenAI API At ${time}</p>
        `
        }else if (completeBtn.classList.contains('btn-n-six')){
            div.innerHTML =`
        <p>You have Completed The Task Improve Job searching At ${time}</p>
        `
        }
        
        historyContainer.appendChild(div)
        completeBtn.disabled = true;
        completeBtn.classList.remove('cursor-pointer')
        completeBtn.classList.add('bg-gray-300','text-gray-500')   
    })
}
const clearHistoryBtn=document.getElementById('clear-history-btn')
clearHistoryBtn.addEventListener('click',function(){
    const hDiv =document.querySelectorAll('.h-div');
    hDiv.forEach(function(div){
        div.style.display = 'none'
    }) 
})
const discoverDiv =document.getElementById('discover-div')
discoverDiv.addEventListener('click',function(){
    window.location.href = 'blog.html'
})

