function solution(video_len, pos, op_start, op_end, commands) {
    let convertedPos = convert(pos);
  const convertedStart = convert(op_start);
  const convertedEnd = convert(op_end);
  const convertedVideo = convert(video_len);
    
    if(convertedPos >= convertedStart && convertedPos <= convertedEnd){
        convertedPos = convertedEnd
    }
    
    commands.forEach((command)=>{
        if(command === "next"){
            convertedPos += 10
        }
        else{
            convertedPos -= 10
        }
        
        if(convertedPos <= 0){
            convertedPos = 0
        }
        if(convertedPos >= convertedVideo){
            convertedPos = convertedVideo
        }
        if(convertedPos >= convertedStart && convertedPos <= convertedEnd){
            convertedPos = convertedEnd
        }
    })
    
    function convert(time) {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute);
}
    
    const hour = Math.floor(convertedPos / 60) + "";
  const minute = (convertedPos % 60) + "";

  return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
    
    console.log(convertedPos)
    
}