@if(isset($files))
    @foreach($files as $file)
        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
            <div class="card app-file-list">
                <div class="app-file-icon">
                    <label class="h-100" for="image-{{$file->file_id}}">
                        {!! $file->preview !!}
                    </label>
                    <input type="checkbox" id="image-{{$file->file_id}}" value="{{$file->file_id}}"
                           {{(isset($new_files) && in_array($file->file_id,$new_files))?'checked':''}} name="checkedMedia[]">
                </div>
                <div class="p-2 small">
                    <div class="file-info-wrapper">
                        <div class="file-info">
                            <p>{{$file->file_name}}</p>
                            <p class="text-muted">{{convert_filesize($file->file_size)}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
@else
    <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
    </div>
@endif
