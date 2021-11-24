<?php
namespace App\Classes;

use App\Http\Controllers\Admin\LandTypeController;
use App\Http\Controllers\Admin\TransactionController;
use App\Models\File;
use App\Models\Metabox;
use App\Models\Option;
use App\Models\Post;
use App\Models\Term;
use App\Models\Term_type;
use App\Models\Termmeta;
use Carbon\Carbon;
use Morilog\Jalali\Jalalian;

class OptionTree{

    public static function getOption($option_name,$type=false)
    {
        $option=Option::firstWhere('name',$option_name);
        if ($option)
            if(!$type){
                return $option->value;
            }else{
                if($type=='image'){
                    $img=File::find($option->value);
                    if($img){
                        return $img->url;
                    }else{
                        return false;
                    }
                }
            }
        else
            return false;
    }

    public static function showSetting($option, $option_value = false,$from_list=false,$post_meta=false,$post=false,$crm=false)
    {
//        die(json_encode(array(
//            'a'=>'علی',
//            'b'=>'حسن'
//        ),JSON_UNESCAPED_UNICODE));
//        dd(json_encode(
//            array(
//                array(
//                    'id' => 'presell_delivery_time',
//                    'type' => 'date',
//                    'label' => 'زمان تحویل',
//                    'crm' => array(
//                        "search-mode" => true,
//                        "search-type" => "from-to"
//                    )
//                ),
//                array(
//                    'id' => 'presell_progress_percentage',
//                    'type' => 'number',
//                    'label' => 'درصد پیشرفت',
//                    'crm' => array(
//                        "search-mode" => true,
//                        "search-type" => "from-to"
//                    )
//                ),
//                array(
//                    'id' => 'presell_price',
//                    'type' => 'number',
//                    'label' => 'قیمت ملک',
//                    'crm' => array(
//                        "search-mode" => true,
//                        "search-type" => "from-to"
//                    )
//                ),
//            ), true));
        ob_start();
        $html='';
        if (isset($option['type'])) {
            $option_type = $option['type'];
            $main_option=$option['id'];
            if (!$from_list) {
                if ($post_meta){
                    $prefix='metas';
                }else{
                    $prefix='options';
                }

                if (isset($option['related-to'])){
                    $prefix=$prefix."[related-to]".$option['related-to'];
                }


                $option['id']=$prefix."[".$option['id']."]";

            }
            ?>
                <?php
                switch ($option_type) {
                    case 'text':
                        ?>
                        <div class="form-group">
                            <?php
                            if (isset($option['label'])) {
                                ?>
                                <label for="<?php echo $option['id'] ?>">
                                    <?php if (isset($option['search-mode']) && $option['search-mode']):?>
                                        <input type="checkbox" class="switch-select" <?php echo $option_value?'checked':''?>>
                                    <?php endif;?>
                                    <?php echo $option['label'] ?>
                                </label>
                            <?php }?>
                            <?php
                            $std = isset($option['std']) ? $option['std'] : false;
                            $val = ($option_value) ? $option_value : $std; ?>
                            <input type="text" class="form-control" id="<?php echo $option['id'] ?>" <?php echo ((isset($option['search-mode']) && $option['search-mode'])?'disabled':'')?>
                                   name="<?php echo $option['id'] ?>" value='<?php echo ($val)?$val:'' ?>'>
                            <?php
                            if (isset($option['description'])) {
                                ?>
                                <small class="form-text text-muted"><?php echo $option['description'] ?></small>
                                <?php
                            }
                            ?>
                        </div>
                        <?php
                        break;
                    case 'number':
                        if(isset($option['search-mode']) && $option['search-mode']) {
                            ?>
                        <div class="form-group">
                            <?php if (isset($option['label'])) {?>
                                <label for="<?php echo $option['id'] ?>">
                                    <?php if (isset($option['search-mode']) && $option['search-mode']):?>
                                        <input type="checkbox" class="switch-select" <?php echo $option_value?'checked':''?>>
                                    <?php endif;?>
                                    <?php echo $option['label'] ?>
                                </label>
                            <?php }?>
                            <div class="form-row">
                                <div class="col-md-6 px-0">
                                    <input type="number" class="form-control" placeholder="از" name="<?php echo $option['id'] ?>[from]" value="<?php echo ($option_value && isset($option_value['from']))?$option_value['from']:''?>" <?php echo $option_value?'data-status="1"':'disabled'?>>
                                    <small class="form-text text-muted"><?php echo ($option_value && isset($option_value['from']))?number_format($option_value['from']):''?></small>
                                </div>
                                <div class="col-md-6 px-0 my-md-0 my-1">
                                    <input type="number" class="form-control ml-md-1" placeholder="تا" name="<?php echo $option['id'] ?>[to]" value="<?php echo ($option_value && isset($option_value['to']))?$option_value['to']:''?>" <?php echo $option_value?'data-status="1"':'disabled'?>>
                                    <small class="form-text text-muted"><?php echo ($option_value && isset($option_value['to']))?number_format($option_value['to']):''?></small>
                                </div>
                            </div>
                        </div>
                            <?php
                        }else{
                            ?>
                        <div class="form-group">
                            <?php
                            if (isset($option['label'])) {
                                ?>
                                <label for="<?php echo $option['id'] ?>">
                                    <?php if (isset($option['search-mode']) && $option['search-mode']):?>
                                        <input type="checkbox" class="switch-select">
                                    <?php endif;?>
                                    <?php echo $option['label'] ?>
                                </label>
                            <?php }?>
                            <?php
                            $std = isset($option['std']) ? $option['std'] : false;
                            $val = ($option_value) ? $option_value : $std; ?>
                            <input type="number" class="form-control" id="<?php echo $option['id'] ?>" <?php echo ((isset($option['search-mode']) && $option['search-mode'])?'disabled':'')?>
                                   name="<?php echo $option['id'] ?>" value='<?php echo ($val)?$val:'' ?>'>
                            <small class="form-text text-muted"><?php echo ($val)?number_format($val):'' ?></small>
                            <?php
                            if (isset($option['description'])) {
                                ?>
                                <small class="form-text text-muted"><?php echo $option['description'] ?></small>
                                <?php
                            }
                            ?>
                        </div>
                        <?php
                        }
                        break;
                    case 'textarea':
                        ?>
                        <div class="form-group">
                            <?php
                            if (isset($option['label'])) {
                                ?>
                                <label for="<?php echo $option['id'] ?>"><?php echo $option['label'] ?></label>
                            <?php }; ?>
                            <?php $std = isset($option['std']) ? $option['std'] : false;
                            $val = ($option_value) ? $option_value : $std; ?>
                            <textarea class="form-control" id="<?php echo $option['id'] ?>" name="<?php echo $option['id'] ?>"
                                      placeholder="<?php echo isset($option['description'])?$option['description']:'' ?>"><?php echo ($val)?$val:'' ?></textarea>
                        </div>
                        <?php
                        break;
                    case 'on-off':
                        if(isset($option['search-mode']) && $option['search-mode']) {
                            ?>
                            <div class="form-group <?php echo isset($option['class'])?$option['class']:'';?>">
                                <input type="checkbox" class="switch-select" name="<?php echo $option['id'] ?>" id="<?php echo $option['id'] ?>" value="on">
                                <label for="<?php echo $option['id'] ?>"><?php echo $option['label'];?></label>
                            </div>
                            <?php
                        }else{
                        ?>
                        <div class="form-group <?php echo isset($option['class'])?$option['class']:'';?>">
                            <label class="d-flex">
                                <?php if (isset($option['description'])) { ?>
                                    <p><small><?php echo $option['description'] ?></small></p>
                                <?php } ?>
                                <div class="mr-1 ml-2">
                                    <?php $init = (isset($option['std']) && $option['std'] == 'on') ? 'on' : 'off';$val=($option_value) ? $option_value : $init;; ?>
                                    <label class="switch-option <?php echo ($val=='on')?'switch-option-on':''?>">
                                        <input type="radio" name="<?php echo $option['id'] ?>" data-toggle="toggle" value="on" <?php echo ($val=='on')?'checked':''?>>
                                        on
                                    </label>
                                    <label class="switch-option <?php echo ($val=='off')?'switch-option-off':''?>">
                                        <input type="radio" name="<?php echo $option['id'] ?>" data-toggle="toggle" value="off" <?php echo ($val=='off')?'checked':''?>>
                                        off
                                    </label>
                                </div>
                                <?php if (isset($option['label'])) { ?>
                                    <p class="ml-1"><?php echo $option['label'] ?></p>
                                <?php } ?>
                            </label>
                        </div>
                        <?php
                        }
                        break;
                    case 'select':
                        if (isset($option['choices'])) {
                            $choices = $option['choices'];
                            ?>
                            <div class="form-group">
                                <?php if (isset($option['label'])) { ?>
                                    <label for="<?php echo $option['id'] ?>">
                                        <?php if (isset($option['search-mode']) && $option['search-mode']):?>
                                        <input type="checkbox" class="switch-select" <?php echo (isset($option_value) && $option_value!==false)?'checked':''?>>
                                        <?php endif;?>
                                        <?php echo $option['label'] ?>
                                    </label>
                                <?php } ?>
                                <select class="select2" name="<?php echo $option['id'] ?><?php echo (isset($option['multiple']) && $option['multiple'])?'[]':''?>" <?php echo (isset($option['multiple']) && $option['multiple'])?'multiple':''?> id="<?php echo $option['id'] ?>" <?php echo (isset($option['crm']) && $option_value)?'data-status="1"':''?> <?php echo ((isset($option['search-mode']) && $option['search-mode']) && (!isset($option_value) || $option_value===false))?'disabled':''?>>
                                    <?php
                                    if (isset($choices) && is_array($choices) && !empty($choices)){
                                        foreach ($choices as $index => $val) {
                                            $std = (isset($tree['std'])) ? $tree['std'] : '';
                                            $std = ($option_value) ? $option_value : $std;
                                            if(is_array($std)){
                                                $selected = in_array($index,$std) ? 'selected' : '';
                                            }else{
                                                $selected = ($std == $index) ? 'selected' : '';
                                            }
                                            ?>
                                            <option
                                                value="<?php echo $index ?>" <?php echo $selected ?>><?php echo $val; ?></option>
                                            <?php
                                        }
                                    }
                                    ?>
                                </select>
                                <?php if (isset($tree['description'])) { ?>
                                    <small><?php echo $tree['description'] ?></small>
                                <?php } ?>
                            </div>
                            <?php
                        }
                        break;
                    case 'image':
                        ?>
                        <div class="form-group">
                            <?php if (isset($option['label'])): ?>
                                <label><?php echo $option['label'] ?></label>
                            <?php endif; ?>
                            <div class="card">
                                <div class="card-header">
                                    <?php echo (isset($option['description'])) ? $option['description'] : 'تصویر خود را آپلود کنید'; ?>
                                    <a type="button" data-toggle="modal" data-target="#tabtarh-lib">
                                        <i class="fas fa-cloud-upload-alt"></i>
                                    </a>
                                    <input type="hidden" class="tbt-hide single-file" name="<?php echo $option['id'] ?>" data-className="<?php echo isset($option['class'])?$option['class']:''?>"
                                           value="<?php echo($option_value ? explode(',', $option_value)[0] : '') ?>">
                                </div>
                                <div class="card-body d-flex flex-wrap">
                                    <?php $option_array=explode(',',$option_value);if (!empty($option_array)){?>
                                        <?php foreach ($option_array as $option_item){?>
                                            <?php $file=File::find($option_item);if ($file){?>
                                                <div class="download-item col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                                    <div class="card app-file-list">
                                                        <div class="app-file-icon">
                                                            <?php echo $file->preview?>
                                                        </div>
                                                    </div>
                                                    <i class="fas fa-times"></i></div>
                                            <?php }?>
                                        <?php }?>
                                    <?php }?>
                                </div>
                            </div>
                        </div>
                        <?php
                        break;
                    case 'gallery':
                        ?>
                        <div class="form-group">
                            <?php if (isset($option['label'])): ?>
                                <label><?php echo $option['label'] ?></label>
                            <?php endif; ?>
                            <div class="card">
                                <div class="card-header">
                                    <?php echo (isset($option['description'])) ? $option['description'] : 'تصویر خود را آپلود کنید'; ?>
                                    <a type="button" data-toggle="modal" data-target="#tabtarh-lib">
                                        <i class="fas fa-cloud-upload-alt"></i>
                                    </a>
                                    <input type="hidden" class="tbt-hide" name="<?php echo $option['id'] ?>" data-className="<?php echo isset($option['class'])?$option['class']:''?>"
                                           value="<?php echo($option_value ? $option_value : '') ?>">
                                </div>
                                <div class="card-body d-flex flex-wrap">
                                    <?php $option_array=explode(',',$option_value);if (!empty($option_array)){?>
                                        <?php foreach ($option_array as $option_item){?>
                                            <?php $file=File::find($option_item);if ($file){?>
                                                <div class="download-item col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                                    <div class="card app-file-list">
                                                        <div class="app-file-icon">
                                                            <?php echo $file->preview?>
                                                        </div>
                                                    </div>
                                                    <i class="fas fa-times"></i></div>
                                            <?php }?>
                                        <?php }?>
                                    <?php }?>
                                </div>
                            </div>
                        </div>
                        <?php
                        break;
                    case 'list-item':
                        if ($option_value) {
                            $option_value = json_decode($option_value, true);
                        }
                        ?>
                        <div class="form-group">
                            <?php if (isset($option['label'])):
                                ?>
                                <label><?php echo $option['label'] ?></label>
                                <input type="hidden" name="<?php echo $option['id']?>" value=''>
                            <?php endif; ?>
                            <div class="card toggle-card">
                                <div class="card-header">
                                    <?php echo (isset($option['description'])) ? $option['description'] : 'لیست دلخواه خود را ایجاد کنید'; ?>
                                    <span type="button" data-list="<?php echo $main_option?>" data-list-count="<?php echo ($option_value)?count($option_value):0?>"
                                          data-option='<?php echo json_encode($option,true)?>' class="fas fa-plus add-list-item <?php echo ($post_meta)?'add-post-meta':'add-option';?> btn-sm btn-info rounded-circle"></span>
                                </div>
                                <div class="card-body">
                                    <?php if ($option_value && !empty($option_value)){?>
                                        <?php $cnt = 0;
                                        foreach ($option_value as $list_item) {
                                            echo self::addOptionToListItem($option,$list_item,$cnt,$post_meta);
                                            $cnt++;
                                        } ?>
                                    <?php }?>
                                </div>
                            </div>
                        </div>
                        <?php
                        break;
                    case 'icon-select':
                        ?>
                        <div class="form-group">
                            <?php
                            if (isset($option['label'])) {
                                ?>
                                <label for="<?php echo $option['id'] ?>"><?php echo $option['label'] ?></label>
                            <?php }?>
                            <?php
                            $std = isset($option['std']) ? $option['std'] : false;
                            $val = ($option_value) ? $option_value : $std; ?>
                            <button role="iconpicker" data-icon="<?php echo ($val)?$val:'' ?>" name="<?php echo $option['id'] ?>" id="<?php echo $option['id'] ?>" style="background: #e1e0ea;border: 1px solid #d6d4d4;"></button>
                        </div>
                        <?php
                        break;
                    case 'term-select':
                        if (isset($option['term_type'])) {
                            $term_type = $option['term_type'];
                            $filter_by_array=(isset($option['filter_by_array']))?$option['filter_by_array']:false;
                            $terms=static::getTerms($term_type,false,$filter_by_array);
                            $std = (isset($tree['std'])) ? $tree['std'] : '';
                            $std = ($option_value) ? $option_value : $std;
                            if(isset($option['multiple']) && $option['multiple']){
                                $std=json_decode($std);
                            }
                            $relate_fields=static::has_relate_fields($term_type,(intval($std)>0)?$std:$terms->first()->term_id);
                            $relate_fields_array=json_decode($relate_fields,true);
                            ?>
                            <div class="form-group <?php echo isset($option['wrapper_class'])?$option['wrapper_class']:'';?>">
                                <?php if (isset($option['label'])) { ?>
                                    <label for="<?php echo $option['id'] ?>"><?php echo $option['label'] ?></label>
                                <?php } ?>

                                <select class="select2 form-control <?php if (isset($option['show_related']) && !$option['show_related']) echo '';else echo ($crm)?'related-crm-terms':'relate-terms' ?>" name="<?php echo $option['id'] ?><?php echo (isset($option['multiple']) && $option['multiple'])?'[]':''?>" <?php echo (isset($option['multiple']) && $option['multiple'])?'multiple':''?> id="<?php echo $option['id'] ?>" <?php echo ($post)?"data-post=$post->postId":""?>>
                                    <?php
                                    foreach ($terms as $term) {
                                        if(isset($option['multiple']) && $option['multiple']){
                                            $selected=(is_array($std) && in_array($term->term_id,$std)) ? 'selected' : '';
                                        }else{
                                            $selected = ($std == $term->term_id) ? 'selected' : '';
                                        }
                                        ?>
                                        <option
                                            value="<?php echo $term->term_id ?>" <?php echo $selected ?>><?php echo $term->term_name; ?></option>
                                        <?php
                                    }
                                    ?>
                                </select>

                                <?php if (isset($tree['description'])) { ?>
                                    <small><?php echo $tree['description'] ?></small>
                                <?php } ?>
                                <?php if(!isset($option['show_related']) || $option['show_related']){?>
                                <div class="related-metas">
                                    <?php
                                    if (!empty($relate_fields_array)){
                                        foreach ($relate_fields_array as $field){
                                            $field_value=($post)?$post->postmetas()->firstWhere('meta_key', $field['id']):false;
                                            $default_value_object=($post)?$post->postmetas()->firstWhere('meta_key', $term_type::$term_type):false;
                                            if($std!='')
                                                $default_value=$default_value_object->meta_value;
                                            else
                                                $default_value=$terms->first()->term_id;

                                            if (isset($field['type']) && $field['type']=='select'){
                                                if (isset($field['choices'])){
                                                    $field['choices']=json_decode($field['choices'],JSON_UNESCAPED_UNICODE);
                                                }else{
                                                    $field['choices']=array();
                                                }
                                            }

                                            $field['related-to']="[".$term_type::$term_type."][".$default_value."]";
                                            if($crm){
                                                if (isset($field['crm'])){
                                                    $field=array_merge($field,$field['crm']);
                                                }
                                            }

                                            echo static::showSetting($field,$field_value?$field_value->meta_value:false,false,true,$post,$crm);

                                        }
                                    }
                                    ?>
                                </div>
                                <?php } ?>
                            </div>
                            <?php
                        }

                        break;
                    case 'year-from':
                        $current_year = Jalalian::fromCarbon(Carbon::now())->getYear();
                        $start=isset($option['start'])?intval($option['start']):$current_year-10;
                        ?>
                        <div class="form-group">
                            <?php if (isset($option['label'])) { ?>
                                <label for="<?php echo $option['id'] ?>">
                                    <?php if (isset($option['search-mode']) && $option['search-mode']):?>
                                        <input type="checkbox" class="switch-select">
                                    <?php endif;?>
                                    <?php echo $option['label'] ?>
                                </label>
                            <?php } ?>
                            <select class="select2" name="<?php echo $option['id'] ?>" id="<?php echo $option['id'] ?>" <?php echo ((isset($option['search-mode']) && $option['search-mode'])?'disabled':'')?>>
                                <?php
                                    for($i=$current_year;$i>=$start;$i--){
                                        ?>
                                        <option value="<?php echo $i ?>" <?php echo ($option_value==$i)?'selected':''; ?>><?php echo $i; ?></option>
                                        <?php
                                    }
                                ?>
                                <option value="<?php echo $start-1?>" <?php echo ($option_value<$start)?'selected':''?>>قبل از <?php echo $start?></option>
                            </select>
                            <?php if (isset($tree['description'])) { ?>
                                <small><?php echo $tree['description'] ?></small>
                            <?php } ?>
                        </div>
                        <?php
                        break;
                    case 'date':
                        if(isset($option['search-mode']) && $option['search-mode']) {
                            ?>
                            <div class="form-group">
                                <?php if (isset($option['label'])) {?>
                                    <label for="<?php echo $option['id'] ?>">
                                        <?php if (isset($option['search-mode']) && $option['search-mode']):?>
                                            <input type="checkbox" class="switch-select" <?php echo $option_value?'checked':''?>>
                                        <?php endif;?>
                                        <?php echo $option['label'] ?>
                                    </label>
                                <?php }?>
                                <div class="form-row">
                                    <div class="col-md-6 px-0">
                                        <input type="text" class="form-control date-picker" placeholder="از" name="<?php echo $option['id'] ?>[from]" value="<?php echo ($option_value && isset($option_value['from']))?$option_value['from']:''?>" <?php echo $option_value?'data-status="1"':'disabled'?>>
                                    </div>
                                    <div class="col-md-6 px-0 my-md-0 my-1">
                                        <input type="text" class="form-control date-picker ml-md-1" placeholder="تا" name="<?php echo $option['id'] ?>[to]" value="<?php echo ($option_value && isset($option_value['to']))?$option_value['to']:''?>" <?php echo $option_value?'data-status="1"':'disabled'?>>
                                    </div>
                                </div>
                            </div>
                            <?php
                        }else{
                            ?>
                        <div class="form-group">
                            <?php
                            if (isset($option['label'])) {
                                ?>
                                <label for="<?php echo $option['id'] ?>">
                                    <?php if (isset($option['search-mode']) && $option['search-mode']): ?>
                                        <input type="checkbox"
                                               class="switch-select" <?php echo $option_value ? 'checked' : '' ?>>
                                    <?php endif; ?>
                                    <?php echo $option['label'] ?>
                                </label>
                            <?php } ?>
                            <?php
                            $std = isset($option['std']) ? $option['std'] : false;
                            $val = ($option_value) ? $option_value : $std; ?>
                            <input type="text" class="form-control ml-md-1 date-picker"
                                   id="<?php echo $option['id'] ?>" <?php echo((isset($option['search-mode']) && $option['search-mode']) ? 'disabled' : '') ?>
                                   name="<?php echo $option['id'] ?>" value='<?php echo ($val) ? $val : '' ?>'>
                            <?php
                            if (isset($option['description'])) {
                                ?>
                                <small class="form-text text-muted"><?php echo $option['description'] ?></small>
                                <?php
                            }
                            ?>
                        </div>
                        <?php
                        }
                        break;
                    case 'transaction-select':
                        $transactions=TransactionController::getTree();
                        if($transactions){
                            $std = $transactions[0]['term_id'];
                            $std = ($option_value) ? $option_value : $std;
                            $term=Term::find($std);
                            if($term){
                                $relate_fields=static::has_relate_fields(TransactionController::class,(intval($std)>0)?$std:$term->term_id);
                                $relate_fields_array=json_decode($relate_fields,true);
                                ?>
                                <div class="form-group">
                                    <?php if (isset($option['label'])) { ?>
                                        <label for="<?php echo $option['id'] ?>">
                                            <?php echo $option['label'] ?>
                                        </label>
                                    <?php } ?>
                                    <select name="<?php echo $option['id'] ?>" id="<?php echo $option['id'] ?>" class="select2 transaction-change">
                                    <?php
                                    foreach ($transactions as $transaction){
                                        ?>
                                        <option value="<?php echo $transaction['term_id'];?>" <?php echo ($transaction['term_id']==$std)?'selected':''; ?>><?php echo $transaction['term_name'];?></option>
                                        <?php
                                    }
                                    ?>
                                    </select>
                                    <div class="related-metas">
                                        <?php
                                        if (!empty($relate_fields_array)){
                                            foreach ($relate_fields_array as $field){
                                                $field_value=($post)?$post->postmetas()->firstWhere('meta_key', $field['id']):false;
                                                $default_value=$term->term_id;

                                                if (isset($field['type']) && $field['type']=='select'){
                                                    if (isset($field['choices'])){
                                                        $field['choices']=json_decode($field['choices'],JSON_UNESCAPED_UNICODE);
                                                    }else{
                                                        $field['choices']=array();
                                                    }
                                                }

                                                $field['related-to']="[".TransactionController::$term_type."][".$default_value."]";
                                                if($crm){
                                                    if (isset($field['crm'])){
                                                        $field=array_merge($field,$field['crm']);
                                                    }
                                                }

                                                echo static::showSetting($field,$field_value?$field_value->meta_value:false,false,true,$post,$crm);
                                            }
                                        }
                                        ?>
                                    </div>
                                </div>
                                <?php
                                $landTypesList=$term->getLandTypesList();
                                if($post){
                                    $land_type=$post->postmetas()->firstWhere('meta_key','land_type');
                                }
                                if(isset($landTypesList) && count($landTypesList)>0){
                                    $transaction_option=array(
                                        'id'=>'land_type',
                                        'type'=>'term-select',
                                        'label'=>'نوع ملک',
                                        'term_type'=>LandTypeController::class,
                                        'filter_by_array'=>$landTypesList,
                                        'std'=>$landTypesList[0],
                                        'class'=>'relate-terms',
                                        'wrapper_class'=>'land_type_props',
                                    );
                                    $option_value=(isset($land_type) && $land_type)?$land_type->meta_value:false;
                                    echo OptionTree::showSetting($transaction_option,$option_value,false,true,$post);
                                }
                            }
                        }
                    break;
                    case 'json':
                        ?>
                        <div class="form-group">
                            <?php
                            if (isset($option['label'])) {
                                ?>
                                <label for="<?php echo $option['id'] ?>">
                                    <?php echo $option['label'] ?>
                                </label>
                            <?php }?>
                            <?php
                            $std = isset($option['std']) ? $option['std'] : false;
                            $val = ($option_value) ? $option_value : $std;
                            $val=(is_array($val))?json_encode($val):$val;?>
                            <input type="text" class="form-control" id="<?php echo $option['id'] ?>" <?php echo ((isset($option['search-mode']) && $option['search-mode'])?'disabled':'')?>
                                   name="<?php echo $option['id'] ?>" value='<?php echo ($val)?$val:'' ?>'>
                            <?php
                            if (isset($option['description'])) {
                                ?>
                                <small class="form-text text-muted"><?php echo $option['description'] ?></small>
                                <?php
                            }
                            ?>
                        </div>
                        <?php
                        break;

                }
                ?>
            <?php
            $html=ob_get_clean();
        }
        return $html;

    }

