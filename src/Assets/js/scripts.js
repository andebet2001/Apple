
if (window.matchMedia('(max-width: 768px)').matches)
{
    
    $(".title").on('click', function()
    {
         
        var el = $(this).next(".list-item");
        if(el.is(':visible'))
        {
             
            el.slideUp();   
            
        } else {
            el.slideDown(); 
          
        }
       
    });
  
       
} 

// if (window.matchMedia('(max-width: 768px)').matches)
// {
//     $(".title").on('click', function()
//     {
         
//         var el = $(this).next(".list-item");
//         // (el.is(':visible'))
        
//             el.slideToggle();
           
        
//     });
  

// }   



