var hexDigits = new Array
("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function hrdTranslate(element,direction){
    switch (direction) {
        case 37:
            element.animate( { left: '-=20' }, 100);
            break;
        case 38:
            element.animate( { top: '-=20' }, 100);
            break;
        case 39:
            element.animate( { left: '+=20' }, 100);
            break;
        case 40:
            element.animate( { top: '+=20' }, 100);
            break;
    }
}

$(document).ready(function () {
    $('#hrd_editor,#hrd_image_editor').fadeOut()
    $('#hrd_editor a,#hrd_image_editor button,#hrd_editor a,#hrd_image_editor button').click(function (e) {
        e.stopPropagation()
        e.preventDefault()
    })
    $('#fontSizeButton+.dropdown-menu a').each(function () {
        $(this).click(function (e) {
            e.preventDefault()
            e.stopPropagation()
            var fontSize=($(this).html())
            $('#fontSizeButton').html(fontSize)
            editBox.css('fontSize',fontSize+'px')
            $('#fontSizeButton+.dropdown-menu').dropdown('toggle')
        })
    })

    var editBox;
    var editImg;


    $('#hrd_translate_box').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        $(this).on('keydown',function (e) {
            var direction=e.keyCode
            hrdTranslate(editBox,direction)
        })
    })
    $('#hrd_translate_img').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        $(this).on('keydown',function (e) {
            var direction=e.keyCode
            hrdTranslate(editImg,direction)
        })
    })
    $('#fontWrapButton').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        editBox.toggleClass('hrd_italic')
    })
    $('#fontBoldButton').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        editBox.toggleClass('hrd_bold')
    })

    $('#alignButton+.dropdown-menu a').each(function () {
        $(this).click(function (e) {
            e.preventDefault()
            e.stopPropagation()
            var textAlgn=($(this).html())
            $('#alignButton').html(textAlgn)
            if (textAlgn=='<i class="fa fa-align-left"></i>')
                editBox.css('textAlign','left')
            if (textAlgn=='<i class="fa fa-align-center"></i>')
                editBox.css('textAlign','center')
            if (textAlgn=='<i class="fa fa-align-right"></i>')
                editBox.css('textAlign','right')
            $('#alignButton+.dropdown-menu').dropdown('toggle')
        })

    })

    $('#textColor input').on('change',function () {
        editBox.css('color',$(this).val())
    })

    $('.hrd_editable').each(function () {
        $(this).click(function (e) {
            e.preventDefault()
            e.stopPropagation()
            var currBox=$(this)
            var x=currBox.offset().left
            var y=currBox.offset().top+currBox.height()+5
            $('#hrd_editor').css({top:y,left:x})

            $('#hrd_editor').fadeIn()
            editBox=currBox
            $('#fontSizeButton').html(currBox.css('fontSize').replace('px',''))
            $('#textColor input').val(rgb2hex(currBox.css('color')))
        })
    })

    $('.hrd_change_image').each(function () {
        $(this).click(function (e) {
            var currImg=$(this)
            e.preventDefault()
            e.stopPropagation()
            editImg=currImg
            var x=editImg.offset().left
            var y=editImg.offset().top+editImg.height()+5
            console.log('x: '+x+'-y: '+y)
            $('#hrd_image_editor').css({top:y,left:x})
            $('#hrd_image_editor').fadeIn()
        })
    })

    $('.hrd_del_image_editor').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        editImg.remove()
        $('#hrd_image_editor').fadeOut()
    })

    $('#hrd_image_editor,#hrd_editor').draggable()

    $('body').click(function (e) {
        $('#hrd_image_editor,#hrd_editor').fadeOut()
    })

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                editImg.attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }

    $("#hrd_img_upload").change(function() {
        readURL(this);
    });

    $('.hrd_image_load_editor').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('#hrd_img_upload').trigger('click');
    })
})