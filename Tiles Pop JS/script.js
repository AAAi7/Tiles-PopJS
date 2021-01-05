//var Round=[lvl,speed];
//var Tilels=[count,regular,reward];

var Round=[1,2];
var Tilels=[0,0,0,0];
var MainTimer;
var topvalue=0;
var UserReward=0,RewardTimer;
var deadline=700;
TileJump=0.5;


function GameSetup()
{
    clearInterval(MainTimer); 
    Tilels=[0,0,0,0];
    topvalue=0;
    TileJump=0.5;
    var maindiv=document.getElementById("ContentDiv");
    maindiv.innerHTML=`  
    <div id="MainDiv" class="container w-100 h-75  mt-0 justify-content-center text-center">
      <div class="container text-center m-auto w-75 ml-5 mr-5 border-bottom" style="height: 750px;">
        <div class="row">
          <div id="P1_div" class="col">
          </div>
          <div id="P2_div" class="col">
          </div>
          <div id="P3_div" class="col">
          </div>
       </div>
      </div>

    </div>`;
    Round[0]=1;
    Round[1]=2;
    CreatObj();

}
function CreatObj()
{
    SetDifficulty();
    var index=Tilels[0];
    for(var i=0;i<Tilels[1];i++)
    {
        var PanelID="P";
        PanelID+=SelectPanel();
        PanelID+="_div"
        var Selected=document.getElementById(PanelID);
        Selected.innerHTML+='<div id="Iamtile'+index+'" class="TileRegular rounded" onclick="TileTapped(\'Iamtile'+index+'\')"> </div>';
        index++;
    }
    for(var i=0;i<Tilels[2];i++)
    {
        var PanelID="P";
        PanelID+=SelectPanel();
        PanelID+="_div"
        var Selected=document.getElementById(PanelID);
        Selected.innerHTML+='<div id="Iamtile'+index+'" class="TileDoubleXP rounded" onclick="TileTapped(\'Iamtile'+index+'\')">2</div>';
        index++;
    }
    for(var i=0;i<Tilels[3];i++)
    {
        var PanelID="P";
        PanelID+=SelectPanel();
        PanelID+="_div"
        var Selected=document.getElementById(PanelID);
        Selected.innerHTML+='<div id="Iamtile'+index+'" class="TileReward rounded" onclick="TileTapped(\'Iamtile'+index+'\')"></div>';
        index++;
    }
    MainTimer=setInterval(TileRun,Round[1]);



    


}
function SelectPanel()
{
    var rand = Math.round(Math.random() * 2) + 1;
    return rand;

}
function SetDifficulty()
{
    var Userlvl=Round[0];
    if(Userlvl==1)
    {
        Tilels=[2,2,0,0];
        Round[1]=40;
    }
    if(Userlvl==2)
    {
        Tilels=[3,3,0,0];
        Round[1]=30;

    }
    if(Userlvl==3)
    {
        Tilels=[4,3,1,0];
        Round[1]=20;

    }
    if(Userlvl==4)
    {
        Tilels=[5,3,2,0];
        Round[1]=16;

    }
    if(Userlvl==5)
    {
        Tilels=[3,0,3,0];
        Round[1]=14;

    }
    if(Userlvl==6)
    {
        Tilels=[6,5,1,0];
        Round[1]=10;

    }
    if(Userlvl==6)
    {
        Tilels=[3,0,3,0];
        Round[1]=9;

    }
    if(Userlvl==7)
    {
        Tilels=[3,0,3,0];
        Round[1]=8;

    }
    if(Userlvl==8)
    {
        Tilels=[3,0,3,0];
        Round[1]=5;

    }
    if(Userlvl==9)
    {
        Tilels=[6,6,0,0];
        Round[1]=5;

    }
    if(Userlvl==10)
    {
        Tilels=[7,6,0,1];
        Round[1]=5;

    }
    if(Userlvl==11)
    {
        Tilels=[7,6,1,0];
        Round[1]=5;

    }
    if(Userlvl==12)
    {
        Tilels=[7,4,2,1];
        Round[1]=5;

    }
    if(Userlvl==13)
    {
        Tilels=[5,4,1,0];
        Round[1]=3;

    }
    if(Userlvl==14)
    {
        Tilels=[10,9,1,0];
        Round[1]=3;

    }
    if(Userlvl==15)
    {
        Tilels=[6,0,6,0];
        Round[1]=2;

    }
    if(Userlvl==16)
    {
        Tilels=[7,4,3,0];
        Round[1]=2;
        TileJump=1;

    }
    if(Userlvl==17)
    {
        Tilels=[8,7,0,1];
        Round[1]=1;
        TileJump=1;

    }
    if(Userlvl==18)
    {
        Tilels=[10,8,2,0];
        Round[1]=1;
        TileJump=0.7;

    }
    if(Userlvl==19)
    {
        Tilels=[10,5,5,0];
        Round[1]=1;
        TileJump=1;

    }
    if(Userlvl==20)
    {
        Tilels=[14,4,10,0];
        Round[1]=1;
        TileJump=1;

    }



}
function LevelUp()
{
    clearInterval(MainTimer);
    
    if(Round[0]==20)
    {
        UserFinishedLevels()
    }
    else
    {
        Round[0]++;
        document.getElementById("Userlvl_lbl").innerHTML="Level:"+Round[0];
        if(UserReward>0)
        {
            document.getElementById("ContentDiv").innerHTML=`<div class="text-center container-fluid">
            <h1 class="display-4">You got rewards!</h1>
            <label id="Rewardcountdown" class="text-secondary">Your reward ends in `+UserReward/1000+` seconds </label>
            
        </div>`;
            RewardTimer=setInterval(RewardCountDown,1000);

        }
        {
            CreatObj();

        }
    }


}
function TileTapped(TileID)
{
    var Tile= document.getElementById(TileID);
    
    if(Tile.className=='TileDoubleXP rounded')
    {
        if(Tile.innerHTML=='2')
        {
            Tile.innerHTML='';
        }
        else
        {

            Tile.remove();
            Tilels[0]--;

        }
    }
    else
    {
        if(Tile.className=='TileReward rounded')
        {
            UserReward=7000;
        }
        Tile.remove();
        Tilels[0]--;
    }
    if(Tilels[0]==0)
    {
        topvalue=0;

        LevelUp();

    }
}
function TileRun()
{
    var divnum;
    topvalue=topvalue+TileJump;

    for(var i=1;i<=3;i++)
    {
        var DivID="P";
        DivID+=i+"_div";
        var Elementcount=document.getElementById(DivID).children.length;
        var selecteddiv=document.getElementById(DivID);
        //window.alert("selected "+DivID+" with this many childeren "+Elementcount);
        for(var s=0;s<Elementcount;s++)
        {
            var child=document.getElementById(selecteddiv.children[s].id);
            //var topvalue=child.style.top;
            //window.alert("Top is rn = "+child.style.top);

            child.style.top=topvalue+"px";
            //window.alert("Top is rn = "+child.style.top);
            var ylocation=child.offsetTop;
            if(ylocation>=deadline)
                Gameover();

        }

    }
    

}
function UserFinishedLevels()
{
    document.getElementById("ContentDiv").innerHTML=
    `<div style="width:100%;height:500px;padding:20px;box-sizing:border-box;display:inline-block">
    <div id="GamePanel_div">
        <a id="Finishedmsg_lbl" style="color:green; border-color:green">Well played!</a>

       <a id="StartGame_btn" style="margin-top:10px;" onclick="GameSetup()">Play again :)</a>
      
    </div>
  </div>"`;
}

