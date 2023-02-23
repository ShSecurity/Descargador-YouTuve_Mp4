function convertir() {
  var url = document.getElementById("url").value;
  var videoID = obtenerVideoID(url);
  var urlDescarga = "https://www.yt-download.org/api/button/mp4/" + videoID;
  
  var descarga = document.getElementById("descarga");
  descarga.innerHTML = "Descargando...";
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", urlDescarga);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        descarga.innerHTML = '<a href="' + response.dlink + '">Descargar MP4</a>';
      } else {
        descarga.innerHTML = "Error al descargar el video.";
      }
    }
  };
  xhr.send();
}

function obtenerVideoID(url) {
  var videoID = "";
  if (url.indexOf("v=") !== -1) {
    videoID = url.split("v=")[1];
  } else if (url.indexOf("youtu.be/") !== -1) {
    videoID = url.split("youtu.be/")[1];
  } else {
    alert("URL de YouTube no válida");
  }
  return videoID;
}
