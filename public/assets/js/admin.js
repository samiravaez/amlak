function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

$(document).ready(function (){
    $.ajaxSetup({
        // headers:{
        //     'X-CSRF-TOKEN':$('meta[name="x-csrf-token"]').attr('content'),
        // },
        beforeSend:function (xhr){
            var check_map=this.url.search('map.ir')
            if(check_map==-1)
                xhr.setRequestHeader('X-CSRF-TOKEN',$('meta[name="x-csrf-token"]').attr('content'))
        }
    });

    // selectedCats=[];
    // $('#searchCat').keyup(function (){
    //     var searchCat=$(this).val()
    //     var data={'searchCat':searchCat}
    //     var cats = $('.catsBox .catsList input:checked').map(function(){
    //       return $(this).val();
    //     }).get();
    //     var notSelectedCatsObject = $('.catsBox .catsList input:not(:checked)').map(function(){
    //       return $(this).val();
    //     }).get();
    //     cats=arrayUnique(selectedCats.concat(cats))
    //     selectedCats = cats.filter( function( el ) {
    //       return notSelectedCatsObject.indexOf( el ) < 0;
    //     } );
    //
    //     data.cats=selectedCats;
    //     $.ajax({
    //         type:'post',
    //         url:root+"/admin/ajaxSearchCat",
    //         data:data,
    //         dataType:'json',
    //         success:function (response){
    //             if(response.success)
    //                 $('.catsBox .catsList').html(response.msg)
    //         },
    //         error:function (){
    //
    //         }
    //     })
    // })

    $('input[name="tags"]').on('beforeItemAdd',function (e){
        var event=e;
        var tagItem=event.item;
        $.ajax({
            type:'post',
            url:root+"/admin/ajaxCheckTagEnd",
            data:{'item':tagItem},
            success:function (response){
                if (response=='0'){
                    $('input[name="tags').tagsinput('remove', tagItem);
                }
            },
            error:function (){
                e.cancel()
            }
        })
    })

    $(".img-preview").change(function () {
        var input=this

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var item=$(input).parent().next()
                var box=$('<div class="download-item"></div>')
                var img=$('<img/>')
                img.attr('src', e.target.result);
                box.append(img)
                box.append('<i class="fa fa-remove"></i>')
                box.append('<input type="hidden">')
                if (item.find('download-item') && !$(input).hasClass('img-gallery'))
                    item.html('')
                item.append(box)
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    });

    $(document).on('click','.option-list-item .fa-edit',function (){
        $(this).parent().parent().parent().next().toggleClass('d-none')
    })
    $(document).on('click','.option-list-item .fa-trash',function (){
        $(this).parent().parent().parent().parent().remove()
    })

    $(document).on('change','.switch-option input',function (e){
        var val=$(this).val()
        if(val=='on'){
            $(this).parent().parent().find('.switch-option-off').removeClass('switch-option-off')
            $(this).parent().addClass('switch-option-on')
        }else if(val=='off'){
            $(this).parent().parent().find('.switch-option-on').removeClass('switch-option-on')
            $(this).parent().addClass('switch-option-off')
        }
    })
})

