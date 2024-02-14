const percent = document.getElementById('percent')
const pb = document.getElementById('progress-bar')
const w = document.getElementById('wrapper')
const p = document.getElementById('propose')


setTimeout(()=>{
    var percentage = 30
      var phPercentage = 30

     percent.innerText = `${percentage}%`;


    pb.style.width = `${phPercentage}` + "%";
    percentage = percentage + 10
},500)

setTimeout(()=>{
    var percentage = 50
      var phPercentage = 50

     percent.innerText = `${percentage}%`;


    pb.style.width = `${phPercentage}` + "%";
    percentage = percentage + 10
},700)

setTimeout(()=>{
    var percentage = 70
      var phPercentage = 70

     percent.innerText = `${percentage}%`;


    pb.style.width = `${phPercentage}` + "%";
    percentage = percentage + 10
},900)


setTimeout(()=>{
    var percentage = 100
      var phPercentage = 100

     percent.innerText = `${percentage}%`;


    pb.style.width = `${phPercentage}` + "%";
    percentage = percentage + 10
    

},1500)


setTimeout(()=>{
    w.style.display = "none"
    p.style.display = "flex"
},2000)