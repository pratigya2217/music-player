$(document).ready(()=>{
    $(".audioDemo").trigger('load');
    $(".audioDemo").bind("load",function(){
        $(".alert-success").html("Audio Loaded succesfully");
    });


    //starts playing
    $(".audioDemo").trigger('play');
    //pause playing
    $(".audioDemo").trigger('pause');
    

    $(".stopButton").on("click", ()=>{
        //pause playing
        $(".audioDemo").trigger('pause');
        //set play time to 0
        $(".audioDemo").prop("currentTime",0);
    })
    
    //forward the music about 5 seconds
    $(".audioDemo").prop("currentTime",$(".audioDemo").prop("currentTime")+5);
    //backward the music about 5 seconds
    $(".audioDemo").prop("currentTime",$(".audioDemo").prop("currentTime")-5);
})