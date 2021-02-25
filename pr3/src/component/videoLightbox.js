window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  var video1 = document.getElementById('salmon');
  video1.addEventListener('click',function(){
    var lightBoxVideo = document.getElementById("salmonlight");
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  });
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("salmonlight");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }

  var video2 = document.getElementById('dinner');
  video2.addEventListener('click',function(){
      var lightBoxVideo = document.getElementById("dinnerlight");
      document.getElementById('light2').style.display = 'block';
      document.getElementById('fade2').style.display = 'block';
      lightBoxVideo.play();
  });
  function lightbox_close2() {
    var lightBoxVideo = document.getElementById("dinnerlight");
    document.getElementById('light2').style.display = 'none';
    document.getElementById('fade2').style.display = 'none';
    lightBoxVideo.pause();
  }

  var video3 = document.getElementById('seal');
  video3.addEventListener('click',function(){
    var lightBoxVideo = document.getElementById("seallight");
    document.getElementById('light3').style.display = 'block';
    document.getElementById('fade3').style.display = 'block';
    lightBoxVideo.play();
  });
  function lightbox_close3() {
    var lightBoxVideo = document.getElementById("seallight");
    document.getElementById('light3').style.display = 'none';
    document.getElementById('fade3').style.display = 'none';
    lightBoxVideo.pause();
  }

  var video4 = document.getElementById('taxi');
  video4.addEventListener('click',function(){
    var lightBoxVideo = document.getElementById("taxilight");
    document.getElementById('light4').style.display = 'block';
    document.getElementById('fade4').style.display = 'block';
    lightBoxVideo.play();
  });
  function lightbox_close4() {
    var lightBoxVideo = document.getElementById("taxilight");
    document.getElementById('light4').style.display = 'none';
    document.getElementById('fade4').style.display = 'none';
    lightBoxVideo.pause();
  }