    public static function addOptionToListItem($option,$list_item,$cnt,$post_meta,$adding_mode=false){
        $html='';
        ob_start();
        $prefix='options';
        if (!$post_meta || !$adding_mode){
            if ($post_meta) $prefix='metas';
            if ($adding_mode) $option['id']=$prefix.'['.$option['id'].']';
        }
        $settings = (isset($option['settings'])) ? $option['settings'] : array();
?>
        <div class="card option-list-item">
            <div class="card-header text-right">
                <div class="btn-group" role="group">
                    <button type="button" class="btn  btn-danger"><i
                            class="fa fa-trash m-1"></i></button>
                    <button type="button" class="btn  btn-secondary"><i
                            class="fa fa-edit m-1"></i></button>
                </div>
            </div>
            <div class="card-body <?php if (!$adding_mode) echo 'd-none';?>">
                <?php if (isset($settings) && !empty($settings)) { ?>
                    <?php foreach ($settings as $setting) { ?>
                        <?php $op_id=($list_item && is_array($list_item) && isset($list_item[$setting['id']]))?$list_item[$setting['id']]:false; ?>
                        <?php $new_setting=$setting;$new_setting['id']=$option['id']."[$cnt]"."[".$setting['id']."]";?>
                        <?php echo self::showSetting($new_setting, $op_id,true,$post_meta); ?>
                    <?php } ?>
                <?php } ?>
            </div>
        </div>
<?php
        $html.=ob_get_clean();
        return $html;
//        $new_setting=$setting;$new_setting['id']=$id."[$num]"."[".$setting['id']."]";
//        self::showSetting($new_setting, false,true,$post_meta);
    }

