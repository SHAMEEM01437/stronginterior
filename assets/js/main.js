$(document).ready(function(){
    $('.fa-bars-staggered').click(function(){
        $('.sidebar').toggleClass('active___')
    });
   });
   $(document).ready(function(){
    $('.fa-xmark').click(function(){
        $('.sidebar').removeClass('active___')
    });
   });

//    $(window).scroll(function(){
//        if($(this).scrollTop() > 100){
//            $('.navbar').addClass('sticky');
//        }
//        else{
//         $('.navbar').removeClass('sticky');
//        }
//    })


 // srollTop 
 $(".scrollTop").click( function() {
    $(window).scrollTop(0);
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
        //$('.scrollTop').addClass('dis');
        $('.scrollTop').css("display", "flex");
    }else{
        //$('scrollTop').removeClass('dis');
        $('.scrollTop').css("display", "none");
    }
  })


// $(window).scroll(function() {
//     if($(".mainnabar").offset().top + $(this).outerHeight() > $('.footer-home').offset().top) {
//         $(".mainnabar").addClass('hidden');
//     } else {
//         $(".mainnabar").removeClass('hidden');
//     }
// });

/**
 * navbar active itme
 */

$(document).ready(function(){
    $('.nav-item').click(function(){
        $(this).addClass('nav-item-active');
        $(this).siblings().removeClass('nav-item-active');
    });
})



   // number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });



//   stycky header


window.addEventListener('scroll', function(){
    var header = document.querySelector('.navbar')
        header.classList.toggle('sticky', window.scrollY > 100);

})

	

// Welcome slider ==============
$('#Welcome_carousel_slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoplay:true,
  autoplayTimeout:1500,
  navText : ['<i class="fa-solid fa-arrow-left-long"></i> Prev','Next <i class="fa-solid fa-arrow-right-long"></i>'],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
/*-----------------------------------------------------------------------
 Who We Are Carousel
 ---------------------------------------------------------------------*/
 $('#Who_we_are').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoplay:true,
  autoplayTimeout:1500,
  navText : ['<i class="fa-solid fa-arrow-left-long"></i> Prev','Next <i class="fa-solid fa-arrow-right-long"></i>'],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})


/*----------------------------------------------------------------------
          Our Services
----------------------------------------------------------------------*/
$('#our_services').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('#our_blog').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots:false,
    navText : ['<i class="fa-solid fa-arrow-left-long"></i> Prev','Next <i class="fa-solid fa-arrow-right-long"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#client_carousel').owlCarousel({
    loop:true,
    margin:90,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

// File name demo

var input = document.getElementById( 'file' );
var infoArea = document.getElementById( 'file_name' );
input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  // the change event gives us the input it occurred in 
  var input = event.srcElement;
  // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
  var fileName = input.files[0].name;
  // use fileName however fits your app best, i.e. add it into a div
  infoArea.textContent = 'File name: ' + fileName;
}



// Multiple images preview in browser
// var imagesPreview = function(input, placeToInsertImagePreview) {

//   if (input.files) {
//       var filesAmount = input.files.length;
//       for (i = 0; i < filesAmount; i++) {
//           var reader = new FileReader();
//           reader.onload = function(event) {
//               var htmlImage =  '<div class="file_item">';
//                   htmlImage = htmlImage +  '<img  src="'+event.target.result+'" />';  
//                   htmlImage = htmlImage +  '<input onclick="removeImage($(this))" type="button" value="Delete" />'; 
//                   htmlImage = htmlImage +  '</div>';        
//               $($.parseHTML(htmlImage)).appendTo(placeToInsertImagePreview);
//           }

//           reader.readAsDataURL(input.files[i]);
//       }
//   }
// };

// function removeImage(item) {
// //alert(item);
//  item.parent().remove();
// }

// $('#file').on('change', function() {
//   imagesPreview(this, 'div#file_carousel');
// });

