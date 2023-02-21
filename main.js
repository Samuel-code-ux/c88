function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block_image_height ="+block_image_height);
        console.log ("When Up arrow key is pressed,X"=+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("block_image_height ="+block_image_height);
        console.log ("When Down arrow key is pressed,X"=+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_image_width;
        console.log("block_image_width ="+block_image_width);
        console.log ("When Left arrow key is pressed,X"=+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x=player_x-block_image_width;
        console.log("block_image_width ="+block_image_width);
        console.log ("When Right arrow key is pressed,X"=+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}









