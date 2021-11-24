<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class File extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table = 'files';
    protected $primaryKey = 'file_id';
    const UPDATED_AT = null;

    protected $guarded = array();

    public function getFileTypeTextAttribute()
    {
        $mime_types = array (
            "3dmf" => "x-world/x-3dmf",
            "avi" => "video/x-msvideo",
            "ai" => "application/postscript",
            "bin" => "application/x-macbinary",
            "bmp" => "image/bmp",
            "cab" => "application/x-shockwave-flash",
            "c" => "text/plain",
            "class" => "application/java",
            "css" => "text/css",
            "csv" => "text/comma-separated-values",
            "cdr" => "application/cdr",
            "doc" => "application/msword",
            "docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "dwg" => "application/acad",
            "exe" => "application/octet-stream",
            "gif" => "image/gif",
            "gz" => "application/gzip",
            "gtar" => "application/x-gtar",
            "flv" => "video/x-flv",
            "fh4" => "image/x-freehand",
            "help" => "application/x-helpfile",
            "html" => "text/html",
            "ico" => "image/x-icon",
            "imap" => "application/x-httpd-imap",
            "inf" => "application/inf",
            "jpe" => "image/jpeg",
            "js" => "application/x-javascript",
            "java" => "text/x-java-source",
            "latex" => "application/x-latex",
            "m3u" => "audio/x-mpequrl",
            "midi" => "audio/midi",
            "mov" => "video/quicktime",
            "mp3" => "audio/mpeg",
            "mpeg" => "video/mpeg",
            "ogg" => "application/ogg",
            "phtml" => "application/x-httpd-php",
            "pdf" => "application/pdf",
            "pgp" => "application/pgp",
            "png" => "image/png",
            "pps" => "application/vnd.ms-powerpoint",
            "ppz" => "application/mspowerpoint",
            "qxd" => "application/x-quark-express",
            "rar" => "application/x-rar-compressed",
            "ra" => "audio/x-realaudio",
            "ram" => "audio/x-pn-realaudio",
            "rtf" => "text/rtf",
            "spr" => "application/x-sprite",
            "stream" => "audio/x-qt-stream",
            "svg" => "text/xml-svg",
            "sgml" => "text/x-sgml",
            "tar" => "application/x-tar",
            "tiff" => "image/tiff",
            "tgz" => "application/x-compressed",
            "tex" => "application/x-tex",
            "vob" => "video/x-mpg",
            "wav" => "audio/x-wav",
            "wrl" => "x-world/x-vrml",
            "xla" => "application/vnd.ms-excel",
            "xml" => "text/xml",
            "zip" => "application/zip",
            "dotx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
            "docm" => "application/vnd.ms-word.document.macroEnabled.12",
            "dotm" => "application/vnd.ms-word.template.macroEnabled.12",
            "xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "xltx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
            "xlsm" => "application/vnd.ms-excel.sheet.macroEnabled.12",
            "xltm" => "application/vnd.ms-excel.template.macroEnabled.12",
            "xlam" => "application/vnd.ms-excel.addin.macroEnabled.12",
            "xlsb" => "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
            "pptx" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "potx" => "application/vnd.openxmlformats-officedocument.presentationml.template",
            "ppsx" => "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "ppam" => "application/vnd.ms-powerpoint.addin.macroEnabled.12",
            "pptm" => "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
            "potm" => "application/vnd.ms-powerpoint.template.macroEnabled.12",
            "ppsm" => "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
        );

        $types=array_flip($mime_types);

        if (key_exists($this->attributes['file_type'],$types))
            return $types[$this->attributes['file_type']];
        return '';
    }

    public function getUrlAttribute(){
        return url('storage/'.$this->attributes['file_path'].'/'.$this->attributes['file_name']);
    }

    public function getThumbnailUrlAttribute(){
        return url('storage/thumbnails/'.$this->attributes['file_path'].'/'.$this->attributes['file_name']);
    }

    public function getPreviewAttribute(){
        $preview_icons=array(
            'application/pdf'=>'fa fa-file-pdf-o text-danger',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'=>'fa fa-file-word-o text-info',
            'application/octet-stream'=>'fa fa-file-excel-o text-success',
            'application/x-empty'=>'fa fa-file-powerpoint-o text-secondary',
            'text/plain'=>'fa fa-file-text-o text-warning',
            'application/zip'=>'fa fa-file-zip-o text-primary',
        );

        if (preg_match('/^image/',$this->attributes['file_type'])){
            $preview='<img src="'.url('storage/thumbnails/'.$this->attributes['file_path']).'/'.$this->attributes['file_name'].'">';
        }elseif(isset($preview_icons[$this->attributes['file_type']])){
            $preview='<i class="'.$preview_icons[$this->attributes['file_type']].'"></i>';
        }else{
            $preview='';
        }

        return $preview;
    }
}
