@extends('admin.main')

@section('content')
    <form action="" method="post">
        {{csrf_field()}}
        @include('layouts.messages')
        <div class="card bg-light toggle-card">
            <div class="card-header bg-primary text-light">
                مشخصات مشتری
                <i class="fas fa-angle-up toggle"></i>
            </div>
            <div class="card-body">
                <div class="col-md-6 mx-auto">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <th>نام</th>
                            <td>{{$customer->name}}</td>
                        </tr>
                        <tr>
                            <th>شماره تماس</th>
                            <td>{{$customer->phone}}</td>
                        </tr>
                        <tr>
                            <th>ایمیل</th>
                            <td>{{$customer->email}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div class="card bg-white toggle-card">
            <div class="card-header bg-primary text-light">
                انتخاب ناحیه
                <i class="fas fa-angle-up toggle"></i>
            </div>
            @php
                if(isset($crm)){
                    $cnt=0;
                    $regions=$crm->region;
                }
            @endphp
            <div class="card-body">
                <div class="col-12">
                    <table class="table table-bordered table-striped table-primary" id="user-regions">
                        <thead>
                        <tr>
                            <th>انتخاب محدوده</th>
                            <th>
                                <span class="fa fa-plus-circle text-success" id="add-user-regions" data-rows="{{isset($regions)?max(count($regions)-1,0):0}}"></span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            @if(isset($crm))
                                @if(isset($regions))
                                    @foreach($regions as $region)
                                    <tr>
                                        <td>
                                            <div class="form-row" data-num="{{$cnt}}">
                                                <div class="form-group col-md-3" data-type="0">
                                                    <label>استان</label>
                                                    <select class="ostan-change-step select2" name="region[{{$cnt}}][ostan]">
                                                        <option value="0">انتخاب همه</option>
                                                        @foreach($ostans as $option)
                                                            <option value="{{$option->ID}}" {{(isset($region['ostan']) && $option->ID==$region['ostan']->ID)?'selected':''}}>{{$option->Title}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                                @if(isset($region['ostan']) && $region['ostan']->shahrestans()->get()->count()>0)
                                                <div class="form-group col-md-3" data-type="1">
                                                    <label>شهر</label>
                                                    <select class="shahrestan-change-step select2" name="region[{{$cnt}}][shahrestan]">
                                                        <option value="0">انتخاب همه</option>
                                                        @foreach($region['ostan']->shahrestans as $option)
                                                            <option value="{{$option->ID}}" {{(isset($region['shahrestan']) && $option->ID==$region['shahrestan']->ID)?'selected':''}}>{{$option->Title}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                                @endif
                                                @if(isset($region['shahrestan']) && $region['shahrestan']->manategh()->get()->count()>0)
                                                    <div class="form-group col-md-3" data-type="2">
                                                        <label>منطقه</label>
                                                        <select class="mantaghe-change-step select2" name="region[{{$cnt}}][mantaghe]">
                                                            <option value="0">انتخاب همه</option>
                                                            @foreach($region['shahrestan']->manategh as $option)
                                                                <option value="{{$option->ID}}" {{(isset($region['mantaghe']) && $option->ID==$region['mantaghe']->ID)?'selected':''}}>{{$option->Title}}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                @endif
                                                @if(isset($region['mantaghe']) && $region['mantaghe']->bakhshs()->get()->count()>0)
                                                    <div class="form-group col-md-3" data-type="3">
                                                        <label>بخش</label>
                                                        <select class="select2" name="region[{{$cnt}}][bakhsh]">
                                                            <option value="0">انتخاب همه</option>
                                                            @foreach($region['mantaghe']->bakhshs as $option)
                                                                <option value="{{$option->ID}}" {{(isset($region['bakhsh']) && $option->ID==$region['bakhsh']->ID)?'selected':''}}>{{$option->Title}}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                @endif
                                            </div>
                                        </td>
                                        <td><span class="fa fa-minus-circle text-danger delete-user-region"></span></td>
                                    </tr>
                                    @php
                                        $cnt++;
                                    @endphp
                                @endforeach
                                @endif
                            @endif
                        </tbody>
                    </table>
                </div>
{{--                @if(isset($crm))--}}
{{--                    <td>--}}
{{--                        @foreach($crm->ostans as $ostan)--}}
{{--                            {{$ostan->shahrestans()->get()}}--}}
{{--                        @endforeach--}}
{{--                    </td>--}}
{{--                @endif--}}

{{--                <div class="form-row" data-num>--}}
{{--                    <div class="form-group col-md-3" data-type="0">--}}
{{--                        <label>استان</label>--}}
{{--                        <select class="ostan-change-step select2" name="metas[region][][ostan]" data-adds_meta>--}}
{{--                            <option value="0">همه موارد</option>--}}
{{--                            @foreach($ostans as $ostan)--}}
{{--                                <option value="{{$ostan->ID}}" {{(isset($selected_ostan) && $selected_ostan==$ostan->ID)?'selected':''}}>{{$ostan->Title}}</option>--}}
{{--                            @endforeach--}}
{{--                        </select>--}}
{{--                    </div>--}}
{{--                </div>--}}
            </div>
        </div>

        <div class="card bg-white toggle-card">
            <div class="card-header bg-primary text-light">
                نوع ملک درخواستی
                <i class="fas fa-angle-up toggle"></i>
            </div>
            @php
                if(isset($crm))
                    $crm_land_types=$crm->getMeta('land_type');
                $first_land_type=true;
            @endphp
            <div class="card-body">
                <div class="form-row">
                    <div class="col-md-12">
                        @if(isset($land_types))
                            <div class="form-group">
                                @foreach($land_types as $land_type)
                                    <div class="form-check form-check-inline mb-3">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="{{$land_type['term_id']}}" name="metas[land_type][]" data-tab="land_type_{{$land_type['term_id']}}_tab" {{isset($crm_land_types) && in_array($land_type['term_id'],$crm_land_types)?'checked':''}}>
                                            {{$land_type['term_name']}}
                                        </label>
                                    </div>
                                @endforeach
                                <a class="btn btn-outline-secondary float-right mx-3" data-toggle="collapse" href="#land_types_detail" role="button" aria-expanded="false" aria-controls="land_types_detail">
                                    جستجوی پیشرفته
                                </a>
                            </div>
                        @endif
                        @if(isset($land_types))
                            <div id="land_types_detail" class="collapse border-0">
                                <ul class="nav nav-tabs mb-3" id="land_types_tab" role="tablist">
                                    @foreach($land_types as $land_type)
                                        @if(isset($land_type['termmetas']))
                                            @php
                                                $relate_fields=filter_by_value($land_type['termmetas'],'meta_key','relate_fields');
                                                if(!empty($relate_fields)){
                                                    $termmetas[$land_type['term_id']]=json_decode($relate_fields[0]['meta_value'],true);
                                                }
                                            @endphp
                                        @endif
                                        <li class="nav-item">
                                            <a class="nav-link {{isset($crm_land_types) && in_array($land_type['term_id'],$crm_land_types)?'':'disabled'}} {{$first_land_type?'show active':''}}"
                                               id="land_type_{{$land_type['term_id']}}_tab" data-toggle="pill"
                                               href="#land_type_{{$land_type['term_id']}}" role="tab"
                                               aria-controls="land_type_{{$land_type['term_id']}}"
                                               aria-selected="false">{{$land_type['term_name']}}</a>
                                            @php
                                                if($first_land_type){
                                                    $first_land_type=false;
                                                }
                                            @endphp
                                        </li>
                                    @endforeach
                                </ul>
                                <div class="tab-content">
                                    @php
                                        $first_land_type=true;
                                    @endphp
                                    @foreach($land_types as $index=>$land_type)
                                        <div class="tab-pane {{$first_land_type?'show active':''}}"
                                             id="land_type_{{$land_type['term_id']}}" role="tabpanel"
                                             aria-labelledby="land_type_{{$land_type['term_id']}}_tab">
                                            @php
                                                if($first_land_type){
                                                    $first_land_type=false;
                                                }
                                            @endphp
                                            <div class="form-row">
                                                @if(isset($termmetas) && isset($termmetas[$land_type['term_id']]))
                                                    @foreach($termmetas[$land_type['term_id']] as $val)
                                                        @php
                                                            if (isset($val['choices'])){
                                                                $val['choices']=json_decode($val['choices'],true);
                                                            }
                                                            if (isset($val['crm']) && $val['crm']!==false){
                                                                $val=array_merge($val,$val['crm']);
                                                            }
                                                            if(isset($crm))
                                                                $meta_value=$crm->getMeta($val['id']);
                                                            else
                                                                $meta_value=false;
                                                            $val['related-to']="[land_type][".$land_type['term_id']."]";
                                                            if(!isset($val['crm']) || $val['crm']!==false){
                                                            echo '<div class="col-md-6">';
                                                            echo \App\Classes\OptionTree::showSetting($val,$meta_value,false,true);
                                                            echo '</div>';
                                                            }
                                                        @endphp
                                                    @endforeach
                                                @endif
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-white toggle-card">
            <div class="card-header bg-primary text-light">
                تعیین نوع معامله
                <i class="fas fa-angle-up toggle"></i>
            </div>
            @php
                if(isset($crm))
                    $crm_transactions=$crm->getMeta('transaction');
                $first_transaction=true;
            @endphp
            <div class="card-body">
                <div class="form-row">
                    <div class="col-md-12">
                        @if(isset($transactions))
                            <div class="form-group">
                                @foreach($transactions as $transaction)
                                    <div class="form-check form-check-inline mb-3">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="{{$transaction['term_id']}}" name="metas[transaction][]" data-tab="transaction_{{$transaction['term_id']}}_tab" {{isset($crm_transactions) && in_array($transaction['term_id'],$crm_transactions)?'checked':''}}>
                                            {{$transaction['term_name']}}
                                        </label>
                                    </div>
                                @endforeach
                                <a class="btn btn-outline-secondary float-right mx-3" data-toggle="collapse" href="#transactions_detail" role="button" aria-expanded="false" aria-controls="transactions_detail">
                                    جستجوی پیشرفته
                                </a>
                            </div>
                        @endif
                        @if(isset($transactions))
                            <div id="transactions_detail" class="collapse border-0">
                                <ul class="nav nav-tabs mb-3" id="transactions_tab" role="tablist">
                                    @foreach($transactions as $transaction)
                                        @if(isset($transaction['termmetas']))
                                            @php
                                                $relate_fields=filter_by_value($transaction['termmetas'],'meta_key','relate_fields');
                                                if(!empty($relate_fields)){
                                                    //dump($relate_fields[0]['meta_value']);
                                                    $termmetas[$transaction['term_id']]=json_decode($relate_fields[0]['meta_value'],true);
                                                }
                                            @endphp
                                        @endif
                                        <li class="nav-item">
                                            <a class="nav-link {{isset($crm_transactions) && in_array($transaction['term_id'],$crm_transactions)?'':'disabled'}} {{$first_transaction?'show active':''}}"
                                               id="transaction_{{$transaction['term_id']}}_tab" data-toggle="pill"
                                               href="#transaction_{{$transaction['term_id']}}" role="tab"
                                               aria-controls="transaction_{{$transaction['term_id']}}"
                                               aria-selected="false">{{$transaction['term_name']}}</a>
                                            @php
                                                if($first_transaction){
                                                    $first_transaction=false;
                                                }
                                            @endphp
                                        </li>
                                    @endforeach
                                </ul>
                                <div class="tab-content">
                                    @php
                                        $first_transaction=true;
                                    @endphp
                                    @foreach($transactions as $index=>$transaction)
                                        <div class="tab-pane {{$first_transaction?'show active':''}}"
                                             id="transaction_{{$transaction['term_id']}}" role="tabpanel"
                                             aria-labelledby="transaction_{{$transaction['term_id']}}_tab">
                                            @php
                                                if($first_transaction){
                                                    $first_transaction=false;
                                                }
                                            @endphp
                                            <div class="form-row">
                                                @if(isset($termmetas) && isset($termmetas[$transaction['term_id']]))
                                                    @foreach($termmetas[$transaction['term_id']] as $val)
                                                        @php
                                                            if (isset($val['choices'])){
                                                                $val['choices']=json_decode($val['choices'],true);
                                                            }
                                                            if (isset($val['crm']) && $val['crm']!=false){
                                                                if(!is_array($val['crm'])){
                                                                    $val['crm']=json_decode($val['crm'],true);
                                                                }
                                                                $val=array_merge($val,$val['crm']);
                                                            }
                                                            if(isset($crm))
                                                                $meta_value=$crm->getMeta($val['id']);
                                                            else
                                                                $meta_value=false;
                                                            $val['related-to']="[transaction][".$transaction['term_id']."]";
                                                            if(!isset($val['crm']) || $val['crm']!==false){
                                                                echo '<div class="col-md-6">';
                                                                echo \App\Classes\OptionTree::showSetting($val,$meta_value,false,true);
                                                                echo '</div>';
                                                            }
                                                        @endphp
                                                    @endforeach
                                                @endif
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>

        {!! $termAndMetaHtml !!}

        <div class="card bg-light toggle-card">
            <div class="card-header bg-primary text-light">
                سایر اطلاعات مشتری
                <i class="fas fa-angle-up toggle"></i>
            </div>
            <div class="card-body">
                <div class="form-row">
                    @if(isset($pay_method))
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="pay_method">نحوه پرداخت</label>
                                <select id="pay_method" class="form-control" name="main[pay_method]">
                                    @foreach($pay_method as $index=>$value)
                                        <option value="{{$index}}" {{(isset($crm) && $crm->pay_method==$index)?'selected':''}}>{{$value}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    @endif
                    @if(isset($customer_type))
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="customer_type">نوع مشتری</label>
                                <select id="customer_type" class="form-control" name="main[customer_type]">
                                    @foreach($customer_type as $index=>$value)
                                        <option value="{{$index}}" {{(isset($crm) && $crm->customer_type==$index)?'selected':''}}>{{$value}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    @endif
                    @if(isset($talking))
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="talking">نوع مشاوره اولیه</label>
                                <select id="talking" class="form-control" name="main[talking]">
                                    @foreach($talking as $index=>$value)
                                        <option value="{{$index}}" {{(isset($crm) && $crm->talking==$index)?'selected':''}}>{{$value}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    @endif
                    @if(isset($purchage_state))
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="purchase_stage">مرحله خرید</label>
                                <select id="purchase_stage" class="form-control" name="main[purchase_stage]">
                                    @foreach($purchage_state as $index=>$value)
                                        <option value="{{$index}}" {{(isset($crm) && $crm->purchase_stage==$index)?'selected':''}}>{{$value}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    @endif
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>توضیحات بیشتر</label>
                                <textarea name="main[description]">{{isset($crm)?($crm->description):''}}</textarea>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="{{isset($crm)?'ذخیره تغییرات':'ثبت مشتری'}}">
        </div>
    </form>

@endsection
