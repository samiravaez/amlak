<tr>
    <td>
        {{str_repeat('-',$level)}}
        {{$child['term_name']}}
    </td>
    <td>{{$child['term_slug']}}</td>
    <td>{!! $child['term_description'] !!}</td>
    <td>
        <div class="btn-group">
            <a href="{{route($expressions['posts_edit_route'],$child['term_id'])}}"
               class="btn btn-outline-secondary" type="button"><i
                    class="fa fa-edit"></i></a>
            <a href="{{route($expressions['posts_delete_route'],$child['term_id'])}}"
               class="btn btn-outline-danger delete-item" type="button"><i
                    class="fa fa-trash"></i></a>
        </div>
    </td>
</tr>
@if(isset($child['children_rec']) && !empty($child['children_rec']))
    @foreach($child['children_rec'] as $new_child)
        @include('admin.category_table_repeat',array('child'=>$new_child,'level'=>1+$level,'expressions'=>$expressions))
    @endforeach
@endif
