$( document ).ready(function() {
    console.log( "ready!" );

    const baseUrl = 'http://localhost:3000';

    $('body').on('click', '.back', function() {
        location.href = `${baseUrl}`;
    });
    $('body').on('click', '#templates', function() {
        location.href = `${baseUrl}/pages/templates.html`;
    });
    $('body').on('click', '#images', function() {
        location.href = `${baseUrl}/pages/images.html`;
    });
    $('body').on('click', '#videos', function() {
        location.href = `${baseUrl}/pages/videos.html`;
    });
    $('body').on('click', '#framworks', function() {
        location.href = `${baseUrl}/pages/framworks.html`;
    });
    $('body').on('click', '#links', function() {
        location.href = `${baseUrl}/pages/links.html`;
    });

    $('input[type=file]').change(function () {
        console.log(this.files[0].mozFullPath);
    });

    $('body').on('click', '#save-image', function() {

        var files = $('#filetoupload').prop('files');

        var form = new FormData();
        form.append("file", files[0]);
    
        var settings = {
            "url": `${baseUrl}/api/upload-file`,
            "method": "POST",
            "timeout": 0,
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
        };
    
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    });

    

    





});