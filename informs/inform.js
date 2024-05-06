function showCalendar() {

$(document).ready(function(){
    $('#datetimepicker').datetimepicker({
        format:'d.m.Y H:i',
        inline:true,
        lang:'fr'
    });
    

    $('.calendar-icon').click(function(){
        $('#datetimepicker').datetimepicker('show'); // Affiche le calendrier et l'heure
        
    });
});

 
}
function showCalendar1() {

    $(document).ready(function(){
        $('#datetimepicker1').datetimepicker({
            format:'d.m.Y H:i',
            inline:true,
            lang:'fr'
        });
        
    
        $('.calendar-icon').click(function(){
            $('#datetimepicker1').datetimepicker('show'); // Affiche le calendrier et l'heure
            
        });
    });
    
     
    }
    function showCalendar2() {

        $(document).ready(function(){
            $('#datetimepicker2').datetimepicker({
                format:'d.m.Y H:i',
                inline:true,
                lang:'fr'
            });
            
        
            $('.calendar-icon').click(function(){
                $('#datetimepicker2').datetimepicker('show'); // Affiche le calendrier et l'heure
                
            });
        });
        
         
        }
        function showCalendar3() {

            $(document).ready(function(){
                $('#datetimepicker3').datetimepicker({
                    format:'d.m.Y H:i',
                    inline:true,
                    lang:'fr'
                });
                
            
                $('.calendar-icon').click(function(){
                    $('#datetimepicker3').datetimepicker('show'); // Affiche le calendrier et l'heure
                    
                });
            });
            
             
            }