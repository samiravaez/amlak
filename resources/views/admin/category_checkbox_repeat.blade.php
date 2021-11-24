<div class="form-check" style="padding-right:<?php echo 10*$cnt?>px">
    <input name="terms[]" type="checkbox" value="<?php echo $term['term_id']?>" <?php echo ($values && isset($values) && in_array($term['term_id'],$values))?'checked':'' ?> id="terms[<?php echo $term['term_id']?>]">
    <label class="form-check-label" for="terms[<?php echo $term['term_id']?>]">
        <?php echo $term['term_name']?>
    </label>
</div>
@if (isset($term['children_rec']) && !empty($term['children_rec']))
    @foreach($term['children_rec'] as $new_term)
        @include('admin.category_checkbox_repeat',array('term'=>$new_term,'values'=>$values,'cnt'=>1+$cnt,'term_type'=>$term_type))
    @endforeach
@endif
