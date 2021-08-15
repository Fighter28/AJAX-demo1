getCSS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','style.css')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const style=document.createElement('style')
                style.innerHTML=request.response
                document.head.appendChild(style)
            }else{
                alert('请求CSS失败')
            }
        }
    }
    request.send()
}
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','2.js')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const script=document.createElement('script')
                script.innerHTML=request.response
                document.body.appendChild(script)
            }else{
                alert('请求JS失败')
            }
        }
    }
    request.send()
}
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','3.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const div=document.createElement('div')
                div.innerHTML=request.response
                document.body.appendChild(div)
            }else{
                alert('请求HTML失败')
            }
        }
    }
    request.send()
}
getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
               const dom=request.responseXML
               const text=dom.getElementsByTagName('warning')[0].textContent
               console.log(text.trim())
            }else{
                alert('请求XML失败')
            }
        }
    }
    request.send()
}
getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
              const object=JSON.parse(request.response)
              ZZZ.textContent=object.name
            }else{
                alert('请求JSON失败')
            }
        }
    }
    request.send()
}
let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`dbc/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
             const array=JSON.parse(request.response)
             array.forEach(item=>{
                 const li=document.createElement('li')
                 li.textContent=item.id;
                 xxx.appendChild(li);
             })
             n += 1
            }
        }
    }
    request.send()
}