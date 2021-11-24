@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>حیطه کاری کارشناس</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">حیطه کاری کارشناس</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">حیطه کاری کارشناس</h6>
                        <form class="needs-validation" action="" method="post">
                            {{csrf_field()}}
                            @include('layouts.messages')
                            @if(isset($transactions) && !empty($transactions) && isset($land_types) && !empty($land_types))
                                <div class="col-12">
                                    <table class="table table-bordered table-striped" id="user-jobs">
                                        @php
                                            $cnt=0;
                                            if(isset($edit_user->skill))
                                                $user_skills=json_decode($edit_user->skill,true);
                                        @endphp
                                        <thead>
                                        <tr>
                                            <th>نوع معامله</th>
                                            <th>نوع ملک</th>
                                            <th>
                                                <span class="fa fa-plus-circle text-success" id="add-user-jobs" data-rows="{{isset($user_skills)?count($user_skills):'0'}}"></span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @if(isset($user_skills) && !empty($user_skills))
                                            @foreach($user_skills as $index=>$user_skill)
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div>
                                                                <input type="checkbox" class="transaction-select-all change-select-all" name="data[{{$cnt}}][transaction-select-all]" {{($user_skill['transaction_id']==0)?'checked':''}} data-toggle="toggle" data-onstyle="info" data-on="همه" data-off="محدود">
                                                            </div>
                                                            <div class="ml-2 flex-fill">
                                                                <select name="data[{{$cnt}}][transaction]" class="select2 mt-2" {{($user_skill['transaction_id']==0)?'disabled':''}}>
                                                                    @foreach($transactions as $transaction)
                                                                        <option value="{{$transaction['term_id']}}" {{($transaction['term_id']==$user_skill['transaction_id'])?'selected':''}}>{{$transaction['term_name']}}</option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div>
                                                                <input type="checkbox" class="land_type-select-all change-select-all" name="data[{{$cnt}}][land_type-select-all]" data-toggle="toggle" {{($user_skill['land_type_id']==0)?'checked':''}} data-onstyle="info" data-on="همه" data-off="محدود">
                                                            </div>
                                                            <div class="ml-2 flex-fill">
                                                                <select name="data[{{$cnt}}][land_type]" class="select2" {{($user_skill['land_type_id']==0)?'disabled':''}}>
                                                                    @foreach($land_types as $land_type)
                                                                        <option value="{{$land_type['term_id']}}" {{($land_type['term_id']==$user_skill['land_type_id'])?'selected':''}}>{{$land_type['term_name']}}</option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="fa fa-minus-circle text-danger delete-user-job"></span>
                                                    </td>
                                                </tr>
                                                @php
                                                    $cnt=$cnt+1;
                                                @endphp
                                            @endforeach
                                        @endif
                                        </tbody>
                                    </table>
                                </div>
                            @endif

                            <div class="col-12">
                                <table class="table table-bordered table-striped" id="user-regions">
                                    <thead>
                                        <tr>
                                            <th>انتخاب محدوده</th>
                                            <th>
                                                <span class="fa fa-plus-circle text-success" id="add-user-regions" data-rows="{{isset($regions)?count($regions):'0'}}"></span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php
                                        $cnt=0;
                                    @endphp
                                    @if(isset($regions) && !empty($regions))
                                        @foreach($regions as $region)
                                            <tr>
                                                <td>
                                                    @if(isset($ostans) && !empty($ostans))
                                                        <div class="form-row" data-num="{{$cnt}}">
                                                            <div class="form-group col-md-3" data-type="0">
                                                                <label>استان</label>
                                                                <select class="ostan-change-step select2" name="region[{{$cnt}}][ostan]">
                                                                    <option value="0">انتخاب همه</option>
                                                                    @foreach($ostans as $ostan)
                                                                        <option value="{{$ostan->ID}}" {{isset($region['ostan']) && ($ostan->ID==$region['ostan']->ID)?'selected':''}}>{{$ostan->Title}}</option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                            @if(isset($region['ostan']) && $region['ostan']->shahrestans()->count()>0)
                                                                <div class="form-group col-md-3" data-type="1">
                                                                    <label>شهر</label>
                                                                    @php
                                                                    @endphp
                                                                    <select class="shahrestan-change-step select2"
                                                                            name="region[{{$cnt}}][shahrestan]">
                                                                        <option value="0">انتخاب همه</option>

                                                                        @foreach($region['ostan']->shahrestans as $shahrestan)
                                                                            <option
                                                                                value="{{$shahrestan->ID}}" {{(isset($region['shahrestan']) && $shahrestan->ID==$region['shahrestan']->ID)?'selected':''}}>{{$shahrestan->Title}}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </div>
                                                            @endif
                                                            @if(isset($region['ostan']) && isset($region['shahrestan']) && $region['shahrestan']->manategh()->count()>0)
                                                                <div class="form-group col-md-3" data-type="2">
                                                                    <label>منطقه</label>
                                                                    <select class="mantaghe-change-step select2"
                                                                            name="region[{{$cnt}}][mantaghe]">
                                                                        <option value="0">انتخاب همه</option>
                                                                        @foreach($region['shahrestan']->manategh as $mantaghe)
                                                                            <option
                                                                                value="{{$mantaghe->ID}}" {{(isset($region['mantaghe']) && $mantaghe->ID==$region['mantaghe']->ID)?'selected':''}}>{{$mantaghe->Title}}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </div>
                                                            @endif
                                                            @if(isset($region['ostan']) && isset($region['shahrestan']) && isset($region['mantaghe']) && $region['mantaghe']->bakhshs()->count()>0)
                                                                <div class="form-group col-md-3" data-type="3">
                                                                    <label>بخش</label>
                                                                    <select class="select2"
                                                                            name="region[{{$cnt}}][bakhsh]">
                                                                        <option value="0">انتخاب همه</option>
                                                                    @foreach($region['mantaghe']->bakhshs as $bakhsh)
                                                                            <option
                                                                                value="{{$bakhsh->ID}}" {{(isset($region['bakhsh']) && $bakhsh->ID==$region['bakhsh']->ID)?'selected':''}}>{{$bakhsh->Title}}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </div>
                                                            @endif

                                                        <div>
                                                    @endif
                                                </td>
                                                <td><span class="fa fa-minus-circle text-danger delete-user-region"></span></td>
                                            </tr>
                                            @php
                                                $cnt+=1;
                                            @endphp
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                            </div>

                            <div class="col-12 mb-3">
                                <button class="btn btn-primary" id="submit-all" type="submit">
                                    بروزرسانی اطلاعات
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

