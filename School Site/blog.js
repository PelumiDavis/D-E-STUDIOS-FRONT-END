//blog.js

var subjects = ['dresses', 'designs', 'tux', 'sony', 'bose', 'hewlet packard', 'computers', 'cars', 'U.S', 'hisense', 'lifestyle', 'parenting', 'apple', 'ovens',
'amazon', 'smart home tech', 'enterpreneurship', 'lenovo', 'programming', 'singing', 'travel', 'transportation', 'cooking', 'entertainment']

$("document").ready(function(){
    $('.ip').autocomplete({
        source: subjects
    });
    $('.spini').css({'visibility':'hidden', 'color':'lightblue'});

    $('.go').click(function(){
    $('.go').css({'visibility':'hidden'});
    $('.spini').css({'visibility':'visible'});      
    });

$('.ip').click(function(){
    $('.spini').css({'visibility':'hidden'});
    $('.go').css({'visibility':'visible'});
})
})


