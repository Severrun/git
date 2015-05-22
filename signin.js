var sign = function(pathname)
{
    var string
    if (pathname == "registration" || pathname== "404" || pathname=="regcomp") string = "";
    else string = '<body>'+
        '<div class = "topline_full">'+
            '<div class = "w1280 rel">'+
                '<div class = "top_block">'+
                    '<div class="main_entreg_block">'+
                        '<a class="fright" href="registration">Registration</a>	'+
                        '<span>Sign in</span>'+
                    '</div>'+
                    '<div class="log_block">'+
                        '<form action="index" method="post">'+
                        '<div>'+
                            '<input name="Login" id="login" type="Text" class="" placeholder="Login">'+
                        '</div>'+
                        '<div class="rel">'+
                            '<input name="password" type="password" class="" placeholder="Password">'+
                        '</div>'+
                        '<div class="enterblock">'+
                            '<input type="submit" class="btn onlyblue" value="Sign in">'+
                        '</div>'+
                        '</form>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</body>'
    return string;
};
module.exports = sign;




















