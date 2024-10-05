function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hNGUIIFpmO":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById("myAudio");
audio.src='musik.mp3';
audio.load();
audio.play();
audio.volume = 0.7;

}

