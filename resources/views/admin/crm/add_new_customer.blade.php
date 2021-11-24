@extends('admin.main')

@section('content')
    <div class="card">
        <div class="card-body">
            <h5 class="mb-4">مشخصات مشتری</h5>
            <form action="{{route('crm.save_new_customer',$phone)}}" method="post">
                {{csrf_field()}}
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom01">نام</label>
                        <input type="text" name="name" class="form-control" id="name"
                               placeholder="نام"
                               required="">
                        <div class="valid-feedback">
                            صحیح است!
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="email">ایمیل</label>
                        <input type="email" name="email" class="form-control" id="email"
                               placeholder="ایمیل">
                        <div class="valid-feedback">
                            صحیح است!
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="phone">شماره تماس</label>
                        <input type="email" class="form-control" id="phone" disabled value="{{$phone}}">
                        <div class="valid-feedback">
                            صحیح است!
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="password">رمز عبور</label>
                        <input type="password" name="password" class="form-control" id="password" placeholder="رمز عبور" autocomplete="new-password">
                        <div class="valid-feedback">
                            صحیح است!
                        </div>
                    </div>
                    <div class="col-12 mb-3">
                        <input type="submit" class="btn btn-primary float-right" value="افزودن مشتری">
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
