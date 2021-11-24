@extends('admin.main')

@section('content')
    @include('layouts.navigation')
    <div id="main">
        <main class="main-content">
            <div class="container">
                <!-- begin::page-header -->
                <div class="page-header">
                    <h4>محصولات</h4>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="">خانه</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">محصولات</li>
                        </ol>
                    </nav>
                </div>
                <!-- end::page-header -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">{{isset($post)?'ویرایش اطلاعات محصول':'افزودن محصول'}}</h6>
                                <form class="needs-validation" action="" method="post" enctype="multipart/form-data">
                                    {{csrf_field()}}
                                    @include('layouts.messages')
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom01">عنوان</label>
                                            <input type="text" name="name" class="form-control" id="name" placeholder="نام محصول" value="{{old('name',isset($post)?$post->name:'')}}" required="">
                                            <div class="valid-feedback">
                                                صحیح است!
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="slug">نامک</label>
                                            <input type="text" name="slug" class="form-control" id="validationCustom02" placeholder="نامک" value="{{old('slug',isset($post)?$post->slug:'')}}">
                                            <div class="valid-feedback">
                                                صحیح است!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3 editorLogo">
                                            <textarea id="edit" name="description">{{old('description',isset($post)?$post->description:'')}}</textarea>
                                        </div>
                                    </div>
                                    <div class="col-8 mb-3 float-left">
                                        <div class="form-group">
                                            <label for="validationCustom03">ورودی برچسب</label>
                                            <select class="select2" name="tags[]" multiple="multiple">
                                                @if(isset($allTags) && !empty($allTags))
                                                    @foreach($allTags as $tag)
                                                        <option value="{{$tag['term_id']}}" {{(isset($tags) && in_array($tag['term_id'],$tags))?'selected':'' }}>{{$tag['term_name']}}</option>
                                                    @endforeach
                                                @endif
                                            </select>
{{--                                            <input type="text" class="form-control tagsinput" name="tags" id="validationCustom03" placeholder="برچسب ها" value="{{(isset($tags) && !empty($tags))?implode(',',$tags):''}}">--}}
                                            <div class="valid-feedback">
                                                صحیح است!
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">وضعیت محصول</label>
                                            <select class="form-control" id="exampleFormControlSelect1" name="status">
                                                <option value="0" {{(isset($post) && intval($post->status)==0)?'selected':''}}>پیش نویس</option>
                                                <option value="1" {{(isset($post) && intval($post->status)==1)?'selected':''}}>انتشار</option>
                                            </select>
                                        </div>
                                        {!! $metas !!}
                                    </div>
                                    <div class="col-md-4 mb-3 float-right">
                                        <div class="card">
                                          <div class="card-header">
                                              دسته بندی محصولات
                                              <i class="float-right fa fa-angle-up"></i>
                                          </div>
                                          <div class="card-body catsBox">
                                              <div class="form-group">
                                                <label for="searchCat">جستجوی دسته ها</label>
                                                <input type="text" class="form-control" id="searchCat">
                                              </div>
                                              @if (isset($allCats) && !empty($allCats))
                                                  <div class="w-100 catsList">
                                                  @foreach($allCats as $index=>$cat)
                                                      <div class="form-check" style="padding-right:{{10*$cat['level']}}px">
                                                        <input name="cats[]" type="checkbox" value="{{$cat['term_id']}}" {{(isset($cats) && in_array($cat['term_id'],$cats))?'checked':'' }} id="defaultCheck{{$index}}">
                                                        <label class="form-check-label" for="defaultCheck{{$index}}">
                                                            {{$cat['term_name']}}
                                                        </label>
                                                      </div>
                                                  @endforeach
                                                  </div>
                                              @endif
                                          </div>
                                        </div>
                                        <div class="card">
                                          <div class="card-header">
                                            تصویر شاخص
                                              <i class="float-right fa fa-angle-up"></i>
                                          </div>
                                          <div class="card-body">
                                              <div class="dropzone" id="mainImage">
                                              </div>
                                              <input type="hidden" name="mainImage" value="{{old('image',isset($post)?$post->image:'')}}">
                                          </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary" name="updatePostData" id="submit-all" type="submit">بروزرسانی اطلاعات</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <script type="text/javascript">
        $(document).ready(function (){
            selectedCats=[];
            $('#searchCat').keyup(function (){
                var searchCat=$(this).val()
                var data={'searchCat':searchCat}
                var cats = $('.catsBox .catsList input:checked').map(function(){
                  return $(this).val();
                }).get();
                var notSelectedCatsObject = $('.catsBox .catsList input:not(:checked)').map(function(){
                  return $(this).val();
                }).get();
                cats=arrayUnique(selectedCats.concat(cats))
                selectedCats = cats.filter( function( el ) {
                  return notSelectedCatsObject.indexOf( el ) < 0;
                } );

                data.cats=selectedCats;
                $.ajax({
                    type:'post',
                    url:root+"/admin/ajaxSearchProductCat",
                    data:data,
                    dataType:'json',
                    success:function (response){
                        if(response.success)
                            $('.catsBox .catsList').html(response.msg)
                    },
                    error:function (){

                    }
                })
            })
        })
    </script>
@endsection
