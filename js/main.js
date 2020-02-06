
var newSkill = '';

var template =  '';


$('tfoot').on('click','#add-button',function() {
    newSkill = $('#input-box').val()
    template =   `<tr>
                    <td colspan='2'><button class="remove-button">X</button>${newSkill}</td>
                </tr>`;
    $('tbody').append(template)
});

$('tbody').on('click','button',function() {
        $(this).closest('tr').fadeOut(1000, function() {

        $(this).remove();        
    });
});