function RewardCountDown()
{
    UserReward-=1000;
    document.getElementById("Rewardcountdown").innerHTML='Your reward ends in '+UserReward/1000+' seconds';
    if(UserReward==0)
    {
        UserRewardEnded();
    }

}
function UserRewardEnded()
{
    
    var maindiv=document.getElementById("ContentDiv");
    maindiv.innerHTML=`  
    <div id="MainDiv" class="container w-100 h-75  mt-0 justify-content-center text-center">
      <div class="container text-center m-auto w-75 ml-5 mr-5 border-bottom" style="height: 750px;">
        <div class="row">
          <div id="P1_div" class="col">
          </div>
          <div id="P2_div" class="col">
          </div>
          <div id="P3_div" class="col">
          </div>
       </div>
      </div>

    </div>`;
    UserReward=0;
    clearInterval(RewardTimer);
    CreatObj();

}
function Gameover()
{
    document.getElementById("ContentDiv").innerHTML=
    `<div style="width:100%;height:500px;padding:20px;box-sizing:border-box;display:inline-block">
    <div id="GamePanel_div">
        <a id="Finishedmsg_lbl">Game over :(</a>

       <a id="StartGame_btn"style="margin-top:10px;" onclick="GameSetup()">Play again :)</a>
      
    </div>
  </div>"`;   
  

}