    public static function getTerms($term_type_class,$post_id=false,$filter_by_array=false){
        $term_type_id=Term_type::where('term_type_name', $term_type_class::$term_type)->first()->term_type_id;
        if ($post_id){
            $post=Post::find($post_id);
            if ($post){
                if($filter_by_array){
                    return $post->terms()->where('term_type',$term_type_id)->whereIn('term_id',$filter_by_array)->get()->sortBy('term_order');
                }else{
                    return $post->terms()->where('term_type',$term_type_id)->get()->sortBy('term_order');
                }
            }
        }else{
            if($filter_by_array){
                return Term::where('term_type',$term_type_id)->whereIn('term_id',$filter_by_array)->get()->sortBy('term_order');
            }else{
                return Term::where('term_type',$term_type_id)->get()->sortBy('term_order');
            }
        }
    }

    public static function has_relate_fields($term_type_class,$term_id){
        $term_type=$term_type_class::$term_type;
        $extra_meta=$term_type_class::$extra_meta;
        $relate_fields=filter_by_value($extra_meta,'id','relate_fields');
        if (!empty($relate_fields)){
            $term_relate_fields=Termmeta::where('term_id',$term_id)->firstWhere('meta_key','relate_fields');
            if ($term_relate_fields)
                return $term_relate_fields->meta_value;
            return false;
        }
        return false;
//        $term_type=Term_type::where('term_type_name', $term_type)->first();
//        if ($term_type){
//            var_dump();
//        }
    }
}
