//  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=videos&key=[YOUR_API_KEY] 

const DefaultShow = async () => {

    try {

        const res = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=Popular%20videos%20in%20India&key=AIzaSyB46f1PI6mrNWt7mNQhYhvG68jQ8-BwneM");

        const data = await res.json()

        console.log(data.items)
        AppendDefault(data.items)
    }
    catch (err) {
        console.log(err)
    }
}




function AppendDefault(videos) {
    let box = document.getElementById("content")

    box.innerHTML = null;


    videos.map(({ id: { videoId }, snippet: { title } }) => {

        if(videoId == undefined){
            return;
        }
        let div = document.createElement("div");

        let iframe = document.createElement("iframe")

        iframe.src = `https://www.youtube.com/embed/${videoId}`;

        iframe.width = "100%"
        iframe.height = "80%"
        iframe.allow = "fullscreen"

        let name = document.createElement("h5");
        name.innerText = title

        div.append(iframe, name)

        let data = {
            title,
            videoId
        }

        div.onclick = () => { ShowVideo(data) };

        box.append(div);
    })

}


DefaultShow();

const api = "AIzaSyB46f1PI6mrNWt7mNQhYhvG68jQ8-BwneM"

const SearchVideos = async () => {
    try {
        const q = document.getElementById("query").value;

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${api}`);

        const data = await res.json();

        console.log(data.items);
        AppendDefault(data.items);
    }
    catch (err) {
        console.log(err)
    }
}

const Append = (videos) => {

    let displayvideo = document.getElementById("displayvideo");

    displayvideo.innerHTML = null;

    videos.forEach(({id: {videoId}, snippet: {title}}) => {
        let div = document.createElement("div");

        let iframe = document.createElement("iframe")

        iframe.src = `https://www.youtube.com/embed/${videoId}`;

        iframe.width = "100%"
        iframe.height = "80%"
        iframe.allow = "fullscreen"

        let name = document.createElement("h5");
        name.innerText = title

       div.append(iframe,name)

       let data = {
           title,
           videoId
       }

       div.onclick = ()=>{ShowVideo(data)};

       displayvideo.append(div);
    })

}


const ShowVideo = (data)=>{
    window.location.href = "video.html"
    localStorage.setItem("video",JSON.stringify(data))
}








/*
{ <iframe 
width="560" 
height="315"
src=""
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; 
gyroscope; picture-in-picture"
allowfullscreen>
</iframe> }
*/