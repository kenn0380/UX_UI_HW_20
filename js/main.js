$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });

    $( "#hcd").hover(function(){
        $( "#hcd-icon" ).css("display", "none");
        $( "#hcd-skills-list" ).slideDown( "300" );
    }, function (){
        $( "#hcd-skills-list" ).css("display", "none");
        $( "#hcd-icon" ).css("display", "block");
    })

    $( "#fe").hover(function(){
        $( "#fe-icon" ).css("display", "none");
        $( "#fe-skills-list" ).slideDown( "300" );
    }, function (){
        $( "#fe-skills-list" ).css("display", "none");
        $( "#fe-icon" ).css("display", "block");
    })

    $( "#ui").hover(function(){
        $( "#ui-icon" ).css("display", "none");
        $( "#ui-skills-list" ).slideDown( "300" );
    }, function (){
        $( "#ui-skills-list" ).css("display", "none");
        $( "#ui-icon" ).css("display", "block");
    })

    let videoElem = document.getElementById("case-study1-video");

    $(function(){
        $(window).scroll(function(){
          var aTop = $('#case-study1').height();
          if($(this).scrollTop()>=aTop){
            videoElem.play();
          }
        });
      });

    let videoElem2 = document.getElementById("case-study2-video");

    $(function(){
        $(window).scroll(function(){
          var aTop = $('#case-study2').height();
          if($(this).scrollTop()>=aTop){
            videoElem2.play();
          }
        });
      });

    let videoElem3 = document.getElementById("case-study3-video");

    $(function(){
        $(window).scroll(function(){
          var aTop = $('#case-study3').height();
          if($(this).scrollTop()>=aTop){
            videoElem3.play();
          }
        });
      });


      var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "<button type='submit' class='case-study-button' id='successButton'>Thanks, I'll respond soon!</button>";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


});


