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
        div.classList.add('bg-[#F4F7FF]','py-3','px-2','rounded-[8px]','mt-[28px]')
        div.innerHTML =`
        <p>You have Completed The Task Fix Mobile Button Issue At ${time}</p>
        `
        historyContainer.appendChild(div)
        completeBtn.disabled = true;
        completeBtn.classList.add('bg-gray-300','text-gray-500')
 
    })
}
const clearHistoryBtn=document.getElementById('clear-history-btn')
clearHistoryBtn.addEventListener('click',function(){
    const historyContainer = document.getElementById('history-container')
    
    
})