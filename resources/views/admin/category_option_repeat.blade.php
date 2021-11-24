<option value="{{$child['term_id']}}" {{($child['term_id']==$select)?'selected':''}}>
    {{str_repeat('-',$level)}}
    {{$child['term_name']}}
</option>
@if(isset($child['children_rec']) && !empty($child['children_rec']))
    @foreach($child['children_rec'] as $new_child)
        @include('admin.category_option_repeat',array('child'=>$new_child,'select'=>$select,'level'=>1+$level))
    @endforeach
@endif
