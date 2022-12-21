var image;
var imageSrc;
var twisted;
var srcs;
var firstCard;
let matches;

function initializeGameAttributes()
{
     image=[document.getElementById("img1"),document.getElementById("img2"),document.getElementById("img3"),document.getElementById("img4"),document.getElementById("img5"),document.getElementById("img6"),document.getElementById("img7"),document.getElementById("img8"),document.getElementById("img9"),document.getElementById("img10"),document.getElementById("img11"),document.getElementById("img12")];
 imageSrc=["https://apologeticspress.org/wp-content/uploads/2021/08/Were-the-Giza-Pyramids-Built-Before-the-Flood-JM2.jpg","https://lp-cms-production.imgix.net/features/2014/07/nile-cruise-egypt-63c7bab066af.jpg","https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg","https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/11/17/istock-527863033.jpg?quality=75&width=982&height=726&auto=webp","https://post.healthline.com/wp-content/uploads/2021/11/lotus-flower-in-pond-732x549-thumbnail-732x549.jpg","https://guidetoiceland.imgix.net/333935/x/0/pictures-of-horses-in-iceland-2-jpg?ar=1.91%3A1&w=1200&fit=crop"];
 twisted=[true,true,true,true,true,true,true,true,true,true,true,true];
 for(let i=0;i<12;i++)
 {
    image[i].src="https://designlooter.com/images/pot-plant-svg-7.jpg";
    matches=0;
    document.getElementById('score').innerHTML = matches;
 }
 srcs=generateSrc();
 firstCard=-1;
 matches=0;
}
initializeGameAttributes();

var replayBtn=document.getElementById("replayBtn");

replayBtn.addEventListener('click',function(){
    initializeGameAttributes();
})




for(let i=0;i<12;i++)
{
    image[i].addEventListener('click',function () {
        
        if(twisted[i]&&firstCard!=i)
        {
            if(firstCard==-1)
            {
                firstCard=i;
                twisted[i]=false;
            }
            else 
            {
               if(srcs[firstCard]==srcs[i])
               {
            twisted[i]=false;
            
            matches+=2;
               }
               else{
                image[i].src="https://designlooter.com/images/pot-plant-svg-7.jpg";
                image[firstCard].src="https://designlooter.com/images/pot-plant-svg-7.jpg";
                
                twisted[firstCard]=true;
               }
               firstCard=-1;
            }
         
        }
       if(!twisted[i])
        {image[i].src=srcs[i];
            

        }
        document.getElementById('score').innerHTML = matches;
        if(matches==12)
        {

        }
       
        })
}
 
function generateSrc()
{
    var completed=[0,0,0,0,0,0];
    var srcs=[];

for(let i=0;i<12;i++)
{
    let x=Math.floor(Math.random() * 6) ;
    while(completed[x]==2)
    {
        x=Math.floor(Math.random() * 6);
    }
    
    srcs.push(imageSrc[x]);
    completed[x]+=1;
}


return srcs;

}

