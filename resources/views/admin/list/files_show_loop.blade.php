@if(!empty($files))
    @foreach($files as $file)
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card app-file-list">
                <div class="app-file-icon">
                    {!! $file->preview !!}
                </div>
                <div class="p-2 small">
                    <div class="file-info-wrapper">
                        <div class="file-info">
                            <p>{{$file->file_name}}</p>
                            <p class="text-muted">{{convert_filesize($file->file_size)}}</p>
                        </div>
                        <div>
                            <div
                                class="dropdown position-absolute bottom-2 right-0 mr-3">
                                <a href="#" class="font-size-14 pl-2 pr-2"
                                   data-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right"
                                     x-placement="bottom-start"
                                     style="position: absolute; transform: translate3d(0px, 50px, 0px); top: 0px; left: 0px; will-change: transform;">
                                    <a href="{{route('admin.file.delete',$file->file_id)}}" class="dropdown-item delete-item">حذف</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
@endif
