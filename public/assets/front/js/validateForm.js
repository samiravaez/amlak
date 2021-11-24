(function ($) {
    $.fn.validateForm=function (userOptions,userPatterns) {
        options=$.extend(true,{
            errorDivClass:'errorMsgs',
            fieldNameAttr:'name',
            errorPosition:'prepend', // append,pr// epend
        },userOptions)


        var emailRegex=/(([a-z0-9_\.-]{3,32})@([\da-z\.-]{2,32})\.([a-z\.]{2,6}))/i
        var urlRegex=/(https?:\/\/)?(www\.)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)\/?/i
        var phoneRegex=/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig
        var requireRegex=/([^\s])+/;

        var startWith=function (str,prefix) {
            return (str.slice(0,prefix.length)==prefix)
        }

        this.each(function () {
            var frm=$(this);
            var errorDiv=$('<div>').addClass(options.errorDivClass)

            frm.submit(function (e) {
                var errors=[];
                var fields=$(this).find('input[data-vld],textarea[data-vld]');

                fields.each(function () {
                    var field=$(this);
                    var fieldError=true
                    var vldStrings=field.attr('data-vld').split('|')
                    var fname=field.attr(options.fieldNameAttr)
                    if (!field.is('['+options.fieldNameAttr+']')){
                        fname=field.attr('name')
                    }
                    if (field.is('[data-main]')){
                        mainField=field.attr('data-main')
                        repeats=frm.find('input[data-repeat="'+mainField+'"],textarea[data-repeat="'+mainField+'"]')
                        var repeatCheck=true
                        repeats.each(function () {
                            var repeat=$(this)
                            if(repeat.val()!==field.val() && repeatCheck){
                                repeatCheck=false
                            }
                        })
                        if (!repeatCheck){
                            fieldError=false
                        }
                        if (!fieldError){
                            errors.push(fname+" با تکرار آن مطابقت ندارد.")
                        }
                    }
                    for (var i in vldStrings){
                        var vldStr=vldStrings[i].trim();
                        if (vldStr=='required'){
                            if (!requireRegex.test(field.val())){
                                errors.push("وارد کردن "+fname+" الزامی است.")
                                fieldError=false
                                // if (!field.next().is('span.required')){
                                //     field.after('<span class="required">*</span>')
                                // }
                            }else{
                                // field.next('span.required').remove()
                            }
                        }else if (vldStr=='email' && field.val()!=""){
                            if (!emailRegex.test(field.val())) {
                                errors.push(fname + " وارد شده معتبر نمی باشد.")
                                fieldError=false
                            }
                        }else if (vldStr=='url' && field.val()!=""){
                            if (!urlRegex.test(field.val())){
                                errors.push(fname + " وارد شده معتبر نمی باشد.")
                                fieldError=false
                            }
                        }else if (vldStr=='phone' && field.val()!=""){
                            if (!phoneRegex.test(field.val())){
                                errors.push(fname + " وارد شده معتبر نمی باشد.")
                                fieldError=false
                            }
                        }else if (vldStr=='number' && field.val()!=""){
                            if (isNaN(field.val())){
                                errors.push(fname+" باید به صورت عددی وارد شود.")
                                fieldError=false
                            }
                        }else if(startWith(vldStr,'minlen_') && field.val()!=""){
                            var len=Number(vldStr.split('_')[1]);
                            if (field.val().length<len){
                                errors.push("طول "+fname+"نباید کمتر از"+len+" کاراکتر باشد.")
                                fieldError=false
                            }
                        }else if(startWith(vldStr,'maxlen_') && field.val()!=""){
                            var len=Number(vldStr.split('_')[1]);
                            if (field.val().length>len){
                                errors.push("طول "+fname+" نباید بیشتر از "+len+" کاراکتر باشد.")
                                fieldError=false
                            }
                        }else if(startWith(vldStr,'min_') && field.val()!=""){
                            var num=Number(vldStr.split('_')[1]);
                            if (Number(field.val())<num){
                                errors.push("مقدار "+fname+" نباید کمتر از"+num+" باشد.")
                                fieldError=false
                            }
                        }else if(startWith(vldStr,'max_') && field.val()!=""){
                            var num=Number(vldStr.split('_')[1]);
                            if (Number(field.val())>num){
                                errors.push("مقدار "+fname+" نباید بیشتر از"+num+" باشد.")
                                fieldError=false
                            }
                        }else if(startWith(vldStr,'regex_') && field.val()!=""){
                            var patt=new RegExp(vldStr.split('_')[2],vldStr.split('_')[1]);
                            console.log(patt)
                            if (!field.val().match(patt)){
                                errors.push(fname+" وارد شده معتبر نمی باشد.")
                                fieldError=false
                            }
                        }else{
                            //invalid validation string
                        }
                    }

                    if (!fieldError){
                        field.addClass('hrd_error_input')
                    }else {
                        field.removeClass('hrd_error_input')
                    }
                })

                if (errors.length==0){
                    return true
                }else{
                    e.preventDefault();
                    errorDiv.html(errors.join('<br>'))
                    if (options.errorPosition=="append"){
                        frm.append(errorDiv)
                    }else{
                        frm.prepend(errorDiv)
                    }
                }
            })
        })
    }
})(jQuery)
