/*Ceaciones*/
jQuery(document).ready(function() {
    //console.log('hola');
    //localStorage.clear();
    $(".mix").on("click", function() {
        var videoi = jQuery(this).attr('data');
        var data = syncCAjax(videoi,'enc');
        if (window.localStorage !== undefined) {
            var fields = videoi;
            console.log(fields);
            localStorage.setItem("video", JSON.stringify(data));
            window.location = "preparacion.php";
        } else {
            console.log("Storage Failed. Try refreshing");
        }
        return false;
        //console.log(videoi);
    });
});

function syncCAjax(videoi,vrtCrt) {
    var urlV = 'syncC.php';
    var result;
    jQuery.ajaxSetup({
        async: false
    });
    jQuery.ajax({
        url: urlV,
        dataType: 'json',
        type: 'POST',
        data: {
            video: videoi,
            vrtCrt: vrtCrt
        },
        success: function(dataResult) {
            console.log(dataResult);
            result = dataResult;
        },
        error: function(result) {
            console.log(result, 'error');
        }
    });
    return result;
}