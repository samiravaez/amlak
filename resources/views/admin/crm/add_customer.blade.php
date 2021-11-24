@extends('admin.main')

@section('content')
    <div class="card">
        <div class="card-body">
            <h5 class="mb-4">مشخصات مشتری</h5>
            <form action="{{route('crm.check_customer')}}" method="post">
                {{csrf_field()}}
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="phone">شماره تماس</label>
                        <input type="text" class="form-control" id="phone" name="phone">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <button class="btn btn-primary float-right">بررسی اطلاعات</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
