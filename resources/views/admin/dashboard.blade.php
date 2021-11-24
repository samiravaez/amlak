@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>داشبورد</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">داشبورد</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <canvas id="get_statistics"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <canvas id="get_my_statistics"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title d-md-flex justify-content-between">
                            <span class="d-block">آگهی های جدید</span>
                        </h6>
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="table-responsive" style="overflow: hidden; outline: none;" tabindex="1">
                                    <table class="table table-hover mb-0">
                                        <thead class="thead-light">
                                        <tr>
                                            <th>تاریخ</th>
                                            <th>ثبت شده</th>
                                            <th>در انتظار تایید</th>
                                            <th>تایید شده</th>
                                            <th>رد شده</th>
                                            <th>ویژه</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>امروز</td>
                                            <td>{{$new_adds_statistics['day']['total']}}</td>
                                            <td>{{$new_adds_statistics['day']['waiting-confirm']}}</td>
                                            <td class="text-success">{{$new_adds_statistics['day']['confirm']}}</td>
                                            <td class="text-danger">{{$new_adds_statistics['day']['reject']}}</td>
                                            <td class="text-primary">{{$new_adds_statistics['day']['special']}}</td>
                                        </tr>
                                        <tr>
                                            <td>این هفته</td>
                                            <td>{{$new_adds_statistics['week']['total']}}</td>
                                            <td>{{$new_adds_statistics['week']['waiting-confirm']}}</td>
                                            <td class="text-success">{{$new_adds_statistics['week']['confirm']}}</td>
                                            <td class="text-danger">{{$new_adds_statistics['week']['reject']}}</td>
                                            <td class="text-primary">{{$new_adds_statistics['week']['special']}}</td>
                                        </tr>
                                        <tr>
                                            <td>این ماه</td>
                                            <td>{{$new_adds_statistics['month']['total']}}</td>
                                            <td>{{$new_adds_statistics['month']['waiting-confirm']}}</td>
                                            <td class="text-success">{{$new_adds_statistics['month']['confirm']}}</td>
                                            <td class="text-danger">{{$new_adds_statistics['month']['reject']}}</td>
                                            <td class="text-primary">{{$new_adds_statistics['month']['special']}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title d-md-flex justify-content-between">
                            <span class="d-block">آگهی های به روز شده</span>
                        </h6>
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="table-responsive" style="overflow: hidden; outline: none;" tabindex="1">
                                    <table class="table table-hover mb-0">
                                        <thead class="thead-light">
                                        <tr>
                                            <th>تاریخ</th>
                                            <th>ثبت شده</th>
                                            <th>در انتظار تایید</th>
                                            <th>تایید شده</th>
                                            <th>رد شده</th>
                                            <th>ویژه</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>امروز</td>
                                            <td>{{$update_adds_statistics['day']['total']}}</td>
                                            <td>{{$update_adds_statistics['day']['waiting-confirm']}}</td>
                                            <td class="text-success">{{$update_adds_statistics['day']['confirm']}}</td>
                                            <td class="text-danger">{{$update_adds_statistics['day']['reject']}}</td>
                                            <td class="text-primary">{{$update_adds_statistics['day']['special']}}</td>
                                        </tr>
                                        <tr>
                                            <td>این هفته</td>
                                            <td>{{$update_adds_statistics['week']['total']}}</td>
                                            <td>{{$update_adds_statistics['week']['waiting-confirm']}}</td>
                                            <td class="text-success">{{$update_adds_statistics['week']['confirm']}}</td>
                                            <td class="text-danger">{{$update_adds_statistics['week']['reject']}}</td>
                                            <td class="text-primary">{{$update_adds_statistics['week']['special']}}</td>
                                        </tr>
                                        <tr>
                                            <td>این ماه</td>
                                            <td>{{$update_adds_statistics['month']['total']}}</td>
                                            <td>{{$update_adds_statistics['month']['waiting-confirm']}}</td>
                                            <td class="text-success">{{$update_adds_statistics['month']['confirm']}}</td>
                                            <td class="text-danger">{{$update_adds_statistics['month']['reject']}}</td>
                                            <td class="text-primary">{{$update_adds_statistics['month']['special']}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <script src="<?php echo url('')?>/vendors/charts/chartjs/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js"></script>
    <script>
        $(document).ready(function () {
            $.ajax({
                type: 'get',
                url: '{{route("get_statistics")}}',
                dataType: 'json',
                success: function (response) {
                    if (response) {
                        var data = {
                            datasets: [{
                                data: response.region_adds.data,
                                backgroundColor: response.region_adds.colors
                            }],

                            labels: response.region_adds.labels
                        };
                        var myPieChart = new Chart($('#get_statistics'), {
                            type: 'pie',
                            data: data,
                            options: {
                                title: {
                                    display: true,
                                    text: 'مجموع آگهی های ثبت شده: ' + response.all
                                }
                            },
                        });
                    }
                }
            })
            $.ajax({
                type: 'get',
                url: '{{route("get_my_statistics")}}',
                dataType: 'json',
                success: function (response) {
                    if (response) {
                        var data = {
                            datasets: [{
                                data: response.region_adds.data,
                                backgroundColor: response.region_adds.colors
                            }],

                            labels: response.region_adds.labels
                        };
                        var myPieChart = new Chart($('#get_my_statistics'), {
                            type: 'pie',
                            data: data,
                            options: {
                                title: {
                                    display: true,
                                    text: 'مجموع آگهی های من: ' + response.all
                                }
                            },
                        });
                    }
                }
            })
        })
    </script>
@endsection
